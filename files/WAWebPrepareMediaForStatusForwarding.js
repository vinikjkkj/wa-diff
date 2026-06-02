__d(
  "WAWebPrepareMediaForStatusForwarding",
  [
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebWamEnumWebcRmrReasonCode",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t, n;
      o("WAWebMsgGetters").getIsMedia(e) &&
        !((t = e.mediaData) != null && t.mediaBlob) &&
        (await e.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .SEND_TO_CHAT,
          isUserInitiated: !0,
        }));
      var a = e == null || (n = e.mediaData) == null ? void 0 : n.toJSON();
      return a == null
        ? null
        : (s(a),
          await u(a),
          a.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
            a.mediaBlob.retain(),
          a);
    }
    function s(e) {
      (delete e.directPath,
        delete e.mediaKey,
        delete e.mediaKeyTimestamp,
        delete e.encFilehash,
        delete e.mediaStage);
    }
    async function u(e) {
      if (
        !(
          e.mediaBlob instanceof r("WAWebMediaOpaqueData") || e.filehash == null
        )
      ) {
        var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
        t &&
          (e.mediaBlob = await r("WAWebMediaOpaqueData").createFromData(
            t,
            t.type || e.mimetype || "application/octet-stream",
          ));
      }
    }
    ((l.prepareMediaForStatusForwarding = e),
      (l.stripStaleUploadFields = s),
      (l.maybeRetrieveBlobFromCache = u));
  },
  98,
);
