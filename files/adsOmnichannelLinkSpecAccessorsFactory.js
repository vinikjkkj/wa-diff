__d(
  "adsOmnichannelLinkSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupOmnichannelLinkSpecAppAccessorsFactory",
    "adsAdgroupOmnichannelLinkSpecWebAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          app: r("adsAdgroupOmnichannelLinkSpecAppAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.app;
            },
            [].concat(t, ["app"]),
          ),
          web: r("adsAdgroupOmnichannelLinkSpecWebAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.web;
            },
            [].concat(t, ["web"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
