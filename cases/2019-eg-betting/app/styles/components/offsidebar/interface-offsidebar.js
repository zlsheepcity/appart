/** Offside Bar open/close functions
 *  2019.9.11
 */

function InterfaceOffsideBar (barName) {

    const asidebar = document.querySelector('.'+barName)
    const htmlwrap = document.querySelector('html')

    const classActive     = 'is-active'
    const classHasOverlay = 'has-offsidebar-overlay'
    const classOverlay    = 'offsidebar-overlay'
    const classBackground = 'offsidebar-background'

    const cssBartender    = '.js-for-' + barName

    const doClose  = () => {
        asidebar.classList.remove(classActive)
        htmlwrap.classList.remove(classHasOverlay) }
    const doOpen   = () => {
        asidebar.classList.add(classActive)
        htmlwrap.classList.add(classHasOverlay) }
    const doToggle = () => {
        if (asidebar.classList.contains(classActive)) doClose()
        else doOpen()
    }

 // find and activate bartenders

    const bartenderFunction = (el, order) =>
          el.addEventListener('click', order === 'close' ? doClose : doToggle )
    document.querySelectorAll(cssBartender).forEach(bartenderFunction)

 // find/create background

    let background = asidebar.querySelector('.'+classBackground)
    if(!background) {
        background = document.createElement('div')
        background.classList.add(classBackground)
        asidebar.prepend(background)
    }

 // find/create shadow overlay

    let overlay = asidebar.querySelector('.'+classOverlay)
    if(!overlay) {
        overlay = document.createElement('div')
        overlay.classList.add(classOverlay)
        asidebar.prepend(overlay)
    }
    bartenderFunction(overlay, 'close')
}

/** Apprun *//*

    // option 1

    app.attach('offsidebar')(InterfaceOffsideBar)
    app.offsidebar('BAR_CLASS_NAME')

    // option 2

    <script defer src="app/styles/components/offsidebar/interface-offsidebar.js"></script>
    <script>app.onload(f=>InterfaceOffsideBar('ChaptersMenuBar'))</script>

/**/

/*  EOF Offside Bar */
