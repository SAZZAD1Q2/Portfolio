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
  cardTitle: 'Profesional Art Printing Data',
  workImage: 'images/',
  workDescription: ' A daily selection of privately persolized reads; no accounts sign up required has been the industryss standard dummy text ever sinch 1500 when an unkonwn printer took a standard dummy text',
  cardDescription: 'A daily selections of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
  popUpDescriptionMin: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>',
  popUpDescriptionMax: '<p class="p-max">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  workTitkeVector: 'images/work-desk-vec.png',
  workVectoImg: 'images/title-img.png',
};

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
      <button type="button" data-modal-target="#modal" class="work-see-project-btn" id="popUpBtnId">
        See Project
      </button>
    </div>
   </div>
   `;

  const workCard = document.querySelector('.work-cards-group');

  workCard.innerHTML = `<section id="work-cards">
    <div class="single-card">
      <h3 class="">${myProject.cardTitle}</h3>
      <p class="description">
       ${myProject.cardDescription}
      </p>
      <ul class="card-ul">
        <li>html</li>
        <li>bootstrap</li>
        <li>ruby</li>
      </ul>
      <button type="button" class="card-button"  id="popUpBtnId">See Project</button>
    </div>
  </section>


<section id="work-cards">
    <div class="single-card">
      <h3 class="">${myProject.cardTitle}</h3>
      <p class="description">
      ${myProject.cardDescription}
      </p>
      <ul class="card-ul">
        <li>html</li>
        <li>bootstrap</li>
        <li>ruby</li>
      </ul>
      <button type="button" class="card-button2 card-button"  id="popUpBtnId">See Project</button>
    </div>
  </section>

<section id="work-cards">
<div class="single-card">
  <h3 class="">${myProject.cardTitle}</h3>
  <p class="description">
  ${myProject.cardDescription}
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button3 card-button"  id="popUpBtnId">See Project</button>
</div>
</section>


<section id="work-cards">
<div class="single-card">
  <h3 class="">${myProject.cardTitle}</h3>
  <p class="description">
  ${myProject.cardDescription}
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button4 card-button"  id="popUpBtnId">See Project</button>
</div>
</section>

<section id="work-cards">
<div class="single-card">
  <h3 class="">${myProject.cardTitle}</h3>
  <p class="description">
  ${myProject.cardDescription}
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button5 card-button"  id="popUpBtnId">See Project</button>
</div>
</section>


<section id="work-cards">
<div class="single-card">
  <h3 class="">${myProject.cardTitle}</h3>
  <p class="description">
  ${myProject.cardDescription}
  </p>
  <ul class="card-ul">
    <li>html</li>
    <li>bootstrap</li>
    <li>ruby</li>
  </ul>
  <button type="button" class="card-button6 card-button" id="popUpBtnId">See Project</button>
</div>
</section>`;
}

workInfo();

const ul = document.querySelector('.work-ul');
for (let i = 0; i < myProject.workTech.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = myProject.workTech[i];
  ul.appendChild(li);
}

/* popup section work button */

const popUpContent = ` <div class="pupup-section-one">
  <div class="popup-header">
    <h2>Multi Post Stories</h2>
    <button data-close-button class='popupClose'>&times;</button>
  
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
  <p class="p-min">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
  <p class="p-max">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent <br><br>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
  </p>
  <div class="popbtn"><button type="button" class="PoP">See Live</button>
  <button type="button">See Source</button></div>
</div>`;

const workPopUp = document.querySelector('.pupup-window');

const body2 = document.querySelector('.body');

/* pop frist */

const workBtn = document.querySelector('.work-see-project-btn');
workBtn.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;
  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0px)';
      // body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});

/* popC 1 */

const workBtn1 = document.querySelector('.card-button');
workBtn1.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});
/* popC 2 */

const workBtn2 = document.querySelector('.card-button2');
workBtn2.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});
/* popC 3 */

const workBtn3 = document.querySelector('.card-button3');
workBtn3.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});
/* popC 4 */

const workBtn4 = document.querySelector('.card-button4');
workBtn4.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});
/* popC 5 */

const workBtn5 = document.querySelector('.card-button5');
workBtn5.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});
/* popC 6 */

const workBtn6 = document.querySelector('.card-button6');
workBtn6.addEventListener('click', () => {
  body2.style.filter = 'blur(5px)';

  workPopUp.innerHTML = popUpContent;

  const popUpCrossBtn = document.querySelector('.popupClose');

  let isClicked = true;

  popUpCrossBtn.addEventListener('click', () => {
    if (isClicked) {
      workPopUp.style.display = 'none';
      body2.style.filter = 'blur(0)';
      isClicked = false;
    } else {
      isClicked = true;
    }
  });
});

/* form validation */

const form = document.getElementById('form');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.contact-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    const errMessage = document.querySelector('.errMessage');
    errMessage.textContent = 'Email must be lower case';
    submitBtn.insertAdjacentElement('afterend', errMessage);
  }
});

/* data storage section */

const nameInput = document.querySelector('.inp-name');
const emailInput = document.querySelector('.inp-email');
const messageInput = document.querySelector('.inp-text');

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function FormDataStore() {
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

FormDataStore();