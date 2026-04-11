__d(
  "WAWebGdprDownloadMedia",
  [
    "WABase64",
    "WANullthrows",
    "WATimeUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaMmsV4Download",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("WABase64").encodeB64((t = r("WANullthrows"))(e.fileSha256)),
        a = o("WAWebMediaStorage").getOrCreateMediaObject(n),
        i = {
          debugHint: "setMediaObjectValues",
          deprecatedMms3Url: "",
          directPath: t(e.directPath),
          encFilehash: o("WABase64").encodeB64(t(e.fileEncSha256)),
          mediaKey: o("WABase64").encodeB64(t(e.mediaKey)),
          mediaKeyTimestamp: o("WATimeUtils").unixTime(),
          type: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
        };
      return (
        a.entries.addEntry(i),
        a.consolidate(
          babelHelpers.extends({}, i, {
            filehash: n,
            type: o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT,
          }),
        ),
        o("WAWebMediaMmsV4Download")
          .downloadMedia({
            downloadEvenIfExpensive: !0,
            downloadOrigin: o("WAWebWamEnumDownloadOriginType")
              .DOWNLOAD_ORIGIN_TYPE.GDPR,
            mediaObject: a,
            mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
            mimetype: "application/zip",
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .DOCUMENT_DOWNLOAD,
          })
          .then(function () {
            var e = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              n,
            );
            if (e) return e;
            var t = a.mediaBlob;
            if (t) return t.formData();
            throw r("err")("GDPR report blob not found after download");
          })
      );
    }
    l.gdprDownloadMedia = e;
  },
  98,
);
