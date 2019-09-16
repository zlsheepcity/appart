/** appking survival test simple console reports */

let AppSurvivalTest = function () {
    console.group('Welcome to AppKing survival test')
    const total = 3

    const custom_function = function SomeFunction(dna){ console.log('OK:'+dna) }
    app.attach('example')(custom_function)
    app.example('1/'+total)

    const custom_function2 = (dna) => app.example(dna)
    app.attach('example2')(custom_function2)
    app.example2('2/'+total)

    const custom_function4 = function() {
        const custom_function3 = (dna) => app.example(dna)
        app.attach('example3')(custom_function3)
        app.example3('3/'+total)
    }
    app.attach('example4')(custom_function4)
    app.example4()

    console.groupEnd()
}

/*  Apprun */
    if (app) app.onload(AppSurvivalTest)
/**/

/*  EOF appking survival test */
