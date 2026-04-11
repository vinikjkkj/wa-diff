__d(
  "WAWebMmsClientMmsDownload",
  [
    "Promise",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WATimeUtils",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMiscErrors",
    "WAWebMmsCdnUrlValidationUtils",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatDownloadUrl",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ciphertextValidator,
            r = t.debug,
            a = t.debugString,
            i = t.onData,
            l = t.onHeadersReceived,
            c = t.onProgress,
            d = t.signal,
            m = t.url;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsDownload: [",
                "] start",
              ])),
            a,
          );
          try {
            var p = yield o("WAWebHttpExtendedFetch").extendedFetch(m, {
              signal: d,
              onProgress: c,
              onData: i,
              onHeadersReceived: l,
            });
            yield y({ response: p, functionName: "mmsDownload", url: m });
            var _ = yield p.arrayBuffer();
            if (n && !(yield n(_)))
              throw (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "download hash mismatch error. downloaded size: ",
                      "",
                    ])),
                  _.byteLength,
                ),
                new (o("WAWebHttpErrors").MmsDownloadFilehashMismatchError)({
                  url: m,
                })
              );
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsDownload: [",
                    "] success",
                  ])),
                a,
              ),
              _
            );
          } catch (e) {
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError("mmsDownload", e, r),
              e instanceof TypeError
                ? new (o("WAWebHttpErrors").HttpNetworkError)(e.message)
                : e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = e.byteRange,
        a = e.debugString,
        i = e.directPath,
        l = e.downloadBucket,
        s = e.encFilehash,
        u = e.hostname,
        m = e.mode,
        p = e.onData,
        _ = e.onHeadersReceived,
        f = e.onProgress,
        g = e.signal,
        h = e.staticUrl,
        y = e.type,
        C;
      if (h) C = h;
      else if (i != null && i !== "")
        C = r("WAWebMmsClientFormatDownloadUrl")({
          directPath: i,
          encFilehash: s,
          hostname: u,
          type: y,
          mode: m,
          byteRange: t,
          downloadBucket: l,
        });
      else if (s != null && s !== "")
        C = r("WAWebMmsClientFormatDownloadUrl")({
          encFilehash: s,
          hostname: u,
          type: y,
          mode: m,
          byteRange: t,
          downloadBucket: l,
        });
      else
        return (c || (c = n("Promise"))).reject(
          r("err")(
            "No staticUrl, directPath, or encFilehash available for download",
          ),
        );
      if (s == null && !t && y !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
        return (c || (c = n("Promise"))).reject(
          r("err")(
            "expected encFilehash for ciphertext validation, media type: " + y,
          ),
        );
      var b =
        t || s == null
          ? null
          : (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return (
                    (yield o("WAMediaCalculateFilehash").calculateFilehash(
                      e,
                    )) === s
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
      return d({
        url: C,
        signal: g,
        onHeadersReceived: _,
        onProgress: f,
        onData: p,
        ciphertextValidator: b,
        debugString: a,
        debug: { encFilehash: s, type: y, url: C },
      });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            r = e.hostname,
            o = e.signal,
            a = e.type;
          yield b({
            directPath: t,
            encFilehash: n,
            hostname: r,
            type: a,
            signal: o,
            functionName: "mmsCheckExistence",
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            r = e.hostname,
            a = e.signal,
            i = e.type,
            l = yield b({
              directPath: t,
              encFilehash: n,
              hostname: r,
              type: i,
              signal: a,
              functionName: "mmsGetEncryptedMediaSize",
            }),
            s = l.headers.get("content-length");
          if (!s)
            throw new (o("WAWebMiscErrors").UnableToGetContentLengthError)();
          return parseInt(s, 10);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.functionName,
            n = e.response,
            r = e.url;
          if (!n.ok)
            e: {
              if (n.status === 401)
                throw new (o("WAWebMmsClientErrors").MMSUnauthorizedError)(t, {
                  url: r,
                });
              if (n.status === 403) {
                var a = yield n.text();
                if (a.includes("URL signature expired"))
                  throw new (o("WAWebMmsClientErrors").MediaNotFoundError)(t, {
                    url: r,
                    status: n.status,
                  });
                var i = o("WAWebMmsCdnUrlValidationUtils").parseCdnUrlParams(r),
                  l = i.expirationDate;
                throw l != null &&
                  o("WATimeUtils").toDate(o("WATimeUtils").unixTime()) >= l
                  ? new (o("WAWebMmsClientErrors").MediaNotFoundError)(t, {
                      url: r,
                      status: n.status,
                    })
                  : new (o("WAWebMmsClientErrors").MMSForbiddenError)(t, {
                      url: r,
                    });
              }
              throw n.status === 404 || n.status === 410
                ? new (o("WAWebMmsClientErrors").MediaNotFoundError)(t, {
                    url: r,
                    status: n.status,
                  })
                : n.status === 507
                  ? new (o("WAWebMmsClientErrors").MMSThrottleError)(t, {
                      url: r,
                    })
                  : new (o("WAWebHttpErrors").HttpStatusCodeError)(
                      n.status,
                      t,
                      { url: r },
                    );
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            a = e.functionName,
            i = e.hostname,
            l = e.signal,
            s = e.type,
            u;
          if (t != null && t !== "")
            u = r("WAWebMmsClientFormatDownloadUrl")({
              directPath: t,
              encFilehash: n,
              hostname: i,
              type: s,
              mode: "auto",
            });
          else if (n != null && n !== "")
            u = r("WAWebMmsClientFormatDownloadUrl")({
              encFilehash: n,
              hostname: i,
              type: s,
              mode: "auto",
            });
          else
            throw r("err")(
              "No directPath or encFilehash available for HEAD request",
            );
          var c = yield o("WAWebHttpExtendedFetch").extendedFetch(u, {
            method: "HEAD",
            signal: l,
          });
          return (yield y({ response: c, functionName: a, url: u }), c);
        })),
        v.apply(this, arguments)
      );
    }
    ((l.mms4Download = p),
      (l.mmsCheckExistence = _),
      (l.mmsGetEncryptedMediaSize = g),
      (l.validateMmsResponse = y));
  },
  98,
);
