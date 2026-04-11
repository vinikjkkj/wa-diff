__d(
  "CometComposedTextV2TextNodeRenderer.react",
  [
    "BaseInlineCode.react",
    "CometComposedTextV2CitationNode.react",
    "CometComposedTextV2ContentViewerNode.react",
    "CometComposedTextV2HeadingNode.react",
    "CometComposedTextV2LinkNode.react",
    "CometComposedTextV2TransformsContext.react",
    "CometComposedTextV2URParserContext.react",
    "CometComposedTextV2Utils",
    "CometText.react",
    "ComposedInlineStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { inlineCode: { backgroundColor: "xmjcpbm", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.node,
        a = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        i = a.renderers,
        l = i.textNodeRenderer,
        c = n.getState(),
        d = c.contentType,
        m = c.format,
        p = c.text,
        _ = o("CometComposedTextV2Utils").getFormats(m),
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u), (t[0] = f))
        : (f = t[0]);
      var g = f,
        h =
          typeof p == "string" && _.has(r("ComposedInlineStyle").CODE)
            ? s.jsx(r("BaseInlineCode.react"), {
                variant: { xstyleConfig: { root: g.inlineCode } },
                children: p,
              })
            : p,
        y = o(
          "CometComposedTextV2TransformsContext.react",
        ).useCometComposedTextV2TransformsContext(),
        C = y.textTransform;
      if (
        (C != null && (h = C(h)),
        _.has(r("ComposedInlineStyle").BOLD) &&
          (h = s.jsx("strong", { children: h })),
        _.has(r("ComposedInlineStyle").ITALIC) &&
          (h = s.jsx("em", { children: h })),
        _.has(r("ComposedInlineStyle").STRIKETHROUGH) &&
          (h = s.jsx("s", { children: h })),
        _.has(r("ComposedInlineStyle").UNDERLINE) &&
          (h = s.jsx("u", { children: h })),
        n.getNearestNodeOfType(
          o("CometComposedTextV2HeadingNode.react")
            .CometComposedTextV2HeadingNode,
        ) != null)
      )
        return s.jsx("span", { children: h });
      var b = d;
      b == null &&
        (n.getNearestNodeOfType(
          o("CometComposedTextV2LinkNode.react").CometComposedTextV2LinkNode,
        ) != null
          ? (b = "link")
          : n.getNearestNodeOfType(
                o("CometComposedTextV2CitationNode.react")
                  .CometComposedTextV2CitationNode,
              ) != null
            ? (b = "citation_inline")
            : n.getNearestNodeOfType(
                o("CometComposedTextV2ContentViewerNode.react")
                  .CometComposedTextV2ContentViewerNode,
              ) != null && (b = "modalTrigger"));
      var v =
        n.getNearestNodeOfType(
          o("CometComposedTextV2LinkNode.react").CometComposedTextV2LinkNode,
        ) != null;
      return l
        ? l({ content: h, contentType: b != null ? b : void 0 })
        : s.jsx(r("CometText.react"), {
            fontWeight: v ? "semibold" : void 0,
            children: h,
          });
    }
    l.default = c;
  },
  98,
);
