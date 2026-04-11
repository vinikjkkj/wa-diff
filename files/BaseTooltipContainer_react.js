__d(
  "BaseTooltipContainer.react",
  [
    "BaseAnchorPositioningUtils",
    "BaseContextualLayerContextSizeContext",
    "BaseTooltipCarat.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "align",
        "alignOffsetXstyle",
        "anchorRef",
        "anchorTargetRef",
        "anchorTargetXstyle",
        "children",
        "closeButton",
        "id",
        "position",
        "role",
        "shouldFadeIn",
        "shouldShowCarat",
        "withCloseButton",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useLayoutEffect,
      _ = d.useState,
      f = 10.5,
      g = {
        anchorPositionContainer: { width: "xezivpi", $$css: !0 },
        container: {
          backgroundColor: "xj5tmjb",
          borderStartStartRadius: "xyjepno",
          borderStartEndRadius: "x15s83fx",
          borderEndEndRadius: "xdgutz0",
          borderEndStartRadius: "x1wjlvx0",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxShadow: "xms15q0",
          display: "x78zum5",
          filter: "xo8ld3r",
          maxWidth: "x86nfjv",
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "x1g0dm76",
          paddingInlineEnd: "xpdmqnj",
          $$css: !0,
        },
        fillXStyle: { fill: "x1fj6ok0", fillOpacity: "xlyfr8p", $$css: !0 },
        transitionIn: {
          opacity: "x1hc1fzr",
          transitionDuration: "xhb22t3",
          transitionTimingFunction: "xls3em1",
          $$css: !0,
        },
        transitionOut: {
          opacity: "xg01cxk",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
      },
      h = {
        above: { flexDirection: "xdt5ytf", $$css: !0 },
        base: {
          display: "x78zum5",
          marginBottom: "xjpr12u",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        below: { flexDirection: "x3ieub6", $$css: !0 },
        end: { flexDirection: "x15zctf7", $$css: !0 },
        start: { flexDirection: "x1q0g3np", $$css: !0 },
      },
      y = { marginInlineEnd: "x1c9tiao", $$css: !0 },
      C = { marginInlineStart: "x4lel18", $$css: !0 },
      b = {
        alignEnd: function (t) {
          return [
            y,
            {
              "--x-marginInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("calc(" + (t != null ? t : 0) + "px / 2 - " + f + "px)"),
            },
          ];
        },
        alignStart: function (t) {
          return [
            C,
            {
              "--x-marginInlineStart": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("calc(" + (t != null ? t : 0) + "px / 2 - " + f + "px)"),
            },
          ];
        },
        end: { alignItems: "xuk3077", $$css: !0 },
        middle: { alignItems: "x6s0dn4", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
        stretch: { alignItems: "x6s0dn4", $$css: !0 },
      };
    function v(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(70),
        l,
        u,
        d,
        f,
        y,
        C,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x;
      i[0] !== t
        ? ((R = t.ref),
          (L = t.align),
          (l = t.alignOffsetXstyle),
          (u = t.anchorRef),
          (d = t.anchorTargetRef),
          (f = t.anchorTargetXstyle),
          (C = t.children),
          (v = t.closeButton),
          (S = t.id),
          (E = t.position),
          (k = t.role),
          (I = t.shouldFadeIn),
          (T = t.shouldShowCarat),
          (D = t.withCloseButton),
          (x = t.xstyle),
          (y = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = d),
          (i[4] = f),
          (i[5] = y),
          (i[6] = C),
          (i[7] = v),
          (i[8] = S),
          (i[9] = R),
          (i[10] = L),
          (i[11] = E),
          (i[12] = k),
          (i[13] = I),
          (i[14] = T),
          (i[15] = D),
          (i[16] = x))
        : ((l = i[1]),
          (u = i[2]),
          (d = i[3]),
          (f = i[4]),
          (y = i[5]),
          (C = i[6]),
          (v = i[7]),
          (S = i[8]),
          (R = i[9]),
          (L = i[10]),
          (E = i[11]),
          (k = i[12]),
          (I = i[13]),
          (T = i[14]),
          (D = i[15]),
          (x = i[16]));
      var $ = L === void 0 ? "middle" : L,
        P = E === void 0 ? "below" : E,
        N = k === void 0 ? "tooltip" : k,
        M = I === void 0 ? !1 : I,
        w = T === void 0 ? !1 : T,
        A = D === void 0 ? !0 : D,
        F = _(null),
        O = F[0],
        B = F[1],
        W = m(r("BaseContextualLayerContextSizeContext")),
        q,
        U;
      (i[17] !== u
        ? ((q = function () {
            var e;
            if (!(u != null && u.current == null)) {
              var t =
                (e = u) == null || (e = e.current) == null
                  ? void 0
                  : e.getBoundingClientRect();
              if (t != null) {
                var n = { height: t.height, width: t.width };
                B(n);
              }
            }
          }),
          (U = [u]),
          (i[17] = u),
          (i[18] = q),
          (i[19] = U))
        : ((q = i[18]), (U = i[19])),
        p(q, U));
      var V, H;
      if (i[20] !== O || i[21] !== W || i[22] !== M || i[23] !== x) {
        var G = o(
          "BaseAnchorPositioningUtils",
        ).passesAnchorPositionExperiment();
        ((H = G ? O : W),
          (V = (s || (s = r("stylex"))).props(
            g.container,
            G && g.anchorPositionContainer,
            g.transitionOut,
            x,
            M && g.transitionIn,
          )),
          (i[20] = O),
          (i[21] = W),
          (i[22] = M),
          (i[23] = x),
          (i[24] = V),
          (i[25] = H));
      } else ((V = i[24]), (H = i[25]));
      var z;
      i[26] !== V
        ? ((z = babelHelpers.extends({}, V)), (i[26] = V), (i[27] = z))
        : (z = i[27]);
      var j = z,
        K = N,
        Q;
      i[28] !== C || i[29] !== v || i[30] !== N || i[31] !== A
        ? ((Q =
            N === "dialog"
              ? c.jsx(o("FocusRegion.react").FocusRegion, {
                  autoFocusQuery: o("focusScopeQueries").focusableScopeQuery,
                  children: c.jsxs(c.Fragment, {
                    children: [C, A === !0 && c.jsx("div", { children: v })],
                  }),
                })
              : c.jsx(c.Fragment, { children: C })),
          (i[28] = C),
          (i[29] = v),
          (i[30] = N),
          (i[31] = A),
          (i[32] = Q))
        : (Q = i[32]);
      var X;
      i[33] !== y ||
      i[34] !== j ||
      i[35] !== S ||
      i[36] !== R ||
      i[37] !== K ||
      i[38] !== Q
        ? ((X = c.jsx(
            "div",
            babelHelpers.extends({}, y, j, {
              "data-testid": void 0,
              id: S,
              ref: R,
              role: K,
              children: Q,
            }),
          )),
          (i[33] = y),
          (i[34] = j),
          (i[35] = S),
          (i[36] = R),
          (i[37] = K),
          (i[38] = Q),
          (i[39] = X))
        : (X = i[39]);
      var Y = X,
        J = P === "auto" ? "below" : P,
        Z = h[J],
        ee = b[$],
        te;
      i[40] !== Z || i[41] !== ee
        ? ((te = [h.base, Z, ee]), (i[40] = Z), (i[41] = ee), (i[42] = te))
        : (te = i[42]);
      var ne;
      if (
        i[43] !== $ ||
        i[44] !== l ||
        i[45] !== ((n = H) == null ? void 0 : n.width)
      ) {
        var re, oe;
        ((ne =
          l === void 0 &&
          $ === "end" &&
          b.alignEnd((re = H) == null ? void 0 : re.width)),
          (i[43] = $),
          (i[44] = l),
          (i[45] = (oe = H) == null ? void 0 : oe.width),
          (i[46] = ne));
      } else ne = i[46];
      var ae;
      if (
        i[47] !== $ ||
        i[48] !== l ||
        i[49] !== ((a = H) == null ? void 0 : a.width)
      ) {
        var ie, le;
        ((ae =
          l === void 0 &&
          $ === "start" &&
          b.alignStart((ie = H) == null ? void 0 : ie.width)),
          (i[47] = $),
          (i[48] = l),
          (i[49] = (le = H) == null ? void 0 : le.width),
          (i[50] = ae));
      } else ae = i[50];
      var se;
      i[51] !== l || i[52] !== ne || i[53] !== ae
        ? ((se = [ne, ae, l]),
          (i[51] = l),
          (i[52] = ne),
          (i[53] = ae),
          (i[54] = se))
        : (se = i[54]);
      var ue;
      i[55] !== P || i[56] !== M || i[57] !== w
        ? ((ue =
            w &&
            c.jsx(r("BaseTooltipCarat.react"), {
              fillXStyle: g.fillXStyle,
              position: P,
              shouldFadeIn: M,
              transitionInXStyle: g.transitionIn,
              transitionOutXStyle: g.transitionOut,
            })),
          (i[55] = P),
          (i[56] = M),
          (i[57] = w),
          (i[58] = ue))
        : (ue = i[58]);
      var ce;
      i[59] !== se || i[60] !== ue
        ? ((ce = c.jsx(o("react-strict-dom").html.div, {
            style: se,
            children: ue,
          })),
          (i[59] = se),
          (i[60] = ue),
          (i[61] = ce))
        : (ce = i[61]);
      var de;
      i[62] !== Y || i[63] !== te || i[64] !== ce
        ? ((de = c.jsxs(o("react-strict-dom").html.div, {
            style: te,
            children: [Y, ce],
          })),
          (i[62] = Y),
          (i[63] = te),
          (i[64] = ce),
          (i[65] = de))
        : (de = i[65]);
      var me;
      return (
        i[66] !== d || i[67] !== f || i[68] !== de
          ? ((me = c.jsx(o("react-strict-dom").html.div, {
              ref: d,
              style: f,
              children: de,
            })),
            (i[66] = d),
            (i[67] = f),
            (i[68] = de),
            (i[69] = me))
          : (me = i[69]),
        me
      );
    }
    l.default = v;
  },
  98,
);
