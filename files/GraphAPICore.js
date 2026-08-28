__d(
  "GraphAPICore",
  [
    "errorCode",
    "invariant",
    "AdsManagerConstURIUtils",
    "ApiClient",
    "ErrorSerializer",
    "FBLogger",
    "FBTraceIDsForFailedGraphAPIRequests",
    "GraphAPIPerfLogging",
    "GraphAPIPreloadingOnlyMode",
    "JSResourceForInteraction",
    "Promise",
    "RequestConstants",
    "RequestProcessorDefault",
    "SecuredActionDataFromErrorResponse",
    "SecuredActionUtils",
    "UrlMap",
    "emptyFunction",
    "err",
    "getErrorFromAPIResponse",
    "guid",
    "justknobx",
    "mixInEventEmitter",
    "performanceNow",
    "preloadedGraphAPI",
    "promiseDone",
    "sdk.URI",
    "setTimeout",
    "sprintf",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = r("JSResourceForInteraction")(
        "securedActionTriggerChallenge",
      ).__setRef("GraphAPICore"),
      m = 500,
      p = 960,
      _ = window.location.href.indexOf("nobatch") > -1,
      f = !1,
      g = [],
      h = null,
      y = 1,
      C,
      b = T(r("RequestProcessorDefault"));
    function v(e) {
      var t = e.method + ":" + e.name,
        n = e.error,
        o = (n && (n.error_user_msg || n.message)) || "Unknown error",
        a = n.code || "";
      return (
        n.error_subcode && (a += "." + n.error_subcode),
        r("sprintf")(
          "%s%s | (%s) %s | URI: %s%s%s%s",
          e.source ? e.source + " | " : "",
          t,
          a,
          o,
          e.path,
          e.api_fbtrace_id ? " | fbtrace: " + e.api_fbtrace_id : "",
          n != null && n.fbtrace_id
            ? " | wwwRequestID: " + (n == null ? void 0 : n.fbtrace_id)
            : "",
          n != null && n.opes_mids
            ? " | opes_mids: " + n.opes_mids.toString()
            : "",
        )
      );
    }
    function S(e) {
      g.push(e);
    }
    function R(e) {
      return g.some(function (t) {
        return t(e);
      });
    }
    function L(e) {
      (e >= 1 || u(0, 2348), (y = e));
    }
    function E(e) {
      (e &&
        C &&
        r("FBLogger")("graph_api").warn(
          "You are replacing an active response injector!",
        ),
        (C = e));
    }
    function k() {
      f = !0;
    }
    function I() {
      f = !1;
    }
    function T(e) {
      return (
        b instanceof r("RequestProcessorDefault") ||
          e === r("RequestProcessorDefault") ||
          u(0, 2349),
        (b = new e(P)),
        b
      );
    }
    function D() {
      b = T(r("RequestProcessorDefault"));
    }
    function x(e, t) {
      if (e.earlyRejectionError != null) {
        r("setTimeout")(function () {
          return t({ error: e.earlyRejectionError });
        }, 0);
        return;
      }
      if (C) {
        var a = C(e);
        if (a) {
          r("setTimeout")(function () {
            return a.response != null ? t(a.response) : b.scheduleRequest(e, t);
          }, a.latency || 0);
          return;
        }
      }
      if (e.preloadInfo != null) {
        var i = e.preloadInfo,
          l = babelHelpers.extends({}, e, {
            preloadInfo: i,
            go: function () {
              return new (c || (c = n("Promise")))(function (t) {
                return b.scheduleRequest(e, t);
              });
            },
          });
        r("promiseDone")(o("preloadedGraphAPI").preloadedGraphAPI(l), t);
        return;
      }
      (z.emit("start", babelHelpers.extends({}, e)), b.scheduleRequest(e, t));
    }
    function $(e) {
      return (
        Array.isArray(e) &&
        e.every(function (e) {
          return (
            e.method.toLowerCase() === "get" &&
            (o("AdsManagerConstURIUtils").shouldRouteToAMReadRegions(
              e.relative_url,
            ) ||
              !o("AdsManagerConstURIUtils").shouldRouteToAMWriteRegions(
                e.relative_url,
              ))
          );
        })
      );
    }
    function P(e, t) {
      var n;
      if (o("GraphAPIPreloadingOnlyMode").isEnabled()) {
        r("FBLogger")("graph_api").info(
          "Attempted and canceled API request for a %s, options: %s",
          e.preloadInfo && e.preloadInfo.isScenarioOngoing()
            ? "critical request"
            : "non-critical request",
          JSON.stringify(e),
        );
        return;
      }
      var a = (!e.batched && (!f || R(e))) || _,
        i = new (r("sdk.URI"))(o("UrlMap").resolve("graph_domain"))
          .setPath(e.path)
          .toString(),
        l =
          e.method.toLowerCase() === "get" ||
          $((n = e.params) == null ? void 0 : n.batch);
      (o("AdsManagerConstURIUtils").shouldRouteToAMReadRegions(i) && l
        ? (e.params = babelHelpers.extends({}, e.params, {
            ads_manager_read_regions: !0,
          }))
        : o("AdsManagerConstURIUtils").shouldRouteToAMWriteRegions(i, l) &&
          (e.params = babelHelpers.extends({}, e.params, {
            ads_manager_write_regions: !0,
          })),
        a
          ? r("ApiClient").graph(e.path, e.method, e.params, t)
          : r("ApiClient").scheduleBatchCall(e.path, e.method, e.params, t));
    }
    function N(t, a) {
      a === void 0 && (a = 1);
      var i = (e || (e = r("performanceNow")))();
      return (
        h && !t.priority && (t.priority = h),
        new (c || (c = n("Promise")))(function (n, l) {
          if (
            ((t.params = babelHelpers.extends({}, t.params, {
              xref: r("guid")(),
              _reqName: t.name,
              _priority: t.priority,
            })),
            t.index != null && (t.params._index = t.index),
            t.source && (t.params._reqSrc = t.source),
            a < 1 || a > t.max_attempts)
          ) {
            l(O({ error: 1, error_subcode: 1357005 }));
            return;
          }
          (a > 1 && (t.params._retry = a - 1),
            x(t, function (s) {
              var u = r("getErrorFromAPIResponse")(s),
                c = s == null ? void 0 : s.__fb_trace_id__,
                p = s == null ? void 0 : s.__www_request_id__,
                _ = babelHelpers.extends({}, t, {
                  api_fbtrace_id: c,
                  www_request_id: p,
                  attempt: a,
                  request_time: Math.round(
                    (e || (e = r("performanceNow")))() - i,
                  ),
                  start_time: i,
                });
              if (u) {
                var f = babelHelpers.extends({}, _, { error: u }),
                  g = u.error_subcode,
                  h = u.error_user_msg;
                if (
                  !r("justknobx")._("4146") &&
                  typeof g == "number" &&
                  h != null &&
                  o("SecuredActionUtils").isReauthenticationErrorCode(g)
                ) {
                  var y = o(
                    "SecuredActionDataFromErrorResponse",
                  ).securedActionDataFromErrorResponseString(h);
                  r("promiseDone")(
                    d.load().then(function (e) {
                      e(y, {
                        onExit: function () {
                          M(l, t, u, f, p, c);
                        },
                        onSuccess: function () {
                          n(N(t, a));
                        },
                      });
                    }),
                  );
                  return;
                }
                a < t.max_attempts && (w(u) || t.canRetry)
                  ? (r("setTimeout")(
                      function () {
                        n(N(t, a + 1));
                      },
                      Math.pow(2, a - 1) * m,
                    ),
                    z.emit("retry", f))
                  : M(l, t, u, f, p, c);
              } else {
                var C;
                F(t, s);
                var b =
                  (C = s == null ? void 0 : s.__preloaded) != null ? C : !1;
                (s == null || delete s.__preloaded,
                  s == null || delete s.__fb_trace_id__,
                  s == null || delete s.__www_request_id__,
                  n(s),
                  z.emit(
                    "success",
                    babelHelpers.extends({}, _, { preloaded: b }),
                  ));
              }
            }));
        })
      );
    }
    function M(e, t, n, a, i, l) {
      if (
        (l && o("FBTraceIDsForFailedGraphAPIRequests").insert(l), !H(t.params))
      ) {
        var s, u, c, d;
        z.emit("error", a);
        var m =
            (s = (u = t.params) == null ? void 0 : u._reqSrc) != null
              ? s
              : "unknown",
          p = n.code,
          _ = n.error_subcode,
          f =
            (c = (d = t.params) == null ? void 0 : d._reqName) != null ? c : "",
          g = t.method + ":" + f,
          h = i != null ? i : l,
          y = r("FBLogger")("graph_api").addToCategoryKey(m);
        h != null && (y = y.addMetadata("GRAPH_API", "REQUEST_ID", h));
        var C = null;
        (n.opes_mids != null &&
          Array.isArray(n.opes_mids) &&
          ((C = n.opes_mids[0]),
          n.opes_mids.forEach(function (e) {
            y = y.addMetadata("OPES", "MID", e);
          }),
          C != null && y.addToCategoryKey(m + ":" + C)),
          y.warn(
            "Graph API failed: %s,%s,%s,%s,%s",
            m,
            p,
            _,
            g,
            C != null ? C : "no opes mid",
          ));
      }
      e(t.earlyRejectionError == null ? O(n) : n);
    }
    function w(e) {
      return !!(
        e.is_transient ||
        e.error_subcode === 1357045 ||
        e.error_subcode === 1357051 ||
        !e.code ||
        e.code === p
      );
    }
    function A(e, t) {
      if (t) {
        var n = new (r("sdk.URI"))(t);
        return function () {
          return W(e.name, n.getPath(), n.getQueryData(), !1, e.source);
        };
      }
    }
    function F(e, t) {
      if (!(Array.isArray(t) || !t.paging)) {
        if (t.paging.next) {
          var n = e.params;
          n != null &&
          n.after != null &&
          t.paging.cursors != null &&
          n.after === t.paging.cursors.after
            ? r("FBLogger")("graph_api").mustfix(
                "[%s] Next page is the same as the current page! This should never happen. Ignoring the next page URL. Please report an API bug!",
                e.name,
              )
            : (t.next = A(e, t.paging.next));
        }
        var o = A(e, t.paging.previous);
        o && (t.previous = o);
      }
    }
    function O(e) {
      var t = r("err")(e.message);
      return (
        r("ErrorSerializer").aggregateError(t, { type: "warn" }),
        Object.assign(t, e),
        t
      );
    }
    function B(e, t, n, r, o, a, i, l) {
      return N({
        batched: r,
        canRetry: !1,
        max_attempts: 1,
        method: "delete",
        name: e,
        params: n,
        path: t,
        source: o,
        preloadInfo: a,
        priority: i,
        earlyRejectionError: l,
      });
    }
    function W(e, t, n, r, o, a, i, l, s, u, c) {
      return (
        l === void 0 && (l = !1),
        N({
          batched: r,
          canRetry: l,
          max_attempts: y,
          method: "get",
          name: e,
          params: n,
          path: t,
          source: o,
          preloadInfo: a,
          priority: i,
          earlyRejectionError: s,
          cacheInfo: u,
          clientMetadata: c,
        })
      );
    }
    function q(e, t, n, r, o, a, i, l, s) {
      return (
        l === void 0 && (l = !1),
        N({
          batched: r,
          canRetry: l,
          max_attempts: l ? y : 1,
          method: "post",
          name: e,
          params: n,
          path: t,
          source: o,
          preloadInfo: a,
          priority: i,
          earlyRejectionError: s,
        })
      );
    }
    function U(e, t, a, i) {
      var l = new (r("sdk.URI"))(o("UrlMap").resolve("graph_domain"))
        .setPath(t)
        .setQueryData({
          access_token: r("ApiClient").getAccessToken(),
          suppress_http_code: 1,
        })
        .toString();
      return new (c || (c = n("Promise")))(function (n, s) {
        if (i != null) {
          s(i);
          return;
        }
        var u = new XMLHttpRequest();
        (u.open("POST", l, !0),
          u.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          r("ApiClient").getWithCredentials() && (u.withCredentials = !0));
        var c = function (l) {
          var i;
          try {
            i = JSON.parse(u.responseText);
          } catch (e) {
            s(r("err")("Invalid JSON: " + u.responseText));
            return;
          }
          var c = r("getErrorFromAPIResponse")(i);
          if (
            (!c && l && (c = o("RequestConstants").PARSE_ERROR_TEMPLATE), c)
          ) {
            var d, m;
            s(O(c));
            var p = (d = i) == null ? void 0 : d.__fb_trace_id__,
              _ = (m = i) == null ? void 0 : m.__www_request_id__;
            z.emit("error", {
              name: e,
              path: t,
              method: "POST",
              params: a,
              error: c,
              api_fbtrace_id: p,
              www_request_id: _,
            });
            var f = c.code,
              g = c.error_subcode,
              h = null,
              y = r("FBLogger")("graph_api");
            (c.opes_mids != null &&
              Array.isArray(c.opes_mids) &&
              ((h = c.opes_mids[0]),
              c.opes_mids.forEach(function (e) {
                y = y.addMetadata("OPES", "MID", e);
              }),
              h != null && y.addToCategoryKey(h)),
              y.warn(
                "Graph POST API failed: %s,%s,%s",
                f,
                g,
                h != null ? h : "no opes mid",
              ));
          } else n(i);
        };
        ((u.onload = function () {
          c(!1);
        }),
          (u.onerror = function () {
            c(!0);
          }),
          u.send(a));
      });
    }
    function V(e, t) {
      var n = {
        batch: t.map(function (e) {
          var t = e.request;
          !(t.params instanceof FormData) || u(0, 2350);
          var n = r("ApiClient").prepareBatchParams([
              t.path,
              t.method,
              t.params,
              function () {},
            ]),
            o = n.body,
            a = n.relative_url;
          return {
            name: e.name,
            method: t.method,
            body: o,
            relative_url: a,
            omit_response_on_success: !1,
          };
        }),
      };
      return q(e, "/", n, !1);
    }
    function H(e) {
      return !!(
        e &&
        e.execution_options &&
        e.execution_options.some(function (e) {
          return e === "validate_only";
        })
      );
    }
    function G(e, t) {
      ((h = e), t(), (h = null));
    }
    var z = {
      blocklist: S,
      isBlocklistedForBatching: R,
      disableBatching: I,
      enableBatching: k,
      isRecoverableError: w,
      runInSpecifiedPriority: G,
      promiseBatch: V,
      promiseDelete: B,
      promiseGet: W,
      promisePost: q,
      promisePostFormData: U,
      disableDefaultErrorHandler: function () {
        return j && j.remove();
      },
      disableDefaultRetryLogHandler: function () {
        return K && K.remove();
      },
      registerProcessor: T,
      resetRequestProcessor: D,
      setMaxAPIRequestAttempts: L,
      setResponseInjector: E,
      addListener: r("emptyFunction"),
      emit: r("emptyFunction"),
      listeners: r("emptyFunction").thatReturns([]),
    };
    r("mixInEventEmitter")(z, {
      start: !0,
      error: !0,
      retry: !0,
      success: !0,
      preloaded: !0,
    });
    var j = z.addListener("error", function (e) {
        return console.error("[GraphAPICore] " + v(e));
      }),
      K = z.addListener("retry", function (e) {});
    o("GraphAPIPerfLogging").register();
    var Q = z;
    l.default = Q;
  },
  98,
);
