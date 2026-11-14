__d(
  "evaluateVideoAutoplayIgnoreOnUnmuteRule",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.lastMuteReason,
        n = e.muted,
        o = e.paused;
      return n || o || (t === "audio_manager_initiated" && r("gkx")("11495"))
        ? "SKIP"
        : "IGNORE";
    }
    ((e.displayName = "evaluateVideoAutoplayIgnoreOnUnmuteRule"),
      (l.default = e));
  },
  98,
);
