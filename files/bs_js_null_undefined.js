__d(
  "bs_js_null_undefined",
  ["bs_caml_option"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e == null ? e : t(e);
    }
    function l(e, t) {
      if (e != null) return t(e);
    }
    function s(e) {
      if (e !== void 0) return n("bs_caml_option").valFromOption(e);
    }
    var u = s;
    ((i.bind = e), (i.iter = l), (i.fromOption = s), (i.from_opt = u));
  },
  null,
);
