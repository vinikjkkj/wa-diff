__d(
  "useVideoPlayerUnifiedCVCProvider",
  [
    "CvcV3HttpEventFalcoEvent",
    "UnifiedVideoCVCSubscription",
    "VideoPlayerHooks",
    "createVideoStateHook",
    "getPlayerFormatForLogData",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e || (e = o("react"))).useEffect,
      c = o("createVideoStateHook").createVideoStateHook(null),
      d = c.setterHook,
      m = o("createVideoStateHook").createVideoStateHook(null),
      p = m.setterHook,
      _ = m.valueHook;
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.disableSubscription,
        a = e.playerFormat,
        i = e.subOrigin,
        l = e.videoFBID,
        c = (s || (s = o("VideoPlayerHooks"))).useIsLive(),
        m = s.useIsFullscreen(),
        _ = s.useIsDesktopPictureInPicture(),
        f = s.useController(),
        g = d(),
        h = p(),
        y,
        C;
      (t[0] !== n ||
      t[1] !== _ ||
      t[2] !== m ||
      t[3] !== c ||
      t[4] !== a ||
      t[5] !== h ||
      t[6] !== g ||
      t[7] !== i ||
      t[8] !== f ||
      t[9] !== l
        ? ((y = function () {
            if (n === !0) {
              r("CvcV3HttpEventFalcoEvent").log(function () {
                return { countable_id: l, name: "disable_subscription" };
              });
              return;
            }
            var e = new (r("UnifiedVideoCVCSubscription"))(
              l,
              r("getPlayerFormatForLogData")(
                { isDesktopPictureInPicture: _, isFullscreen: m },
                a,
              ),
              i,
              f,
              c,
              function (e) {
                h(e);
              },
            );
            return (
              g(e),
              function () {
                e.destroy();
              }
            );
          }),
          (C = [_, m, c, n, a, h, g, i, f, l]),
          (t[0] = n),
          (t[1] = _),
          (t[2] = m),
          (t[3] = c),
          (t[4] = a),
          (t[5] = h),
          (t[6] = g),
          (t[7] = i),
          (t[8] = f),
          (t[9] = l),
          (t[10] = y),
          (t[11] = C))
        : ((y = t[10]), (C = t[11])),
        u(y, C));
    }
    var g = _;
    ((l.useVideoPlayerUnifiedCVCProvider = f),
      (l.useVideoPlayerUnifiedCVCData = g));
  },
  98,
);
