__d(
  "WAWebBizAdCreationDownloadDraftMedia",
  ["FBLogger", "WAWebBizAdCreationFetchMediaFile", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = [].concat(e).sort(function (e, t) {
          var n, r;
          return (
            ((n = e.index) != null ? n : 0) - ((r = t.index) != null ? r : 0)
          );
        }),
        n = await Promise.all(t.map(s)),
        r = [];
      for (var o of n) o != null && r.push(o);
      return { files: r, missingCount: t.length - r.length };
    }
    function s(e) {
      var t,
        n,
        a,
        i = (t = e.media) == null ? void 0 : t.url;
      if (i == null) return Promise.resolve(null);
      var l =
        ((n = e.media) == null ? void 0 : n.type) === "video" ? "mp4" : "jpg";
      return o("WAWebBizAdCreationFetchMediaFile")
        .fetchMediaFile(
          i,
          "draft-media-" + ((a = e.index) != null ? a : 0) + "." + l,
          "Draft media restore",
        )
        .catch(function (e) {
          return (
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .info("Draft media restore: card download failed"),
            null
          );
        });
    }
    l.downloadDraftMedia = e;
  },
  98,
);
