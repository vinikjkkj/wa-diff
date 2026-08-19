__d(
  "DGWWebSocketGating",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === 772021112871879 || e === 0x7e36f3fcc43bc;
    }
    function s(e) {
      return e === 0x453bf7349370c || e === 936619743392459;
    }
    function u(t) {
      if (e(t)) {
        var n;
        return (n = r("qex")._("1252")) != null ? n : !1;
      }
      if (s(t)) {
        var o;
        return (o = r("qex")._("1370")) != null ? o : !1;
      }
      return !1;
    }
    l.default = u;
  },
  98,
);
