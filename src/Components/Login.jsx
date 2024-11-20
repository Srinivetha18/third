import React from 'react'
import './Login.css'; 

export default function Login() {
  return (
    <div>
      <div class="container">
    <div class="left">
          <img src="https://static.vecteezy.com/system/resources/previews/020/952/683/non_2x/argan-extract-for-hair-product-illustration-vector.jpg" alt=""  height={750} width={600}/>
    </div>
    <div class="right" >
        <form action="" style={{marginTop:20}}>
            {/* <label htmlFor="">First Name*</label> */}
            <input type="text" name="" id="firstname" placeholder='First Name*'     style={{height:40, width:200, padding:5}}/>
            {/* <label htmlFor="">Last Name*</label> */}
            <input type="text" name="" id="lastname" placeholder='Last Name*' style={{height:40, width:200, marginLeft:20,padding:5}}/>
            <br />
            <br />
            
            {/* <label htmlFor="">Work Mail *</label> */}
            <input type="text" name="" id="" placeholder='Mail Id*'   style={{height:40, width:500,padding:5}}/>
            <br />
            <br />
            {/* <label htmlFor="">Phone Number *</label> */}
            <input type="text" name="" id="" placeholder='Phone Number*' style={{height:40, width:500,padding:5}}/>
            <br />
            <br />
            
            {/* <label htmlFor="">Where are you located *</label> */}
            {/* <input type="text" name="" id="" style={{height:30, width:500}}/> */}
            <label for="cars">Choose your location:</label>
                <select name="location" id="location" style={{height:50, width:500}}>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Afghasitan">Afghasitan</option>
                    <option value="South Africa">Audi</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherland">Netherland</option>
                    <option value="Zambia">Zambia</option>
                </select>
                </form>
                <br />
                <br />

           <input type="text" name="" id="companyname" placeholder='Company Name*'  style={{height:40, width:500,padding:5}} required/>
           <br />
           <br />
           <input type="text" name="" id="jobtitle" placeholder='Job Title*'  style={{height:40, width:500,padding:5}} required/>
           <br />
           <br />
           <label htmlFor="">Leave your message here:</label>
           <textarea id="w3review" name="w3review" rows="4" cols="70"></textarea>
           {/* <input type="text-area" name="" id="text" placeholder='What are you organizations training needs?' style={{height:40, width:500,padding:5}} required/> */}
        <br />
        <br />
        <button type='submit' style={{height:50, width:500,padding:5, color:'white',backgroundColor:'red', border:'none'}}>Submit</button>
        <p>By signing up, you agree to our terms and privacy policy. You agree that we can contact you about Udemy and use data from third parties to personalize your experience.</p>
    
    
    
    
    </div>

  </div>
    </div>
  )
}
