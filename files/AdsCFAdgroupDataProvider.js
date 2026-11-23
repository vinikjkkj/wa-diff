__d(
  "AdsCFAdgroupDataProvider",
  [
    "AdsCFAdgroupDataProviderPlugin",
    "AdsCFAdgroupToAdsCFUISlideshowFormatTriggerReducerPlugin",
    "AdsCFUISlideshowFormatProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsCFAdgroupDataProviderPlugin"),
      "AdsCFAdgroupDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsCFAdgroupToAdsCFUISlideshowFormatTriggerReducerPlugin"),
            "AdsCFAdgroupToAdsCFUISlideshowFormatTriggerReducerPlugin",
            n("AdsCFUISlideshowFormatProvider"),
          ),
        ];
      },
      ["AdsCFAdgroupRegistry"],
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
  },
  null,
);
