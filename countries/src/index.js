import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Section from './section/section';
import images from "./images/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Section 
    source={images.ar} 
    source2={images.par}
    comment="A lot of racists, worst country!" 
    details="Argentina, officially the Argentine Republic, is a country in the southern half of South America. Argentina covers an area of 2,780,400 km², making it the second-largest country in South America after Brazil, the fourth-largest country in the Americas, and the eighth-largest country in the world."/>

    <Section 
    source={images.ca} 
    source2={images.pca}
    comment="I like the people, one of the best!"
    details="Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline."/>

    <Section 
    source={images.co}
    source2={images.pco}
    comment="Love you, 1° option for spanish accent. Never met a idiot one."
    details="Colombia, officially the Republic of Colombia, is a country mostly in South America with insular regions in North America."/>

    <Section 
    source={images.hr}
    source2={images.phr}
    comment="They'r cool people, but after the world cup they suck."
    details="Croatia, officially the Republic of Croatia, is a country located at the crossroads of Central and Southeast Europe. Its coast lies entirely on the Adriatic Sea."/>

    <Section 
    source={images.fr}
    source2={images.pfr}
    comment="Love you guys, you'r so cute, and Croissant for you too."
    details="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."/>

    <Section 
    source={images.de}
    source2={images.pde}
    comment="Nothing bad, nothing good, neutral people, I've meet a cool girl once, miss her."
    details="Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank."/>

    <Section 
    source={images.ind}
    source2={images.pin}
    comment="You guys are kind, but somethimes boring. Love the way you talk."
    details="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy."/>

    <Section 
    source={images.il}
    source2={images.pil}
    comment="Almost perfect, I love them all and the way that they treat me!"
    details="Israel, a Middle Eastern country on the Mediterranean Sea, is regarded by Jews, Christians and Muslims as the biblical Holy Land. Its most sacred sites are in Jerusalem. Within its Old City, the Temple Mount complex includes the Dome of the Rock shrine, the historic Western Wall, Al-Aqsa Mosque and the Church of the Holy Sepulchre. Israel's financial hub, Tel Aviv, is known for its Bauhaus architecture and beaches."/>

    <Section 
    source={images.it}
    source2={images.pit}
    comment="They are kind, love the way they talk!"
    details="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital."/>

    <Section 
    source={images.jp}
    source2={images.pjp}
    comment="I was born watching your culture. Love you all and would like to go there one day."
    details="Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south."/>

    <Section 
    source={images.mx}
    source2={images.pmx}
    comment="Love your spanish, you'r kind way of talking, best from the NA."
    details="Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico"/>

    <Section 
    source={images.ma}
    source2={images.pma}
    comment="Their idiots, more than Argentinos one."
    details="Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water. "/>

    <Section 
    source={images.ph}
    source2={images.pph}
    comment="Cute, cool, one of the best people in the world!"
    details="The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. In the western Pacific Ocean, it consists of 7,641 islands which are broadly categorized in three main geographical divisions from north to south: Luzon, Visayas, and Mindanao. "/>

    <Section 
    source={images.pt}
    source2={images.ppt}
    comment="A lot of idiots, but the most are cool guys, relação de amor e ódio."
    details="Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire."/>

    <Section 
    source={images.ru}
    source2={images.pru}
    comment="A lot of idiots, but I know some of the best, привет guys!"
    details="Russia, or the Russian Federation, is a country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, extends across eleven time zones, and shares land boundaries with fourteen countries. It is the world's ninth-most populous country and Europe's most populous country."/>

    <Section 
    source={images.gb}
    source2={images.pgb}
    comment="I love the accent, the countries, the buildings and everything.!"
    details="The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge."/>

    <Section 
    source={images.us}
    source2={images.pus}
    comment="Love 50% of you guys, hate the other 50%!"
    details="The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking. "/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
