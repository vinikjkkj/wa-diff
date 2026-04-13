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
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useId,
      _ = u.useMemo,
      f = u.useRef,
      g = u.useState,
      h = {
        menu: { zIndex: "xoz0ns6", $$css: !0 },
        menuOffset: { marginTop: "x1gslohp", $$css: !0 },
      },
      y = { LEFT: 0, RIGHT: 2 };
    function C(e, t) {
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
    function b() {
      var e = g(null),
        t = e[0],
        n = e[1],
        r = f(null),
        o = c(function (e, t) {
          var o = C(e, t);
          return (
            document.body && document.body.appendChild(o),
            (r.current = o),
            n(o),
            o
          );
        }, []),
        a = c(function () {
          var e = r.current;
          (e != null && (document.body.removeChild(e), (r.current = null)),
            n(null));
        }, []);
      return { virtualElement: t, createAndMount: o, cleanup: a };
    }
    function v(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.align,
        a = t.contextMenuArea,
        i = a === void 0 ? !1 : a,
        l = t.dismissable,
        u = l === void 0 ? !0 : l,
        C = t.enableUIM,
        v = C === void 0 ? !0 : C,
        S = t.isContainer,
        R = S === void 0 ? !1 : S,
        L = t.menu,
        E = t.onClose,
        k = t.onOpen,
        I = t.position,
        T = t.positionOnAnyClick,
        D = T === void 0 ? !1 : T,
        x = t.targetRef,
        $ = p(),
        P = d(o("WDSGlobalContext").WDSContext),
        N = P.closeAllMenus,
        M = P.registerMenu,
        w = P.unregisterMenu,
        A = g(!1),
        F = A[0],
        O = A[1],
        B = g(!1),
        W = B[0],
        q = B[1],
        U = f(null),
        V = f(null),
        H = b(),
        G = H.cleanup,
        z = H.createAndMount,
        j = H.virtualElement;
      function K(e) {
        return (
          e.button === y.RIGHT ||
          (e.button === y.LEFT && (e.ctrlKey === !0 || e.metaKey === !0))
        );
      }
      var Q = c(
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
        X = c(
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
        Y = c(
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
        J = c(
          function (e) {
            (z(e.x, e.y),
              q(!1),
              O(function (e) {
                return (e || (M($, X), k == null || k()), !0);
              }));
          },
          [z, M, $, X, k],
        ),
        Z = c(
          function () {
            (q(!1),
              O(function (e) {
                return (e || (M($, X), k == null || k()), !0);
              }));
          },
          [M, $, X, k],
        ),
        ee = c(
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
        te = c(function (e) {
          if (!(e instanceof Node)) return !1;
          var t = U.current;
          return t && t.contains(e)
            ? !0
            : e instanceof Element
              ? e.closest("[data-menu-content]") != null
              : !1;
        }, []);
      m(
        function () {
          if (F && u) {
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
                  o = n.button === y.LEFT;
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
        [F, u, X, x, i, te],
      );
      var ne = c(function (e) {
          (e.stopPropagation(), e.preventDefault());
        }, []),
        re = c(
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
        oe = c(function (e) {
          e.preventDefault();
        }, []),
        ae = j ? { current: j } : x,
        ie = _(
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
          ? s.jsx(r("BaseContextualLayer.react"), {
              contextRef: ae,
              imperativeRef: V,
              xstyle: [h.menu, h.menuOffset],
              align: n != null ? n : "start",
              position: I != null ? I : "below",
              containFocus: !0,
              children: s.jsx(o("react-strict-dom").html.div, {
                ref: U,
                "data-menu-content": !0,
                onContextMenu: oe,
                onKeyDown: re,
                children: s.jsx(
                  o("WDSMenuContext").WDSMenuAnimationContext.Provider,
                  { value: ie, children: L },
                ),
              }),
            })
          : null,
        se =
          v && le != null
            ? s.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "WDSMenu",
                escapable: !0,
                popable: !R,
                dismissOnWindowResize: !0,
                requestDismiss: function (t, n) {
                  (n instanceof MouseEvent && te(n.target)) || X();
                },
                children: s.jsx("div", { children: le }),
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
    l.default = v;
  },
  98,
);
