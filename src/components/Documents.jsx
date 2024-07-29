// src/App.js
import React from 'react';
import GeneratePDFButton from './components/GeneratePDFButton';

const App = () => {
  return (
    <div>
      <h1>PDF Generator</h1>
      <GeneratePDFButton />
    </div>

const printPDF = (pdfBytes) => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.src = url;
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      }, 1);
    };
    document.body.appendChild(iframe);
  };  
  );
};


export default App;
