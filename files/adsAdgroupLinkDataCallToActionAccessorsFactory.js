__d(
  "adsAdgroupLinkDataCallToActionAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupLinkDataCallToActionValueAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o(
          "AdsAdObjectsAccessorUtils",
        ).baseFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE(e, t),
        {
          type: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory_MANUAL_TYPES_DO_NOT_USE(e, t, "type"),
          value: r("adsAdgroupLinkDataCallToActionValueAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.value;
            },
            [].concat(t, ["value"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
