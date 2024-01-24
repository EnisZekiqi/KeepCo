
import {motion,useAnimate} from "framer-motion"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Navbar = () => {

const variants = {
    hidden:{
        opacity:0,
        y:-25
    },
    visible:{
        opacity:1,
        y:10,
        transition:{staggerChildren:0.2}
    }
}



    const items =[
        "item1","item2","item3","item4"
    ]

    return ( 
        <div className="navbar">
         <nav class="navbar  fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" color="primary" href="#">Offcanvas navbar</a>
    <button  class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <motion.a  variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} class="nav-link" href="#">Link</motion.a>
          </li>
          <li class="nav-item">
            <motion.a variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} class="nav-link" href="#">Link</motion.a>
          </li>
          <li class="nav-item dropdown">
            <motion.a variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </motion.a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;