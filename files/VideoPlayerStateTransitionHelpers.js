__d(
  "VideoPlayerStateTransitionHelpers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return !e.playing && t.playing;
    }
    function l(e, t) {
      return !e.paused && t.paused;
    }
    function s(e, t) {
      var n,
        r,
        o = (n = e.domEventsLatestPerfMs) != null ? n : {},
        a = (r = t.domEventsLatestPerfMs) != null ? r : {};
      return a.loadeddata != null && a.loadeddata !== o.loadeddata;
    }
    ((i.didStartPlaying = e), (i.didPause = l), (i.didLoadData = s));
  },
  66,
);
