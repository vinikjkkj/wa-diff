__d(
  "DTSG",
  ["invariant", "DTSGInitialData"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("DTSGInitialData").token || null;
    function u() {
      return e;
    }
    function c(t) {
      e = t;
    }
    function d() {
      s(0, 5809);
    }
    function m(e) {
      s(0, 73819);
    }
    ((l.getToken = u),
      (l.setToken = c),
      (l.refresh = d),
      (l.setTokenConfig = m));
  },
  98,
);
