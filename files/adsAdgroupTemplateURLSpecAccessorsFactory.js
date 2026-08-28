__d(
  "adsAdgroupTemplateURLSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsTemplateURLSpecAndroidAccessorsFactory",
    "adsTemplateURLSpecAppleAccessorsFactory",
    "adsTemplateURLSpecConfigAccessorsFactory",
    "adsTemplateURLSpecWebAccessorsFactory",
    "adsTemplateURLSpecWindowsPhoneAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          android: r("adsTemplateURLSpecAndroidAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.android;
            },
            [].concat(t, ["android"]),
          ),
          config: r("adsTemplateURLSpecConfigAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.config;
            },
            [].concat(t, ["config"]),
          ),
          ios: r("adsTemplateURLSpecAppleAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ios;
            },
            [].concat(t, ["ios"]),
          ),
          ipad: r("adsTemplateURLSpecAppleAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.ipad;
            },
            [].concat(t, ["ipad"]),
          ),
          iphone: r("adsTemplateURLSpecAppleAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.iphone;
            },
            [].concat(t, ["iphone"]),
          ),
          web: r("adsTemplateURLSpecWebAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.web;
            },
            [].concat(t, ["web"]),
          ),
          windows_phone: r("adsTemplateURLSpecWindowsPhoneAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.windows_phone;
            },
            [].concat(t, ["windows_phone"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
