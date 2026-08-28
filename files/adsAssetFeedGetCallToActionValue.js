__d(
  "adsAssetFeedGetCallToActionValue",
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
        ? null
        : (a instanceof Array && (a = r("immutable").fromJS(a)),
          a instanceof r("immutable").List ? a.getIn([t, "value", n]) : null);
    }
    l.default = e;
  },
  98,
);
