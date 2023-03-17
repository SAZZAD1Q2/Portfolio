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
  const body = document.querySelector('.body');
  const workPopUp = document.querySelector('.pupup-window');
  const workBtn = document.querySelector('.work-see-project-btn')
  workBtn.addEventListener('click', function(){
    body.style.filter = 'blur(5px)';
   
    workPopUp.innerHTML = ` <div class="pupup-section-one">
    <div class="popup-header">
      <h2>Multi Post Stories</h2>
      <a href="#"><img id="PopCross" src="images/popCloseBtn.png" class="popupClose" alt=""></a>
    </div>
   <div class="work-ul">
    <ul>
      <li>html</li>
      <li>Bootstrap</li>
      <li>Ruby on Rails</li>
    </ul>
   </div>
   <div class="popup-img">
   
    <img src="images/worklarge.png" alt="">
   </div>
    
  </div>
  <div class="pupup-section-two">
    <p class="p-min">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
    <p class="p-max">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent <br><br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
    </p>
    <button type="button" class="PoP">See Live</button>
    <button type="button">See Source</button>
  </div>`

  
  const popUpCrossBtn = document.querySelector('#PopCross');

  popUpCrossBtn.addEventListener('click', function() {
    workPopUp.style.display = 'none';
    body.style.filter = 'blur(0)';
  

});


  })





