import './App.css';
import {useState} from 'react';

function App() {
  const [key , setKey] = useState('');
  const [text , setTeks] = useState('');

  

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
    for(let i=0; i< text.length; i++){
      if(alphanumeric(text[i])){
        var karakter =  (((text[i].toLocaleUpperCase().charCodeAt(0)-65)+(data[i].charCodeAt(0)-65))%26)+65;
        var hasil = String.fromCharCode(karakter);
        if(text[i] === '' || !alphanumeric(text[i])){
          chiper += text[i] 
        }else{
          chiper += hasil.toLocaleUpperCase()
        }
      }else{
        chiper += text[i] 
      }
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

  return (
    <>
    <textarea onChange={(e) => setTeks(e.target.value)}>

    </textarea>
    <br/>
    <input onChange={(e) => setKey(e.target.value)} />
    <br/>
    <button onClick={() => enkripsi()}>enkripsi</button>
    </>
  );
}

export default App;
