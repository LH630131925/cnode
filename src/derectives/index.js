import Vue from 'vue'

//引入实例配置项
import GoTop from './goTop.vue'

export const toTop =  (el) => {
    //生成Vue子类
    const TopConstrutor = Vue.extend(GoTop);

    //创建实例
    const instance = new TopConstrutor();

    //通过实例属性$mount()挂载，给实例中添加$el属性（这个属性的值是这个实例的dom节点）
    instance.$mount();

    //给调用了这个自定义指令的组件的根节点中增加节点与绑定时间等操作
    el.appendChild(instance.$el)
    el.addEventListener('scroll',() => {
        if(el.scrollTop > 400){
            instance.isShow = true
        }else{
            instance.isShow = false
        }
    })

}


