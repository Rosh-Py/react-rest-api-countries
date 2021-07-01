import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  .loading {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid grey;
    border-top-color: var(--clr-text-1);
    animation: rotate 0.5s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotateZ(360deg);
    }
  }
`;

export default Loading;
