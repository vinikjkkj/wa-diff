__d(
  "WAWebDownloadStatusThumbnail",
  [
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStatusGatingUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 2;
    async function u(t) {
      var n = t.isPreload,
        a = t.msg,
        i = t.signal,
        l = a.encFilehash,
        u = a.thumbnailDirectPath,
        c = a.thumbnailEncSha256,
        d = a.thumbnailSha256,
        m = o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
          ? s
          : e;
      if (
        a.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
        a.scanLengths &&
        a.scansSidecar &&
        (l ||
          !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(a))
      ) {
        await o(
          "WAWebDownloadProgressiveJpegThumbnail",
        ).downloadProgressiveJpegThumbnail({
          msg: a,
          signal: i,
          isPreload: n,
          scanCount: m,
        });
        return;
      } else if (
        a.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
        a.isGif !== !0 &&
        (o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
          !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(a))
      ) {
        await o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
          msg: a,
        });
        return;
      }
      if (
        !r("isStringNullOrEmpty")(d) &&
        !r("isStringNullOrEmpty")(u) &&
        (!r("isStringNullOrEmpty")(c) ||
          (o("WAWebMsgGetters").getIsNewsletterMsg(a) &&
            !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
              a,
            )))
      ) {
        await r("WAWebMediaDownloadMmsThumbnail")({
          msg: a,
          signal: i,
          isPreload: n,
          chat: null,
        });
        return;
      }
    }
    l.downloadStatusThumbnail = u;
  },
  98,
);
