const loadProjects = (projectList) => {
    const projectContainer = document.getElementById('projects');
    for (const proj of projectList) {
        const newElement = document.createElement('div');
        newElement.innerText = proj;
        projectContainer.appendChild(newElement);
    }
};

export {loadProjects};