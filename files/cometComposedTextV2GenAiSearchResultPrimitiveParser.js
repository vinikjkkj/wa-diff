__d(
  "cometComposedTextV2GenAiSearchResultPrimitiveParser",
  [
    "CometAIThemeProvider.react",
    "CometComposedTextV2RendererWithStableKeys.react",
    "CometComposedTextV2URParserContext.react",
    "CometComposedTextV2UnsupportedURType.react",
    "FBLogger",
    "cometComposedTextV2NodeBuilders",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n,
        a =
          t == null || (n = t.contentTriggerTextValues) == null
            ? void 0
            : n.citations,
        i = t == null ? void 0 : t.displayMode,
        l = t == null ? void 0 : t.renderers;
      if (a == null)
        return o("cometComposedTextV2NodeBuilders")
          .buildRootNode()
          .append(
            o(
              "CometComposedTextV2UnsupportedURType.react",
            ).buildUnsupportedURTypeNode(
              "GenAISearchResultPrimitive (missing citations trigger text)",
            ),
          );
      if (e.sources.length === 0)
        return (
          r("FBLogger")("comet_ur_parser").warn(
            "[CometURParser] GenAISearchResultPrimitive has empty sources array",
          ),
          null
        );
      var u = e.sources.filter(function (e) {
          return (
            (e.source_url != null && e.source_url !== "") ||
            (e.source_display_name != null && e.source_display_name !== "")
          );
        }),
        c = e.sources.length - u.length;
      if (
        (c > 0 &&
          r("FBLogger")("comet_ur_parser").warn(
            "[CometURParser] GenAISearchResultPrimitive has unrenderable sources: " +
              c +
              " unrenderable out of " +
              e.sources.length +
              " total sources",
          ),
        u.length === 0)
      )
        return null;
      var d = o("cometComposedTextV2NodeBuilders").buildRootNode();
      for (var m of u) {
        var p,
          _,
          f,
          g = o("cometComposedTextV2NodeBuilders").buildCitationNode(
            (p = m.source_url) != null ? p : "#",
            m.source_type,
            !1,
            (_ = m.source_display_name) != null ? _ : "",
            m.source_subtitle,
            (f = m.favicon) == null ? void 0 : f.url,
          );
        d.append(g);
      }
      var h = s.jsx(o("CometAIThemeProvider.react").CometAIThemeProvider, {
          displayMode: i != null ? i : "light",
          children: s.jsx(
            o("CometComposedTextV2URParserContext.react")
              .CometComposedTextV2URParserContextProvider,
            {
              renderers: l != null ? l : {},
              children: s.jsx(
                r("CometComposedTextV2RendererWithStableKeys.react"),
                { root: d },
              ),
            },
          ),
        }),
        y = o("cometComposedTextV2NodeBuilders").buildContentViewerNode(
          "citations",
          h,
        );
      return (
        y.append(
          o("cometComposedTextV2NodeBuilders").buildTextNode(
            a,
            0,
            "modalTrigger",
          ),
        ),
        o("cometComposedTextV2NodeBuilders").buildRootNode().append(y)
      );
    }
    l.default = u;
  },
  98,
);
