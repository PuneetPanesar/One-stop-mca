import React from 'react';
import './Contacts.css';
import '../../App.css';
import { Link } from 'react-router-dom';
const Contacts =(props)=>{

        return (
           
            <div className="App.js">
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
          <footer className="footer">
           <div className="container">
               <div className="row" style={{width:"100%"}}>
                   <div className="footer-col">
                       <h4>Community</h4>
                       <ul>
                           {/* <li><a href="">about us</a></li> */}
                           <li><Link to="/aboutus" exact>About Us</Link></li>
                           <li><Link to="/faq" exact>FAQs</Link></li>
                           
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>EXAMS</h4>
                       <ul>
                           <li><a href="https://www.nimcet.in/">NIMCET</a></li>
                           <li><a href="https://www.jnu.ac.in/scss-mca">JNU</a></li>
                           <li><a href="https://vit.ac.in/all-courses/pg/master-of-computer-application">VITEE</a></li>
                           
                           <li><a href="http://cs.du.ac.in/admission/mca/">DU</a></li>
                           <li><a href="https://cetcell.mahacet.org/">MHTCET MCA</a></li>
                       </ul>
                   </div>
                    <div className="footer-col">
                       <h4>Interviews with</h4>
                       <ul>
                           <li><a href="https://youtu.be/J6Rw3yMIPqk">NIMCET AIR 5</a></li>
                           <li><a href="https://youtu.be/K9A1R1FLL8I">IGDTUW AIR 1</a></li>
                           <li><a href="https://www.youtube.com/watch?v=mvPECqxSzZU">JNU AIR 1</a></li>
                           <li><a href="https://www.youtube.com/watch?v=9zNygYh4U-o">BHU AIR 10</a></li>
                       </ul>
                   </div> 
                   <div className="footer-col">
                       <h4>follow us</h4>
                       <div className="social-links">
                           <a href="https://www.facebook.com/OneStop-MCA-108154411334782"><i className="fab fa-facebook-f"></i></a>
                           <a href="https://www.youtube.com/channel/UCqnhLFHVnYZl17CwkemPpIQ"><i className="fab fa-youtube"></i></a>
                           <a href="https://www.instagram.com/onestopmca/"><i className="fab fa-instagram"></i></a>
                           <a href="#"><i className="fab fa-telegram"></i></a>
                       </div>
                   </div>
               </div>
           </div>
      </footer>
        </div>
         
          );
      
}
export default Contacts;