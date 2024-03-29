/*
  Developer Madison Lucey
  @version 2/26/2022
  Responsive & Interactive React JS Blog
*/

/* THIS AUTHOR IMAGE IS THE ONE DISPLAYED IN EACH INDIVIDUAL BLOG POST */

import React from 'react'

const TealAuthor = () => {


    const myStyle0 = { 
        fontSize: "min(20px, 15vw)",
        opacity: "1",
        position: "relative",
        top: "315px",
        //left: "30%",  // this should only happen on medium devices ❗
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       // textShadow: "rgb(21 17 24 / 50%) 0px 0px 30px, rgb(21 17 24 / 50%) 0px 5px 15px, rgb(21 17 24 / 50%) 0px 1px 2px",
        color: "hsl(0deg,0%,100%)",
        lineHeight: "1.45",
        boxSizing: "border-box",

        marginBlockStart: "0.83em",
        marginBlockEnd: "0.83em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
   
        zIndex: "2",
        fontWeight: "520",

        textShadow: "1px 1px #000000",

      };


    const myStyle = { 
        fontSize: "min(25px, 15vw)",
        opacity: "1",
        position: "relative",
        top: "150px", // IMPORTANT
        left: "40px",
        textShadow: "rgb(21 17 24 / 50%) 1px 0px 30px, rgb(21 17 24 / 50%) 0px 6px 15px, rgb(21 17 24 / 50%) 2px 1px 2px", 
       //textShadow: "rgb(21 17 24 / 50%) 0px 0px 30px, rgb(21 17 24 / 50%) 0px 5px 15px, rgb(21 17 24 / 50%) 0px 1px 2px",
        color: "hsl(0deg,0%,100%)",
        lineHeight: "1.45",
        boxSizing: "border-box",
       
        marginLeft: "8.35em", // UPDATE MARGIN LEFT AND RIGHT SHOULD BE LESS FOR MOBILE 
        marginRight: "11.0em",
        // marginBlockStart: "0.83em",
        // marginBlockEnd: "0.83em",
        // marginInlineStart: "0px",
        // marginInlineEnd: "0px",
   
        zIndex: "2",
        fontWeight: "520",

       // textShadow: "1px 2px #000000",
     //  textShadow: "rgb(21 17 24 / 30%) 1px 0px 20px, rgb(21 17 24 / 50%) 0px 6px 7px, rgb(21 17 24 / 50%) 2px 1px 2px", 
      };



    const myStyle3 = { 
        position: "absolute",
        zIndex: "2",
        inset: "0px",
        width: "500px",
        height: "500px",
        background: "linear-gradient(to top, rgba(21, 17, 24, 0.75), rgba(21, 17, 24, 0) 50%)",
        borderRadius: "50%"
    };
    

    
    const myStyle4 = { 
        position: "relative"
    };

    const myStyle5 = { 
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "32px",
        paddingRight: "32px"
    };
    
    const myStyle6 = { 
        isolation: "isolate"
    };

    const myStyle9 = {
        paddingTop: "350px",
        zIndex: "-3",
    };

    const myWrapper = {
        position: "relative"
    };

    const myStyle2 = {
        position: "relative",
        // width: "37em",
        // height: "31em",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",

    
    };

    const blurry = {
        position: "absolute",
        filter: "blur(150px)",
        transform: "scale(0.9) translateX(30%) translateY(-5%) rotate(-10deg)",
        zIndex: "-1",
        opacity: "0.7",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(white, lightblue, blue)",
    };

    const blurryBigger = {
        position: "absolute",
        filter: "blur(150px)",
        transform: "scale(1.3) translateX(30%) translateY(-5%) rotate(-10deg)",
        zIndex: "-1",
        opacity: "0.9",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(white, lightblue, blue)",
    };

    const regular = {
        filter: "drop-shadow(rgb(21, 17, 24) 0px 0px 13px);",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        
    };


    const myFirstStyle1 = {
       
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "32px",
            paddingRight: "32px",
       
            isolation: "isolate"
       
    };


    const mySecondStyle2 = { 
        position: "relative",
        // width: "37em",
        // height: "31em",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        position: "absolute",
        filter: "blur(150px)",
        transform: "scale(0.9) translateX(30%) translateY(-45%) rotate(-10deg)",
        zIndex: "-1",
        opacity: "0.7",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(white, lightblue, blue)",
    };

    const myThirdStyle3 = { 
        position: "relative",
        // width: "37em",
        // height: "31em",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
        filter: "drop-shadow(rgb(21, 17, 24) 0px 0px 13px);",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "50%",
    }


    const myFourthStyle4 = { 
        paddingTop: "350px",
        zIndex: "-3",
        fontSize: "min(20px, 15vw)",
        opacity: "1",
        position: "relative",
        top: "315px",
        //left: "30%",  // this should only happen on medium devices ❗
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "rgb(21 17 24 / 50%) 0px 0px 30px, rgb(21 17 24 / 50%) 0px 5px 15px, rgb(21 17 24 / 50%) 0px 1px 2px",
        color: "hsl(0deg,0%,100%)",
        lineHeight: "1.45",
        boxSizing: "border-box",

        marginBlockStart: "0.83em",
        marginBlockEnd: "0.83em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
   
        zIndex: "2",
        fontWeight: "520",
    }
 
  return (
    <div>
        <section style={{myFirstStyle1}} 
        className="z-5 -mb-96 mt:0 sm:-mb-96 sm:-mt-8 lg:-mb-80 " 
        >
            
            <header style={myStyle4}>
                
                <div>
                    {/* <div style={myStyle3}> */}

               
                    {/* <div style={myWrapper}>  
                    <div 
                        alt="" 
                        className="inline-block cursor-pointer transition ease-in-out delay-150 duration-200 hover:-translate-y-1 hover:scale-110"
                        style={mySecondStyle2}>

                    </div> */}
                                    
                    {/* <img 
                        alt="" 
                        src="https://www.madisonlucey.com/img/blog/golden22.jpeg"  
                        style={myThirdStyle3}
                        className="inline-block cursor-pointer transition ease-in-out delay-150 duration-200 hover:-translate-y-1 hover:scale-110"
                    /> */}
                    
                   
                    {/* </div>  */}



                    {/* </div> */}
                    <h2  className={`montserrat text-sm mb-8 text-center myClass mr-12 sm:mr-12 lg:ml-28 lg:mr-40 md:pt-7 lg:pt-7 xl:ml-40 xl:mr-64 2xl:ml-96 2xl:mr-96`}><span style={{color: "rgb(255, 170, 51)"}}>I am a 20 year old second year graduate student </span>currently working towards achieving my Master of Science degree in Data Science. I have a passion for software engineering as well as website/applications development. It is my ability to  <span className="italic text-3xl" style={{fontFamily: "Sriracha", color: "rgb(255, 170, 51)", letterSpacing: "-0.25px", }}>"think outstide of the box"</span>  that enables me to come up with innovative solutions to complex problems! This is an Instagram worthy blog/journal… or something of the sort - you’ll see! 😋</h2>

                    
                    
                </div>    
   
            </header>
           
        </section>
      
        {/* <section
        className="pb-0 sm:mb-0 sm:mt-0 md:mt-28 lg:mt-16 lg:mb-0 xl:mt-28 xl:mb-0"
        > 
            <div style={myFourthStyle4} className="text-white flex-wrap pt-350 md:px-50"></div>
            
      
          
        </section> */}
  
      
    </div>
  );
};

export default TealAuthor;