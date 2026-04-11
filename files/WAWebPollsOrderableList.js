__d(
  "WAWebPollsOrderableList",
  [
    "WANullthrows",
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
      var t = e.items,
        n = e.onReordered,
        a = e.renderItem,
        i = d(null),
        l = r("useLazyRef")(function () {
          return new Map();
        }),
        u = d(0),
        c = m(),
        p = c[0],
        g = c[1],
        h = m(null),
        y = h[0],
        C = h[1],
        b = m(null),
        v = b[0],
        S = b[1],
        R = m(null),
        L = R[0],
        E = R[1],
        k = L != null,
        I =
          L == null || v == null || p == null
            ? t
            : _({
                items: L,
                draggedItemKey: y,
                getItemHeight: function (t) {
                  var e, n;
                  return (e = (n = p.get(t.key)) == null ? void 0 : n.height) !=
                    null
                    ? e
                    : 0;
                },
                dragPosition: v,
              }),
        T = function (t) {
          var e = i.current;
          if (e == null) return null;
          var n = l.current,
            r = n.get(t);
          if (r == null) return null;
          var o = e.getBoundingClientRect().y,
            a = r.getBoundingClientRect();
          return { clientTop: a.top, startTop: a.top - o, height: a.height };
        },
        D = function () {
          var e = new Map();
          for (var n of t) e.set(n.key, T(n.key));
          g(e);
        },
        x = function (t) {
          var e = i.current;
          if (e != null) {
            var n = t.clientY - e.getBoundingClientRect().y;
            S(n);
          }
        };
      o("useWAWebListener").useListener(
        y == null ? null : document,
        "mousemove",
        x,
      );
      var $ = r("useWAWebDebouncedCallback")(function () {
          (E(null), g(null));
        }, 300),
        P = function (n, r) {
          var e;
          if (L == null) {
            var o = (e = T(n)) == null ? void 0 : e.clientTop;
            o != null && ((u.current = o - r.clientY), D(), C(n), E(t));
          }
        };
      (o("useWAWebListener").useListener(
        y == null ? null : document,
        "mouseup",
        function (e) {
          ($(), n(I), C(null), S(null));
        },
      ),
        f(y != null));
      var N = null,
        M = 0,
        w = 0;
      if (p != null) {
        N = new Map();
        var A = 0;
        for (var F of I) {
          var O = p.get(F.key);
          if (O != null) {
            var B = A;
            (N.set(F.key, B), (M = B), (A += O.height));
          }
        }
      }
      var W = (L != null ? L : t).map(function (e, t) {
        var n = p == null ? void 0 : p.get(e.key),
          o;
        if (e.key === y && v != null) {
          var i,
            c = r("WANullthrows")(n == null ? void 0 : n.startTop),
            d = (i = u.current) != null ? i : 0,
            m = Math.min(Math.max(w, v + d), M);
          o = m - c;
        } else {
          var _,
            f = n == null ? void 0 : n.startTop,
            g = (_ = N) == null ? void 0 : _.get(e.key);
          o = !k || g == null || f == null ? 0 : g - f;
        }
        return s.jsx(
          "div",
          {
            ref: function (n) {
              n == null ? l.current.delete(e.key) : l.current.set(e.key, n);
            },
            className: { 0: "xh8yej3", 1: "xh8yej3 x11xpdln x13dflua xz4gly6" }[
              !!(y !== e.key && k) << 0
            ],
            style: { transform: "translateY(" + o + "px)" },
            children: a({ item: e, startDrag: P, index: t }),
          },
          e.key,
        );
      });
      return s.jsx("div", {
        ref: i,
        className: "x78zum5 xdt5ytf",
        children: W,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
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
    function f(e) {
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
