__d(
  "BasePopoverSVGArrowContainer.react",
  [
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BasePopoverDownEdgeArrow.svg.react",
    "BasePopoverDownInsetArrow.svg.react",
    "BasePopoverReflowSheetContext",
    "BasePopoverRightEdgeArrow.svg.react",
    "BasePopoverRightInsetArrow.svg.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "arrowHorizontalPositionOffset",
        "arrowVerticalPositionOffset",
        "downEdgeArrowSvg",
        "downInsetArrowSvg",
        "ref",
        "rightEdgeArrowSvg",
        "rightInsetArrowSvg",
        "arrowAlignment",
        "arrowFill",
        "children",
        "testid",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useMemo,
      _ = 3,
      f = o("Locale").isRTL(),
      g = 25,
      h = {
        arrow: { filter: "xem7dle", position: "x10l6tqk", $$css: !0 },
        container: { position: "x1n2onr6", $$css: !0 },
      },
      y = {
        above: { marginBottom: "x1fqp7bg", $$css: !0 },
        below: { marginTop: "xcxhlts", $$css: !0 },
        end: { marginInlineStart: "xx6jrq6", $$css: !0 },
        start: { marginInlineEnd: "xjx09e3", $$css: !0 },
      },
      C = {
        above: { top: "x11k2h6o", $$css: !0 },
        below: { bottom: "xng853d", $$css: !0 },
        end: { insetInlineEnd: "xzn28fx", left: null, right: null, $$css: !0 },
        start: {
          insetInlineStart: "x1exbynx",
          left: null,
          right: null,
          $$css: !0,
        },
      },
      b = {
        end: { insetInlineEnd: "xetw22u", left: null, right: null, $$css: !0 },
        middle: {
          insetInlineStart: "x211tc3",
          left: null,
          right: null,
          $$css: !0,
        },
        start: {
          insetInlineStart: "x1a6xf5x",
          left: null,
          right: null,
          $$css: !0,
        },
        stretch: { $$css: !0 },
      },
      v = {
        end: { bottom: "x1ey2m1c", $$css: !0 },
        middle: { top: "x18g6o9x", $$css: !0 },
        start: { top: "x13vifvy", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function S(e, t, n) {
      var r = n - _;
      return e
        ? (f && t === "start") || (!f && t === "end")
          ? r * -1
          : r
        : t === "end" || t === "middle"
          ? r * -1
          : r;
    }
    function R(e) {
      var t = e.arrowAlignment,
        n = e.contextSize,
        r = e.layerAdjustment,
        o = e.popoverAlign,
        a = e.popoverPosition,
        i = r !== 0 && o !== "middle" ? -r : 0,
        l = a === "below" || a === "above";
      if (t !== "edge" && n != null) {
        var s = l ? n.width : n.height,
          u = s > 0 ? s / 2 : 0;
        u !== 0 && (i += S(l, o, o === "middle" ? g / 2 : u));
      }
      return i === 0
        ? {}
        : {
            transform: l
              ? "translateX(" + i + "px)"
              : "translateY(" + i + "px)",
          };
    }
    function L(e, t, n, r, o, a) {
      return e === "above" || e === "below"
        ? t === "middle"
          ? o
          : a
        : t === "middle"
          ? n
          : r;
    }
    function E(t) {
      var n,
        a = o("react-compiler-runtime").c(51),
        i,
        l,
        u,
        d,
        p,
        _,
        g,
        S,
        E,
        k,
        I,
        T;
      if (a[0] !== t) {
        var D = t.arrowHorizontalPositionOffset,
          x = t.arrowVerticalPositionOffset,
          $ = t.downEdgeArrowSvg,
          P = t.downInsetArrowSvg,
          N = t.ref,
          M = t.rightEdgeArrowSvg,
          w = t.rightInsetArrowSvg,
          A = t.arrowAlignment,
          F = t.arrowFill,
          O = t.children,
          B = t.testid,
          W = t.xstyle,
          q = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((d = D),
          (p = x),
          (_ = $),
          (g = P),
          (u = N),
          (S = M),
          (E = w),
          (k = A),
          (i = O),
          (I = B),
          (T = W),
          (l = q),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = u),
          (a[4] = d),
          (a[5] = p),
          (a[6] = _),
          (a[7] = g),
          (a[8] = S),
          (a[9] = E),
          (a[10] = k),
          (a[11] = I),
          (a[12] = T));
      } else
        ((i = a[1]),
          (l = a[2]),
          (u = a[3]),
          (d = a[4]),
          (p = a[5]),
          (_ = a[6]),
          (g = a[7]),
          (S = a[8]),
          (E = a[9]),
          (k = a[10]),
          (I = a[11]),
          (T = a[12]));
      var U = _ === void 0 ? r("BasePopoverDownEdgeArrow.svg.react") : _,
        V = g === void 0 ? r("BasePopoverDownInsetArrow.svg.react") : g,
        H = S === void 0 ? r("BasePopoverRightEdgeArrow.svg.react") : S,
        G = E === void 0 ? r("BasePopoverRightInsetArrow.svg.react") : E,
        z = k === void 0 ? "center" : k,
        j = m(r("BaseContextualLayerOrientationContext")),
        K = j.align,
        Q = j.position,
        X = m(r("BaseContextualLayerContextSizeContext")),
        Y;
      a[13] !== K ||
      a[14] !== U ||
      a[15] !== V ||
      a[16] !== Q ||
      a[17] !== H ||
      a[18] !== G
        ? ((Y = L(Q, K, G, H, V, U)),
          (a[13] = K),
          (a[14] = U),
          (a[15] = V),
          (a[16] = Q),
          (a[17] = H),
          (a[18] = G),
          (a[19] = Y))
        : (Y = a[19]);
      var J = Y,
        Z =
          (n = m(r("BaseContextualLayerLayerAdjustmentContext"))) != null
            ? n
            : 0,
        ee = f ? "start" : "end",
        te = f ? "end" : "start",
        ne = (K === "end" && !f) || (K === "start" && f),
        re = K === "middle" ? -Z : 0,
        oe = 1,
        ae = 1,
        ie = 0,
        le = 0;
      e: switch (Q) {
        case "above": {
          ((ie = 0 + re), ne && (oe = -1));
          break e;
        }
        case "below": {
          ((ie = 0 + re), (ae = -1), ne && (oe = -1));
          break e;
        }
        case te: {
          ((le = 0 + re), K === "start" && (ae = -1));
          break e;
        }
        case ee:
          ((le = 0 + re), (oe = -1), K === "start" && (ae = -1));
      }
      var se =
          "scale(" + oe + ", " + ae + ") translate(" + ie + "px, " + le + "px)",
        ue;
      a[20] !== se
        ? ((ue = { transform: se }), (a[20] = se), (a[21] = ue))
        : (ue = a[21]);
      var ce;
      a[22] !== K || a[23] !== z || a[24] !== X || a[25] !== Z || a[26] !== Q
        ? ((ce = R({
            arrowAlignment: z,
            contextSize: X,
            layerAdjustment: Z,
            popoverAlign: K,
            popoverPosition: Q,
          })),
          (a[22] = K),
          (a[23] = z),
          (a[24] = X),
          (a[25] = Z),
          (a[26] = Q),
          (a[27] = ce))
        : (ce = a[27]);
      var de;
      a[28] !== ue || a[29] !== ce
        ? ((de = { arrowStyle: ue, containerStyle: ce }),
          (a[28] = ue),
          (a[29] = ce),
          (a[30] = de))
        : (de = a[30]);
      var me = de,
        pe = me.arrowStyle,
        _e = me.containerStyle,
        fe = m(r("BasePopoverReflowSheetContext")),
        ge = fe.isReflowSheet,
        he;
      a[31] !== Q || a[32] !== T
        ? ((he = (s || (s = r("stylex")))(h.container, y[Q], T)),
          (a[31] = Q),
          (a[32] = T),
          (a[33] = he))
        : (he = a[33]);
      var ye = ge ? null : _e,
        Ce;
      a[34] !== I
        ? ((Ce = r("testID")(I)), (a[34] = I), (a[35] = Ce))
        : (Ce = a[35]);
      var be;
      a[36] !== K || a[37] !== Q
        ? ((be = (s || (s = r("stylex")))(
            h.arrow,
            C[Q],
            (Q === "start" || Q === "end") && v[K],
            (Q === "above" || Q === "below") && b[K],
          )),
          (a[36] = K),
          (a[37] = Q),
          (a[38] = be))
        : (be = a[38]);
      var ve;
      a[39] !== J || a[40] !== pe || a[41] !== be
        ? ((ve = c.jsx(J, {
            className: be,
            fill: "var(--card-background)",
            style: pe,
          })),
          (a[39] = J),
          (a[40] = pe),
          (a[41] = be),
          (a[42] = ve))
        : (ve = a[42]);
      var Se;
      return (
        a[43] !== i ||
        a[44] !== l ||
        a[45] !== u ||
        a[46] !== he ||
        a[47] !== ye ||
        a[48] !== Ce ||
        a[49] !== ve
          ? ((Se = c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                l,
                { className: he, ref: u, style: ye },
                Ce,
                { children: [i, ve] },
              ),
            )),
            (a[43] = i),
            (a[44] = l),
            (a[45] = u),
            (a[46] = he),
            (a[47] = ye),
            (a[48] = Ce),
            (a[49] = ve),
            (a[50] = Se))
          : (Se = a[50]),
        Se
      );
    }
    l.default = E;
  },
  98,
);
