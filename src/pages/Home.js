import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import EmailForm from '../components/EmailForm/EmailForm';
import ListeningSection from './AcademicListening';
import ReadingSection from './AcademicReading';
import WritingSection from './AcademicWriting';
import ChooseTest from './ChooseTest';
import axios from 'axios';


const Home = () =>{

    //axios.post('https://sheet.best/api/sheets/b6879cbc-6815-4f88-b88c-ebbd0820fe93/tabs/AC List A', {'A':'Malu'})
    //.then(response=>{console.log(response)})
    
    
//await res.send(getRows.data);

    return (
        <>
        <Router>
        <Route exact path="/Listening"><ListeningSection/></Route>
            <Route exact path="/Reading"><ReadingSection/></Route>
            <Route exact path="/Writing"><WritingSection/></Route>
            <Route exact path="/Home/ChooseTest"><ChooseTest/></Route>
            <Route exact path="/"><EmailForm name="this is button"/></Route>
        </Router>
        </>
        
    )
}

export default Home;