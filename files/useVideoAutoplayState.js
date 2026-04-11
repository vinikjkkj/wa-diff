__d(
  "useVideoAutoplayState",
  [
    "HiddenSubtreePassiveContext",
    "VideoPlayerHooks",
    "VideoPlayerShakaGlobalConfig",
    "VideoPlayerViewabilityHooks",
    "react",
    "useIsBackgrounded",
    "useVideoPlayerBandwidthEstimate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.startTransition,
      d = u.useContext,
      m = u.useEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState;
    function g(e) {
      "use no memo";
      var t = (s || (s = o("VideoPlayerHooks"))).useAdClientToken(),
        n = s.useAutoplayGatingResult(),
        a = s.useBroadcastStatus(),
        i = s.useEnded(),
        l = s.useIsFrozenPassive(),
        u = s.useLastPauseReason(),
        g = s.useLastPlayReason(),
        h = s.useMuted(),
        y = s.usePaused(),
        C = d(r("HiddenSubtreePassiveContext")),
        b = !t,
        v =
          (e == null ? void 0 : e.noPauseOnBlurOrFocus) === !0 ||
          o("VideoPlayerShakaGlobalConfig").getBool(
            "comet_www_no_pause_on_blur_or_focus_events",
            !1,
          ),
        S = r("useIsBackgrounded")({
          noPauseOnBlurOrFocus: v,
          scrollTerminatesHiddenOrBlurred: b,
        }),
        R = S.isDocumentHidden,
        L = S.isDocumentHiddenOrBlurred,
        E = r("useVideoPlayerBandwidthEstimate")(),
        k = o(
          "VideoPlayerViewabilityHooks",
        ).useVideoPlayerPassiveViewabilityInfo(),
        I = o(
          "VideoPlayerViewabilityHooks",
        ).useVideoPlayerExtendedPassiveViewabilityInfo(),
        T = f(C.getCurrentState().backgrounded),
        D = T[0],
        x = T[1],
        $ = f(C.getCurrentState().hidden),
        P = $[0],
        N = $[1];
      m(
        function () {
          var e = function () {
              c(function () {
                var e = C.getCurrentState();
                (N(e.hidden), x(e.backgrounded));
              });
            },
            t = C.subscribeToChanges(e);
          return (
            e(),
            function () {
              t.remove();
            }
          );
        },
        [C, x, N],
      );
      var M = f(function () {
          return l.getCurrentState();
        }),
        w = M[0],
        A = M[1];
      m(
        function () {
          var e = l.subscribeToChanges(function (e) {
              A(e);
            }),
            t = l.getCurrentState();
          return (
            A(t),
            function () {
              e.remove();
            }
          );
        },
        [l, A],
      );
      var F = p(
          function () {
            return {
              adClientToken: t,
              autoplayGatingResult: n,
              bandwidthEstimate: E,
              broadcastStatus: a,
              controllerIsFrozen: w,
              currentSubtreeIsBackgrounded: D,
              currentSubtreeIsHidden: P,
              ended: i,
              hiddenSubtreePassive: C,
              isDocumentHidden: R,
              isDocumentHiddenOrBlurred: L,
              isFrozenPassive: l,
              lastPauseReason: u,
              lastPlayReason: g,
              muted: h,
              paused: y,
              videoPlayerExtendedPassiveViewabilityInfo: I,
              videoPlayerPassiveViewabilityInfo: k,
            };
          },
          [t, n, E, a, w, D, P, i, C, R, L, l, u, g, h, y, I, k],
        ),
        O = f(F),
        B = O[0],
        W = O[1],
        q = _(B);
      return (
        m(
          function () {
            q.current = B;
          },
          [B],
        ),
        m(
          function () {
            var e = !1,
              t = Object.keys(F);
            for (var n of t)
              if (F[n] !== q.current[n]) {
                e = !0;
                break;
              }
            e && W(F);
          },
          [F, W],
        ),
        B
      );
    }
    l.default = g;
  },
  98,
);
