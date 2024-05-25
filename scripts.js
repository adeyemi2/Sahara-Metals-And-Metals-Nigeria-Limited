// Project carousel navigation
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-item");
    let currentProject = 0;

    function showProject(index) {
        projects.forEach((project, idx) => {
            project.style.display = idx === index ? "block" : "none";
        });
    }

    document.querySelector("#prev-project").addEventListener("click", () => {
        currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
        showProject(currentProject);
    });

    document.querySelector("#next-project").addEventListener("click", () => {
        currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
        showProject(currentProject);
    });

    showProject(currentProject);
});
