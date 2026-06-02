__d(
  "WAWebMmsClientMmsDownload",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
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
        var p = await o("WAWebHttpExtendedFetch").extendedFetch(m, {
          signal: d,
          onProgress: c,
          onData: i,
          onHeadersReceived: l,
        });
        await _({ response: p, functionName: "mmsDownload", url: m });
        var f = await p.arrayBuffer();
        if (n && !(await n(f)))
          throw (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "download hash mismatch error. downloaded size: ",
                  "",
                ])),
              f.byteLength,
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
          f
        );
      } catch (e) {
        throw (
          o("WAWebMmsClientMmsLogError").mmsLogError("mmsDownload", e, r),
          e instanceof TypeError
            ? new (o("WAWebHttpErrors").HttpNetworkError)(e.message)
            : e
        );
      }
    }
    function d(e) {
      var t = e.byteRange,
        n = e.debugString,
        a = e.directPath,
        i = e.downloadBucket,
        l = e.encFilehash,
        s = e.hostname,
        u = e.mode,
        d = e.onData,
        m = e.onHeadersReceived,
        p = e.onProgress,
        _ = e.signal,
        f = e.staticUrl,
        g = e.type,
        h;
      if (f) h = f;
      else if (a != null && a !== "")
        h = r("WAWebMmsClientFormatDownloadUrl")({
          directPath: a,
          encFilehash: l,
          hostname: s,
          type: g,
          mode: u,
          byteRange: t,
          downloadBucket: i,
        });
      else if (l != null && l !== "")
        h = r("WAWebMmsClientFormatDownloadUrl")({
          encFilehash: l,
          hostname: s,
          type: g,
          mode: u,
          byteRange: t,
          downloadBucket: i,
        });
      else
        return Promise.reject(
          r("err")(
            "No staticUrl, directPath, or encFilehash available for download",
          ),
        );
      if (l == null && !t && g !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
        return Promise.reject(
          r("err")(
            "expected encFilehash for ciphertext validation, media type: " + g,
          ),
        );
      var y =
        t || l == null
          ? null
          : async function (e) {
              return (
                (await o("WAMediaCalculateFilehash").calculateFilehash(e)) === l
              );
            };
      return c({
        url: h,
        signal: _,
        onHeadersReceived: m,
        onProgress: p,
        onData: d,
        ciphertextValidator: y,
        debugString: n,
        debug: { encFilehash: l, type: g, url: h },
      });
    }
    async function m(e) {
      var t = e.directPath,
        n = e.encFilehash,
        r = e.hostname,
        o = e.signal,
        a = e.type;
      await f({
        directPath: t,
        encFilehash: n,
        hostname: r,
        type: a,
        signal: o,
        functionName: "mmsCheckExistence",
      });
    }
    async function p(e) {
      var t = e.directPath,
        n = e.encFilehash,
        r = e.hostname,
        a = e.signal,
        i = e.type,
        l = await f({
          directPath: t,
          encFilehash: n,
          hostname: r,
          type: i,
          signal: a,
          functionName: "mmsGetEncryptedMediaSize",
        }),
        s = l.headers.get("content-length");
      if (!s) throw new (o("WAWebMiscErrors").UnableToGetContentLengthError)();
      return parseInt(s, 10);
    }
    async function _(e) {
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
            var a = await n.text();
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
              ? new (o("WAWebMmsClientErrors").MMSThrottleError)(t, { url: r })
              : new (o("WAWebHttpErrors").HttpStatusCodeError)(n.status, t, {
                  url: r,
                });
        }
    }
    async function f(e) {
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
      var c = await o("WAWebHttpExtendedFetch").extendedFetch(u, {
        method: "HEAD",
        signal: l,
      });
      return (await _({ response: c, functionName: a, url: u }), c);
    }
    ((l.mms4Download = d),
      (l.mmsCheckExistence = m),
      (l.mmsGetEncryptedMediaSize = p),
      (l.validateMmsResponse = _));
  },
  98,
);
