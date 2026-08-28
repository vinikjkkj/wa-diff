__d(
  "adsOmnichannelObjectSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          app: n.basicListFieldAccessorFactory(e, t, "app"),
          onsite: n.basicListFieldAccessorFactory(e, t, "onsite"),
          pixel: n.basicListFieldAccessorFactory(e, t, "pixel"),
          offline: n.basicListFieldAccessorFactory(e, t, "offline"),
        },
      );
    }
    l.default = e;
  },
  98,
);
