import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        list: [{
                src: "https://cimgs1.fenqile.com/ibanner2/M00/37/EA/jqgHAF0DaeCAUH0NAACsc6Zy3uU691_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/06/59/j6gHAF0Dae-AKu3kAACoypXzjvI202_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/38/C1/jagHAF0CBMKAW6-JAACfZHAC0AY131_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/38/C1/jagHAF0CBPKAdvbKAACdE28m1ug039_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/06/59/j6gHAF0DagKAI4cRAACkP-4bXII447_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/38/C2/jagHAF0CBUaAYnEzAACgv35oh-I035_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/06/59/j6gHAF0DahGAFL6dAAC5mQEy1nI105_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/37/EA/jqgHAF0DaieAJAJcAACFj_Vusb4805_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/37/EA/jqgHAF0DaL6AFwn9AACxGc_C_X0659_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/38/C2/jagHAF0CBdiAWyMxAACcMJsENBM594_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/06/55/j6gHAF0CBgKAL6X6AACvzjsp994262_375x240.jpg"
            },
            {
                src: "https://cimgs1.fenqile.com/ibanner2/M00/06/55/j6gHAF0CBh6AEYYnAACWS5GGHyU562_375x240.jpg"
            }
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})


export default store;