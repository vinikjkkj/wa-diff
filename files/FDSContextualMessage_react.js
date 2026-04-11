__d(
  "FDSContextualMessage.react",
  [
    "fbt",
    "ix",
    "CometRow.react",
    "CometRowItem.react",
    "FDSIcon.react",
    "FDSTextPairing.react",
    "FbtResultBase",
    "fbicon",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = ["ref", "xstyle"],
      c,
      d = c || (c = o("react")),
      m = {
        closeButton: {
          marginInlineEnd: "x1lxpwgx",
          marginTop: "x9otpla",
          $$css: !0,
        },
        icon: { marginTop: "x1rdy4ex", $$css: !0 },
        root: {
          borderStartStartRadius: "xw5cjc7",
          borderStartEndRadius: "x1dmpuos",
          borderEndEndRadius: "x1vsv7so",
          borderEndStartRadius: "xau1kf4",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1iorvi4",
          paddingInlineEnd: "x11lfxj5",
          paddingInlineStart: "x135b78x",
          paddingBottom: "x1l90r2v",
          $$css: !0,
        },
      },
      p = {
        highlight: { backgroundColor: "xwnonoy", $$css: !0 },
        "highlight-bg": { backgroundColor: "xfmpgtx", $$css: !0 },
        primary: { backgroundColor: "x1jx94hy", $$css: !0 },
        secondary: { backgroundColor: "xlhe6ec", $$css: !0 },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(36),
        a,
        i,
        l;
      n[0] !== t
        ? ((i = t.ref),
          (l = t.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var c = a,
        _ = c.addOnPrimary,
        f = c.addOnSecondary,
        g = c.body,
        h = c.headline,
        y = c.headlineLineLimit,
        C = c.icon,
        b = c.level,
        v = c.meta,
        S = c.paddingTop,
        R = c.testid,
        L = c.type,
        E = b === void 0 ? 3 : b,
        k = L === void 0 ? "primary" : L,
        I = a.onClose != null ? a.onClose : null,
        T =
          a.headlineAriaLabel != null
            ? a.headlineAriaLabel
            : typeof h == "string" || h instanceof r("FbtResultBase")
              ? h
              : null,
        D = p[k],
        x;
      n[4] !== D || n[5] !== l
        ? ((x = [m.root, D, l]), (n[4] = D), (n[5] = l), (n[6] = x))
        : (x = n[6]);
      var $;
      n[7] !== C
        ? (($ =
            C != null
              ? d.jsx(r("CometRowItem.react"), {
                  verticalAlign: "top",
                  children: d.jsx(o("react-strict-dom").html.div, {
                    style: [m.icon],
                    children: C,
                  }),
                })
              : null),
          (n[7] = C),
          (n[8] = $))
        : ($ = n[8]);
      var P = k === "highlight" ? "white" : "secondary",
        N = k === "highlight" ? "white" : "primary",
        M = y != null ? y : 2,
        w;
      n[9] !== g ||
      n[10] !== h ||
      n[11] !== E ||
      n[12] !== P ||
      n[13] !== N ||
      n[14] !== M
        ? ((w = d.jsx(r("CometRowItem.react"), {
            expanding: !0,
            children: d.jsx(r("FDSTextPairing.react"), {
              body: g,
              bodyColor: P,
              headline: h,
              headlineColor: N,
              headlineLineLimit: M,
              isSemanticHeading: !0,
              level: E,
            }),
          })),
          (n[9] = g),
          (n[10] = h),
          (n[11] = E),
          (n[12] = P),
          (n[13] = N),
          (n[14] = M),
          (n[15] = w))
        : (w = n[15]);
      var A;
      n[16] !== T || n[17] !== I || n[18] !== k
        ? ((A =
            I != null
              ? d.jsx(r("CometRowItem.react"), {
                  verticalAlign: "top",
                  children: d.jsx(o("react-strict-dom").html.div, {
                    style: [m.closeButton],
                    children: d.jsx(r("FDSIcon.react"), {
                      "aria-label":
                        T != null
                          ? s._(/*BTDS*/ "Dismiss {card name} card", [
                              s._param("card name", T),
                            ])
                          : s._(/*BTDS*/ "Dismiss card"),
                      color: k === "highlight" ? "white" : "secondary",
                      icon: o("fbicon")._(u("478232"), 16),
                      onPress: I,
                      size: 16,
                      testid: void 0,
                    }),
                  }),
                })
              : null),
          (n[16] = T),
          (n[17] = I),
          (n[18] = k),
          (n[19] = A))
        : (A = n[19]);
      var F;
      n[20] !== S || n[21] !== A || n[22] !== $ || n[23] !== w
        ? ((F = d.jsxs(r("CometRow.react"), {
            paddingTop: S,
            verticalAlign: "center",
            children: [$, w, A],
          })),
          (n[20] = S),
          (n[21] = A),
          (n[22] = $),
          (n[23] = w),
          (n[24] = F))
        : (F = n[24]);
      var O;
      n[25] !== E || n[26] !== v
        ? ((O =
            v != null &&
            d.jsx(r("CometRow.react"), {
              paddingTop: 12,
              children: d.jsx(r("CometRowItem.react"), {
                children: d.jsx(r("FDSTextPairing.react"), {
                  level: E,
                  meta: v,
                }),
              }),
            })),
          (n[25] = E),
          (n[26] = v),
          (n[27] = O))
        : (O = n[27]);
      var B;
      return (
        n[28] !== _ ||
        n[29] !== f ||
        n[30] !== i ||
        n[31] !== F ||
        n[32] !== O ||
        n[33] !== x ||
        n[34] !== R
          ? ((B = d.jsxs(o("react-strict-dom").html.div, {
              "data-testid": void 0,
              ref: i,
              style: x,
              children: [F, _, f, O],
            })),
            (n[28] = _),
            (n[29] = f),
            (n[30] = i),
            (n[31] = F),
            (n[32] = O),
            (n[33] = x),
            (n[34] = R),
            (n[35] = B))
          : (B = n[35]),
        B
      );
    }
    l.default = _;
  },
  226,
);
