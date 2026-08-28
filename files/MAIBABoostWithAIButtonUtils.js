__d(
  "MAIBABoostWithAIButtonUtils",
  ["TofuEntityPostType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["REELS", "VIDEOS", "UNIFIED_REELS"]),
      s = new Set([
        "LINKS",
        "TEXT",
        "PHOTOS",
        "REELS",
        "VIDEOS",
        "UNIFIED_REELS",
      ]);
    function u(e) {
      return e != null && s.has(e);
    }
    function c(e) {
      return e === "IG_POST" ? "boosted_instagram_media" : "boosted_post";
    }
    function d(e, t) {
      var n = e.filter(function (e) {
        return e.isBoostable;
      });
      if (n.length <= 1) return n;
      var r = n.find(function (e) {
        return t === "INSTAGRAM"
          ? e.entityType === "IG_POST"
          : e.entityType !== "IG_POST";
      });
      return [r != null ? r : n[0]];
    }
    function m(t) {
      return e.has(t) ? "Reel" : "Post";
    }
    function p(e) {
      if (e == null) return "Post";
      var t = r("TofuEntityPostType").cast(e);
      return t == null ? "Post" : m(t);
    }
    ((l.isSupportedBoostWithAITofuPostType = u),
      (l.getMAIBABoostWithAIProductFromEntityType = c),
      (l.selectMAIBABoostWithAIAssets = d),
      (l.getMAIBAAssetTypeFromTofuPostType = m),
      (l.getMAIBAAssetTypeFromContentType = p));
  },
  98,
);
