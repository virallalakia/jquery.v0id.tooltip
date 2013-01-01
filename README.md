jquery.v0id.tooltip
===
---

This is a jQuery plug-in for Tooltip. It provides many options to customize the tooltip.  
See more for:
* [Options](https://github.com/virallalakia/jquery.v0id.tooltip/edit/master/README.md#options)
* [Functions](https://github.com/virallalakia/jquery.v0id.tooltip/edit/master/README.md#functions)
* [Examples](https://github.com/virallalakia/jquery.v0id.tooltip/edit/master/README.md#examples)

---

Options
===
* content: **"Your custom tooltip text"**
* postion: **"top"** or **"bottom"** or **"left"** or **"right"**
* left: **10** _(integer in pixel - to adjust tooltip position horizontally)_
* top: **-7** _(integer in pixel - to adjust tooltip position vertically)_
* speed: **400** _(fadeIn-Out time in milli seconds)_
* contClass: **"yourCssClassName"** _(css class for whole container)_
* textClass: **"yourCssClassName"** _(css class for text container)_
* downArrowClass: **"yourCssClassName"** _(css class for down arrow)_
* upArrowClass: **"yourCssClassName"** _(css class for up arrow)_
* rightArrowClass: **"yourCssClassName"** _(css class for right arrow)_
* leftArrowClass: **"yourCssClassName"** _(css class for left arrow)_

---

Functions
===
* **init** _(default or with above options)_
* **show** _(special call to show toltip)_
* **hide** _(special call to hide toltip)_
* **remove** _(remove toltip)_

---

Examples
===
* **init** _(default or with above options)_
  1. default:
      $("#target1").v0idtooltip();
  2. with options:
  `$("#target2").v0idtooltip({  
  		'content' : 'Custom<br/>Text',  
			'position' : 'left',  
			'left' : 10,  
			'top' : -20,  
			'speed' : 1000  
		});`
* **show** `(special call to show toltip)`
* **hide** _(special call to hide toltip)_
* **remove** _(remove toltip)_
