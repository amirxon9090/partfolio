// Loyihalar bazasi
const projectsData = {
    1: {
        title: "Counter",
        desc: "Malumot",
        link: "https://counter-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/counter",
        img: "photo_1.jpg"
    },
    2: {
        title: "Royhat",
        desc: "Malumot",
        link: "https://royhat-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/royhat",
        img: "photo_2.jpg"
    },
    3: {
        title: "Raqamni top",
        desc: "Malumot",
        link: "https://chevroletamir.netlify.app/",
        link1: "https://github.com/amirxon9090/Chevrolet",
        img: "photo_3.jpg"
    },
    4: {
        title: "Shajara",
        desc: "Malumot",
        link: "https://shajara-2-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/shajara-2",
        img: "photo_4.jpg"
    },
     5: {
        title: "Isiqlik olchash",
        desc: "Malumot",
        link: "https://isiqlik-olchash.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/isiqlik-olchash",
        img: "photo_5.jpg"
    },
    6: {
        title: "Kalkulyator",
        desc: "Malumot",
        link: "https://kalkulyator-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/kalkulyator",
        img: "photo_6.jpg"
    },
    7: {
        title: "Lampa",
        desc: "Malumot",
        link: "https://lampa-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/lampa",
        img: "photo_7.jpg"
    },
    8: {
        title: "Login",
        desc: "Malumot",
        link: "https://login-page-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/login-page",
        img: "photo_8.jpg"
    },
     9: {
        title: "Teskari soz",
        desc: "Malumot",
        link: "https://teskari-soz-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/teskari-soz",
        img: "photo_9.jpg"
    },
     10: {
        title: "Oila shajara",
        desc: "Malumot",
        link: "https://oila-shajarasi.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/oila.shajarasi",
        img: "photo_10.jpg"
    },
     11: {
        title: "Test",
        desc: "Malumot",
        link: "https://test-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/test",
        img: "photo_11.jpg"
    },
     12: {
        title: "Ism familya",
        desc: "Malumot",
        link: "https://ism-familya-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/ism-familya",
        img: "photo_12.jpg"
    },
     13: {
        title: "Tugilgan kun",
        desc: "Malumot",
        link: "https://tugilgan-kun-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/tuglgan-kun",
        img: "photo_13.jpg"
    },
     14: {
        title: "Yangi loyiha",
        desc: "Malumot",
        link: "https://yangi-loyiha-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/yangi-loyiha",
        img: "photo_14.jpg"
    },
     15: {
        title: "Tugilgan kun",
        desc: "Malumot",
        link: "https://tugilgan-kun-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/tuglgan-kun",
        img: "photo_15.jpg"
    }
};


function openProject(id) {
    const project = projectsData[id];
    const content = document.getElementById('detailsContent');
    
    content.innerHTML = 
        `<img src="${project.img}" style="width:100%; border-radius:8px; margin-top:20px;">
        <h2 style="margin:20px 0;">${project.title}</h2>
        <p style="color:#aaa; line-height:1.6;">${project.desc}</p>
        <a href="${project.link}" target="_blank" style="display:inline-block; margin-top:20px; color:#6a3bc2; font-weight:bold;">SAYTGA O'TISH</a>
        <a href="${project.link1}" target="_blank" style="display:block; margin-top:20px; color:#6a3bc2; font-weight:bold;"> KODNI KORISH</a>`
    ;
    
    document.getElementById('detailsSidebar').classList.add('open');
}

function closeProject() {
    document.getElementById('detailsSidebar').classList.remove('open');
}