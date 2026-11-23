__d(
  "AdsAutoGenerationLatencyQPL",
  ["AdsAutoQPLSubscriber"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("AdsAutoQPLSubscriber").addPoint(e + "_start", { string: t });
    }
    function s(e, t, n) {
      o("AdsAutoQPLSubscriber").addPoint(e + "_" + t, { string: n });
    }
    ((l.startGenerationLatencySpan = e), (l.endGenerationLatencySpan = s));
  },
  98,
);
