__d(
  "react-relay/relay-hooks/useQueryLoader",
  [
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useQueryLoader_EXPERIMENTAL",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-relay/relay-hooks/loadQuery").loadQuery,
      s = e || (e = n("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState,
      p = n("relay-runtime").RelayFeatureFlags,
      _ = n("relay-runtime").getRequest,
      f = { kind: "NullQueryReference" };
    function g(e) {
      if (e.kind === "PreloadableConcreteRequest")
        return e.params.metadata.live !== void 0;
      var t = _(e);
      return t.params.metadata.live !== void 0;
    }
    function h(e, t) {
      return p.ENABLE_ACTIVITY_COMPATIBILITY
        ? n("react-relay/relay-hooks/useQueryLoader_EXPERIMENTAL")(e, t)
        : y(e, t);
    }
    function y(e, t) {
      var r = t != null ? t : f,
        o = n("react-relay/relay-hooks/useRelayEnvironment")(),
        a = n("react-relay/relay-hooks/useIsMountedRef")(),
        i = d(new Set([r])),
        s = m(function () {
          return r;
        }),
        p = s[0],
        _ = s[1],
        h = m(function () {
          return r;
        }),
        y = h[0],
        C = h[1];
      r !== y && (i.current.add(r), C(r), _(r));
      var b = u(
          function () {
            a.current && (i.current.add(f), _(f));
          },
          [a],
        ),
        v = u(
          function (t, n) {
            var r =
              n != null &&
              Object.prototype.hasOwnProperty.call(n, "__environment")
                ? {
                    __nameForWarning: n.__nameForWarning,
                    fetchPolicy: n.fetchPolicy,
                    networkCacheConfig: n.networkCacheConfig,
                  }
                : n;
            if (a.current) {
              var s,
                u = l(
                  (s = n == null ? void 0 : n.__environment) != null ? s : o,
                  e,
                  t,
                  r,
                );
              (i.current.add(u), _(u));
            }
          },
          [o, e, _, a],
        ),
        S = d(!1);
      return (
        c(function () {
          return function () {
            S.current = !0;
          };
        }, []),
        c(
          function () {
            if (S.current === !0) {
              ((S.current = !1),
                p.kind !== "NullQueryReference" &&
                  v(p.variables, {
                    fetchPolicy: p.fetchPolicy,
                    networkCacheConfig: p.networkCacheConfig,
                  }));
              return;
            }
            var t = i.current;
            if (a.current)
              for (var n of t) {
                if (n === p) break;
                (t.delete(n),
                  n.kind !== "NullQueryReference" &&
                    (g(e)
                      ? n.dispose && n.dispose()
                      : n.releaseQuery && n.releaseQuery()));
              }
          },
          [p, a, v, e],
        ),
        c(
          function () {
            return function () {
              for (var t of i.current)
                t.kind !== "NullQueryReference" &&
                  (g(e)
                    ? t.dispose && t.dispose()
                    : t.releaseQuery && t.releaseQuery());
            };
          },
          [e],
        ),
        [p.kind === "NullQueryReference" ? null : p, v, b]
      );
    }
    a.exports = h;
  },
  null,
);
