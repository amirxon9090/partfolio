// Loyihalar bazasi
const projectsData = {
    1: {
        title: "Sing in",
        desc: "Malumot",
        link: "https://singinamir.netlify.app/",
        link1: "https://github.com/amirxon9090/sing-in",
        img: "photo_1.jpg"
    },
    2: {
        title: "Codinglab",
        desc: "Malumot",
        link: "https://codinlabamir.netlify.app/",
        link1: "https://github.com/amirxon9090/codinglab",
        img: "photo_2.jpg"
    },
    3: {
        title: "CHEVROLET SAYT",
        desc: "Malumot",
        link: "https://chevroletamir.netlify.app/",
        link1: "https://github.com/amirxon9090/Chevrolet",
        img: "photo_3.jpg"
    },
    4: {
        title: "Login page",
        desc: "Malumot",
        link: "https://loginpageamirxon.netlify.app/",
        link1: "https://github.com/amirxon9090/login-page",
        img: "photo_4.jpg"
    },
    5: {
        title: "Isiqlik olchash",
        desc: "Malumot",
        link: "https://callumhhh.netlify.app/",
        link1: "https://github.com/amirxon9090/Callum-Hayes",
        img: "photo_5.jpg"
    },
    6: {
        title: "Tasbex",
        desc: "Malumot",
        link: "https://tasbexx.netlify.app/",
        link1: "https://github.com/amirxon9090/tasbex",
        img: "photo_6.jpg"
    },
    7: {
        title: "AmirAcadmy",
        desc: "Malumot",
        link: "https://amiracademy.netlify.app/",
        link1: "https://github.com/amirxon9090/AmirAcademy",
        img: "photo_7.jpg"
    },
    8: {
        title: "Shajara",
        desc: "Malumot",
        link: "https://shajaraqidiruv.netlify.app/",
        link1: "https://github.com/amirxon9090/shajara-qidiruv",
        img: "photo_8.jpg"
    },
    9: {
        title: "Tugilgan kun aniqlaydigan",
        desc: "Malumot",
        link: "https://tugulgankun.netlify.app/",
        link1: "https://github.com/amirxon9090/tugulgan-kun-aniqlaydigan",
        img: "photo_9.jpg"
    },
    10: {
        title: "Market mine",
        desc: "Malumot",
        link: "https://marketjs.netlify.app/",
        link1: "https://github.com/amirxon9090/market-js",
        img: "photo_10.jpg"
    },
    11: {
        title: "TESKARI SOZ",
        desc: "Malumot",
        link: "https://teskariyozadigan.netlify.app/",
        link1: "https://github.com/amirxon9090/teskari-yozadigan",
        img: "photo_11.jpg"
    },
    12: {
        title: "Ism aniqlaydigan",
        desc: "Malumot",
        link: "https://ismtopadigan.netlify.app/",
        link1: "https://github.com/amirxon9090/ism-topadigan",
        img: "photo_12.jpg"
    },
    13: {
        title: "Harorat olchash",
        desc: "Malumot",
        link: "https://gradusamir.netlify.app/",
        link1: "https://github.com/amirxon9090/gradus",
        img: "photo_13.jpg"
    },
    14: {
        title: "Kalkulyator",
        desc: "Malumot",
        link: "https://kankulatoramir.netlify.app/",
        link1: "https://github.com/amirxon9090/kakulator",
        img: "photo_14.jpg"
    },
    15: {
        title: "Taqvim-Ramazon",
        desc: "Malumot",
        link: "https://taqvimramozon.netlify.app/",
        link1: "https://github.com/amirxon9090/Taqvim",
        img: "photo_15.jpg"
    }
};

function openProject(id) {

    const project = projectsData[id];
    const content = document.getElementById('detailsContent');

    content.innerHTML = `

    <img src="${project.img}" 
    style="
    width:100%;
    border-radius:16px;
    margin-top:20px;
    ">

    <h2 style="
    margin:20px 0;
    ">
        ${project.title}
    </h2>

    <p style="
    color:#6b7280;
    line-height:1.7;
    ">
        ${project.desc}
    </p>

    <div class="project-links">

        <a href="${project.link}" 
        target="_blank"
        class="live-btn">
            Saytga O‘tish
        </a>

        <a href="${project.link1}" 
        target="_blank"
        class="code-btn">
            Kodni Ko‘rish
        </a>

    </div>
    `;

    document.getElementById('detailsSidebar')
    .classList.add('open');
}

function closeProject() {
    document.getElementById('detailsSidebar')
    .classList.remove('open');
}