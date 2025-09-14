const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const recipe = recipes.find(r => r.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel Edit' : 'Edit Recipe'}
      </button>

      {isEditing && (
        <EditRecipeForm
          recipe={recipe}
          onSave={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default RecipeDetails;