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
    var d = new Map(),
      m = new Map(),
      p = new Map(),
      _ = new Map(),
      f = !1,
      g = !1;
    function h(e, t) {
      t == null ? _.delete(e) : _.set(e, t);
    }
    function y(e) {
      var t;
      return (t = _.get(e)) != null ? t : null;
    }
    function C() {
      return !f;
    }
    function b() {
      f = !0;
    }
    function v() {
      if (!(!f || g)) {
        g = !0;
        for (var e of Array.from(l)) e();
        for (var t of m.values()) for (var n of t) n(!0);
        for (var r of p.values()) for (var o of r) o("ready");
      }
    }
    function S(e) {
      return R(e) === "ready";
    }
    function R(e) {
      var t;
      return g ? "ready" : (t = d.get(e)) != null ? t : "not_ready";
    }
    function L(e, t) {
      var n = p.get(e);
      return (
        n == null && ((n = new Set()), p.set(e, n)),
        n.add(t),
        t(R(e)),
        function () {
          var r, o;
          ((r = n) == null || r.delete(t),
            ((o = n) == null ? void 0 : o.size) === 0 && p.delete(e));
        }
      );
    }
    function E(e, t) {
      var n = m.get(e);
      return (
        n == null && ((n = new Set()), m.set(e, n)),
        n.add(t),
        t(S(e)),
        function () {
          var r, o;
          ((r = n) == null || r.delete(t),
            ((o = n) == null ? void 0 : o.size) === 0 && m.delete(e));
        }
      );
    }
    function k(e, t) {
      I(e, t ? "ready" : "not_ready");
    }
    function I(e, t) {
      if (!f) {
        var n = R(e);
        if (n !== t) {
          if (
            (t === "not_ready" ? d.delete(e) : d.set(e, t),
            (n === "ready") != (t === "ready"))
          )
            for (var r of (o = m.get(e)) != null ? o : []) {
              var o;
              r(t === "ready");
            }
          for (var a of (i = p.get(e)) != null ? i : []) {
            var i;
            a(t);
          }
        }
      }
    }
    ((i.getVideoPlayerNextgendashSelectedMediaSinkType = s),
      (i.selectVideoPlayerNextgendashMediaSinkType = u),
      (i.subscribeVideoPlayerNextgendashMediaSinkSelection = c),
      (i.updateVideoPlayerNextgendashTrackReuseFeedPosition = h),
      (i.getVideoPlayerNextgendashTrackReuseFeedPosition = y),
      (i.isVideoPlayerNextgendashTrackReuseSessionAvailable = C),
      (i.latchVideoPlayerNextgendashTrackReuseSessionFallback = b),
      (i.publishVideoPlayerNextgendashTrackReuseSessionFallback = v),
      (i.isVideoPlayerNextgendashTrackReuseReady = S),
      (i.getVideoPlayerNextgendashTrackReusePromotionState = R),
      (i.subscribeVideoPlayerNextgendashTrackReusePromotionState = L),
      (i.subscribeVideoPlayerNextgendashTrackReuseReadiness = E),
      (i.updateVideoPlayerNextgendashTrackReuseReadiness = k),
      (i.updateVideoPlayerNextgendashTrackReusePromotionState = I));
  },
  66,
);
