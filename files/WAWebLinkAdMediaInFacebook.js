__d(
  "WAWebLinkAdMediaInFacebook",
  ["WASmaxBizCtwaNativeAdUploadAdMediaRPC"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WASmaxBizCtwaNativeAdUploadAdMediaRPC")
        .sendUploadAdMediaRPC({ mediaArgs: { mediaId: e, mediaType: "image" } })
        .then(function (e) {
          return e.name === "UploadAdMediaResponseSuccess"
            ? "success"
            : (e.name, "error");
        });
    }
    l.linkAdMediaInFacebook = e;
  },
  98,
);
