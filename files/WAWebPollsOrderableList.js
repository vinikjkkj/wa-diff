__d(
  "WAWebPollsOrderableList",
  [
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.items,
        a = e.onReordered,
        i = e.renderItem,
        l = d(null),
        u = r("useLazyRef")(_),
        c = m(0),
        p = c[0],
        y = c[1],
        C = m(),
        b = C[0],
        v = C[1],
        S = m(null),
        R = S[0],
        L = S[1],
        E = m(null),
        k = E[0],
        I = E[1],
        T = m(null),
        D = T[0],
        x = T[1],
        $ = D != null,
        P =
          D == null || k == null || b == null
            ? n
            : g({
                items: D,
                draggedItemKey: R,
                getItemHeight: function (t) {
                  var e, n;
                  return (e = (n = b.get(t.key)) == null ? void 0 : n.height) !=
                    null
                    ? e
                    : 0;
                },
                dragPosition: k,
              }),
        N;
      t[0] !== u
        ? ((N = function (t) {
            var e = l.current;
            if (e == null) return null;
            var n = u.current,
              r = n.get(t);
            if (r == null) return null;
            var o = e.getBoundingClientRect().y,
              a = r.getBoundingClientRect();
            return { clientTop: a.top, startTop: a.top - o, height: a.height };
          }),
          (t[0] = u),
          (t[1] = N))
        : (N = t[1]);
      var M = N,
        w;
      t[2] !== n || t[3] !== M
        ? ((w = function () {
            var e = new Map();
            for (var t of n) e.set(t.key, M(t.key));
            v(e);
          }),
          (t[2] = n),
          (t[3] = M),
          (t[4] = w))
        : (w = t[4]);
      var A = w,
        F;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            var e = l.current;
            if (e != null) {
              var n = t.clientY - e.getBoundingClientRect().y;
              I(n);
            }
          }),
          (t[5] = F))
        : (F = t[5]);
      var O = F;
      o("useWAWebListener").useListener(
        R == null ? null : document,
        "mousemove",
        O,
      );
      var B;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            (x(null), v(null));
          }),
          (t[6] = B))
        : (B = t[6]);
      var W = r("useWAWebDebouncedCallback")(B, 300),
        q;
      t[7] !== n || t[8] !== D || t[9] !== A || t[10] !== M
        ? ((q = function (t, r) {
            var e;
            if (D == null) {
              var o = (e = M(t)) == null ? void 0 : e.clientTop;
              o != null && (y(o - r.clientY), A(), L(t), x(n));
            }
          }),
          (t[7] = n),
          (t[8] = D),
          (t[9] = A),
          (t[10] = M),
          (t[11] = q))
        : (q = t[11]);
      var U = q;
      (o("useWAWebListener").useListener(
        R == null ? null : document,
        "mouseup",
        function (e) {
          (W(), a(P), L(null), I(null));
        },
      ),
        h(R != null));
      var V = null,
        H = 0;
      if (b != null) {
        V = new Map();
        var G = 0;
        for (var z of P) {
          var j = b.get(z.key);
          if (j != null) {
            var K = G;
            (V.set(z.key, K), (H = K), (G = G + j.height));
          }
        }
      }
      var Q;
      t[12] !== u
        ? ((Q = function (t, n) {
            n == null ? u.current.delete(t) : u.current.set(t, n);
          }),
          (t[12] = u),
          (t[13] = Q))
        : (Q = t[13]);
      var X = Q,
        Y = (D != null ? D : n).map(function (e, t) {
          var n = b == null ? void 0 : b.get(e.key),
            o;
          if (e.key === R && k != null) {
            var a = r("nullthrows")(n == null ? void 0 : n.startTop),
              l = Math.min(Math.max(0, k + p), H);
            o = l - a;
          } else {
            var u,
              c = n == null ? void 0 : n.startTop,
              d = (u = V) == null ? void 0 : u.get(e.key);
            o = !$ || d == null || c == null ? 0 : d - c;
          }
          return s.jsx(
            f,
            {
              index: t,
              isEasing: R !== e.key && $,
              item: e,
              onWrapperRef: X,
              renderItem: i,
              startDrag: U,
              translateY: o,
            },
            e.key,
          );
        }),
        J;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = { className: "x78zum5 xdt5ytf" }), (t[14] = J))
        : (J = t[14]);
      var Z;
      return (
        t[15] !== Y
          ? ((Z = s.jsx(
              "div",
              babelHelpers.extends({ ref: l }, J, { children: Y }),
            )),
            (t[15] = Y),
            (t[16] = Z))
          : (Z = t[16]),
        Z
      );
    }
    function _() {
      return new Map();
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.index,
        r = e.isEasing,
        a = e.item,
        i = e.onWrapperRef,
        l = e.renderItem,
        u = e.startDrag,
        c = e.translateY,
        d;
      t[0] !== a.key || t[1] !== i
        ? ((d = function (t) {
            return i(a.key, t);
          }),
          (t[0] = a.key),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== r
        ? ((m = { 0: "xh8yej3", 1: "xh8yej3 x11xpdln x13dflua xz4gly6" }[
            !!r << 0
          ]),
          (t[3] = r),
          (t[4] = m))
        : (m = t[4]);
      var p = "translateY(" + c + "px)",
        _;
      t[5] !== p
        ? ((_ = { transform: p }), (t[5] = p), (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== n || t[8] !== a || t[9] !== l || t[10] !== u
        ? ((f = l({ item: a, startDrag: u, index: n })),
          (t[7] = n),
          (t[8] = a),
          (t[9] = l),
          (t[10] = u),
          (t[11] = f))
        : (f = t[11]);
      var g;
      return (
        t[12] !== d || t[13] !== m || t[14] !== _ || t[15] !== f
          ? ((g = s.jsx("div", {
              ref: d,
              className: m,
              style: _,
              children: f,
            })),
            (t[12] = d),
            (t[13] = m),
            (t[14] = _),
            (t[15] = f),
            (t[16] = g))
          : (g = t[16]),
        g
      );
    }
    function g(e) {
      var t = e.draggedItemKey,
        n = e.dragPosition,
        r = e.getItemHeight,
        o = e.items,
        a =
          t != null
            ? o.find(function (e) {
                return e.key === t;
              })
            : null;
      if (a == null || n == null) return o;
      var i = [].concat(o),
        l = i.findIndex(function (e) {
          return e.key === t;
        });
      i.splice(l, 1);
      var s = 0,
        u = 0,
        c = 0;
      for (var d of o) {
        n > s && (c = u);
        var m = r(d);
        ((s += m), u++);
      }
      return (i.splice(c, 0, a), i);
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            if (e) {
              var t = document,
                n = t.body;
              if (n != null) {
                var r = document.createElement("div");
                return (
                  (r.className =
                    "xi9pz9s xixxii4 x13vifvy x1o0tod xh8yej3 x5yr21d x1lfen1e"),
                  n.appendChild(r),
                  function () {
                    r.remove();
                  }
                );
              }
            }
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        c(n, r));
    }
    l.default = p;
  },
  98,
);
