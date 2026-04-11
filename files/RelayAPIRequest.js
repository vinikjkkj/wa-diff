__d(
  "RelayAPIRequest",
  [
    "invariant",
    "NetworkStatus",
    "URI",
    "XHRHttpError",
    "XHRRequest",
    "createChunkedResponseParser",
    "createRelayChunkedResponseParser",
    "forEachObject",
    "getRelayAPIRequestHandler",
    "getSameOriginTransport",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e === n("XHRHttpError").HTTP_TRANSPORT_ERROR ||
        e === n("XHRHttpError").HTTP_SERVER_ERROR
      );
    }
    var u = (function () {
      function t(e, t, r) {
        ((this.$1 = !1),
          this.setURI(e),
          this.setMethod("POST"),
          this.setTransportBuilder(n("getSameOriginTransport")),
          (this.$16 = t),
          (this.$17 = r));
      }
      var r = t.prototype;
      return (
        (r.getURI = function () {
          return this.$2;
        }),
        (r.setURI = function (r) {
          return (
            !this.$1 || l(0, 2124),
            (this.$2 = new (e || (e = n("URI")))(r)),
            this
          );
        }),
        (r.getMethod = function () {
          return this.$3;
        }),
        (r.setMethod = function (t) {
          return (!this.$1 || l(0, 2125), (this.$3 = t), this);
        }),
        (r.getData = function () {
          return this.$4;
        }),
        (r.setData = function (t) {
          return (!this.$1 || l(0, 2126), (this.$4 = t), this);
        }),
        (r.setDataSerializer = function (t) {
          return ((this.$5 = t), this);
        }),
        (r.setRawData = function (t) {
          return (!this.$1 || l(0, 2127), (this.$6 = t), this);
        }),
        (r.setTrackingName = function (t) {
          return ((this.$9 = t), this);
        }),
        (r.setPerformanceLogger = function (t) {
          return ((this.$18 = t), this);
        }),
        (r.getAllRequestHeaders = function () {
          return this.$7;
        }),
        (r.setRequestHeaders = function (t) {
          return (!this.$1 || l(0, 2128), (this.$7 = t), this);
        }),
        (r.setTransportBuilder = function (t) {
          var e = this;
          !this.$1 || l(0, 2129);
          var n = t;
          return (
            (this.$10 = function () {
              var t = n();
              return (
                t.setTrackingName && t.setTrackingName(e.$9),
                t.setPerformanceLogger &&
                  e.$18 &&
                  t.setPerformanceLogger(e.$18),
                t
              );
            }),
            this
          );
        }),
        (r.setResponseFilter = function (t) {
          return (!this.$1 || l(0, 2130), (this.$11 = t), this);
        }),
        (r.setResponseChunkHandler = function (t) {
          return (
            !this.$1 || l(0, 2131),
            this.$12 == null || l(0, 42544),
            (this.$13 = t),
            this
          );
        }),
        (r.setResponseBatchChunkHandler = function (t) {
          return (
            !this.$1 || l(0, 2131),
            this.$13 == null || l(0, 42545),
            (this.$12 = t),
            this
          );
        }),
        (r.setErrorHandler = function (t) {
          return (!this.$1 || l(0, 2132), (this.$14 = t), this);
        }),
        (r.setTimeoutHandler = function (t) {
          return (!this.$1 || l(0, 2133), (this.$15 = t), this);
        }),
        (r.setSkipRetry = function (t) {
          return ((this.$8 = t), this);
        }),
        (r.send = function () {
          var e = this;
          if (
            (!this.$1 || l(0, 2134),
            (this.$1 = !0),
            !this.$2 || !this.$2.toString())
          )
            return (
              this.$14 &&
                this.$14({
                  errorCode: "HTTP_CLIENT_ERROR",
                  errorType: "HTTP",
                  errorMsg:
                    "No uri provided - make sure RelayAPIConfig is properly setup.",
                }),
              { abort: function () {} }
            );
          var t,
            r = 0,
            o = 0,
            a,
            i = function () {
              return e.$8 !== !0 && r <= e.$16.length;
            },
            u = function () {
              var n = e.$16[r - 1],
                a = o + n,
                i = setTimeout(function () {
                  t = c();
                }, a - Date.now());
              t = {
                abort: function () {
                  clearTimeout(i);
                },
              };
            },
            c = function () {
              (r++, (o = Date.now()));
              var l;
              e.$12
                ? ((l = n("createRelayChunkedResponseParser")(e.$12, e.$11)),
                  (l = n("getRelayAPIRequestHandler")(l)))
                : e.$13 &&
                  ((l = n("createChunkedResponseParser")(e.$13, e.$11)),
                  (l = n("getRelayAPIRequestHandler")(l)));
              var c = e.$14,
                d = function (r) {
                  i() && s(r.errorCode)
                    ? (n("warning")(
                        !1,
                        "RelayAPIRequest: Transient HTTP error, retrying. %s %s %s",
                        r.errorType || "",
                        r.errorCode || "",
                        r.errorMsg || "",
                      ),
                      n("NetworkStatus").isOnline()
                        ? u()
                        : ((a = n("NetworkStatus").onChange(function (e) {
                            var t = e.online;
                            t && (u(), a.remove());
                          })),
                          (t = {
                            abort: function () {
                              a.remove();
                            },
                          })))
                    : c && c(r);
                },
                m = e.$15,
                p = function () {
                  i()
                    ? (n("warning")(
                        !1,
                        "RelayAPIRequest: HTTP timeout, retrying.",
                      ),
                      u())
                    : m && m();
                },
                _ = new (n("XHRRequest"))(e.$2)
                  .setMethod(e.$3)
                  .setData(e.$4)
                  .setTransportBuilder(e.$10)
                  .setErrorHandler(d)
                  .setResponseHandler(l)
                  .setTimeout(e.$17)
                  .setTimeoutHandler(p);
              return (
                e.$6 != null && _.setRawData(e.$6),
                e.$5 != null && _.setDataSerializer(e.$5),
                e.$7 &&
                  n("forEachObject")(e.$7, function (e, t) {
                    _.setRequestHeader(t, e);
                  }),
                _.send(),
                _
              );
            };
          return (
            (t = c()),
            {
              abort: function () {
                t && t.abort();
              },
            }
          );
        }),
        t
      );
    })();
    a.exports = u;
  },
  null,
);
