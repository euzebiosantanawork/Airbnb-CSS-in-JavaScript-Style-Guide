/*
Use device-agnostic names(e.g "smaall", "medium , and "large") to name media query breakpoints
Why? Commonly usend names like "phone" "tablet", and "desktop" do not match the charactheristics of the 
devices in the real word. Using these names sets the wrong expectations
*/

//bad

const breakpoints = {
    mobile:' @media (max-width: 639px) ',
    talbet:' @media (max-width: 1047px) ',
    desktop: '@media (min-width: 1048px)', 
};

//good

const breakpoints = {
    small:  '@media (max-width: 639)',
    medium: '@media (max-width: 1047px)',
    large: '@media (min-width:1048px),'
};
