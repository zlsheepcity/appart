# VH Screen


<!-- ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Event Launcher Test -->


<section hidden>

    <blockquote>

        <button class="stop">Stop it</button>
        <script >let butOf = document.querySelector('.stop')</script>

        <button class="start">Restart (only once)</button>
        <script >let butOn = document.querySelector('.start')</script>

    </blockquote>

    <script>

        let f = o => console.log('Launch f')
        let Tester = GoodEventLauncher({ event:'resize', f })
        GoodEventLauncher({ event:'click', on:butOf, f:Tester.stop  })
        GoodEventLauncher({ event:'click', on:butOn, f:Tester.play, once:true })

    </script>

</section>

