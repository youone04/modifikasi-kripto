import "./App.css";
import { useState } from "react";

function App() {
  const [key, setKey] = useState("");
  const [text, setTeks] = useState("");
  const [chiper, setChiper] = useState("");
  const[hasilEnkrips , setHasilEnkrip] = useState("");
  const[hasilDeksrip , setHasilDekrip] = useState("");
  const[aksi ,setPilihAksi] = useState(true);

  const enkripsi = () => {
    const data = [];
    let n = 0;
    let chiper = "";
    //pembentukan kunci
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== "" && key[n] !== "") {
        data[i] = key[n].toLocaleUpperCase();
        n++;
      } else if (key[n] !== "") {
        data[i] = text[i];
      }

      if (key[n] === "") {
        n++;
      }

      if (n === key.length) {
        n = 0;
      }
    }

    // console.log('plaintext : ', text);
    // console.log('kunci :', data);

    // proses enkripsi
    let j = text.length - 1;
    for (let i = 0; i < text.length; i++) {
      if (alphanumeric(text[i])) {
        var karakter =
          ((text[i].toLocaleUpperCase().charCodeAt(0) -
            65 +
            (data[j].charCodeAt(0) - 65)) %
            26) +
          65;
        var hasil = String.fromCharCode(karakter);
        if (text[i] === "" || !alphanumeric(text[i])) {
          chiper += text[i];
        } else {
          chiper += hasil.toLocaleUpperCase();
        }
      } else {
        chiper += text[i];
      }
      j--;
    }
    setHasilEnkrip(chiper)
  };

  const alphanumeric = (inputtxt) => {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const dekripsi = () => {
    // console.log(chiper)
    // console.log(key)
    const data = [];
    let n = 0;
    let plaintext = "";

    //pembentukan kunci
    for (let i = 0; i < chiper.length; i++) {
      if (chiper[i] !== "" && key[n] !== "") {
        data[i] = key[n].toLocaleUpperCase();
        n++;
      } else if (key[n] !== "") {
        data[i] = chiper[i];
      }

      if (key[n] === "") {
        n++;
      }

      if (n === key.length) {
        n = 0;
      }
    }
    let j = chiper.length - 1;
    for (let i = 0; i < chiper.length; i++) {
      var hasil;
      console.log(data[i]);
      if (alphanumeric(chiper[i])) {
        if (
          chiper[i].toLocaleUpperCase().charCodeAt(0) -
            65 -
            (data[j].charCodeAt(0) - 65) <
          0
        ) {
          hasil =
            chiper[i].toLocaleUpperCase().charCodeAt(0) -
            65 -
            (data[j].charCodeAt(0) - 65) +
            26;
          // console.log(hasil)
        } else {
          // console.log(data[i].charCodeAt(0))
          hasil =
            (chiper[i].toLocaleUpperCase().charCodeAt(0) -
              65 -
              (data[j].charCodeAt(0) - 65)) %
            26;
        }

        let karakter = String.fromCharCode(hasil + 65);
        if (chiper[i] === "" || !alphanumeric(chiper[i])) {
          plaintext += chiper[i];
        } else {
          plaintext += karakter;
        }
      } else {
        plaintext += chiper[i];
      }
      j--;
    }
    setHasilDekrip(plaintext);
    // alert(plaintext);
  };

  return (
    <>
      <div data-overlay className="o-hidden">
        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center text-center min-vh-38 d-flex flex-column align-items-center">
              <div className="col-md-10 col-lg-9 col-xl-8" data-aos="fade-up">
                <h4 className="display-3">
                Enkripsi dan Dekripsi Modifikasi Vigenere Chiper
                  <br />{" "}
                  <mark>
                    <span
                      data-typed-text
                      data-loop="true"
                      data-type-speed="90"
                      data-strings='["Kripto","Vigenere Chiper","Modifikasi Chiper"]'
                    ></span>
                  </mark>
                </h4>
                <p className="lead px-xl-5">
                Kriptografi adalah teknik menyampaikan pesan secara tersembunyi dengan memanfaatkan fitur enkripsi data
                </p>
                <div
                  className="d-flex flex-column flex-sm-row mt-4 mt-md-5 justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <button
                  onClick={() => setPilihAksi(true)}
                    className={aksi?"btn btn-primary btn-lg mx-sm-2 my-1 my-sm-0":"btn btn-lg mx-sm-2 my-1 my-sm-0"}
                    data-smooth-scroll
                  >
                    ENKRIPSI
                  </button>
                  <button
                    onClick={() => setPilihAksi(false)}
                    className="btn btn-outline-primary btn-lg mx-sm-2 my-1 my-sm-0"
                  >
                    DEKRIPSI
                  </button>
                </div>
              </div>
              {
                aksi?<h3 className="mt-5">Enkripsi Aktif</h3>:<h3 className="mt-5">Dekripsi Aktif</h3>
              }
            </div>
          </div>
          <div
            className="position-absolute bottom left w-50 h-50 d-none d-md-block"
            data-jarallax-element="-24 48"
          >
            <div className="blob bg-gradient w-50 h-100 bottom left"></div>
          </div>
          <div
            className="position-absolute top right w-50 h-50 d-none d-md-block"
            data-jarallax-element="48"
          >
            <div className="blob blob-2 bg-gradient w-50 h-50 top right"></div>
          </div>
          <div className="divider divider-bottom bg-primary-3"></div>
        </section>
      </div>

      <section className="bg-primary-3 text-white">
        <div className="container">
          {
            aksi && <div className="row justify-content-center">
            <div
              className="col-lg-6 mb-3 mb-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card card-body bg-white align-items-start flex-sm-row h-100">
                <div className="ml-sm-3 ml-md-4">
                  <h5>Enkripsi Text</h5>
                  {/* enkripsi */}

                  <textarea
                   placeholder="Masukan Text..."
                  className="panjang-cols"
                  cols="38"
                    onChange={(e) => setTeks(e.target.value)}
                  ></textarea>
                  <br />
                  <textarea placeholder="Masukan Kunci" 
                 cols="38"
                  onChange={(e) => setKey(e.target.value)} />
                  <br />
                  <button  className="mt-3 btn btn-sm btn-primary fade-page" onClick={() => enkripsi()}>enkripsi</button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mb-3 mb-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card card-body bg-white align-items-start flex-sm-row h-100">
                <div className="ml-sm-3 ml-md-4">
                  <h5>Hasil Enkripsi</h5>
                  <p>
                  <mark>
                  {hasilEnkrips}
                  </mark>
                  </p>
                </div>
              </div>
            </div>
          </div>
          }

{
            !aksi && <div className="row justify-content-center">
            <div
              className="col-lg-6 mb-3 mb-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card card-body bg-white align-items-start flex-sm-row h-100">
                <div className="ml-sm-3 ml-md-4">
                  <h5>Dekripsi Chiper</h5>
                  {/* enkripsi */}

                  <textarea
                   placeholder="Masukan Chiper..."
                  // className="col-12"
                  cols="38"
                    onChange={(e) => setChiper(e.target.value)}
                  ></textarea>
                  <br />
                  <textarea placeholder="Masukan Kunci" cols="38" onChange={(e) => setKey(e.target.value)} />
                  <br />
                  <button  className="mt-3 btn btn-sm btn-primary fade-page" onClick={() => dekripsi()}>Deksripsi</button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mb-3 mb-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card card-body bg-white align-items-start flex-sm-row h-100">
                <div className="ml-sm-3 ml-md-4">
                  <h5>Hasil Dekripsi</h5>
                  <p>
                  <mark>
                  {hasilDeksrip}
                  </mark>
                  </p>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </section>

      {/* deskirpsi */}
      {/* <br />
      <br />
      <textarea onChange={(e) => setChiper(e.target.value)}></textarea>
      <br />
      <input onChange={(e) => setKey(e.target.value)} />
      <br />
      <button onClick={() => dekripsi()}>deksripsi</button> */}
    </>
  );
}

export default App;
