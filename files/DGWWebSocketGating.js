__d(
  "DGWWebSocketGating",
  ["DGWWebConfig", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(e) {
      return e === 772021112871879 || e === 0x7e36f3fcc43bc;
    }
    function u(e) {
      return e === 0x453bf7349370c || e === 936619743392459;
    }
    function c(e) {
      return !s(e) && !u(e) ? !1 : r("gkx")("3920");
    }
    function d(e) {
      if (s(e)) {
        var t;
        return (t = r("qex")._("1252")) != null ? t : !1;
      }
      if (u(e)) {
        var n;
        return (n = r("qex")._("1370")) != null ? n : !1;
      }
      return !1;
    }
    function m() {
      var t;
      if (!s(Number(r("DGWWebConfig").appId))) return !1;
      var n = e;
      if (n != null) return n;
      var o = (t = r("qex")._("5232")) != null ? t : !1;
      return ((e = o), o);
    }
    ((l.isDeauthBroadcastEnabled = c),
      (l.isWsCompressionEnabled = d),
      (l.isTaskMuxEnabled = m));
  },
  98,
);
