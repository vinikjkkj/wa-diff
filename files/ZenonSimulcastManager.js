__d(
  "ZenonSimulcastManager",
  ["ZenonRTCVideoResolutionHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25e5,
      s = 25e6,
      u = 15,
      c = 15e4,
      d = 3e4,
      m = 180 * 320,
      p = 14400,
      _ = !1,
      f = 0,
      g = 3,
      h = 3;
    function y(t, n, r, o, a, i, l, c, d) {
      (a === void 0 && (a = !1),
        i === void 0 && (i = 2),
        l === void 0 && (l = { height: 720, width: 1280 }),
        c === void 0 && (c = !0),
        d === void 0 && (d = 0));
      for (
        var m = b(n.perSsrcTargetBitrateBpsMap, o),
          p = 0,
          _ = [],
          f = [],
          g = 0;
        g < t.encodings.length;
        g++
      )
        if (R(g, n.qualityMask)) {
          p++;
          var h = m.get(g);
          if ((h != null ? f.push(h) : f.push(e), p >= i)) break;
        }
      for (; p < d; ) (p++, f.push(e));
      for (var y = 0; y < p; y++)
        _.push(v(y, f[y], t.encodings.length - 1, r, p, l, a));
      for (var C = 0; C < t.encodings.length; C++)
        C < p
          ? ((t.encodings[C].active = !0),
            (t.encodings[C].scaleResolutionDownBy = _[C]),
            p === 1
              ? ((t.encodings[C].maxBitrate = e),
                delete t.encodings[C].maxFramerate)
              : ((t.encodings[C].maxBitrate = f[C]),
                C === 0 && (t.encodings[C].maxFramerate = u)))
          : ((t.encodings[C].active = !1), (t.encodings[C].maxBitrate = s));
      return (a && !c && L(t), { params: t });
    }
    function C(t) {
      for (var n = 0; n < t.encodings.length; n++)
        n === 0
          ? ((t.encodings[n].active = !0),
            (t.encodings[n].scaleResolutionDownBy = 1),
            (t.encodings[n].maxBitrate = e))
          : ((t.encodings[n].active = !1), (t.encodings[n].maxBitrate = s));
      return t;
    }
    function b(e, t) {
      var n = new Map();
      if (e == null || t == null) return n;
      for (var r of t) {
        var o = r[0],
          a = r[1],
          i = e.get(o);
        i != null && n.set(a, i);
      }
      return n;
    }
    function v(e, t, n, o, a, i, l) {
      var s;
      if (
        (i === void 0 && (i = { height: 720, width: 1280 }),
        l === void 0 && (l = !1),
        l)
      )
        return 1;
      var u = r("ZenonRTCVideoResolutionHelper").getMaxEncResolutionSimulcast(
        o,
        e,
        n,
        a,
      );
      return u
        ? ((u = S(e, t, u, a)),
          (s = r("ZenonRTCVideoResolutionHelper").getScalingFactor(
            u,
            i,
            !0,
            0,
            r(
              "ZenonRTCVideoResolutionHelper",
            ).shouldUseSupportedScaleFactorList(),
          )) != null
            ? s
            : 1)
        : 1;
    }
    function S(e, t, n, r) {
      if (r >= 2 && e === 0) {
        var o = n.height != null && n.width != null && n.height * n.width > p;
        if (o && t < d) return { height: 90, width: 160 };
        var a = n.height != null && n.width != null && n.height * n.width > m;
        if (a && t < c) return { height: 180, width: 320 };
      }
      return n;
    }
    function R(e, t) {
      return ((1 << e) & t) !== 0;
    }
    function L(e) {
      for (var t = 1; t < e.encodings.length; t++)
        ((e.encodings[t].active = !1), (e.encodings[t].maxBitrate = s));
    }
    function E(e) {
      var t = new Map(),
        n = "\r\n",
        r = e.split(n).filter(function (e) {
          return e.startsWith("a=ssrc-group:SIM");
        });
      if (r.length === 0) return t;
      for (var o = r[0].split(" ").slice(1), a = 0; a < o.length; a++)
        t.set(o[a], a);
      return t;
    }
    ((l.ALLOW_SCREENSHARE_SIMULCAST = _),
      (l.MIN_NUM_ACTIVE_LAYERS = f),
      (l.MAX_NUM_ACTIVE_LAYERS = g),
      (l.NUM_LAYERS = h),
      (l.getSimulcastEncodingParameters = y),
      (l.getSimulcastSingleLayerParameters = C),
      (l.getSimulcastLayerToTargetBitrateMap = b),
      (l.getSimulcastSsrcToLayerMap = E));
  },
  98,
);
