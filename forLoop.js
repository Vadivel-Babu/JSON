async function getCountry(){
  const data = await fetch("https://restcountries.com/v3.1/all");
  const result = await data.json();

  // for (var i = 0; i < result.length; i++) {
  //   console.log(result[i]);
  // }

  // for (let index in result){
  //   console.log(result[index].region)
  // }

  // for(let obj of result){
  //   console.log(obj.subregion);
  // }

  // result.forEach(e => {
  //   console.log(e.population);    
  // });
}
getCountry();

// resume data in JSON format
[{
  "personalInformation": {
    "firstName": "Vadivel",
    "lastName": "Babu",
    "address": "73/44 -11 JK illam",
    "phone": "+91 9488321578",
    "email": "vadivelbabu31@email.com",
    "linkedin": "http://www.linkedin.com/in/vadivel-babu",
    "github": "https://github.com/Vadivel-Babu"
  },
  "education": [
    {
      "degree": "Master of Science in Mechanical Engineering",
      "university": "Riga Technical University",
      "graduationYear": 2021
    }
  ],
   "skills": [
    "JavaScript",
    "HTML/CSS",
    "React",
    "Redux",
    "Git",
    "SQL",
    "Problem-Solving",
    "Team Collaboration"
  ],
  "languages": [
    "Tamil (Fluent)",
    "English (Intermediate)"
  ],
}]