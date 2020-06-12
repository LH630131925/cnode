import Vue from 'vue'

import GoTop from './goTop.vue'

export const toTop =  (el) => {
    const TopConstrutor = Vue.extend(GoTop);

    const instance = new TopConstrutor();

    instance.$mount();

    el.appendChild(instance.$el)

    el.addEventListener('scroll',() => {
        if(el.scrollTop > 400){
            instance.isShow = true
        }else{
            instance.isShow = false
        }
    })

}


