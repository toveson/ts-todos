import React from "react";
import "./App.css";

// let name: string = 'Trever';
let name: string;
//  this is also valid syntax
// let name: string = 'Trever';
//  the | allows the variable to be different types. This is called a union in TypeScript.
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
type School =
{
  name: string;
  yearStarted: number,
  yearFinished: number,
  graduated: boolean,
  // question mark makes the field optional
  major?: string
}

name = 'Trever';
// age = 34;
age = 'thirty-four';
isStudent = true;
hobbies = ['snowboarding', 'gaming', 'reading', 'coding']

let school : School = {
  name: 'U of U',
  yearStarted: 2020,
  yearFinished: 2021,
  graduated: true,
  major: 'web development'
}

function App() {
  return (
    <>
      <div>Hello {name}!</div>
      <div>You are {age} years old.</div>
      <div>
        {isStudent ? `${name} is a student.` : `${name} is not a student`}
      </div>
      <div>
        {name}'s hobbies are 
        {hobbies.map((hobby, index) =>
          <ul>
            <li key={index} >
              {hobby}
            </li>
          </ul>
        )}
      </div>
      <div>
        {name} began attending {school.name} in {school.yearStarted}.
        {school.major ? ` Majoring in ${school.major}` : ' No major has been chosen'}
        {' and '} 
        {school.graduated ? `graduated in ${school.yearFinished}.` : 'is still working towards graduating.'}
      </div>
      {/* <div></div> */}
      {/* <div></div> */}
    </>
  );
}

export default App;
