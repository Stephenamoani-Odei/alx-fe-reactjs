import {create}from 'zustand';

export const useRecipeStore = create(set,get => ({
    recipes: [],
    filteredRecipes: [],
    searchTerm: '',
    favorites:[],
    recommendations: [],

    addRecipe: (newRecipe) => {
        const updated=[...get().recipes,newRecipe];
        set({recipes:updated});
        get().filteredRecipes();
    },

    updateRecipe: (updateRecipe) => {
       const updated=get().recipes.map(r=> r.id === updateRecipe.id ?
        updateRecipe : r
       );
       set ({recipes:updated});
       get().filteredRecipes();
},
    deleteRecipe: (id) => {
        const updated=get(). recipes.filter(r => r.id !== id );
        set({recipes:updated});
        get().filteredRecipes();
        set((state) => ({
            favorites: state.favorites.filter(fav =>
                fav.id !== id
            )
        }));

    },

    setSearchTerm: (term ) => {
        set({searchTerm:term});
        get(). filteredRecipes();
    },

    filteredRecipes: () => {
        const { recipes, searchTerm} = get();
        const filtered= recipes.filter((r) =>
            r.title.toLowerCase(). includes(searchTerm.toLowerCase())
         );
            set({filteredRecipes:filtered});
    },

    // FAVORITES
    addFavorite: (id) => set ((state) => ({
        favorites: [...state.favorites, id],
    })),

    removeFavorite: (id ) => set ((state) => ({
        favorites: state.favorites.filter(favId => favId !== id),

    })),
    isFavorite: (id) => get().favorites.includes(id),

    // RECOMMENDATIONS
    setRecommendattions: () => {
        const { recipes, favorites} = get();
        const recommended = recipes.filter((r) => 
            favorites.includes(r.id) && Math.random() > 0.4 // ~60% chance
        );
        set({ recommendations : recommended});
    },


}));

