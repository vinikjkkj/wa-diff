__d(
  "useVideoPlayerDefaultLoadingIndicators",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "once",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")("VideoPlayerSpinner.react").__setRef(
          "useVideoPlayerDefaultLoadingIndicators",
        ),
      ),
      c = r("deferredLoadComponent")(
        r("requireDeferred")(
          "VideoPlayerWithLiveVideoInterruptedOverlay.react",
        ).__setRef("useVideoPlayerDefaultLoadingIndicators"),
      ),
      d = r("once")(function () {
        return s.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: s.jsx(c, {}),
        });
      });
    function m() {
      var e = o("react-compiler-runtime").c(6),
        t = r("useVideoPlayerDefaultLoadingIndicatorsLogic")(),
        n = t.loadingIndicatorType,
        a = t.spinnerVisible,
        i;
      e[0] !== a
        ? ((i = s.jsx(u, { isVisible: a })), (e[0] = a), (e[1] = i))
        : (i = e[1]);
      var l = i,
        c;
      e: switch (n) {
        case "spinner": {
          c = l;
          break e;
        }
        case "live_video_interrupted_overlay": {
          var m;
          (e[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = d()), (e[2] = m))
            : (m = e[2]),
            (c = m));
          break e;
        }
        case "none":
        default:
          c = l;
      }
      var p;
      return (
        e[3] !== c || e[4] !== n
          ? ((p = { loadingIndicatorElement: c, loadingIndicatorType: n }),
            (e[3] = c),
            (e[4] = n),
            (e[5] = p))
          : (p = e[5]),
        p
      );
    }
    l.default = m;
  },
  98,
);
