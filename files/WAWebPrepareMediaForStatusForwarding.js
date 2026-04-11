__d(
  "WAWebPrepareMediaForStatusForwarding",
  [
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          o("WAWebMsgGetters").getIsMedia(e) &&
            !((t = e.mediaData) != null && t.mediaBlob) &&
            (yield e.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .SEND_TO_CHAT,
              isUserInitiated: !0,
            }));
          var a = e == null || (n = e.mediaData) == null ? void 0 : n.toJSON();
          return a == null
            ? null
            : (u(a),
              yield c(a),
              a.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
                a.mediaBlob.retain(),
              a);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      (delete e.directPath,
        delete e.mediaKey,
        delete e.mediaKeyTimestamp,
        delete e.encFilehash,
        delete e.mediaStage);
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              e.mediaBlob instanceof r("WAWebMediaOpaqueData") ||
              e.filehash == null
            )
          ) {
            var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              e.filehash,
            );
            t &&
              (e.mediaBlob = yield r("WAWebMediaOpaqueData").createFromData(
                t,
                t.type || e.mimetype || "application/octet-stream",
              ));
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.prepareMediaForStatusForwarding = e),
      (l.stripStaleUploadFields = u),
      (l.maybeRetrieveBlobFromCache = c));
  },
  98,
);
