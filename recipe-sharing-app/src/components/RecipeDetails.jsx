import React from 'react';
import { useRecipeStore } from './RecipeStore';


const RecipeDetails = ({ recipeId} ) => {
    const recipes = useRecipeStore(state => 
        state.recipes.find (recipes.id === recipeId));
        if (!recipe) {
            return <p>Recipe not found</p>
        }
        return (
            <div>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <button onclick={() =>navigate(`/edit/${recipes.id}`) }>Edit</button>
                <button onclick={() =>navigate(`/`) }>Back</button>
            </div>
        );

};
export default RecipeDetails;