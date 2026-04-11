__d(
  "VideoPlayerWithLiveVideoInterruptedOverlay.react",
  [
    "fbt",
    "FDSLoadingAnimation.react",
    "FDSTextPairing.react",
    "VideoPlayerHooks",
    "VideoPlayerInteractionOverlay.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react"));
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = (u || (u = o("VideoPlayerHooks"))).useStreamInterrupted(),
        n = u.useIsLiveRewindActive();
      if (!t || n) return null;
      var a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x6s0dn4 x18l40ae x1ey2m1c x9f619 x78zum5 xdt5ytf xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy",
          }),
          (e[0] = a))
        : (a = e[0]);
      var i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "The broadcast is waiting for a signal. It should resume shortly.",
          )),
          (e[1] = i))
        : (i = e[1]);
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = c.jsx(
              o("VideoPlayerInteractionOverlay.react")
                .VideoPlayerInteractionOverlay,
              {
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, a, {
                    children: [
                      c.jsx("div", {
                        children: c.jsx(r("FDSTextPairing.react"), {
                          body: i,
                          bodyColor: "white",
                          headline: s._(
                            /*BTDS*/ "Waiting for Live Video Signal",
                          ),
                          headlineColor: "white",
                          level: 2,
                          textAlign: "center",
                        }),
                      }),
                      c.jsx("div", {
                        className: "xc9qbxq x1sy10c2 x1n2onr6 x14qfxbe",
                        children: c.jsx(r("FDSLoadingAnimation.react"), {
                          size: 36,
                        }),
                      }),
                    ],
                  }),
                ),
              },
            )),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    l.default = d;
  },
  226,
);
