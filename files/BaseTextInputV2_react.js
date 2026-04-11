__d(
  "BaseTextInputV2.react",
  [
    "BaseFocusRing.react",
    "FocusWithinHandler.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "addOnBottom",
        "addOnEnd",
        "addOnStart",
        "autoCapitalize",
        "autoComplete",
        "autoFocus",
        "content",
        "disabled",
        "focusRingXStyle",
        "id",
        "inputMode",
        "labelPosition",
        "labelTestId",
        "maxLength",
        "minLength",
        "name",
        "onBlur",
        "onChange",
        "onClick",
        "onFocus",
        "onPaste",
        "onSubmitEditing",
        "onValueChange",
        "placeholder",
        "readOnly",
        "ref",
        "required",
        "role",
        "suppressFocusRing",
        "testid",
        "type",
        "validationState",
        "value",
        "variant",
        "variantColor",
        "label",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useId,
      m = c.useState,
      p = o("Locale").isRTL(),
      _ = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        content: { flexGrow: "x1iyjqo2", $$css: !0 },
      };
    function f(t) {
      var n,
        a = o("react-compiler-runtime").c(118),
        i,
        l,
        s,
        c,
        f,
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
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z;
      if (a[0] !== t) {
        var j = t.addOnBottom,
          K = t.addOnEnd,
          Q = t.addOnStart,
          X = t.autoCapitalize,
          Y = t.autoComplete,
          J = t.autoFocus,
          Z = t.content,
          ee = t.disabled,
          te = t.focusRingXStyle,
          ne = t.id,
          re = t.inputMode,
          oe = t.labelPosition,
          ae = t.labelTestId,
          ie = t.maxLength,
          le = t.minLength,
          se = t.name,
          ue = t.onBlur,
          ce = t.onChange,
          de = t.onClick,
          me = t.onFocus,
          pe = t.onPaste,
          _e = t.onSubmitEditing,
          fe = t.onValueChange,
          ge = t.placeholder,
          he = t.readOnly,
          ye = t.ref,
          Ce = t.required,
          be = t.role,
          ve = t.suppressFocusRing,
          Se = t.testid,
          Re = t.type,
          Le = t.validationState,
          Ee = t.value,
          ke = t.variant,
          Ie = t.variantColor,
          Te = t.label,
          De = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((i = j),
          (l = K),
          (s = Q),
          (f = X),
          (h = Y),
          (y = J),
          (C = Z),
          (b = ee),
          (v = te),
          (S = ne),
          (R = re),
          (B = oe),
          (E = ae),
          (k = ie),
          (I = le),
          (T = se),
          (D = ue),
          (x = ce),
          ($ = de),
          (P = me),
          (N = pe),
          (M = fe),
          (w = ge),
          (A = he),
          (F = ye),
          (O = Ce),
          (W = be),
          (q = ve),
          (H = Se),
          (U = Re),
          (V = Ee),
          (G = ke),
          (z = Ie),
          (L = Te),
          (c = De),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c),
          (a[5] = f),
          (a[6] = h),
          (a[7] = y),
          (a[8] = C),
          (a[9] = b),
          (a[10] = v),
          (a[11] = S),
          (a[12] = R),
          (a[13] = L),
          (a[14] = E),
          (a[15] = k),
          (a[16] = I),
          (a[17] = T),
          (a[18] = D),
          (a[19] = x),
          (a[20] = $),
          (a[21] = P),
          (a[22] = N),
          (a[23] = M),
          (a[24] = w),
          (a[25] = A),
          (a[26] = F),
          (a[27] = O),
          (a[28] = B),
          (a[29] = W),
          (a[30] = q),
          (a[31] = U),
          (a[32] = V),
          (a[33] = H),
          (a[34] = G),
          (a[35] = z));
      } else
        ((i = a[1]),
          (l = a[2]),
          (s = a[3]),
          (c = a[4]),
          (f = a[5]),
          (h = a[6]),
          (y = a[7]),
          (C = a[8]),
          (b = a[9]),
          (v = a[10]),
          (S = a[11]),
          (R = a[12]),
          (L = a[13]),
          (E = a[14]),
          (k = a[15]),
          (I = a[16]),
          (T = a[17]),
          (D = a[18]),
          (x = a[19]),
          ($ = a[20]),
          (P = a[21]),
          (N = a[22]),
          (M = a[23]),
          (w = a[24]),
          (A = a[25]),
          (F = a[26]),
          (O = a[27]),
          (B = a[28]),
          (W = a[29]),
          (q = a[30]),
          (U = a[31]),
          (V = a[32]),
          (H = a[33]),
          (G = a[34]),
          (z = a[35]));
      var xe = B === void 0 ? "inside" : B,
        $e = W === void 0 ? "textbox" : W,
        Pe = q === void 0 ? !1 : q,
        Ne = U === void 0 ? "text" : U,
        Me = V === void 0 ? "" : V,
        we = G,
        Ae = we.xstyleConfig,
        Fe;
      a[36] !== z
        ? ((Fe = z != null ? z : { xstyleConfig: void 0 }),
          (a[36] = z),
          (a[37] = Fe))
        : (Fe = a[37]);
      var Oe = Fe,
        Be = Oe.xstyleConfig,
        We = d(),
        qe = m(!1),
        Ue = qe[0],
        Ve = qe[1],
        He = m(!1),
        Ge = He[0],
        ze = He[1],
        je;
      a[38] !== x || a[39] !== M
        ? ((je = function (t) {
            (x && x(t), M && M(t.target.value));
          }),
          (a[38] = x),
          (a[39] = M),
          (a[40] = je))
        : (je = a[40]);
      var Ke = je,
        Qe;
      a[41] !== D
        ? ((Qe = function (t) {
            (Ve(!1), D && D(t));
          }),
          (a[41] = D),
          (a[42] = Qe))
        : (Qe = a[42]);
      var Xe = Qe,
        Ye;
      a[43] !== P
        ? ((Ye = function (t) {
            (Ve(!0), P && P(t));
          }),
          (a[43] = P),
          (a[44] = Ye))
        : (Ye = a[44]);
      var Je = Ye,
        Ze;
      a[45] !== (Be == null ? void 0 : Be.label) ||
      a[46] !== (Be == null ? void 0 : Be.labelDisabled) ||
      a[47] !== (Be == null ? void 0 : Be.labelFilled) ||
      a[48] !== (Be == null ? void 0 : Be.labelFocused) ||
      a[49] !== (Be == null ? void 0 : Be.labelHovered) ||
      a[50] !== b ||
      a[51] !== Ue ||
      a[52] !== Ge ||
      a[53] !== S ||
      a[54] !== We ||
      a[55] !== L ||
      a[56] !== E ||
      a[57] !== Me ||
      a[58] !== Ae.label ||
      a[59] !== Ae.labelDisabled ||
      a[60] !== Ae.labelFilled ||
      a[61] !== Ae.labelFocused ||
      a[62] !== Ae.labelHovered
        ? ((Ze =
            !!L &&
            u.jsx(o("react-strict-dom").html.label, {
              "data-testid": void 0,
              for: S != null ? S : We,
              style: [
                [Ae.label, Be == null ? void 0 : Be.label],
                !!b && [
                  Ae.labelDisabled,
                  Be == null ? void 0 : Be.labelDisabled,
                ],
                Ue && [Ae.labelFocused, Be == null ? void 0 : Be.labelFocused],
                !!Me && [Ae.labelFilled, Be == null ? void 0 : Be.labelFilled],
                Ge && [Ae.labelHovered, Be == null ? void 0 : Be.labelHovered],
              ],
              children: L,
            })),
          (a[45] = Be == null ? void 0 : Be.label),
          (a[46] = Be == null ? void 0 : Be.labelDisabled),
          (a[47] = Be == null ? void 0 : Be.labelFilled),
          (a[48] = Be == null ? void 0 : Be.labelFocused),
          (a[49] = Be == null ? void 0 : Be.labelHovered),
          (a[50] = b),
          (a[51] = Ue),
          (a[52] = Ge),
          (a[53] = S),
          (a[54] = We),
          (a[55] = L),
          (a[56] = E),
          (a[57] = Me),
          (a[58] = Ae.label),
          (a[59] = Ae.labelDisabled),
          (a[60] = Ae.labelFilled),
          (a[61] = Ae.labelFocused),
          (a[62] = Ae.labelHovered),
          (a[63] = Ze))
        : (Ze = a[63]);
      var et = Ze,
        tt =
          !Me && ((xe === "inside" && Ue) || xe === "outside" || L == null)
            ? w
            : void 0,
        nt;
      if (
        a[64] !== i ||
        a[65] !== l ||
        a[66] !== s ||
        a[67] !== c ||
        a[68] !== f ||
        a[69] !== h ||
        a[70] !== y ||
        a[71] !== (Be == null ? void 0 : Be.container) ||
        a[72] !== (Be == null ? void 0 : Be.containerDisabled) ||
        a[73] !== (Be == null ? void 0 : Be.containerFocused) ||
        a[74] !== (Be == null ? void 0 : Be.inputDisabled) ||
        a[75] !== (Be == null ? void 0 : Be.inputFilled) ||
        a[76] !== (Be == null ? void 0 : Be.inputFocused) ||
        a[77] !== C ||
        a[78] !== b ||
        a[79] !== Ue ||
        a[80] !== S ||
        a[81] !== We ||
        a[82] !== R ||
        a[83] !== et ||
        a[84] !== xe ||
        a[85] !== k ||
        a[86] !== I ||
        a[87] !== T ||
        a[88] !== Xe ||
        a[89] !== Ke ||
        a[90] !== $ ||
        a[91] !== Je ||
        a[92] !== N ||
        a[93] !== tt ||
        a[94] !== A ||
        a[95] !== F ||
        a[96] !== O ||
        a[97] !== $e ||
        a[98] !== H ||
        a[99] !== Ne ||
        a[100] !== Me ||
        a[101] !== ((n = G.xstyleConfig) == null ? void 0 : n.root) ||
        a[102] !== Ae.addOnBottom ||
        a[103] !== Ae.addOnEnd ||
        a[104] !== Ae.addOnStart ||
        a[105] !== Ae.container ||
        a[106] !== Ae.containerDisabled ||
        a[107] !== Ae.containerFocused ||
        a[108] !== Ae.content ||
        a[109] !== Ae.input ||
        a[110] !== Ae.inputDisabled ||
        a[111] !== Ae.inputFilled ||
        a[112] !== Ae.inputFocused
      ) {
        var rt;
        ((nt = function (t) {
          var e;
          return u.jsxs(o("react-strict-dom").html.div, {
            style: (e = G.xstyleConfig) == null ? void 0 : e.root,
            children: [
              xe === "outside" && et,
              u.jsx(r("FocusWithinHandler.react"), {
                children: function (n) {
                  return u.jsxs(o("react-strict-dom").html.div, {
                    onMouseEnter: function () {
                      return ze(!0);
                    },
                    onMouseLeave: function () {
                      return ze(!1);
                    },
                    style: [
                      Ue && t,
                      _.container,
                      [Ae.container, Be == null ? void 0 : Be.container],
                      !!b && [
                        Ae.containerDisabled,
                        Be == null ? void 0 : Be.containerDisabled,
                      ],
                      Ue && [
                        Ae.containerFocused,
                        Be == null ? void 0 : Be.containerFocused,
                      ],
                    ],
                    children: [
                      s != null &&
                        u.jsx(g, {
                          focusWithin: n,
                          focused: Ue,
                          xstyle: Ae.addOnStart,
                          children: s,
                        }),
                      u.jsxs(o("react-strict-dom").html.div, {
                        style: [_.content, Ae.content],
                        children: [
                          xe === "inside" && et,
                          u.jsx(
                            o("react-strict-dom").html.input,
                            babelHelpers.extends({ role: $e }, c, {
                              "aria-disabled": b,
                              autoCapitalize: f,
                              autoComplete: h,
                              autoFocus: y,
                              "data-testid": void 0,
                              dir: p ? "rtl" : "ltr",
                              disabled: b,
                              id: S != null ? S : We,
                              inputMode: R,
                              maxLength: k,
                              minLength: I,
                              name: T,
                              onBlur: Xe,
                              onChange: Ke,
                              onClick: $,
                              onFocus: Je,
                              onPaste: N,
                              placeholder: tt,
                              readOnly: A,
                              ref: F,
                              required: O,
                              style: [
                                [Ae.input, Be == null ? void 0 : Be.container],
                                !!b && [
                                  Ae.inputDisabled,
                                  Be == null ? void 0 : Be.inputDisabled,
                                ],
                                Ue && [
                                  Ae.inputFocused,
                                  Be == null ? void 0 : Be.inputFocused,
                                ],
                                !!Me && [
                                  Ae.inputFilled,
                                  Be == null ? void 0 : Be.inputFilled,
                                ],
                              ],
                              type: Ne,
                              value: Me,
                            }),
                          ),
                          C != null &&
                            u.jsx(g, {
                              focusWithin: n,
                              focused: Ue,
                              children: C,
                            }),
                        ],
                      }),
                      l != null &&
                        u.jsx(g, {
                          focusWithin: n,
                          focused: Ue,
                          xstyle: Ae.addOnEnd,
                          children: l,
                        }),
                    ],
                  });
                },
              }),
              i != null &&
                u.jsx(g, { focused: Ue, xstyle: Ae.addOnBottom, children: i }),
            ],
          });
        }),
          (a[64] = i),
          (a[65] = l),
          (a[66] = s),
          (a[67] = c),
          (a[68] = f),
          (a[69] = h),
          (a[70] = y),
          (a[71] = Be == null ? void 0 : Be.container),
          (a[72] = Be == null ? void 0 : Be.containerDisabled),
          (a[73] = Be == null ? void 0 : Be.containerFocused),
          (a[74] = Be == null ? void 0 : Be.inputDisabled),
          (a[75] = Be == null ? void 0 : Be.inputFilled),
          (a[76] = Be == null ? void 0 : Be.inputFocused),
          (a[77] = C),
          (a[78] = b),
          (a[79] = Ue),
          (a[80] = S),
          (a[81] = We),
          (a[82] = R),
          (a[83] = et),
          (a[84] = xe),
          (a[85] = k),
          (a[86] = I),
          (a[87] = T),
          (a[88] = Xe),
          (a[89] = Ke),
          (a[90] = $),
          (a[91] = Je),
          (a[92] = N),
          (a[93] = tt),
          (a[94] = A),
          (a[95] = F),
          (a[96] = O),
          (a[97] = $e),
          (a[98] = H),
          (a[99] = Ne),
          (a[100] = Me),
          (a[101] = (rt = G.xstyleConfig) == null ? void 0 : rt.root),
          (a[102] = Ae.addOnBottom),
          (a[103] = Ae.addOnEnd),
          (a[104] = Ae.addOnStart),
          (a[105] = Ae.container),
          (a[106] = Ae.containerDisabled),
          (a[107] = Ae.containerFocused),
          (a[108] = Ae.content),
          (a[109] = Ae.input),
          (a[110] = Ae.inputDisabled),
          (a[111] = Ae.inputFilled),
          (a[112] = Ae.inputFocused),
          (a[113] = nt));
      } else nt = a[113];
      var ot;
      return (
        a[114] !== v || a[115] !== Pe || a[116] !== nt
          ? ((ot = u.jsx(r("BaseFocusRing.react"), {
              suppressFocusRing: Pe,
              xstyle: v,
              children: nt,
            })),
            (a[114] = v),
            (a[115] = Pe),
            (a[116] = nt),
            (a[117] = ot))
          : (ot = a[117]),
        ot
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        r = e.focused,
        a = e.focusWithin,
        i = e.xstyle,
        l = a === void 0 ? !1 : a,
        s;
      t[0] !== n || t[1] !== l || t[2] !== r
        ? ((s =
            typeof n == "function"
              ? n({ focusWithin: l, state: { focused: r } })
              : n),
          (t[0] = n),
          (t[1] = l),
          (t[2] = r),
          (t[3] = s))
        : (s = t[3]);
      var c = s,
        d;
      return (
        t[4] !== c || t[5] !== i
          ? ((d =
              c != null
                ? u.jsx(o("react-strict-dom").html.div, {
                    style: i,
                    children: c,
                  })
                : null),
            (t[4] = c),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = f;
  },
  98,
);
