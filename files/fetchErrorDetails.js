__d(
  "fetchErrorDetails",
  [
    "ErrorPoster",
    "Promise",
    "SiteData",
    "XCometFBMultiSiteJSErrorDetailsControllerRouteBuilder",
    "cr:1411056",
    "cr:885544",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r(
          "XCometFBMultiSiteJSErrorDetailsControllerRouteBuilder",
        ).buildURL({}),
        a = r("ErrorPoster").createErrorPayload(t, {
          loggingFramework: "error_dialog",
        }),
        i = {
          client_revision: r("SiteData").client_revision,
          error_payload: JSON.stringify(a),
        },
        l = null;
      return (
        n("cr:1411056") !== null
          ? (l = n("cr:1411056")(o, { data: i, method: "POST" }))
          : n("cr:885544") !== null &&
            (l = new (n("cr:885544"))()
              .setURI(o)
              .setMethod("POST")
              .setData(i)
              .setReadOnly(!0)
              .exec()
              .then(function (e) {
                return e.payload;
              })),
        l !== null
          ? l.then(function (e) {
              return e.error_details;
            })
          : (e || (e = n("Promise"))).reject(r("err")("No fetch available"))
      );
    }
    l.default = s;
  },
  98,
);
