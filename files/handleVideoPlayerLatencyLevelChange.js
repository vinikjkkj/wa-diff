__d(
  "handleVideoPlayerLatencyLevelChange",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (e && t && n) {
        var o = e.getAllContexts().latency_level,
          a = [];
        try {
          a = JSON.parse(
            e.getString("seek_on_latency_level_change_allowed", "[]"),
          );
        } catch (e) {}
        var i = a.some(function (e) {
          return e.length === 2 && e[0] === o && e[1] === r;
        });
        if ((e.setContext("latency_level", r), !i)) return;
        var l = t.getDuration(),
          s =
            l != null
              ? l + e.getNumber("live_initial_playback_position", 0)
              : null;
        s != null && t.setPlayheadPosition(s);
      }
    }
    i.default = e;
  },
  66,
);
