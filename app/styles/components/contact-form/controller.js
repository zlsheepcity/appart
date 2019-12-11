function Init__ContactFormReaction (dna) {
    const defaultSelector = '.form-functional'
    const Mom = dna.el || document.querySelector(dna.selector || defaultSelector)
    if ( !Mom ) return false

    const hasStateLoading  = 'has-state-loading'
    const hasStateResponse = 'has-state-response'
    const isActive         = 'is-active'

    const Dom = {
        Former: Mom,
        Loader: Mom.querySelector('.ajax-loader'),
        Answer: Mom.querySelector('.form-feedback'),
        Reform: Mom.querySelector('.js-form-reset'),
        elWpcf: Mom.querySelector('.wpcf7')
    }

    const Api = {

        setStateLoading: e => {
            Dom.Former.classList.add(hasStateLoading)
            Dom.Loader.classList.add(isActive)
        },
        remStateLoading: e => {
            Dom.Former.classList.remove(hasStateLoading)
            Dom.Loader.classList.remove(isActive)
        },
        setStateResponse: e => {
            Dom.Former.classList.add(hasStateResponse)
            Dom.Answer.classList.add(isActive)
        },
        remStateResponse: e => {
            Dom.Former.classList.remove(hasStateResponse)
            Dom.Answer.classList.remove(isActive)
        },
        resetState: e => {
            Api.remStateLoading()
            Api.remStateResponse()
        },
        setState: s => {
            Api.resetState()
            let command = 'setState'+s
            return typeof(Api[command]) === 'function' ? Api[command]() : false
        },
        resetForm: e => {
            Api.resetState()
        },
     // combo
        stateLoading:  e => Api.setState('Loading'),
        stateResponse: e => Api.setState('Response'),
    }

    const Activate__core_events = ()=> {
        Dom.Reform.addEventListener('click', Api.resetForm)
    }

    const Integration__wpcf7 = ()=> {
      const AddEvent = Dom.elWpcf.addEventListener

         // every form submit
         // AddEvent( 'wpcf7submit',     e=> {} )

         // success result
            AddEvent( 'wpcf7mailsent',   e=> {
                Api.stateResponse()
            })

         // try again error
         // AddEvent( 'wpcf7mailfailed', e=> {} )

         // validation error
         // AddEvent( 'wpcf7invalid',    e=> {} )

            // Helpers:
            //  const inputs = e.detail.inputs
            //  inputs[0].name
            //  inputs[0].value
    }

 // Run
    Activate__core_events()
    Integration__wpcf7()
    return true
}
