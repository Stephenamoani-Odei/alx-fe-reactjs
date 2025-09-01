import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './MainContent';
import Footer from './Footer';


function App() {
  return (
      <div>
      <WelcomeMessage/>
      < MainContent/>
      
      < UserProfile
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography"
      />
      <Footer/>
      </div>    

  );
};

export default App;
