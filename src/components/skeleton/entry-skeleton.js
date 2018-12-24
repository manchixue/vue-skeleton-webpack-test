import Vue from 'vue';

//创建的骨架屏 vue实例
import SkeletonOne from './skeleton_1.vue';
import SkeletonTwo from './skeleton_2.vue';
import SkeletonThree from './skeleton_3.vue';

export default new Vue({
  components:{
    SkeletonOne,
    SkeletonTwo,
    SkeletonThree
  },
  template: `<div>
      <skeleton-one id="skeleton-one" style="display: none"></skeleton-one>
      <skeleton-two id="skeleton-two" style="display: none"></skeleton-two>
      <skeleton-three id="skeleton-three" style="display: none"></skeleton-three>
</div>`
})
