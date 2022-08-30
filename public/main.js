const { createApp } = Vue

createApp({
    data() {
        return {
            events: [
                {
                    type: `event`,
                    date: `AUGUST 4`,
                    title: `MDHL Fundraiser`
                },
                {
                    type: `event`,
                    date: `AUGUST 16`,
                    title: `Season Kick-off: Meet the Teams`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 1`,
                    time: `9:30 am`,
                    team1: `U1`,
                    team2: `U4`                    
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 1`,
                    time: `1:00 pm`,
                    team1: `U3`,
                    team2: `U2`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 8`,
                    time: `9:30 am`,
                    team1: `U5`,
                    team2: `U6`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 8`,
                    time: `1:00 pm`,
                    team1: `U6`,
                    team2: `U1`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 15`,
                    time: `9:30 am`,
                    team1: `U2`,
                    team2: `U4`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 15`,
                    time: `1:00 pm`,
                    team1: `U3`,
                    team2: `U5`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 22`,
                    time: `9:30 am`,
                    team1: `U1`,
                    team2: `U3`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 22`,
                    time: `1:00 pm`,
                    team1: `U2`,
                    team2: `U6`
                },
                {
                    type: `match`,
                    date: `SEPTEMBER 29`,
                    time: `9:30 am`,
                    team1: `U4`,
                    team2: `U5`
                }
            ],
            missionExpanded: false,
            visionExpanded: false,
            generalInfoExpanded: false,
            menu: ""
        }
    },
    created() {

    },
    methods: {
        expandAccordion: function (accordionElement) {
            if(accordionElement === `mission`){
                this.missionExpanded === false? this.missionExpanded = true : this.missionExpanded = false
            } 
            if(accordionElement === `vision`){
                this.visionExpanded === false? this.visionExpanded = true : this.visionExpanded = false
            } 
            if(accordionElement === `generalInfo`){
                this.generalInfoExpanded === false? this.generalInfoExpanded = true : this.generalInfoExpanded = false
            } 
        }
    },
    computed: {
        
    }
}).mount('#app')