__d(
  "getCometEntityKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.entityKeyConfig;
      return t == null ? null : l(t, e);
    }
    function l(e, t) {
      var n = {};
      for (var r in e) n[r] = u(e[r], t);
      return n;
    }
    function s(e, t) {
      return e == null || e[t] == null ? null : String(e[t]);
    }
    function u(e, t) {
      switch (e.source) {
        case "prop":
          return s(t.rootView.props, e.value);
        case "param":
          return s(t.params, e.value);
        case "constant":
          return e.value;
      }
      return null;
    }
    i.default = e;
  },
  66,
);
