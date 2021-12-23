import React from 'react';
import axios from 'axios'; 
import { useEffect, useState } from 'react';

import { StyledH1, 
        StyledH2, 
        StyledH3, 
        StyledContainer, 
        StyledClassOptions,
        StyledContainerL,
        StyledContainerR,
        StyledButton,
        StyledImgs,
        StyledClassContainers
    } from './Styles';


export default function ItemsList(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }


    return (        
        <StyledContainer>
            <StyledH1>Select Your Class</StyledH1>
            <StyledH2>Available Classes</StyledH2>
                
            <form className='classForm' onSubmit={onSubmit}> 

                <StyledClassOptions>                     
                    <StyledContainerL>           
                        <StyledClassContainers>
                            <StyledImgs src='https://www.vmcdn.ca/f/files/via/import/2017/12/31113259_shutterstock_749969473.jpg;w=960' alt='Image of Crossfit'/>
                            <StyledH3>Crossfit</StyledH3>                        
                            <input
                                name='crossfit'
                                type='checkbox'
                                checked={values.crossfit}
                                onChange={onChange}
                            />
                        </StyledClassContainers>

                        <StyledClassContainers>
                            <StyledImgs src='https://cdn.shopify.com/s/files/1/0327/8461/3514/articles/powerlifting-exercises-for-beginners-1024x576_1024x.jpg?v=1582312375' alt='Image of PowerLifters'/>
                            <StyledH3>Power Lifting</StyledH3>
                            <input
                                name='powerlifting'
                                type='checkbox'
                                checked={values.powerlifting}
                                onChange={onChange}
                            />
                        </StyledClassContainers>
                    </StyledContainerL>      

                    <StyledContainerR>
                        <StyledClassContainers>
                            <StyledImgs src='https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0OTE4ODAzMDQwMzE0Njg1/yoga-gettyimages-1142820079-promo.jpg' alt='Image of Our Yoga Instructors'/>
                            <StyledH3>Yoga</StyledH3>
                            <input
                                name='yoga'
                                type='checkbox'
                                checked={values.yoga}
                                onChange={onChange}
                            />
                        </StyledClassContainers>

                        <StyledClassContainers>
                            <StyledImgs src='https://www.verywellfit.com/thmb/WtaRzGOCbJdVYFlWr_7VOfwn_Ow=/3000x2002/filters:no_upscale():max_bytes(150000):strip_icc()/zumba-fatcamera-c9d4ee824a0f4fda883484f878abc8ae.jpg' alt='Image of Our Zumba Meets'/>
                            <StyledH3>Zumba</StyledH3>
                            <input
                                name='zumba'
                                type='checkbox'
                                checked={values.zumba}
                                onChange={onChange}
                            />
                        </StyledClassContainers>
                    </StyledContainerR>
                </StyledClassOptions>

                <StyledClassContainers>
                <StyledH2>Class Intensity</StyledH2>
                <label className='intensityDropdown'>
                    <select 
                        onChange={onChange}
                        value={values.int}
                        name='intensity'
                    >
                        <option value={""}>-- Select your Intensity --</option>

                        <option value='mild'>Mild</option>
                        <option value='medium'>Medium</option>
                        <option value='intense'>Intense</option>
                    </select>
                </label>
                </StyledClassContainers>
                                
                <StyledContainer>
                <StyledH3>Would You Like to be A Part of Our Newsletter?</StyledH3>
                <label email='email'>
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                        placeholder={`What's Your Email?`}
                    />
                </label>
                </StyledContainer>
            </form>            
           <StyledButton disabled={disabled}>Sign Up for Your Class!</StyledButton> 
        </StyledContainer>
      )
} 