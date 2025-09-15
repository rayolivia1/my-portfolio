//Projects.js
import './Background.css'
import './Projects.css'
import FlowingMenu from './Flowing-Menu'

const demoItems = [
  { link: 'https://lablcc-ling.lab.uic.edu/', text: 'Lab of Cognition Webiste', image: 'https://images.pexels.com/photos/17484970/pexels-photo-17484970.png' },
  { link: '#', text: 'Portfolio Design Process', image: 'https://images.pexels.com/photos/25626433/pexels-photo-25626433.jpeg'},
  {link: 'https://www.dropbox.com/scl/fi/l429rg3pjp51n94u4buhf/Statistical-Report-STAT-385-UPDATED.pdf?rlkey=6oa8vrewhp3ksahnnwxn21v46&st=c052xs0w&dl=0', text: 'Modes of Transportation Stat Report', image: 'https://images.pexels.com/photos/20194535/pexels-photo-20194535.jpeg'},
  { link: 'https://www.dropbox.com/scl/fi/5y0t6waivntphtumj0y7j/Writing-Sample-Terms-Conditions.pdf?rlkey=mztyar37yrzzaaniqr5gvaght&st=5gb5jyly&dl=0', text: 'Tech Ethics Op-Ed', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg' },
  { link: 'https://www.dropbox.com/scl/fi/qh6oo2hkji3dzllcgijp6/Statisitcal-Report-Olivia-Rayborn.docx?rlkey=xoik8sqfolgr2jt9gk1fjbcis&st=vd50a9fv&dl=0', text: 'Fuel Consumption Stat Report', image: 'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg' },
  { link: 'https://www.dropbox.com/scl/fi/87e1fove9avvwww05nbtm/Blind-Box-Lesson.pdf?rlkey=tcu8k6axei3dtba2x3bgcwfj5&st=4my0i7i1&dl=0', text: 'Blind Boxes: A Lesson in Basic R', image: 'https://images.pexels.com/photos/3935571/pexels-photo-3935571.jpeg' }

];

function Projects() {
    return (
        <>
        <div className = "project-background-container"></div>
        <div className = "project-center-container">Past Projects</div>
        <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
        </>
    );
}

export default Projects;