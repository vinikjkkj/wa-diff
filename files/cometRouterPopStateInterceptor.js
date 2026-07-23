__d(
  "cometRouterPopStateInterceptor",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      return (e == null ? void 0 : e()) === !0;
    }
    ((i.installPopStateInterceptor = l), (i.popStateInterceptorDidHandle = s));
  },
  66,
);
