import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

export default function App() {
    const items = [
    {
        title : 'What is react?',
        content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis veritatis provident ad, iste non ipsa rem doloremque culpa! Deserunt totam ea quis libero. Accusantium corrupti praesentium nam eaque laudantium adipisci at hic voluptatem dolorum',
    },
    {
        title : 'Why use React?',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit vel provident autem repudiandae voluptate veniam unde inventore cum voluptatum? Eveniet nulla dicta asperiores voluptas eum iusto sint eius error autem dolore',
    },
    {
        title : 'How to use React?',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit vel provident autem repudiandae voluptate veniam unde inventore cum voluptatum? Eveniet nulla dicta asperiores voluptas eum iusto sint eius error autem dolore',
    }
]

    const options = [
        {
            label : 'The Color Red',
            value : 'red'
        },
        {
            label : 'The Color Green',
            value : 'green'
        },
        {
            label : 'A Shade of Blue',
            value : 'blue'
        },
    ]

    const [selected, setSelected] = useState(options[0]); 
    const [showDropdown, setShowDropdown] = useState(true);

    // const showAccordion = () =>{
    //     if (window.location.pathname === "/"){
    //         return <Accordion items = {items} />;
    //     }
    // }

    // const showDropDown = () =>{
    //     if(window.location.pathname === "/dropdown"){
    //         return <Dropdown />;
    //     }
    // }

    // const showTranslate = () =>{
    //     if (window.location.pathname === "/translate"){
    //         return <Translate />;
    //     }
    // }

    // const showSearch = () =>{
    //     if(window.location.pathname === "/search"){
    //         return <Search />
    //     }
    // }

  return (
    <div>
        {/* <Accordion items = {items} /> */}
        {/* <Search /> */}
        {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown ? 
            <Dropdown options = {options} selected = {selected} onSelectedChange = {setSelected}/> : null
        } */}
        {/* <Translate /> */}

        {/* {showAccordion()}
        {showDropDown()}
        {showTranslate()}
        {showSearch()} */}

            <Header />
        <Route path = "/">
            <Accordion items = {items} />
        </Route>
        <Route path = "/dropdown">
            <Dropdown label = "Select a color" options={options} selected = {selected} onSelectedChange = {setSelected} />
        </Route>
        <Route path = "/list">
            <Search />
        </Route>
        <Route path = "/translate">
            <Translate />
        </Route>

    </div>
  )
}
