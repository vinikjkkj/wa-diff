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
      var t = e.forwardedFromWeb,
        n = e.isViewOnce,
        a = e.mediaKeyInfo,
        i = e.mediaType,
        l = e.signal,
        s = e.thumbnail,
        u = e.timeout,
        c = e.uploadOrigin,
        d = new (o("WAWebMediaObject").MediaObject)();
      try {
        return u == null
          ? await p()
          : await o("WAPromiseTimeout").promiseTimeout(p(), u);
      } catch (e) {
        var m = e;
        if (m instanceof o("WACustomError").TimeoutError)
          return (
            o("WAWebMediaMmsV4Upload").cancelUploadMedia(d),
            { kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.TIMEOUT }
          );
        throw m;
      }
      async function p() {
        try {
          var e = await r("WAPromiseRaceAbort")(
            o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(s),
            l,
          );
          ((d.filehash = e), (d.mediaBlob = s));
          var u = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(i)
              ? o("WAWebMediaMmsV4Upload").uploadMedia
              : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia,
            m = await r("WAPromiseRaceAbort")(
              u({
                mimetype: "image/jpeg",
                mediaObject: d,
                mediaType: i,
                forwardedFromWeb: t,
                uploadOrigin: c,
                mediaKeyInfo: a,
                isViewOnce: n,
              }),
              l,
            );
          return m.kind ===
            o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
            ? babelHelpers.extends({}, m, { filehash: e })
            : { kind: m.kind };
        } catch (e) {
          var p = e;
          if (
            typeof p == "object" &&
            r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
          )
            return (
              o("WAWebMediaMmsV4Upload").cancelUploadMedia(d),
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
