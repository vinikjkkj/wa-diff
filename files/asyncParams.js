__d(
  "asyncParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {};
    function l(t, n) {
      e[t] = n;
    }
    function s() {
      return e;
    }
    function u(t) {
      delete e[t];
    }
    ((i.add = l), (i.get = s), (i.remove = u));
  },
  66,
);
