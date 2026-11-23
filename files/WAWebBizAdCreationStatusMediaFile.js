__d(
  "WAWebBizAdCreationStatusMediaFile",
  [
    "WAWebCreateFile",
    "WAWebFilenameManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebWamEnumWebcRmrReasonCode",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e.mediaData);
      return (
        t == null &&
          (await e.downloadMedia({
            downloadEvenIfExpensive: !0,
            isUserInitiated: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .STATUS_V3,
          }),
          (t = s(e.mediaData))),
        t != null
          ? o("WAWebCreateFile").createFile(
              [t],
              o("WAWebFilenameManager").getDefaultName(e),
              { type: t.type },
            )
          : null
      );
    }
    function s(e) {
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
