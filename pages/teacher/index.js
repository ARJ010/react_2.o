import {useState} from "react";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient("https://wmkphgiwllorbprhtydd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta3BoZ2l3bGxvcmJwcmh0eWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MTkyNTAsImV4cCI6MjAwMDQ5NTI1MH0.ROG3Qe7-6OGED402iIxlnwDCSpymbIbKHW-2b4m4lyM");



export default function Teacher(){

  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [marks, setMarks] = useState("");
  const [message,setMessage] = useState({});

 function updateStudentId(event){
   setStudentId(event.target.value);
 }
 function updateStudentName(event){
   setStudentName(event.target.value);
 }
 function updateMarks(event){
   setMarks(event.target.value);
 }

 async function storeStudentDetails() {
     const response = await supabase.from("students").insert({
       student_id: studentId,
       student_name: studentName,
       marks: marks,
     });
    console.log(response);
   if (response.status == 201) {
     setMessage("Student details stored successfully");
     setStudentId("");
     setStudentName("");
     setMarks("");
   } else {
     setMessage("Student details could not be stored");
   }
 }

  return(

    <div>
    <h1>Teacher Window</h1>
        <input
          type="text"
          onChange={updateStudentId}
          value={studentId}
          placeholder = "Student ID"
        />
        <input
        type="text"
        onChange={updateStudentName}
        value={studentName}
        placeholder = "Student Name"
        />
        <input
        type="text"
        onChange={updateMarks}
        value={marks}
        placeholder = "Marks"
        />
        <input
          type="Button"
          onClick={storeStudentDetails}
          defaultValue = "Submit"
        />

    </div>

  );
}

//yedhukrishnan991@gmail.com
