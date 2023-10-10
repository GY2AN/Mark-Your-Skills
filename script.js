
let skillList = [
    {
    skillName: "HTML",
    uniqueNo: 1,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 2,
    },
    {
        skillName: "CSS",
        uniqueNo: 3,
    }
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkSkill(labelId){
    let LabelEl = document.getElementById(labelId);
    LabelEl.classList.toggle("selected");
} 

function createAndAppendSill(skill){
    let checkboxId = "checkbox"  + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;

    let skillEl =  document.createElement("li");
    skillEl.classList.add("p-1");
    skillListContainerEl.appendChild(skillEl);

    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    checkBoxEl.id = "checkboxId";

    checkBoxEl.onclick = function(){
        onMarkSkill(labelId);
    };
    skillEl.appendChild(checkBoxEl);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", checkboxId);
    labelEl.classList.add("checkbox-label");
    labelEl.id = labelId;
    labelEl.textContent = skill.skillName;
    skillEl.appendChild(labelEl);
}

for(let skill of skillList){
    createAndAppendSill(skill);
}





/*let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkBoxID";
inputEl.classList.add("checkbox-class");
mainContainerEl.appendChild(inputEl);

for(let skills of arrSkill){
let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkBoxID");
labelEl.textContent = skills;
mainContainerEl.appendChild(labelEl);

}
