__d(
  "OverlayConfigDefaultsLayer",
  ["OverlayConfigDefaults", "OverlayConfigLayerSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getLayerSource = function () {
          return r("OverlayConfigLayerSource").DEFAULT;
        }),
        (t.getValue = function (t) {
          return r("OverlayConfigDefaults")[t];
        }),
        (t.logExposure = function (t) {}),
        e
      );
    })();
    l.default = e;
  },
  98,
);
