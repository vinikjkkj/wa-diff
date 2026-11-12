__d(
  "VideoPlayerNextgendashTrackReuseReadiness",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = new Set();
    function s() {
      return e;
    }
    function u(t) {
      if (e !== t) {
        e = t;
        for (var n of Array.from(l)) n();
      }
    }
    function c(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    ((i.getVideoPlayerNextgendashSelectedMediaSinkType = s),
      (i.selectVideoPlayerNextgendashMediaSinkType = u),
      (i.subscribeVideoPlayerNextgendashMediaSinkSelection = c));
  },
  66,
);
