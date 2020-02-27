import React from 'react'
const SplashScreen = (props) =>{
    setTimeout(() => {
        props.history.push('/home')
    }, 1000);
    
        return (
            <div>
                <h1>GSL GIF HERE</h1>
            </div>
        )
    
}
export default SplashScreen;


