__d(
  "WAHttpResumeCheck",
  ["WADirectPath", "WALogger", "WAMediaUtils", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    async function p(t) {
      var n;
      try {
        n = await fetch(t, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: { "Content-Type": "text/plain" },
        });
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "HttpResumeCheck: fail to initiate fetch ",
                "",
              ])),
            t,
          ),
          t
        );
      }
      var r = n,
        a = r.status;
      switch (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "HttpResumeCheck: response status ",
              "",
            ])),
          a,
        ),
        a)
      ) {
        case 200:
          return n
            .json()
            .then(function (e) {
              var t = e.direct_path,
                n = e.object_id,
                r = e.resume;
              if (r === "complete")
                return t == null
                  ? (o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "HttpResumeCheck: direct_path is missing",
                        ])),
                    ),
                    o("WAResultOrError").makeResult({
                      type: "media-not-found",
                    }))
                  : n == null
                    ? (o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "HttpResumeCheck: object_id is missing",
                          ])),
                      ),
                      o("WAResultOrError").makeResult({
                        type: "media-not-found",
                      }))
                    : o("WAResultOrError").makeResult({
                        type: "media-found",
                        directPath: o("WADirectPath").unsafeCastToDirectPath(t),
                        objectId: o("WAMediaUtils").stringToDeliveryObjectId(n),
                      });
              var a = parseInt(r, 10);
              return a === 0
                ? o("WAResultOrError").makeResult({ type: "media-not-found" })
                : Number.isNaN(a)
                  ? (o("WALogger").ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "HttpResumeCheck: resume is NaN: ",
                          "",
                        ])),
                      r,
                    ),
                    o("WAResultOrError").makeResult({
                      type: "media-not-found",
                    }))
                  : o("WAResultOrError").makeResult({
                      type: "media-partial-found",
                      resumeFromBytes: a,
                    });
            })
            .catch(function (e) {
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "HttpResumeCheck: fail to parse request body ",
                      "",
                    ])),
                  e,
                ),
                o("WAResultOrError").makeError("body-network-error")
              );
            });
        case 404:
          return o("WAResultOrError").makeResult({ type: "media-not-found" });
        case 408:
          return o("WAResultOrError").makeError("server-timeout");
        case 429:
        case 507:
          return o("WAResultOrError").makeError("upload-throttled");
        default:
          return a >= 400 && a < 500
            ? o("WAResultOrError").makeError("request-error")
            : o("WAResultOrError").makeError("unspecified-http-error");
      }
    }
    l.httpResumeCheck = p;
  },
  98,
);
