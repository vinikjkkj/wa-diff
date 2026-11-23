__d(
  "MAIBAGeoPlatformStreamingStates",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "thinking",
      "client_init",
      "init",
      "searching",
      "streaming",
    ]);
    function l(t) {
      return t != null && e.has(t);
    }
    var s = new Set(["thinking", "client_init", "init", "searching"]);
    function u(e) {
      return e != null && s.has(e);
    }
    function c(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.role) != null ? t : "assistant";
      return n === "user" ? !1 : l(e.streaming_state);
    }
    ((i.isPlatformStreamInFlight = l),
      (i.isPlatformPreContentStream = u),
      (i.isMAIBAPlatformThreadInterrupted = c));
  },
  66,
);
