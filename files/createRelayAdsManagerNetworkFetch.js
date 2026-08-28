__d(
  "createRelayAdsManagerNetworkFetch",
  [
    "errorCode",
    "invariant",
    "DTSGParser",
    "NetworkResourceTimingMatcher",
    "RelayAPIConfig",
    "RelayAPIRequest",
    "RelayGraphQLRequestUtils",
    "RelayObserver",
    "RelayRuntime",
    "RelayWWWInitialRolloutResolver",
    "amNetworkFetchObservePrefetchedResponse",
    "amNetworkFetchUtils",
    "getAnalyticsTags",
    "getAsyncParams",
    "getCrossOriginTransport",
    "getErrorSafe",
    "getSameOriginTransport",
    "gkx",
    "nullthrows",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, n) {
      t.FormData != null || u(0, 19002);
      var r = new FormData();
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && r.append(o, e[o]);
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && r.append(a, n[a]);
      return r;
    }
    function c(e) {
      var t = e.graphURI,
        n = e.transportBuilder,
        a = e.getAdditionalData,
        i = e.getAdditionalHeaders,
        l = e.queryResponseCache,
        s = e.liveQueryFetchWithWWWInitialFn,
        u = e.liveQueryFetchFn,
        c = e.wrapObservableFn,
        f = e.accessToken,
        g = e.actorID,
        C = e.customHeaders,
        b = e.fetchTimeout,
        v = e.getAnalyticsTags,
        S = v === void 0 ? r("getAnalyticsTags") : v,
        R = e.getStoreSize,
        L = e.retryDelays,
        E = e.userAgent,
        k = e.xhrEncoding,
        I = e.useXController;
      return function (v, T, D, x, $) {
        var e,
          P = t != null ? t : r("RelayAPIConfig").graphURI,
          N = l,
          M = g != null ? g : r("RelayAPIConfig").actorID,
          w = f != null ? f : r("RelayAPIConfig").accessToken,
          A = I != null ? I : r("RelayAPIConfig").useXController,
          F =
            n != null
              ? n
              : A
                ? r("getSameOriginTransport")
                : r("RelayAPIConfig").withCredentials
                  ? r("getCrossOriginTransport").withCredentials
                  : r("getCrossOriginTransport"),
          O = a ? a() : A ? { av: M } : { access_token: w },
          B = i
            ? i()
            : r("RelayGraphQLRequestUtils").getRelayAPIConfigHeaders(
                C != null ? C : r("RelayAPIConfig").customHeaders,
                k != null ? k : r("RelayAPIConfig").xhrEncoding,
                E != null ? E : r("RelayAPIConfig").userAgent,
              ),
          W = _(D, L);
        !o("amNetworkFetchUtils").isMutation(v) && r("gkx")("1221")
          ? P.addQueryData({ ads_manager_read_regions: !0 })
          : o("amNetworkFetchUtils").isMutation(v) &&
            r("gkx")("13382") &&
            P.addQueryData({ ads_manager_write_regions: !0 });
        var q = {
          hasPrefetcher:
            v.id != null
              ? o("relay-runtime").PreloadableQueryRegistry.get(v.id) != null
              : !1,
          obid: null,
          queryName: v.name,
          resourceTimingData: null,
          serverTimestamps: null,
          store_size: R != null ? R() : null,
          transactionId: D.transactionId,
          usedCache: !1,
          usedPrefetcher: !1,
        };
        o("relay-runtime").RelayFeatureFlags
          .ENABLE_FRIENDLY_QUERY_NAME_GQL_URL &&
          P.addQueryData({ __query: v.name });
        var U = o("RelayObserver").registerRelayQuery(v.name);
        (P.addQueryData({ __crash_obid: U }), (q.obid = U));
        var V = y(
          P,
          F,
          B,
          v,
          T,
          x,
          O,
          S,
          W,
          b != null ? b : r("RelayAPIConfig").fetchTimeout,
        );
        N && (V = h(V, v, T, N));
        var H;
        if (((e = D.metadata) == null ? void 0 : e.ignoreAllCache) === !0)
          H = o("RelayRuntime").Observable.create(function (e) {
            return e.complete();
          });
        else {
          var G,
            z = (G = D.metadata) == null ? void 0 : G.preloadingConfig;
          if (
            ((H = r("amNetworkFetchObservePrefetchedResponse")(
              v,
              T,
              q,
              N,
              D,
              M,
              $,
              z,
              function () {
                return y(
                  P,
                  F,
                  B,
                  v,
                  T,
                  x,
                  O,
                  S,
                  W,
                  b != null ? b : r("RelayAPIConfig").fetchTimeout,
                );
              },
            )),
            N)
          ) {
            var j = p(v, T, q, D, N, $);
            H = H.ifEmpty(j);
          }
        }
        var K = m(v, T, M, w, D, u, s);
        ((H = H.ifEmpty(K).ifEmpty(V)),
          o("relay-runtime").RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY &&
            (H = c != null ? c(H) : H));
        var Q = D.liveConfigId;
        return (
          Q != null &&
            !o("RelayWWWInitialRolloutResolver").disableWWWInitial(v.name) &&
            s != null &&
            (H = s(v, T, { access_token: w, actor_id: M, config_id: Q }, H)),
          o("relay-runtime").RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY ||
            (H = c != null ? c(H) : H),
          d(q, H)
        );
      };
    }
    function d(e, t) {
      var n;
      return t.do({
        error: function (t) {
          n.stop(t);
        },
        next: function (a) {
          var t, i, l;
          if (
            !Array.isArray(a) &&
            ((t = a.extensions) == null ? void 0 : t.server_metadata) != null &&
            ((i = a.extensions.server_metadata) == null
              ? void 0
              : i.request_start_time_ms) != null &&
            ((l = a.extensions.server_metadata) == null
              ? void 0
              : l.time_at_flush_ms) != null
          ) {
            var s = a.extensions.server_metadata,
              u = s.request_start_time_ms,
              c = s.time_at_flush_ms;
            e.serverTimestamps = { endTime: Number(c), startTime: Number(u) };
          }
          var d = e.obid;
          if (d != null && r("gkx")("21718")) {
            var m = o("NetworkResourceTimingMatcher").getResourceTimingByObid(
              d,
            );
            m != null &&
              (e.resourceTimingData = {
                resource_timing_duration: m.duration,
                resource_timing_fetch_start: m.fetchStart,
                resource_timing_response_end: m.responseEnd,
                resource_timing_transfer_size: m.transferSize,
              });
          }
          n.stop();
        },
        start: function () {
          n = o("RelayRuntime").RelayProfiler.profile("fetchRelayQuery", e);
        },
      });
    }
    function m(e, t, n, r, a, i, l) {
      var s = a.liveConfigId;
      return s != null &&
        (o("RelayWWWInitialRolloutResolver").disableWWWInitial(e.name) ||
          l == null)
        ? (i != null || u(0, 112734),
          i(e, t, { access_token: r, actor_id: n, config_id: s }))
        : o("RelayRuntime").Observable.create(function (e) {
            return e.complete();
          });
    }
    function p(e, t, n, r, a, i) {
      return o("RelayRuntime").Observable.create(function (l) {
        if (o("amNetworkFetchUtils").isQuery(e) && !r.force) {
          var s = a.get(o("amNetworkFetchUtils").getCacheID(e), t);
          s &&
            g(s, r) &&
            (i != null && i({ cached: !0 }), (n.usedCache = !0), l.next(s));
        }
        l.complete();
      });
    }
    function _(e, t) {
      var n,
        o,
        a = f((n = e.metadata) == null ? void 0 : n.retryDelays);
      return (o = a != null ? a : t) != null
        ? o
        : r("RelayAPIConfig").retryDelays;
    }
    function f(e) {
      if (Array.isArray(e)) {
        var t = e.filter(function (e) {
          return typeof e == "number";
        });
        if (t.length === e.length) return t;
      }
      return null;
    }
    function g(e, t) {
      var n,
        r,
        o = (n = t.metadata) == null ? void 0 : n.freshTTLSeconds,
        a = typeof o == "number" ? o : null,
        i = (r = t.metadata) == null ? void 0 : r.cacheTTLSeconds,
        l = typeof i == "number" ? i : null;
      if (a == null && l == null) return !0;
      var s = l != null ? l : 1 / 0,
        u = a != null ? a : s;
      u > s && (u = s);
      var c = Array.isArray(e) ? e : [e];
      for (var d of c) {
        var m,
          p,
          _,
          f = null;
        ((m = d.extensions) == null ? void 0 : m.server_metadata) != null &&
          ((p = d.extensions.server_metadata) == null
            ? void 0
            : p.time_at_flush_ms) != null &&
          typeof ((_ = d.extensions.server_metadata) == null
            ? void 0
            : _.time_at_flush_ms) == "number" &&
          (f = d.extensions.server_metadata.time_at_flush_ms);
        var g = f == null ? 0 : (Date.now() - f) / 1e3;
        if (g > u) return !1;
      }
      return !0;
    }
    function h(e, t, n, r) {
      return e.do({
        next: function (a) {
          o("amNetworkFetchUtils").isMutation(t)
            ? r.clear()
            : Array.isArray(a) ||
              r.set(o("amNetworkFetchUtils").getCacheID(t), n, a);
        },
      });
    }
    function y(t, n, a, i, l, s, u, c, d, m) {
      return o("RelayRuntime").Observable.create(function (p) {
        var _ = function (t, n, a) {
          var e;
          try {
            (r("DTSGParser").updateFromAsyncResponse(t),
              (e = r("RelayGraphQLRequestUtils").parsePayload(t)));
          } catch (e) {
            return p.error(r("getErrorSafe")(e));
          }
          if (!e)
            return p.error(
              o("RelayRuntime").RelayError.createWarning(
                "EmptyResponseError",
                "Parsed network response is empty",
              ),
            );
          var l = r("gkx")("6310") ? i.operationKind !== "mutation" : !1;
          if (e.errors && !l) {
            for (var s of e.errors)
              if (s.severity === "CRITICAL") {
                var u = r("RelayGraphQLRequestUtils").createErrorFromPayload(
                  s,
                  i.name,
                );
                if (u.code === 1675004) {
                  var c;
                  u.mids =
                    (c = u.mids) != null
                      ? c
                      : ["fake_mid_gql_rate_limit_exceeded"];
                } else if (u.code === 1675012) {
                  var d;
                  u.mids =
                    (d = u.mids) != null ? d : ["fake_mid_gql_bad_arguments"];
                }
                return p.error(u);
              }
          }
          (p.next(e), a && p.complete());
        };
        ((_.includeHeaders = !0),
          (!o("amNetworkFetchUtils").isMutation(i) || c == null) &&
            (c = function () {
              return o("RelayRuntime").Observable.from(null);
            }),
          c().subscribe({
            next: function (f) {
              var c = new (r("RelayAPIRequest"))(t, d, m)
                  .setMethod("POST")
                  .setSkipRetry(o("amNetworkFetchUtils").isMutation(i))
                  .setTrackingName("RelayFBNetwork_" + i.name)
                  .setTransportBuilder(n)
                  .setErrorHandler(function (e) {
                    var t, n, o;
                    p.error(
                      r("RelayGraphQLRequestUtils").createErrorFromXHR(
                        e,
                        "Network request encountered error " +
                          (((t = e.errorType) != null ? t : "") + " ") +
                          (((n = e.errorCode) != null ? n : "") +
                            ": " +
                            ((o = e.errorMsg) != null ? o : "")),
                      ),
                    );
                  })
                  .setTimeoutHandler(function () {
                    var e = o("RelayRuntime").RelayError.createWarning(
                      "NetworkTimeoutError",
                      "Network request timed out.",
                    );
                    ((e.opes_mids = ["fake_mid_gql_timeout"]), p.error(e));
                  })
                  .setResponseChunkHandler(_),
                g = babelHelpers.extends({}, u, r("getAsyncParams")("POST"), {
                  fb_api_caller_class: "RelayModern",
                  fb_api_req_friendly_name: i.name,
                  server_timestamps: !0,
                  variables: JSON.stringify(l),
                });
              if (
                (i.id
                  ? (g.doc_id = i.id)
                  : (g.doc = r("nullthrows")(
                      i.text,
                      "RelayFBNetwork: A query should have either an id or text, found neither.",
                    )),
                f != null &&
                  f.length > 0 &&
                  (g.fb_api_analytics_tags = JSON.stringify(f)),
                s != null)
              )
                c.setRawData(e(s, g));
              else {
                var h = {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-FB-Friendly-Name": i.name,
                };
                c.setData(g).setRequestHeaders(babelHelpers.extends({}, h, a));
              }
              return c.send().abort;
            },
          }));
      });
    }
    l.default = c;
  },
  98,
);
