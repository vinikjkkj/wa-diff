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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fileOrigin,
            a = e.forwardedFromWeb,
            i = e.isViewOnce,
            l = e.mediaKeyInfo,
            s = e.mediaType,
            u = e.signal,
            c = e.thumbnail,
            d = e.timeout,
            m = e.uploadOrigin,
            p = new (o("WAWebMediaObject").MediaObject)();
          try {
            return d == null
              ? yield f()
              : yield o("WAPromiseTimeout").promiseTimeout(f(), d);
          } catch (e) {
            var _ = e;
            if (_ instanceof o("WACustomError").TimeoutError)
              return (
                o("WAWebMediaMmsV4Upload").cancelUploadMedia(p),
                {
                  kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                    .TIMEOUT,
                }
              );
            throw _;
          }
          function f() {
            return g.apply(this, arguments);
          }
          function g() {
            return (
              (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield r("WAPromiseRaceAbort")(
                    o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
                      c,
                    ),
                    u,
                  );
                  ((p.filehash = e), (p.mediaBlob = c));
                  var n = o(
                      "WAWebMediaCryptoEligibilityUtils",
                    ).isMediaCryptoExpectedForMediaType(s)
                      ? o("WAWebMediaMmsV4Upload").uploadMedia
                      : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia,
                    d = yield r("WAPromiseRaceAbort")(
                      n({
                        mimetype: "image/jpeg",
                        mediaObject: p,
                        mediaType: s,
                        forwardedFromWeb: a,
                        uploadOrigin: m,
                        fileOrigin: t,
                        mediaKeyInfo: l,
                        isViewOnce: i,
                      }),
                      u,
                    );
                  return d.kind ===
                    o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
                    ? babelHelpers.extends({}, d, { filehash: e })
                    : { kind: d.kind };
                } catch (e) {
                  var _ = e;
                  if (
                    typeof _ == "object" &&
                    r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                  )
                    return (
                      o("WAWebMediaMmsV4Upload").cancelUploadMedia(p),
                      {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                          .CANCELLATION,
                      }
                    );
                }
              })),
              g.apply(this, arguments)
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
