

import boopSfx from '../sounds/909-drums.mp3';
// import boopSfx from '../sounds/pop-down.mp3';
// import boopSfx from '../sounds/pop-down.mp3';
// import boopSfx from '../sounds/pop-down.mp3';
// import boopSfx from '../sounds/pop-down.mp3';

import useSound from 'use-sound';

// import Button from './Button';
const PlayMeASong = () => {
    // const soundUrl = '../sounds/909-drums.mp3';
    const [play] = useSound(boopSfx, {
        sprite: {
          kick: [0, 350],
          hihat: [374, 160],
          snare: [666, 290],
          cowbell: [968, 200],
        }
      });
  
    // Custom hook that listens for 'keydown',
    // and calls the appropriate handler function.
    // useKeyboardBindings({
    //   1: () => play({ id: 'kick' }),
    //   2: () => play({ id: 'hihat' }),
    //   3: () => play({ id: 'snare' }),
    //   4: () => play({ id: 'cowbell' }),
    // })
  // I rang that bell for you and now you can play me a song!


  /* 
  
    color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  height: 60px;
  padding: 0 32px;
  font-weight: bold;
  background-color: ${PRIMARY};
  border-radius: 5px;
  margin-right: 11px;
  */
    return (
      <div className="ml-28">

        
     
        <button className="text-white pt-4 pl-12 pr-12 pb-6"
          aria-label="kick"
          onMouseDown={() => play({ id: 'kick' })}
          
        style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)", fontSize: "18px", height: "60px", fontWeight: "bold", backgroundColor: "hsl(240deg, 85%, 55%)", borderRadius: "5px", marginRight: "11px",}}
        >
          C
        </button>
        <button className="text-white pt-4 pl-12 pr-12 pb-6"
          aria-label="hihat"
          onMouseDown={() => play({ id: 'hihat' })}
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)", fontSize: "18px", height: "60px", fontWeight: "bold", backgroundColor: "hsl(240deg, 85%, 55%)", borderRadius: "5px", marginRight: "11px",}}
        >
          D
        </button>
        <button className="text-white pt-4 pl-12 pr-12 pb-6"
          aria-label="snare"
          onMouseDown={() => play({ id: 'snare' })}
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)", fontSize: "18px", height: "60px", fontWeight: "bold", backgroundColor: "hsl(240deg, 85%, 55%)", borderRadius: "5px", marginRight: "11px",}}
        >
          E
        </button>
        <button className="text-white pt-4 pl-12 pr-12 pb-6"
          aria-label="cowbell"
          onMouseDown={() => play({ id: 'cowbell' })}
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)", fontSize: "18px", height: "60px", fontWeight: "bold", backgroundColor: "hsl(240deg, 85%, 55%)", borderRadius: "5px", marginRight: "11px",}}
        >
          F
        </button>
      </div>
    );
  }

  
export default PlayMeASong;