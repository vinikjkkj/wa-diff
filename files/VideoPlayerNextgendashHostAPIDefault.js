__d(
  "VideoPlayerNextgendashHostAPIDefault",
  [
    "VideoPlayerNextgendashHostAPIDefaultFactory",
    "performance",
    "performanceAbsoluteNow",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o(
        "VideoPlayerNextgendashHostAPIDefaultFactory",
      ).createVideoPlayerNextgendashHostAPIDefault({
        clockPerfOriginMs:
          (e = (s || (s = r("performance"))).timeOrigin) != null
            ? e
            : (u || (u = r("performanceAbsoluteNow")))() -
              (c || (c = r("performanceNow")))(),
        fetchImpl:
          typeof window.fetch == "function"
            ? function (e, t) {
                return window.fetch(
                  e,
                  t ? babelHelpers.extends({}, t) : void 0,
                );
              }
            : null,
        networkIsOnline: function () {
          return navigator.onLine;
        },
        timers: {
          clearInterval: function (t) {
            return window.clearInterval(t != null ? t : void 0);
          },
          clearTimeout: function (t) {
            return window.clearTimeout(t != null ? t : void 0);
          },
          setInterval: window.setInterval.bind(window),
          setTimeout: window.setTimeout.bind(window),
        },
      });
    d.networkIsOnline();
    var m = d;
    l.default = m;
  },
  98,
);
