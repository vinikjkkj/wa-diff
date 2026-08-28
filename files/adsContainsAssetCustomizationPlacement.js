__d(
  "adsContainsAssetCustomizationPlacement",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.platform === t.platform && e.position === t.position;
    }
    function l(t, n) {
      return t.some(function (t) {
        return e(t, n);
      });
    }
    i.default = l;
  },
  66,
);
