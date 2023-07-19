
import instalogo from "@/assets/instalogo.png";
import githublogo from "@/assets/githublogo.png";
import facebooklogo from "@/assets/facebooklogo.png";
import linkedinlogo from "@/assets/linkedinlogo.png";
import leetcodelogo from "@/assets/leetcodesslogo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-8">
      <div className="justify-content mx-auto   w-11/12 gap-32 md:flex">
        <div className = "justify-content mx-auto my-auto w-11/12 md:flex ">
        <div className="mt-16 basis-1/2 md:mt-0 ">
            <a target="_blank" href="https://www.instagram.com/maxpistawka/"><img src={instalogo}
                className = "h-30 w-20"
             alt="Five cats looking around a field."/></a>
         
        
        </div>

        <div className="mt-16 basis-1/2 md:mt-0">
            <a target="_blank" href="https://www.linkedin.com/in/maxpistawka"><img src={linkedinlogo}  className = "h-30 w-20" alt="Five cats looking around a field."/></a>
         
        
        </div>
        <div className="mt-16 basis-1/2 md:mt-0 ">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100022022074908"><img src={facebooklogo} className = "h-30 w-20" alt="Five cats looking around a field."/></a>
         
        
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
            <a target="_blank" href="https://github.com/maxpistawka"><img src={githublogo} className = "h-30 w-20" alt="Five cats looking around a field."/></a>
         
        
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
            <a target="_blank" href="https://leetcode.com/maxpistawka/"><img src={leetcodelogo} className = "h-30 w-20" alt="Five cats looking around a field."/></a>
         
        
        </div>
        
        
        </div>
        <div className="mt-16 basis-1/4 md:mt-2">
          <h4 className="font-bold">Contact</h4>
          <p className="my-1">maxpistawka@gmail.com</p>
          <p>604-990-2998</p>
          <div id="bottom"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;