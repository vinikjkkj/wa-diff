__d(
  "CometRouterDispatcherContextFactory.react",
  [
    "CometRouterDispatcherContext",
    "react",
    "react-compiler-runtime",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useInsertionEffect,
      p = c.useMemo;
    function _(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.actorID,
        a = e.children,
        i = e.from,
        l = e.parentDispatcher,
        s = e.tracePolicy,
        c = e.url,
        d;
      if (t[0] !== n || t[1] !== i || t[2] !== l || t[3] !== s || t[4] !== c) {
        var p = { actorID: n, from: i, tracePolicy: s, url: c };
        ((d = l.withContext(p)),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = s),
          (t[4] = c),
          (t[5] = d));
      } else d = t[5];
      var _ = d,
        f;
      t[6] !== n || t[7] !== i || t[8] !== l || t[9] !== s || t[10] !== c
        ? ((f = function () {
            return l.withContext({
              actorID: n,
              from: i,
              tracePolicy: s,
              url: c,
            });
          }),
          (t[6] = n),
          (t[7] = i),
          (t[8] = l),
          (t[9] = s),
          (t[10] = c),
          (t[11] = f))
        : (f = t[11]);
      var g = r("useStable")(f),
        h;
      t[12] !== g || t[13] !== _
        ? ((h = function () {
            g.setRouterDispatcher(_.getRouterDispatcher());
          }),
          (t[12] = g),
          (t[13] = _),
          (t[14] = h))
        : (h = t[14]);
      var y;
      (t[15] !== _ ? ((y = [_]), (t[15] = _), (t[16] = y)) : (y = t[16]),
        m(h, y));
      var C;
      return (
        t[17] !== a || t[18] !== g
          ? ((C = u.jsx(r("CometRouterDispatcherContext").Provider, {
              value: g,
              children: a,
            })),
            (t[17] = a),
            (t[18] = g),
            (t[19] = C))
          : (C = t[19]),
        C
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(7),
        a,
        i;
      n[0] !== t
        ? ((a = t.children),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = d(r("CometRouterDispatcherContext"));
      if (l == null) return a;
      var s;
      return (
        n[3] !== a || n[4] !== l || n[5] !== i
          ? ((s = u.jsx(
              _,
              babelHelpers.extends({ parentDispatcher: l }, i, { children: a }),
            )),
            (n[3] = a),
            (n[4] = l),
            (n[5] = i),
            (n[6] = s))
          : (s = n[6]),
        s
      );
    }
    l.default = f;
  },
  98,
);
