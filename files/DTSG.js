__d(
  "DTSG",
  ["invariant", "DTSGInitialData"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("DTSGInitialData").token || null;
    function u() {
      return e;
    }
    function c() {
      var e = o("DTSGInitialData").token;
      return e != null && e !== "";
    }
    function d(t) {
      e = t;
    }
    function m() {
      s(0, 5809);
    }
    function p(e) {
      s(0, 73819);
    }
    ((l.getToken = u),
      (l.hasInitialDataToken = c),
      (l.setToken = d),
      (l.refresh = m),
      (l.setTokenConfig = p));
  },
  98,
);
