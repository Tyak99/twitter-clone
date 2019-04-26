/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';

describe('API', () => {
    it('Should return JSON responses', (done) => {
        request(app)
            .get('/api')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.include.keys('message');
                expect(res.body.message).to.equal('Welcome to Twitter Clone API');

                done(err);
            });
    });

    it('Should return JSON responses', (done) => {
        request(app)
            .get('/api/v1')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.include.keys('message');
                expect(res.body.message).to.equal('Welcome to version 1 of Twitter Clone API');

                done(err);
            });
    });

    describe('404', () => {
        it('should return error for page not found', (done) => {
            request(app)
                .get('/api/pagenotfound')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(409);
                    expect(res.body).to.include.keys('message');
                    expect(res.body.message).to.equal('Where Are You Going? Page Not Found');

                    done(err);
                });
        });
    });
});