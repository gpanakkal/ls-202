/*
1. The img uses the content-box sizing model, so its margins, padding, and border need to be added to its own dimensions. The div uses the border-box model, so its own padding and border need to be added to the img's dimensions to get the minimum dimensions.
Div required width: 500 + 19 + 11 + 20*2 + 4*2 + 1*2
580px
required height: 300 + 20 + 10 + 10*2 + 4*2 + 1*2
360px

2. Section is content-box.
width: 580px
height: 360px
Difference between this and (1) is that the img could lie on the same line as other elements if its container was wide enough, while this uses the block display model so it always lies on its own line.

3. The em is inline, so its border, top and bottom margins, width, and height are ignored.

Width and height cannot be correctly inferred from the CSS, but if we assume the actual content width and height to be 500px and 300px respectively:
req width: 500 + 19 + 11 + 4*2 + 20*2 + 1*2 = 580px
req height: 300 + 10*2 + 4*2 + 1*2 = 330px

4. The article is border-box, so its padding and border are included in its dimensions.
req width: 532px
req height: 332px

5. 2, 3, 6

6. Articles might default to block display since they're containers; use `display: inline-block` (or `inline flow-root`) and `box-sizing: border-box` to let them show side-by-side.

7. Putting the articles on separate lines results in a newline text node between them.

Soln: the newline adds the width of the space to the line, causing the second article to flow over to the next line since it would otherwise exceed the width of its container.
*/