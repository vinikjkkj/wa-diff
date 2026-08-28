__d(
  "adsAdgroupCreativeAdDisclaimerSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          title: n.basicFieldAccessorFactory(e, t, "title"),
          text: n.basicFieldAccessorFactory(e, t, "text"),
          url: n.basicFieldAccessorFactory(e, t, "url"),
        },
      );
    }
    l.default = e;
  },
  98,
);
