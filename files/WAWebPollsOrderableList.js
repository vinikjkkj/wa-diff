__d(
  "WAWebPollsOrderableList",
  [
    "nullthrows",
    "react",
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
        u = m(0),
        c = u[0],
        p = u[1],
        h = m(),
        y = h[0],
        C = h[1],
        b = m(null),
        v = b[0],
        S = b[1],
        R = m(null),
        L = R[0],
        E = R[1],
        k = m(null),
        I = k[0],
        T = k[1],
        D = I != null,
        x =
          I == null || L == null || y == null
            ? t
            : f({
                items: I,
                draggedItemKey: v,
                getItemHeight: function (t) {
                  var e, n;
                  return (e = (n = y.get(t.key)) == null ? void 0 : n.height) !=
                    null
                    ? e
                    : 0;
                },
                dragPosition: L,
              }),
        $ = function (t) {
          var e = i.current;
          if (e == null) return null;
          var n = l.current,
            r = n.get(t);
          if (r == null) return null;
          var o = e.getBoundingClientRect().y,
            a = r.getBoundingClientRect();
          return { clientTop: a.top, startTop: a.top - o, height: a.height };
        },
        P = function () {
          var e = new Map();
          for (var n of t) e.set(n.key, $(n.key));
          C(e);
        },
        N = function (t) {
          var e = i.current;
          if (e != null) {
            var n = t.clientY - e.getBoundingClientRect().y;
            E(n);
          }
        };
      o("useWAWebListener").useListener(
        v == null ? null : document,
        "mousemove",
        N,
      );
      var M = r("useWAWebDebouncedCallback")(function () {
          (T(null), C(null));
        }, 300),
        w = function (n, r) {
          var e;
          if (I == null) {
            var o = (e = $(n)) == null ? void 0 : e.clientTop;
            o != null && (p(o - r.clientY), P(), S(n), T(t));
          }
        };
      (o("useWAWebListener").useListener(
        v == null ? null : document,
        "mouseup",
        function (e) {
          (M(), n(x), S(null), E(null));
        },
      ),
        g(v != null));
      var A = null,
        F = 0,
        O = 0;
      if (y != null) {
        A = new Map();
        var B = 0;
        for (var W of x) {
          var q = y.get(W.key);
          if (q != null) {
            var U = B;
            (A.set(W.key, U), (F = U), (B += q.height));
          }
        }
      }
      var V = function (t, n) {
          n == null ? l.current.delete(t) : l.current.set(t, n);
        },
        H = (I != null ? I : t).map(function (e, t) {
          var n = y == null ? void 0 : y.get(e.key),
            o;
          if (e.key === v && L != null) {
            var i = r("nullthrows")(n == null ? void 0 : n.startTop),
              l = Math.min(Math.max(O, L + c), F);
            o = l - i;
          } else {
            var u,
              d = n == null ? void 0 : n.startTop,
              m = (u = A) == null ? void 0 : u.get(e.key);
            o = !D || m == null || d == null ? 0 : m - d;
          }
          return s.jsx(
            _,
            {
              index: t,
              isEasing: v !== e.key && D,
              item: e,
              onWrapperRef: V,
              renderItem: a,
              startDrag: w,
              translateY: o,
            },
            e.key,
          );
        });
      return s.jsx("div", {
        ref: i,
        className: "x78zum5 xdt5ytf",
        children: H,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.index,
        n = e.isEasing,
        r = e.item,
        o = e.onWrapperRef,
        a = e.renderItem,
        i = e.startDrag,
        l = e.translateY;
      return s.jsx("div", {
        ref: function (t) {
          return o(r.key, t);
        },
        className: { 0: "xh8yej3", 1: "xh8yej3 x11xpdln x13dflua xz4gly6" }[
          !!n << 0
        ],
        style: { transform: "translateY(" + l + "px)" },
        children: a({ item: r, startDrag: i, index: t }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
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
    function g(e) {
      c(
        function () {
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
        },
        [e],
      );
    }
    l.default = p;
  },
  98,
);
