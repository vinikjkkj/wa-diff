__d(
  "getComposerSelectedThumbnailURL",
  ["ComposerFullscreenThumbnailConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r, a;
      if (e == null) return null;
      if (
        e ===
        o("ComposerFullscreenThumbnailConstants").USER_PROVIDED_THUMBNAIL_INDEX
      ) {
        var i;
        return (i = n == null ? void 0 : n.url) != null ? i : null;
      }
      return (r =
        t == null ||
        (a =
          t[
            e -
              o("ComposerFullscreenThumbnailConstants")
                .FIRST_SMART_THUMBNAIL_INDEX
          ]) == null ||
        (a = a.thumbnail) == null
          ? void 0
          : a.getURL()) != null
        ? r
        : null;
    }
    l.default = e;
  },
  98,
);
