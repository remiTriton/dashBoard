import { React, useState } from "react";
import RecipeCards from "./RecipeCards";
import './Food.css';

function Recipe() {


   const  drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

   const  noAllowDrop = (e) =>{
        e.stopPropagation();
    }
    const [searchWord, setSearchWord] = useState("");
    const [recipes, setRecipes] = useState([]);

    const recipeObjects = recipes.map((recipe, i) => ({
        id: i,
        label: recipe.recipe.label,
        image: recipe.recipe.image,
        url: recipe.recipe.url,
    }))



    function getRecipe() {

        const APP_ID = "e295fdd0";
        const APP_KEY = "b934d9d94297c00d2783a8e138c30af5";

        const url = `https://api.edamam.com/search?q=${searchWord}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setRecipes(result.hits)
                    setSearchWord("");
                })

    }

    return (
        <div className="container container-master" id='food'  draggable="true" onDragStart={drag} onDragOver={noAllowDrop}>
            <div className="row">
                <div className="col">

                    <h1>Search a Recipe</h1>
                    <div className="form-inline search-bar">


                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search..."
                            value={searchWord}
                            onChange={(e) => {
                                setSearchWord(e.target.value);
                            }}
                        />
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                getRecipe();
                            }}
                        >
                            <i className="bi bi-search" size="20px"></i>
                        </button>
                    </div>
                    <div className="recipes">

                        <RecipeCards recipes={recipeObjects} />

                    </div>
                </div>
            </div>
        </div>

    )
}




export default Recipe;
