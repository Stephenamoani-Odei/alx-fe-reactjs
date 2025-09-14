import create from 'zustand'

const updaterecipe= create ( set => ({
  recipes:[],
  updaterecipe: (updaterecipe) => set (state => ({ recipes: [...state.recipes, updaterecipe]})),
  setrecipes : (recipes) => set ({ recipes})
}))



const deleterecipe= create ( set => ({
  recipes: [],
  deleterecipe: (id) => set (state => ({ recipes: state.recipes .filter(recipe => recipe.id !== id)}))
}))



const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })

}));
export { useRecipeStore, updaterecipe, deleterecipe};