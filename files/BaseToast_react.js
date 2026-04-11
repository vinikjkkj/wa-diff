__d(
  "BaseToast.react",
  [
    "BaseInlinePressable.react",
    "BaseToastContentWrapper.react",
    "BaseView.react",
    "XPlatReactFocusRegion.react",
    "basePushToast",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useId,
      d = u.useMemo,
      m = {
        item: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingBottom: "x19yoh24",
          paddingInlineStart: "xa6w9w1",
          paddingInlineEnd: "x7jv1k3",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x6enp1t",
          $$css: !0,
        },
        itemText: { flexGrow: "x1iyjqo2", $$css: !0 },
        link: { wordBreak: "xdnwjd9", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1wkzo03",
          borderTopColor: "xlnzwam",
          borderInlineEndColor: "xuc4ihs",
          borderBottomColor: "xm9qwu6",
          borderInlineStartColor: "x38i1re",
          borderStartStartRadius: "x1ghonvh",
          borderStartEndRadius: "x1c2sbsd",
          borderEndEndRadius: "x8tb1rc",
          borderEndStartRadius: "x609f4j",
          borderTopStyle: "xhf2mca",
          borderInlineEndStyle: "xaau5u0",
          borderBottomStyle: "x13y0ya8",
          borderInlineStartStyle: "xv6865q",
          borderTopWidth: "xmqxc35",
          borderInlineEndWidth: "x1a32di2",
          borderBottomWidth: "x21fg80",
          borderInlineStartWidth: "xyi7q43",
          boxShadow: "xi1c1fh",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          maxWidth: "x1cs6qxi",
          minWidth: "x1hqenl9",
          paddingTop: "x192rfv7",
          paddingBottom: "x13jxccy",
          paddingInlineStart: "x1rcnc7e",
          paddingInlineEnd: "x1e7pf15",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        rootDense: { minWidth: "xktpd3l", $$css: !0 },
        rootFullWidth: { width: "xh8yej3", $$css: !0 },
        toastContentDefaultLayout: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        toastContentVerticalLayout: {
          alignItems: "x1cy8zhl",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
      };
    function p(e) {
      var t,
        n,
        a,
        i,
        l,
        u = o("react-compiler-runtime").c(53),
        d = e.action,
        p = e.addOnStart,
        f = e.canBeAutofocused,
        g = e.closeButton,
        h = e.density,
        y = e.linkWrapper,
        C = e.message,
        b = e.offsetStyles,
        v = e.onDismiss,
        S = e.size,
        R = e.testid,
        L = e.themeConfigOverride,
        E = e.toastRef,
        k = e.useInvertedDisplayMode,
        I = e.useVerticalLayout,
        T = e.variant,
        D = f === void 0 ? !0 : f,
        x = S === void 0 ? "full-width" : S,
        $ = k === void 0 ? !0 : k,
        P = I === void 0 ? !1 : I,
        N = c(),
        M;
      e: {
        if (d != null) {
          var w;
          (u[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = {}), (u[0] = w))
            : (w = u[0]),
            (M = w));
          break e;
        }
        var A;
        (u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { "aria-atomic": !0, role: "alert" }), (u[1] = A))
          : (A = u[1]),
          (M = A));
      }
      var F = M,
        O;
      if (
        u[2] !== d ||
        u[3] !== v ||
        u[4] !== (T == null || (t = T.xstyleConfig) == null ? void 0 : t.item)
      ) {
        var B, W;
        ((O =
          d != null
            ? s.jsx(r("BaseView.react"), {
                xstyle: [
                  m.item,
                  T == null || (B = T.xstyleConfig) == null ? void 0 : B.item,
                ],
                children:
                  d.element != null
                    ? d.element
                    : d.labelRenderer &&
                      s.jsx(r("BaseInlinePressable.react"), {
                        onPress: function (t) {
                          (v(), d.onPress(t));
                        },
                        testid: void 0,
                        xstyle: m.link,
                        children: d.labelRenderer(d.label),
                      }),
              })
            : null),
          (u[2] = d),
          (u[3] = v),
          (u[4] = T == null || (W = T.xstyleConfig) == null ? void 0 : W.item),
          (u[5] = O));
      } else O = u[5];
      var q = O,
        U;
      if (
        u[6] !== p ||
        u[7] !== (T == null || (n = T.xstyleConfig) == null ? void 0 : n.item)
      ) {
        var V, H;
        ((U =
          p != null &&
          s.jsx(r("BaseView.react"), {
            xstyle: [
              m.item,
              T == null || (V = T.xstyleConfig) == null ? void 0 : V.item,
            ],
            children: p,
          })),
          (u[6] = p),
          (u[7] = T == null || (H = T.xstyleConfig) == null ? void 0 : H.item),
          (u[8] = U));
      } else U = u[8];
      var G = x === "full-width" && m.rootFullWidth,
        z = h === "dense" && m.rootDense,
        j = P ? m.toastContentVerticalLayout : m.toastContentDefaultLayout,
        K;
      u[9] !== j || u[10] !== G || u[11] !== z
        ? ((K = [G, z, j]), (u[9] = j), (u[10] = G), (u[11] = z), (u[12] = K))
        : (K = u[12]);
      var Q = T == null || (a = T.xstyleConfig) == null ? void 0 : a.item,
        X;
      u[13] !== Q
        ? ((X = [m.item, m.itemText, Q]), (u[13] = Q), (u[14] = X))
        : (X = u[14]);
      var Y;
      u[15] !== C || u[16] !== N
        ? ((Y = C({ toastMessageId: N })),
          (u[15] = C),
          (u[16] = N),
          (u[17] = Y))
        : (Y = u[17]);
      var J;
      u[18] !== F || u[19] !== X || u[20] !== Y
        ? ((J = s.jsx(
            r("BaseView.react"),
            babelHelpers.extends({ xstyle: X }, F, { children: Y }),
          )),
          (u[18] = F),
          (u[19] = X),
          (u[20] = Y),
          (u[21] = J))
        : (J = u[21]);
      var Z;
      u[22] !== q || u[23] !== D
        ? ((Z =
            q != null &&
            (o("basePushToast").passesNewToastAPIGK()
              ? q
              : s.jsx(r("XPlatReactFocusRegion.react"), {
                  autoFocusQuery: D
                    ? o("focusScopeQueries").tabbableScopeQuery
                    : _,
                  children: q,
                }))),
          (u[22] = q),
          (u[23] = D),
          (u[24] = Z))
        : (Z = u[24]);
      var ee;
      u[25] !== K || u[26] !== J || u[27] !== Z
        ? ((ee = s.jsxs(r("BaseView.react"), { xstyle: K, children: [J, Z] })),
          (u[25] = K),
          (u[26] = J),
          (u[27] = Z),
          (u[28] = ee))
        : (ee = u[28]);
      var te;
      if (
        u[29] !== g ||
        u[30] !== (T == null || (i = T.xstyleConfig) == null ? void 0 : i.item)
      ) {
        var ne, re;
        ((te =
          !!g &&
          s.jsx(r("BaseView.react"), {
            xstyle: [
              m.item,
              T == null || (ne = T.xstyleConfig) == null ? void 0 : ne.item,
            ],
            children: g,
          })),
          (u[29] = g),
          (u[30] =
            T == null || (re = T.xstyleConfig) == null ? void 0 : re.item),
          (u[31] = te));
      } else te = u[31];
      var oe;
      u[32] !== ee || u[33] !== te || u[34] !== U
        ? ((oe = s.jsxs(s.Fragment, { children: [U, ee, te] })),
          (u[32] = ee),
          (u[33] = te),
          (u[34] = U),
          (u[35] = oe))
        : (oe = u[35]);
      var ae = oe,
        ie;
      (u[36] !== y || u[37] !== ae
        ? ((ie = y != null ? y(ae) : ae),
          (u[36] = y),
          (u[37] = ae),
          (u[38] = ie))
        : (ie = u[38]),
        (ae = ie));
      var le = d != null && o("basePushToast").passesNewToastAPIGK ? N : void 0,
        se =
          o("basePushToast").passesNewToastAPIGK() && (d != null || g)
            ? "dialog"
            : void 0,
        ue = x === "full-width" && m.rootFullWidth,
        ce = h === "dense" && m.rootDense,
        de = T == null || (l = T.xstyleConfig) == null ? void 0 : l.container,
        me;
      u[39] !== b || u[40] !== ue || u[41] !== ce || u[42] !== de
        ? ((me = [m.root, ue, ce, b, de]),
          (u[39] = b),
          (u[40] = ue),
          (u[41] = ce),
          (u[42] = de),
          (u[43] = me))
        : (me = u[43]);
      var pe;
      return (
        u[44] !== le ||
        u[45] !== se ||
        u[46] !== me ||
        u[47] !== R ||
        u[48] !== L ||
        u[49] !== ae ||
        u[50] !== E ||
        u[51] !== $
          ? ((pe = s.jsx(r("BaseToastContentWrapper.react"), {
              ariaLabelledBy: le,
              ref: E,
              role: se,
              testid: void 0,
              themeConfig: L,
              useInvertedDisplayMode: $,
              xstyle: me,
              children: ae,
            })),
            (u[44] = le),
            (u[45] = se),
            (u[46] = me),
            (u[47] = R),
            (u[48] = L),
            (u[49] = ae),
            (u[50] = E),
            (u[51] = $),
            (u[52] = pe))
          : (pe = u[52]),
        pe
      );
    }
    function _() {
      return !1;
    }
    l.default = p;
  },
  98,
);
