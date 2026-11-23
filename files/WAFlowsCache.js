__d(
  "WAFlowsCache",
  [
    "invariant",
    "FBLogger",
    "WAFlowsDomainUtils",
    "WAFlowsInitEnvironmentTypes",
    "WebAsyncStorage",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "welj_flow_state",
      u = "message_id",
      c = "surface_request",
      d = 1296e6;
    function m(e, t, n) {
      return new Promise(function (o, a) {
        r("WebAsyncStorage").getItem(b(e, t, n), function (e, t) {
          if (e) {
            a(e);
            return;
          }
          t != null
            ? o({ internal: t.internal, external: t.external })
            : o(null);
        });
      });
    }
    function p(e, t, n, a) {
      var i = e.getFlowId();
      i != null || s(0, 78157);
      var l = g(h(t, e));
      r("WebAsyncStorage").setItem(b(i, n, a), l, function (e) {
        e instanceof Error &&
          o("WAFlowsDomainUtils").isOndemandFlowsUrl() &&
          r("FBLogger")("wa_flows")
            .catching(e)
            .mustfix("[Cache] Failed to update the cache.");
      });
    }
    function _(e, t, n) {
      r("WebAsyncStorage").removeItem(b(e, t, n), function (e) {});
    }
    async function f() {
      var e = await y(),
        t = await C(e),
        n = Date.now(),
        o = Array.from(t.entries())
          .filter(function (e) {
            var t = e[0],
              r = e[1],
              o = r[0],
              a = r[1];
            return a.cache.ttl < n;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1],
              r = n[0],
              o = n[1];
            return r;
          });
      return (r("WebAsyncStorage").multiRemove(o, function (e) {}), o.length);
    }
    function g(e) {
      return babelHelpers.extends({}, e, {
        internal: babelHelpers.extends({}, e.internal, {
          isOverlayVisible: !1,
          scrollConfig: void 0,
        }),
      });
    }
    function h(e, t) {
      var n = Date.now() + d;
      return t.getScreens().reduce(
        function (n, r) {
          var o = {};
          return (
            Object.keys(e.external[r].form).forEach(function (n) {
              var a;
              (a = t.getScreenMeta(r).privateFields) != null && a.has(n)
                ? (o[n] = null)
                : (o[n] = e.external[r].form[n]);
            }),
            (n.external[r] = {
              data: e.external[r].data,
              form: o,
              external_data: e.external[r].external_data,
            }),
            n
          );
        },
        { internal: e.internal, external: {}, cache: { ttl: n } },
      );
    }
    function y() {
      return new Promise(function (t, n) {
        r("WebAsyncStorage").getAllKeys(function (r, o) {
          if (r) {
            n(r);
            return;
          }
          if (o) {
            var a = o.filter(function (t) {
              return t.startsWith(e);
            });
            t(a);
          }
        });
      });
    }
    function C(e) {
      return new Promise(function (t, n) {
        r("WebAsyncStorage").multiGet(e, function (e, r) {
          if (e) {
            n(e);
            return;
          }
          t(r);
        });
      });
    }
    function b(t, n, r) {
      var a = e + "_" + t + "_" + u + "_" + n;
      return r !== void 0 &&
        String(r).toLowerCase() ===
          String(
            o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType
              .FAB_SHOPPING,
          )
        ? a +
            "_" +
            c +
            "_" +
            String(
              o("WAFlowsInitEnvironmentTypes").WAFlowsShoppingSurfaceRequestType
                .FAB_SHOPPING,
            )
        : a;
    }
    ((l.getStateFromCache = m),
      (l.updateStateCache = p),
      (l.clearStateCache = _),
      (l.clearExpiredCachedStates = f));
  },
  98,
);
