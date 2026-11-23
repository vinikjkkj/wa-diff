__d(
  "MIHandleResumeCheckResponse",
  [
    "FBLogger",
    "WADirectPath",
    "WAMediaUtils",
    "WAResultOrError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      switch (e.status) {
        case 200:
          try {
            var t = await e.json(),
              n = t.direct_path,
              a = t.object_id,
              i = t.resume;
            if (i === "complete")
              return n == null
                ? (r("FBLogger")("mi_upload").mustfix(
                    "MIHttpResumeCheck: direct_path is missing",
                  ),
                  o("WAResultOrError").makeResult({ type: "media-not-found" }))
                : a == null
                  ? (r("FBLogger")("mi_upload").mustfix(
                      "MIHttpResumeCheck: object_id is missing",
                    ),
                    o("WAResultOrError").makeResult({
                      type: "media-not-found",
                    }))
                  : o("WAResultOrError").makeResult({
                      directPath: o("WADirectPath").unsafeCastToDirectPath(n),
                      objectId: o("WAMediaUtils").stringToDeliveryObjectId(a),
                      type: "media-found",
                    });
            var l = parseInt(i, 10);
            return l === 0
              ? o("WAResultOrError").makeResult({ type: "media-not-found" })
              : Number.isNaN(l)
                ? (r("FBLogger")("mi_upload").mustfix(
                    "MIHttpResumeCheck: resume is NaN: %s",
                    i,
                  ),
                  o("WAResultOrError").makeResult({ type: "media-not-found" }))
                : o("WAResultOrError").makeResult({
                    resumeFromBytes: l,
                    type: "media-partial-found",
                  });
          } catch (e) {
            return (
              r("FBLogger")("mi_upload")
                .catching(r("getErrorSafe")(e))
                .mustfix("MIHttpResumeCheck: fail to parse response body"),
              o("WAResultOrError").makeError("body-network-error")
            );
          }
        case 404:
          return o("WAResultOrError").makeResult({ type: "media-not-found" });
        case 408:
          return o("WAResultOrError").makeError("server-timeout");
        case 429:
        case 507:
          return o("WAResultOrError").makeError("upload-throttled");
        default:
          return e.status >= 400 && e.status < 500
            ? o("WAResultOrError").makeError("request-error")
            : o("WAResultOrError").makeError("unspecified-http-error");
      }
    }
    l.handleMIResumeCheckResponse = e;
  },
  98,
);
