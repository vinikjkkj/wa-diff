__d(
  "WADownloadCiphertext",
  [
    "WAAssertUnreachable",
    "WABase64",
    "WACreateMediaDownloadRetrier",
    "WACryptoSha256",
    "WACryptoUtils",
    "WAHashUtils",
    "WAHttpDownloadMedia",
    "WALogger",
    "WAMediaUrl",
    "WAPromiseManagement",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return e;
    }
    async function f(t) {
      var n = t.abortSignal,
        a = t.directPath,
        i = t.eventFlow,
        l = t.fileEncSha256,
        _ = t.fromBytes,
        f = t.mediaTypeDetails,
        g = t.plaintextHash,
        y = t.toBytes;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Start download ciphertext for hash: ",
            "",
          ])),
        o("WAHashUtils").sanitisePlaintextHash(g),
      ),
        i.addPoint("create_retrier_start"));
      var C = await o(
        "WACreateMediaDownloadRetrier",
      ).createMediaDownloadRetrier({
        mediaTypeDetails: f,
        directPath: a,
        eventFlow: i,
        fileEncSha256: l,
      });
      if (!C.success) return (i.addPoint("create_retrier_fail"), C);
      i.addPoint("create_retrier_end");
      var b = C.value,
        v = b.mediaRouteDetails,
        S = b.retrier,
        R = await S.run(function (e, t, r) {
          var m = e.domain,
            p = "http_download_media_" + r,
            f = o("WAMediaUrl").buildDownloadUrl(
              a,
              l,
              m,
              "manual",
              v.bucket,
              _,
              y,
            );
          return (
            o("WALogger").DEV_XMPP(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Downloading ciphertext for hash : ",
                  " from ",
                  ". Attempt: ",
                  "",
                ])),
              o("WAHashUtils").sanitisePlaintextHash(g),
              f,
              r,
            ),
            i.addPoint(p + "_start"),
            o("WAHttpDownloadMedia")
              .httpDownloadMedia(f, {
                mediaMetrics: i,
                abortSignal: n,
                cachePolicy: r > 0 ? "no-store" : "force-cache",
              })
              .then(function (e) {
                if (e.success)
                  return e.value
                    .arrayBuffer()
                    .then(function (e) {
                      return (
                        i.addPoint(p + "_end"),
                        o("WAResultOrError").makeResult(
                          o("WAResultOrError").makeResult(e),
                        )
                      );
                    })
                    .catch(function (e) {
                      return (
                        i.addPoint("response_array_buffer_error"),
                        i.addPoint(p + "_fail"),
                        o("WALogger").ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "HttpDownloadMedia: fail to parse request body ",
                              "",
                            ])),
                          e,
                        ),
                        o("WAResultOrError").makeResult(
                          o("WAResultOrError").makeError("body-network-error"),
                        )
                      );
                    });
                i.addPoint(p + "_fail");
                var t = e.error;
                switch (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Download Media Error: ",
                        "",
                      ])),
                    t,
                  ),
                  i.addPoint(t),
                  t)
                ) {
                  case "signature-expired":
                    return o("WAResultOrError").makeResult(
                      o("WAResultOrError").makeError("signature-expired"),
                    );
                  case "http-fetch-aborted":
                    return o("WAResultOrError").makeResult(
                      o("WAResultOrError").makeError("http-fetch-aborted"),
                    );
                  case "http-fetch-exception":
                  case "server-timeout":
                  case "unspecified-http-error":
                    return o("WAResultOrError").makeError({ progressMade: !0 });
                  default:
                    return o("WAResultOrError").makeResult(
                      o("WAResultOrError").makeError(t),
                    );
                }
              })
              .catch(function (e) {
                return (
                  i.addPoint(p + "_fail"),
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadCiphertext http download exception: ",
                        "",
                      ])),
                    e,
                  ),
                  o("WAResultOrError").makeError({ progressMade: !1 })
                );
              })
          );
        });
      if (R == null)
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "downloadMedia given up",
              ])),
          ),
          o("WAResultOrError").makeError("max-attempts-exceeded")
        );
      if (R.success === !1) {
        var L = R.error;
        switch (
          (o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Download Plaintext failed: ",
                "",
              ])),
            L,
          ),
          L)
        ) {
          case "signature-expired":
          case "http-fetch-aborted":
          case "media-not-found":
          case "download-throttled":
          case "body-network-error":
          case "request-error":
            return o("WAResultOrError").makeError(L);
          case "access-expired":
            return o("WAResultOrError").makeError("disconnected");
          default:
            throw r("WAAssertUnreachable")(L);
        }
      } else {
        var E = R.value;
        return !h(_, y) &&
          !o("WACryptoUtils").arrayBuffersEqual(
            await o("WACryptoSha256").sha256(E),
            l,
          )
          ? o("WAResultOrError").makeError("ciphertext-hash-mismatch")
          : (i.addPoint("download_finish", {
              int: { byteLength: E.byteLength },
              bool: { isPartialDownload: h(_, y) },
            }),
            o("WAResultOrError").makeResult(E));
      }
    }
    var g = o("WAPromiseManagement").cacheWhilePending(function (e) {
      var t = e.fileEncSha256,
        n = e.fromBytes,
        r = e.toBytes;
      return (
        o("WABase64").encodeB64UrlSafe(t) +
        "-" +
        (n != null ? n : "X") +
        "-" +
        (r != null ? r : "X")
      );
    }, f);
    function h(e, t) {
      return e != null && e > 0 ? !0 : t != null;
    }
    ((l.toMediaCiphertext = _), (l.cachedDownloadCiphertext = g));
  },
  98,
);
