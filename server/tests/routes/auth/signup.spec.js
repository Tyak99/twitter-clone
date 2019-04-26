/* eslint-disable no-undef */
import request from 'supertest';
import { expect } from 'chai';
import mockData from '../../utils/mockData';
import app from '../../../src/app';

const url = '/api/v1/auth/signup';
const {
    validDetails, emptyDetails, missingFields, mismatchPassword, wrongEmailFormat
} = mockData.signup;

describe('Signup()', () => {
    describe('###Right Input', () => {
        it('should register new user', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.a('object');

                    done(err);
                });
        });

        it('should return some user fields', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.body.data.user).to.include.keys('name');
                    expect(res.body.data.user).to.include.keys('username');
                    expect(res.body.data.user).to.include.keys('email');
                    expect(res.body.data.user).to.include.keys('active');

                    done(err);
                });
        });

        it('should return specific response (user, message)', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.body).to.include.keys('message');
                    expect(res.body).to.include.keys('data');
                    expect(res.body.data).to.include.keys('user');

                    done(err);
                });
        });

        it('should return profile response', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.data.user).to.include.keys('profile');
                    expect(res.body.data.user.id).to.equal(res.body.data.user.profile.user_id);

                    done(err);
                });
        });

        it('should return user token', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.data).to.include.keys('token');

                    done(err);
                });
        });
    });

    describe('###Wrong Input', () => {
        it('should return error for empty fields', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...emptyDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('name');
                    expect(res.body.errors).to.include.keys('username');
                    expect(res.body.errors).to.include.keys('email');

                    done(err);
                });
        });

        it('should return error message for empty fields', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...emptyDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.errors.name.msg).to.equal('Name field cannot be left blank');
                    expect(res.body.errors.username.msg).to.equal('Username field cannot be left blank');
                    expect(res.body.errors.email.msg).to.equal('Email field must be specified');

                    done(err);
                });
        });

        it('should return error missing fields', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...missingFields })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('name');
                    expect(res.body.errors).to.include.keys('username');
                    expect(res.body.errors.name.msg).to.equal('Name must be specified');
                    expect(res.body.errors.username.msg).to.equal('Username must be specified');

                    done(err);
                });
        });

        it('should return error for mismatch password fields', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...mismatchPassword })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('confirm_password');
                    expect(res.body.errors.confirm_password.msg).to.equal('Password dont\'t match');

                    done(err);
                });
        });

        it('should return error for wrong email format', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...wrongEmailFormat })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('email');
                    expect(res.body.errors.email.msg).to.equal('Please input valid email address');

                    done(err);
                });
        });
    });
});
