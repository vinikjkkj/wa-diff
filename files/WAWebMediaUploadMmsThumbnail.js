__d(
  "WAWebMediaUploadMmsThumbnail",
  [
    "WAAbortError",
    "WACustomError",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaObject",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.fileOrigin,
        n = e.forwardedFromWeb,
        a = e.isViewOnce,
        i = e.mediaKeyInfo,
        l = e.mediaType,
        s = e.signal,
        u = e.thumbnail,
        c = e.timeout,
        d = e.uploadOrigin,
        m = new (o("WAWebMediaObject").MediaObject)();
      try {
        return c == null
          ? await _()
          : await o("WAPromiseTimeout").promiseTimeout(_(), c);
      } catch (e) {
        var p = e;
        if (p instanceof o("WACustomError").TimeoutError)
          return (
            o("WAWebMediaMmsV4Upload").cancelUploadMedia(m, "thumbnail"),
            { kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.TIMEOUT }
          );
        throw p;
      }
      async function _() {
        try {
          var e = await r("WAPromiseRaceAbort")(
            o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(u),
            s,
          );
          ((m.filehash = e), (m.mediaBlob = u));
          var c = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(l)
              ? o("WAWebMediaMmsV4Upload").uploadMedia
              : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia,
            p = await r("WAPromiseRaceAbort")(
              c({
                mimetype: "image/jpeg",
                mediaObject: m,
                mediaType: l,
                forwardedFromWeb: n,
                uploadOrigin: d,
                fileOrigin: t,
                mediaKeyInfo: i,
                isViewOnce: a,
              }),
              s,
            );
          return p.kind ===
            o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
            ? babelHelpers.extends({}, p, { filehash: e })
            : { kind: p.kind };
        } catch (e) {
          var _ = e;
          if (
            typeof _ == "object" &&
            r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
          )
            return (
              o("WAWebMediaMmsV4Upload").cancelUploadMedia(m, "thumbnail"),
              {
                kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                  .CANCELLATION,
              }
            );
        }
      }
    }
    l.default = e;
  },
  98,
);
