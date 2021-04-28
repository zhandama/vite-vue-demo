const { api, delay, mock, resp } = require('apite')

// JSON
api.get('/json', {  msg: 'json'})

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
