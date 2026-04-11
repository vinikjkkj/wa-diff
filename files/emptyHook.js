__d(
  "emptyHook",
  ["emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      function t() {
        return e;
      }
      return t;
    }
    var s = {
        thatReturns: e,
        thatReturnsNull: e(null),
        thatReturnsTrue: e(!0),
        thatReturnsFalse: e(!1),
        thatReturnsEmptyFunction: e(r("emptyFunction")),
      },
      u = s;
    l.default = u;
  },
  98,
);
