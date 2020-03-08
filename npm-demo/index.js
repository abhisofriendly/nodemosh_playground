const express = require('express')
const app = express();
const Joi = require('joi')

app.use(express.json());
const courses=[
    {    id:1,name:'course1'   },
    {    id:2,name:'course2'   },
    {    id:3,name:'course3'   }
] 
app.get('/',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,5])
})

app.post('/api/courses',(req,res)=>{
    const schema = {
        name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    console.log(result);

    // if(!req.body.name || req.body.name.length < 3){
    //     res.status(404).send('input is not allowed with length less of 3')
    // }
    if(result.error){
        res.status(400).send(result.error);
    }
    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id',(req,res)=>{
    // look up the course
    // if not existing return 404
    const course=courses.find(c=>c.id == parseInt(req.params.id))
    if(!course) res.status(404).send('the course does not exist in the database')

    //validate
    //if invalid return 400
    const schema={
        name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }

    //update course
    // return the updated course
    course.name = req.body.name
    res.send(course);

})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id==parseInt(req.params.id));
    if(!course) res.status(404).send('The course does not exist')
    res.send(course)
})

//PORT
const port = process.env.PORT || 3000
app.listen(3000,()=>{
    console.log(`listening on the port ${port}`)
})