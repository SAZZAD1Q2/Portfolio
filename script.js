const btn = document.querySelector('#btn_hambrg');

btn.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('show');
});

const crossBtn = document.querySelector('.cross_btn');

crossBtn.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');

  navbar.classList.toggle('hide');
});




  const myProject = {
    workTitle: 'My Recent Works',
    workTech: ['css', 'html', 'bootstrap', 'ruby'],
    workImage:'images/',
    workDescription:' A daily selection of privately persolized reads; no accounts sign up required has been the industryss standard dummy text ever sinch 1500 when an unkonwn printer took a standard dummy text',
    workTitkeVector: 'images/work-desk-vec.png',
    workVectoImg: 'images/title-img.png'
  }

 


  function workInfo() {
    const workSection = document.querySelector('.work-section');
    workSection.innerHTML = ` <div class="work-header">
    <h2>${myProject.workTitle}</h2>
    <img class="work-desk-vector" src="${myProject.workTitkeVector}" alt="">
    <img class="mobile-work-vector" src="${myProject.workVectoImg}" alt="" />
   </div>
   <div class="work-section-flex">
    <div class="work-section-a">
     <div class="work-main-img"></div>
    </div>
    <div class="work-section-b">
      <h3>Multi-Post Stories</h3>
      <p>
      ${myProject.workDescription}
      </p>
      <ul class="work-ul">
      
      </ul>
      <button type="button" class="work-see-project-btn">
        See Project
      </button>
    </div>
   </div>
   `;


   const workCard = document.querySelector('.work-cards-group');
  
    workCard.innerHTML = `<section id="work-cards">
    <div class="single-card">
      <h3 class="work-card-btn">Profesional Art Printing Data</h3>
      <p class="description">
        A daily selections of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard
      </p>
      <ul class="card-ul">
        <li>html</li>
        <li>bootstrap</li>
        <li>ruby</li>
      </ul>
      <button type="button" class="card-button">See Project</button>
    </div>
  </section>


<section id="work-cards">
    <div class="single-card">
      <h3 class="work-card-btn">Profesional Art Printing Data</h3>
      <p class="description">
        A daily selections of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard
      </p>
      <ul class="card-ul">
        <li>html</li>
        <li>bootstrap</li>
        <li>ruby</li>
      </ul>
      <button type="button" class="card-button">See Project</button>
    </div>
  </section>

<section id="work-cards">
<div class="single-card">
  <h3 class="work-card-btn">Profesional Art Printing Data</h3>
  <p class="description">
    A daily selections of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button">See Project</button>
</div>
</section>


<section id="work-cards">
<div class="single-card">
  <h3 class="work-card-btn">Profesional Art Printing Data</h3>
  <p class="description">
    A daily selections of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button">See Project</button>
</div>
</section>

<section id="work-cards">
<div class="single-card">
  <h3 class="work-card-btn">Profesional Art Printing Data</h3>
  <p class="description">
    A daily selections of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button">See Project</button>
</div>
</section>


<section id="work-cards">
<div class="single-card">
  <h3 class="work-card-btn">Profesional Art Printing Data</h3>
  <p class="description">
    A daily selections of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button">See Project</button>
</div>
</section>`


 

   
  }
  workInfo();





  let ul = document.querySelector('.work-ul');
  for(let i = 0; i < myProject.workTech.length; i ++ ){
    let li = document.createElement('li');
    li.textContent = myProject.workTech[i];
    ul.appendChild(li);

  };
