__d(
  "WAWebVoipLobbyEntryPointStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t, n) {
      ((e = t), (l = n));
    }
    function u() {
      ((e = null), (l = null));
    }
    function c(t) {
      return e == null ? null : l == null || l === t ? e : null;
    }
    ((i.setLobbyEntryPoint = s),
      (i.resetLobbyEntryPoint = u),
      (i.getLobbyEntryPointForCall = c));
  },
  66,
);
