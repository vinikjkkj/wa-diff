__d(
  "useWAWebForceUpdate",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useReducer;
    function u() {
      var e = s(c, 0),
        t = e[1];
      return t;
    }
    function c(e) {
      return e + 1;
    }
    l.useForceUpdateDONOTUSE = u;
  },
  98,
);
