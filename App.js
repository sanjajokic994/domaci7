import React from 'react';

import CardFja from './Components/CardFja';
import CardKlasa from './Components/CardKlasa';
import FormaFunkcija from './Components/FormaFja';
import FormaKlasa from './Components/FormaKlasa'



function App() {
  return (<>
    <FormaFunkcija text="prvi"/>
    <FormaKlasa text="drugi"/>
    <CardFja opis="angry" url = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/angry-face_1f620.png'/>
    <CardKlasa opis
    ="love" url = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png'/>
    </>
  );
}

export default App;