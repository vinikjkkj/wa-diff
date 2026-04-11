__d(
  "react-relay/relay-hooks/useLazyLoadQueryNode",
  [
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useFetchTrackingRef",
    "react-relay/relay-hooks/useFragmentInternal",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-relay/relay-hooks/QueryResource").getQueryCacheIdentifier,
      s = n(
        "react-relay/relay-hooks/QueryResource",
      ).getQueryResourceForEnvironment,
      u = e || (e = n("react")),
      c = u.useContext,
      d = u.useEffect,
      m = u.useState,
      p = u.useRef;
    function _(e) {
      var t,
        r = n("react-relay/relay-hooks/useRelayEnvironment")(),
        o = c(n("react-relay/relay-hooks/ProfilerContext")),
        a = s(r),
        i = m(0),
        u = i[0],
        _ = i[1],
        f = n("react-relay/relay-hooks/useFetchTrackingRef")(),
        g = f.startFetch,
        h = f.completeFetch,
        y = null,
        C = null,
        b;
      if (e.query != null) {
        var v = e.query,
          S = e.fetchObservable,
          R = e.fetchPolicy,
          L = e.fetchKey,
          E = e.renderPolicy,
          k = u + "-" + (L != null ? L : ""),
          I = l(r, v, R, E, k);
        ((y = I),
          (C = o.wrapPrepareQueryResource(function () {
            return a.prepareWithIdentifier(
              I,
              v,
              S,
              R,
              E,
              { start: g, complete: h, error: h },
              o,
            );
          })),
          (b = C.fragmentNode));
      } else b = e.fragmentNode;
      var T = p(!1);
      (d(function () {
        return function () {
          T.current = !0;
        };
      }, []),
        d(
          function () {
            if (T.current === !0) {
              ((T.current = !1),
                _(function (e) {
                  return e + 1;
                }));
              return;
            }
            if (C != null) {
              var e = a.retain(C, o);
              return function () {
                e.dispose();
              };
            }
          },
          [r, y],
        ),
        d(function () {
          C != null && a.releaseTemporaryRetain(C);
        }));
      var D = n("react-relay/relay-hooks/useFragmentInternal")(
        b,
        (t = C) == null ? void 0 : t.fragmentRef,
        e.componentDisplayName,
      );
      return D;
    }
    a.exports = _;
  },
  null,
);
