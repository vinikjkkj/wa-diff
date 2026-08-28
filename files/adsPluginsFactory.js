__d(
  "adsPluginsFactory",
  ["AdsPluginSet", "immutable", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("memoize")(function () {
        return r("immutable").List(e());
      });
      return new (r("AdsPluginSet"))(t);
    }
    l.default = e;
  },
  98,
);
