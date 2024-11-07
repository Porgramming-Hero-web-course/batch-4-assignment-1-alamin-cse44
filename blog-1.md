# The significance of union and intersection types in Typescript.

Union & Intersection are two significant features in Typescript. They have different meanings for different types. First, these are very useful for making our code simpler. Second, we can define what types of these should be considered in our code. Apart from that, there are many advantages to using union and intersection. Some of these features are described in below.

### Union 
What does the union mean in Typescript? It is very easy to say that when we have different types of types / objects, but we don't know the exact type of an object then we can use the union. Suppose, we have data of a school where user are three types like students, teachers and administrators. Now, these three types have their own properties some properties maybe same for all the three types but properties are varied between them. However, for many purposes we need data of any type of them and there is a function that returns the data. That means, same function is defined to get the data of all three types but their properties are different. At this point we can use the union to simply get the data of any of them.

### Example: 

type Student = {
    id: number,
    name: string,
    subject: string,
    section: string,
}

type Teacher = {
    id: number,
    name: string,
    skills: string[],
    designation: string;
}

type Administrator = {
   name: string
   designation: string,
   department: string
}

const User = Student | Teacher | Administrator;

* note: we have to define union sign as "|". 

const getInformation = (user: User): User => {
    return User;
}

In the above example, I have defined the identical types of users and a function called getInformation. So, if I want to get information about a particular user, I can use getInformation with the realted properties. However, properties are not same in the three types but our function will understand the exact type by checking the properties of the defined types. Some inputs are written below.

const student : Student = {
    id: 111,
    name: "Asgor Ali",
    subject: "cse",
    section: "B"
}

const teacher: Teacher = {
    id: 222,
    name: "Abu jafor",
    skills: ["maths", "physics"],
    designation: "Associate Head"
}

const administrator : Administrator = { 
    name: "Faruk",
    designation: "DAO",
    department: "cse",
}

getInfromation(student); // student data will show here
getInfromation(teacher); // teacher data will show here
getInfromation(administrator);// administrator data will show here


### Intersection: 
We already know about the union that returns the specified data of a user. We saw that three types of users have their different data and they are individual. That means student is not a teacher or an administrator. Same things for teacher and administrator. However, if we think about a developer then what we know? We know that the developer could be a frontend developer or a backend developer or a fullstack developer. The technologies are different but one can have the all relevant technologies. So, we con now define another three types of type. 

type FrontendDeveloper = {
    skills: string[],
    position1: "frontend developer",
}

type BackendDeveloper = {
    skills: string[],
    position2: "backend developer",
    next_level: "Team lead",
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

* note: intersection sign is "&". 

const getDeveloper = (developer: FullstackDeveloper): FullstackDeveloper => {
    return developer;
}


const fullStackDeveloper: FullStackDeveloper = { 
    skills: ["nextJS", "TypeScript","nodeJS", "expressJS"],
    position1: "frontend developer",
    position2: "backend developer",
    next_level: "Team lead",
}

getDeveloper(fullStackDeveloper); 

This function will give the full information of the fullStackDeveloper.

So, overall we understand that if users have diffrent different properties of types and should behave differently then we should use union, otherwise, if we think a user can hold all the properties of different types then we should use intersection. 


