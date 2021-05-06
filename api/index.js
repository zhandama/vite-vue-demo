const { api, delay, mock, resp } = require('apite')
// JSON
api.get('/json', { code:'00', msg: 'json'})

// POST
api.get('/list', ctx=> {  
    return mock({
        "list|4":[{
            title:'@cparagraph',
            "answer|4":[
                {
                    id: '@id',
                    number: '@int(5,9)',
                    name: '@name',
                    cname: '@cname',
                    date: '@dateTime',
                    reg: /\w{10}/
                }
            ]
        }]
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

api.post('/childrenList', ctx=> {  
    return mock({
        code:200,
        success:true,
        "list|2":[
            {
                id: '@id',
                studyNo: '@int(0,40)',
                class: '@int(1,9)'+'班',
                grade: '@int(1,9)'+'年级',
                school: '@ctitle(2)'+'小学',
                sex: '@int(0,1)',
                name: '@cname',
                date: '@dateTime',
                reg: /\w{10}/
            }
        ]
    })
})

api.get('/search', ctx=> {
    return mock({
        code:200,
        success:true,
        "list|10":[
            {
                id: '@id',
                title: '@csentence',
                form: '@ctitle',
                date: '@dateTime'
            }
        ]
    })
})

api.get('/classList', ctx=> {
    return mock({
        code:200,
        success:true,
        "list|20":[
            {
                id: '@id',
                title: '@csentence',
                form: '@ctitle',
                url:'123123.ppt',
                date: '@dateTime'
            }
        ]
    })
})

api.get('/homedetail', ctx=> {
    return mock({
        code:200,
        success:true,
        content:{
            id: '@id',
            title: '@csentence',
            form: '@ctitle',
            date: '@dateTime',
            cont:'@cparagraph'
        }
    })
})



api.post('/delete', ctx=> {
    // sleep(2000)
    return mock({
        code:200,
        success:true,
        message:'删除成功',
    })
})

function sleep(delay) { // 阻断
    var start = (new Date()).getTime();
    while((new Date()).getTime() - start < delay) {
        continue;
    }
}