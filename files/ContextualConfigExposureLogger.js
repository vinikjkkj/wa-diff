__d(
  "ContextualConfigExposureLogger",
  ["ContextualConfigExposureLoggerFactory", "MarauderLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {},
      s = function (t) {
        o("MarauderLogger").log("contextual_config_exposure", "", t);
      },
      u = r("ContextualConfigExposureLoggerFactory")(e, s);
    l.default = u;
  },
  98,
);
