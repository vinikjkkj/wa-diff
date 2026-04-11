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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(43),
        i = r("useWAWebUiIdle")(),
        l = _(null),
        u = _(null),
        d = _(null),
        m = _(!1),
        p = _(null),
        h = _(0),
        y = f(void 0),
        C = y[0],
        b = y[1],
        v = f(!1),
        S = v[0],
        R = v[1],
        L = f(null),
        E = L[0],
        k = L[1],
        I;
      a[0] !== e
        ? ((I = function () {
            return g(e);
          }),
          (a[0] = e),
          (a[1] = I))
        : (I = a[1]);
      var T = f(I),
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
        Q;
      a[2] !== e || a[3] !== C || a[4] !== t || a[5] !== i
        ? ((Q = function (a, l) {
            var n = l === void 0 ? {} : l,
              s = n.transition,
              _ = n.uim,
              f = n.noFocus,
              y = n.onEnterAnimationComplete,
              v = n.newDrawerContext,
              S = n.focusType,
              L = n.disableRotateFocus,
              E = n.focusOnUnMount,
              I = n.onGuardProceed,
              T = n.onGuardReject,
              D = s === void 0 ? g(e) : s,
              $ =
                v === void 0
                  ? o("WAWebDrawerContext").undefinedDrawerContext
                  : v,
              P = E === void 0 ? !1 : E,
              M;
            a != null && typeof a == "object" && "descriptorType" in a
              ? (M = c.jsx(r("WAWebDrawerResolver.react"), { descriptor: a }))
              : (M = a);
            var w = o("WAWebNonEmptyString").asMaybeNonEmptyString(
                r("uniqueID")("DrawerManager" + e),
              ),
              F = null;
            (P && (F = document.activeElement), (u.current = F));
            var O = function () {
              (b(M), k(w), x(D), N(_), A(f), U(y), G($), K(S), B(L), R(P));
            };
            if (!m.current && C) {
              if (C.key != null && r("lodash").isEqual(C.key, M.key)) return !0;
              var W = function () {
                  (t && t("updated"),
                    (d.current = o("WAWebDrawerManager.react").Transition.NONE),
                    O(),
                    i(function () {
                      d.current = D;
                    }));
                },
                q = p.current;
              if (q != null) {
                var V = (h.current = h.current + 1);
                return (
                  q("replace").then(function (e) {
                    e && h.current === V
                      ? ((p.current = null), W(), I == null || I())
                      : e || T == null || T();
                  }),
                  !1
                );
              }
              W();
            } else (t && t("opened"), O());
            return !0;
          }),
          (a[2] = e),
          (a[3] = C),
          (a[4] = t),
          (a[5] = i),
          (a[6] = Q))
        : (Q = a[6]);
      var X = Q,
        Y;
      a[7] !== S || a[8] !== t || a[9] !== i
        ? ((Y = function (n) {
            if (t) {
              var e =
                n != null && n.isConflictingDrawerOpening
                  ? "replaced"
                  : "closed";
              t(e);
            }
            if (
              ((m.current = !0),
              b(void 0),
              G(o("WAWebDrawerContext").undefinedDrawerContext),
              i(function () {
                m.current = !1;
              }),
              S)
            ) {
              var a = u == null ? void 0 : u.current;
              a && r("WAWebFocusTracer").focus(a);
            }
          }),
          (a[7] = S),
          (a[8] = t),
          (a[9] = i),
          (a[10] = Y))
        : (Y = a[10]);
      var J = Y,
        Z = r("useWAWebStableCallback")(J),
        ee;
      a[11] !== C || a[12] !== E || a[13] !== J || a[14] !== Z
        ? ((ee = function (t, n) {
            if ((t != null && E !== t) || !C) return !0;
            var e = p.current;
            if (e != null) {
              var r =
                  (n == null ? void 0 : n.isConflictingDrawerOpening) === !0
                    ? "conflict"
                    : "close",
                o = (h.current = h.current + 1);
              return (
                e(r).then(function (e) {
                  e && h.current === o
                    ? ((p.current = null),
                      Z(n),
                      n == null ||
                        n.onGuardProceed == null ||
                        n.onGuardProceed())
                    : e ||
                      n == null ||
                      n.onGuardReject == null ||
                      n.onGuardReject();
                }),
                !1
              );
            }
            return (J(n), !0);
          }),
          (a[11] = C),
          (a[12] = E),
          (a[13] = J),
          (a[14] = Z),
          (a[15] = ee))
        : (ee = a[15]);
      var te = ee,
        ne;
      a[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function () {
            var e,
              t = (e = l.current) == null ? void 0 : e.getElement();
            if (t) {
              var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t);
              n && r("WAWebFocusTracer").focus(n);
            }
          }),
          (a[16] = ne))
        : (ne = a[16]);
      var re = ne,
        oe;
      a[17] !== te || a[18] !== E
        ? ((oe = function () {
            te(E);
          }),
          (a[17] = te),
          (a[18] = E),
          (a[19] = oe))
        : (oe = a[19]);
      var ae = oe,
        ie;
      a[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = function (t) {
            return (
              (p.current = t),
              function () {
                p.current === t && (p.current = null);
              }
            );
          }),
          (a[20] = ie))
        : (ie = a[20]);
      var le = ie,
        se;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = function () {
            return p.current != null;
          }),
          (a[21] = se))
        : (se = a[21]);
      var ue = se,
        ce = _(null),
        de;
      a[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = function () {
            ce.current != null && (ce.current(!1), (ce.current = null));
          }),
          (a[22] = de))
        : (de = a[22]);
      var me = de,
        pe;
      a[23] !== X
        ? ((pe = function (t, r) {
            return (
              me(),
              new (s || (s = n("Promise")))(function (e) {
                var n = X(
                  t,
                  babelHelpers.extends({}, r, {
                    onGuardProceed: function () {
                      ((ce.current = null), e(!0));
                    },
                    onGuardReject: function () {
                      ((ce.current = null), e(!1));
                    },
                  }),
                );
                n ? e(!0) : (ce.current = e);
              })
            );
          }),
          (a[23] = X),
          (a[24] = pe))
        : (pe = a[24]);
      var _e = pe,
        fe;
      a[25] !== te
        ? ((fe = function (t, r) {
            return (
              me(),
              new (s || (s = n("Promise")))(function (e) {
                var n = te(
                  t != null ? t : null,
                  babelHelpers.extends({}, r, {
                    onGuardProceed: function () {
                      ((ce.current = null), e(!0));
                    },
                    onGuardReject: function () {
                      ((ce.current = null), e(!1));
                    },
                  }),
                );
                n ? e(!0) : (ce.current = e);
              })
            );
          }),
          (a[25] = te),
          (a[26] = fe))
        : (fe = a[26]);
      var ge = fe,
        he;
      a[27] !== C
        ? ((he = function () {
            return m.current === !0 ? !1 : !!C;
          }),
          (a[27] = C),
          (a[28] = he))
        : (he = a[28]);
      var ye = he,
        Ce;
      return (
        a[29] !== ge ||
        a[30] !== O ||
        a[31] !== C ||
        a[32] !== H ||
        a[33] !== E ||
        a[34] !== ye ||
        a[35] !== j ||
        a[36] !== ae ||
        a[37] !== w ||
        a[38] !== q ||
        a[39] !== _e ||
        a[40] !== D ||
        a[41] !== P
          ? ((Ce = {
              drawer: C,
              drawerId: E,
              transition: D,
              uim: P,
              noFocus: w,
              onEnterAnimationComplete: q,
              drawerContext: H,
              focusType: j,
              disableRotateFocus: O,
              uieRef: l,
              blockTransitionRef: d,
              handleRequestDismiss: ae,
              openDrawer: _e,
              closeDrawer: ge,
              existsDrawer: ye,
              focusDrawer: re,
              updateContext: G,
              registerCloseGuard: le,
              hasCloseGuard: ue,
            }),
            (a[29] = ge),
            (a[30] = O),
            (a[31] = C),
            (a[32] = H),
            (a[33] = E),
            (a[34] = ye),
            (a[35] = j),
            (a[36] = ae),
            (a[37] = w),
            (a[38] = q),
            (a[39] = _e),
            (a[40] = D),
            (a[41] = P),
            (a[42] = Ce))
          : (Ce = a[42]),
        Ce
      );
    }
    l.useDrawerManagerEvents = h;
  },
  98,
);
