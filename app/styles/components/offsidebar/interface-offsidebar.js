/*  Offside Bar open/close events
 *  v2019.7.23
 */

function InterfaceOffsideBar (barName) {

    const asidebar = document.querySelector('.'+barName)
    const htmlwrap = document.querySelector('html')

    const classActive     = 'is-active'
    const classHasOverlay = 'has-offsidebar-overlay'
    const cssBartender    ='.js-for-' + barName
    const classOverlay    = 'offsidebar-overlay'
    const classBackground = 'offsidebar-background'

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

    // find/create shadow overlay with functionality
    let overlay = asidebar.querySelector('.'+classOverlay)
    if(!overlay) {
        overlay = document.createElement('div')
        overlay.classList.add(classOverlay)
        asidebar.prepend(overlay)
    }
    bartenderFunction(overlay, 'close')
}

/*
    // run example

    (function ActivateOffsideBars() {
        InterfaceOffsideBar('offsidebar')
    })()

*/

/*  EOF Offside Bar */
