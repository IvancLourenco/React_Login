const request = require("supertest")
const app = require('../app')

describe('Testing App.js', () => {
    test("It should response the GET method with 200 and 'Olá Mundo'", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('Olá Mundo!')
    })
})