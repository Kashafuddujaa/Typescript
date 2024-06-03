import inquirer from "inquirer";

class Student {
    name: string
    constructor(n:string){
        this.name = n;
    }
}

class Person {
    students: Student[] = []
    addStudent(obj: Student){
        this.students.push(obj);
    }
}

const persons = new Person()


const programStart = async (persons: Person)=>{

    do{

      console.log("Welcome!");
       const ans = await inquirer.prompt([
        {
          name: "select",
          type: "list",
          message: "Whom would you like to interact with?",
          choices: ["staff", "student","exit"]
        }
       ])
       if(ans.select == "staff"){
        console.log("Feel free to ask any questions from staff");
        
       }
       else if (ans.select == "student"){
        const ans = await inquirer.prompt([
            {
                name: "student",
                type: "input",
                message: "Enter the student's name",

            }
        ])

        const student = persons.students.find(val => val.name == ans.student)

        if(!student ){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello I am ${name.name}. Nice to meet you!`);
            console.log("New Student added");
            console.log("Current Student List:");
            console.log(persons.students);  
         } else {
            console.log(`Hello! I am ${student.name}.Glad to see you again.`);
            console.log("Existing students list:");
            console.log(persons.students);
         }
       } else if (ans.select == "exit"){
        console.log("Thank you for using our service. Have a nice day!")
       }
    } while(true)
}

programStart(persons);