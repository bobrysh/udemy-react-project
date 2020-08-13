import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }

// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items}/>
//   }
// }


export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <button onClick={()=>{
        setShowDropdown(!showDropdown)
      }}>Toggle Dropdown</button>
      {showDropdown ?
      <Dropdown 
       selected={selected}
       onSelectedChange={setSelected}
       options={options} 
       /> : null
       } */}
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          selected={selected}
          onSelectedChange={setSelected}
          options={options} 
          coloredText={true}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
