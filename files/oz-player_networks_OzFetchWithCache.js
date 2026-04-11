__d(
  "oz-player/networks/OzFetchWithCache",
  [
    "oz-player/networks/OzFetchRequestImplementation",
    "oz-player/networks/withRetries",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/arrayBuffer2OzReadableStream",
    "oz-player/utils/processFetchResponse",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.config,
        n = e.dataAppendedCallback,
        a = e.dataAppendedErrorCallback,
        i = e.http,
        l = e.mediaStreamType,
        s = e.onPerfEntryAvailable,
        u = e.options,
        c = e.overrideOzRequestImplementation,
        d = e.prefetchCache,
        m = e.url,
        p =
          c != null
            ? function () {
                return c.apply(void 0, arguments);
              }
            : r("oz-player/networks/OzFetchRequestImplementation"),
        _ = d ? d.getCacheValue(m) : null,
        f = _,
        g = !1,
        h;
      if (f)
        ((g = !0),
          (h = f
            .then(function (e) {
              if (e.initiator === "FETCH") {
                var t = e.response,
                  n = t.headers,
                  a = t.ok,
                  i = t.status;
                return !a && typeof e.response.text == "function"
                  ? e.response.text().then(function (t) {
                      return {
                        ok: !1,
                        status: i,
                        headers: n,
                        body: t,
                        arrayBuffer: function () {
                          return e.response.arrayBuffer();
                        },
                      };
                    })
                  : r("oz-player/utils/processFetchResponse")(e.response);
              } else if (e.initiator === "XHR_REQUEST") {
                var l = r("oz-player/utils/arrayBuffer2OzReadableStream")(
                  e.response,
                );
                return {
                  body: l,
                  status: 200,
                  headers: null,
                  ok: !0,
                  arrayBuffer: function () {
                    return r("oz-player/shims/OzMaybeNativePromise").resolve(
                      e.response,
                    );
                  },
                };
              } else
                throw o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_UNEXPECTED_CACHE_INITIATOR",
                  description:
                    "Unable to handle request initiator: " + e.initiator,
                });
            })
            .catch(function (e) {
              return p(m, i, null, null, l, s, n, a);
            })));
      else {
        var y,
          C =
            (y = u == null ? void 0 : u.retryAttempts_SIDX_USE_ONLY) != null
              ? y
              : 0;
        if (C > 0) {
          var b,
            v =
              (b = u == null ? void 0 : u.retryTimeoutMs_SIDX_USE_ONLY) != null
                ? b
                : 100;
          h = r("oz-player/networks/withRetries")(
            function () {
              return p(m, i, u, t, l, s, n, a);
            },
            C,
            v,
          );
        } else h = p(m, i, u, t, l, s, n, a);
      }
      return { promise: h, retrievedFromCache: g };
    }
    l.default = e;
  },
  98,
);
