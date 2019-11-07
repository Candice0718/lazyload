import { VNodeDirective } from 'vue';

/**
 * 检查元素是否在可视区域内
 * @param e 需要懒加载的元素
 */
function checkInView(e: HTMLElement): boolean {
  const { top } = e.getBoundingClientRect();
  const clientHeight: number = window.outerHeight || document.documentElement.clientHeight;
  if (top < clientHeight) {
    return true;
  } else {
    return false;
  }
}
/**
 * 如果在可视区域内并且src尚未赋值，需要将v-lazyLoad的binding.value值赋值到src
 * @param e 需要懒加载的元素
 * @param binding v-lazyLoad的值
 */
function load(e: HTMLElement, binding: VNodeDirective) {
  // let clientHeight = window.clientHeight;
  const isInView: boolean = checkInView(e);
  const src: any = e.getAttribute('src');
  // 判断是否已经存在src并且图片在可视范围之内
  if (!src && isInView) {
    e.setAttribute('src', binding.value);
  }
}
/**
 * 函数截流
 * @param this 
 * @param delay 
 * @param action 
 */
function throttle(this: any, delay: number, action: any): any {
  let last: number = 0;
  return () => {
    const curr = +new Date().getTime();
    if (curr - last > delay) {
      action.apply(this, arguments);
      last = curr;
    }
  };
  
}
/**
 * 
 * @param this 函数去抖
 * @param delay 
 * @param action 
 */
function debounce(this: any, delay: number, action: any): any {
  let timeout: any;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      action.apply(this, arguments);
    }, delay);
  };
}

export default {
  inserted: (el: HTMLElement, binding: VNodeDirective) => {
    load(el, binding);
    window.addEventListener('scroll', debounce(50, () => load(el, binding)), false);
  },
};
