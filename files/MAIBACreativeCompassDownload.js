__d(
  "MAIBACreativeCompassDownload",
  ["AdsAutoMediaDownload", "XAdsAutomation2MediaControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t of e) {
        var n,
          a = t.creativeID,
          i = t.mediaType,
          l = t.title,
          s = (n = l == null ? void 0 : l.trim()) != null ? n : "",
          u = s !== "" ? s + "_" + a : a;
        o("AdsAutoMediaDownload").downloadUrl(
          r("XAdsAutomation2MediaControllerRouteBuilder").buildURL({
            action: "download",
            creative_id: a,
          }),
          o("AdsAutoMediaDownload").creativeDownloadFilename(
            u,
            i === "VIDEO" ? "video" : "image",
          ),
        );
      }
    }
    l.downloadCreativeCompassMedia = e;
  },
  98,
);
