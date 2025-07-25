import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailButton = ({ athlete }) => {
    return (
        <StyledWrapper>
            <Link to={`/dettaglio-atleta/${athlete.id}`} className="button">
                <div className="button-outer">
                    <div className="button-inner">
                        <span>Più dettagli</span>
                    </div>
                </div>
            </Link>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    all: unset;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    border-radius: 100em;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow:
      -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
      0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
  }

  .button::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: calc(100% + 0.3em);
    height: calc(100% + 0.3em);
    top: -0.15em;
    left: -0.15em;
    border-radius: inherit;
    background: linear-gradient(
      -135deg,
      rgba(5, 5, 5, 0.5),
      transparent 20%,
      transparent 100%
    );
    filter: blur(0.0125em);
    opacity: 0.25;
    mix-blend-mode: multiply;
  }

  .button .button-outer {
    position: relative;
    z-index: 0;
    border-radius: inherit;
    transition: box-shadow 300ms ease;
    will-change: box-shadow;
    box-shadow:
      0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
      0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
      0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
  }

  .button:hover .button-outer {
    box-shadow:
      0 0 0 0 rgba(5, 5, 5, 1),
      0 0 0 0 rgba(5, 5, 5, 0.5),
      0 0 0 0 rgba(5, 5, 5, 0.25);
  }

  .button-inner {
    --inset: 0.035em;
    position: relative;
    z-index: 1;
    border-radius: inherit;
    padding: 1em 1.5em;
    background-image: linear-gradient(
      135deg,
      rgba(230, 230, 230, 1),
      rgba(180, 180, 180, 1)
    );
    transition:
      box-shadow 300ms ease,
      clip-path 250ms ease,
      background-image 250ms ease,
      transform 250ms ease;
    will-change: box-shadow, clip-path, background-image, transform;
    overflow: clip;
    clip-path: inset(0 0 0 0 round 100em);
    box-shadow:
          /* 1 */
      0 0 0 0 inset rgba(5, 5, 5, 0.1),
      /* 2 */ -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
      /* 3 */ 0 0 0 0 inset rgba(5, 5, 5, 0.1),
      /* 4 */ 0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
      /* 5 */ 0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
      /* 6 */ 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
      /* 7 */ -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25);
  }

  .button:hover .button-inner {
    clip-path: inset(
      clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px)
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 100em
    );
    box-shadow:
          /* 1 */
      0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
      /* 2 */ -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
      /* 3 */ 0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
      /* 4 */ 0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
      /* 5 */ 0 0 0 0 inset rgba(255, 255, 255, 1),
      /* 6 */ 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
      /* 7 */ -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
  }

  .button .button-inner span {
    position: relative;
    z-index: 4;
    font-family: "Inter", sans-serif;
    font-size:15px;
    letter-spacing: -0.05em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      135deg,
      rgba(25, 25, 25, 1),
      rgba(75, 75, 75, 1)
    );
    -webkit-background-clip: text;
    background-clip: text;
    transition: transform 250ms ease;
    display: block;
    will-change: transform;
    text-shadow: rgba(0, 0, 0, 0.1) 0 0 0.1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .button:hover .button-inner span {
    transform: scale(0.975);
  }

  .button:active .button-inner {
    transform: scale(0.975);
  }`;

export default DetailButton;
