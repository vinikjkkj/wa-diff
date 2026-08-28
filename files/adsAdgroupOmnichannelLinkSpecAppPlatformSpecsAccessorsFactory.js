__d(
  "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsAndroidAccessorsFactory",
    "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsIosAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          android: r(
            "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsAndroidAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.android;
            },
            [].concat(t, ["android"]),
          ),
          ios: r(
            "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsIosAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ios;
            },
            [].concat(t, ["ios"]),
          ),
          ipad: r(
            "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsIosAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ipad;
            },
            [].concat(t, ["ipad"]),
          ),
          iphone: r(
            "adsAdgroupOmnichannelLinkSpecAppPlatformSpecsIosAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.iphone;
            },
            [].concat(t, ["iphone"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
