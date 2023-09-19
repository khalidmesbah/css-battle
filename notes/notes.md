# Css Battle Solution

- padding instead of width and height
- - - : → instead of position left & top
- alt code
- html entities windows+;
- special character

[Special Characters - Alt Keyboard Sequences](https://tools.oratory.com/altcodes.html)

[Alt Codes - How to Type Special Characters and Keyboard Symbols on Windows Using the Alt Keys](https://www.freecodecamp.org/news/alt-codes-special-characters-keyboard-symbols-windows-list/)

[Alt Codes](https://www.alt-codes.net/)

- Margin-right trumps over margin-left when used in shorthand notation
- **`position:fixed`** almost always beats **`position:absolute;`**
- top and left > right and bottom
- never use **`rotate(180deg)`** in transforms, use **`scaleY(-1)`**
- For transparent color use #0000
- bgcolor:8921831 = background:#8921831

```css
<p style=>
<style>
  *{
    margin:var(--);
    padding:var(--p);
    background:var(--g,);
    border-radius:var(--o);
    box-shadow:var(--b);
		position:fixed;
}
```

- don't quote attributes, just use **`+`** instead of a space, eg:**`<img style=box-shadow:0+0+0+2px#FFF>`** vs **`<img style="box-shadow:0 0 0 2px#FFF">`**
- if you use a **`border-radius`** of over 99% consider **`in`** as a unit instead (eg, **`9in`**)
- in a pinch, you can add made-up attributes and select them. **`<p i>`** is selectable via **`[i]: {}`**
- <p> tags won't nest if they're adjacent, so <p><p> will give you two paragraphs to work with without closing any tags
- you don't need an extra space if you're using percentages.
1. <img>, <p>, <a> can not be nested
2. don't use px inside width, height, margin, padding
3. don't use **`#`** in color or bgcolor
4. collapse values in clip-path, border-radius whenever possible
5. content-box could be set right before color in a background shorthand to save an extra space
6. if you happen to duplicate colors use CSS variables or background:currentColor
7. border and box-shadow inherit current color
8. in most cases it's safe to replace body selector with **`*`**
9. Probably the most valuable trick: you can write **`,0,`** and **`red,color 0`** in gradients to get a hard edge
10. You don't have to include last values of clip-path if the're zeros and it's the very last property
11. Almost anything in background shorthand can be collapsed if placed correctly
12. Study CSS Units to replace pixels with shorter values
- abcde
    
    Personnaly, I use invalid tags with a trick to keep it clear but tiny even in minified code.
    For example my code starts with
    
    ```
    <a><b><c><d><e>
    ```
    
    and then, at the end, I use
    
    ```
    *{position:fixed
    ```
    
    which let me use these tags as I want.
    

[Tips n' tricks · CSSBattle](https://spectrum.chat/css-battle/general/tips-n-tricks~6034b7fa-d08b-463a-9720-decb5e2c0f5b)

- #0000 if background color is needed

```css
background:radial-gradient(circle,#f3ac3c 21%,#1a4341 1q)
background:radial-gradient(circle,#f3ac3c 21%,#1a4341 0)
```

- what repeats the most take - - not - -g or - - p

```css
body NOT style 
<body bgcolor=0B2429 style=padding:67+167>
<p style=padding:75;border-radius:67%0;background:#f3ac3c;
box-shadow:-53q+0#998235,-106q+0#1a4341>
```

```css
/* q -> cm */
126q=4cm
/* px -> cm */
1cm = 37.795px
1 cm	37.7952755906 pixel (X)
2 cm	75.5905511811 pixel (X)
3 cm	113.3858267717 pixel (X)
5 cm	188.9763779528 pixel (X)
10 cm	377.9527559055 pixel (X)
/* px -> pc/em */
16px=1pc=1em
64px=4pc=4em
70 PX	= 6.0021925528099E-19 pc
1em	16px
2em	32px
4em	64px
5em 80px
25em	400px
50em	800px
75em	1200px
/* px -> q */
/* px -> pt */  *** 100px ------> 132px ====pt best
12px	9pt
16px	12pt	1em	100%
100px 75pt
/* px -> in */
1 in	96 pixel (X)
2 in	192 pixel (X)
3 in	288 pixel (X)
5 in	480 pixel (X)
/* px -> ex */
1ex = 7.156px, 32ex = 229px
/* px -> ch */
1ch = 8px
```

- px to %
    
    ```css
    /* px -> % */
    1px	6%
    2px	13%
    3px	19%
    4px	25%
    5px	31%
    6px	38%
    8px	50%
    10px	63%
    12px	75%
    14px	88%
    15px	94%
    16px	100%
    18px	113%
    20px	125%
    24px	150%
    25px	156%
    28px	175%
    32px	200%
    36px	225%
    40px	250%
    44px	275%
    48px	300%
    50px	313%
    56px	350%
    64px	400%
    72px	450%
    75px	469%
    80px	500%
    90px	563%
    100px	625%
    ```
    
- vw to px
    
    ```css
    VW	Pixel
    1 vw	19.2 px
    2 vw	38.4 px
    3 vw	57.6 px
    4 vw	76.8 px
    5 vw	96 px
    6 vw	115.2 px
    7 vw	134.4 px
    8 vw	153.6 px
    9 vw	172.8 px
    10 vw	192 px
    11 vw	211.2 px
    12 vw	230.4 px
    13 vw	249.6 px
    14 vw	268.8 px
    15 vw	288 px
    16 vw	307.2 px
    17 vw	326.4 px
    18 vw	345.6 px
    19 vw	364.8 px
    20 vw	384 px
    21 vw	403.2 px
    22 vw	422.4 px
    23 vw	441.6 px
    24 vw	460.8 px
    25 vw	480 px
    ```
    
- vh to px
    
    ```css
    VH	Pixel
    1 vh	19.2 px
    2 vh	38.4 px
    3 vh	57.6 px
    4 vh	76.8 px
    5 vh	96 px
    6 vh	115.2 px
    7 vh	134.4 px
    8 vh	153.6 px
    9 vh	172.8 px
    10 vh	192 px
    11 vh	211.2 px
    12 vh	230.4 px
    13 vh	249.6 px
    14 vh	268.8 px
    15 vh	288 px
    16 vh	307.2 px
    17 vh	326.4 px
    18 vh	345.6 px
    19 vh	364.8 px
    20 vh	384 px
    21 vh	403.2 px
    22 vh	422.4 px
    23 vh	441.6 px
    24 vh	460.8 px
    25 vh	480 px
    ```
    

```css
if the property
*{margin:var(--);background:var(--g,#191919);padding:var(--p);position:fixed}p{border:10px solid#5DBCF9
turns it to
*{background:var(--g,#191919);padding:var(--p);position:fixed}p{border:10px solid#5DBCF9;margin:var(--

```

/

```css
border-color:#fff
border-color:fff
```

# ***inset insted of margin and width and height and padding and left and right and bottom and top***

border-radius: 100px / 80px;

# my own unit converter to know which unit has the lowest characters

![notes.png](notes.png)

How I approach these. a few things right off the bat to help in your code golfing.

1. Remove all spaces, put everything on one line when you're done.
2. A `<p>` will be a block level element in fewer characters than `<div></div>`
3. You don't need to close elements, the browser will do it for you, this includes the `</style>` at the end.
4. Remove the last `;` in every selector.
5. Remove the last `}` on the last selector in our sheet
6. If you set a `color` it will be the default value for `border` and `box-shadow`
- `color` allows you to set a hex without the `#`
1. Always try to get the smallest units for values
- So in this case `100vw` = `400px`, so instead of using `20px` I can use `5vw` to save a character
1. `padding, margin, top, left, bottom, right` will automatically use `px` and you don't need to type it.
2. Using `` instead of `html` saves 3 characters and applies it to `html`, `body`, and all elements inside
3. You can stack `box-shadow` with commas
- Setting an `inset 0 9in,` shadow basically means make the biggest spread shadow on the inside and is fewer characters than adding `background:#FE5F55` to your selector
1. Setting `margin` values is fewer characters than setting `height, width, top, and left`

I hope this helps give some tips on how to get hacky higher scores.

```
<p><style>*{background:#293462;border-radius:5vw}body{color:FE5F55;margin:90 100 110;padding:30;box-shadow:inset 0 9in,0 5vw#A64942}p{padding:20 70;background:#A64942
```

# useful inline elements

- a
- b
- bdo
- bdi
- del
- img
- ins
- q
- s
- u
- wbr
- big
- br
- dfn
- em
- i
- kbd
- sub
- sup
- tt
- var
- 

# useful block elements

- h1-6
- dd
- dl
- dt
- hr
- li
- ol
- pe
- pre
- ul
- 

# useful inline-block elements

- button
- img
- select
- input & textarea in chrome
