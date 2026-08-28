__d(
  "ZenonMuteStateDeriver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      e.forEach(function (e) {
        var n = t.get(e.trackId);
        n != null &&
          (n.isMuted = !e.enabled || e.webrtcTrack.readyState === "ended");
      });
    }
    i.updateMuteState = e;
  },
  66,
);
