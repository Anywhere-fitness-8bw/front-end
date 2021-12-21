import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  min-width: 13%;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  color:green;
  transition: all .2s;
  margin-top: 5%;
  &&:hover {
      cursor: pointer;
      background-color: green;
      transform: scale(1.125);
      color: white;
      transition: ease-in-out .2s;
  }
`;

const StyledImgs = styled.img`
        
`;

const StyledClassOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledClassContainters = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

export default function ClassList(props) {

    return (        
        <StyledContainer>
            <h1>Select Your Class</h1>
                
            <form className='classForm'> 
                <h2>Class Intensity</h2>
                <label className='intensityDropdown'>Intensity: 
                    <select >
                        <option value={""}>-- Select your Intensity --</option>

                        <option value='Small'>Mild</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Intense</option>
                    </select>
                </label>

                
                <StyledClassOptions>
                    <h2>Available Classes</h2>                    
                    <StyledClassContainters>Crossfit:
                        <img src='' alt='Image of Crossfit'/>
                        <input
                            type='checkbox'
                        />
                    </StyledClassContainters>

                    <StyledClassContainters>Power Lifting: 
                        <img src='' alt='Image of PowerLifters'/>
                        <input
                            type='checkbox'
                        />
                    </StyledClassContainters>

                    <StyledClassContainters>Yoga: 
                        <img src='' alt='Image of Our Yoga Instructors'/>
                        <input
                            type='checkbox'
                        />
                    </StyledClassContainters>

                    <StyledClassContainters>Zumba: 
                        <img src='' alt='Image of Our Zumba Meets'/>
                        <input
                            type='checkbox'
                        />
                    </StyledClassContainters>
                </StyledClassOptions>

                <h3>Would You Like to be A Part of Our Newsletter?</h3>
                <label email='email'>Email: 
                    <input
                        type="email"
                        placeholder="Please Input Your Email"
                    />
                </label>
            </form>            
           <StyledButton className='submitbtn' type='submit'>Sign Up for Your Class!</StyledButton> 
        </StyledContainer>
      )
} 