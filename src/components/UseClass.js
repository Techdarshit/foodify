import React from "react";

class UseClass extends React.Component{
    constructor(props) {
        super(props);
       
        this.state={
            userInfo:{
                name:"Darshit",
                location:"Ratlam",
            },
        };
       console.log("Constructor rendered")

        
    }

    async componentDidMount(){
        console.log("mount rendered");
       const data=await fetch("https://api.github.com/users/akshaymarch7");
       const json=await data.json();

       this.setState({
        userInfo:json,
    })

    console.log(json);
   }
   
    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){

        console.log("rendered");
        const {name,location, avatar_url} = this.state.userInfo;

        return ( 
         <div className="useclass-card">
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:95228-XXXXX</h4>
         </div>
        );
    }  
};

export default UseClass;