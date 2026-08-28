__d(
  "AdsPlacementEditorBackgroundColorUtils",
  ["AdsInstagramMediaSpecs", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return r("immutable").Map(
        ((t = {}),
        (t.bottom_color = e.bottomColor.replace("#", "")),
        (t.top_color = e.topColor.replace("#", "")),
        t),
      );
    }
    function s(e) {
      var t = e == null ? void 0 : e.get("bottom_color"),
        n = e == null ? void 0 : e.get("top_color");
      return t != null && t !== "" && n != null && n !== ""
        ? { bottomColor: "#" + t, topColor: "#" + n }
        : null;
    }
    function u(e) {
      var t = null;
      return (
        e.format === "video" && e.video != null
          ? (t = e.video.height !== 0 ? e.video.width / e.video.height : null)
          : e.format === "image" &&
            (t = e.height !== 0 ? e.width / e.height : null),
        t != null &&
          t >
            r("AdsInstagramMediaSpecs").MAX_STORY_ASPECT_RATIO *
              (1 + r("AdsInstagramMediaSpecs").ASPECT_RATIO_TOLERANCE)
      );
    }
    ((l.toAPIBackgroundColor = e),
      (l.toHexBackgroundColor = s),
      (l.isBackgroundColorAvailableForAsset = u));
  },
  98,
);
