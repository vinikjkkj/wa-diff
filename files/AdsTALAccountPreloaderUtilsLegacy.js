__d(
  "AdsTALAccountPreloaderUtilsLegacy",
  ["AdsTALAccountDataLoaderPreloader", "cr:1621989"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("cr:1621989") ? new (n("cr:1621989"))() : null;
    function s(t) {
      var n = t;
      return (
        e != null &&
          (n = n.preloadedBy(
            r("AdsTALAccountDataLoaderPreloader").preloader,
            e.defaultConfig,
          )),
        n
      );
    }
    l.preload = s;
  },
  98,
);
