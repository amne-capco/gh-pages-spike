
import './App.css';
import React, {useState} from 'react';
import * as XLSX from 'xlsx';

function App() {

  const [data, setData] = useState([]);
  const handleUpload = (e) => {
    e.preventDefault();

    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
  
        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        console.log(dataParse);
        setData(dataParse)
    };
    reader.readAsBinaryString(f)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src="https://octodex.github.com/images/Professortocat_v2.png" className="App-logo" alt="logo" />
        <p>
         <code>Capco</code>
        </p>
        Engineering Framework!!
        <input type="file" name="file" onChange={handleUpload}/>
        {data}
      </header>

    </div>
  );
}

export default App;
