import React, { useState } from 'react';
import { Wrapper, Left, Right } from './styled';

export default function ToggleSlider({
  onClick,
  optionText,
}) {
  const [isLeft, setIsLeft] = useState(false);

  function clickHandler(event) {
    event.target.classList.contains('left')
      ? setIsLeft(true)
      : setIsLeft(false);
    onClick(event.target.innerText.toLowerCase());
  }

  return(
    <Wrapper>
      <Left
        className='left'
        onClick={clickHandler}
        clicked={isLeft}
      >
        {optionText}
      </Left>
      <Right
        onClick={clickHandler}
        clicked={isLeft}
      >
        GIF
      </Right>
    </Wrapper>
  );
};