import React from 'react';
import './App.scss';
import Case from './component/Case/Case';
import logo from './img/logo.svg';

function App() {
   const [text, setText] = React.useState('');
   const [items, setItems] = React.useState(
      JSON.parse(localStorage.getItem('items')) || []
   );

   const onChangeTextInput = (event) => {
      setText(event.target.value);
   };

   const addItem = (event) => {
      event.preventDefault();
      text.length && setItems([...items, {text, done: false}]);
      setText('');
   };

   React.useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
   }, [items]);

   const removeItem = (id) => {
      setItems(prev => prev.filter((el, index) => index !== id));
   };

   return (
      <div className="App">
         <header className="header">
            <a className="logo" href="#">
               <img className="logoImg" src={logo} alt="logo"/>
            </a>
         </header>
         <div className="content">
            <p className="date">{new Date().toLocaleDateString()}</p>
            <form className="form">
               <input onChange={onChangeTextInput} value={text} className="textInput" type="text" placeholder="Введите цель"/>
               <button onClick={addItem} className="addItemBtn">Добавить</button>
            </form>
            <div className="contentList">
               {
                  items.map((item, index) => (
                     <Case key={index} text={item.text} remove={() => removeItem(index)} done={item.done} id={index} items={items}/>
                  ))
               }
            </div>
         </div>
         <p className="version">v1.0</p>
      </div>
   );
}

export default App;
