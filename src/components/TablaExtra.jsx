import React from 'react'
import PropTypes from 'prop-types'


function TablaExtra({id,title, length, rating, genres, awards, key}) {
    return (
        <table class="table" /* key={key} */>

            <thead>
                <tr>
                    <th scope="col">TITULO</th>
                    <th scope="col">DURACION</th>
                    <th scope="col">RATING</th>
                    <th scope="col">GENERO</th>
                    <th scope="col">PREMIOS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td scope="row">{title}</td>
                    <td>{length}</td>
                    <td>{rating}</td>
                    <td>{genres}</td>
                    <td>{awards}</td>
                </tr>
            </tbody>
            
        </table>
    )
}

TablaExtra.PropTypes = {
    id: PropTypes.number,
    tittle: PropTypes.string,
    length : PropTypes.number,
    rating : PropTypes.number,
    genres : PropTypes.string,
    awards : PropTypes.string
}

export default TablaExtra
