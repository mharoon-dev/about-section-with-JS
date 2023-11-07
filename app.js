let history = document.querySelector('.history')
let vision = document.querySelector('.vision')
let goals = document.querySelector('.goals')
let myMainRow = document.querySelector('.myMainRow')


let aboutCards = [
    { // history
        name:'history',
        image:'./history.webp',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  perferendis ipsam quibusdam earum architecto? Distinctio, id ea?',
    },
    { // vision
        name:'vision',
        image:'./vision.jpg',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  perferendis ipsam quibusdam earum architecto? Distinctio, id ea?',
    },
    { // goals
        name:'goals',
        image:'./goals.jpg',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores maiores ducimus  suscipit aliquam, illo itaque odit eveniet distinctio iure quaerat maxime consequatur  perferendis ipsam quibusdam earum architecto? Distinctio, id ea?',
    }
]


function btn(btnName) {
    myMainRow.innerHTML = ''

    let filtration = aboutCards.filter( (card) => {
        if (card.name ==  btnName) {
            return true
        }
    });

    if (filtration == "") {
        myMainRow.innerHTML = 
        `<div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                <img class="w-100 h-75 " src="${aboutCards[0].image}">
            </div>
            <div class="col-lg-6 col-12 m-auto">
                <div class="row">
                    <div class="col-4 ">
                        <button onclick="btn('history')" class="w-100 history">history</button>
                    </div>
                    <div class="col-4 ">
                        <button onclick="btn('vision')" class="w-100 vision">vision</button>
                    </div>
                    <div class="col-4 ">
                        <button onclick="btn('goals')" class="w-100 goals">goals</button>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col">
                        <h6>${aboutCards[0].name}</h6>
                        <p>${aboutCards[0].details}</p>
                    </div>
                </div>
            </div>`
    }

    filtration.forEach( (filterCard) => {
        myMainRow.innerHTML = 
        `<div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">
        <img class="w-100  h-75 " src="${filterCard.image}">
    </div>
    <div class="col-lg-6 col-12 m-auto">
        <div class="row">
            <div class="col-4 ">
                <button onclick="btn('history')" class="w-100 history">history</button>
            </div>
            <div class="col-4 ">
                <button onclick="btn('vision')" class="w-100 vision">vision</button>
            </div>
            <div class="col-4 ">
                <button onclick="btn('goals')" class="w-100 goals">goals</button>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <h6>${filterCard.name}</h6>
                <p>${filterCard.details}</p>
            </div>
        </div>
    </div>`

    })
}

btn()