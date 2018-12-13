<template>
    <v-container
            fluid
            grid-list-lg>
        <v-layout row wrap>
            <v-flex lg4>
                <h4 class="title">New Tasks</h4>
                <div class="listBorder">
                <v-layout row wrap class="max">
                    <v-flex v-for="card in cards"
                            lg12>
                        <v-card>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{card.title}}</div>
                                    <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
                </div>
                <v-btn block color="secondary" dark>Block Button</v-btn>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">In progress</h4>
                <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Unlimited music now</div>
                            <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark>Listen now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">Done</h4>
                <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Unlimited music now</div>
                            <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark>Listen now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>


        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            cards: [
                { title: 'Fix vue js'},
                { title: 'Ouai cool'},
                { title: 'Trop bien'},
                { title: 'Trop bien'},
                { title: 'Trop bien'},
            ]
        })
    }
</script>

<style scoped>

    .title {
        text-align: left;
        color: #364F6B;
    }

    .listBorder {
        background-color: white;
        border: 2px solid white;
        border-radius: 7px;
        padding: 16px;
        height: 75vh;
        overflow: auto;
    }

    .noPadding {
        padding: 0;
    }

    .max {
    }


</style>
