
import React, { useState } from 'react';
import "./Dropdown.css";
import{Sliders,ChevronDown} from "react-feather";

const DisplayBtn = () => {

    const [selectedOption1, setSelectedOption1] = useState(''); 
    const [selectedOption2, setSelectedOption2] = useState(''); 
  
    const handleOptionChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };
  
    const handleOptionChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };

  return (
    <div className="display_options">

      <div className="display_item">
        <p>Grouping</p>
        <select className='dropdown' value={selectedOption1} onChange={handleOptionChange1}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="display_item">
        <p>Ordering</p>
        <select className='dropdown' value={selectedOption2} onChange={handleOptionChange2}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

const DropDown = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <button className='display_button' onClick={toggleCardVisibility}>
      <Sliders size={16} />
        <b>Display</b>
      <ChevronDown size={16} />
        {/* {isCardVisible ? 'Display' : 'Display'} */}
      </button>
      {isCardVisible && <DisplayBtn />}
    </div>
  );
};

export default DropDown;


// ---Aashish's Code----

// import React, { useState } from "react";

// function DropDown(){
//   const [select1, setSelect1] = useState('Display all');
//   const [select2, setSelect2] = useState('');
//   const [select3, setSelect3] = useState('');

// //   console.log(select1);
// //   console.log(select2);
// //   console.log(select3);



//   return (
//     <div className="filter">
      
//         <select value={select1} onChange={e => setSelect1(e.target.value)}>
//           <option>Display all</option>
//           <option>Display by filter</option>
//         </select>
        
//         <div>
//         <select value={select2} onChange={e => setSelect2(e.target.value)}>
//           <option>Status</option>
//           <option>User</option>
//           <option>Priority</option>
//         </select>  
//         </div>     

//         <select value={select3} onChange={e => setSelect3(e.target.value)}>
//           <option>Priority</option>
//           <option>Title</option>
//         </select>       
      
//     </div>

//   );
// }

// export default DropDown;



// ---Cascading Dropdown---

// import React, { useState } from 'react';

// function Dropdown() {
//   const display = ['Grouping', 'Ordering']
//   const options = {
//     'Grouping' : ['By Status','By User', 'By Priority'],
//     'Ordering' : ['Priority','Title'],
//   }

//   const [selectedState, setSelectedState] = useState('')
//   console.log(selectedState)

//   return (
//     <div>
//       <select onChange={(e)=>{setSelectedState(e.target.value)}}>
//         {
//           display.map(state => {
//             return (<option>{state}</option>)
//           })
//         }
//       </select>

      
//         {selectedState && <select>
//           {
//             options[selectedState].map(options=>{
//               return <option>{options}</option>
//             })
//           }
//         </select>}
      
//     </div>
//   );
// }

// export default Dropdown;
