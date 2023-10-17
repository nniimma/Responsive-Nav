const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        toggle.addEventListener( 'click', () =>{
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu')
            // Add show-icon to show and hide menu icon
            toggle.classList.toggle('show-icon')
        })
}

showMenu('nav-toggle', 'nav-menu')

// ------------------------------------------------------------

const dropdownItems = document.querySelectorAll('.dropdown-item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown-button')

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
        // console.log('click')

        // 7. select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Creat a function to display the dropdown
const toggleItem = (item) =>{
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown-container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }else{
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class 
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }


}


// delete dropdown style
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown-container')

// Function to remove dropdown styles in mobile mode when browser resize
const removeStyle = () => {
    // validate if the media query reaches 1118px
    if(mediaQuery.matches){
        // remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        //remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e)=>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)