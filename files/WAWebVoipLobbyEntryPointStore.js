__d(
  "WAWebVoipLobbyEntryPointStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = !1;
    function s(t, n) {
      (n === void 0 && (n = !1), (e = t), (l = n));
    }
    function u() {
      ((e = null), (l = !1));
    }
    function c(t) {
      ((!l || !t) && (e = null), (l = !1));
    }
    function d() {
      return e;
    }
    ((i.setLobbyEntryPoint = s),
      (i.resetLobbyEntryPoint = u),
      (i.resetLobbyEntryPointOnAccept = c),
      (i.getCurrentLobbyEntryPoint = d));
  },
  66,
);
