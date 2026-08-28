__d(
  "createLayoutContext",
  [
    "compareDOMOrder",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "useRefEffect",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useImperativeHandle,
      m = u.useMemo,
      p = u.useReducer,
      _ = u.useRef;
    function f(e) {
      var t = {
          getLayout: function () {
            return e;
          },
          dispatch: r("emptyFunction"),
          nodes: new Map(),
          values: [],
        },
        n = s.createContext(t);
      function a(e) {
        var t = o("react-compiler-runtime").c(11),
          r = e.children,
          a = e.imperativeRef,
          i = e.value,
          l = y(),
          u = l[0],
          c = l[1],
          m = l[2],
          p,
          _;
        (t[0] !== m
          ? ((p = function () {
              return {
                forceUpdate: function () {
                  return m();
                },
              };
            }),
            (_ = [m]),
            (t[0] = m),
            (t[1] = p),
            (t[2] = _))
          : ((p = t[1]), (_ = t[2])),
          d(a, p, _));
        var f;
        t[3] !== m || t[4] !== u || t[5] !== i || t[6] !== c
          ? ((f = { getLayout: i, dispatch: m, nodes: u, values: c }),
            (t[3] = m),
            (t[4] = u),
            (t[5] = i),
            (t[6] = c),
            (t[7] = f))
          : (f = t[7]);
        var g = f,
          h;
        return (
          t[8] !== r || t[9] !== g
            ? ((h = s.jsx(n.Provider, { value: g, children: r })),
              (t[8] = r),
              (t[9] = g),
              (t[10] = h))
            : (h = t[10]),
          h
        );
      }
      function i(e) {
        var r = o("react-compiler-runtime").c(2),
          a;
        return (
          r[0] !== e
            ? ((a = s.jsx(n.Provider, babelHelpers.extends({ value: t }, e))),
              (r[0] = e),
              (r[1] = a))
            : (a = r[1]),
          a
        );
      }
      function l(t) {
        var o = _(null),
          a = c(n),
          i = a.dispatch,
          l = a.getLayout,
          s = a.nodes,
          u = a.values,
          d = m(
            function () {
              var t = o.current && s.get(o.current),
                n = s.size;
              return t != null
                ? l({
                    isFirst: t === 0,
                    isLast: t >= 0 && t === n - 1,
                    index: t,
                    total: n,
                    values: u,
                    nodes: s,
                  })
                : e;
            },
            [l, s, u],
          ),
          p = r("useRefEffect")(
            function (e) {
              return (
                (o.current = e),
                i({ add: e, value: t }),
                function () {
                  ((o.current = null), i({ remove: e }));
                }
              );
            },
            [i, t],
          );
        return [d, p];
      }
      function u(e) {
        var t = o("react-compiler-runtime").c(4),
          n = l(e.value),
          r = n[0],
          a = n[1],
          i;
        return (
          t[0] !== r || t[1] !== e.children || t[2] !== a
            ? ((i = e.children(r, a)),
              (t[0] = r),
              (t[1] = e.children),
              (t[2] = a),
              (t[3] = i))
            : (i = t[3]),
          i
        );
      }
      return {
        Provider: a,
        Consumer: u,
        Resetter: i,
        useLayoutContext: l,
        _context: n,
      };
    }
    function g(e, t) {
      var n = e.node,
        o = t.node;
      return r("compareDOMOrder")(n, o);
    }
    function h(e, t) {
      var n = Array.from(e);
      return (
        t != null &&
          (t.remove &&
            (n = e.filter(function (e) {
              var n = e.node;
              return n !== t.remove;
            })),
          t.add &&
            (n = n
              .filter(function (e) {
                var n = e.node;
                return n !== t.add;
              })
              .concat({ node: t.add, value: t.value }))),
        n.sort(g)
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(6),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]);
      var n = p(h, t),
        r = n[0],
        a = n[1],
        i;
      if (e[1] !== r) {
        var l = new Map(),
          s = [];
        (r.forEach(function (e, t) {
          var n = e.node,
            r = e.value;
          (l.set(n, t), s.push(r));
        }),
          (i = { nodes: l, values: s }),
          (e[1] = r),
          (e[2] = i));
      } else i = e[2];
      var u = i,
        c = u.nodes,
        d = u.values,
        m;
      return (
        e[3] !== c || e[4] !== d
          ? ((m = [c, d, a]), (e[3] = c), (e[4] = d), (e[5] = m))
          : (m = e[5]),
        m
      );
    }
    l.default = f;
  },
  98,
);
