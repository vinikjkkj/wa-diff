__d(
  "react-relay/relay-hooks/useQueryLoader_EXPERIMENTAL",
  [
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useIsMountedRef",
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
      d = s.useInsertionEffect,
      m = s.useRef,
      p = s.useState,
      _ = n("relay-runtime").getRequest,
      f = { kind: "NullQueryReference" };
    function g(e) {
      if (e.kind === "PreloadableConcreteRequest")
        return e.params.metadata.live !== void 0;
      var t = _(e);
      return t.params.metadata.live !== void 0;
    }
    var h = 1e3 * 60 * 5;
    function y(e, t) {
      var r = t != null ? t : f,
        o = n("react-relay/relay-hooks/useRelayEnvironment")(),
        a = n("react-relay/relay-hooks/useIsMountedRef")(),
        i = m(null);
      i.current == null && (i.current = new Set([r]));
      var s = p(function () {
          return r;
        }),
        _ = s[0],
        y = s[1],
        C = p(function () {
          return r;
        }),
        b = C[0],
        v = C[1];
      if (r !== b) {
        var S;
        ((S = i.current) == null || S.add(r), v(r), y(r));
      }
      var R = u(
          function () {
            if (a.current) {
              var e;
              ((e = i.current) == null || e.add(f), y(f));
            }
          },
          [a],
        ),
        L = u(
          function (t, n) {
            var r, s;
            if (a.current) {
              var u =
                  n != null &&
                  Object.prototype.hasOwnProperty.call(n, "__environment")
                    ? {
                        __nameForWarning: n.__nameForWarning,
                        fetchPolicy: n.fetchPolicy,
                        networkCacheConfig: n.networkCacheConfig,
                      }
                    : n,
                c = l(
                  (r = n == null ? void 0 : n.__environment) != null ? r : o,
                  e,
                  t,
                  u,
                );
              ((s = i.current) == null || s.add(c), y(c));
            }
          },
          [o, e, y, a],
        ),
        E = u(function (t, n) {
          var e,
            r = (e = i.current) != null ? e : new Set();
          for (var o of r)
            o !== n &&
              o.kind !== "NullQueryReference" &&
              (g(t)
                ? o.dispose && o.dispose()
                : o.releaseQuery && o.releaseQuery());
        }, []),
        k = m(null);
      return (
        c(
          function () {
            return (
              E(e, _),
              k.current != null &&
                (clearTimeout(k.current), (k.current = null)),
              function () {
                k.current = setTimeout(function () {
                  E(e, null);
                }, h);
              }
            );
          },
          [e, _],
        ),
        d(
          function () {
            return function () {
              (k.current && clearTimeout(k.current),
                (k.current = null),
                E(e, null));
            };
          },
          [e],
        ),
        [_.kind === "NullQueryReference" ? null : _, L, R]
      );
    }
    a.exports = y;
  },
  null,
);
