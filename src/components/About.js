import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";


class About extends Component{

    constructor(props){
        super(props);
        console.log("parent constructor called");
    }

    componentDidMount(){
        console.log("parent componentDidMount called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
    render(){
        console.log("parent render called");
        return(
            <div className="mx-auto mt-20 p-5 w-[500px] rounded-lg text-center bg-slate-300">
            <h1>About</h1>
            <div>
               LoggedIn User
              <UserContext.Consumer>
                {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
               )}
            </UserContext.Consumer>
        </div>
            <h2>This is Namaste Web Series</h2>
            
            <UserClass name={"First"} location={"Kolkata"}/>
            {/* <UserClass name={"Second"} location={"Nagaon"}/>
            <UserClass name={"Third"} location={"Kolkata"}/> */}
       </div> 
        )
    }
}

// const About = ()=>{
//    return(
//        <div>
//             <h1>About</h1>
//             <h2>This is Namaste Web Series</h2>
//             {/* <User name={"Bivek Das"} location={"Nagaon"}/> */}
//             <UserClass name={"Bishal Modak"} location={"Kolkata"}/>
//        </div>
//    )
// }

export default About;