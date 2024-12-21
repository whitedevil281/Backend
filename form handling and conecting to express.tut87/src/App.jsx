import { useState } from 'react'
import { useForm,} from "react-hook-form"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm()

  const delay = (d) => {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res("submited")
      }, d*1000);
    }
    )
  }
  
  const onSubmit= async (data) => {
    console.log(data);
    
    // await delay(4)
    let req = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await req.text()
    console.log(data ,response)
  // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }


  return (
    <>
    {isSubmitting && <div>Loading.....</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className='forms'>
        <input type="email"   {...register("email",{required:{value:true,message:"This field is requeired"}})}/>
        {errors.email && <div>{errors.username.message} </div>}
        <input type="password"   {...register("pass",{required:true,minLength:{value:5,message:"Minimum length is 5"},maxLength:{value:10,message:"Maximum length is 10"}})}/>
        {errors.pass && <div>{errors.pass.message} </div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </form>

    </>
  )
}

export default App
