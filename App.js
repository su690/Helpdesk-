import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import BookABike from './Components/BookABike';
import Info from './Components/Info';



const styles={
   
  //IMPLEMENT STYLE HERE.
    title:{
    color:'#fff8dc',
        fontWeight:'bold',
       backgroundColor:'#8fbc8f',
        fontStyle:'oblique',
         textAlign:'center'
    },
    subtitle:
    {
        color:'#228b22',
        fontWeight:'bold',
        
        fontStyle:'oblique'
    }
}
class App extends Component {
//IMPLEMENT YOUR CODE HERE
     render(){
            return(
              <div>
                <h1 style={styles.title}> BlackBuck Dealers</h1>
             <h2 style={styles.subtitle}>Online Electric Bike Booking.</h2>
                <nav>
                   <Link to="/Info">Info</Link> {" "}|{" "}
                   <Link to="/bookabike">Book A Bike</Link> {" "}|{" "}
                   </nav>
                  <Routes>           
                 
                   <Route  path='/Info' element={<Info/>}></Route> 
                 <Route  path='/bookabike' element={<BookABike/>}></Route>
                 
                </Routes>      
              </div>
          
    
        )
    }	 	  	      	   	     	   	 	
}
export default App;