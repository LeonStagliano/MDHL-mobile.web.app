const { createApp } = Vue

createApp({
    data() {
        return {
            page: `welcome`,
            events: [
                {
                    type: `event`,
                    date: new Date(`August 04, 2022`),
                    month: `AUGUST`,
                    day: `04`,
                    title: `MDHL Fundraiser`
                },
                {
                    type: `event`,
                    date: new Date(`August 16, 2022`),
                    month: `AUGUST`,
                    day: `16`,
                    title: `Season Kick-off: Meet the Teams`
                },
                {
                    id: `0901U1U4`,
                    type: `match`,
                    date: new Date(`September 01, 2022`),
                    month: `SEPTEMBER`,
                    day: `01`,
                    time: `9:30 am`,
                    location: `AJ Katzenmaier`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.828962234933!2d-87.86287552489662!3d42.32530213345448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses!2sar!4v1654545663720!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U1`,
                    team2: `U4`,
                    score1: 4,
                    score2: 6,
                    status: ``
                },
                {
                    id: `0901U3U2`,
                    type: `match`,
                    date: new Date(`September 01, 2022`),
                    month: `SEPTEMBER`,
                    day: `01`,
                    time: `1:00 pm`,
                    location: `Greenbay`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4171.98105329695!2d-87.87088118112631!3d42.32042890600067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f933bce5af881%3A0x740a7a7d548adce1!2sGreen%20Bay%20School%20(Pre-K)!5e0!3m2!1ses!2sar!4v1654545826229!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U3`,
                    team2: `U2`,
                    score1: 5,
                    score2: 2,
                    status: ``
                },
                {
                    id: `0908U5U6`,
                    type: `match`,
                    date: new Date(`September 08, 2022`),
                    month: `SEPTEMBER`,
                    day: `08`,
                    time: `9:30 am`,
                    location: `Howard A. Yeager`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.269876673849!2d-87.8560697843083!3d42.31544224591016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses!2sar!4v1654545939751!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U5`,
                    team2: `U6`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0908U6U1`,
                    type: `match`,
                    date: new Date(`September 08, 2022`),
                    month: `SEPTEMBER`,
                    day: `08`,
                    time: `1:00 pm`,
                    location: `Marjorie P. Hart`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2896536436424!2d-87.64816138431715!3d41.929626870166636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1654546040813!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U6`,
                    team2: `U1`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0915U2U4`,
                    type: `match`,
                    date: new Date(`September 15, 2022`),
                    month: `SEPTEMBER`,
                    day: `15`,
                    time: `9:30 am`,
                    location: `North Elementary`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.251561024739!2d-87.84222038430782!3d42.33715974453967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed26d3692cf5%3A0x8611023901d6c74a!2sEvelyn%20Alexander%20School%20(K-3)!5e0!3m2!1ses!2sar!4v1654556832772!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U2`,
                    team2: `U4`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0915U3U5`,
                    type: `match`,
                    date: new Date(`September 15, 2022`),
                    month: `SEPTEMBER`,
                    day: `15`,
                    time: `1:00 pm`,
                    location: `AJ Katzenmaier`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.828962234933!2d-87.86287552489662!3d42.32530213345448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses!2sar!4v1654545663720!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U3`,
                    team2: `U5`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0922U1U3`,
                    type: `match`,
                    date: new Date(`September 22, 2022`),
                    month: `SEPTEMBER`,
                    day: `22`,
                    time: `9:30 am`,
                    location: `South Elementary`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.40031866839!2d-87.85686271819382!3d42.31690609652749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac2135a21%3A0x8ce88e90b96bbec1!2sSouth%20Elementary%20School%20(K-5)!5e0!3m2!1ses!2sar!4v1654556733181!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U1`,
                    team2: `U3`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0922U2U6`,
                    type: `match`,
                    date: new Date(`September 22, 2022`),
                    month: `SEPTEMBER`,
                    day: `22`,
                    time: `1:00 pm`,
                    location: `Howard A. Yeager`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.269876673849!2d-87.8560697843083!3d42.31544224591016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses!2sar!4v1654545939751!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U2`,
                    team2: `U6`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `0929U4U5`,
                    type: `match`,
                    date: new Date(`September 29, 2022`),
                    month: `SEPTEMBER`,
                    day: `29`,
                    time: `9:30 am`,
                    location: `Greenbay`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4171.98105329695!2d-87.87088118112631!3d42.32042890600067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f933bce5af881%3A0x740a7a7d548adce1!2sGreen%20Bay%20School%20(Pre-K)!5e0!3m2!1ses!2sar!4v1654545826229!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U4`,
                    team2: `U5`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1006U2U5`,
                    type: `match`,
                    date: new Date(`October 06, 2022`),
                    month: `OCTOBER`,
                    day: `06`,
                    time: `9:30 am`,
                    location: `Marjorie P. Hart`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2896536436424!2d-87.64816138431715!3d41.929626870166636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1654546040813!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U2`,
                    team2: `U5`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1006U1U6`,
                    type: `match`,
                    date: new Date(`October 06, 2022`),
                    month: `OCTOBER`,
                    day: `06`,
                    time: `1:00 pm`,
                    location: `South Elementary`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.40031866839!2d-87.85686271819382!3d42.31690609652749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac2135a21%3A0x8ce88e90b96bbec1!2sSouth%20Elementary%20School%20(K-5)!5e0!3m2!1ses!2sar!4v1654556733181!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U1`,
                    team2: `U6`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1008U3U4`,
                    type: `match`,
                    date: new Date(`October 08, 2022`),
                    month: `OCTOBER`,
                    day: `08`,
                    time: `9:30 am`,
                    location: `Howard A. Yeager`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.269876673849!2d-87.8560697843083!3d42.31544224591016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses!2sar!4v1654545939751!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U3`,
                    team2: `U4`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1008U5U1`,
                    type: `match`,
                    date: new Date(`October 08, 2022`),
                    month: `OCTOBER`,
                    day: `08`,
                    time: `1:00 pm`,
                    location: `Greenbay`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4171.98105329695!2d-87.87088118112631!3d42.32042890600067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f933bce5af881%3A0x740a7a7d548adce1!2sGreen%20Bay%20School%20(Pre-K)!5e0!3m2!1ses!2sar!4v1654545826229!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U5`,
                    team2: `U1`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1020U6U3`,
                    type: `match`,
                    date: new Date(`October 20, 2022`),
                    month: `OCTOBER`,
                    day: `20`,
                    time: `9:30 am`,
                    location: `North Elementary`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.251561024739!2d-87.84222038430782!3d42.33715974453967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed26d3692cf5%3A0x8611023901d6c74a!2sEvelyn%20Alexander%20School%20(K-3)!5e0!3m2!1ses!2sar!4v1654556832772!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U6`,
                    team2: `U3`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1020U2U4`,
                    type: `match`,
                    date: new Date(`October 20, 2022`),
                    month: `OCTOBER`,
                    day: `20`,
                    time: `1:00 pm`,
                    location: `Marjorie P. Hart`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2896536436424!2d-87.64816138431715!3d41.929626870166636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1654546040813!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U2`,
                    team2: `U4`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1027U3U1`,
                    type: `match`,
                    date: new Date(`October 27, 2022`),
                    month: `OCTOBER`,
                    day: `27`,
                    time: `9:30 am`,
                    location: `AJ Katzenmaier`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.828962234933!2d-87.86287552489662!3d42.32530213345448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses!2sar!4v1654545663720!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U3`,
                    team2: `U1`,
                    score1: 0,
                    score2: 0,
                    status: ``
                },
                {
                    id: `1027U5U6`,
                    type: `match`,
                    date: new Date(`October 27, 2022`),
                    month: `OCTOBER`,
                    day: `27`,
                    time: `1:00 pm`,
                    location: `Howard A. Yeager`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.269876673849!2d-87.8560697843083!3d42.31544224591016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses!2sar!4v1654545939751!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 150px" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                    team1: `U5`,
                    team2: `U6`,
                    score1: 0,
                    score2: 0,
                    status: ``
                }
            ],
            teams: [
                {
                    team: `U1`,
                    teamName: `Konoha`,
                    players: [
                        {
                            name: `Itachi`,
                            position: `GK`,
                            number: `01`
                        },
                        {
                            name: `Shikamaru`,
                            position: `DEF`,
                            number: `03`
                        },
                        {
                            name: `Hinata`,
                            position: `DEF`,
                            number: `04`
                        },
                        {
                            name: `Kakashi`,
                            position: `MID`,
                            number: `07`
                        },
                        {
                            name: `Minato`,
                            position: `MID`,
                            number: `10`
                        },
                        {
                            name: `Sasuke`,
                            position: `FW`,
                            number: `06`
                        },
                        {
                            name: `Naruto`,
                            position: `FW`,
                            number: `09`
                        },
                    ]
                },
                {
                    team: `U2`,
                    teamName: `Paradis`,
                    players: [
                        {
                            name: `Erwin`,
                            position: `GK`,
                            number: `01`
                        },
                        {
                            name: `Armin`,
                            position: `DEF`,
                            number: `02`
                        },
                        {
                            name: `Hange`,
                            position: `DEF`,
                            number: `05`
                        },
                        {
                            name: `Mikasa`,
                            position: `MID`,
                            number: `09`
                        },
                        {
                            name: `Annie`,
                            position: `MID`,
                            number: `07`
                        },
                        {
                            name: `Eren`,
                            position: `FW`,
                            number: `22`
                        },
                        {
                            name: `Levi`,
                            position: `FW`,
                            number: `17`
                        },
                    ]
                }
            ],
            pictures: [
                "https://media.istockphoto.com/photos/junior-ice-hockey-picture-id161819228?k=20&m=161819228&s=170667a&w=0&h=I6Jzo6j0dks0uEY2XaRVw_2aMZyJulxEJe9tsJ-hPdA=",
                "https://cdn2.sportngin.com/attachments/photo/5490/5454/grow_the_game_large.jpg",
                "https://i.pinimg.com/originals/24/ab/8a/24ab8af10ea956ab66b895af83bce510.jpg",
                "https://i0.wp.com/russianmachineneverbreaks.com/wp-content/uploads/2018/05/jay-beagle-kids-practice-3.jpg?ssl=1",
                "https://media.purehockey.com/image/upload/v1565619693/wp-blog/best-hockey-drills-for-kids",
                "https://bloximages.newyork1.vip.townnews.com/conwaydailysun.com/content/tncms/assets/v3/editorial/d/9d/d9d3ed42-7a1e-11ec-9a9f-5f7c44f2836b/61e9aa0103695.image.jpg?resize=1500%2C998",
                "https://thumbs.dreamstime.com/b/hockey-goalie-4123672.jpg",
                "https://cdn2.sportngin.com/attachments/photo/807f-140080759/tgmITEb_large.jpg",
                "https://www.lakeplacid.com/f/styles/standard_header/public/page/34697/whitface-ski-infographicpage001.jpg?itok=4_0FQEFw"
            ],
            schools: [],
            accordionItem1Expanded: false,
            accordionItem2Expanded: false,
            accordionItem3Expanded: false,
            accordionItem4Expanded: false,
            accordionItem5Expanded: false,
            accordionItem6Expanded: false,
            accordionItem7Expanded: false,
            accordionItem8Expanded: false,
            accordionItem9Expanded: false,
            accordionItem10Expanded: false,
            accordionItem11Expanded: false,
            accordionItem12Expanded: false,
            accordionItem13Expanded: false,
            menu: "",
            selectOptions: false,
            games: [],
            gamesFiltered: [],
            selectedTeam: "All",
            showFinisheds: false,
            horaActual: new Date(),
            gameDetails: ``,
            showAlert: false,
            pageTheme: `./style.css`,
        }
    },
    created() {
        this.catchGames()
        this.gamesFiltered = this.games
        this.setGameStatus()

        if(document.title === `Game Info`){
            this.catchGameTapped()
        }

        this.catchSchools()

        

    },
    methods: {
        expandAccordion: function (accordionElement) {
            if (accordionElement === `item1`) {
                this.accordionItem1Expanded === false ? this.accordionItem1Expanded = true : this.accordionItem1Expanded = false
            }
            if (accordionElement === `item2`) {
                this.accordionItem2Expanded === false ? this.accordionItem2Expanded = true : this.accordionItem2Expanded = false
            }
            if (accordionElement === `item3`) {
                this.accordionItem3Expanded === false ? this.accordionItem3Expanded = true : this.accordionItem3Expanded = false
            }
            if (accordionElement === `item4`) {
                this.accordionItem4Expanded === false ? this.accordionItem4Expanded = true : this.accordionItem4Expanded = false
            }
            if (accordionElement === `item5`) {
                this.accordionItem5Expanded === false ? this.accordionItem5Expanded = true : this.accordionItem5Expanded = false
            }
            if (accordionElement === `item6`) {
                this.accordionItem6Expanded === false ? this.accordionItem6Expanded = true : this.accordionItem6Expanded = false
            }
            if (accordionElement === `item7`) {
                this.accordionItem7Expanded === false ? this.accordionItem7Expanded = true : this.accordionItem7Expanded = false
            }
            if (accordionElement === `item8`) {
                this.accordionItem8Expanded === false ? this.accordionItem8Expanded = true : this.accordionItem8Expanded = false
            }
            if (accordionElement === `item9`) {
                this.accordionItem9Expanded === false ? this.accordionItem9Expanded = true : this.accordionItem9Expanded = false
            }
            if (accordionElement === `item10`) {
                this.accordionItem10Expanded === false ? this.accordionItem10Expanded = true : this.accordionItem10Expanded = false
            }
            if (accordionElement === `item11`) {
                this.accordionItem11Expanded === false ? this.accordionItem11Expanded = true : this.accordionItem11Expanded = false
            }
            if (accordionElement === `item12`) {
                this.accordionItem12Expanded === false ? this.accordionItem12Expanded = true : this.accordionItem12Expanded = false
            }
            if (accordionElement === `item13`) {
                this.accordionItem13Expanded === false ? this.accordionItem13Expanded = true : this.accordionItem13Expanded = false
            }
        },
        showOptions: function () {
            this.selectOptions === false ? this.selectOptions = true : this.selectOptions = false
        },
        catchGames: function () {
            this.games = this.events.filter(event => event.type === `match`)
        },
        teamToFilter: function (team) {
            this.selectedTeam = team
            this.selectOptions = false
        },
        setGameStatus: function () {
            this.games.forEach(game => {
                if (this.horaActual > game.date) {
                    game.status = `Finished`
                }
                else {
                    game.status = `To Play`
                }
            })
        },
        catchGameTapped: function () {
            let urlSearch = window.location.search
            let gameID = urlSearch.slice(4)

            this.gameDetails = this.games.filter(game => game.id === gameID)
        },
        catchSchools: function () {
            this.games.forEach(game => {
                if(!this.schools.includes(game.location)){
                    this.schools.push(game.location)
                }
            })
        },
        darkMode: function () {
            this.pageTheme === `./style.css` ? this.pageTheme = `./styleDark.css` : this.pageTheme = `./style.css`
            let themeSelected = document.getElementById(`style`)
            themeSelected.href = this.pageTheme


        },
        catchTheme: function () {
            // AGARRAR EL TEMA GUARDADO EN EL LOCAL STORAGE (DARK/LIGHT)
        }

    },
    computed: {
        filter: function () {
            this.gamesFiltered = this.games.filter(game => {
                return (this.selectedTeam === game.team1 || this.selectedTeam === game.team2 || this.selectedTeam === `All`)
            })
        },
        setDocumentTitle: function () {
            document.title = this.page.toUpperCase()
        }
    }
}).mount('#app')