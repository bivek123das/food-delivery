import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        // console.log(props);

        // this.state={
        //     count : 0,
        //     count2 : 2
        // }
        console.log(this.props.name+"child constructor called");
        this.state={
            userInfo : {
                userId: "",
                title: "",
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name+"child componentDidMount called");
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await data.json();
        console.log(json);
        this.setState({userInfo : json});
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    render(){

        console.log(this.props.name+"child render called");

        const {name, location} = this.props;
        const {userId, title} = this.state.userInfo;
        // const {count, count2} = this.state;
        return(
            <div className="user-classs">
            {/* <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>  
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    count2 : this.state.count2 + 1
                })
            }}>Count Increase</button>   */}
            <h1>UserId: {userId}</h1>
            <h2>Title: {title}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @bivekdas345</h4>

         </div>
        )
    }
}

export default UserClass;