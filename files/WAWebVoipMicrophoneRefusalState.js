__d(
  "WAWebVoipMicrophoneRefusalState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = null;
    function s(e) {
      l !== e && ((l = e), m());
    }
    function u(e) {
      l === e && ((l = null), m());
    }
    function c() {
      return l;
    }
    function d(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function m() {
      for (var t of e) t();
    }
    ((i.reportMicrophoneRefused = s),
      (i.clearMicrophoneRefused = u),
      (i.getMicrophoneRefusedCallId = c),
      (i.subscribeToMicrophoneRefused = d));
  },
  66,
);
