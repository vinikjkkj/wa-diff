__d(
  "AdsMiniPreviewUtils",
  ["first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = s(e)) == null ? void 0 : t.imageURL;
    }
    function s(e) {
      var t;
      return (t = r("first")(e.cards || [])) == null ? void 0 : t.media;
    }
    l.getAssetImageURL = e;
  },
  98,
);
