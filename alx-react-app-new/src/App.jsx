import WelcomeMessage from './component/WelcomeMessage';
import UserProfile from './component/UserProfile';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import Counter from './component/Counter';




function App() {
  return (
      <div>
        
      <WelcomeMessage/>
      <Header />
      
      < MainContent/>
      < UserProfile name="Alice" age={25} bio="Loves hiking and photography"/>
       <Counter/>
      <Footer/>
      </div>    

  );
}

export default App;
