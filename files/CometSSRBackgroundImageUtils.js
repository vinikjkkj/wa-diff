__d(
  "CometSSRBackgroundImageUtils",
  ["CometSSRPreloadImageCollection", "ExecutionEnvironment", "ReactDOM", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n, a;
      if (!(t == null || (e || (e = r("ExecutionEnvironment"))).canUseDOM)) {
        var i = (n = (a = t.spi) != null ? a : t._spi) != null ? n : t.uri;
        i &&
          (r("gkx")("9159")
            ? o("ReactDOM").preload(i, { as: "image" })
            : o("CometSSRPreloadImageCollection").addImage(i));
      }
    }
    l.processSpritedImagesForSSRPreload = s;
  },
  98,
);
