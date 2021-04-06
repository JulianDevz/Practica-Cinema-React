import React, { useContext } from 'react';
import peliculaContext from '../../context/pelicula/peliculaContext';

const Pagination = () => {

    const data = useContext(peliculaContext)
    const { pageLinks } = data

    return ( 
        <div className="pagination">
            { pageLinks }
        </div>
    );
}
 
export default Pagination;