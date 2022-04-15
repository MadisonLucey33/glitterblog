import React from 'react'

const InfoCard = ({text, index, obj}) => {


    const getContentFragment = (index, text, obj) => {
        console.log(text);
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }

        if(text.includes("*")) {
            console.log("Hello");
           // text = text.replace("*", ""); 
            const myText = text.split("*", 17); 
            console.log(myText);
            console.log(myText[1]);
           // console.log()
            
            modifiedText = (<span><b>{myText[1]}</b><br></br><span>{myText[2]}</span></span>);
          }

          
        return modifiedText;
        
     };

    const mySpan = { // hsnUkW
        position: "relative",
        display: "inline-block",
       // textShadow: "rgb(21 17 24 / 50%) 0px 1px 1px, rgb(21 17 24 / 50%) 0px 1px 4px, rgb(21 17 24) 0px 0px 6px;",
        fontStyle: "italic"
    };

    const myLeftBorder = {

    }

    // for mobile

    const myContainer = {

        // pretty blue background hsl(210deg, 55%, 92%)
        // background: "hsl(210deg, 55%, 92%)", 
        background: "rgba(0, 204, 136, 0.1)", 
        transition: "background 350ms ease 0s",
        color: "hsl(222deg, 22%, 5%)",     
        position: "relative",
        padding: "24px 32px",
        fontSize: "17px",
        marginTop: "48px",
        marginBottom: "64px",
        borderLeft: "7px solid rgb(0, 204, 136)",  // green: rgb(0, 204, 136)    blue hsl(245deg, 100%, 60%)
        borderRadius: "6px 6px 6px 3px",
    }
    const myIcon = {

        position: "absolute",
        top: "0px",
        left: "0px",
        transform: "translate(calc(-50% - 1.5px), -50%)",
        padding: "8px",
        background: "white",
        borderRadius: "50%",
        display: "block",
        boxSizing: "border-box",
    }

      return (
          <div style={myContainer}>
        <span className="pr-0.6 pl-0.9" key={index} style={myIcon}>
            
            {/* For blue */}
            {/* <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" height="32" 
                viewBox="0 0 24 24" 
                fill="none" stroke="rgb(0, 204, 136)" //  green: rgb(0, 204, 136)   blue: hsl(245deg, 100%, 60%)
                stroke-width="2.2" stroke-linecap="round" 
                stroke-linejoin="round"
                style={{overflow: "hidden"}}
            >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
             */}
            
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(0, 204, 136)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            
            </span>      
            <div >



            <div>{getContentFragment(index, text, obj)}</div>

    </div>
    </div>
  )
}

export default InfoCard; 