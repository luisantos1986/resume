const { jsPDF } = window.jspdf;
window.html2canvas = html2canvas;

const a = document.getElementById('pdfDownloader')

a.addEventListener('click', e => {
    let doc = new jsPDF('p', 'px', [window.innerWidth, window.innerHeight*3]);

doc.html(document.body, {
   callback: doc => doc.save("Curriculum_Luis_Santos_iOS_Dev.pdf"),
   x: 10,
   y: 10
});
})

const createArticleElement = (job) => {
   
    const article = document.createElement('article')
    article.className = 'resume-timeline-item position-relative pb-5'
    const header = document.createElement('div')
    header.className = 'resume-timeline-item-header mb-2'
    const title = document.createElement('h3')
    title.className = 'resume-position-title font-weight-bold mb-1'
    title.innerText = job.title
    const position = document.createElement('div')
    position.className = 'resume-company-name ms-auto'
    position.innerText = job.position

    const headerRow = document.createElement('div')
    headerRow.className = 'd-flex flex-column flex-md-row'
    headerRow.appendChild(title)
    headerRow.appendChild(position)
    header.appendChild(headerRow)

    const positionTime = document.createElement('div')
    positionTime.className = 'resume-position-time'

    positionTime.innerText = job.time

    header.appendChild(positionTime)

    article.appendChild(header)

    const description = document.createElement('div')
    description.className = 'resume-timeline-item-desc'

    const descriptionContent = document.createElement('p')
    descriptionContent.innerText = job.content 

    description.appendChild(descriptionContent)

    article.appendChild(description)

    const contentElements = ['Achievements', 'Tasks']

    for (let i = 0; i < contentElements.length; i++) {
        const contentElementsHeader = document.createElement('h4')
        contentElementsHeader.innerText = contentElements[i]
        contentElementsHeader.className = 'resume-timeline-item-desc-heading font-weight-bold'
        article.appendChild(contentElementsHeader)
    
        const contentElementList = document.createElement('ul')
    
        let contentElementListItem = job[contentElements[i]]
        for (let i = 0; i < contentElementListItem.length; i++) {
            const elementItem = document.createElement('li')
            elementItem.innerText = contentElementListItem[i]
    
            contentElementList.appendChild(elementItem)
        }
        article.append(contentElementList)
    }

    // I prefer separating achievements tasks from technologies used
    const technologiesUsedHeader = document.createElement('h4')
    technologiesUsedHeader.innerText = "Technologies Used:"
    technologiesUsedHeader.className = 'resume-timeline-item-desc-heading font-weight-bold'
    article.appendChild(technologiesUsedHeader)
    
    const technologiesUsedList = document.createElement('ul')
    technologiesUsedList.className = 'list-inline'
    let technologies = job.technologies
    for (let i = 0; i < technologies.length; i++) {
        const technologyItem = document.createElement('li')
        technologyItem.className = 'list-inline-item'
        const technologyItemSpan = document.createElement('span')
        technologyItemSpan.className = 'badge bg-secondary badge-pill'
        technologyItemSpan.innerText = technologies[i]
        technologyItem.appendChild(technologyItemSpan)
        technologiesUsedList.appendChild(technologyItem)
    }

    article.appendChild(technologiesUsedList)


    const resumeTimeline = document.getElementsByClassName('resume-timeline')

    resumeTimeline[0].appendChild(article)
}

const createArticles = () => {

     // Path to the JSON file relative to the HTML file
    const jsonFilePath = 'resumeContent.json';
    fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        let jobsContent = data['content']
        let jobs = jobsContent['jobs']
        console.log(jobs)
        const length = jobs.length
        // IE support
        for(let i = 0; i < length; i++) {
            console.log(i)
            console.log(jobs[i])
            createArticleElement(jobs[i])
        }
        InnovasportElement()
    })
    .catch(error => console.error('Error fetching JSON:', error));

}

const InnovasportElement = () =>  {
     
    const article = document.createElement('article')
    article.className = 'resume-timeline-item position-relative pb-5'
    const header = document.createElement('div')
    header.className = 'resume-timeline-item-header mb-2'
    const title = document.createElement('h3')
    title.className = 'resume-position-title font-weight-bold mb-1'
    title.innerText = 'Innovasport'
    const position = document.createElement('div')
    position.className = 'resume-company-name ms-auto'
    position.innerText = 'iOS Mobile Developer'

    const headerRow = document.createElement('div')
    headerRow.className = 'd-flex flex-column flex-md-row'
    headerRow.appendChild(title)
    headerRow.appendChild(position)
    header.appendChild(headerRow)

    const positionTime = document.createElement('div')
    positionTime.className = 'resume-position-time'

    positionTime.innerText = '2017 - 2020'

    header.appendChild(positionTime)

    article.appendChild(header)

    const description = document.createElement('div')
    description.className = 'resume-timeline-item-desc'

    const descriptionContent = document.createElement('p')
    descriptionContent.innerText = "Played a key role in the development and maintenance of Warehouse and Intranet Corporate Solutions."

    description.appendChild(descriptionContent)

    article.appendChild(description)


    const contentJobs = ['Wharehouse', 'Intranet']

    const contentJobInfo = [
        "Collaborated in the modification of the user interface (UI) to enhance the user experience and streamline data exchange with the server. Implemented statistical tracking, logging mechanisms, and generated essential information in PDF format. Contributed to the creation of dynamic forms using Generics on a CollectionView. These forms were generated based on JSON files, allowing for a flexible and adaptable user interface. Each form comprised various collection cells with specific tasks, such as text input, numeric input, and image uploads.",
        "Developed a custom app using pure code without Storyboard, employing programmatic layout techniques. Empowered employees with access to personalized information, including benefits, payrolls, and more. This data could be seamlessly converted and downloaded in PDF format. Implemented a dynamic form creation system using Generics, where a JSON file determined the structure and composition of the form. Each form cell had a unique task, enabling the user to interact with different input types, such as text, numbers, and image uploads."
]

    // modify this to contentJobs a header and a p
    for (let i = 0; i < contentJobs.length; i++) {
        const contentElementsHeader = document.createElement('h4')
        contentElementsHeader.innerText = contentJobs[i]
        contentElementsHeader.className = 'resume-timeline-item-desc-heading font-weight-bold'
        article.appendChild(contentElementsHeader)
        const contentElementparagraph = document.createElement('p')
        contentElementparagraph.innerText = contentJobInfo[i]
    
        article.append(contentElementparagraph)
    }

    const contentElements = ['Tasks']
    const contentElementListTasksItems = [
        "Developed and maintained Innovasport apps, ensuring their functionality and performance.",
        "Communicated with Java servers to establish a smooth data exchange and synchronization.",
        "Actively participated in implementing an efficient and scalable architecture.",
        "Utilized SQLite as a storage solution for managing and persisting data.",
        "Created PDF documents from the received data, providing valuable information in a readable and shareable format."
    ]

    for (let i = 0; i < contentElements.length; i++) {
        const contentElementsHeader = document.createElement('h4')
        contentElementsHeader.innerText = contentElements[i]
        contentElementsHeader.className = 'resume-timeline-item-desc-heading font-weight-bold'
        article.appendChild(contentElementsHeader)
    
        const contentElementList = document.createElement('ul')
    
        for (let i = 0; i < contentElementListTasksItems.length; i++) {
            const elementItem = document.createElement('li')
            elementItem.innerText = contentElementListTasksItems[i]
    
            contentElementList.appendChild(elementItem)
        }
        article.append(contentElementList)
    }

    // I prefer separating achievements tasks from technologies used
    const technologiesUsedHeader = document.createElement('h4')
    technologiesUsedHeader.innerText = "Technologies Used:"
    technologiesUsedHeader.className = 'resume-timeline-item-desc-heading font-weight-bold'
    article.appendChild(technologiesUsedHeader)
    
    const technologiesUsedList = document.createElement('ul')
    technologiesUsedList.className = 'list-inline'
    let technologies = ["Swift", "Xcode", "PDF", "SQLITE"]
    for (let i = 0; i < technologies.length; i++) {
        const technologyItem = document.createElement('li')
        technologyItem.className = 'list-inline-item'
        const technologyItemSpan = document.createElement('span')
        technologyItemSpan.className = 'badge bg-secondary badge-pill'
        technologyItemSpan.innerText = technologies[i]
        technologyItem.appendChild(technologyItemSpan)
        technologiesUsedList.appendChild(technologyItem)
    }

    article.appendChild(technologiesUsedList)


    const resumeTimeline = document.getElementsByClassName('resume-timeline')

    resumeTimeline[0].appendChild(article)
}

window.addEventListener('load', createArticles)