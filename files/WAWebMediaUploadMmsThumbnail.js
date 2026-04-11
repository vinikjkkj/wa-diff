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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forwardedFromWeb,
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
              ? yield _()
              : yield o("WAPromiseTimeout").promiseTimeout(_(), c);
          } catch (e) {
            var p = e;
            if (p instanceof o("WACustomError").TimeoutError)
              return (
                o("WAWebMediaMmsV4Upload").cancelUploadMedia(m),
                {
                  kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                    .TIMEOUT,
                }
              );
            throw p;
          }
          function _() {
            return f.apply(this, arguments);
          }
          function f() {
            return (
              (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield r("WAPromiseRaceAbort")(
                    o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
                      u,
                    ),
                    s,
                  );
                  ((m.filehash = e), (m.mediaBlob = u));
                  var n = o(
                      "WAWebMediaCryptoEligibilityUtils",
                    ).isMediaCryptoExpectedForMediaType(l)
                      ? o("WAWebMediaMmsV4Upload").uploadMedia
                      : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia,
                    c = yield r("WAPromiseRaceAbort")(
                      n({
                        mimetype: "image/jpeg",
                        mediaObject: m,
                        mediaType: l,
                        forwardedFromWeb: t,
                        uploadOrigin: d,
                        mediaKeyInfo: i,
                        isViewOnce: a,
                      }),
                      s,
                    );
                  return c.kind ===
                    o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
                    ? babelHelpers.extends({}, c, { filehash: e })
                    : { kind: c.kind };
                } catch (e) {
                  var p = e;
                  if (
                    typeof p == "object" &&
                    (e == null ? void 0 : e.name) ===
                      o("WAAbortError").ABORT_ERROR
                  )
                    return (
                      o("WAWebMediaMmsV4Upload").cancelUploadMedia(m),
                      {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                          .CANCELLATION,
                      }
                    );
                }
              })),
              f.apply(this, arguments)
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
