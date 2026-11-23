__d(
  "getMAIBAAssetTypeFromTofuPostType",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? "Post"
        : e === "REELS" || e === "VIDEOS" || e === "UNIFIED_REELS"
          ? "Reel"
          : "Post";
    }
    l.default = e;
  },
  98,
);
