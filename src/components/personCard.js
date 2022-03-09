import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
    //     this.firstName =firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.hairColor = hairColor;
    }
    //     const jane =new personCard("Jane", "Doe", 45, "black");
    //     const john = new personCard("John", "Smith", 88, "brown");
    //     const mill = new personCard("Millard", "Fillmore", 50, "brown");
    //     const maria = new personCard("Maria", "Smith", 62, "brown")
    //     let names = [];
        render(){
            return(
                <div>
                <h1>{this.props.lastName} , {this.props.firstName}</h1>
                    <ul>{this.props.age}</ul>
                    <ul>{this.props.hairColor}</ul>
                </div>
            )
            }
        }
export default PersonCard;