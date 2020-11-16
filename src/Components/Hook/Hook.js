import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
const Hook = () => {
    // const [students,sestudents]=useState({})
    const history=useHistory()
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {console.log(data)


    fetch("https://morning-everglades-50205.herokuapp.com/addstudents",{

    method: "POST",
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(data)

    })

    .then(response=>response.json())

    .then(result=>{console.log(result,"done")
  

  
  })

  history.push("/success")

};

 






    return (
<div>
  <marquee style={{color:"blue",fontSize:"30px",marginBottom:"50px"}} behavior="scroll" direction="right">রেজিষ্ট্রেশন চলছে                        রেজিষ্ট্রেশন চলছে</marquee>

<h3 style={{margin:"50px 50px",color:"red"}}>রেজিষ্ট্রেশন করতে নিচের ফর্ম এ তথ্য দিয়ে সাবমিট করুন
</h3>

<h4 style={{margin:"10px 50px"}}>কোন কিছু ভুল হলে পরে রেজিস্টেশন বাতিল করা হবে</h4>

<div>

</div>

        <div style={{width:"400px",marginLeft:"100px",marginTop:"50px",marginBottom:"50px"}}>
              <form onSubmit={handleSubmit(onSubmit)}>

 
<div className="form-group">
    
<input placeholder="আপনার নাম" className="form-control" required name="name" ref={register({ required: true })} />

  {errors.name && <span>This name is required</span>}<br></br>
</div>
<div className="form-group">
          
<input placeholder="আপনার জিমেইল" className="form-control"required name="email" ref={register({ required: true })} />

{errors.email && <span>This email is required</span>}<br></br>

</div>
<div className="form-group">
<input placeholder="আপনার ফোন নাম্বর" className="form-control"required name="phone" ref={register({ required: true })} />

  {errors.number && <span>This number is required</span>}<br></br>
</div>
<div className="form-group">
<input placeholder="আপনার ফেসবুক আইডি লিঙ্ক" className="form-control"required name="link" ref={register({ required: true })} />

  {errors.number && <span>This link is required</span>}<br></br>
</div>
<div className="form-group">
<select name="Category" ref={register({ required: true })}>
  <option value="Web design and development">Web design and development</option>
  <option value="Digital Marketing">Digital Marketing</option>
 
  
  </select>
</div>
<div className="form-group">
<select name="gender" ref={register({ required: true })}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="othrs">Others</option>
  
  </select>
</div>

<input type="submit" />
</form>
        </div>



</div>
    );
};

export default Hook;