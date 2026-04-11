__d(
  "BaseStyledButtonImpl.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometPressable.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "addOnAbsolute",
        "addOnEnd",
        "addOnStart",
        "content",
        "contentXstyle",
        "cursorDisabled",
        "disabled",
        "display",
        "focusable",
        "icon",
        "id",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressAction",
        "onPressIn",
        "onPressOut",
        "overlayDisabled",
        "overlayHoveredStyle",
        "overlayPressedStyle",
        "padding",
        "size",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = 0.96,
      _ = 10,
      f = {
        button: {
          boxSizing: "x9f619",
          display: "x3nfvp2",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        content: {
          borderStartStartRadius: "x14ldlfn",
          borderStartEndRadius: "x1b1wa69",
          borderEndEndRadius: "xws8118",
          borderEndStartRadius: "x5fzff1",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxSizing: "x9f619",
          paddingInlineEnd: "xpdmqnj",
          paddingInlineStart: "x1g0dm76",
          $$css: !0,
        },
        disabled: { backgroundColor: "xwcfey6", $$css: !0 },
        item: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          marginInlineEnd: "xsqbvy7",
          marginInlineStart: "xb9jzoj",
          $$css: !0,
        },
        offset: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          marginInlineEnd: "x14ayic",
          marginInlineStart: "xwyz465",
          width: "x1e0frkt",
          $$css: !0,
        },
        paddingWide: {
          paddingInlineEnd: "xp48ta0",
          paddingInlineStart: "xtssl2i",
          $$css: !0,
        },
        sizeLargeItem: {
          marginInlineEnd: "x10ksdce",
          marginInlineStart: "x16k4gxc",
          $$css: !0,
        },
        sizeLargeOffset: {
          marginInlineEnd: "xf0ucvx",
          marginInlineStart: "xx2axb6",
          $$css: !0,
        },
      },
      g = {
        keys: {
          alignSelf: null,
          cursor: null,
          flexBasis: null,
          flexGrow: null,
          flexShrink: null,
          height: null,
          justifySelf: null,
          marginBottom: null,
          marginInlineEnd: null,
          marginInlineStart: null,
          marginTop: null,
          maxHeight: null,
          maxWidth: null,
          minHeight: null,
          minWidth: null,
          position: null,
          width: null,
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(81),
        a,
        i;
      n[0] !== t
        ? ((a = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l,
        u,
        c,
        g,
        h,
        y,
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
        V;
      if (n[3] !== i) {
        var H = i;
        ((l = H.addOnAbsolute),
          (u = H.addOnEnd),
          (c = H.addOnStart),
          (h = H.content),
          (y = H.contentXstyle),
          (b = H.cursorDisabled),
          (A = H.disabled),
          (F = H.display),
          (v = H.focusable),
          (S = H.icon),
          (R = H.id),
          (L = H.linkProps),
          (E = H.onFocusIn),
          (k = H.onFocusOut),
          (I = H.onHoverIn),
          (T = H.onHoverOut),
          (D = H.onPress),
          (x = H.onPressAction),
          ($ = H.onPressIn),
          (P = H.onPressOut),
          (N = H.overlayDisabled),
          (M = H.overlayHoveredStyle),
          (w = H.overlayPressedStyle),
          (O = H.padding),
          (B = H.size),
          (W = H.suppressHydrationWarning),
          (U = H.testid),
          (q = H.testOnly_pressed),
          (V = H.xstyle),
          (g = babelHelpers.objectWithoutPropertiesLoose(H, s)),
          (n[3] = i),
          (n[4] = l),
          (n[5] = u),
          (n[6] = c),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = b),
          (n[11] = v),
          (n[12] = S),
          (n[13] = R),
          (n[14] = L),
          (n[15] = E),
          (n[16] = k),
          (n[17] = I),
          (n[18] = T),
          (n[19] = D),
          (n[20] = x),
          (n[21] = $),
          (n[22] = P),
          (n[23] = N),
          (n[24] = M),
          (n[25] = w),
          (n[26] = A),
          (n[27] = F),
          (n[28] = O),
          (n[29] = B),
          (n[30] = W),
          (n[31] = q),
          (n[32] = U),
          (n[33] = V));
      } else
        ((l = n[4]),
          (u = n[5]),
          (c = n[6]),
          (g = n[7]),
          (h = n[8]),
          (y = n[9]),
          (b = n[10]),
          (v = n[11]),
          (S = n[12]),
          (R = n[13]),
          (L = n[14]),
          (E = n[15]),
          (k = n[16]),
          (I = n[17]),
          (T = n[18]),
          (D = n[19]),
          (x = n[20]),
          ($ = n[21]),
          (P = n[22]),
          (N = n[23]),
          (M = n[24]),
          (w = n[25]),
          (A = n[26]),
          (F = n[27]),
          (O = n[28]),
          (B = n[29]),
          (W = n[30]),
          (q = n[31]),
          (U = n[32]),
          (V = n[33]));
      var G = A === void 0 ? !1 : A,
        z = F === void 0 ? "inline" : F,
        j = O === void 0 ? "normal" : O,
        K = B === void 0 ? "medium" : B,
        Q = W === void 0 ? !1 : W,
        X = q === void 0 ? !1 : q,
        Y = m(null),
        J;
      n[34] !== $
        ? ((J = function (t) {
            if (Y.current != null) {
              var e = Y.current;
              e instanceof HTMLDivElement &&
                (e.style.transform =
                  "scale(" +
                  Math.max(p, (e.offsetWidth - _) / e.offsetWidth) +
                  ")");
            }
            typeof $ == "function" && $(t);
          }),
          (n[34] = $),
          (n[35] = J))
        : (J = n[35]);
      var Z = J,
        ee;
      n[36] !== P
        ? ((ee = function (t) {
            if (Y.current != null) {
              var e = Y.current;
              e instanceof HTMLDivElement && (e.style.transform = "none");
            }
            typeof P == "function" && P(t);
          }),
          (n[36] = P),
          (n[37] = ee))
        : (ee = n[37]);
      var te = ee,
        ne;
      n[38] !== V ? ((ne = C(V)), (n[38] = V), (n[39] = ne)) : (ne = n[39]);
      var re = ne,
        oe = re[0],
        ae = re[1],
        ie = K === "large" && f.sizeLargeItem,
        le;
      n[40] !== ie
        ? ((le = [f.item, ie]), (n[40] = ie), (n[41] = le))
        : (le = n[41]);
      var se = le,
        ue;
      n[42] !== l ||
      n[43] !== u ||
      n[44] !== c ||
      n[45] !== h ||
      n[46] !== y ||
      n[47] !== G ||
      n[48] !== S ||
      n[49] !== se ||
      n[50] !== ae ||
      n[51] !== j ||
      n[52] !== K
        ? ((ue = function (t) {
            var e = t.overlay;
            return d.jsxs(r("BaseRow.react"), {
              align: "center",
              ref: Y,
              role: "none",
              verticalAlign: "center",
              xstyle: [
                f.content,
                j === "wide" && f.paddingWide,
                G && f.disabled,
                ae,
                y,
              ],
              children: [
                d.jsxs(o("react-strict-dom").html.div, {
                  style: [f.offset, K === "large" && f.sizeLargeOffset],
                  children: [
                    c != null
                      ? d.jsx(r("BaseRowItem.react"), {
                          role: "none",
                          useDeprecatedStyles: !0,
                          xstyle: se,
                          children: c,
                        })
                      : S != null
                        ? d.jsx(r("BaseRowItem.react"), {
                            role: "none",
                            useDeprecatedStyles: !0,
                            xstyle: se,
                            children: S,
                          })
                        : null,
                    h != null
                      ? d.jsx(r("BaseRowItem.react"), {
                          role: "none",
                          useDeprecatedStyles: !0,
                          xstyle: se,
                          children: h,
                        })
                      : null,
                    u != null
                      ? d.jsx(r("BaseRowItem.react"), {
                          role: "none",
                          useDeprecatedStyles: !0,
                          xstyle: se,
                          children: u,
                        })
                      : null,
                  ],
                }),
                e,
                l != null ? l : null,
              ],
            });
          }),
          (n[42] = l),
          (n[43] = u),
          (n[44] = c),
          (n[45] = h),
          (n[46] = y),
          (n[47] = G),
          (n[48] = S),
          (n[49] = se),
          (n[50] = ae),
          (n[51] = j),
          (n[52] = K),
          (n[53] = ue))
        : (ue = n[53]);
      var ce = ue,
        de;
      n[54] !== oe
        ? ((de = [f.button, oe]), (n[54] = oe), (n[55] = de))
        : (de = n[55]);
      var me;
      return (
        n[56] !== g ||
        n[57] !== b ||
        n[58] !== G ||
        n[59] !== z ||
        n[60] !== v ||
        n[61] !== a ||
        n[62] !== ce ||
        n[63] !== R ||
        n[64] !== L ||
        n[65] !== E ||
        n[66] !== k ||
        n[67] !== I ||
        n[68] !== T ||
        n[69] !== D ||
        n[70] !== x ||
        n[71] !== N ||
        n[72] !== M ||
        n[73] !== w ||
        n[74] !== Z ||
        n[75] !== te ||
        n[76] !== Q ||
        n[77] !== de ||
        n[78] !== X ||
        n[79] !== U
          ? ((me = d.jsx(
              r("CometPressable.react"),
              babelHelpers.extends({}, g, {
                cursorDisabled: b,
                disabled: G,
                display: z,
                focusable: v,
                id: R,
                linkProps: L,
                onFocusIn: E,
                onFocusOut: k,
                onHoverIn: I,
                onHoverOut: T,
                onPress: D,
                onPressAction: x,
                onPressIn: Z,
                onPressOut: te,
                overlayDisabled: N,
                overlayHoveredStyle: M,
                overlayPressedStyle: w,
                ref: a,
                suppressHydrationWarning: Q,
                testOnly_pressed: X,
                testid: void 0,
                xstyle: de,
                children: ce,
              }),
            )),
            (n[56] = g),
            (n[57] = b),
            (n[58] = G),
            (n[59] = z),
            (n[60] = v),
            (n[61] = a),
            (n[62] = ce),
            (n[63] = R),
            (n[64] = L),
            (n[65] = E),
            (n[66] = k),
            (n[67] = I),
            (n[68] = T),
            (n[69] = D),
            (n[70] = x),
            (n[71] = N),
            (n[72] = M),
            (n[73] = w),
            (n[74] = Z),
            (n[75] = te),
            (n[76] = Q),
            (n[77] = de),
            (n[78] = X),
            (n[79] = U),
            (n[80] = me))
          : (me = n[80]),
        me
      );
    }
    var y = new WeakMap();
    function C(e) {
      if (!e) return [{}, {}];
      var t = y.get(e);
      if (t != null) return t;
      var n = (u || (u = r("stylex"))).compose(e),
        o = { $$css: !0 },
        a = { $$css: !0 };
      for (var i in n)
        Object.keys(g.keys).includes(i) ? (o[i] = n[i]) : (a[i] = n[i]);
      var l = [o, a];
      return (y.set(e, l), l);
    }
    l.default = h;
  },
  98,
);
