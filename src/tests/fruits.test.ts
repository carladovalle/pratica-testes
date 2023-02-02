import supertest from 'supertest';
import app from "../app";

beforeAll(() => { items.push('abacate'); });

describe('GET /fruits', () => {
    it('should respond with status 200 when fruits were shown', async () => {
        const result = await supertest(app)
            .get('/fruits')
        expect(result.status).toEqual(200);
    })
})

describe('GET /fruits/:id', () => {
    it('returns 404 for invalid input', async () => {
        const result = await supertest(app)
            .get('/fruits/:id')
        expect(result.status).toEqual(404);
    })
})

describe('POST /fruits', () => {
    it('returns 204 for duplicate input', async () => {
        const result = await supertest(app)
            .post('/fruits')
            .send({ item: 'abacate' })
        expect(result.status).toEqual(204);
    })
})