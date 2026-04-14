__d(
  "useWAWebDrawerManagerEvents",
  [
    "Promise",
    "WALogger",
    "WAWebDrawerContext",
    "WAWebDrawerManager.react",
    "WAWebDrawerResolver.react",
    "WAWebFocusTracer",
    "WAWebKeyboardTabUtils",
    "WAWebNonEmptyString",
    "lodash",
    "react",
    "uniqueID",
    "useWAWebStableCallback",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = function (t) {
        switch (t) {
          case o("WAWebDrawerManager.react").Dir.LEFT:
          case o("WAWebDrawerManager.react").Dir.FULLSCREEN:
            return o("WAWebDrawerManager.react").Transition.LEFT;
          case o("WAWebDrawerManager.react").Dir.MID:
            return o("WAWebDrawerManager.react").Transition.MID;
          default:
            return o("WAWebDrawerManager.react").Transition.RIGHT;
        }
      };
    function h(e, t) {
      var a = r("useWAWebUiIdle")(),
        i = _(null),
        l = _(null),
        u = _(null),
        d = _(!1),
        h = _(null),
        y = _(0),
        C = f(void 0),
        b = C[0],
        v = C[1],
        S = f(!1),
        R = S[0],
        L = S[1],
        E = f(null),
        k = E[0],
        I = E[1],
        T = f(function () {
          return g(e);
        }),
        D = T[0],
        x = T[1],
        $ = f(void 0),
        P = $[0],
        N = $[1],
        M = f(void 0),
        w = M[0],
        A = M[1],
        F = f(!1),
        O = F[0],
        B = F[1],
        W = f(void 0),
        q = W[0],
        U = W[1],
        V = f(o("WAWebDrawerContext").undefinedDrawerContext),
        H = V[0],
        G = V[1],
        z = f(o("WAWebKeyboardTabUtils").FocusType.CUSTOM),
        j = z[0],
        K = z[1],
        Q = m(
          function (n, i) {
            var s = i === void 0 ? {} : i,
              m = s.transition,
              p = m === void 0 ? g(e) : m,
              _ = s.uim,
              f = s.noFocus,
              C = s.onEnterAnimationComplete,
              S = s.newDrawerContext,
              R =
                S === void 0
                  ? o("WAWebDrawerContext").undefinedDrawerContext
                  : S,
              E = s.focusType,
              k = s.disableRotateFocus,
              T = s.focusOnUnMount,
              D = T === void 0 ? !1 : T,
              $ = s.onGuardProceed,
              P = s.onGuardReject,
              M;
            n != null && typeof n == "object" && "descriptorType" in n
              ? (M = c.jsx(r("WAWebDrawerResolver.react"), { descriptor: n }))
              : (M = n);
            var w = o("WAWebNonEmptyString").asMaybeNonEmptyString(
                r("uniqueID")("DrawerManager" + e),
              ),
              F = null;
            (D && (F = document.activeElement), (l.current = F));
            var O = function () {
              (v(M), I(w), x(p), N(_), A(f), U(C), G(R), K(E), B(k), L(D));
            };
            if (!d.current && b) {
              if (b.key != null && r("lodash").isEqual(b.key, M.key)) return !0;
              var W = function () {
                  (t && t("updated"),
                    (u.current = o("WAWebDrawerManager.react").Transition.NONE),
                    O(),
                    a(function () {
                      u.current = p;
                    }));
                },
                q = h.current;
              if (q != null) {
                var V = ++y.current;
                return (
                  q("replace").then(function (e) {
                    e && y.current === V
                      ? ((h.current = null), W(), $ == null || $())
                      : e || P == null || P();
                  }),
                  !1
                );
              }
              W();
            } else (t && t("opened"), O());
            return !0;
          },
          [e, b, t, a],
        ),
        X = m(
          function (e) {
            if (t) {
              var n =
                e != null && e.isConflictingDrawerOpening
                  ? "replaced"
                  : "closed";
              t(n);
            }
            if (
              ((d.current = !0),
              v(void 0),
              G(o("WAWebDrawerContext").undefinedDrawerContext),
              a(function () {
                d.current = !1;
              }),
              R)
            ) {
              var i = l == null ? void 0 : l.current;
              i && r("WAWebFocusTracer").focus(i);
            }
          },
          [t, R, a],
        ),
        Y = r("useWAWebStableCallback")(X),
        J = m(
          function (e, t) {
            if ((e != null && k !== e) || !b) return !0;
            var n = h.current;
            if (n != null) {
              var r =
                  (t == null ? void 0 : t.isConflictingDrawerOpening) === !0
                    ? "conflict"
                    : "close",
                o = ++y.current;
              return (
                n(r).then(function (e) {
                  e && y.current === o
                    ? ((h.current = null),
                      Y(t),
                      t == null ||
                        t.onGuardProceed == null ||
                        t.onGuardProceed())
                    : e ||
                      t == null ||
                      t.onGuardReject == null ||
                      t.onGuardReject();
                }),
                !1
              );
            }
            return (X(t), !0);
          },
          [b, k, X, Y],
        ),
        Z = m(function () {
          var e,
            t = (e = i.current) == null ? void 0 : e.getElement();
          if (t) {
            var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t);
            n && r("WAWebFocusTracer").focus(n);
          }
        }, []),
        ee = m(
          function () {
            J(k);
          },
          [J, k],
        ),
        te = m(function (e) {
          return (
            (h.current = e),
            function () {
              h.current === e && (h.current = null);
            }
          );
        }, []),
        ne = m(function () {
          return h.current != null;
        }, []),
        re = _(null),
        oe = m(function () {
          re.current != null && (re.current(!1), (re.current = null));
        }, []),
        ae = m(
          function (e, t) {
            return (
              oe(),
              new (s || (s = n("Promise")))(function (n) {
                var r = Q(
                  e,
                  babelHelpers.extends({}, t, {
                    onGuardProceed: function () {
                      ((re.current = null), n(!0));
                    },
                    onGuardReject: function () {
                      ((re.current = null), n(!1));
                    },
                  }),
                );
                r ? n(!0) : (re.current = n);
              })
            );
          },
          [oe, Q],
        ),
        ie = m(
          function (e, t) {
            return (
              oe(),
              new (s || (s = n("Promise")))(function (n) {
                var r = J(
                  e != null ? e : null,
                  babelHelpers.extends({}, t, {
                    onGuardProceed: function () {
                      ((re.current = null), n(!0));
                    },
                    onGuardReject: function () {
                      ((re.current = null), n(!1));
                    },
                  }),
                );
                r ? n(!0) : (re.current = n);
              })
            );
          },
          [oe, J],
        ),
        le = m(
          function () {
            return d.current === !0 ? !1 : !!b;
          },
          [b],
        );
      return p(
        function () {
          return {
            drawer: b,
            drawerId: k,
            transition: D,
            uim: P,
            noFocus: w,
            onEnterAnimationComplete: q,
            drawerContext: H,
            focusType: j,
            disableRotateFocus: O,
            uieRef: i,
            blockTransitionRef: u,
            handleRequestDismiss: ee,
            openDrawer: ae,
            closeDrawer: ie,
            existsDrawer: le,
            focusDrawer: Z,
            updateContext: G,
            registerCloseGuard: te,
            hasCloseGuard: ne,
          };
        },
        [O, b, H, k, j, ee, w, q, D, P, le, Z, G, te, ne, ae, ie],
      );
    }
    l.useDrawerManagerEvents = h;
  },
  98,
);
