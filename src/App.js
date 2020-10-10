import React from "react";
import "./styles.css";
import StudentDetails from "./components/StudentDetails";
import StudentList from "./components/StudentList";
export default function App() {
  const studentLists = [
    {
      name: "Mukul",
      id: 1,
      hobby: "Singing",
      aboutMe: "I love to Code"
    },
    {
      name: "Janani",
      id: 2,
      hobby: "Drawing",
      aboutMe: "I love to Code"
    },
    {
      name: "Ambani",
      id: 3,
      hobby: "Timepass",
      aboutMe: "I love to Code"
    },
    {
      id: 4,
      name: "Mrigank",
      hobbies: "Playing Football , Coding",
      aboutMe: "I love to Code"
    },
    {
      id: 5,
      name: "Axel",
      hobbies: "Playing Football , Dancing",
      aboutMe: "I love to dance"
    },
    {
      id: 6,
      name: "Mark",
      hobbies: "Playing Football , Singing",
      aboutMe: "I love to play"
    },
    {
      id: 7,
      name: "Jude",
      hobbies: "Playing Football , Reading",
      aboutMe: "I love to Read"
    }
  ];
  const [studentList, SetStudentList] = React.useState(studentLists);

  const [studentIndex, setStudentIndex] = React.useState(0);

  const handleClick = (index) => setStudentIndex(index);

  const handleChange = (event) => {
    const filteredList = studentLists.filter((student) =>
      student.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    SetStudentList(filteredList);
    setStudentIndex(-1);
  };

  return (
    <div className="App">
      <StudentList
        studentList={studentList}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      {studentIndex !== -1 && (
        <StudentDetails student={studentList[studentIndex]} />
      )}
    </div>
  );
}
