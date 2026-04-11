__d(
  "WAWebMmsClientMmsCheckIfUploadExists",
  [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsClientMmsGetUploadProgress",
    "WAWebMmsClientMmsLogError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "complete";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = { encFilehash: t.encFilehash, type: t.type };
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsCheckIfUploadExists: start",
              ])),
          );
          try {
            var a = yield r("WAWebMmsClientMmsGetUploadProgress")(t),
              i = a.directPath,
              l = a.handle,
              d = a.resume,
              m = a.url;
            if (d === c) {
              if (i == null || i === "")
                throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                  "mmsCheckIfUploadExists: missing directPath",
                );
              if (m == null || m === "")
                throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                  "mmsCheckIfUploadExists: missing url",
                );
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsCheckIfUploadExists: success",
                    ])),
                ),
                { directPath: i, url: m, handle: l, complete: !0 }
              );
            }
            var p = parseInt(d, 10);
            if (p === 0)
              throw new (o("WAWebMmsClientErrors").MediaNotFoundError)(
                "mmsCheckIfUploadExists",
              );
            if (Number.isNaN(p))
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsCheckIfUploadExists: resume is NaN, resume=",
                        "",
                      ])),
                    p,
                  )
                  .sendLogs("upload-offset-is-NaN"),
                new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                  "mmsCheckIfUploadExists: invalid resume",
                )
              );
            return { complete: !1, resume: p };
          } catch (e) {
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError(
                "mmsCheckIfUploadExists",
                e,
                n,
              ),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
