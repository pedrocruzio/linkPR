import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "nav ul a": {
        "color": "#444"
    },
    "nav brand-logo": {
        "color": "#444"
    },
    "nav brand-logo img": {
        "marginTop": 16,
        "height": 32
    },
    "p": {
        "lineHeight": 2
    },
    "button-collapse": {
        "color": "#26a69a"
    },
    "parallax-container": {
        "minHeight": 80 * vh,
        "lineHeight": "normal",
        "height": "auto",
        "color": "rgba(255, 255, 255, .9)"
    },
    "parallax-container section": {
        "width": "100%"
    },
    "hero-title": {
        "fontWeight": "400",
        "fontSize": 5
    },
    "hero-tagline": {
        "fontWeight": "300"
    },
    "icon-block": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "icon-block material-icons": {
        "fontSize": "inherit"
    },
    "footerpage-footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-large": {
        "background": "#FF0000 !important",
        "borderRadius": 10
    },
    "community": {
        "background": "linear-gradient(to right, #0039D5, #00DAFD)",
        "borderRadius": 10,
        "paddingTop": 48,
        "paddingRight": 48,
        "paddingBottom": 48,
        "paddingLeft": 48
    },
    "community-icons": {
        "width": 120,
        "height": "auto"
    },
    "overlay-blue-lightblue": {
        "background": "linear-gradient(to right, #0039D5, #00DAFD)",
        "bottom": 0,
        "left": 0,
        "opacity": 0.7,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "zIndex": 1,
        "borderRadius": "10px 10px 0 0"
    },
    "overlay-blue-green": {
        "background": "linear-gradient(to right, #00BBFF, #00E743)",
        "bottom": 0,
        "left": 0,
        "opacity": 0.7,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "zIndex": 1,
        "borderRadius": "10px 10px 0 0"
    },
    "overlay-purple-yellow": {
        "background": "linear-gradient(to right, #A600EF, #FFBB00)",
        "bottom": 0,
        "left": 0,
        "opacity": 0.7,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "zIndex": 1,
        "borderRadius": "10px 10px 0 0"
    },
    "img-container": {
        "position": "relative"
    },
    "card-title": {
        "zIndex": 2
    },
    "mt-48": {
        "marginTop": 48
    },
    "mt-80": {
        "marginTop": 80
    },
    "mb-48": {
        "marginBottom": 48
    },
    "card": {
        "borderRadius": "10px !important"
    },
    "card card-action:last-child": {
        "borderRadius": "0 0 10px 10px !important"
    },
    "communities": {
        "background": "#f8f8f8"
    },
    "add-community": {
        "background": "linear-gradient(to right, #FFF824, #FF8800)"
    },
    "heart": {
        "color": "#e25555"
    },
    "social-icons": {
        "height": 64
    },
    "dark-blue": {
        "backgroundColor": "#0e2439 !important"
    },
    "resources": {
        "marginTop": -79,
        "background": "linear-gradient(to right, rgba(0, 57, 213, 1), rgba(0, 218, 253, 1))"
    },
    "wordHeaderContainer": {
        "display": "flex",
        "height": 300,
        "alignItems": "center"
    },
    "wordHeader": {
        "color": "white",
        "fontSize": 65,
        "opacity": 1
    },
    "bookImage": {
        "width": 254,
        "height": "auto",
        "opacity": 1
    },
    "calendarImage": {
        "width": 254,
        "height": "auto",
        "opacity": 1
    },
    "imageHeaderContainer": {
        "display": "flex",
        "height": 300,
        "justifyContent": "flex-end"
    },
    "resourcesContainer": {},
    "cardIcon": {
        "fontSize": "13px !important"
    },
    "second-after": {
        "marginTop": 60
    },
    "section-par-color": {
        "backgroundColor": "#F8F8F8"
    },
    "full-width-color": {
        "width": 100 * vw,
        "height": "auto"
    },
    "last-section-padding": {
        "paddingBottom": 65
    },
    "input-field": {
        "maxWidth": 754
    },
    "center-align": {
        "display": "flex",
        "justifyContent": "center"
    },
    "browser-default": {
        "maxWidth": 754
    },
    "blue-text": {
        "fontWeight": "300"
    },
    "btn-floatingbtn-large": {
        "width": 56,
        "height": 56,
        "borderRadius": 60
    },
    "h2": {
        "fontSize": 22
    },
    "calendar": {
        "marginBottom": 50
    }
});