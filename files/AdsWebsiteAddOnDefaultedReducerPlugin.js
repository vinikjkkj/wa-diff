__d(
  "AdsWebsiteAddOnDefaultedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          return (
            Array.isArray(n.adgroupIDs) &&
              n.adgroupIDs.forEach(function (t) {
                e = e.set(t, n.websiteExtensionType);
              }),
            e
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
