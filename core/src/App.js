//import logo from './logo.svg';
import './App.css';
import brahmanandam from './brahmanandam.gif'
import sd from './sd.webp'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function MyButton() {
//   return (
//     <button>
//       Click Me
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my First React App</h1>
//       <MyButton />
//     </div>
//   );
// }

const user = {
  name: 'Brahmi',
  name2: 'Sunil D',
  //imageUrl: 'https://www.vectorstock.com/royalty-free-vector/gold-sd-letter-logo-design-sd-logo-design-sd-logo-vector-37403616',
  imageSize: 300,
};

export default function Profile() {
  return (
    <div>
      <h1>My First React Web App</h1>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={brahmanandam}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <img
         src={sd}
         alt={'Photo of ' + user.name2}
         style={{
           width: user.imageSize,
           height: user.imageSize
         }}
         />
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
}



//<div class="tenor-gif-embed" data-postid="18351241" data-share-method="host" data-aspect-ratio="1.21673" data-width="100%"><a href="https://tenor.com/view/telugu-brahmanandam-gif-18351241">Telugu Brahmanandam GIF</a>from <a href="https://tenor.com/search/telugu-gifs">Telugu GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//export default App;
