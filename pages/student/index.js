import {useState} from "react";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient("https://wmkphgiwllorbprhtydd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta3BoZ2l3bGxvcmJwcmh0eWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MTkyNTAsImV4cCI6MjAwMDQ5NTI1MH0.ROG3Qe7-6OGED402iIxlnwDCSpymbIbKHW-2b4m4lyM");

export default function Student()
{

  const [studentid, setStudentId] = useState("");
  const [studentDetails, setStudentDetails] = useState({});

 function studentUpdtes(event){
   setStudentId(event.target.value);
 }

  async function getStudentDetails(){
    const {data} = await supabase.from("students").select().eq("student_id", studentid).single();
    setStudentDetails(data);
  }

  return(
    <div>
      <h1><u>Student Details</u></h1>
        <input
          type="text"
          onChange={studentUpdtes}
          placeholder = "Student ID"
        />
        <input
          type="Button"
          onClick={getStudentDetails}
          defaultValue = "search"
        />
        {studentDetails ?<div>{studentDetails.student_name} got {studentDetails.marks}</div>:null}

    </div>
  );
}
