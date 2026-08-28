__d(
  "adsTemplateURLSpecAndroidAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          app_name: n.basicFieldAccessorFactory(e, t, "app_name"),
          package: n.basicFieldAccessorFactory(e, t, "package"),
          url: n.basicFieldAccessorFactory(e, t, "url"),
        },
      );
    }
    l.default = e;
  },
  98,
);
