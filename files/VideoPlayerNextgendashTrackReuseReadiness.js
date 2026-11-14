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
    var d = new Set(),
      m = new Map(),
      p = !1,
      _ = !1;
    function f() {
      return !p;
    }
    function g() {
      p = !0;
    }
    function h() {
      if (!(!p || _)) {
        _ = !0;
        for (var e of Array.from(l)) e();
        for (var t of m.values()) for (var n of t) n(!0);
      }
    }
    function y(e) {
      return _ || d.has(e);
    }
    function C(e, t) {
      var n = m.get(e);
      return (
        n == null && ((n = new Set()), m.set(e, n)),
        n.add(t),
        t(y(e)),
        function () {
          var r, o;
          ((r = n) == null || r.delete(t),
            ((o = n) == null ? void 0 : o.size) === 0 && m.delete(e));
        }
      );
    }
    function b(e, t) {
      if (!p && d.has(e) !== t) {
        t ? d.add(e) : d.delete(e);
        for (var n of (r = m.get(e)) != null ? r : []) {
          var r;
          n(t);
        }
      }
    }
    ((i.getVideoPlayerNextgendashSelectedMediaSinkType = s),
      (i.selectVideoPlayerNextgendashMediaSinkType = u),
      (i.subscribeVideoPlayerNextgendashMediaSinkSelection = c),
      (i.isVideoPlayerNextgendashTrackReuseSessionAvailable = f),
      (i.latchVideoPlayerNextgendashTrackReuseSessionFallback = g),
      (i.publishVideoPlayerNextgendashTrackReuseSessionFallback = h),
      (i.isVideoPlayerNextgendashTrackReuseReady = y),
      (i.subscribeVideoPlayerNextgendashTrackReuseReadiness = C),
      (i.updateVideoPlayerNextgendashTrackReuseReadiness = b));
  },
  66,
);
