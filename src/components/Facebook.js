import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {


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
        
    }


    render(){
            let facebookData;

this.state.auth ?
    facebookData = (
        <div>

        </div>
    ) :
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

