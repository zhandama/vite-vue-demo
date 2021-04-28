const { api, delay, mock, resp } = require('apite')

// JSON
api.get('/json', { code:'00', msg: 'json'})

// POST
api.get('/list', ctx=> {  
    return mock({
        "list|3":[
            {
                id: '@id',
                number: '@int(5,9)',
                name: '@name',
                cname: '@cname',
                date: '@dateTime',
                reg: /\w{10}/
            }
        ]
    })
})

// POST
api.post('/post', ctx=> {  
    return mock({
        id: '@id',
        number: '@int(5,9)',
        name: '@name',
        cname: '@cname',
        date: '@dateTime',
        reg: /\w{10}/
    })
})
