__d(
  "AdsDeliveryFragmentationOpenModalReducerPlugin",
  ["firstx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.campaignIDsToPause,
            o = t.campaignIDToPublish,
            a = n.campaignIDs;
          if (a.length === 0 && o === "") return t;
          var i = o != "" ? o : r("firstx")(a),
            l =
              e.length > 0
                ? e
                : a.filter(function (e) {
                    return e !== i;
                  });
          return babelHelpers.extends({}, t, {
            campaignIDs: a,
            campaignIDToPublish: i,
            campaignIDsToPause: l,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
