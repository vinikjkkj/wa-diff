__d(
  "adsCreativeGenerativeAssetColorOverlaySpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          action_metadata: n.basicFieldAccessorFactory(e, t, "action_metadata"),
          banner_color: n.basicFieldAccessorFactory(e, t, "banner_color"),
          primary_colors: n.basicFieldAccessorFactory(e, t, "primary_colors"),
          secondary_colors: n.basicFieldAccessorFactory(
            e,
            t,
            "secondary_colors",
          ),
          source: n.basicFieldAccessorFactory(e, t, "source"),
        },
      );
    }
    l.default = e;
  },
  98,
);
