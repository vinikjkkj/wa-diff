__d(
  "AdsMessengerLeadGenDefaultSwitchBackDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.adgroupIDs.forEach(function (t) {
              e = e.add(t);
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
