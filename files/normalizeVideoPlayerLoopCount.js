__d(
  "normalizeVideoPlayerLoopCount",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      (t === void 0 && (t = null), n === void 0 && (n = null));
      var o = 0;
      if (e == null) {
        var a = t != null && t && n != null ? n : 0;
        a === -1
          ? (o = -1)
          : a < 0 || !Number.isFinite(a) || Math.floor(a) !== a
            ? (o = 0)
            : a === 0 && t === !0
              ? (o = -1)
              : (o = a);
      } else if (e === -1 || e === Number.POSITIVE_INFINITY) o = -1;
      else {
        if (e < 0 || !Number.isFinite(e) || Math.floor(e) !== e)
          throw r("FBLogger")("comet_video_player").mustfixThrow(
            "Invalid loopingCount: %s",
            e,
          );
        o = e;
      }
      return o;
    }
    l.default = e;
  },
  98,
);
