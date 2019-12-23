/** Offside Bar open/close functions
 *  2019.12.18
 */

function InterfaceOffsideBar ( dna={} ) {

 // Intro
    if ( typeof(dna)==='string' ) dna = {name:dna}
    if ( dna.name ) dna.el = document.querySelector('.'+dna.name)
    if ( !dna.el  ) return false;

 // Core

    const asidebar = dna.el
    const htmlwrap = document.querySelector('html')

    const classActive     = 'is-active'
    const classHasOverlay = 'has-offsidebar-overlay'
    const classBarOverlay = 'offsidebar-overlay'
    const classBackground = 'offsidebar-background'
    const queryBartender  = '.js-for-' + dna.name

    const Api = {

        getState: f => asidebar.classList.contains(classActive),
        setStateClosed: f => {
            asidebar.classList.remove(classActive)
            htmlwrap.classList.remove(classHasOverlay)
        },
        setStateOpen: f => {
            asidebar.classList.add(classActive)
            htmlwrap.classList.add(classHasOverlay)
        },
        toggleState: f => {
            if (Api.getState()) Api.setStateClosed()
            else                Api.setStateOpen()
        },

     // Public

        open:   e => Api.setStateOpen(),
        close:  e => Api.setStateClosed(),
        toggle: e => Api.toggleState(),

     // Delegators

        delegateOpen: el => {
            if (el) el.addEventListener('click', Api.open)
        },
        delegateClose: el => {
            if (el) el.addEventListener('click', Api.close)
        },
        delegateToggle: el => {
            if (el) el.addEventListener('click', Api.toggle)
        }

    }

    const Construct_this_bar = () => {

     // find/create background
        let background = asidebar.querySelector('.'+classBackground)
        if(!background) {
            background = document.createElement('div')
            background.classList.add(classBackground)
            asidebar.prepend(background)
        }

     // find/create shadow overlay
        let baroverlay = asidebar.querySelector('.'+classBarOverlay)
        if(!baroverlay) {
            baroverlay = document.createElement('div')
            baroverlay.classList.add(classBarOverlay)
            asidebar.prepend(baroverlay)
        }
        Api.delegateClose(baroverlay)

     // find and activate bartenders
        let bartenders = [...document.querySelectorAll(queryBartender)]
            bartenders.forEach(Api.delegateToggle)
    }

 // Initialize
    Construct_this_bar()
    return Api
}

/** Run *//*

    let bar_api = InterfaceOffsideBar('BAR_CLASS_NAME')

 // Snippet

    <script defer src="app/styles/components/offsidebar/interface-offsidebar.js"></script>
    <script>
        function ActivateDemoBar() {
            let  bar_api = InterfaceOffsideBar('DemoBarClassname')
            if  (bar_api)
                 bar_api.delegateToggle(document.querySelector('.toggle-DemoBar'))
        }
        app.onload(ActivateDemoBar)
    </script>

/**/

/** EOF Offside Bar */
