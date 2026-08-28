__d(
  "adsInteractivePollGetVideoPollSpec",
  ["AdsAssetFeedFieldUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a =
          e == null ||
          (t = e.creative) == null ||
          (t = t.interactive_components_spec) == null
            ? void 0
            : t.components;
      if (a != null) {
        var i;
        return Array.isArray(a)
          ? r("immutable").fromJS((i = a[0]) == null ? void 0 : i.poll_spec)
          : a.getIn([0, "poll_spec"]);
      }
      var l =
        e == null || (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.videos;
      return l != null
        ? l.reduce(function (e, t) {
            var n = o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(
              r("immutable").fromJS(t),
            );
            return n != null ? n : e;
          }, null)
        : null;
    }
    l.default = e;
  },
  98,
);
