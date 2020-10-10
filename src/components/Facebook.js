import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {

//defining state//
    state = {
        auth: false,
        name:'',
        picture: ''


    }

    componentClicked =() => {
        console.log('Facebook btn clicked');
    }
    responseFacebook =(response) => {
        console.log(response);

        // if response status is null//
        if(response.status !=='unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url, 
        }); 

        
    }

    //rendering the facebookdata//
    render(){
            let facebookData;

this.state.auth ?
    facebookData = (
        <div>
            <img src={this.state.picture} alt={this.state.name} />
    <h2>welcome {this.state.name}</h2>
        </div>
        
    ) :
    //intializing facebook appid for authentication//
    facebookData = (
        < FacebookLoginBtn
            appId="1204088926658039"
            autoLoad={true}
fields = "name,email,picture"
onClick = { this.componentClicked }
callback = { this.responseFacebook } />
                            
                        );

return (
    <>
        {facebookData}
    </>

);

    }
}

