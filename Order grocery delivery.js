let array1 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/5/16/478b476f-476a-4a66-98db-555979de9cc4_90872.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/5/16/28488682-bdf0-4b16-a736-d72738480891_8169.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/4/3/69ceaac3-39b5-44c9-9154-8a8decdbb43e_8075.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/5/16/de13ee5c-b06d-4ef7-83fb-8fe45b8c6ff6_10882.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/4/9/0a316bbc-61f8-473b-8f76-ce160861eb61_11400.png' },
];


let a = document.querySelector('.parent-featured-favours');


function mostlovedbrands() {
    array1.forEach((items) => {
        a.innerHTML += `<div>
        <div>
        <div data-testid="item-image-wrapper"><img
        src=${items.img}
        class="featured-imgs">
        </div>
        </div>
        </div>`
    });
};
mostlovedbrands();



let array2 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/7/f9d92860-8b3d-4024-970c-f83dc0b06c49_8499.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/14/e1e4d0e5-986e-4cff-a9b8-e07d3a908a2f_9574.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/14/e1e4d0e5-986e-4cff-a9b8-e07d3a908a2f_9574.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/5/16/e1a8fd2f-e079-47fc-9ecd-9240e83ea178_112002.png' }
];

let b = document.querySelector('.featured-favorite');


function featuredfavourites() {
    array2.forEach((items) => {
        b.innerHTML += `<div>
        <div>
        <div data-testid="item-image-wrapper"><img
        src=${items.img}
        class="featured-imgs">
        </div>
        </div>
        </div>`
    });
};
featuredfavourites();


let array3 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/5/30/0295d265-d28f-41ae-a359-219970b8777a_Pooja.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/4/8/70670590-644d-4a3d-b5c3-1a0608a5dc97_PartyStore120X160.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/3/68ee8d74-aceb-4e1d-8304-e9ec2273276b_Flavourofindia120X1602.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/5/14/d9ac67b7-10e3-4e5c-9d98-ad4f9f18f566_travelStore120X160.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/11/22/9e7bae6e-4cc0-4309-a1d2-993eb98df4be_WeddingStore120x1602.png' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/3/0d69458a-b254-429d-910d-681e16d63b77_Healthwellness1.png' },
];


let c = document.querySelector('.shop-store-parent');


function Shopbystore() {
    array3.forEach((items) => {
        c.innerHTML += `<div>
        <div>
        <div data-testid="item-image-wrapper"><img
        src=${items.img}
        class="featured-imgs">
        </div>
        </div>
        </div>`
    });
};
Shopbystore();



let array4 = [
    { name: 'Fresh Fruits', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/5/15/7c68c708-a4de-43d0-85d9-186964b25dce_67f9901c-688c-46a7-abcb-4a57b897da05' },
    { name: 'Dairy,Bread and Eggs', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/17/567052d8-9618-4ceb-bda1-f195fa78a2cc_eb30370f-cbe4-4e93-b4c1-d9c71622a11f' },
    { name: 'Cereals and Breakfast', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/15/eab2ad3a-795a-41e2-90e1-8ce0589b94f4_25d00f8b-19fc-40f8-8222-c98b78464cf7' },
    { name: 'Atta,Rice and Dal', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/7/3/4121a462-dc57-4cb1-910b-056b5a02ae8d_c33058e0-6895-43d6-b3e1-e4c42c2b3fdd' },
    { name: 'Oils and Ghee', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/17/a481799d-b29c-4723-bdda-690021132bc3_9044be8f-011c-4de5-a110-8fa3a15069f9' },
    { name: 'Masalas', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/17/2149e719-73f0-4109-a9f7-bb0c048f5f76_19da0609-b66c-4a58-aadc-9beec4a41a44' },
    { name: 'Sauces and Spreads', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/4/16/7a32b5a1-3f15-43ce-a7d0-d32bad48a675_23db123d-48ba-4eaa-a767-cc92fc190db8' },
    { name: 'Meat and Seafood', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/27/6e4ae802-2187-410d-8b2b-5fd5f6e8e783_9208c4aa-06b7-4114-a4e9-343fa0e09a91' },
    { name: 'Biscuits and Cakes', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/4/50eba797-b232-4e97-b578-e60886b6a165_6ced657f-8c05-4e35-a01b-1631129664af' },
];

let d = document.querySelector('.furniture-parent');

function furnitureParent() {
    array4.forEach((items) => {
        d.innerHTML += ` <div class="house-hold-parent"><a href="/instamart/city/chennai/c/fresh-vegetables">
                    <div data-testid="item-image-wrapper"><img
                            src=${items.img}
                            class="furniture-imgs"></div>
                    <div class="home-furnishing mx-2">${items.name}</div>
                </a></div>`
    });
};
furnitureParent();



let array5 = [
    { name: 'Chips and Namkeens', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/11/23/8be99d9b-a6e2-4a7f-b269-1dc1ea03a611_269d71e9-1473-4a37-acc5-f836406ce587' },
    { name: 'Chocolates', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/4/29/474e0d70-41d2-49cf-9707-27f371fb9b39_06cf6d7f-0360-46fe-a292-2aa74a4875b4' },
    { name: 'Noodels,Pasta', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/11/23/04c19b2c-d040-4ab9-8661-9e24be8ede9e_ca3bf205-6267-47d9-93c0-ee4610a3d4b9' },
    { name: 'Frozen Food', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/11/23/2fe1f579-f78c-4722-9912-cfe0a4caead8_38bfb65a-df3b-46ac-9e49-2946e145eaea' },
    { name: 'Indian Sweets', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/4/29/d3a093ef-1398-483e-9d92-f2a0b0e51dd8_4aea285f-889f-43c4-8e17-5a64172d2700' },
    { name: 'Paan Corner', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/11/23/5c4f1c60-f4b9-4b8a-9943-851946408955_6bef4495-7ad5-40d8-8d7e-14c2d60829ec' },
];

let e = document.querySelector('.Snacks-drinks');

function Snacks() {
    array5.forEach((items) => {
        e.innerHTML += ` <div class="house-hold-parent"><a href="/instamart/city/chennai/c/fresh-vegetables">
                    <div data-testid="item-image-wrapper"><img
                            src=${items.img}
                            class="furniture-imgs"></div>
                    <div class="home-furnishing mx-2">${items.name}</div>
                </a></div>`
    });
};
Snacks();


let array6 = [
    { name: 'Hair Care', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/17/d20ae521-d74a-4c3d-b231-67d0a241df62_92f67362-ed36-4939-847a-61388e2c0bc8' },
    { name: 'Skincare', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/15/b7f0b076-9cb7-49b1-9d4d-8b2e7d461635_b4585489-a5ef-4162-ada2-98881e766b50' },
    { name: 'Makeup', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/15/eab2ad3a-795a-41e2-90e1-8ce0589b94f4_25d00f8b-19fc-40f8-8222-c98b78464cf7' },
    { name: 'Oral Care', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/51a4db53-2bd7-49fb-ba6e-6f16725a5313_85716fb6-e564-4edd-8d13-05443c41656f' },
    { name: 'Grooming', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/50049509-7244-4adc-83a2-43edb85541c7_242222dc-31b2-4375-9abf-eff877f0f96d' },
    { name: 'Baby Care', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/17/ebc2f7d5-693a-42b5-b4b1-b7c1877e9359_3a80a75a-4f86-4474-820d-379629ed180f' },
    { name: 'Fragrance', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/e3fad19c-8f9a-4e8b-bff7-2ca107b3247c_531842e2-8e3f-4aa9-87e0-e062eba68f66' },
    { name: 'Sexual Wellness', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/de672d82-2217-46c4-b128-98a955b54b02_19f98fed-1dbd-4733-9285-448ddd00a054' },
    { name: 'Health and Pharma', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/9b8a3da7-4ac8-46b9-a514-26121048e15c_c3a7c020-a126-47e5-8fd7-75ac90771087' },
];

let f = document.querySelector('.beauty-personal');

function beauty() {
    array6.forEach((items) => {
        f.innerHTML += ` <div class="house-hold-parent"><a href="/instamart/city/chennai/c/fresh-vegetables">
                    <div data-testid="item-image-wrapper"><img
                            src=${items.img}
                            class="furniture-imgs"></div>
                    <div class="home-furnishing mx-2">${items.name}</div>
                </a></div>`
    });
};
beauty();


let array7 = [
    { name: 'Kitchen and Dining', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/19/9b2a42eb-428e-4b47-871f-04662c6c9c96_25f7998a-a1b4-4148-89e5-bad19d1cfe90' },
    { name: 'Cleaning Essentials', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/19/447c3794-6c7a-419f-810d-c0c3f35f5377_9f8430db-e7f2-4dba-8b00-1fcc9b29aa6a' },
    { name: 'Clothing', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/4dceaa80-de31-4952-9bbe-41301acb0c2d_632851da-4fd3-4e3a-9e8f-8fd0b19d8283' },
    { name: 'Electronics', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/19/aeba61f8-c40f-4e5d-b11b-17292a401b8b_24981625-1ff4-4652-a6da-b6c715bc1be2' },
    { name: 'Appliances', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/2/15/bc74844a-767c-4e47-8304-d0ef8f99cf60_ef23458e-04cf-4702-8d91-cde2aa81c259' },
    { name: 'Toys and Games', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/4e8fee19-05d2-4387-83a6-baa6b4dde5f4_987b4b79-390d-499f-9daa-7b8b56bbc844' },
    { name: 'Puja', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/4/29/931555bd-a37b-4c66-a662-875df3b09831_b10ab533-4646-4402-8f41-154ac3169086' },
    { name: 'Sports and Fitness', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/25/cab43d4f-0789-4fb2-8745-30e2e0b82e45_f1dc7919-059f-4673-9da8-f791892338e7' },
    { name: 'Pet Supplies', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/4/21/b4ffc53e-0a17-4d47-95c9-fb65869bf2a5_80e60aa7-bde3-4639-9499-5e9cb6600359' },
];

let g = document.querySelector('.house-hold-lifestyle');

function household() {
    array7.forEach((items) => {
        g.innerHTML += ` <div class="house-hold-parent"><a href="/instamart/city/chennai/c/fresh-vegetables">
                    <div data-testid="item-image-wrapper"><img
                            src=${items.img}
                            class="furniture-imgs"></div>
                    <div class="home-furnishing mx-2">${items.name}</div>
                </a></div>`
    });
};
household();



let array8 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/52e50779a8b52cfd3a5539d941bf379f', offer: '6% OFF', mins: '11 mins', title: 'Amul IC Gold Tricone Chocolate', ml: '120 ml', price: '45', originalPrice: '42', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/2eb1196cbfbe45472f460f61dc7a4d7d', offer: '20% OFF', mins: '11 mins', title: 'Amul King Alphonso Gold Ice Cream', ml: '1 L', price: '260', originalPrice: '208', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/qjrcacylpmpisbipazkh', offer: '6% OFF', mins: '11 mins', title: 'Amul Butterscotch Gold Ice Cream Tub', ml: '1 L', price: '260', originalPrice: '242', button: 'Add' },
];

let h = document.querySelector('.parent-recipe-boxes');

function tasteIcecream() {
    array8.forEach((items) => {
        h.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
tasteIcecream();


let array9 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/5/16/58fd39a6-4778-4760-bb91-85c8ba002e12_31925_1.png', offer: '8% OFF', mins: '10 mins', title: 'Nimyle Floor Cleaner...', ml: '1 L', price: '120', originalPrice: '110', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/7/13/9ba3ec8f-f980-494b-9560-42faa0bfaae5_surfacechemicalagents_ULTX7RJUHB_MN.png', offer: '30% OFF', mins: '10mins', title: 'Nimyle Herbal Floor Cleaner...', ml: '950 ml', price: '205', originalPrice: '143', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/5/16/c1329aac-be48-477c-aff0-fea67d874036_995569_1.png', offer: '20% OFF', mins: '10 mins', title: 'Nimyle Floor Cleaner...', ml: '5 L', price: '900', originalPrice: '720', button: 'Add' },
     { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/5/16/a30f74bd-904d-4558-8123-825d768adb1f_3775_1.png', offer: '4% OFF', mins: '10 mins', title: 'Nimyle Herbal <br />Floor...', ml: '500 ml', price: '95', originalPrice: '91', button: 'Add' },
      { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/5/16/ba7c24af-2f51-456c-8773-878ee0e506f8_75038_1.png', offer: '4% OFF', mins: '10 mins', title: 'Nimyle Herbal Floor Cleaner...', ml: '500 ml', price: '120', originalPrice: '91', button: 'Add' },
];


let i = document.querySelector('.parent-recipe-boxes2');

function neem() {
    array9.forEach((items) => {
        i.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
neem();



let array10 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/13/af3d91bf-327d-4155-b122-0ce17e8fd1fc_259_1.png', offer: '7% OFF', mins: '10 mins', title: "Mother's Recipe Karnataka Cut...", ml: '300 g', price: '110', originalPrice: '102', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/13/7992a0d1-317d-449c-bc0b-73d91f80e6a3_2389_1.png', offer: '10% OFF', mins: '10mins', title: "Mother's Recipe Mixed Pickle", ml: '300 g', price: '150', originalPrice: '110', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/13/0d15d288-b51e-4e75-ac91-a3560674c70a_3065_1.png', offer: '8% OFF', mins: '10 mins', title: "Mother's Recipe Garlic Green Chilli", ml: '180 g', price: '75', originalPrice: '69', button: 'Add' },
     { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/13/31d51e9a-db93-4577-b274-f4cc7f80c010_2546_1.png', offer: '7% OFF', mins: '10 mins', title: "Mother's Recipe Pickle Punjabi...", ml: '400 g', price: '140', originalPrice: '130', button: 'Add' },
      { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2025/3/13/c9f2da58-b9d1-46fd-a014-d1f402708a4c_4190_1.png', offer: '5% OFF', mins: '10 mins', title: "Mother's Recipe Stuff Red Chilli...", ml: '400 g', price: '190', originalPrice: '180', button: 'Add' },
];


let j = document.querySelector('.parent-recipe-boxes3');

function Pickel() {
    array10.forEach((items) => {
        j.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
Pickel();



let array11 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/ciw/2025/2/21/3df882df-f2d7-48aa-9bc6-2ddc958350d1_114143_1_20250212_105007.png', offer: '15% OFF', mins: '26 mins', title: "Granamma Crunchy Banana Chips...", ml: '60 grams', price: '60', originalPrice: '51', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/331105ce-a503-4763-b582-e61ae190cf49_57840_1.png', offer: '30% OFF', mins: '26 mins', title: "Granamma Butter Murukku...", ml: '120 g', price: '60', originalPrice: '40', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/965dd02c-14c7-420b-9531-3808124f3466_80128_1.png', offer: '30% OFF', mins: '36 mins', title: "Granamma Bengaluru Mixture...", ml: '120 g', price: '60', originalPrice: '42', button: 'Add' },
     { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/4c7d5e22-3037-464a-adec-efe053e7166d_84149_1.png', offer: '15% OFF', mins: '36 mins', title: "Granamma special chips...", ml: '120 g', price: '60', originalPrice: '41', button: 'Add' },
      { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/882f1579-62ce-40ac-97b2-73e3e82ded17_66126_1.png', offer: '15% OFF', mins: '26 mins', title: "Granamma Kara Boondi...", ml: '120 g', price: '60', originalPrice: '51', button: 'Add' },
];


let k = document.querySelector('.parent-recipe-boxes4');

function Chips() {
    array11.forEach((items) => {
        k.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
Chips();


let array12 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/3f5e39d6-9c15-4400-83f6-c65ac3720c10_79595_1.png', offer: '25% OFF', mins: '11 mins', title: "Royal Mart White Unisex...", ml: '3 pieces', price: '249', originalPrice: '185', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/3/22/8bf2d5d8-772c-4523-9b59-5301e5990427_FashionClothing_XDVAJI0D38_MN.png', offer: '47% OFF', mins: '11 mins', title: "Royal Mart White Unisex Socks...", ml: '1 pieces', price: '199', originalPrice: '105', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/6ef7c3ad-5190-4a38-8ca8-5aeda6a94277_65487_1.png', offer: '34% OFF', mins: '11 mins', title: "Royal Mart Multicolor Unisex...", ml: '3 pieces', price: '199', originalPrice: '130', button: 'Add' },
     { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/3/22/37713664-03fd-427e-a00d-20ec30c37fc2_FashionClothing_VFU7OW600L_MN.png', offer: '40% OFF', mins: '11 mins', title: "Royal Mart Multicolor Women...", ml: '3 pieces', price: '249', originalPrice: '149', button: 'Add' },
      { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/8/29/05eb1832-fa6b-4f85-88bf-583892b3dad6_87936_1.png', offer: '5% OFF', mins: '11 mins', title: "Jockey Multicolor Boys Briefs...", ml: '1 pieces', price: '460', originalPrice: '369', button: 'Add' },
];


let l = document.querySelector('.parent-recipe-boxes5');

function Basics() {
    array12.forEach((items) => {
        l.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
Basics();



let array13 = [
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/17/52d1eb60-3703-4c6f-8a8c-73146ad9e9a5_42645_1.png', offer: '22% OFF', mins: '11 mins', title: "Comfort Perfume Deluxe Desire...", ml: '2 L', price: '550', originalPrice: '424', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/bfb0195f69e819a3ab9a99d5c57d7083', offer: '15% OFF', mins: '11 mins', title: "Harpic Power Plus Stain Remove Toil...", ml: '1 L', price: '470', originalPrice: '399', button: 'Add' },
    { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/545500fa7526fb58f6dd21d3a5e1f0f8', offer: '23% OFF', mins: '11 mins', title: "Lizol All in 1 Disinfectant Surf...", ml: '5 L', price: '1092', originalPrice: '792', button: 'Add' },
     { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/23/1d894cc1-9616-437f-938a-e73301a67361_16458_1.png', offer: '12% OFF', mins: '11 mins', title: "Surf Excel Easy Wash Detergent...", ml: '5 kg', price: '770', originalPrice: '677', button: 'Add' },
      { img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/12/9/f92bcea0-e030-4998-b78e-693c83bc0555_14577_1.png', offer: '11% OFF', mins: '11 mins', title: "Ariel Matic Top Load Detergent...", ml: '5 kg', price: '1300', originalPrice: '1219', button: 'Add' },
];


let m = document.querySelector('.parent-recipe-boxes6');

function Cleaning() {
    array13.forEach((items) => {
        m.innerHTML += ` <div class="spicy-recipe-boxes"><div class="inner-boxes">
                    <div class="_3_hgi _3U-ho"
                        style="background-image: url(&quot;https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png&quot;);">
                        <div data-testid="item-offer-label-discount-text" class="sc-aXZVg cNzAGo">${items.offer}</div>
                    </div>
                    <img src="${items.img}"
                        loading="lazy">
                </div>
                <div>
                    <div class="_2zIRo _3CyJz">
                        <div class="sc-aXZVg cwTvVs GOJ8s _1y_Uf">${items.mins}</div>
                    </div>
                    <div class="sc-aXZVg kyEzVU _2m2cH">${items.title}</div>
                    <div>
                        <p class="mx-2 mt-1 fs-8 text text-secondary">${items.ml}</p>
                    </div>
                    <div class="price">&#8377;${items.price}</div>
                    <div class="original-price">&#8377;${items.originalPrice}</div>
                    <button class="_1_Add-button">${items.button}</button>
                </div>
            </div></div>`
    });
}
Cleaning();