/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import sinon from 'sinon';
import { assert, expect } from 'chai';
import trim from '../../src/middlewares/trim';

const req = {
    body: {
        first: '      ballon',
        second: 'goal         ',
        third: '   passion   ',
    },
};

const res = {
    json: message => ({
        message
    }),
    status: status => ({
        json: message => ({
            status,
            message
        })
    }),
};

const next = sinon.spy();

describe('Trim', () => {
    it('should trim and return trimmed values', (done) => {
        trim(req, res, next);

        expect(req.body).to.deep.equal({
            first: 'ballon',
            second: 'goal',
            third: 'passion',
        });

        assert(next.called);
        done();
    });
});
