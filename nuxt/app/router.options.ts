import { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, _, savedPos) {
    if (savedPos) return savedPos;
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 32 };
    return { behavior: 'smooth', top: 0 };
  },
};
