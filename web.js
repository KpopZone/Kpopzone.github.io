const createNav = () => {
    let nav = document.querySelector('.navbar');

     nav.innerHTML=`
        <div class="nav">
            <img src="images/logo.png" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="images/—Pngtree—simple shopping logo_6616859.png" width="46px" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/blackpink-merch" class="link">Blackpink Merch</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/stray-kids-shop" class="link">Stray Kids Shop</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/ateez-shop" class="link">Ateez Shop</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/bts-shop" class="link">BTS Shop</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/kpop-albums" class="link">K-POP Albums</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/anime-shop" class="link">Anime Shop</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/exo-shop" class="link">EXO Shop</a></li>
            <li class="link-item"><a href="https://kpopshop.com/collections/itzy-shop" class="link">ITZy shop</a></li>
            
        </ul>`;
}

createNav();

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let conainerDimenstions = item.getBoundingClientRect();
    let containerWidth = conainerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const createFooter = () => {
    let footer = document.querySelector('footer');

     foot.innerHTML = `<div class="footer-content">
     <div class="footer-ul-container">
         <ul class="category">
             <li class="category-tittle">Help/Support</li>
             <li> <a href="#" class="footer-link">Shipping Info</a></li>
             <li> <a href="#" class="footer-link">Return & Exchange Policy</a></li>
             <li> <a href="#" class="footer-link">Privacy Policy</a></li>
             <li> <a href="#" class="footer-link">Terms of service</a></li>
             <li> <a href="#" class="footer-link">Shipping Info</a></li>
         </ul>
         
     </div>
     
 </div>
 <p class="footer-tittle">About Us</p>
     <p class="info">The satisfaction, progression, and success of each partnership initiated is of the utmost importance to us. By delivering great bottom line results for advertisers, adhering to the highest standards of quality, ​and​ fundamentally boosting publishers' earnings, affiliaXe has undoubtedly become a major key player.​</p>
     <p class="info">Support Emails - KpopZone@clothing.com, </p>
<p class="info">telephone - (+91 9515850350)</p>
<div class="footer-social-container">
<div class="footer-social-container">
 <div>
     <a href="#" class="social-link">instagram</a>
     <a href="#" class="social-link">facebook</a>
     <a href="#" class="social-link">Twitter</a>
 </div>
</div>
</div>
<p class="footer-credit">Clothing, Best KPoP Appareals Online Store</p>
     `;
}

createFooter();