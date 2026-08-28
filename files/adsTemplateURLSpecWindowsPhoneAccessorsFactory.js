__d(
  "adsTemplateURLSpecWindowsPhoneAccessorsFactory",
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
          app_id: n.basicFieldAccessorFactory(e, t, "app_id"),
          url: n.basicFieldAccessorFactory(e, t, "url"),
        },
      );
    }
    l.default = e;
  },
  98,
);
