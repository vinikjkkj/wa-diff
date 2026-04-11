__d(
  "WAWebPopover.react",
  [
    "ReactDOM",
    "WALogger",
    "WAWebKeyboardTabUtils",
    "WAWebMutationObserver",
    "WAWebNoop",
    "WAWebPopoverArrow.react",
    "WAWebPopoverContext.react",
    "WAWebPopoverPosition",
    "WAWebUimUie.react",
    "WAWebVelocityTransition",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useRef,
      g = d.useState,
      h = 24,
      y = 24,
      C = "wa-popovers-bucket";
    function b(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.id,
        r = n != null ? n : C,
        a;
      return (
        t[0] !== r
          ? ((a = c.jsx("div", { id: r })), (t[0] = r), (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function v(e, t) {
      return (
        e.addEventListener("click", t),
        function () {
          e.removeEventListener("click", t);
        }
      );
    }
    function S(e, t, n) {
      var r = function (r) {
        (r.preventDefault(), n || t(r));
      };
      return (
        e.addEventListener("contextmenu", r),
        function () {
          e.removeEventListener("contextmenu", r);
        }
      );
    }
    function R(e, t, n) {
      return (
        e.addEventListener("mouseenter", t),
        e.addEventListener("mouseleave", n),
        function () {
          (e.removeEventListener("mouseenter", t),
            e.removeEventListener("mouseleave", n));
        }
      );
    }
    function L(e, t, n) {
      return (
        e.addEventListener("focus", t),
        e.addEventListener("blur", n),
        function () {
          (e.removeEventListener("focus", t), e.removeEventListener("blur", n));
        }
      );
    }
    function E(e, t, n, r) {
      var o = function (r) {
          return (
            t != null &&
            r instanceof Node &&
            (r === t || t.contains(r) || r === e || e.contains(r))
          );
        },
        a = function (t) {
          o(t.relatedTarget) || r();
        };
      return (
        e.addEventListener("mouseenter", n),
        e.addEventListener("mouseleave", a),
        t == null || t.addEventListener("mouseleave", a),
        function () {
          (e.removeEventListener("mouseenter", n),
            e.removeEventListener("mouseleave", a),
            t == null || t.removeEventListener("mouseleave", a));
        }
      );
    }
    function k(t) {
      var n,
        a = (n = t.popoverPortal) != null ? n : document.getElementById(C),
        i = t.alignment,
        l = t.anchorToMouseCoords,
        u = l === void 0 ? !1 : l,
        d = t.arrowXStyle,
        b = t.buffer,
        k = b === void 0 ? 8 : b,
        I = t.controllerRef,
        T = t.enableEnterTransition,
        D = T === void 0 ? !0 : T,
        x = t.enableExitTransition,
        $ = x === void 0 ? !0 : x,
        P = t.includeArrow,
        N = t.initHandling,
        M = t.openingDelay,
        w = t.position,
        A = t.target,
        F = t.testid,
        O = o("WAWebPopoverContext.react").useWAWebPopoverControllerContext(),
        B;
      if (A === "context") {
        if (O == null)
          throw r("err")(
            '[Popover] A popover with a "context" target must be inside of a PopoverRefContext component',
          );
        B = O.targetRef;
      } else B = A;
      var W = f(null),
        q = g(null),
        U = q[0],
        V = q[1],
        H = g(!1),
        G = H[0],
        z = H[1],
        j = g(!1),
        K = j[0],
        Q = j[1],
        X = f(null),
        Y = m(
          function () {
            var t = B.current,
              n = W.current,
              r = X.current;
            if (!(n == null || t == null || !G)) {
              if (u === !0 && r == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[popover] trying to anchor to mouse, but no coords are set",
                    ])),
                );
                return;
              }
              var a = o("WAWebPopoverPosition").getFixedElementPosition(
                  u === !0 && r != null ? r : t,
                  n,
                  w,
                  i,
                  k,
                  P === !0 ? { width: h, height: h / 2, offset: y } : null,
                ),
                l = a.alignment,
                s = a.arrowCoords,
                c = a.coords,
                d = a.position,
                m = o("WAWebPopoverPosition").getDefaultTransformOrigin({
                  position: d,
                  alignment: l,
                });
              V(
                babelHelpers.extends({}, c, {
                  transformOrigin: m,
                  position: d,
                  alignment: l,
                  arrowCoords: s,
                }),
              );
            }
          },
          [B, w, i, k, G, u, P],
        ),
        J = O == null ? void 0 : O.onOpen,
        Z = t.onOpen,
        ee = m(
          function () {
            (z(!0), J == null || J(), Z == null || Z());
          },
          [J, Z],
        ),
        te = o("useWAWebTimeout").useTimeout(ee, M),
        ne = te[0],
        re = te[1],
        oe = O == null ? void 0 : O.onClose,
        ae = t.onClose,
        ie = m(
          function () {
            ((X.current = null),
              oe == null || oe(),
              ae == null || ae(),
              re(),
              z(!1));
          },
          [re, oe, ae],
        );
      (p(
        function () {
          if (!(B.current == null || K || !G))
            return o("WAWebMutationObserver").observeMutations(
              B.current,
              { subtree: !0, attributes: !0, childList: !0 },
              function () {
                (N != null && N.includes("hover") && ie(), Y());
              },
            );
        },
        [B, Y, K, G, ie, N],
      ),
        p(
          function () {
            if (!(W.current == null || K || !G))
              return o("WAWebMutationObserver").observeMutations(
                W.current,
                { subtree: !0, attributes: !0, childList: !0 },
                function () {
                  Y();
                },
              );
          },
          [Y, K, G],
        ));
      var le = M != null ? ne : ee,
        se = m(
          function (e) {
            (e.stopPropagation(),
              u === !0
                ? (X.current = { x: e.clientX, y: e.clientY })
                : (X.current = null),
              le());
          },
          [u, le],
        );
      p(
        function () {
          var e = B.current;
          if (!(e == null || N == null)) {
            var t = N;
            t instanceof Array || (t = [t]);
            var n = t.map(function (t) {
              switch (t) {
                case "click":
                  return v(e, se);
                case "contextmenu":
                  return S(e, se, K);
                case "hover":
                  return R(e, se, ie);
                case "hover-popover":
                  return E(e, W.current, se, ie);
                case "focus":
                  return L(e, le, ie);
                case "controllable":
                  return r("WAWebNoop");
              }
            });
            return function () {
              return n.forEach(function (e) {
                return e();
              });
            };
          }
        },
        [N, B, le, ie, K, u, se],
      );
      var ue = function () {
          if (W.current != null) {
            var e = o("WAWebKeyboardTabUtils").getNextTabbableElement(
              W.current,
            );
            e != null && e.focus();
          }
        },
        ce = {
          showPopover: ee,
          hidePopover: ie,
          popoverIsVisible: G,
          popoverIsAnimating: K,
        };
      (_(I, function () {
        return ce;
      }),
        _(O == null ? void 0 : O.controllerRef, function () {
          return ce;
        }));
      var de = null;
      if (a != null) {
        var me = c.jsxs("div", {
            className: "x1n2onr6",
            children: [
              P === !0 &&
                (U == null ? void 0 : U.arrowCoords) != null &&
                c.jsx(o("WAWebPopoverArrow.react").PopoverArrow, {
                  coords: U.arrowCoords,
                  popoverPosition: U.position,
                  xstyle: d,
                  width: h,
                }),
              t.element,
            ],
          }),
          pe;
        if (t.dismissable === !0) {
          var _e;
          pe = c.jsx(o("WAWebUimUie.react").UIE, {
            escapable: !0,
            popable: !0,
            displayName: (_e = t.name) != null ? _e : "Popover",
            requestFocus: ue,
            requestDismiss: ie,
            children: me,
          });
        } else pe = me;
        var fe =
          u !== !0 &&
          c.jsx("div", {
            className: "x10l6tqk x8knxv4",
            style: { top: -k, right: -k, bottom: -k, left: -k },
          });
        de = o("ReactDOM").createPortal(
          c.jsx(r("WAWebVelocityTransition"), {
            transitionName: "scaleAndFade",
            in: G,
            nodeRef: W,
            mountOnEnter: !0,
            unmountOnExit: !0,
            appear: !0,
            enter: D,
            exit: $,
            timeout: 300,
            onEnter: Y,
            onEntering: function () {
              return Q(!0);
            },
            onEntered: function () {
              (D === !1 && Y(), Q(!1));
            },
            onExiting: function () {
              return Q(!0);
            },
            onExited: function () {
              return Q(!1);
            },
            children: c.jsxs("div", {
              ref: W,
              "data-testid": void 0,
              "data-animate-dropdown-item": !0,
              style: U,
              className: "xixxii4 x9dfjz6 x1al4vs7",
              children: [fe, pe],
            }),
          }),
          a,
        );
      } else
        G &&
          a == null &&
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[popover] portal ref is missing!",
              ])),
          );
      return {
        popover: de,
        showPopover: ee,
        hidePopover: ie,
        popoverIsVisible: G,
        popoverIsAnimating: K,
      };
    }
    ((l.PopoverAlignment = o("WAWebPopoverPosition").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopoverPosition").PopoverPosition),
      (l.ANCHOR_PORTAL_ID = C),
      (l.PopoverPortalBucket = b),
      (l.usePopoverElement = k));
  },
  98,
);
