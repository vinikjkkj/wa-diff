__d(
  "useFragmentNodes_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/relay-hooks/legacy/FragmentResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(t, n, a) {
      var i = r("react-relay/relay-hooks/useRelayEnvironment")(),
        l = o(
          "react-relay/relay-hooks/legacy/FragmentResource",
        ).getFragmentResourceForEnvironment(i),
        s = d(!1),
        u = m(0),
        p = u[1],
        g = f(t, n),
        h = d(0),
        y = d(0),
        C = _(i),
        b = _(g),
        v = C || b,
        S = m(n),
        R = S[0],
        L = S[1],
        E = Object.keys(n).filter(function (e) {
          return !Object.prototype.hasOwnProperty.call(t, e);
        }),
        k = E.some(function (e) {
          return R[e] !== n[e];
        }),
        I = E.some(function (e) {
          return !o("relay-runtime").isScalarAndEqual(R[e], n[e]);
        }),
        T = v || I;
      (T && y.current++, v && h.current++, k && L(n));
      var D = l.readSpec(t, n, a),
        x = d(!0);
      function $() {
        x.current = !0;
        var e = l.checkMissedUpdatesSpec(D);
        e && N();
      }
      function P() {
        x.current = !1;
      }
      function N() {
        var e;
        s.current === !1 ||
          x.current === !1 ||
          ((y.current = ((e = y.current) != null ? e : 0) + 1),
          p(function (e) {
            return e + 1;
          }));
      }
      c(
        function () {
          s.current = !0;
          var e = l.subscribeSpec(D, N);
          return function () {
            ((s.current = !1), e.dispose());
          };
        },
        [h.current],
      );
      var M = (e || (e = r("mapObject")))(D, function (e, t) {
        return e.data;
      });
      return {
        data: M,
        disableStoreUpdates: P,
        enableStoreUpdates: $,
        shouldUpdateGeneration: y.current,
      };
    }
    function _(e) {
      var t = m(e),
        n = t[0],
        r = t[1],
        o = n !== e;
      return (o && r(e), o);
    }
    function f(t, n) {
      return JSON.stringify(
        o("relay-runtime").stableCopy(
          (e || (e = r("mapObject")))(t, function (e, t) {
            var r = n[t];
            return o("relay-runtime").getFragmentIdentifier(e, r);
          }),
        ),
      );
    }
    l.default = p;
  },
  98,
);
