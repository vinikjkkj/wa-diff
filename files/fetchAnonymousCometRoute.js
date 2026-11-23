__d(
  "fetchAnonymousCometRoute",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "CometPreloaderInit",
    "CometRouterConfig",
    "Env",
    "FBLogger",
    "HasteResponse",
    "JSScheduler",
    "PHPQuerySerializer",
    "RelayPrefetchedStreamCache",
    "XHRRequest",
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
      c = {},
      d = {},
      m = null,
      p = [],
      _ = 2,
      f = 3e3,
      g = !0;
    function h() {
      g = !1;
    }
    function y() {
      g = !0;
    }
    function C(e) {
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
    function b(e) {
      e != null &&
        typeof e == "object" &&
        e.enable_bulk_route_fetch != null &&
        (e.enable_bulk_route_fetch === !0
          ? y()
          : e.enable_bulk_route_fetch === !1 && h());
    }
    function v(e) {
      return (
        e != null &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "enable_bulk_route_fetch") &&
        e.enable_bulk_route_fetch === !1
      );
    }
    function S(e) {
      return e != null && typeof e == "object" && Object.keys(e).length === 0;
    }
    async function R(e, t) {
      var n,
        o = e == null ? void 0 : e.payloads;
      x(
        (n = e == null ? void 0 : e.sr_payload) != null ? n : Object.freeze({}),
        t,
        e.log_roots,
      );
      var a = {};
      if (typeof o == "object" && o != null) {
        var i = Object.keys(o).map(async function (e) {
          a[e] = await r("parseCometRouteFetchPayload")(o[e]);
        });
        await Promise.all(i);
      }
      return a;
    }
    function L(e, t) {
      return (
        t === void 0 && (t = _),
        e().catch(function (n) {
          if (t > 0)
            return new Promise(function (n, o) {
              r("setTimeout")(function () {
                r("promiseDone")(L(e, t - 1), n, o);
              }, f);
            });
          throw n;
        })
      );
    }
    function E(e) {
      if (!g)
        return Promise.reject({
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
      return L(t).then(function (e) {
        if (v(e)) {
          var t;
          h();
          var n = r("err")("Bulk route definition fetch disabled");
          n.extra = babelHelpers.extends({}, (t = n.extra) != null ? t : {}, {
            bulkRouteFetchStatus: "disabled",
          });
        }
        if (S(e))
          return Promise.reject({
            extras: { bulkRouteFetchStatus: "empty_payload" },
          });
        var o = C(e);
        return R(o, "comet_route_fetch");
      });
    }
    function k(e) {
      if (e instanceof r("CometAsyncFetchError")) return e.toString();
      if (typeof e == "object") {
        var t;
        return (t = r("stringifyCyclicJson")(e)) != null
          ? t
          : "<unstringifiable>";
      }
      return e;
    }
    function I(t) {
      if (d[t] != null) return d[t];
      if (!g) return Promise.resolve({ error: !0 });
      var n = new Promise(function (e, n) {
        p.push({ reject: n, resolve: e, url: t });
      });
      return (
        (d[t] = n),
        n.finally(function () {
          return delete d[t];
        }),
        m == null &&
          (m = (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(
            function () {
              m = null;
              for (
                var e = function () {
                  var e = p.splice(
                    0,
                    r("CometRouterConfig").bulkRouteFetchBatchSize,
                  );
                  r("promiseDone")(
                    E(
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
                                k(t),
                              ),
                        e.forEach(function (e) {
                          var t = e.resolve;
                          return t({ error: !0 });
                        }));
                    },
                  );
                };
                p.length > 0;
              )
                e();
            },
          )),
        n
      );
    }
    function T(e, t) {
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
              String(e),
            ),
            t({ error: !0 }));
          return;
        }
        if (!i || !i.__type) {
          if (!n) {
            var s,
              u =
                "Routing payload expected for " +
                e +
                ", but got " +
                ((s = JSON.stringify(i)) != null ? s : "<unstringifiable>");
            (r("FBLogger")("comet_infra").mustfix(u), t({ error: !0 }));
          }
          return;
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
          ((n = !0), $(i), t(i.payload));
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
    function D(e, t, n) {
      if (c[e] != null) return c[e];
      var a = function () {
          return new Promise(function (a, i) {
            var l = r("createChunkedResponseParser")(T(e, a)),
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
                    trace_policy: n,
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
        i = L(a).then(r("parseCometRouteFetchPayload"));
      return (
        (c[e] = i),
        i.finally(function () {
          return delete c[e];
        }),
        i
      );
    }
    function x(e, t, n) {
      o("HasteResponse").handle(e, {
        source: t,
        sourceDetail: JSON.stringify(n),
      });
    }
    function $(e) {
      var t;
      if (
        (x(
          (t = e.sr_payload) != null ? t : {},
          "comet_route_first_response",
          null,
        ),
        e.preloaders && e.preloaders.length)
      )
        for (var n of e.preloaders) o("CometPreloaderInit").initPreloader(n);
      b(e);
    }
    ((l.disableBulkRouteFetch = h),
      (l.enableBulkRouteFetch = y),
      (l.assertRoutingPayload = C),
      (l.handleBulkRouteFetchToggle = b),
      (l.isEmptyRoutingPayload = S),
      (l.responseHandler = R),
      (l.retryFetchOnError = L),
      (l.fetchAnonymousCometRouteForPreload = I),
      (l.fetchAnonymousCometRouteForTransition = D),
      (l.handleSRandJSModules = x));
  },
  98,
);
