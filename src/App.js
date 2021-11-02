import './App.css';
import {useState} from 'react';

function App() {
  const [key , setKey] = useState('');
  const [text , setTeks] = useState('');

  const[chiper ,setChiper] = useState('');

  

  const enkripsi = () => {
    const data = [];
    let n = 0;
    let chiper = '';
//pembentukan kunci
    for(let i =0; i<text.length; i++){
      if(text[i] !== '' && key[n] !== ''){
        data[i] = key[n].toLocaleUpperCase();
        n++;
      }else if(key[n] !== ''){
        data[i] = text[i]
      }

      if(key[n] === ''){
        n++;
      }

      if(n===key.length){
        n=0;
      }
    }


    // console.log('plaintext : ', text);
    // console.log('kunci :', data);

    // proses enkripsi
    let j = text.length-1;
    for(let i=0; i<text.length; i++){
      if(alphanumeric(text[i])){
        var karakter =  (((text[i].toLocaleUpperCase().charCodeAt(0)-65)+(data[j].charCodeAt(0)-65))%26)+65;
        var hasil = String.fromCharCode(karakter);
        if(text[i] === '' || !alphanumeric(text[i])){
          chiper += text[i] 
        }else{
          chiper += hasil.toLocaleUpperCase()
        }
      }else{
        chiper += text[i] 
      }
      j--;
    }

    alert(chiper)
  }


  const  alphanumeric =(inputtxt) => {

  var letterNumber = /^[0-9a-zA-Z]+$/;
    if(inputtxt.match(letterNumber)){
      return true;

      }else{ 

      return false; 
      }

  }

  const dekripsi = () => {
    const data = [];
    let n = 0;
    let plaintext = '';
  
//pembentukan kunci
    for(let i =0; i<chiper.length; i++){
      if(chiper[i] !== '' && key[n] !== ''){
        data[i] = key[n].toLocaleUpperCase();
        n++;
      }else if(key[n] !== ''){
        data[i] = chiper[i]
      }

      if(key[n] === ''){
        n++;
      }

      if(n===key.length){
        n=0;
      }
    }
    let j = chiper.length-1;
    for(let i=0 ;i<chiper.length; i++){
      var hasil;
      console.log(data[i])
      if(alphanumeric(chiper[i])){
       if((chiper[i].toLocaleUpperCase().charCodeAt(0)-65) - (data[j].charCodeAt(0)-65)< 0){
          hasil = ((chiper[i].toLocaleUpperCase().charCodeAt(0)-65)-(data[j].charCodeAt(0)-65))+26;
          // console.log(hasil)
       }else{
        // console.log(data[i].charCodeAt(0))
         hasil = ((chiper[i].toLocaleUpperCase().charCodeAt(0)-65)-(data[j].charCodeAt(0)-65))%26;
         
       }

        let karakter =String.fromCharCode(hasil+65);
        if(chiper[i] === '' || !alphanumeric(chiper[i])){
          plaintext += chiper[i];
        }else{
          plaintext += karakter;
        }


      }else{
        plaintext += chiper[i] 
      }
      j--;
    }

    alert(plaintext);

  }

  return (
    <>
    {/* enkripsi */}
    <textarea onChange={(e) => setTeks(e.target.value)}>

    </textarea>
    <br/>
    <input onChange={(e) => setKey(e.target.value)} />
    <br/>
    <button onClick={() => enkripsi()}>enkripsi</button>

    {/* deskirpsi */}
    <br/><br/>
    <textarea onChange={(e) => setChiper(e.target.value)}>

    </textarea>
    <br/>
    <input onChange={(e) => setKey(e.target.value)} />
    <br/>
    <button onClick={() => dekripsi()}>deksripsi</button>
        </>
  );
}

export default App;
