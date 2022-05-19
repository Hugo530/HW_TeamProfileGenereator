const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div> ${manager.getName()} </div>
        <div> ${manager.getRole()} </div>
        <div> ${manager.getId()} </div>
        <div> ${manager.getEmail()} </div>

        `;
    };
    
    const generateEngineer = engineer => {
        return `
        `
    }

    const generateIntern = intern => {
        return`
        `
    }

    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        );


        return html.join("");


}

module.exports = team => {
    return `
    <div> ${generateTeam(team)}</div>`;
};