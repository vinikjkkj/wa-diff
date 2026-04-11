__d(
  "useConcurrentAutoplayManagementAPI",
  ["react", "removeFromArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useId,
      c = s.useState;
    function d() {
      return u();
    }
    function m() {
      var e = [];
      return {
        isControllingComponent: function (n) {
          var t = e.length;
          return e[t - 1] === n;
        },
        registerControllingComponent: function (n) {
          (r("removeFromArray")(e, n), e.push(n));
        },
        unregisterControllingComponent: function (n) {
          var t = e.length;
          return (t > 1 && r("removeFromArray")(e, n), t > 1);
        },
      };
    }
    function p() {
      var e = c(_),
        t = e[0];
      return t;
    }
    function _() {
      return m();
    }
    ((l.useAutoplayControlID = d),
      (l.createConcurrentAutoplayManagementAPI = m),
      (l.useConcurrentAutoplayManagementAPI = p));
  },
  98,
);
