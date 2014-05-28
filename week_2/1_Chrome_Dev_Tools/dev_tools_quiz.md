#### Include an inline screenshot of your codeschool's points from the profile page:

https://www.codeschool.com/users/bmpasini (12,000 points)
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
  --> Elements and Sources
  * Javascript Debugging
  --> Sources
  * Performance Optimization 
  --> Network

* What's the quick key for your OS to spawn the Dev Tools inspector?
 --> Alt(Option) + Command + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  --> #0b0f11
  --> ../images/home_bg.gif
  * Tweak the background color to white.
  --> Done.
  * Tweak the height of the side bar that contains the logo. Shrink it down to 85px.
  --> Done.
  * Roll over the navigation links.  When you hover over them, they disappear.  Let's change the hover color to black instead.
  --> Done.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  --> 
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  --> 
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
 --> Because it is a .gif image and it is not possible modify the color of a text inside an image using CSS.
  
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
  --> The Times Square image, which has 297KB.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  --> I opened the page, emptied the cache, then opened the inspector, selected the tab "Network," refreshed the page, clicked on "Size" to list the items from largest to smallest, then I found that the largest file was this pictures mentioned above.
  --> http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
  --> 297KB


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  --> The easiest things to do are: Minify CSS, Minify JavaScript, Minify HTML, Specify image dimensions, Put CSS in the document head.
