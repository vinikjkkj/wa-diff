__d(
  "AdsMarketingExpertWidgetCallStatusReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, r;
          return babelHelpers.extends({}, t, {
            callStatus:
              (e = n.callStatus) != null
                ? e
                : (r = n.data) == null
                  ? void 0
                  : r.callStatus,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
