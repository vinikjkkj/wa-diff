__d(
  "BaseDocumentScrollView.react",
  [
    "BaseViewHideable.react",
    "HiddenSubtreeContext",
    "HiddenSubtreeContextProvider.react",
    "react",
    "usePrevious",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "contextKey",
        "detached",
        "detachedDefaultValue",
        "detachedInsetStart",
        "detachedWidth",
        "disableNavigationScrollReset",
        "hiddenWhenDetached",
        "isHiddenSubtreeContextHidden",
        "maintainScrollForContext",
        "onInitialScroll",
        "resetScrollOnMount",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useLayoutEffect,
      _ = c.useRef,
      f = c.useState,
      g = {
        detached: {
          MsOverflowStyle: "x1pq812k",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          position: "xixxii4",
          scrollbarWidth: "x1rohswg",
          top: "x13vifvy",
          width: "xh8yej3",
          "::-webkit-scrollbar_display": "xfk6m8",
          "::-webkit-scrollbar_height": "x1yqm8si",
          "::-webkit-scrollbar_width": "xjx87ck",
          $$css: !0,
        },
      },
      h = new Map(),
      y = new Set(),
      C = null;
    function b(e, t) {
      return !!(
        e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
    function v() {
      var e = null;
      return (
        h.forEach(function (t, n) {
          (e == null || (e != null && n != null && b(e, n) && !y.has(n))) &&
            (e = n);
        }),
        e
      );
    }
    function S(e) {
      return C == null || b(C, e);
    }
    function R(n) {
      var o = n.contextKey,
        a = o === void 0 ? null : o,
        i = n.detached,
        l = i === void 0 ? !1 : i,
        s = n.detachedDefaultValue,
        c = s === void 0 ? !1 : s,
        b = n.detachedInsetStart,
        R = b === void 0 ? 0 : b,
        L = n.detachedWidth,
        E = L === void 0 ? null : L,
        k = n.disableNavigationScrollReset,
        I = k === void 0 ? !1 : k,
        T = n.hiddenWhenDetached,
        D = T === void 0 ? !1 : T,
        x = n.isHiddenSubtreeContextHidden,
        $ = x === void 0 ? !1 : x,
        P = n.maintainScrollForContext,
        N = P === void 0 ? !1 : P,
        M = n.onInitialScroll,
        w = n.resetScrollOnMount,
        A = w === void 0 ? !0 : w,
        F = babelHelpers.objectWithoutPropertiesLoose(n, e),
        O = _(),
        B = _({ x: 0, y: 0 }),
        W = r("useStable")(function () {
          return {};
        }),
        q = r("usePrevious")(a),
        U = f(c),
        V = U[0],
        H = U[1],
        G = f({ x: 0, y: 0 }),
        z = G[0],
        j = G[1],
        K = r("usePrevious")(V),
        Q = m(r("HiddenSubtreeContext")),
        X = Q.hidden;
      p(function () {
        var e = O.current;
        if (e != null) {
          if (S(e)) {
            if (C != null) {
              var t = h.get(C);
              t && t(!1);
            }
            C = e;
          } else H(!0);
          return (
            h.set(e, function (e) {
              (e || j(babelHelpers.extends({}, B.current)), H(!e));
            }),
            function () {
              if ((h.delete(e), C === e && ((C = v()), C != null))) {
                var t = h.get(C);
                t && t(!0);
              }
            }
          );
        }
      }, []);
      var Y = d(
        function (e, n) {
          (t.scrollTo && t.scrollTo(e, n), typeof M == "function" && M(e, n));
        },
        [M],
      );
      (p(
        function () {
          (A || K != null) && !V && V !== K && Y(z.x, z.y);
        },
        [V, z, K, Y, A],
      ),
        p(
          function () {
            if ((A || q != null) && a !== q) {
              var e = N && a != null && a in W ? W[a] : { x: 0, y: 0 };
              V ? j(e) : I !== !0 && Y(e.x, e.y);
            }
          },
          [a, W, V, N, q, Y, A, I],
        ),
        p(
          function () {
            if (!V) {
              var e = function () {
                var e = t.pageXOffset,
                  n = t.pageYOffset;
                ((B.current = { x: e, y: n }),
                  a != null && (W[a] = { x: e, y: n }));
              };
              return (
                window.addEventListener("scroll", e, { passive: !0 }),
                function () {
                  return window.removeEventListener("scroll", e);
                }
              );
            }
          },
          [V, a, W],
        ),
        p(
          function () {
            var e = O.current;
            if (e != null) {
              if (X) {
                if ((y.add(e), !V && (H(!0), (C = v()), C != null))) {
                  var t = h.get(C);
                  t && t(!0);
                }
                return function () {
                  y.delete(e);
                };
              } else if (V && e !== C && e === v()) {
                if (C != null) {
                  var n = h.get(C);
                  n && n(!1);
                }
                C = e;
                var r = h.get(C);
                r && r(!0);
              }
            }
          },
          [V, X],
        ));
      var J = l || V,
        Z = D,
        ee = V && !D;
      return (
        p(
          function () {
            var e = O.current;
            ee && e != null && (e.scrollTop = z.y);
          },
          [z.y, ee],
        ),
        u.jsx(r("HiddenSubtreeContextProvider.react"), {
          ignoreParent: !0,
          isBackgrounded: J,
          isHidden: $ || Z,
          isVisibleForAnimation: !Z,
          children: u.jsx(
            r("BaseViewHideable.react"),
            babelHelpers.extends(
              {},
              F,
              { hidden: Z },
              ee && {
                "aria-hidden": !0,
                id: "scrollview",
                style: babelHelpers.extends(
                  { left: -z.x + R },
                  E != null ? { width: E } : null,
                ),
                xstyle: g.detached,
              },
              { ref: O },
            ),
          ),
        })
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
