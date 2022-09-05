const { createApp } = Vue

createApp({
    data() {
        return {
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    location: `North`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.251561024739!2d-87.84222038430782!3d42.33715974453967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed26d3692cf5%3A0x8611023901d6c74a!2sEvelyn%20Alexander%20School%20(K-3)!5e0!3m2!1ses!2sar!4v1654556832772!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    location: `South`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.40031866839!2d-87.85686271819382!3d42.31690609652749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac2135a21%3A0x8ce88e90b96bbec1!2sSouth%20Elementary%20School%20(K-5)!5e0!3m2!1ses!2sar!4v1654556733181!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    location: `South`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.40031866839!2d-87.85686271819382!3d42.31690609652749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac2135a21%3A0x8ce88e90b96bbec1!2sSouth%20Elementary%20School%20(K-5)!5e0!3m2!1ses!2sar!4v1654556733181!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    location: `North`,
                    map: `<iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.251561024739!2d-87.84222038430782!3d42.33715974453967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed26d3692cf5%3A0x8611023901d6c74a!2sEvelyn%20Alexander%20School%20(K-3)!5e0!3m2!1ses!2sar!4v1654556832772!5m2!1ses!2sar"
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
                    width="" height="" style="border:0; width:100vw; height: 20vh" allowfullscreen="" loading="lazy"
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
            missionExpanded: false,
            visionExpanded: false,
            generalInfoExpanded: false,
            menu: "",
            selectOptions: false,
            games: [],
            gamesFiltered: [],
            selectedTeam: "All",
            showFinisheds: false,
            horaActual: new Date(),
            gameDetails: ``
        }
    },
    created() {
        this.catchGames()
        this.gamesFiltered = this.games
        this.setGameStatus()

        if(document.title === `Game Info`){
            this.catchGameTapped()
        }

    },
    methods: {
        expandAccordion: function (accordionElement) {
            if (accordionElement === `mission`) {
                this.missionExpanded === false ? this.missionExpanded = true : this.missionExpanded = false
            }
            if (accordionElement === `vision`) {
                this.visionExpanded === false ? this.visionExpanded = true : this.visionExpanded = false
            }
            if (accordionElement === `generalInfo`) {
                this.generalInfoExpanded === false ? this.generalInfoExpanded = true : this.generalInfoExpanded = false
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
        }

    },
    computed: {
        filter: function () {
            this.gamesFiltered = this.games.filter(game => {
                return (this.selectedTeam === game.team1 || this.selectedTeam === game.team2 || this.selectedTeam === `All`)
            })
        }
    }
}).mount('#app')