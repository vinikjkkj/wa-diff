__d(
  "adsAssetFeedHasCallToActionValue",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.call_to_actions;
      return a == null
        ? !1
        : (a instanceof Array && (a = r("immutable").fromJS(a)),
          a instanceof r("immutable").List ? a.hasIn([t, "value", n]) : !1);
    }
    l.default = e;
  },
  98,
);
