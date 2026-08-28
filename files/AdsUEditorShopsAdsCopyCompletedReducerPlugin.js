__d(
  "AdsUEditorShopsAdsCopyCompletedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.concat(
            n.responses
              .filter(function (e) {
                var t = e.extraData;
                return (t == null ? void 0 : t.shopAdsUpsell) === !0;
              })
              .flatMap(function (e) {
                var t = e.ids;
                return t;
              }),
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
