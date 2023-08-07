import React from 'react';
import { useLocation } from 'react-router-dom';


const Description = () => {
    let location=useLocation()
    let data=location.state
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
            
        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    
    
    
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div  style={{
            height: 600,
            width: 500,
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "green",
            margin: 5,
          }}>
            <div style={{justifyContent:'center',display:'flex'}}>
            <img src={data.show?.image?.original} alt='.....' style={{ height:150, objectFit: "fill" }}/>
            </div>
            <hr />
            <div style={{color:'black',fontWeight:'bold',fontSize:20,textAlign:'center'}}>{`Title--${data.show.name}`}</div>
            {/* <a href={data.show.url}>this is the offical link</a> */}
            <div>{removeTags(data.show.summary)}</div>
            <div style={{display:'flex',justifyContent:'center',padding:5}}>
            <div className='btn bg-success'  onClick={()=>alert('your show is booked')}>Book Show</div>
            </div>
        </div>
        </div>
    );
}

export default Description;
