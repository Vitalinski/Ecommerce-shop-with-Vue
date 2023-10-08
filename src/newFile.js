import router from "./router/router";

router.beforeEach((to, from, next) => {
  if (to.name !== from.name) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  next();
});
