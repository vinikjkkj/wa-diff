__d(
  "bs_js_math",
  ["bs_js_int"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Math.ceil(e);
    }
    function l(e) {
      return e > n("bs_js_int").max
        ? n("bs_js_int").max
        : e < n("bs_js_int").min
          ? n("bs_js_int").min
          : Math.ceil(e);
    }
    function s(e) {
      return Math.floor(e);
    }
    function u(e) {
      return e > n("bs_js_int").max
        ? n("bs_js_int").max
        : e < n("bs_js_int").min
          ? n("bs_js_int").min
          : Math.floor(e);
    }
    function c(e, t) {
      return (u(Math.random() * ((t - e) | 0)) + e) | 0;
    }
    var d = l,
      m = u;
    ((i.unsafe_ceil = e),
      (i.ceil_int = l),
      (i.ceil = d),
      (i.unsafe_floor = s),
      (i.floor_int = u),
      (i.floor = m),
      (i.random_int = c));
  },
  null,
);
