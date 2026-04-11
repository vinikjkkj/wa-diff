__d(
  "WAWebMmsClientMmsGetUploadProgress",
  [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatUploadUrl",
    "WAWebMmsClientMmsLogError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.auth,
            a = t.encFilehash,
            i = t.generateThumbnailOnServer,
            l = t.hostname,
            u = t.mediaId,
            c = t.onProgress,
            d = t.signal,
            m = t.token,
            p = t.type,
            _ = r("WAWebMmsClientFormatUploadUrl")({
              auth: n,
              encFilehash: a,
              hostname: l,
              query: { resume: 1, server_thumb_gen: i === !0 ? 1 : void 0 },
              type: p,
              mediaId: u,
              token: m,
            }),
            f = { encFilehash: a, type: p, url: _ };
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsGetUploadProgress: start",
              ])),
          );
          try {
            var g = yield o("WAWebHttpExtendedFetch").extendedFetch(_, {
              method: "post",
              signal: d,
              onProgress: c,
            });
            if (!g.ok)
              e: throw g.status === 401
                ? new (o("WAWebMmsClientErrors").MMSUnauthorizedError)(
                    "mmsGetUploadProgress",
                    { url: _ },
                  )
                : g.status === 404
                  ? new (o("WAWebMmsClientErrors").MediaNotFoundError)(
                      "mmsGetUploadProgress",
                      { url: _ },
                    )
                  : new (o("WAWebHttpErrors").HttpStatusCodeError)(
                      g.status,
                      "mmsGetUploadProgress",
                      { url: _ },
                    );
            var h = yield g.json();
            if (!h.resume)
              throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                "mmsGetUploadProgress: missing resume",
                { url: _ },
              );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsGetUploadProgress: success",
                  ])),
              ),
              {
                directPath: h.direct_path,
                resume: h.resume,
                url: h.url,
                handle: h.handle,
              }
            );
          } catch (e) {
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError("mmsUpload", e, f),
              e
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
