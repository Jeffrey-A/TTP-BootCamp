import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

class App extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            text:"",
            terms:[
                "eat once a day",
                "exercise twice a day",
                "sleep all day"
            ],
            values:[]
        }

        
        
        //part of refs 
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        };

        //binding
        this.handleChange = this.handleChange.bind(this);
        this.text = this.text.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
        console.log("From constructor");
        console.log(this)
    }

    text(e){
        this.focusTextInput();
        this.setState({values:[], text:e.target.textContent})
    }

    generateOptions(){
        console.log("from function")
        console.log(this)
        let index=0;
        return this.state.values.map( (term) =>{
            index++;
            return (<div className="option" key={index} 
                    onClick={this.text} 
                    > {term}
                    </div>
            );
            
        });
    }

    handleChange(e){
        const values = []
        
        this.state.terms.forEach( function(element){
            if(event.target.value && element.includes(e.target.value)){
                values.push(element)
            }
        })
        this.setState({text: e.target.value, values})
    }

   

    render(){
        return(
            <div>
                <input value={this.state.text}
                    onChange={this.handleChange} 
                    placeholder="Type something" 
                    ref={this.setTextInputRef}
                />
                {this.generateOptions()}
                
            </div>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById("root")
);