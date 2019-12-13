function Init__ContactFormReaction (dna) {

    const Mom = dna.el || document.querySelector(dna.selector || '.form-functional')
    if ( !Mom ) return false

    const hasStateLoading  = 'has-state-loading'
    const hasStateResponse = 'has-state-response'
    const isActive         = 'is-active'

    const Dom = {
        Former: Mom,
        Loader: Mom.querySelector('.ajax-loader'),
        Answer: Mom.querySelector('.wrap-form-feedback'),
        Reform: Mom.querySelector('.js-form-reset'),
        stLoad: Mom.querySelector('.js-form-loading'),
        stFeed: Mom.querySelector('.js-form-response'),
        elWpcf: Mom.querySelector('.wpcf7')
    }

    const Api = {

        setStateLoading: e => {
            if (Dom.Former) Dom.Former.classList.add(hasStateLoading)
            if (Dom.Loader) Dom.Loader.classList.add(isActive)
        },
        remStateLoading: e => {
            if (Dom.Former) Dom.Former.classList.remove(hasStateLoading)
            if (Dom.Loader) Dom.Loader.classList.remove(isActive)
        },
        setStateResponse: e => {
            if (Dom.Former) Dom.Former.classList.add(hasStateResponse)
            if (Dom.Answer) Dom.Answer.classList.add(isActive)
        },
        remStateResponse: e => {
            if (Dom.Former) Dom.Former.classList.remove(hasStateResponse)
            if (Dom.Answer) Dom.Answer.classList.remove(isActive)
        },
        clearResponse: e => {
            let ResponseToClean = Mom.querySelector('.wrap-validation-response')
            if (ResponseToClean)  ResponseToClean.innerHTML = ''
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
            Api.clearResponse()
        },
     // combo
        stateLoading:  e => Api.setState('Loading'),
        stateResponse: e => Api.setState('Response'),
    }

    const Activate__core_events = ()=> {
        if (Dom.Reform) Dom.Reform.addEventListener('click', Api.resetForm)
        if (Dom.stLoad) Dom.stLoad.addEventListener('click', Api.stateLoading)
        if (Dom.stFeed) Dom.stFeed.addEventListener('click', Api.stateResponse)
    }

    const Integration__wpcf7 = ()=> {
      if ( !Dom.elWpcf ) return false
      const AddEvent = Dom.elWpcf.addEventListener

         // success result
            AddEvent( 'wpcf7mailsent', Api.stateResponse )

         // try again error
         // AddEvent( 'wpcf7mailfailed', e=>{} )

         // every form submit
         // AddEvent( 'wpcf7submit',     e=>{} )

         // validation error
         // AddEvent( 'wpcf7invalid',    e=>{} )

         // Fields data inside event functions:
         //     const inputs = e.detail.inputs
         //     inputs[0].name
         //     inputs[0].value
    }

 // Initialize
    Activate__core_events()
    Integration__wpcf7()
    return Api
}

/* --------- wp jquery autorun /*

$(function() {
    $( '.form-functional' )
        .each( (i,el) => {Init__ContactFormReaction({el:el})} )
})

/**//* ----- vanila autorun /*

...

/**/

/** EOF contact form controller */
