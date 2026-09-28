# Changes Made for 3D Flip Card

## Overview
Added an interactive 3D flip effect and a glowing hover animation to the Card component. The front of the card displays only the company logo, and upon clicking, the card flips to reveal the job details on the back. A glowing animated border appears when the user hovers over the card.

## Files Modified:
- `react0.4/src/index.css`

## Details of CSS Changes in `index.css`:
1. **`.card-wrapper`**:
   - Added `perspective: 1000px;` to create the 3D space.
   - Replaced the old `.card` container styles.
   - Added a `::before` pseudo-element to create the glowing animated border gradient (`linear-gradient`) that fades in on `:hover`.

2. **`.card-inner`**:
   - Added `transform-style: preserve-3d;` to keep children in 3D space.
   - Added `transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);` for the smooth flip animation.
   - Added a `box-shadow` for depth.

3. **Flip Logic (`.card-wrapper.flipped .card-inner`)**:
   - Rotates the inner container by 180 degrees along the Y-axis (`rotateY(180deg)`).

4. **`.card-front` & `.card-back`**:
   - Both styled with `position: absolute;`, full width/height, and `backface-visibility: hidden;` to hide their backsides.
   - The `.card-back` is initially rotated 180 degrees (`transform: rotateY(180deg);`).
   - Styled `.card-front` elements (logo image and title) to center them properly.

5. **Updated Selectors**:
   - Changed `.card .top` to `.card-back .top` to correctly target the header portion on the back of the card.
