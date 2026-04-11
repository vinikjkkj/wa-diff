__d(
  "useVideoPlayerDefaultControlsVisibility",
  [
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "VideoPlayerUserInteractionCounter",
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useEffect,
      d = u.useState,
      m = 5e3;
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n;
      t[0] !== e
        ? ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      var a = n,
        i = a.forceVisible,
        l = a.forceVisibleOnMount,
        u = o(
          "VideoPlayerUserInteractionCounter",
        ).useVideoPlayerUserInteractionCounter(),
        p = u.ongoingInteractionsCount,
        _ = u.onUserInteraction,
        f = (s || (s = o("VideoPlayerHooks"))).useEnded(),
        g = s.useIsHovering(),
        h = s.usePaused(),
        y = s.useIsMouseIdle(),
        C = s.useVideoPlaybackEnded(),
        b = o("VideoPlayerInstreamAdsStateHooks").useInstreamAdsIsStart();
      o("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_pointer_active",
        g && !y,
        _,
      );
      var v = d(l === !0),
        S = v[0],
        R = v[1],
        L,
        E;
      (t[2] !== S || t[3] !== h
        ? ((L = function () {
            if (!h && S) {
              var e = r("setTimeout")(function () {
                R(!1);
              }, m);
              return function () {
                r("clearTimeout")(e);
              };
            }
          }),
          (E = [S, h]),
          (t[2] = S),
          (t[3] = h),
          (t[4] = L),
          (t[5] = E))
        : ((L = t[4]), (E = t[5])),
        c(L, E));
      var k;
      i === !0 || i === !1
        ? (k = i)
        : b
          ? (k = !1)
          : p > 0 || S
            ? (k = !0)
            : h
              ? (k = f ? C : !0)
              : (k = !1);
      var I;
      return (
        t[6] !== k || t[7] !== _
          ? ((I = { isControlsVisible: k, onUserInteraction: _ }),
            (t[6] = k),
            (t[7] = _),
            (t[8] = I))
          : (I = t[8]),
        I
      );
    }
    l.default = p;
  },
  98,
);
