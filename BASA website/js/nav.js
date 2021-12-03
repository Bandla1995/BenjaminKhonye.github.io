const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
            <img src="img/LOGO4.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                   <img src="img/user.png" id="user-img" alt="">
                   <div class="login-logout-popup hide">
                   <p class="account-info">Log in as, name</p>
                   <button class="btn" id="user-btn">Log out</button>
                   </div>
                </a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="Link-item"><a href="#" class="link">Home</a></li>
            <li class="Link-item"><a href="#" class="link">Jobs</a></li>
            <li class="Link-item"><a href="#" class="link">Poultry</a></li>
            <li class="Link-item"><a href="#" class="link">Meat</a></li>
            <li class="Link-item"><a href="#" class="link">Vegetables</a></li>
            <li class="Link-item"><a href="#" class="link">water</a></li>
        </ul>
    
    `;
}

createNav();

//nav popup

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');


userImageButton.addEventListener('click', () =>{
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear()
            location.reload();
        })
    } else{
        //user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })


    }
}
