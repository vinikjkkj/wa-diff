__d(
  "WAHttpRegularUploadMedia",
  ["WADirectPath", "WALogger", "WAResultOrError", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t, n) {
      var a;
      try {
        a = await fetch(t, {
          method: "POST",
          mode: "cors",
          cache: "no-store",
          headers: { "Content-Type": "text/plain" },
          body: new Blob([n]),
        });
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "HttpRegularUploadMedia: fail to initiate fetch ",
                "",
              ])),
            t,
          ),
          t
        );
      }
      var i = a,
        l = i.status;
      switch (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Fetch Media HTTP status ",
              "",
            ])),
          l,
        ),
        l)
      ) {
        case 200:
          return a
            .json()
            .then(function (e) {
              if (!Object.prototype.hasOwnProperty.call(e, "direct_path"))
                throw r("err")(
                  "direct_path not available in wa upload http response",
                );
              if (typeof e.direct_path != "string")
                throw r("err")(
                  'directPath: "' + e.direct_path + '" is not a string',
                );
              if (e.object_id && typeof e.object_id != "string")
                throw r("err")(
                  'objectId: "' + e.object_id + '" is not a string',
                );
              if (e.handle && typeof e.handle != "string")
                throw r("err")('handle: "' + e.handle + '" is not a string');
              var t = {
                directPath: o("WADirectPath").unsafeCastToDirectPath(
                  e.direct_path,
                ),
                objectId: e.object_id,
                handle: e.handle,
              };
              return o("WAResultOrError").makeResult(t);
            })
            .catch(function (e) {
              return (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "HttpRegularUploadMedia: fail to parse request body ",
                      "",
                    ])),
                  e,
                ),
                o("WAResultOrError").makeError("body-network-error")
              );
            });
        case 408:
          return o("WAResultOrError").makeError("server-timeout");
        case 413:
          return o("WAResultOrError").makeError("payload-too-large");
        case 415:
          return o("WAResultOrError").makeError("invalid-media");
        case 429:
        case 507:
          return o("WAResultOrError").makeError("upload-throttled");
        default:
          return l >= 400 && l < 500
            ? o("WAResultOrError").makeError("request-error")
            : o("WAResultOrError").makeError("unspecified-http-error");
      }
    }
    l.httpRegularUploadMedia = c;
  },
  98,
);
