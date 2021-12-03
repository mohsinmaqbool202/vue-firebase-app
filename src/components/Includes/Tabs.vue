<template>
    <div class="container wrapper_tabs" align="center">
        <h2 class="title" v-scroll-reveal.reset>Teams</h2>
        <hr>
        <div class="button-group" v-scroll-reveal.reset>
            <md-button 
                v-for="(button, index) in buttons" 
                :key="index" 
                :class="button.active ? 'md-raised' : '' "
                @click="changeTab(button.name)"
            >
                {{button.name}}
            </md-button>
        </div>
        <hr>
        <div class="users_list" v-scroll-reveal.reset>
            <md-card
                v-for="(user, index) in users" :key="index"
                v-show="user.type == userType"
            >
                <md-card-media md-ratio="16:9">
                    <img :src="require(`../../../public/assets/images/${user.image}`)" alt="" />
                </md-card-media>
                <md-card-header>
                    <h2 class="title" >
                        Name: {{ user.name }}
                    </h2>
                    <div class="md-subhead">
                        Age: {{ user.age }}
                    </div>
                </md-card-header>
            </md-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userType: 'docter',
            users: [],
            buttons: [
                {
                    name: 'staff',
                    active: false
                },
                {
                    name: 'professional',
                    active: false
                },
                {
                    name: 'player',
                    active: false
                },
                {
                    name: 'docter',
                    active: true
                }
            ]
        }
    },
    methods: {
        changeTab(tabName) {
            this.buttons.forEach(item => {
                if(item.name == tabName) {
                    item.active = true;
                    this.userType = tabName;
                }else {
                    item.active = false;
                }
            })
        }
    },
    created() {
        this.$http.get('https://vue-firebase-app-9ec22-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
            .then(response => response.json())
            .then(data => {
                let list = [];
                for(let key in data) {
                    list.push({
                        ...data[key],
                        id: key
                    })
                }
                this.users = list;
            })
    }
}
</script>

<style scoped>
.md-card {
    width: 32%;
    margin-bottom: 20px;
    display: inline-block;
}

.users_list {
    /* display: flex; */
    justify-content: space-between;
    flex-wrap: wrap;
}

.wrapper_tabs {
    padding-bottom: 100px;
    padding-top: 100px;
}

h2.title {
    font-weight: 900;
    font-family: Poiret;
    color: #2cb5e7;
}
</style>