const { transcode } = require('buffer')
const express = require('express')
const app = express()
const port = 8888

const fs = require('fs')

app.set('view engine', 'pug')

app.use('/static', express.static('public'))
app.use(express.urlencoded({extended:false}))

//localhost:8888
app.listen(port, error => {
    if (error) console.log(error)

    console.log('Server running 8888')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/home', (req, res) => {
    res.render('home')
})

//create
app.post('/create', (req, res) => {
    const Name = req.body.Name
    const Date = req.body.Date
    const Location = req.body.Location
    const Description = req.body.Description

    if(Name.trim()==='' && Date.trim()=== '' && Location.trim()=== '' && Description.trim()=== ''){
        res.render('create', {error:true})
    }else{
        fs.readFile('./data/Events.json', (err, data)=>{
            if (err) throw err
            
            const events=JSON.parse(data)

            events.push({
                id : id (),
                Name : Name,
                Date : Date,
                Location : Location,
                Description : Description 
            })

            fs.writeFile('./data/Events.json', JSON.stringify(events), err =>{
                if (err) throw err

                res.render('create', {success:true})
            })
        })
    }
})


app.get('/events', (req, res)=>{
    fs.readFile('./data/Events.json', (err, data)=>{
        if(err) throw err

        const events = JSON.parse(data)

        res.render('events', {events : events})
    })
}) 

app.get('/events/:id', (req, res) =>{
    const id = req.params.id

    fs.readFile('./data/Events.json', (err, data)=>{
        if(err) throw err

        const events = JSON.parse(data)
        const event = events.filter(event => event.id == id)[0]
        res.render('information', { event : event})

    })
})

app.get('./data/Events.json', (req, res) => {
    fs.readFile('./data/Events.json', (err, data)=>{
        if(err) throw err

        const events = JSON.parse(data)
        res.json(events)

    })
})

//Delete-btn
app.get('/:id/delete', (req, res) => {
    const id =req.params.id

    fs.readFile('./data/Events.json', (err, data) => {
        if (err) throw err

        const events = JSON.parse(data)
        const filteredEvents = events.filter (event => event.id != id)

        fs.writeFile('./data/Events.json', JSON.stringify(filteredEvents), (err) => {
            if (err) throw err

            res.render('events', {events : filteredEvents, deleted :true})
        })
    })
})

//Update
app.get('/:id/Update', (req, res) => {
    const id = req.params.id
    
    fs.readFile('./data/Events.json', (err ,data) => {
        if (err) throw err

        const events = JSON.parse(data)
        const event = events.filter(event => event.id == id)[0]

        const eventIdx = events.indexOf(event)
        const spliceevent = events.splice(eventIdx, 1)[0]

        spliceevent.done = true
        events.push(spliceevent)

        fs.writeFile('./data/Events.json', JSON.stringify(events), (err) => {
            if (err) throw err

            res.render('events', {events : events})
        })
    })
})

//creating random id
function id () {
    return '_' + Math.random().toString(36).substr(2, 9);
}