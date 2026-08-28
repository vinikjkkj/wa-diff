__d(
  "GeoPrivateMediaUtils",
  [
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "GeoMediaItem.react",
    "GeoMediaItemGroup.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e)
            .type === r("GeoMediaItem.react");
    }
    function s(e) {
      return e == null
        ? !1
        : r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e)
            .type === r("GeoMediaItemGroup.react");
    }
    var u = 3;
    ((l.isMediaItem = e),
      (l.isMediaItemGroup = s),
      (l.MAX_STACKED_MEDIA_ITEMS = u));
  },
  98,
);
