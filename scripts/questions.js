//common job titles for programming jobs
//analyst, mobile app developer, full stack developer, front/back-end developer, graphics designer
//managers, intern, tester

//

//--------------------------------------------

const employeeQuestions = [
    {
        type:'list',
        name:'jobTitle',
        message:'What is your job title?',
        choices: [
            'Manager',
            'Graphics Designer',
            'Analyst',
            'Mobile App Developer',
            'Full-Stack Developer',
            'Front-end Developer',
            'Back-End Developer',
            'Intern',
            'Tester'
        ]
    },
    {
        type:'input',
        name:'name',
        message:'What is your name?'
    },
    {
        type:'input',
        name:'id',
        message:'What is your employee id?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    }

]

const managerQuestions = [
    {
        type:'input',
        name:'officeNumber',
        message:'What is your office number?'
    }
]

const internQuestions = [
    {type:'input',
    name:'school',
    message:'What school do/did you attend?'}
]

const githubQuestions = [
    {
        type:'input',
        name:'github',
        message:'Whats is your GitHub username?'
    }
]

