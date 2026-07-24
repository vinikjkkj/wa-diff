__d(
  "WAWebVoipLocalCallStateStore",
  ["WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebVoipWaCallEnums").CallState.None;
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    ((l.setLocalCallState = s), (l.getLocalCallState = u));
  },
  98,
);
