__d(
  "fetchAnonymousCometRoute",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "CometRouterConfig",
    "Env",
    "FBLogger",
    "HasteResponse",
    "JSScheduler",
    "PHPQuerySerializer",
    "Promise",
    "RelayAPIConfig",
    "RelayPrefetchedStreamCache",
    "XHRRequest",
    "asyncToGeneratorRuntime",
    "cometAsyncFetch",
    "cometAsyncRequestHeaders",
    "createChunkedResponseParser",
    "err",
    "getAsyncParams",
    "parseCometRouteFetchPayload",
    "promiseDone",
    "setTimeout",
    "stringifyCyclicJson",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = {},
      m = {},
      p = null,
      _ = [],
      f = 2,
      g = 3e3,
      h = !0;
    function y() {
      h = !1;
    }
    function C() {
      h = !0;
    }
    function b(e) {
      if (
        e != null &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "payloads") &&
        Object.prototype.hasOwnProperty.call(e, "sr_payload")
      )
        return e;
      var t;
      throw r("FBLogger")("comet_infra").mustfixThrow(
        "Routing payload expected, but got %s",
        (t = JSON.stringify(e)) != null ? t : "<unstringifiable>",
      );
    }
    function v(e) {
      e != null &&
        typeof e == "object" &&
        e.enable_bulk_route_fetch != null &&
        (e.enable_bulk_route_fetch === !0
          ? C()
          : e.enable_bulk_route_fetch === !1 && y());
    }
    function S(e) {
      return (
        e != null &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "enable_bulk_route_fetch") &&
        e.enable_bulk_route_fetch === !1
      );
    }
    function R(e) {
      return e != null && typeof e == "object" && Object.keys(e).length === 0;
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var o,
            a = e == null ? void 0 : e.payloads;
          P(
            (o = e == null ? void 0 : e.sr_payload) != null
              ? o
              : Object.freeze({}),
            t,
            e.log_roots,
          );
          var i = {};
          if (typeof a == "object" && a != null) {
            var l = Object.keys(a).map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    i[e] = yield r("parseCometRouteFetchPayload")(a[e]);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            yield (c || (c = n("Promise"))).all(l);
          }
          return i;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return (
        t === void 0 && (t = f),
        e().catch(function (o) {
          if (t > 0)
            return new (c || (c = n("Promise")))(function (n, o) {
              r("setTimeout")(function () {
                r("promiseDone")(k(e, t - 1), n, o);
              }, g);
            });
          throw o;
        })
      );
    }
    function I(e) {
      if (!h)
        return (c || (c = n("Promise"))).reject({
          error: { extras: { bulkRouteFetchStatus: "disabled" } },
        });
      var t = function () {
        return r("cometAsyncFetch")("/ajax/bulk-route-definitions/", {
          data: {
            route_urls: e,
            routing_namespace: (u || (u = r("Env"))).routing_namespace,
          },
          method: "POST",
          shouldShowErrorDialog: !1,
        });
      };
      return k(t).then(function (e) {
        if (S(e)) {
          var t;
          y();
          var o = r("err")("Bulk route definition fetch disabled");
          o.extra = babelHelpers.extends({}, (t = o.extra) != null ? t : {}, {
            bulkRouteFetchStatus: "disabled",
          });
        }
        if (R(e))
          return (c || (c = n("Promise"))).reject({
            extras: { bulkRouteFetchStatus: "empty_payload" },
          });
        var a = b(e);
        return L(a, "comet_route_fetch");
      });
    }
    function T(e) {
      if (e instanceof r("CometAsyncFetchError")) return e.toString();
      if (typeof e == "object") {
        var t;
        return (t = r("stringifyCyclicJson")(e)) != null
          ? t
          : "<unstringifiable>";
      }
      return e;
    }
    function D(t) {
      if (m[t] != null) return m[t];
      if (!h) return (c || (c = n("Promise"))).resolve({ error: !0 });
      var a = new (c || (c = n("Promise")))(function (e, n) {
        _.push({ reject: n, resolve: e, url: t });
      });
      return (
        (m[t] = a),
        a.finally(function () {
          return delete m[t];
        }),
        p == null &&
          (p = (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(
            function () {
              p = null;
              for (
                var e = function () {
                  var e = _.splice(
                    0,
                    r("CometRouterConfig").bulkRouteFetchBatchSize,
                  );
                  r("promiseDone")(
                    I(
                      e.map(function (e) {
                        var t = e.url;
                        return t;
                      }),
                    ),
                    function (t) {
                      e.forEach(function (e) {
                        var n = e.resolve,
                          o = e.url,
                          a = t[o];
                        a == null
                          ? (r("FBLogger")("comet_infra").mustfix(
                              "Unable to find route for %s",
                              o,
                            ),
                            n({ error: !0 }))
                          : n(a);
                      });
                    },
                    function (t) {
                      (t.extras != null &&
                      Object.prototype.hasOwnProperty.call(
                        t.extras,
                        "bulkRouteFetchStatus",
                      ) &&
                      t.extras.bulkRouteFetchStatus === "disabled"
                        ? r("FBLogger")(
                            "comet_infra",
                            "Skipping fetch since bulk route fetch is disabled",
                          )
                        : t.extras != null &&
                            Object.prototype.hasOwnProperty.call(
                              t.extras,
                              "bulkRouteFetchStatus",
                            ) &&
                            t.extras.bulkRouteFetchStatus === "empty_payload"
                          ? r("FBLogger")("comet_infra").warn(
                              "Skipping fetch: /ajax/bulk-route-definitions/ returned an empty routing payload",
                            )
                          : r("FBLogger")("comet_infra")
                              .catching(t)
                              .mustfix(
                                "Failed call to /ajax/bulk-route-definitions/: %s",
                                T(t),
                              ),
                        e.forEach(function (e) {
                          var t = e.resolve;
                          return t({ error: !0 });
                        }));
                    },
                  );
                };
                _.length > 0;
              )
                e();
            },
          )),
        a
      );
    }
    function x(e, t) {
      var n = !1;
      return function (a) {
        var i,
          l = a.trim();
        try {
          (o("CSRFGuard").exists(l) && (l = o("CSRFGuard").clean(l)),
            (i = JSON.parse(l)));
        } catch (e) {
          (n ||
            r("FBLogger")("comet_infra").mustfix(
              "Unable to parse /ajax/route-definition/ response %s, %s",
              l,
              e,
            ),
            t({ error: !0 }));
          return;
        }
        if ((!i || !i.__type) && !n) {
          var s,
            u =
              "Routing payload expected for " +
              e +
              ", but got " +
              ((s = JSON.stringify(i)) != null ? s : "<unstringifiable>");
          (r("FBLogger")("comet_infra").mustfix(u), t({ error: !0 }));
        }
        if (i.__type === "error_response") {
          t({ error: !0 });
          return;
        }
        if (i.__type === "first_response") {
          if (n)
            throw r("FBLogger")("comet_infra").mustfixThrow(
              "There cannot be two first responses to one request",
            );
          ((n = !0), N(i), t(i.payload));
        } else if (i.__type === "preloader") {
          var c = i.id,
            d = i.result;
          d
            ? o("RelayPrefetchedStreamCache").next(c, d)
            : o("RelayPrefetchedStreamCache").error(c, {});
        } else if (i.__type === "preloader_error") {
          var m = i.id;
          o("RelayPrefetchedStreamCache").error(m, {});
        }
      };
    }
    function $(e, t, a) {
      if (d[e] != null) return d[e];
      var i = function () {
          return new (c || (c = n("Promise")))(function (n, i) {
            var l = r("createChunkedResponseParser")(x(e, n)),
              c = "/ajax/route-definition/",
              d = o("cometAsyncRequestHeaders").getHeaders();
            Object.keys(d)
              .reduce(function (e, t) {
                return e.setRequestHeader(t, d[t]);
              }, new (r("XHRRequest"))(c))
              .setMethod("POST")
              .setData(
                babelHelpers.extends(
                  {
                    client_previous_actor_id: t !== "0" ? t : null,
                    route_url: e,
                    routing_namespace: (u || (u = r("Env"))).routing_namespace,
                    trace_policy: a,
                  },
                  r("getAsyncParams")("POST"),
                ),
              )
              .setResponseHandler(l)
              .setErrorHandler(function (e) {
                i(e);
              })
              .setDataSerializer((s || (s = r("PHPQuerySerializer"))).serialize)
              .send();
          });
        },
        l = k(i).then(r("parseCometRouteFetchPayload"));
      return (
        (d[e] = l),
        l.finally(function () {
          return delete d[e];
        }),
        l
      );
    }
    function P(e, t, n) {
      o("HasteResponse").handle(e, {
        source: t,
        sourceDetail: JSON.stringify(n),
      });
    }
    function N(e) {
      var t;
      if (
        (P(
          (t = e.sr_payload) != null ? t : {},
          "comet_route_first_response",
          null,
        ),
        e.preloaders && e.preloaders.length)
      )
        for (var n of e.preloaders) {
          var a;
          o("RelayPrefetchedStreamCache").registerPreloader(
            n.preloaderID,
            n.queryID,
            n.variables,
            (a = n.actorID) != null ? a : r("RelayAPIConfig").actorID,
          );
        }
      v(e);
    }
    ((l.disableBulkRouteFetch = y),
      (l.enableBulkRouteFetch = C),
      (l.assertRoutingPayload = b),
      (l.handleBulkRouteFetchToggle = v),
      (l.isEmptyRoutingPayload = R),
      (l.responseHandler = L),
      (l.retryFetchOnError = k),
      (l.fetchAnonymousCometRouteForPreload = D),
      (l.fetchAnonymousCometRouteForTransition = $),
      (l.handleSRandJSModules = P));
  },
  98,
);
