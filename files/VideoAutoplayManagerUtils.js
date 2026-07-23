__d(
  "VideoAutoplayManagerUtils",
  ["DOMRectIsEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a,
        i = e ? e.symbol : null;
      return (
        e != null &&
        i !== t &&
        e.previousAutoplayDecision === e.currentAutoplayDecision &&
        r("DOMRectIsEqual")(
          (o = e.previousVideoPlayerViewabilityInfo) == null
            ? void 0
            : o.positionToViewport,
          e.videoPlayerViewabilityInfo.positionToViewport,
        ) &&
        !(
          t == null &&
          n === 1 &&
          ((a = e.previousVideoPlayerViewabilityInfo) == null
            ? void 0
            : a.visiblePercentage) !==
            e.videoPlayerViewabilityInfo.visiblePercentage
        )
      );
    }
    function s(e, t) {
      var n = e.videoPlayerViewabilityInfo.positionToViewport;
      if (n) {
        var r = n.height,
          o = n.y,
          a = o + r / 2;
        return Math.abs(a - t);
      }
      return Number.POSITIVE_INFINITY;
    }
    function u(e, t) {
      return function (n, r) {
        var o,
          a,
          i,
          l,
          u = Math.floor(s(n, e)),
          c = Math.floor(s(r, e)),
          d = n.videoPlayerViewabilityInfo.positionToViewport,
          m = r.videoPlayerViewabilityInfo.positionToViewport,
          p = 1.05,
          _ = Math.abs(u - c),
          f = !1;
        if (d && m) {
          var g = Math.max(d.height, m.height);
          f = _ <= (g / 2) * p;
        }
        if (!f) {
          if (u < c) return -1;
          if (u > c) return 1;
        }
        var h = n.videoPlayerViewabilityInfo.visiblePercentage,
          y = r.videoPlayerViewabilityInfo.visiblePercentage,
          C = 0.01;
        if (Math.abs(h - y) > C) {
          if (h > y) return -1;
          if (h < y) return 1;
        }
        var b =
            (o =
              (a = n.videoPlayerViewabilityInfo.positionToViewport) == null
                ? void 0
                : a.x) != null
              ? o
              : 0,
          v =
            (i =
              (l = r.videoPlayerViewabilityInfo.positionToViewport) == null
                ? void 0
                : l.x) != null
              ? i
              : 0;
        return t ? v - b : b - v;
      };
    }
    function c(e, t, n) {
      for (var r = t.keys(), o = r.next(), a = []; o.value != null; ) {
        var i = t.get(o.value);
        if (i) {
          var l = i.autoplayLocalScope,
            s = i.shouldAutoplayManageVideo,
            u = i.symbol;
          if (s && l.autoplayScopeID === e) {
            var c = n.get(u);
            if (c) {
              var d = c.currentAutoplayDecision,
                m = c.videoPlayerViewabilityInfo;
              (n.set(
                u,
                babelHelpers.extends({}, c, {
                  previousAutoplayDecision: d,
                  previousVideoPlayerViewabilityInfo: m,
                }),
              ),
                d === "ALLOW" && a.push(c));
            }
          }
        }
        o.done || (o = r.next());
      }
      return a;
    }
    ((l.shouldSkipBestAutoplayVideo = e),
      (l.createAutoplayVideosSorter = u),
      (l.createPlayableArrayFromRegisteredVideosAndUpdateVideoState = c));
  },
  98,
);
