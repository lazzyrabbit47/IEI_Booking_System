const root = document.documentElement
    const themeBtns = document.querySelectorAll('.navigation_a_links > button')
    themeBtns.forEach((btn) => {
        btn.addEventListener('click', handleThemeUpdate)
    })
    function handleThemeUpdate(e) {
        switch(e.target.value) {
            case 'blue':
            root.style.setProperty('--primary', '#003266')
            root.style.setProperty('--primary_light', '#004B99')
            root.style.setProperty('--primary_lighter', '#3398FF')
            root.style.setProperty('--primary_highlight', '#E6F2FF')
            break
            case 'brown':
            root.style.setProperty('--primary', '#42210B')
            root.style.setProperty('--primary_light', '#603813')
            root.style.setProperty('--primary_lighter', '#754C24')
            root.style.setProperty('primary_highlight', '#FFFAED')
            break
            case 'grey':
            root.style.setProperty('--primary', '#383838')
            root.style.setProperty('--primary_light', '#4D4D4D')
            root.style.setProperty('--primary_lighter', '#808080')
            root.style.setProperty('--primary_highlight', '#F2F2F2')
            break
        }
    }