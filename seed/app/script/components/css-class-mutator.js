/* -------------------------------------------
    css class mutator
    2019.1.28
------------------------------------------- */

/** Usage examples:

    el_class_mutator({ for:'classname', addClass:'happy', removeClass:'unhappy' })
    el_class_mutator({ for:'classname', addClass:'happy healthy rich' })
    el_class_mutator({ for:'classname', addClass:'.happy' })

    el_class_mutator({ el:node,          addClass:'happy' })
    el_class_mutator({ el:nodeList,      addClass:'happy' })
    el_class_mutator({ find:'.elements', addClass:'happy' })

 */

function el_class_mutator(rna) {


    let operations = ['addClass','removeClass','toggleClass']
    let protein_base = {
        el:   false, // DOM element
        for:  false, // 'classname' string
        find: false, // '.selector' string
        addClass:    false,
        removeClass: false,
        toggleClass: false,
        callback: false
    }

    // Ribosome action

    let protein = Object.assign( protein_base, rna )

    // 1. Allow to use for: and find:
    // 2. Allow multi el

    if ( !protein.el ) protein.el =
        typeof(protein.for )==='string' ? document.querySelectorAll('.'+protein.for) :
        typeof(protein.find)==='string' ? document.querySelectorAll(protein.find) :
        false; // [1]

    if ( !protein.el )        return false // i can`t
    if ( !protein.el.length ) protein.el = [protein.el] // [2]

    // 3. Allow to use dot ".classname" value
    // 4. Allow to use space separated multiclass value

    for ( let opi in operations )
        if ( typeof(protein[operations[opi]]) === 'string' )
            protein[operations[opi]] =
                protein[operations[opi]]
                .replace(".","")    // [3]
                .split(" ")         // [4]

    // Mutation chain: All elements → All operations → All classes

    for ( let eli=0; eli<protein.el.length; eli++ ) {

        let eachElement = protein.el[eli]

        if ( protein.addClass && protein.addClass.length )
            for ( let i in protein.addClass )
                eachElement.classList.add(protein.addClass[i])

        if ( protein.removeClass && protein.removeClass.length )
            for ( let i in protein.removeClass )
                eachElement.classList.remove(protein.removeClass[i])

        if ( protein.toggleClass && protein.toggleClass.length )
            for ( let i in protein.toggleClass )
                eachElement.classList.toggle(protein.toggleClass[i])

    }

    // Callback report?

    if ( typeof(protein.callback)==='function' ) protein.callback(protein)

    return protein

}


//* ------------------------------------------- RUN


/** Apprun */
    if (app) app.attach('mutate')(el_class_mutator)
    // Usage:
    // app.mutate({el, addClass})
/**/



/* EOF css class mutator */
