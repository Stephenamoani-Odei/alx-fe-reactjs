// RecipeList component
  import { useRecipeStore } from '../components/recipeStore';
  import {Link} from 'react-router-dom';
  import FavoriteToggleButon from './FavoriteToggleButton'
  


  const RecipeList = () => {
    const fliteredRecipes= useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        <h2>Recipes</h2>

        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to ={` /recipes/ ${recipe.id}`}>View Details</Link>
            <FavoriteToggleButon recipeId={recipe.id}/>
            
          </div>
        ))}
      </div>
    );
  };
    export default RecipeList;