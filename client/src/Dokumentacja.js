import React from 'react';

export default () => {
  return (
    <div>
      Komponent dokumentacji
      <h4>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h4>
<p>Program składa się z 3 mikrousług (strona główna, kalkulator fibonacciego, dokumentacja) </p>
<h5>Zadanie 9 zostao zmienione w nastpujcy sposob: </h5>
<p>Narzucono ograniczenie wartosci K do 15 dla fibonacciego bo większa wartość mogła by przeciąć stronę</p>
<p>Dodano przycisk pokazujacy historie 10 ostatnich obliczeń fibonacciego</p>
      
<h5>Instrukcja uruchomienia:</h5>
      
<li>git clone https://github.com/WojciechSzelug/PFSwCO_Projekt1</li>
<li>docker-compose up</li>
<li>adres 0.0.0.0:3050</li>
    </div>
  );
};
