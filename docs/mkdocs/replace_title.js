// __________________________________ CONTENTS ___________________________________
// 
//    This is a workaround script for setting a top-level navigation title 
//    separately from the site title. This could also be achieved with HTML 
//    overrides, but this way is a bit easier.
//    
//    The reason we want to set them separately is to allow for a more verbose
//    title in the header (where there is plenty of space) without messing up
//    the navigation.
// _______________________________________________________________________________

let elements = document.getElementsByClassName('md-nav__title') // array, will only contain one element

for (let element of elements) {
    element.innerHTML = "UTL"
}