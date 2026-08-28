__d(
  "AdsWebToWhatsappDefaultedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          return (
            Array.isArray(n.adgroupIDs) &&
              n.adgroupIDs.forEach(function (t) {
                e = e.set(t, !0);
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
