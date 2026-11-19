__d(
  "WAWebBizAdCreationStatusMediaFile",
  [
    "WAWebCreateFile",
    "WAWebFilenameManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
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
          var t = u(e.mediaData);
          return (
            t == null &&
              (yield e.downloadMedia({
                downloadEvenIfExpensive: !0,
                isUserInitiated: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.STATUS_V3,
              }),
              (t = u(e.mediaData))),
            t != null
              ? o("WAWebCreateFile").createFile(
                  [t],
                  o("WAWebFilenameManager").getDefaultName(e),
                  { type: t.type },
                )
              : null
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      if (e == null) return null;
      var t = e.filehash,
        n = e.mediaBlob;
      return n instanceof r("WAWebMediaOpaqueData")
        ? n.forceToBlob()
        : n instanceof Blob
          ? n
          : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
    }
    l.getStatusMediaFile = e;
  },
  98,
);
