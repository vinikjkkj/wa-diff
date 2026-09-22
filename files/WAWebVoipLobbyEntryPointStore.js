__d(
  "WAWebVoipLobbyEntryPointStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      e = null;
    }
    function u() {
      return e;
    }
    ((i.setLobbyEntryPoint = l),
      (i.resetLobbyEntryPoint = s),
      (i.getCurrentLobbyEntryPoint = u));
  },
  66,
);
