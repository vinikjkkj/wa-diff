__d(
  "oz-player/networks/OzNetworkRequestStream",
  [
    "Promise",
    "oz-player/networks/OzCreateErrorStream",
    "oz-player/networks/OzFetchWithCache",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzResourceTimingUtils",
    "oz-player/utils/OzVideoUrlUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          ((this.$8 = !1), (this.$10 = "auto"));
          var t = e.baseUri,
            n = e.baseUriDecisionTime,
            r = e.config,
            o = e.dataAppendedCallback,
            a = e.dataAppendedErrorCallback,
            i = e.debugName,
            l = e.dynamicVideoLibrary,
            s = e.mediaStreamType,
            u = e.networkRequestFetchPriority,
            c = e.networkRequestStreamHandlers,
            d = e.networkRequestStreamRetryHandler,
            m = e.networkRequestUrlRefreshHandler,
            p = e.options,
            _ = e.overrideOzRequestImplementation,
            f = e.prefetchCache,
            g = e.requestParamCreator;
          ((this.$1 = i),
            (this.$2 = t),
            (this.$3 = p),
            (this.$4 = g),
            (this.$11 = c != null ? c : []),
            (this.$10 = u),
            (this.$12 = d),
            (this.$13 = m),
            (this.$9 = _),
            (this.$14 = f),
            (this.$15 = r),
            (this.$16 = l),
            (this.$17 = n),
            (this.$18 = s),
            (this.$19 = o),
            (this.$20 = a));
        }
        var a = t.prototype;
        return (
          (a.$21 = function (t) {
            var e = this,
              n = this.$4.createRequestParam(this.$2, t, this.$10),
              o = n.http,
              a = n.uri,
              i = a.toString();
            this.$5 = i;
            var l = r("oz-player/networks/OzFetchWithCache")({
                config: this.$15,
                url: i,
                http: o,
                overrideOzRequestImplementation: this.$9,
                options: this.$3,
                prefetchCache: this.$14,
                mediaStreamType: this.$18,
                onPerfEntryAvailable: function (n) {
                  e.$22(n);
                },
                dataAppendedCallback: this.$19,
                dataAppendedErrorCallback: this.$20,
              }),
              s = l.promise,
              u = l.retrievedFromCache;
            return ((this.$8 = u), { requestPromise: s, requestUrl: i });
          }),
          (a.startStream = function (t) {
            var e = this;
            return this.$23().then(function () {
              if (
                e.$15.getBool("video_cdn_url_refresh") &&
                !o(
                  "oz-player/utils/OzVideoUrlUtils",
                ).isShortenedExpiryTimestampCdnUrl(e.$2.toString()) &&
                o("oz-player/utils/OzVideoUrlUtils").isCdnUrlExpired(
                  e.$2.toString(),
                )
              )
                return r("oz-player/networks/OzCreateErrorStream")(
                  o("oz-player/utils/OzErrorUtils").createOzNetworkError({
                    description:
                      "OzNetworkRequestStream(" + e.$1 + ") CDN URL expired.",
                    responseStatus: 0,
                    responseHeaders: null,
                    requestUrl: e.$2.toString(),
                  }),
                );
              var n = e.$21(t),
                a = n.requestPromise,
                i = n.requestUrl,
                l = i,
                s = Date.now();
              return a
                .then(function (n) {
                  var a;
                  return (
                    (a = e.$16) == null || a.updateWithResponse(i, s, e.$17, n),
                    (e.$7 = n),
                    e.$12 != null && n.ok === !1
                      ? e
                          .$12(
                            n,
                            function () {
                              var n = e.$21(t),
                                r = n.requestPromise,
                                o = n.requestUrl;
                              return ((l = o), r);
                            },
                            l,
                          )
                          .catch(function (e) {
                            throw o(
                              "oz-player/utils/OzErrorUtils",
                            ).createOzError({
                              type: "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR",
                              description: String(e),
                              extra: {
                                originalError: e,
                                code: r("oz-player/utils/OzCustomErrorCode")
                                  .NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR,
                                url: l,
                              },
                            });
                          })
                      : n
                  );
                })
                .then(
                  function (t) {
                    for (var n = [], a = 0; a < e.$11.length; a++)
                      try {
                        var i = e.$11[a].onResponse(t, l);
                        i && n.push(i);
                      } catch (e) {
                        var s = e;
                        return r("oz-player/networks/OzCreateErrorStream")(s);
                      }
                    var u = t.body,
                      c = t.headers,
                      d = t.ok,
                      m = t.status;
                    if (!d)
                      return r("oz-player/networks/OzCreateErrorStream")(
                        o("oz-player/utils/OzErrorUtils").createOzNetworkError({
                          description:
                            "OzNetworkRequestStream(" +
                            e.$1 +
                            ") HTTP status not OK",
                          responseStatus: m,
                          responseHeaders: c,
                          requestUrl: l,
                          responseBody: typeof u == "string" ? u : void 0,
                        }),
                      );
                    (typeof u != "string" &&
                      typeof u.getReader == "function") ||
                      r("oz-player/shims/ozvariant")(0, 3287);
                    for (var p = u, _ = 0; _ < n.length; _++)
                      p = p.pipeThrough(n[_]);
                    return p;
                  },
                  function (t) {
                    for (var n = [], a = 0; a < e.$11.length; a++)
                      try {
                        var i = e.$11[a].onError(t, l);
                        i && n.push(i);
                      } catch (e) {
                        var s = e;
                        return r("oz-player/networks/OzCreateErrorStream")(s);
                      }
                    if (t instanceof TypeError) {
                      for (
                        var u = r("oz-player/networks/OzCreateErrorStream")(
                            o(
                              "oz-player/utils/OzErrorUtils",
                            ).createOzNetworkError({
                              description:
                                "OzNetworkRequestStream(" +
                                e.$1 +
                                ") TypeError: " +
                                t.message,
                              responseStatus: 0,
                              responseHeaders: null,
                              requestUrl: l,
                            }),
                          ),
                          c = 0;
                        c < n.length;
                        c++
                      )
                        u = u.pipeThrough(n[c]);
                      return u;
                    }
                    throw t;
                  },
                )
                .catch(function (e) {
                  if (
                    o("oz-player/utils/OzErrorUtils").isOzError(e) &&
                    e.getType() ===
                      "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR"
                  )
                    throw e;
                  if (e.name === "AbortError") {
                    var t = e.message;
                    return r("oz-player/networks/OzCreateErrorStream")({
                      type: e.name,
                      status: e.code,
                      url: l,
                      message: t,
                    });
                  }
                  return r("oz-player/networks/OzCreateErrorStream")({
                    type: "stream_processing",
                    status: 0,
                    url: l,
                    message: "Stream processing error. " + e,
                  });
                });
            });
          }),
          (a.$22 = function (t) {
            this.$6 = t;
          }),
          (a.getLastPerformanceEntry = function () {
            return this.$6 != null
              ? this.$6
              : this.$5 == null
                ? null
                : o(
                    "oz-player/utils/OzResourceTimingUtils",
                  ).getLatestResourceTimingEntry(this.$5);
          }),
          (a.getLastRequestUrl = function () {
            return this.$5;
          }),
          (a.getLastResponse = function () {
            return this.$7;
          }),
          (a.retrievedFromCache = function () {
            return this.$8;
          }),
          (a.$23 = function () {
            var t = this;
            return this.$15.getBool("video_cdn_url_refresh") &&
              !o(
                "oz-player/utils/OzVideoUrlUtils",
              ).isShortenedExpiryTimestampCdnUrl(this.$2.toString()) &&
              o("oz-player/utils/OzVideoUrlUtils").isCdnUrlExpired(
                this.$2.toString(),
              ) &&
              this.$13
              ? this.$13(this.$2.toString()).then(function (e) {
                  e.refreshedUrl != null &&
                    e.reason === "OK" &&
                    (t.$2 = new (r("oz-player/shims/OzURI"))(e.refreshedUrl));
                })
              : (e || (e = n("Promise"))).resolve();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
