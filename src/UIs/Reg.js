import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import '../styles/Reg.css';
const axios = require("axios");



export default class Reg extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
});
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }


render() {
  return(
      <div className='back'>
        <div className="card col-50 col-lg-4 login-card loc border-info" style={{ borderWidth: '5px', borderRadius:"30px" }}>
            <Form style={{ fontWeight:'Bold'}}> 
                <h2 className='reg text-info' style={{ fontWeight:'Bold'}}>REGISTER NOW</h2>

                <div className="form-group text-left">
                <label htmlFor="InputUsername">Username</label>
                <input type="username" 
                       className="form-control" 
                       id="username" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter Username"
                />
                </div>

                <div className="form-group text-left">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="InputPassword">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                

                <div>
                    <label>Add profile picture</label>
                    <form onSubmit={this.onFormSubmit}>
                    <input type="file" name="myImage" onChange= {this.onChange} />
                   {/* <button type="submit" className="btn-sm btn-dark">Upload</button> */}
                    </form>
                </div>
                
                <div>

                 <h1></h1>

                <label >I am a,</label>
                <Form.Group controlId="CheckboxTeacher">
                <Form.Check type="checkbox" label="Teacher" />
                </Form.Group>
                <Form.Group controlId="CheckboxStudent" >
                <Form.Check type="checkbox" label="Student" />
                </Form.Group>
                </div>
                
                <div className='regbut'>
                <button 
                    type="submit" 
                    className="btn-sm btn-info btn-block "
                    style={{borderRadius:"20px"}}
                   
                >
                    REGISTER
                </button>
                </div>

                <p className="forgot-password text-right">
                <a href='/Login' className='mt-1'>Already have an account?</a>
                </p>

            </Form>
        </div>
     </div>
    )
  }
}