__d(
  "useWDSMenu",
  [
    "BaseContextualLayer.react",
    "WAWebUimUie.react",
    "WDSGlobalContext",
    "WDSMenuContext",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = e || (e = r("react")),
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useId,
      f = u.useMemo,
      g = u.useRef,
      h = u.useState,
      y = {
        menu: { zIndex: "xoz0ns6", $$css: !0 },
        menuOffset: { marginTop: "x1gslohp", $$css: !0 },
      },
      C = { LEFT: 0, RIGHT: 2 };
    function b(e, t) {
      var n = document.createElement("div");
      return (
        (n.style.position = "fixed"),
        (n.style.left = e + "px"),
        (n.style.top = t + "px"),
        (n.style.width = "0px"),
        (n.style.height = "0px"),
        (n.style.pointerEvents = "none"),
        n
      );
    }
    function v() {
      var e = h(null),
        t = e[0],
        n = e[1],
        r = g(null),
        o = d(function (e, t) {
          var o = b(e, t);
          return (
            document.body && document.body.appendChild(o),
            (r.current = o),
            n(o),
            o
          );
        }, []),
        a = d(function () {
          var e = r.current;
          (e != null && (document.body.removeChild(e), (r.current = null)),
            n(null));
        }, []);
      return { virtualElement: t, createAndMount: o, cleanup: a };
    }
    function S(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.align,
        a = t.contextMenuArea,
        i = a === void 0 ? !1 : a,
        l = t.dismissable,
        s = l === void 0 ? !0 : l,
        u = t.enableUIM,
        b = u === void 0 ? !0 : u,
        S = t.isContainer,
        R = S === void 0 ? !1 : S,
        L = t.menu,
        E = t.onClose,
        k = t.onOpen,
        I = t.position,
        T = t.positionOnAnyClick,
        D = T === void 0 ? !1 : T,
        x = t.targetRef,
        $ = _(),
        P = m(o("WDSGlobalContext").WDSContext),
        N = P.closeAllMenus,
        M = P.registerMenu,
        w = P.unregisterMenu,
        A = h(!1),
        F = A[0],
        O = A[1],
        B = h(!1),
        W = B[0],
        q = B[1],
        U = g(null),
        V = g(null),
        H = v(),
        G = H.cleanup,
        z = H.createAndMount,
        j = H.virtualElement;
      function K(e) {
        return (
          e.button === C.RIGHT ||
          (e.button === C.LEFT && (e.ctrlKey === !0 || e.metaKey === !0))
        );
      }
      var Q = d(
          function (e) {
            if (e == null) return null;
            var t = K(e);
            return D && e.clientX != null && e.clientY != null
              ? (e.preventDefault(), { x: e.clientX, y: e.clientY })
              : t
                ? (e.preventDefault(), { x: e.clientX, y: e.clientY })
                : null;
          },
          [D],
        ),
        X = d(
          function () {
            W ||
              (O(function (e) {
                return e;
              }),
              w($),
              q(!0),
              self.setTimeout(function () {
                (O(!1), q(!1), G(), E == null || E());
              }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION));
          },
          [$, E, w, W, G],
        ),
        Y = d(
          function (e) {
            (q(!0),
              O(!1),
              G(),
              window.requestAnimationFrame(function () {
                (z(e.x, e.y),
                  q(!1),
                  O(function (e) {
                    return (e || k == null || k(), !0);
                  }));
              }));
          },
          [G, z, k],
        ),
        J = d(
          function (e) {
            (z(e.x, e.y),
              q(!1),
              O(function (e) {
                return (e || (M($, X), k == null || k()), !0);
              }));
          },
          [z, M, $, X, k],
        ),
        Z = d(
          function () {
            (q(!1),
              O(function (e) {
                return (e || (M($, X), k == null || k()), !0);
              }));
          },
          [M, $, X, k],
        ),
        ee = d(
          function (e) {
            if (!W) {
              var t = Q(e),
                n = t != null;
              if (F && n && t != null) {
                Y(t);
                return;
              }
              (N(),
                n && t != null
                  ? J(t)
                  : (x == null ? void 0 : x.current) != null && Z());
            }
          },
          [W, Q, F, Y, N, J, Z, x],
        ),
        te = d(function (e) {
          if (!(e instanceof Node)) return !1;
          var t = U.current;
          return t && t.contains(e)
            ? !0
            : e instanceof Element
              ? e.closest("[data-menu-content]") != null
              : !1;
        }, []);
      p(
        function () {
          if (F && s) {
            var e = function (t) {
                return (
                  (x == null ? void 0 : x.current) != null &&
                  t instanceof Node &&
                  x.current.contains(t)
                );
              },
              t = function (n) {
                var t = n.target,
                  r = n != null && K(n),
                  o = n.button === C.LEFT;
                if (r) {
                  if (te(t)) {
                    (n.preventDefault(), n.stopPropagation());
                    return;
                  }
                  e(t) || (q(!0), X());
                  return;
                }
                o && (te(t) || (!i && e(t)) || (q(!0), X()));
              };
            return (
              document.addEventListener("mousedown", t, !0),
              function () {
                return document.removeEventListener("mousedown", t, !0);
              }
            );
          }
        },
        [F, s, X, x, i, te],
      );
      var ne = d(function (e) {
          (e.stopPropagation(), e.preventDefault());
        }, []),
        re = d(
          function (e) {
            var t = e.key.toLowerCase(),
              n = e.ctrlKey || e.metaKey || e.altKey;
            if (!n) {
              if (t === "escape") {
                (ne(e), X());
                return;
              }
              if (R) {
                [
                  "arrowup",
                  "arrowdown",
                  "arrowleft",
                  "arrowright",
                  "tab",
                ].includes(t) && e.stopPropagation();
                return;
              }
              ne(e);
            }
          },
          [ne, X, R],
        ),
        oe = d(function (e) {
          e.preventDefault();
        }, []),
        ae = j ? { current: j } : x,
        ie = f(
          function () {
            return {
              isClosing: W,
              position: I != null ? I : "below",
              align: n != null ? n : "start",
            };
          },
          [W, I, n],
        ),
        le = F
          ? c.jsx(r("BaseContextualLayer.react"), {
              contextRef: ae,
              imperativeRef: V,
              xstyle: [y.menu, y.menuOffset],
              align: n != null ? n : "start",
              position: I != null ? I : "below",
              containFocus: !0,
              children: c.jsx(o("react-strict-dom").html.div, {
                ref: U,
                "data-menu-content": !0,
                onContextMenu: oe,
                onKeyDown: re,
                children: c.jsx(
                  o("WDSMenuContext").WDSMenuAnimationContext.Provider,
                  { value: ie, children: L },
                ),
              }),
            })
          : null,
        se =
          b && le != null
            ? c.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "WDSMenu",
                escapable: !0,
                popable: !R,
                dismissOnWindowResize: !0,
                requestDismiss: function (t, n) {
                  (n instanceof MouseEvent && te(n.target)) || X();
                },
                children: c.jsx("div", { children: le }),
              })
            : le;
      return {
        openMenu: ee,
        closeMenu: X,
        isMenuOpen: F && !W,
        menuPortal: se,
        menuRef: U,
      };
    }
    l.default = S;
  },
  98,
);
