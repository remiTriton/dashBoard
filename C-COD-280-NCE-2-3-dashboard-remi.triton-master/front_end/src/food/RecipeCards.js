import React from 'react';
import './RecipeCards.css';

const RecipeCards = (props) => {


    return (
        <div className="container">

            {props.recipes.map((recipe) =>
                    <div className="card" key={recipe.id}>
                        <img src={recipe.image} className="img-fluid rounded-start" alt="" />

                        <div className="card-body">
                            <h5 className="card-title">{recipe.label}</h5>
                            <p className="card-text">
                            <a href={recipe.url} target="_blank" class="card-link stretched-link">recipe</a></p>

                        </div>
                    </div>
                )}
                
        </div>




    )
}

export default RecipeCards
