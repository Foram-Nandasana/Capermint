import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './Data.json';

export const Item = ({  }) => {

    const { id } = useParams();
    const ids = Number (id)
    const selectedItem = data.find(item => item.id === ids);
  
    return (
      <div>
        {selectedItem ? (
          <div>
            <h1>{selectedItem.id}</h1>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.des}</p>
            <h3>{selectedItem.price}</h3>
          </div>
        ) : (
          <p>Data not found</p>
        )}
      </div>
    );

        }





















//   const { id } = useParams();
//   const [matchingData, setMatchingData] = useState([]);

//   useEffect(() => {
//     const ids = Number (id)
//     const filteredData = data.filter(item => item.id === ids);
//     setMatchingData(filteredData);
//     console.log(typeof id);
//     console.log(typeof ids);
//     console.log(filteredData, "filteredData");
//     console.log(matchingData, "matchingData");

//   }, [id, data]);

//   return (
//     <div>
//       {matchingData.length === 0 ? (
//         <h2>Data not found</h2>
//       ) : (
//         <>
//          <h2>{matchingData[0].id}</h2>
//           <h3>{matchingData[0].title}</h3>
//           <p>{matchingData[0].des}</p>
//           <h3>{matchingData[0].price}</h3>
          
//         </>
//       )}
//     </div>

//   );


