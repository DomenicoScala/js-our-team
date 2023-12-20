ourTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & Ceo',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    },
];

console.log(ourTeam);


const elementInPage = document.getElementById('user-list');


for(let i = 0; i < ourTeam.length; i++){
   elementInPage.innerHTML += `
   <li>
        <h3>
          ${ourTeam[i].name}  
        </h3>

        <h3>
          ${ourTeam[i].role}  
        </h3>

        <h3>
          ${ourTeam[i].image}  
        </h3>
   </li>
   `
}