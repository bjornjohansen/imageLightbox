=== imageLightbox ===
Contributors: bjornjohansen
Donate link: http://www.kiva.org/
Tags: images, jquery, lightbox, images, lightweight, responsive, mobile, touch
Author URI: https://bjornjohansen.no/
Requires at least: 3.8
Tested up to: 3.9.1
Stable tag: 0.1.1

Image Lightbox, Responsive and Touch‑friendly.

== Description ==

This is a WordPressified version of the excellent, lightweight (for real!) imageLightbox.js (MIT-licensed) by Osvaldas Valutis (http://osvaldas.info/image-lightbox-responsive-touch-friendly)

This is his introduction to the lightbox:
"As for the image lightboxes, I have always lacked simplicity for them. I mean not only the visual design, but the overall experience: from implementation to UX. All due respect, but I have never liked any of these light-fancy-face-boxes. They all were solving problems that just don't exist: lots of unwanted features by default, total mess in markup, no native behavior for touch screens. I was working on a project and needed an image lightbox that solves these problems. I needed a lightbox only for images, not video, text, and iframes at once. I made ImageLightbox.js."

This version autodetects all links to image files and opens them in the lightbox.

For your "install, activate and go"-convenience, this plugin comes with a minimal CSS that easily can be deactivated and/or replaced.

The plugin can also be themed to your liking. An example theme is available here: http://wordpress.org/plugins/imagelightbox-smooth-theme/

Please let me know if you have any issues. Fastest way to get a response is by Twitter: https://twitter.com/bjornjohansen

== Installation ==
1. Download and unzip plugin
2. Upload the 'imagelightbox' folder to the '/wp-content/plugins/' directory,
3. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= How do I use the plugin with my images? =
Autodetection FTW!

= How do I change the options? =
FILTERS FTW! imageLightbox_options

= How do I replace the CSS with my own? =
FILTERS FTW! imageLightbox_include_css

= How to I create my own theme for the plugin? =
Have a look at https://github.com/bjornjohansen/imagelightbox-theme-smooth

= How do I use the lightbox on image links that are inserted with AJAX? =
Call imageLightbox() on the elements: $('.newelements').imageLightbox();

== Changelog ==

= 0.1.1 =
Theming now possible

= 0.1 =
Released



