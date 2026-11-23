__d(
  "AdsCFAdgroupToAdsCFUISlideshowFormatTriggerReducerPlugin",
  [
    "AdsAdgroupTypeUtils",
    "AdsCFAdgroupStateUtils",
    "AdsCFUISlideshowFormatProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (o("AdsCFAdgroupStateUtils").hasAdgroupRecords(n)) {
            var e = o(
              "AdsCFAdgroupStateUtils",
            ).getAdgroupRecordByIndex_DEPRECATED(n);
            if (!o("AdsAdgroupTypeUtils").isVideoAd(e))
              return r("AdsCFUISlideshowFormatProvider").getInitialState();
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
