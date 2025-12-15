---
layout: page
title: Hydroclimate of the Western United States
description: stratigraphy + geomorphology + geochronology
img: assets/img/Bonnevilleshorelines.jpg
importance: 1
category: work
related_publications: true
---
The formation of vast lakes in the arid basins of the western United States marks a major hydroclimatic change of the Quaternary. These lakes serve as natural rain gauges, recording dramatic fluctuations in water availability, evident from shorelines carved tens to hundreds of meters above modern valley floors.

This project will map regional changes in wetness from the last glaciation through the present  interglaciation (about 70,000 years ago to present). Students will use sedimentology and stratigraphy with geochronologic tools to reconstruct when lake levels rose and fell, and to test whether these shifts happened gradually or suddenly. This work is anchored in field campaigns and mapping. Other complementary avenues using remote sensing and GIS can match a range of intersts and access needs. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/WilsonCreektype.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Wilson Creek Formation: the Late Pleistocene lithostratigraphic unit of the Mono Basin, California. Outreached arm points to the MIS 5-4 boundary--i.e., the start of the last glaciation. See Ali et al. (2022) _GSAB_. 
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/PlanetMono.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/SStufa.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
