__d(
  "XMDSDialogHeader.react",
  [
    "fbt",
    "Locale",
    "MetaBrandCaretLeftOutline24Icon.react",
    "MetaBrandCaretRightOutline24Icon.react",
    "MetaBrandXFilled24Icon.react",
    "XMDSDialogHeaderContainer.react",
    "XMDSDialogMetaLockupHeading.react",
    "XMDSDialogTitle.react",
    "XMDSIcon.react",
    "XMDSIconButton.react",
    "XMDSText.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = o("Locale").isRTL();
    function d(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.addOnEnd,
        a = e.backTestID,
        i = e.closeTestID,
        l = e.disabled,
        d = e.onBack,
        m = e.onClose,
        p = e.title,
        _ = e.titleHidden,
        f = e.withBackButton,
        g = e.withCloseButton,
        h = e.withCompanyLogo,
        y = a === void 0 ? "back-button" : a,
        C = i === void 0 ? "close-button" : i,
        b = l === void 0 ? !1 : l,
        v = d === void 0 ? r("emptyFunction") : d,
        S = m === void 0 ? r("emptyFunction") : m,
        R = _ === void 0 ? !1 : _,
        L = f === void 0 ? !1 : f,
        E = g === void 0 ? !0 : g,
        k = h === void 0 ? !1 : h,
        I = !!p,
        T;
      t[0] !== p
        ? ((T = s.isFbtInstance(p) || typeof p == "string"),
          (t[0] = p),
          (t[1] = T))
        : (T = t[1]);
      var D = T,
        x;
      t[2] !== p || t[3] !== R || t[4] !== D || t[5] !== I
        ? ((x = I
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {},
                    1: {
                      className:
                        "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
                    },
                  }[!!R << 0],
                  {
                    children: u.jsx(r("XMDSDialogTitle.react"), {
                      children: D
                        ? u.jsx(r("XMDSText.react"), {
                            isSemanticHeading: !0,
                            textStyle: "headline3",
                            children: p != null ? p : null,
                          })
                        : p != null
                          ? p
                          : null,
                    }),
                  },
                ),
              )
            : null),
          (t[2] = p),
          (t[3] = R),
          (t[4] = D),
          (t[5] = I),
          (t[6] = x))
        : (x = t[6]);
      var $ = x,
        P;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.jsx("div", { className: "x1vqgdyp x100vrsf" })), (t[7] = P))
        : (P = t[7]);
      var N = P,
        M = E && !k ? N : null,
        w = n != null ? N : null,
        A = L || k ? N : null,
        F = k ? N : null,
        O;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = { className: "x78zum5 x13fj5qh x1xegmmw" }), (t[8] = O))
        : (O = t[8]);
      var B;
      t[9] !== M ||
      t[10] !== y ||
      t[11] !== b ||
      t[12] !== v ||
      t[13] !== L ||
      t[14] !== k
        ? ((B = k
            ? u.jsx(r("XMDSDialogMetaLockupHeading.react"), {})
            : L
              ? u.jsx(r("XMDSIconButton.react"), {
                  "aria-label": s._(/*BTDS*/ "Back"),
                  disabled: b,
                  onPress: v,
                  testid: void 0,
                  children: u.jsx(r("XMDSIcon.react"), {
                    color: "primary",
                    icon: r(
                      c
                        ? "MetaBrandCaretRightOutline24Icon.react"
                        : "MetaBrandCaretLeftOutline24Icon.react",
                    ),
                    size: 24,
                  }),
                })
              : M),
          (t[9] = M),
          (t[10] = y),
          (t[11] = b),
          (t[12] = v),
          (t[13] = L),
          (t[14] = k),
          (t[15] = B))
        : (B = t[15]);
      var W;
      t[16] !== w || t[17] !== B
        ? ((W = u.jsxs(
            "div",
            babelHelpers.extends({}, O, { children: [B, w] }),
          )),
          (t[16] = w),
          (t[17] = B),
          (t[18] = W))
        : (W = t[18]);
      var q;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = { className: "x78zum5 x1iyjqo2 xl56j7k" }), (t[19] = q))
        : (q = t[19]);
      var U;
      t[20] !== $
        ? ((U = u.jsx("div", babelHelpers.extends({}, q, { children: $ }))),
          (t[20] = $),
          (t[21] = U))
        : (U = t[21]);
      var V;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { className: "x78zum5 x13fj5qh x1xegmmw" }), (t[22] = V))
        : (V = t[22]);
      var H = n != null ? n : F,
        G;
      t[23] !== A || t[24] !== C || t[25] !== b || t[26] !== S || t[27] !== E
        ? ((G = E
            ? u.jsx(r("XMDSIconButton.react"), {
                "aria-label": s._(/*BTDS*/ "Close"),
                disabled: b,
                onPress: S,
                testid: void 0,
                children: u.jsx(r("XMDSIcon.react"), {
                  color: "primary",
                  icon: r("MetaBrandXFilled24Icon.react"),
                  size: 24,
                }),
              })
            : A),
          (t[23] = A),
          (t[24] = C),
          (t[25] = b),
          (t[26] = S),
          (t[27] = E),
          (t[28] = G))
        : (G = t[28]);
      var z;
      t[29] !== H || t[30] !== G
        ? ((z = u.jsxs(
            "div",
            babelHelpers.extends({}, V, { children: [H, G] }),
          )),
          (t[29] = H),
          (t[30] = G),
          (t[31] = z))
        : (z = t[31]);
      var j;
      return (
        t[32] !== W || t[33] !== U || t[34] !== z
          ? ((j = u.jsxs(r("XMDSDialogHeaderContainer.react"), {
              children: [W, U, z],
            })),
            (t[32] = W),
            (t[33] = U),
            (t[34] = z),
            (t[35] = j))
          : (j = t[35]),
        j
      );
    }
    l.default = d;
  },
  226,
);
