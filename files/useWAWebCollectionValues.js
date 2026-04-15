__d(
  "useWAWebCollectionValues",
  [
    "invariant",
    "WANullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState;
    function p(e, t, n, a) {
      var i = o("react-compiler-runtime").c(2),
        l = _(e, t, n, a),
        s;
      i[0] !== l
        ? ((s = function () {
            return r("WANullthrows")(
              l,
              "[useCollectionValues] Expected model to be present in collection",
            );
          }),
          (i[0] = l),
          (i[1] = s))
        : (s = i[1]);
      var u = m(s),
        c = u[0],
        d = u[1];
      return (l != null && l !== c && d(l), c);
    }
    function _(e, t, n, r) {
      var a = o("react-compiler-runtime").c(19),
        i;
      a[0] !== e
        ? ((i = Array.isArray(e) ? e : [e]), (a[0] = e), (a[1] = i))
        : (i = a[1]);
      var l = i,
        u,
        c;
      typeof n == "function" && Array.isArray(r)
        ? ((u = n), (c = r))
        : (Array.isArray(n) || s(0, 72179), (u = f), (c = n));
      var d;
      a[2] !== l || a[3] !== t
        ? ((d = function () {
            return t == null ? null : y(l, t);
          }),
          (a[2] = l),
          (a[3] = t),
          (a[4] = d))
        : (d = a[4]);
      var p = m(d),
        _ = p[0],
        g = p[1],
        C;
      a[5] !== l || a[6] !== t || a[7] !== _
        ? ((C = function () {
            var e = t == null ? null : y(l, t);
            (e !== _ ||
              (e == null ? void 0 : e.id.toString()) !==
                (_ == null ? void 0 : _.id.toString())) &&
              g(e);
          }),
          (a[5] = l),
          (a[6] = t),
          (a[7] = _),
          (a[8] = C))
        : (C = a[8]);
      var b = C;
      b();
      var v;
      if (a[9] !== b || a[10] !== l) {
        var S;
        (a[12] !== b
          ? ((S = function (t) {
              return {
                source: t,
                eventOrEvents: "add",
                callback: function () {
                  b();
                },
              };
            }),
            (a[12] = b),
            (a[13] = S))
          : (S = a[13]),
          (v = l.map(S)),
          (a[9] = b),
          (a[10] = l),
          (a[11] = v));
      } else v = a[11];
      o("useWAWebListener").useListeners(v);
      var R;
      a[14] !== u || a[15] !== _
        ? ((R = _ == null ? null : u(_)), (a[14] = u), (a[15] = _), (a[16] = R))
        : (R = a[16]);
      var L = R,
        E = c,
        k = h(_),
        I;
      return (
        a[17] !== k
          ? ((I = { subscribe: k }), (a[17] = k), (a[18] = I))
          : (I = a[18]),
        o("useWAWebValues").useOptionalValues(L, E, I)
      );
    }
    function f(e) {
      return e;
    }
    function g(e, t) {
      var n = o("react-compiler-runtime").c(2),
        r = h(e),
        a;
      return (
        n[0] !== r
          ? ((a = { subscribe: r }), (n[0] = r), (n[1] = a))
          : (a = n[1]),
        o("useWAWebValues").useValues(e, t, a)
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function (n) {
              if (e != null)
                return (
                  e.on("change", n),
                  e.incObservers(!0),
                  function () {
                    (e.decObservers(), e.off("change", n));
                  }
                );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function y(e, t) {
      for (var n of e) {
        var r = n.get(t);
        if (r != null) return r;
      }
      return null;
    }
    ((l.useCollectionValues = p),
      (l.useOptionalCollectionValues = _),
      (l.useModelGetterValues = g));
  },
  98,
);
