import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "./style.css"

function App() {
  const[formData, setFormData] = useState({firstName : "",lastName : "",email : "", country : "",street : "", city : "", state : "", code : "",commentsMark : false,candidatesMark : false,offersMark : false,mode : ""})
  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value

      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("final Output : ")
    console.log(formData)
  }
  return (
      <div className='form-container'>
        <form className='App'>
          <label>First name</label>
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
          />
          <label>Last name</label>
       
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          />
      
          <label>Email address</label>
          
          <input
          type="email"
          placeholder=''
          onChange={changeHandler}
          name="email"
          value={formData.email}
          />
          
          <label>Country</label>
          
          <select
          className='countryBox'
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          >
          <option value='India'>India</option>
          <option value="USA">USA</option>
          <option value='UK'>UK</option>
          <option value='UAE'>UAE</option>
          <option value='China'>China</option>
          <option value='Russia'>Russia</option>
          </select>
          
          <label>Street address</label>
          
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="street"
          value={formData.street}
          />
          
          <label>City</label>
          
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="city"
          value={formData.city}
          />
          
          <label>State/Provience</label>
        
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="state"
          value={formData.state}
          />
          
          <label>ZIP/Postal code</label>
          
          <input
          type="text"
          placeholder=''
          onChange={changeHandler}
          name="code"
          value={formData.code}
          />
          
          <label>By Email</label>
          <div className='tickSecton'>
          <input
          className='tick'
          type='checkbox'
          onChange={changeHandler}
          name='commentsMark'
          id='commentsMark'
          checked={formData.commentsMark}
          />
          <label  htmlFor='commentsMark'> Comments</label>
          <p>Get notified when someones posts a comment on a posting</p>
          <input
          className='tick'
          type='checkbox'
          onChange={changeHandler}
          name='candidatesMark'
          id='candidatesMark'
          checked={formData.candidatesMark}
          />
          <label  htmlFor='candidatesMark'> Candidates</label>
          <p>Get notified when a candidate applies for a job</p>
          <input
          className='tick'
          type='checkbox'
          onChange={changeHandler}
          name='offersMark'
          id='offersMark'
          checked={formData.offersMark}
          />
          <label  htmlFor='offersMark'> Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer</p>
          
          <label>Push Notification</label>
          <p>These are delivered via SMS to your mobile number</p>
          
          <input
          className='tick'
          type='radio'
          onChange={changeHandler}
          name="mode"
          value="Everything"
          id="Everything"
          checked={formData.mode === "Everything"}
          />
          <label htmlFor='Everything'> Everything</label>
          <br/>
          <input
          className='tick'
          type='radio'
          onChange={changeHandler}
          name="mode"
          value="asMail"
          id="asMail"
          checked={formData.mode === "asMail"}
          />
          <label htmlFor='asMail'> Same as Email</label>
          <br/>
          <input
          className='tick'
          type='radio'
          onChange={changeHandler}
          name="mode"
          value="noNotification"
          id="noNotification"
          checked={formData.mode === "noNotification"}
          />
          <label htmlFor='noNotification'> No push notification</label>
          </div>  
          <button onClick={submitHandler}>Submit</button>
        
        </form>
      </div>
  );
}

export default App;
