__d(
  "CometComposedTextV2CitationNodeRenderer.react",
  [
    "BaseInlinePressable.react",
    "CometComposedTextV2URParserContext.react",
    "CometText.react",
    "MSGDataclassTypes.flow",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        citationListLink: {
          borderStartStartRadius: "xjdyq97",
          borderStartEndRadius: "x1lxogi8",
          borderEndEndRadius: "xo3969h",
          borderEndStartRadius: "xivb3in",
          paddingTop: "xnurwd3",
          paddingInlineEnd: "x1pf2wvv",
          paddingBottom: "xdfaeaq",
          paddingInlineStart: "xy84tw",
          ":hover_backgroundColor": "x10eetuy",
          $$css: !0,
        },
        defaultLink: {
          maxWidth: "x193iq5w",
          textDecoration: "x92akz8",
          ":hover_textDecoration": "xv658tw",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.node,
        a = n.getState(),
        i = a.faviconUrl,
        l = a.isInline,
        c = a.sourceDisplayName,
        d = a.sourceSubtitle,
        m = a.sourceType,
        p = a.url,
        _ = c == null ? void 0 : c.replace(/[\n\r]+/g, " "),
        f = d == null ? void 0 : d.replace(/[\n\r]+/g, " "),
        g = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        h = g.renderers,
        y = h.citationIconRenderers,
        C = h.imageNodeRenderer,
        b = h.textNodeRenderer,
        v =
          m != null && y != null
            ? m ===
              o("MSGDataclassTypes.flow").GenAiSourcedItemType.FacebookPost
              ? y.facebookIcon
              : m ===
                  o("MSGDataclassTypes.flow").GenAiSourcedItemType.InstagramPost
                ? y.instagramIcon
                : m ===
                    o("MSGDataclassTypes.flow").GenAiSourcedItemType.ThreadsPost
                  ? y.threadsIcon
                  : null
            : null;
      if (l) {
        var S =
            b != null
              ? b({ content: _, contentType: "citation_inline" })
              : s.jsx(r("CometText.react"), { children: _ }),
          R;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = {
              className:
                "x1jhrhoo xjwep3j x1t39747 x1wcsgtt x1pczhz8 x3nfvp2 xdj266r xnnr8r xat24cr xwklpps xexx8yu x11lfxj5 x18d9i69 x135b78x xxymvpz xuxw1ft",
            }),
            (t[0] = R))
          : (R = t[0]);
        var L;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = { className: "x6s0dn4 x1ned7t2 x78zum5 x1q0g3np" }),
            (t[1] = L))
          : (L = t[1]);
        var E;
        return (
          t[2] !== v
            ? ((E =
                v != null &&
                s.jsx("span", {
                  className: "x6s0dn4 x1heor9g x78zum5 x2lah0s",
                  children: v,
                })),
              (t[2] = v),
              (t[3] = E))
            : (E = t[3]),
          s.jsx(
            "span",
            babelHelpers.extends({}, R, {
              children: s.jsx(r("BaseInlinePressable.react"), {
                linkProps: { rel: "external", target: "_blank", url: p },
                xstyle: u.defaultLink,
                children: s.jsxs(
                  "span",
                  babelHelpers.extends({}, L, { children: [E, S] }),
                ),
              }),
            }),
          )
        );
      }
      var k = m === o("MSGDataclassTypes.flow").GenAiSourcedItemType.ThirdParty,
        I =
          i != null && C != null
            ? C({ alt: _ != null ? _ : "", isThirdParty: k, url: i })
            : null,
        T =
          b != null
            ? b({ content: _, contentType: "citation_title" })
            : s.jsx(r("CometText.react"), { children: _ }),
        D =
          f != null
            ? b != null
              ? b({ content: f, contentType: "citation_subtitle" })
              : s.jsx(r("CometText.react"), { children: f })
            : null,
        x;
      t[4] !== p
        ? ((x = { rel: "external", target: "_blank", url: p }),
          (t[4] = p),
          (t[5] = x))
        : (x = t[5]);
      var $, P;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = [u.defaultLink, u.citationListLink]),
          (P = { className: "x6s0dn4 x40hh3e x78zum5 x1q0g3np" }),
          (t[6] = $),
          (t[7] = P))
        : (($ = t[6]), (P = t[7]));
      var N;
      t[8] !== I
        ? ((N =
            I != null &&
            s.jsx("span", {
              className: "x6s0dn4 x78zum5 x2lah0s x10w6t97 xl56j7k x1td3qas",
              children: I,
            })),
          (t[8] = I),
          (t[9] = N))
        : (N = t[9]);
      var M, w;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { className: "x78zum5 xdt5ytf xeuugli x1r0jzty" }),
          (w = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }),
          (t[10] = M),
          (t[11] = w))
        : ((M = t[10]), (w = t[11]));
      var A;
      t[12] !== T
        ? ((A = s.jsx("span", babelHelpers.extends({}, w, { children: T }))),
          (t[12] = T),
          (t[13] = A))
        : (A = t[13]);
      var F;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { className: "x6s0dn4 x1ned7t2 x78zum5 x1q0g3np" }),
          (t[14] = F))
        : (F = t[14]);
      var O;
      t[15] !== v
        ? ((O =
            v != null &&
            s.jsx("span", {
              className: "x6s0dn4 x1heor9g x78zum5 x2lah0s",
              children: v,
            })),
          (t[15] = v),
          (t[16] = O))
        : (O = t[16]);
      var B;
      t[17] !== D
        ? ((B =
            D != null &&
            s.jsx("span", {
              className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
              children: D,
            })),
          (t[17] = D),
          (t[18] = B))
        : (B = t[18]);
      var W;
      t[19] !== B || t[20] !== O
        ? ((W = s.jsxs(
            "span",
            babelHelpers.extends({}, F, { children: [O, B] }),
          )),
          (t[19] = B),
          (t[20] = O),
          (t[21] = W))
        : (W = t[21]);
      var q;
      t[22] !== W || t[23] !== A
        ? ((q = s.jsxs(
            "span",
            babelHelpers.extends({}, M, { children: [A, W] }),
          )),
          (t[22] = W),
          (t[23] = A),
          (t[24] = q))
        : (q = t[24]);
      var U;
      t[25] !== q || t[26] !== N
        ? ((U = s.jsxs(
            "span",
            babelHelpers.extends({}, P, { children: [N, q] }),
          )),
          (t[25] = q),
          (t[26] = N),
          (t[27] = U))
        : (U = t[27]);
      var V;
      return (
        t[28] !== x || t[29] !== U
          ? ((V = s.jsx(r("BaseInlinePressable.react"), {
              linkProps: x,
              xstyle: $,
              children: U,
            })),
            (t[28] = x),
            (t[29] = U),
            (t[30] = V))
          : (V = t[30]),
        V
      );
    }
    l.default = c;
  },
  98,
);
