__d(
  "BaseDialog.react",
  [
    "BaseThemeProvider.react",
    "BaseView.react",
    "CometHideLayerOnEscape.react",
    "CometThemeInfraBaseTheme.react",
    "UserAgent",
    "pointerEventDistance",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "anchorXStyle",
        "aria-label",
        "children",
        "cometThemeInfraConfig",
        "cometThemeInfraDisplayMode",
        "disableBottomSheetClosingWithDrag",
        "disableClosingWithEscape",
        "disableClosingWithMask",
        "enableBottomSheetBehavior",
        "onAnimationEnd",
        "onClose",
        "ref",
        "rootXStyle",
        "testid",
        "themeConfig",
        "withDeprecatedStyles",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = {
        anchor: {
          alignItems: "x1cy8zhl",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        anchorBottomSheet: { overscrollBehaviorY: "x1e4zzel", $$css: !0 },
        dialog: {
          boxSizing: "x1afcbsf",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          outline: "x1a2a7pz",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x71s49j",
          $$css: !0,
        },
        dialogBottomSheet: { touchAction: "x5ve5x3", $$css: !0 },
        root: {
          alignItems: "x1qjc9v5",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        rootWithDeprecatedStyles: {
          flexGrow: "x1c4vz4f",
          minHeight: "xg6iff7",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(56),
        a,
        i,
        l,
        u,
        d,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I;
      n[0] !== t
        ? ((a = t.anchorXStyle),
          (i = t["aria-label"]),
          (u = t.children),
          (d = t.cometThemeInfraConfig),
          (f = t.cometThemeInfraDisplayMode),
          (b = t.disableBottomSheetClosingWithDrag),
          (v = t.disableClosingWithEscape),
          (S = t.disableClosingWithMask),
          (R = t.enableBottomSheetBehavior),
          (g = t.onAnimationEnd),
          (h = t.onClose),
          (y = t.ref),
          (C = t.rootXStyle),
          (E = t.testid),
          (k = t.themeConfig),
          (L = t.withDeprecatedStyles),
          (I = t.xstyle),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = d),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C),
          (n[11] = b),
          (n[12] = v),
          (n[13] = S),
          (n[14] = R),
          (n[15] = L),
          (n[16] = E),
          (n[17] = k),
          (n[18] = I))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (d = n[5]),
          (f = n[6]),
          (g = n[7]),
          (h = n[8]),
          (y = n[9]),
          (C = n[10]),
          (b = n[11]),
          (v = n[12]),
          (S = n[13]),
          (R = n[14]),
          (L = n[15]),
          (E = n[16]),
          (k = n[17]),
          (I = n[18]));
      var T = b === void 0 ? !1 : b,
        D = v === void 0 ? !1 : v,
        x = S === void 0 ? !1 : S,
        $ = R === void 0 ? !1 : R,
        P = L === void 0 ? !1 : L,
        N = p(null),
        M = p(null),
        w = p(null),
        A = p(!1),
        F = p(h),
        O,
        B;
      (n[19] !== h
        ? ((O = function () {
            F.current = h;
          }),
          (B = [h]),
          (n[19] = h),
          (n[20] = O),
          (n[21] = B))
        : ((O = n[20]), (B = n[21])),
        m(O, B));
      var W, q;
      (n[22] !== x || n[23] !== h
        ? ((W = function () {
            var e = N.current,
              t = M.current;
            if (!(e == null || t == null || x)) {
              var n = function (r) {
                  var n;
                  return (n =
                    r instanceof Node &&
                    !(t != null && t.contains(r)) &&
                    (e == null ? void 0 : e.contains(r))) != null
                    ? n
                    : !1;
                },
                a = "PointerEvent" in window,
                i = window.navigator.userAgent.includes("Oculus");
              if (!a || i) {
                var l = function (t) {
                  n(t.target) && h();
                };
                return (
                  e.addEventListener("click", l),
                  function () {
                    e.removeEventListener("click", l);
                  }
                );
              }
              var s = function (t) {
                  if (t.isPrimary) {
                    var e = n(t.target);
                    ((A.current = e), (w.current = t));
                  }
                },
                u = function (t) {
                  var e = n(t.target);
                  if (A.current && e && w.current != null && t.isPrimary) {
                    var r = o("pointerEventDistance").isWithinThreshold(
                      w.current,
                      t,
                    );
                    r && h();
                  }
                  ((A.current = !1), (w.current = null));
                };
              (e.addEventListener("pointerup", u),
                e.addEventListener("pointerdown", s));
              var c = function (t) {
                (r("UserAgent").isBrowser("Mobile Safari") ||
                  r("UserAgent").isBrowser("Chrome for iOS")) &&
                  n(t.target) &&
                  t.preventDefault();
              };
              return (
                e.addEventListener("touchend", c),
                function () {
                  (e.removeEventListener("pointerup", u),
                    e.removeEventListener("pointerdown", s),
                    e.removeEventListener("touchend", c));
                }
              );
            }
          }),
          (q = [x, h]),
          (n[22] = x),
          (n[23] = h),
          (n[24] = W),
          (n[25] = q))
        : ((W = n[24]), (q = n[25])),
        m(W, q));
      var U;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function (t) {
            var e = M.current;
            if (e !== null) {
              var n,
                r = !0,
                o = (n = t.touches) == null ? void 0 : n[0].pageY,
                a = parseInt(
                  e.style.height !== "" ? e.style.height : e.clientHeight,
                  10,
                ),
                i = 0,
                l = {
                  transform: e.style.transform,
                  transitionDuration: e.style.transitionDuration,
                  transitionTimingFunction: e.style.transitionTimingFunction,
                },
                s = function (n) {
                  if (r) {
                    var t,
                      a = o - ((t = n.touches) == null ? void 0 : t[0].pageY);
                    a < 0 &&
                      ((i = a),
                      e != null &&
                        (e.style.transform = "translateY(" + -1 * a + "px)"));
                  }
                  n.stopPropagation();
                },
                u = function (n) {
                  if (((r = !1), e != null))
                    if (
                      ((e.style.transitionTimingFunction = "ease-out"),
                      (e.style.transitionDuration = "0.2s"),
                      a + i < a / 2)
                    ) {
                      var t = function () {
                        (e.removeEventListener("transitionend", t),
                          (e.style.display = "none"),
                          F.current());
                      };
                      (e.addEventListener("transitionend", t),
                        (e.style.transform = "translateY(100%)"));
                    } else {
                      var o = function () {
                        (e.removeEventListener("transitionend", o),
                          (e.style.transform = l.transform),
                          (e.style.transitionDuration = l.transitionDuration),
                          (e.style.transitionTimingFunction =
                            l.transitionTimingFunction));
                      };
                      (e.addEventListener("transitionend", o),
                        (e.style.transform = "translateY(0%)"));
                    }
                  n.stopPropagation();
                };
              (e.addEventListener("touchmove", s),
                e.addEventListener("touchend", u));
            }
          }),
          (n[26] = U))
        : (U = n[26]);
      var V = U,
        H = r("useMergeRefs")(M, y),
        G;
      n[27] !== a || n[28] !== $
        ? ((G = (s || (s = r("stylex"))).props(
            _.anchor,
            $ && _.anchorBottomSheet,
            a,
          )),
          (n[27] = a),
          (n[28] = $),
          (n[29] = G))
        : (G = n[29]);
      var z = $ && !T ? V : void 0,
        j = i != null ? i : void 0,
        K = $ && _.dialogBottomSheet,
        Q;
      n[30] !== K || n[31] !== I
        ? ((Q = [_.dialog, K, I]), (n[30] = K), (n[31] = I), (n[32] = Q))
        : (Q = n[32]);
      var X;
      n[33] !== l ||
      n[34] !== u ||
      n[35] !== H ||
      n[36] !== j ||
      n[37] !== Q ||
      n[38] !== E
        ? ((X = c.jsx(
            r("BaseView.react"),
            babelHelpers.extends({}, l, {
              "aria-label": j,
              "aria-modal": !0,
              ref: H,
              role: "dialog",
              testid: void 0,
              xstyle: Q,
              children: u,
            }),
          )),
          (n[33] = l),
          (n[34] = u),
          (n[35] = H),
          (n[36] = j),
          (n[37] = Q),
          (n[38] = E),
          (n[39] = X))
        : (X = n[39]);
      var Y;
      n[40] !== G || n[41] !== z || n[42] !== X
        ? ((Y = c.jsx(
            "div",
            babelHelpers.extends({}, G, { onTouchStart: z, children: X }),
          )),
          (n[40] = G),
          (n[41] = z),
          (n[42] = X),
          (n[43] = Y))
        : (Y = n[43]);
      var J = Y,
        Z;
      n[44] !== d ||
      n[45] !== f ||
      n[46] !== J ||
      n[47] !== g ||
      n[48] !== C ||
      n[49] !== k ||
      n[50] !== P
        ? ((Z =
            d != null
              ? c.jsx(r("CometThemeInfraBaseTheme.react"), {
                  displayMode: f,
                  ref: N,
                  themes: d,
                  xstyle: [_.root, P && _.rootWithDeprecatedStyles, C],
                  children: J,
                })
              : c.jsx(r("BaseThemeProvider.react"), {
                  config: k,
                  children: function (t, n) {
                    return c.jsx("div", {
                      className: (s || (s = r("stylex")))([
                        t,
                        _.root,
                        P && _.rootWithDeprecatedStyles,
                        C,
                      ]),
                      onAnimationEnd: g,
                      ref: N,
                      style: n,
                      children: J,
                    });
                  },
                })),
          (n[44] = d),
          (n[45] = f),
          (n[46] = J),
          (n[47] = g),
          (n[48] = C),
          (n[49] = k),
          (n[50] = P),
          (n[51] = Z))
        : (Z = n[51]);
      var ee = Z,
        te;
      return (
        n[52] !== D || n[53] !== h || n[54] !== ee
          ? ((te = D
              ? ee
              : c.jsx(r("CometHideLayerOnEscape.react"), {
                  onHide: h,
                  children: ee,
                })),
            (n[52] = D),
            (n[53] = h),
            (n[54] = ee),
            (n[55] = te))
          : (te = n[55]),
        te
      );
    }
    l.default = f;
  },
  98,
);
