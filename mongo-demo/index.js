const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{
        console.log('connected to mongoDB.. ')
    })
    .catch(()=>{
        console.log('could not connect to mongoDB..')
    })

const courseSchema = new  mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});

// Classes,Objects
const Course = mongoose.model('Course',courseSchema);
async function createCourse(){
    const course = new Course({
        name:'Nodejs course',
        author:'Mosh',
        tags:['node','abhishek'],
        isPublished:true
    })
    
    const result = await course.save();
    console.log(result);
}

async function getCourses(){
    const courses = await Course.find({
        author:'Mosh',
        isPublished:true
    })
    .limit(10)
    .sort({name:1});
    console.log(courses);
    console.log(courses.length)
}

//createCourse();
getCourses();
