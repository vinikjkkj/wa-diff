__d(
  "CometAISourceCode.react",
  [
    "fbt",
    "CometAIIcon.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometComposedBlockWithEntitiesCodeWithHighlightsChildRendererTokenizer.react",
    "CometPressable.react",
    "FBNucleusCheckmarkOutline16Icon.react",
    "FBNucleusCopyFilled16Icon.react",
    "FDSText.react",
    "JSResourceForInteraction",
    "prismThemeUtils",
    "prismjs",
    "prismjsBootstrapJavascript",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCopyToClipboard",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useReducer,
      f = d.useRef;
    n("prismjsBootstrapJavascript");
    var g = {
        c: r("JSResourceForInteraction")("prismjsBootstrapC").__setRef(
          "CometAISourceCode.react",
        ),
        cpp: r("JSResourceForInteraction")("prismjsBootstrapCpp").__setRef(
          "CometAISourceCode.react",
        ),
        css: r("JSResourceForInteraction")("prismjsBootstrapCss").__setRef(
          "CometAISourceCode.react",
        ),
        go: r("JSResourceForInteraction")("prismjsBootstrapGo").__setRef(
          "CometAISourceCode.react",
        ),
        graphql: r("JSResourceForInteraction")(
          "prismjsBootstrapGraphql",
        ).__setRef("CometAISourceCode.react"),
        java: r("JSResourceForInteraction")("prismjsBootstrapJava").__setRef(
          "CometAISourceCode.react",
        ),
        json: r("JSResourceForInteraction")("prismjsBootstrapJson").__setRef(
          "CometAISourceCode.react",
        ),
        kotlin: r("JSResourceForInteraction")(
          "prismjsBootstrapKotlin",
        ).__setRef("CometAISourceCode.react"),
        markup: r("JSResourceForInteraction")(
          "prismjsBootstrapMarkup",
        ).__setRef("CometAISourceCode.react"),
        php: r("JSResourceForInteraction")("prismjsBootstrapPhp").__setRef(
          "CometAISourceCode.react",
        ),
        python: r("JSResourceForInteraction")(
          "prismjsBootstrapPython",
        ).__setRef("CometAISourceCode.react"),
        rust: r("JSResourceForInteraction")("prismjsBootstrapRust").__setRef(
          "CometAISourceCode.react",
        ),
        sql: r("JSResourceForInteraction")("prismjsBootstrapSql").__setRef(
          "CometAISourceCode.react",
        ),
        swift: r("JSResourceForInteraction")("prismjsBootstrapSwift").__setRef(
          "CometAISourceCode.react",
        ),
        typescript: r("JSResourceForInteraction")(
          "prismjsBootstrapTypescript",
        ).__setRef("CometAISourceCode.react"),
        yaml: r("JSResourceForInteraction")("prismjsBootstrapYaml").__setRef(
          "CometAISourceCode.react",
        ),
      },
      h = {
        codeBlockContainer: {
          backgroundColor: "x14hiurz",
          borderTopColor: "x8cjs6t",
          borderInlineEndColor: "x3sou0m",
          borderBottomColor: "x80vd3b",
          borderInlineStartColor: "x12u81az",
          borderStartStartRadius: "x1obq294",
          borderStartEndRadius: "x5a5i1n",
          borderEndEndRadius: "xde0f50",
          borderEndStartRadius: "x15x8krk",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        darkContainer: { backgroundColor: "xal61yo", $$css: !0 },
        responsiveCodeBlock: {
          WebkitOverflowScrolling: "x5lxg6s",
          backgroundColor: "xjbqb8w",
          fontFamily: "xbb4xh3",
          fontSize: "x1nxh6w3",
          lineHeight: "x1evy7pa",
          maxWidth: "x193iq5w",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          paddingBottom: "x1l90r2v",
          paddingTop: "xexx8yu",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingLeft: null,
          paddingRight: null,
          whiteSpace: "x126k92a",
          wordBreak: "x1yn0g08",
          $$css: !0,
        },
        responsiveCodeBlockNoHeader: { paddingTop: "x1y1aw1k", $$css: !0 },
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(48),
        a = t.code,
        i = t.language,
        l = t.showCopyButton,
        u = t.showLanguageLabel,
        d = t.theme,
        m = t.xstyle,
        y = i === void 0 ? "javascript" : i,
        b = l === void 0 ? !0 : l,
        v = u === void 0 ? !0 : u,
        S = d === void 0 ? "light" : d,
        R;
      n[0] !== S
        ? ((R = o("prismThemeUtils").getPrismTheme(S)), (n[0] = S), (n[1] = R))
        : (R = n[1]);
      var L = R,
        E;
      n[2] !== y ? ((E = y.toLowerCase()), (n[2] = y), (n[3] = E)) : (E = n[3]);
      var k = E,
        I = _(C, 0),
        T = I[1],
        D = f(null),
        x,
        $;
      (n[4] !== k
        ? ((x = function () {
            if (!(o("prismjs").languages[k] != null || D.current === k)) {
              var e = g[k];
              if (e != null) {
                var t = !1;
                return (
                  (D.current = k),
                  e.load().then(function () {
                    t || T(0);
                  }),
                  function () {
                    t = !0;
                  }
                );
              }
            }
          }),
          ($ = [k, T]),
          (n[4] = k),
          (n[5] = x),
          (n[6] = $))
        : ((x = n[5]), ($ = n[6])),
        p(x, $));
      var P = o("prismjs").languages[k],
        N = r("useCopyToClipboard")(1e3),
        M = N.copied,
        w = N.copy,
        A;
      n[7] !== a || n[8] !== w
        ? ((A = function () {
            w(a);
          }),
          (n[7] = a),
          (n[8] = w),
          (n[9] = A))
        : (A = n[9]);
      var F = A,
        O;
      n[10] !== M
        ? ((O = M ? s._(/*BTDS*/ "Copied") : s._(/*BTDS*/ "Copy code")),
          (n[10] = M),
          (n[11] = O))
        : (O = n[11]);
      var B = O,
        W = v && y != null && y !== "",
        q = W || b,
        U;
      if (P != null && a != null && a.trim() !== "") {
        var V;
        n[12] !== a || n[13] !== P
          ? ((V = o("prismjs").tokenize(a, P)),
            (n[12] = a),
            (n[13] = P),
            (n[14] = V))
          : (V = n[14]);
        var H = V,
          G;
        (n[15] !== y || n[16] !== H || n[17] !== L
          ? ((G = c.jsx(
              r(
                "CometComposedBlockWithEntitiesCodeWithHighlightsChildRendererTokenizer.react",
              ),
              { language: y, theme: L, tokens: H },
            )),
            (n[15] = y),
            (n[16] = H),
            (n[17] = L),
            (n[18] = G))
          : (G = n[18]),
          (U = G));
      } else U = a;
      var z;
      n[19] !== S || n[20] !== m
        ? ((z = (e || (e = r("stylex"))).props(
            h.codeBlockContainer,
            S === "dark" && h.darkContainer,
            m,
          )),
          (n[19] = S),
          (n[20] = m),
          (n[21] = z))
        : (z = n[21]);
      var j;
      n[22] !== B ||
      n[23] !== F ||
      n[24] !== q ||
      n[25] !== W ||
      n[26] !== M ||
      n[27] !== y ||
      n[28] !== b ||
      n[29] !== S
        ? ((j =
            q &&
            c.jsxs("div", {
              className:
                "x6s0dn4 x78zum5 x1qughib x1y1aw1k xwib8y2 x1g0dm76 xpdmqnj",
              children: [
                W &&
                  c.jsx("span", {
                    className: "xbac8wx xtvhhri",
                    children: c.jsx(r("FDSText.react"), {
                      color: S === "dark" ? "white" : "secondary",
                      type: "meta3",
                      children: y,
                    }),
                  }),
                b &&
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x14hiurz x8du52y x8cjs6t x3sou0m x80vd3b x12u81az x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
                        },
                        1: {
                          className:
                            "x1i5p2am x1whfx0g xr2y4jy x1ihp6rs x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x18l40ae x8du52y xjqpnuy xc5r6h4 xqeqjp1 x1phubyo",
                        },
                      }[(S === "dark") << 0],
                      {
                        children: c.jsx(r("CometPressable.react"), {
                          "aria-label": B,
                          onPress: F,
                          overlayDisabled: !0,
                          children: c.jsx("div", {
                            className:
                              "x6s0dn4 x78zum5 xl56j7k x1yrsyyn x1icxu4v x10b6aqq x25sj25",
                            title: B,
                            children: c.jsx(r("CometAIIcon.react"), {
                              color: M ? "primary" : "secondary",
                              icon: r(
                                M
                                  ? "FBNucleusCheckmarkOutline16Icon.react"
                                  : "FBNucleusCopyFilled16Icon.react",
                              ),
                              size: 16,
                            }),
                          }),
                        }),
                      },
                    ),
                  ),
              ],
            })),
          (n[22] = B),
          (n[23] = F),
          (n[24] = q),
          (n[25] = W),
          (n[26] = M),
          (n[27] = y),
          (n[28] = b),
          (n[29] = S),
          (n[30] = j))
        : (j = n[30]);
      var K;
      n[31] !== q || n[32] !== y || n[33] !== L
        ? ((K = (e || (e = r("stylex"))).props(
            o("prismThemeUtils").getXStyleForPrismTheme(L, y, "pre"),
            h.responsiveCodeBlock,
            !q && h.responsiveCodeBlockNoHeader,
          )),
          (n[31] = q),
          (n[32] = y),
          (n[33] = L),
          (n[34] = K))
        : (K = n[34]);
      var Q;
      n[35] !== y || n[36] !== L
        ? ((Q = (e || (e = r("stylex"))).props(
            o("prismThemeUtils").getXStyleForPrismTheme(L, y, "code"),
          )),
          (n[35] = y),
          (n[36] = L),
          (n[37] = Q))
        : (Q = n[37]);
      var X;
      n[38] !== U || n[39] !== Q
        ? ((X = c.jsx("code", babelHelpers.extends({}, Q, { children: U }))),
          (n[38] = U),
          (n[39] = Q),
          (n[40] = X))
        : (X = n[40]);
      var Y;
      n[41] !== K || n[42] !== X
        ? ((Y = c.jsx("pre", babelHelpers.extends({}, K, { children: X }))),
          (n[41] = K),
          (n[42] = X),
          (n[43] = Y))
        : (Y = n[43]);
      var J;
      return (
        n[44] !== z || n[45] !== j || n[46] !== Y
          ? ((J = c.jsx(r("CometColumn.react"), {
              children: c.jsx(r("CometColumnItem.react"), {
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, z, { children: [j, Y] }),
                ),
              }),
            })),
            (n[44] = z),
            (n[45] = j),
            (n[46] = Y),
            (n[47] = J))
          : (J = n[47]),
        J
      );
    }
    function C(e, t) {
      return e + 1;
    }
    l.default = y;
  },
  226,
);
