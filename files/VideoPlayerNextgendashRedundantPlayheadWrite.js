__d(
  "VideoPlayerNextgendashRedundantPlayheadWrite",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.02;
    function l(t, n) {
      return n == null ? !1 : Math.abs(t.currentTime - n) < e;
    }
    ((i.REDUNDANT_PLAYHEAD_WRITE_EPSILON_SEC = e),
      (i.isRedundantPlayheadWrite = l));
  },
  66,
);
