__d(
  "CometComposedTextV2URParser.react",
  [
    "CometAIFadeInTextTransformV2",
    "CometAIThemeProvider.react",
    "CometComposedTextV2GenAiUnifiedResponseSectionViewModelParser.react",
    "CometComposedTextV2TransformsContext.react",
    "CometComposedTextV2URParserContext.react",
    "CometComposedTextV2UnsupportedURType.react",
    "CometErrorBoundary.react",
    "FBLogger",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = e || (e = r("react")),
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      return e.__typename === "GenAISingleLayoutViewModel"
        ? [e.primitive]
        : e.__typename === "GenAIGridLayoutViewModel" ||
            e.__typename === "GenAIHScrollLayoutViewModel" ||
            e.__typename === "GenAIVStackLayoutViewModel" ||
            e.__typename === "GenAIActionRowLayoutViewModel" ||
            e.__typename === "GenAIAddonActionLayoutViewModel" ||
            e.__typename === "GenAIFlexibleCountGridLayoutViewModel"
          ? e.primitives
          : e.__typename === "GenAIRichListItemLayoutViewModel"
            ? [e.text_content]
            : [];
    }
    function _(e) {
      return e.__typename === "GenAISearchResultPrimitive"
        ? e.sources.length
        : 0;
    }
    function f(e, t) {
      if (e.__typename === "GenAIMarkdownTextUXPrimitive") {
        var n = e.inline_entities;
        if (n != null) {
          for (var r of n)
            if (r.metadata.__typename === "GenAISearchCitationItem") {
              var o = r.metadata.sources;
              if (o != null && o.length > 0)
                for (var a of o) a.source_url != null && t.add(a.source_url);
              else t.add(r.metadata.reference_url);
            }
        }
      }
    }
    function g(e) {
      var t = e.displayMode,
        n = t === void 0 ? "light" : t,
        a = e.errorFallback,
        i = e.isStreaming,
        l = e.logging,
        s = e.markedTokenizeOptions,
        u = e.renderers,
        g = e.streamingState,
        h = g === void 0 ? null : g,
        y = e.themeOverrides,
        C = e.xmsgGenAiUnifiedResponse,
        b = d(
          function () {
            return { textTransform: r("CometAIFadeInTextTransformV2")(h) };
          },
          [h],
        ),
        v = b.textTransform,
        S = C.embedded_screens,
        R = C.footer_sections,
        L = C.sections,
        E = d(
          function () {
            var e, t;
            return babelHelpers.extends({}, u, {
              postNodeRenderer:
                (e = u == null ? void 0 : u.postNodeRenderer) != null
                  ? e
                  : u == null
                    ? void 0
                    : u.unsupportedTypeNodeRenderer,
              productItemCardNodeRenderer:
                (t = u == null ? void 0 : u.productItemCardNodeRenderer) != null
                  ? t
                  : u == null
                    ? void 0
                    : u.unsupportedTypeNodeRenderer,
            });
          },
          [u],
        ),
        k = m(!1),
        I =
          R != null &&
          R.length > 0 &&
          R.every(function (e) {
            return (
              e.view_model.__typename === "GenAIMultipleResponseLayoutViewModel"
            );
          });
      I &&
        !k.current &&
        ((k.current = !0),
        r("FBLogger")("comet_ur_parser").mustfix(
          "[CometURParser] Unsupported UR type (silent failure due to GenAIMultipleResponseLayoutViewModel): footer_sections",
        ));
      var T = m(!1);
      if (
        (l == null ? void 0 : l.searchResultSourceMismatch) === !0 &&
        i !== !0 &&
        !T.current
      )
        try {
          var D = 0,
            x = new Set();
          for (var $ of L)
            for (var P of p($.view_model)) ((D += _(P)), f(P, x));
          D > 0 &&
            x.size < D &&
            ((T.current = !0),
            r("FBLogger")("comet_ur_parser").mustfix(
              "[CometURParser] Search result source mismatch: " +
                x.size +
                " unique inlined citations for " +
                D +
                " search result sources",
            ));
        } catch (e) {
          r("FBLogger")("comet_ur_parser").mustfix(
            "[CometURParser] Error checking search result inlining: " +
              r("getErrorSafe")(e).message,
          );
        }
      return c.jsx(r("CometErrorBoundary.react"), {
        fallback: function () {
          return a == null ? void 0 : a();
        },
        onError: function (t) {
          r("FBLogger")("comet_ur_parser").mustfix(
            "[CometURParser] Error rendering unified response: " +
              r("getErrorSafe")(t).message,
          );
        },
        children: c.jsx(
          o("CometComposedTextV2TransformsContext.react")
            .CometComposedTextV2TransformsContextProvider,
          {
            textTransform: v,
            children: c.jsx(
              o("CometAIThemeProvider.react").CometAIThemeProvider,
              {
                displayMode: n,
                overrides: y,
                children: c.jsx(
                  o("CometComposedTextV2URParserContext.react")
                    .CometComposedTextV2URParserContextProvider,
                  {
                    markedTokenizeOptions: s,
                    renderers: E,
                    children: c.jsxs("div", {
                      className: "x78zum5 xdt5ytf xgpatz3",
                      children: [
                        L.map(function (e, t) {
                          return c.jsx(
                            r(
                              "CometComposedTextV2GenAiUnifiedResponseSectionViewModelParser.react",
                            ),
                            { viewModel: e.view_model },
                            t,
                          );
                        }),
                        S &&
                          S.length > 0 &&
                          c.jsx(
                            o("CometComposedTextV2UnsupportedURType.react")
                              .CometComposedTextV2UnsupportedURType,
                            { typename: "embedded_screens" },
                          ),
                        R != null &&
                          R.length > 0 &&
                          !I &&
                          c.jsx(
                            o("CometComposedTextV2UnsupportedURType.react")
                              .CometComposedTextV2UnsupportedURType,
                            { typename: "footer_sections" },
                          ),
                      ],
                    }),
                  },
                ),
              },
            ),
          },
        ),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
