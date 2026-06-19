__d(
  "WAWebDownloadStatusThumbnail",
  [
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isPreload,
            a = t.msg,
            i = t.signal,
            l = a.encFilehash,
            s = a.thumbnailDirectPath,
            u = a.thumbnailEncSha256,
            c = a.thumbnailSha256,
            d = e;
          if (
            a.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
            a.scanLengths &&
            a.scansSidecar &&
            (l ||
              !o(
                "WAWebMediaCryptoEligibilityUtils",
              ).isMediaCryptoExpectedForMsg(a))
          ) {
            yield o(
              "WAWebDownloadProgressiveJpegThumbnail",
            ).downloadProgressiveJpegThumbnail({
              msg: a,
              signal: i,
              isPreload: n,
              scanCount: d,
            });
            return;
          } else if (
            a.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
            a.isGif !== !0 &&
            !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
              a,
            )
          ) {
            yield o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
              msg: a,
            });
            return;
          }
          if (
            !r("isStringNullOrEmpty")(c) &&
            !r("isStringNullOrEmpty")(s) &&
            (!r("isStringNullOrEmpty")(u) ||
              (o("WAWebMsgGetters").getIsNewsletterMsg(a) &&
                !o(
                  "WAWebMediaCryptoEligibilityUtils",
                ).isMediaCryptoExpectedForMsg(a)))
          ) {
            yield r("WAWebMediaDownloadMmsThumbnail")({
              msg: a,
              signal: i,
              isPreload: n,
              chat: null,
            });
            return;
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.downloadStatusThumbnail = s;
  },
  98,
);
