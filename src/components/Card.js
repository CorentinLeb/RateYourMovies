import React from 'react';

const Card = ({ movie }) => {

    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
    }

    return (
        <div className="card">
            <img src={ movie.poster_path ?
                "https://image.tmdb.org/t/p/w500/" + movie.poster_path : "./img/poster.jpg"} alt="affiche film" />
            <h2>{movie.title}</h2>
            {movie.release_date ? (
                <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
            ) : ""
        }
        </div>
    );
};

export default Card;