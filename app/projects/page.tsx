"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";


const page = () => {
  
  return (
    <div>
      <Navbar/>
      <div className="pt-25">
        {/* <Contact/> */}
        <Work
          showAll={true}
          showAllButton={false}
        />
      </div>
      <Footer/>
    </div>
  );
}; 

export default page;
