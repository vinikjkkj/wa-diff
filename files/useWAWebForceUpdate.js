__d(
  "useWAWebForceUpdate",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useReducer;
    function u() {
      var e = s(function (e) {
          return e + 1;
        }, 0),
        t = e[0],
        n = e[1];
      return n;
    }
    l.useForceUpdateDONOTUSE = u;
  },
  98,
);
