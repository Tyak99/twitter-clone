/* eslint-disable no-undef */
import request from 'supertest';
import { expect } from 'chai';
import { it } from 'mocha';
import mockData from '../../utils/mockData';
import app from '../../../src/app';

const url = '/api/v1/auth/login';
const {
    validDetails, invalidDetails, emptyFields
} = mockData.login;

describe('Login', () => {
    describe('###Right input', () => {
        it('should login a valid user', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include.keys('data');
                    expect(res.body.data).to.include.keys('user');

                    done(err);
                });
        });

        it('should return a valid user\'s token', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.data).to.include.keys('token');

                    done(err);
                });
        });

        it('should return a user\'s data', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...validDetails })
                .end((err, res) => {
                    expect(res.body.data.user).to.include.keys('id');
                    expect(res.body.data.user).to.include.keys('name');
                    expect(res.body.data.user).to.include.keys('username');
                    expect(res.body.data.user).to.include.keys('email');
                    expect(res.body.data.user).to.include.keys('created_at');

                    done(err);
                });
        });
    });

    describe('###Wrong input', () => {
        it('should return error for invalid details', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...invalidDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(401);
                    expect(res.body).to.include.keys('error');

                    done(err);
                });
        });

        it('should return error message for wrong details', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...invalidDetails })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(401);
                    expect(res.body.error).to.equal('Username/Password do not match');

                    done(err);
                });
        });

        it('should return error for empty values', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...emptyFields })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('username');
                    expect(res.body.errors).to.include.keys('password');

                    done(err);
                });
        });

        it('should return error messages for empty values', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ ...emptyFields })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.errors.username.msg).to.equal('Username must be between 2 to 144 characters');
                    expect(res.body.errors.password.msg).to.equal('Please enter a valid password.');

                    done(err);
                });
        });

        it('should return error for invalid key', (done) => {
            request(app)
                .post(url)
                .set('accept', 'application/json')
                .send({ })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body).to.include.keys('errors');
                    expect(res.body.errors).to.include.keys('username');
                    expect(res.body.errors).to.include.keys('password');
                    expect(res.body.errors.username.msg).to.equal('Username must be specified');
                    expect(res.body.errors.password.msg).to.equal('Password field is required');

                    done(err);
                });
        });
    });
});
