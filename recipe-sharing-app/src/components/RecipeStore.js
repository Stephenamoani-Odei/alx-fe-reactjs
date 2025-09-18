import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id , updateRecipe) => 
    set(state => ({
    recipes: state.recipes.map(recipe =>
     recipe.id === id ? { ...recipe, ...updateRecipe} : recipe
    ) 
        
  })),
  deleteRecipe: (id)=>
    set (state => ({
        recipes: state.recipes.filter( recipes => recipes.id !== id)
    })),
    getRecipeById: (id) =>
        get().recipes.find(recipe => recipe.id === id)
}));
export { useRecipeStore};
