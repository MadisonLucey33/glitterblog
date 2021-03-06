import React from 'react'

const InfoCard = ({text, index, obj, info}) => {
  // console.log("info card");
  // console.log(info)
  let infoClass = "object-center absolute object-cover shadow-xl rounded-t-lg ";

    const getContentFragment = (index, text, obj) => {
        // console.log(text);
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
            // console.log("Hello");
           // text = text.replace("*", ""); 
            const myText = text.split("*", 17); 
            // console.log(myText);
            // console.log(myText[1]);
           // console.log()
            
            modifiedText = (<span><b>{myText[1]}</b><br></br><div className="pt-3">{myText[2]}</div></span>);
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

    let myContainer = {

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


    const getColor = (info) => {
        // console.log("getcolor");
        // console.log(info)
      switch (info) {
  
        case '-[INFO]-': // green
          infoClass = "object-top absolute object-cover shadow-xl rounded-t-lg ";
          
          myContainer = {

            // pretty blue background hsl(210deg, 55%, 92%)
            // background: "hsl(210deg, 55%, 92%)", 
            background: "rgba(0, 204, 136, 0.1)", 
            transition: "background 350ms ease 0s",
            color: "hsl(222deg, 22%, 5%)",     
            position: "relative",
            padding: "24px 32px",
            fontSize: "17px",
            marginTop: "48px",
            marginBottom: "43px",
            borderLeft: "5px solid rgb(0, 204, 136)",  // green: rgb(0, 204, 136)    blue hsl(245deg, 100%, 60%)
            borderRadius: "6px 6px 6px 3px",
        }

         
         return( <div style={myContainer}>
          <span className="pr-0.6 pl-0.9" key={index} style={myIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(0, 204, 136)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </span>      
          <div >
          <div>{getContentFragment(index, text, obj, info)}</div>
  
        </div>
        </div>)
        case '-[INFO2]-': // yellow
          infoClass = "object-top absolute object-cover shadow-xl rounded-t-lg ";

                
          myContainer = {

            // pretty blue background hsl(210deg, 55%, 92%)
            // background: "hsl(210deg, 55%, 92%)", 
            background: "rgba(255, 221, 0, 0.25)", 
            transition: "background 350ms ease 0s",
            color: "hsl(222deg, 22%, 5%)",     
            position: "relative",
            padding: "24px 32px",
            fontSize: "17px",
            marginTop: "48px",
            marginBottom: "43px",
            borderLeft: "5px solid rgb(255, 157, 0)",  // green: rgb(0, 204, 136)    blue hsl(245deg, 100%, 60%)
            borderRadius: "6px 6px 6px 3px",
        }

         
          return(<div style={myContainer}>
              <span className="pr-0.6 pl-0.9" key={index} style={myIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 157, 0)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>      
              <div >
              <div>{getContentFragment(index, text, obj, info)}</div>
      
            </div>
            </div>)



        case '-[INFO3]-': // blue
          infoClass = "object-top absolute object-cover shadow-xl rounded-t-lg ";

                
          myContainer = {

            // pretty blue background hsl(210deg, 55%, 92%)
            // background: "hsl(210deg, 55%, 92%)", 
            background: "hsl(210deg, 55%, 92%)", 
            transition: "background 350ms ease 0s",
            color: "hsl(222deg, 22%, 5%)",     
            position: "relative",
            padding: "24px 32px",
            fontSize: "17px",
            marginTop: "48px",
            marginBottom: "43px",
            borderLeft: "5px solid hsl(245deg, 100%, 60%)",  // green: rgb(0, 204, 136)    blue hsl(245deg, 100%, 60%)
            borderRadius: "6px 6px 6px 3px",
        }


        

        
          return(<div style={myContainer}>
              <span className="pr-0.6 pl-0.9" key={index} style={myIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(245deg, 100%, 60%)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>      
              <div >
              <div>{getContentFragment(index, text, obj, info)}</div>

            </div>
            </div>)




        case '-[INFO4]-': // pink
          infoClass = "object-top absolute object-cover shadow-xl rounded-t-lg ";

                
          myContainer = {

            // pretty blue background hsl(210deg, 55%, 92%)
            // background: "hsl(210deg, 55%, 92%)", 
            background: "hsl(340deg, 100%, 93%)", 
            transition: "background 350ms ease 0s",
            color: "hsl(222deg, 22%, 5%)",     
            position: "relative",
            padding: "24px 32px",
            fontSize: "17px",
            marginTop: "48px",
            marginBottom: "43px",
            borderLeft: "5px solid rgb(255, 85, 85)",  // green: rgb(0, 204, 136)    blue hsl(245deg, 100%, 60%)
            borderRadius: "6px 6px 6px 3px",
        }





          return(<div style={myContainer}>
              <span className="pr-0.6 pl-0.9" key={index} style={myIcon}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 85, 85)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg"  
              style={{height: "1.8rem", width: "1.8rem"}} 
              viewBox="0 0 24 24" fill="none" stroke="rgb(255, 85, 85)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="arcs"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </span>      
              <div >
              <div>{getContentFragment(index, text, obj, info)}</div>

            </div>
            </div>)
            

        default: 
            return (<span>Default {info}</span>);
  
      }
  

     
    }
        
      return (getColor(info)
  )
}

export default InfoCard; 