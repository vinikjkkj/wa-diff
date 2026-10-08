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
    function c() {
      return { awaitsLobbyJoin: l, lobbyEntryPoint: e };
    }
    function d(t) {
      ((e = t.lobbyEntryPoint), (l = t.awaitsLobbyJoin));
    }
    function m(t) {
      ((!l || !t) && (e = null), (l = !1));
    }
    function p() {
      return e;
    }
    ((i.setLobbyEntryPoint = s),
      (i.resetLobbyEntryPoint = u),
      (i.snapshotLobbyEntryPoint = c),
      (i.restoreLobbyEntryPoint = d),
      (i.resetLobbyEntryPointOnAccept = m),
      (i.getCurrentLobbyEntryPoint = p));
  },
  66,
);
