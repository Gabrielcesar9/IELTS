import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import validator from 'validator'
import  { Redirect } from 'react-router-dom'

const EmailForm = ()=>{
    const [dones, setDones] = useState(
        {
        
    })

    window.onbeforeunload = () =>{alert('Your work will be lost')}
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const onSubmit = data => {
        if(validator.isEmail(data.email)){alert("Nice Email");
        setDones({reading:false,
            listening:false,
            writing:false,
            answers_reading:[],
            answers_listening:[],
            answers_writing:[],
            email:data.email})
         //history.push({pathname:props.path,Dones})
        }
        else{alert("Please provide a valid E-mail");}    
    }
    return(
        <div>
            <div className='background'></div>
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" style={{width:'80%', background:'white', border:'solid gray', display:'inline'}} className = "email" placeholder='E-mail' {...register("email")} />
                    <input type="submit" style={{width:'fit-content', padding:'3%', float:'right',}} className="confirm" value={"Confirm"}/>
                </form>
            </div>
        {dones.email?<Redirect to={{pathname: '/Home/ChooseTest', state:dones}}/>:console.log('nice',dones)}
        </div>
        
        
        
        
        
            
    )

}

export default EmailForm