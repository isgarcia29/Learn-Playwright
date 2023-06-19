import { test, expect } from '@playwright/test'

test.describe.parallel("API Testing", () => {
    const baseUrl = 'https://reqres.in/api'

    test("Simple API Test Get Request", async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)
        
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
        expect(responseBody.support.text).toBe('To keep ReqRes free, contributions towards server costs are appreciated!')

        //console.log(responseBody)   
    })

    test("Simple API Test POST Request Success", async ({request}) => {
        const response = await request.post(`${baseUrl}/users`, {
            data:{
                'id': '1000',
                'name': 'Israel',
                'job': 'QA'

            },
        })
        
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(201)
        expect(responseBody.id).toBe('1000')
        expect(responseBody.name).toBe('Israel')
        expect(responseBody.job).toBe('QA')
        expect(responseBody.createdAt).toBeTruthy()

        //console.log(responseBody)
    })

    test("Simple API Test POST Request Fail", async ({request}) => {
        const response = await request.post(`${baseUrl}/login`, {
            data:{
                email:'eve.holt@reqres.in',
            },
        })
        
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe('Missing password')


        //console.log(responseBody)
    })

    test("Simple API Test PUT Request Success", async ({request}) => {
        const response = await request.put(`${baseUrl}/users/2`, {
            data:{
                name: 'new name',
                job: 'new job'

            },
        })
        
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('new name')
        expect(responseBody.job).toBe('new job')
        expect(responseBody.updatedAt).toBeTruthy()

        //console.log(responseBody)
    })

    test("Simple API Delayed response", async ({request}) => {
        const response = await request.get(`${baseUrl}/users?delay=8`)
        expect(response.status()).toBe(200)

    })

    test("Simple API Test3", async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)

        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)

        //console.log(responseBody)   

    })

    
    test("Simple API Test4", async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)

        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)

        //console.log(responseBody)   

    })

    
    test("Simple API Test5", async ({request}) => {
        const response = await request.get(`${baseUrl}/users/2`)

        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)

        //console.log(responseBody)   

    })

})