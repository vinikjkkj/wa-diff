__d(
  "WAHttpDownloadMedia",
  [
    "WAErrorMessage",
    "WALogger",
    "WAMediaQplHelper",
    "WAResultOrError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "URL signature expired";
    async function m(t, n) {
      var a = n != null ? n : {},
        i = a.abortSignal,
        l = a.mediaMetrics;
      l == null || l.addPoint("http_fetch_start");
      var m = await self
        .fetch(t, { method: "GET", mode: "cors", cache: "no-store", signal: i })
        .then(function (e) {
          return (
            l == null || l.addPoint("http_fetch_end"),
            o("WAResultOrError").makeResult(e)
          );
        })
        .catch(function (t) {
          var n = o("WAErrorMessage").maybeGetMessageFromError(t);
          return (
            l == null ||
              l.addPoint("http_fetch_fail", { string: { httpFetchError: n } }),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "HttpDownloadMedia: fail to initiate fetch: ",
                  ", message: ",
                  "",
                ])),
              String(t),
              n,
            ),
            r("getErrorSafe")(t).name === "AbortError"
              ? o("WAResultOrError").makeError("http-fetch-aborted")
              : o("WAResultOrError").makeError("http-fetch-exception")
          );
        });
      if (m.success === !1) return m;
      var p = m.value,
        _ = p.headers.get("content-length"),
        f = p.status;
      switch (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Fetch Media HTTP status ",
              "",
            ])),
          f,
        ),
        l == null ||
          l.addAnnotations({
            string: {
              ciphertextMediaSizeBucket:
                _ != null
                  ? o("WAMediaQplHelper").convertIntegerSizeToStringBucket(
                      Number(_),
                    )
                  : null,
            },
            int: { httpStatus: f },
          }),
        f)
      ) {
        case 200:
        case 206:
          return o("WAResultOrError").makeResult(p);
        case 401:
          return o("WAResultOrError").makeError("access-expired");
        case 403:
          return p
            .text()
            .then(function (e) {
              return e === d
                ? o("WAResultOrError").makeError("signature-expired")
                : o("WAResultOrError").makeError("access-expired");
            })
            .catch(function (e) {
              return (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "HttpDownloadMedia: fail to parse request body: ",
                      "",
                    ])),
                  String(e),
                ),
                o("WAResultOrError").makeError("access-expired")
              );
            });
        case 404:
        case 410:
          return o("WAResultOrError").makeError("media-not-found");
        case 408:
          return o("WAResultOrError").makeError("server-timeout");
        case 416:
          return (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Download Media Error: can not resume from offset",
                ])),
            ),
            o("WAResultOrError").makeError("request-error")
          );
        case 429:
        case 507:
          return o("WAResultOrError").makeError("download-throttled");
        default:
          return f >= 400 && f < 500
            ? o("WAResultOrError").makeError("request-error")
            : o("WAResultOrError").makeError("unspecified-http-error");
      }
    }
    l.httpDownloadMedia = m;
  },
  98,
);
