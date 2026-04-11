__d(
  "oz-player/utils/processFetchResponse",
  [
    "oz-player/networks/OzHTTPHeaders",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/utils/arrayBuffer2OzReadableStream",
    "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.body,
        n = e.headers,
        a = e.ok,
        i = e.status;
      return t != null
        ? r("oz-player/shims/OzMaybeNativePromise").resolve({
            ok: a,
            status: i,
            headers: o(
              "oz-player/networks/OzHTTPHeaders",
            ).maybeConvertHeadersToOzHTTPHeaders(n),
            body: r(
              "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
            )(t),
            arrayBuffer: function () {
              return e.arrayBuffer();
            },
          })
        : e.arrayBuffer().then(function (e) {
            return {
              ok: a,
              status: i,
              headers: o(
                "oz-player/networks/OzHTTPHeaders",
              ).maybeConvertHeadersToOzHTTPHeaders(n),
              body: r("oz-player/utils/arrayBuffer2OzReadableStream")(e),
              arrayBuffer: function () {
                return r("oz-player/shims/OzMaybeNativePromise").resolve(e);
              },
            };
          });
    }
    l.default = e;
  },
  98,
);
