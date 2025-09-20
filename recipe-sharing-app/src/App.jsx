// src/App component
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar' 
import FavoriteList from './components/FavoriteList'
import RecommendationList from './components/RecommendationList'

function  App () {
  

  return (
    <BrowserRouter>
     <div>
      <h1>Recipe sharing app</h1>
      <SearchBar/>
    <AddRecipeForm/>
   <RecipeList/>
   <FavoriteList/>
   <RecommendationList/>
   <Routes>
    <Route path="/recipes/:id" element={<RecipeDetails/>}/>
   </Routes>
   </div>

    
    </BrowserRouter>
  
  );
};

export default App;
