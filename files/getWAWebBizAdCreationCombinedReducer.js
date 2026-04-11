__d(
  "getWAWebBizAdCreationCombinedReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (t, n) {
        var r = t,
          o = e.current.keys();
        for (var a of o) {
          var i = a(r, n);
          r = i[0];
        }
        return r;
      };
    }
    i.default = e;
  },
  66,
);
