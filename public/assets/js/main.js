      var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#2d3476', '#ffffffc3'],
                    ['#2d3476', '#ffffffc3'],
                    ['#2d3476', '#ffffffc3']
                ]
            }
        }
    });

    
    document.addEventListener('DOMContentLoaded', function () {

        const sections = document.querySelectorAll('.page');
    
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    

        function hideAllSections() {
            sections.forEach(section => section.style.display = 'none');
        }
    

        function showSectionById(sectionId) {
            hideAllSections();
            const targetSection = document.getElementById(sectionId);
            if (targetSection) { 
                targetSection.style.display = 'block';
            }
        }
    

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 
                const targetId = link.getAttribute('href').substring(1); 
                showSectionById(targetId); 
            });
        });
    });
    

