__d(
  "react-relay/ReactRelayLocalQueryRenderer",
  [
    "areEqual",
    "react",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayQueryRendererContext",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = e || (e = n("react")),
      u = n("relay-runtime").createOperationDescriptor,
      c = n("relay-runtime").deepFreeze,
      d = n("relay-runtime").getRequest,
      m = s.useLayoutEffect,
      p = s.useState,
      _ = s.useRef,
      f = s.useMemo,
      g = { rootIsQueryRenderer: !0 };
    function h(e) {
      var t = s.useRef(e);
      return (
        (l || (l = n("areEqual")))(t.current, e) || (t.current = e),
        t.current
      );
    }
    function y(e) {
      var t = e.environment,
        r = e.query,
        o = e.variables,
        a = e.render,
        i = h(o),
        l = f(
          function () {
            var e = d(r);
            return u(e, i);
          },
          [r, i],
        ),
        c = f(
          function () {
            return { environment: t };
          },
          [t],
        ),
        y = _(null),
        C = p(null),
        b = C[1],
        v = _(null),
        S = f(
          function () {
            t.check(l);
            var e = t.lookup(l.fragment);
            y.current = e.data;
            var n = t.retain(l),
              r = t.subscribe(e, function (e) {
                ((y.current = e.data), b(y.current));
              }),
              o = !1;
            function a() {
              o || ((o = !0), (v.current = null), n.dispose(), r.dispose());
            }
            return (v.current && v.current(), (v.current = a), e);
          },
          [t, l],
        );
      return (
        m(
          function () {
            var e = v.current;
            return function () {
              e && e();
            };
          },
          [S],
        ),
        s.jsx(n("react-relay/ReactRelayContext").Provider, {
          value: c,
          children: s.jsx(
            n("react-relay/ReactRelayQueryRendererContext").Provider,
            { value: g, children: a({ props: y.current }) },
          ),
        })
      );
    }
    ((y.displayName = y.name + " [from " + a.id + "]"), (a.exports = y));
  },
  null,
);
