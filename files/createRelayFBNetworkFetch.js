__d(
  "createRelayFBNetworkFetch",
  [
    "errorCode",
    "invariant",
    "CometSmartGraphqlPrefetch",
    "DTSGParser",
    "MetaConfig",
    "RelayAPIConfig",
    "RelayAPIRequest",
    "RelayDiskCacheConfig",
    "RelayGraphQLRequestUtils",
    "RelayPrefetchedResponseProvider",
    "RelayRuntime",
    "RelayWWWInitialRolloutResolver",
    "URI",
    "getAnalyticsTags",
    "getAsyncParams",
    "getCrossOriginTransport",
    "getErrorSafe",
    "getSameOriginTransport",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c(e) {
      return e.operationKind === "mutation";
    }
    function d(e) {
      return e.operationKind === "query";
    }
    function m(e, n) {
      t.FormData != null || u(0, 19002);
      var r = new FormData();
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && r.append(o, e[o]);
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && r.append(a, n[a]);
      return r;
    }
    function p(e) {
      var t = e.cacheID ? e.cacheID : e.id;
      return (t != null || u(0, 22754), t);
    }
    function _(e) {
      var t = e == null ? void 0 : e.performanceLogger;
      if (
        t != null &&
        typeof t == "object" &&
        typeof t.startTimespan == "function"
      ) {
        var n = t;
        return n;
      }
    }
    function f(t) {
      var n = t.accessToken,
        a = t.actorID,
        i = t.batchResponseChunks,
        l = t.customHeaders,
        s = t.fetchTimeout,
        u = t.getAdditionalData,
        c = t.getAdditionalHeaders,
        d = t.getAnalyticsTags,
        m = t.graphURI,
        p = t.includeHeadersInUploadables,
        f = t.liveQueryFetchFn,
        L = t.liveQueryFetchWithWWWInitialFn,
        E = t.omitAccessToken,
        k = t.queryResponseCache,
        I = t.retryDelays,
        T = t.tokenProxy,
        D = t.transportBuilder,
        x = t.userAgent,
        $ = t.useXController,
        P = t.wrapObservableFn,
        N = t.xhrEncoding,
        M = d != null ? d : r("getAnalyticsTags");
      return function (d, w, A, F, O, B, W) {
        var t,
          q,
          U = m != null ? m : r("RelayAPIConfig").graphURI,
          V = k,
          H = a != null ? a : r("RelayAPIConfig").actorID,
          G = n != null ? n : r("RelayAPIConfig").accessToken,
          z = $ != null ? $ : r("RelayAPIConfig").useXController,
          j = E != null ? E : r("RelayAPIConfig").omitAccessToken,
          K =
            typeof ((t = A.metadata) == null ? void 0 : t.privacyContext) ==
            "string"
              ? A.metadata.privacyContext
              : null;
        o("RelayRuntime").RelayFeatureFlags
          .ENABLE_FRIENDLY_QUERY_NAME_GQL_URL &&
          (U = new (e || (e = r("URI")))(U).addQueryData({ __query: d.name }));
        var Q =
            D != null
              ? D
              : z
                ? r("getSameOriginTransport")
                : r("RelayAPIConfig").withCredentials
                  ? r("getCrossOriginTransport").withCredentials
                  : r("getCrossOriginTransport"),
          X = u
            ? u()
            : z
              ? { av: H }
              : babelHelpers.extends({}, E !== !0 && { access_token: G }),
          Y = c
            ? c()
            : r("RelayGraphQLRequestUtils").getRelayAPIConfigHeaders(
                l != null ? l : r("RelayAPIConfig").customHeaders,
                N != null ? N : r("RelayAPIConfig").xhrEncoding,
                x != null ? x : r("RelayAPIConfig").userAgent,
              );
        K != null && (Y.privacy_context = K);
        var J = {
            queryName: d.name,
            serverTimestamp: null,
            transactionId: A.transactionId,
            usedCache: !1,
            usedDiskCache: !1,
            usedPrefetcher: !1,
          },
          Z = _(A == null ? void 0 : A.metadata),
          ee = R(
            U,
            Q,
            Y,
            d,
            w,
            B,
            F,
            X,
            M,
            I != null ? I : r("RelayAPIConfig").retryDelays,
            s != null ? s : r("RelayAPIConfig").fetchTimeout,
            T,
            Z,
            i,
            p,
          );
        W && (ee = W(ee));
        var te = o("RelayDiskCacheConfig").getDiskCacheConfig(A);
        (te && (ee = te.cache.withDiskCacheSave(ee, d, w, H, te)),
          V && (ee = S(ee, d, w, V)));
        var ne = C(d, w, H, J, V, O, te, Z),
          re = y(d, w, J, V, A, H, O, Z);
        te && (re = te.cache.withDiskCacheSave(re, d, w, H, te));
        var oe = b(d, w, H, G, j, A, f, L),
          ae;
        if (
          (((q = A.metadata) == null
            ? void 0
            : q.usePrefetchAsServerResponse) === !0
            ? ((ae = ne.concat(oe)), (ee = re.ifEmpty(ee)))
            : (ae = ne.concat(re).concat(oe)),
          V)
        ) {
          var ie = v(d, w, J, A, V, O);
          ae = ae.ifEmpty(ie);
        }
        var le = g(ae, ee, A);
        return (
          o("RelayRuntime").RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY &&
            (le = P != null ? P(le) : le),
          A.liveConfigId != null &&
            !o("RelayWWWInitialRolloutResolver").disableWWWInitial(
              A.liveConfigId,
            ) &&
            L != null &&
            (le = L(
              d,
              w,
              babelHelpers.extends(
                { actor_id: H },
                E !== !0 && { access_token: G },
                { config_id: A.liveConfigId },
              ),
              le,
            )),
          o("RelayRuntime").RelayFeatureFlags.ENABLE_DO_NOT_WRAP_LIVE_QUERY ||
            (le = P != null ? P(le) : le),
          h(J, le)
        );
      };
    }
    function g(e, t, n) {
      var r,
        a,
        i,
        l,
        s =
          (r =
            (a = n.metadata) == null
              ? void 0
              : a.cacheNetworkResponseWithoutRender) != null
            ? r
            : !1,
        u = (i = n.metadata) == null ? void 0 : i.freshTTLSeconds,
        c = typeof u == "number" ? u : null,
        d = (l = n.metadata) == null ? void 0 : l.cacheTTLSeconds,
        m = typeof d == "number" ? d : null;
      if (c == null && m == null) return e.ifEmpty(t);
      var p = m != null ? m : 1 / 0,
        _ = c != null ? c : p;
      return (
        _ > p,
        o("RelayRuntime").Observable.create(function (n) {
          var r = !0,
            o = !0,
            a = !1,
            i = e.subscribe({
              complete: function () {
                r
                  ? a && s
                    ? (n.complete(), t.subscribe({}))
                    : (i = t.subscribe(n))
                  : n.complete();
              },
              error: n.error,
              next: function (t) {
                var e = Array.isArray(t) ? t : [t];
                for (var i of e) {
                  if (o) {
                    var l,
                      s,
                      u =
                        typeof ((l = i.extensions) == null
                          ? void 0
                          : l.cacheTimestamp) == "number"
                          ? (s = i.extensions) == null
                            ? void 0
                            : s.cacheTimestamp
                          : null,
                      c = u == null ? 0 : (Date.now() - u) / 1e3;
                    a = c <= p;
                    var d = c <= _ && a;
                    (d && (r = !1), (o = !1));
                  }
                  a && n.next(i);
                }
              },
            });
          return function () {
            i.unsubscribe();
          };
        })
      );
    }
    function h(e, t) {
      var n;
      return t.do({
        error: function (t) {
          n.stop(t);
        },
        next: function (r) {
          var t, o, a;
          if (
            !Array.isArray(r) &&
            ((t = r.extensions) == null ? void 0 : t.server_metadata) != null &&
            ((o = r.extensions.server_metadata) == null
              ? void 0
              : o.request_start_time_ms) != null &&
            ((a = r.extensions.server_metadata) == null
              ? void 0
              : a.time_at_flush_ms) != null
          ) {
            var i = r.extensions.server_metadata,
              l = i.request_start_time_ms,
              s = i.time_at_flush_ms;
            e.serverTimestamp = { endTime: Number(s), startTime: Number(l) };
          }
          n.stop();
        },
        start: function () {
          n = o("RelayRuntime").RelayProfiler.profile("fetchRelayQuery", e);
        },
      });
    }
    function y(e, t, n, a, i, l, s, c) {
      var m;
      if (
        !d(e) ||
        ((m = i.metadata) == null ? void 0 : m.skipNativePrefetch) === !0
      )
        return o("RelayRuntime").Observable.create(function (e) {
          return e.complete();
        });
      var _ = p(e),
        f =
          (i != null &&
            i.metadata != null &&
            i.metadata.prefetchedResponseProvider) ||
          void 0;
      f != null && (typeof f.get == "function" || u(0, 2666), (f = f));
      var g = f != null ? f : r("RelayPrefetchedResponseProvider"),
        h = g.get(l, _, t, e.name, c);
      return h.map(function (e) {
        var r,
          o,
          i,
          l = String((r = e.extensions) == null ? void 0 : r.source),
          u = (o = e.extensions) == null ? void 0 : o.fetchTime,
          c = !!((i = e.extensions) != null && i.usedOfflineCache);
        return (
          s != null &&
            s({ cached: c, fetchTime: u, prefetched: !0, source: l }),
          (n.usedPrefetcher = !0),
          (n.usedCache = c),
          (n.usedDiskCache = c),
          (n.source = l),
          a && a.set(_, t, e),
          e
        );
      });
    }
    function C(e, t, n, r, a, i, l, s) {
      if (l == null)
        return o("RelayRuntime").Observable.create(function (e) {
          return e.complete();
        });
      var u = l.cache.getResponse(e, t, n, l, s);
      return u.map(function (n) {
        return (
          i != null && i({ cachedOnDisk: !0 }),
          (r.usedDiskCache = !0),
          a && a.set(p(e), t, n),
          n
        );
      });
    }
    function b(e, t, n, r, a, i, l, s) {
      return i.liveConfigId != null &&
        (o("RelayWWWInitialRolloutResolver").disableWWWInitial(
          i.liveConfigId,
        ) ||
          s == null)
        ? (l != null || u(0, 112734),
          l(
            e,
            t,
            babelHelpers.extends(
              { actor_id: n, config_id: i.liveConfigId },
              a !== !0 && { access_token: r },
            ),
          ))
        : o("RelayRuntime").Observable.create(function (e) {
            return e.complete();
          });
    }
    function v(e, t, n, r, a, i) {
      return o("RelayRuntime").Observable.create(function (o) {
        if (d(e) && !r.force) {
          var l = a.get(p(e), t);
          l && (i != null && i({ cached: !0 }), (n.usedCache = !0), o.next(l));
        }
        o.complete();
      });
    }
    function S(e, t, n, r) {
      var o = [],
        a = c(t);
      return e.do({
        complete: function () {
          o.length === 1
            ? r.set(p(t), n, o[0])
            : o.length > 1 && r.set(p(t), n, o);
        },
        next: function (t) {
          a ? r.clear() : Array.isArray(t) ? o.push.apply(o, t) : o.push(t);
        },
      });
    }
    function R(e, t, n, a, i, l, s, u, d, p, _, f, g, h, y) {
      (f === void 0 && (f = !1),
        h === void 0 && (h = !1),
        y === void 0 && (y = !1));
      var C = d;
      return o("RelayRuntime").Observable.create(function (d) {
        if (!c(a)) {
          var b =
            o("CometSmartGraphqlPrefetch").shouldAddPrefetchTag(a.name) &&
            r("MetaConfig")._("258")
              ? ["prefetch"]
              : null;
          if (C != null) {
            var v = C;
            C = function () {
              var e = null,
                t = v();
              t != null &&
                t.subscribe({
                  next: function (n) {
                    e = n;
                  },
                });
              var n = [];
              (e != null && n.push.apply(n, e),
                b != null && n.push.apply(n, b));
              var r = n.length > 0 ? n : null;
              return o("RelayRuntime").Observable.from(r);
            };
          } else
            C = function () {
              return o("RelayRuntime").Observable.from(b);
            };
        }
        (C == null &&
          (C = function () {
            return o("RelayRuntime").Observable.from(null);
          }),
          C().subscribe({
            next: function (b) {
              var C = new (r("RelayAPIRequest"))(e, p, _)
                .setMethod("POST")
                .setSkipRetry(c(a))
                .setTrackingName("RelayFBNetwork_" + a.name)
                .setTransportBuilder(t)
                .setErrorHandler(function (e) {
                  var t, n, o;
                  d.error(
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
                  d.error(
                    o("RelayRuntime").RelayError.createWarning(
                      "NetworkTimeoutError",
                      "Network request timed out. %s(%s)",
                      a.name,
                      a.id || "",
                    ),
                  );
                });
              (g && C.setPerformanceLogger(g),
                h
                  ? C.setResponseBatchChunkHandler(function (e) {
                      var t = [],
                        n;
                      for (var i of e) {
                        var l,
                          s = i.isComplete,
                          u = i.responseText;
                        n = n || s;
                        var c = void 0;
                        try {
                          (r("DTSGParser").updateFromAsyncResponse(u),
                            (c = r("RelayGraphQLRequestUtils").parsePayload(
                              u,
                            )));
                        } catch (e) {
                          var m = r("getErrorSafe")(e);
                          return (t.length > 0 && d.next(t), d.error(m));
                        }
                        if (c == null)
                          return (
                            t.length > 0 && d.next(t),
                            d.error(
                              o("RelayRuntime").RelayError.createWarning(
                                "EmptyResponseError",
                                "Parsed network response is empty. %s(%s)",
                                a.name,
                                a.id || "",
                              ),
                            )
                          );
                        if (c.errors) {
                          for (var p of c.errors)
                            if (p.severity === "CRITICAL") {
                              if (
                                p.code === 1675033 &&
                                b != null &&
                                b.includes("prefetch")
                              ) {
                                d.complete();
                                return;
                              }
                              return (
                                t.length > 0 && d.next(t),
                                d.error(
                                  r(
                                    "RelayGraphQLRequestUtils",
                                  ).createErrorFromPayload(p, a.name),
                                )
                              );
                            }
                        }
                        var _ =
                          (l = c.extensions) == null ||
                          (l = l.adaptive_graphql_metadata) == null
                            ? void 0
                            : l.prefetch_prediction_id;
                        (_ != null &&
                          o("CometSmartGraphqlPrefetch").storePredictionId(
                            a.name,
                            _,
                          ),
                          Array.isArray(c) ? t.push.apply(t, c) : t.push(c));
                      }
                      (t.length > 0 && d.next(t), n && d.complete());
                    })
                  : C.setResponseChunkHandler(function (e, t, n) {
                      var i;
                      try {
                        (r("DTSGParser").updateFromAsyncResponse(e),
                          (i = r("RelayGraphQLRequestUtils").parsePayload(e)));
                      } catch (e) {
                        return d.error(e);
                      }
                      if (!i)
                        return d.error(
                          o("RelayRuntime").RelayError.createWarning(
                            "EmptyResponseError",
                            "Parsed network response is empty. %s(%s)",
                            a.name,
                            a.id || "",
                          ),
                        );
                      if (i.errors) {
                        for (var l of i.errors)
                          if (l.severity === "CRITICAL") {
                            if (
                              l.code === 1675033 &&
                              b != null &&
                              b.includes("prefetch")
                            ) {
                              d.complete();
                              return;
                            }
                            return d.error(
                              r(
                                "RelayGraphQLRequestUtils",
                              ).createErrorFromPayload(l, a.name),
                            );
                          }
                      }
                      (d.next(i), n && d.complete());
                    }));
              var v;
              if (l != null) {
                var S = l.slice(0, 1) === "0";
                S
                  ? (v = babelHelpers.extends(
                      {},
                      u,
                      r("getAsyncParams")("POST"),
                      {
                        encrypted_variables: l.slice(1),
                        fb_api_caller_class: "RelayModern",
                        fb_api_req_friendly_name: a.name,
                        server_timestamps: !0,
                      },
                    ))
                  : (v = babelHelpers.extends(
                      {},
                      u,
                      r("getAsyncParams")("POST"),
                      {
                        encrypted_variables: l.slice(1),
                        fb_api_caller_class: "RelayModern",
                        fb_api_req_friendly_name: a.name,
                        server_timestamps: !0,
                        variables: JSON.stringify(i),
                      },
                    ));
              } else
                v = babelHelpers.extends({}, u, r("getAsyncParams")("POST"), {
                  fb_api_caller_class: "RelayModern",
                  fb_api_req_friendly_name: a.name,
                  server_timestamps: !0,
                  variables: JSON.stringify(i),
                });
              if (
                (f && delete v.__csr,
                a.id
                  ? (v.doc_id = a.id)
                  : (v.doc = r("nullthrows")(
                      a.text,
                      "RelayFBNetwork: A query should have either an id or text, found neither.",
                    )),
                b != null &&
                  b.length > 0 &&
                  (v.fb_api_analytics_tags = JSON.stringify(b)),
                s != null)
              ) {
                if ((C.setRawData(m(s, v)), y)) {
                  var R = babelHelpers.extends(
                    { "X-FB-Friendly-Name": a.name },
                    n,
                  );
                  (L(a, R), C.setRequestHeaders(R));
                }
              } else {
                var E = babelHelpers.extends(
                  {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-FB-Friendly-Name": a.name,
                  },
                  n,
                );
                (L(a, E), C.setData(v).setRequestHeaders(E));
              }
              return C.send().abort;
            },
          }));
      });
    }
    function L(e, t) {
      if (Array.isArray(e.metadata.root_field_name)) {
        var n = e.metadata.root_field_name[0];
        typeof n == "string" && (t["X-Root-Field-Name"] = n);
      }
    }
    l.default = f;
  },
  98,
);
