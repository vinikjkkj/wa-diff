__d(
  "WADownloadProgressiveJpegPlaintextStreamer",
  [
    "WAAssertUnreachable",
    "WACreateMediaDownloadRetrier",
    "WADownloadProgressiveJpegPlaintextStreamerWithoutRetry",
    "WAMediaUrl",
    "WAResultOrError",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WATagsLogger").TAGS([
        "WADownloadProgressiveJpegPlaintextStreamer",
      ]);
    async function u(t) {
      var n = t.abortSignal,
        a = t.ciphertextCaptureStream,
        i = t.directPath,
        l = t.eventFlow,
        u = t.fileEncSha256,
        c = t.mediaKey,
        d = t.progressiveJpegDetails,
        m = t.serverMediaType,
        p = await o("WACreateMediaDownloadRetrier").createMediaDownloadRetrier({
          directPath: i,
          eventFlow: l,
          fileEncSha256: u,
          mediaTypeDetails: { type: "regular", mediaType: m },
        });
      if (!p.success) return p;
      var _ = p.value,
        f = _.mediaRouteDetails,
        g = _.retrier,
        h = f.bucket,
        y = await g.run(async function (e, t, s) {
          var p = e.domain,
            _ = o("WAMediaUrl").buildDownloadUrl(i, u, p, "manual", h),
            f = await o(
              "WADownloadProgressiveJpegPlaintextStreamerWithoutRetry",
            ).downloadProgressiveJpegPlaintextUsingStreamsWithoutRetry({
              abortSignal: n,
              ciphertextCaptureStream: a,
              downloadUrl: _,
              eventFlow: l,
              mediaKey: c,
              progressiveJpegDetails: d,
              serverMediaType: m,
              cachePolicy: s > 0 ? "no-store" : "force-cache",
            });
          if (f.success === !0) return o("WAResultOrError").makeResult(f);
          var g = f.error;
          switch (g) {
            case "http-fetch-exception":
            case "server-timeout":
            case "unspecified-http-error":
            case "invalid-content-length-header":
            case "missing-content-length-header":
              return o("WAResultOrError").makeError({ progressMade: !0 });
            case "access-expired":
              return o("WAResultOrError").makeResult(
                o("WAResultOrError").makeError("disconnected"),
              );
            case "body-network-error":
              return o("WAResultOrError").makeResult(
                o("WAResultOrError").makeError("request-error"),
              );
            case "media-not-found":
            case "request-error":
            case "download-throttled":
            case "signature-expired":
            case "http-fetch-aborted":
              return o("WAResultOrError").makeResult(
                o("WAResultOrError").makeError(g),
              );
            case "missing-expected-hmacs":
            case "hmac-chiphertext-array-mismatch":
              return o("WAResultOrError").makeResult(
                o("WAResultOrError").makeError(g),
              );
            default:
              throw r("WAAssertUnreachable")(g);
          }
        });
      return y == null
        ? (s.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Download with stream given up",
              ])),
          ),
          o("WAResultOrError").makeError("max-attempts-exceeded"))
        : y;
    }
    l.downloadProgressiveJpegPlaintextUsingStreams = u;
  },
  98,
);
