import {message} from './components/foo'

// In a file in the same directory
import fruit from './components/fruits'
console.log(fruits.apple); // prints 'red'

// In another file, also in the same directory
import {apple} from './components/fruits'
console.log(apple); // prints 'red'

import Tweet from './components/Tweet'
import ReactDOM from 'react-dom'
ReactDOM.render(
  <Tweet />,
  document.getElementById('main')
);
