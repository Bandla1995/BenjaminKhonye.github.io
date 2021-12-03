const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/LOGO5.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Poultry</li>
            <li><a href="#" class="footer-link">full chicken</a></li>
            <li><a href="#" class="footer-link">menoto</a></li>
            <li><a href="#" class="footer-link">gizzards</a></li>
            <li><a href="#" class="footer-link">hearts</a></li>
            <li><a href="#" class="footer-link">necks</a></li>
            <li><a href="#" class="footer-link">liver</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Water</li>
            <li><a href="#" class="footer-links">water delivery</a></li>
        </ul>
   </div>
</div>
<p class="footer-title">about company</p>
<p class="info">
    It is a long established fact that a reader will be distracted by the readable content of a page when 
    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
    of letters, as opposed to using 'Content here, content here', making it look like readable English. 
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
    evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like).
</p>
<p class="info">support emails - help@basamarket.com,
    customersupport@basamarket.com </p>
    <p class="info">telephone - +267 755896940</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link"> terms & services </a>
            <a href="#" class="social-link"> privacy page </a>

        </div>
        <div>
            <a href="#" class="social-link">instagram </a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
            <a href="#" class="social-link">whatsapp </a>

        </div>

    </div>
    <p class="footer-credit">Basa, The best market place online</p> 
    
    `;
}
createFooter()