__d(
  "nullIntersectionObserverEntryLogger",
  ["FBLogger", "Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e == null &&
        o("Random").coinflip(100) &&
        r("FBLogger")("comet_infra").warn(t);
    }
    l.default = e;
  },
  98,
);
