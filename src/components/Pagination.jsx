import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

export const Pagination = ({ next, previous }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        {previous ? (
          <button style={{width: '40px', height: '40px', color: '#fff', backgroundColor: 'darkblue', border:'none', padding: 6, borderRadius: 5, cursor : 'pointer'}} onClick={previous}>            
            <BsArrowLeftCircle />
          </button>
        ) : (
          <button style={{width: '40px', height: '40px',color: 'lightblue', border:'none', padding: 6, borderRadius: 5}}> 
          <BsArrowLeftCircle />     
          </button>
        )}
      </li>
      <li>
        {next ? (
          <button onClick={next}>
            <BsArrowRightCircle />
          </button>
        ) : (
          <button style={{opacity: 0}}>      
          </button>
        )}
      </li>
    </ul>
  );
};
