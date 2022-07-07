
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import "../Choose.css"

const ChooseTest = () => {
    window.onbeforeunload = () =>{alert('Your work will be lost')}
    const history = useHistory()
    const [test, setTest] = useState('listening');

    var Dones = history.location.state
    console.log('This is Dones',Dones, 'Email',Dones.email)
    function handleChange(selected){
        setTest(selected)
    }

    useEffect(()=>{
        const tests = ['listening','reading','writing'];
        document.getElementById(test).style.border='solid red';
        for(let i=0;i<tests.length;i++){if(tests[i]!=test){console.log(tests[i]);document.getElementById(tests[i]).style.border='solid rgb(20, 184, 196)'}}
    })

    return(
        <div>
            <div className='background'></div>
            <div className="testContainer">
                <div className='test noselect' id='listening' onClick={()=>{handleChange('listening')}}><label>Listening</label></div>
                <div className='test noselect' id='reading' onClick={()=>{handleChange('reading')}}><label>Reading</label></div>
                <div className='test noselect' id='writing' onClick={()=>{handleChange('writing')}}><label>Writing</label></div>
            </div>
            <button className="button" onClick={()=>{(test != '')?history.push({pathname:'/'+test,state:Dones}):alert('Please choose a version')}}><label>Start</label></button>
            
        </div>
    )
}

export default ChooseTest;