__d(
  "cometComposedTextV2NodeBuilders",
  [
    "CometComposedTextV2BlockQuoteNode.react",
    "CometComposedTextV2BlockQuoteNodeRenderer.react",
    "CometComposedTextV2CitationNode.react",
    "CometComposedTextV2CitationNodeRenderer.react",
    "CometComposedTextV2ContentViewerNode.react",
    "CometComposedTextV2ContentViewerNodeRenderer.react",
    "CometComposedTextV2CustomNode.react",
    "CometComposedTextV2CustomNodeRenderer.react",
    "CometComposedTextV2FoABloksNode.react",
    "CometComposedTextV2FoABloksNodeRenderer.react",
    "CometComposedTextV2GridNode.react",
    "CometComposedTextV2GridNodeRenderer.react",
    "CometComposedTextV2HScrollNode.react",
    "CometComposedTextV2HScrollNodeRenderer.react",
    "CometComposedTextV2ImageGridNodeRenderer.react",
    "CometComposedTextV2LinkNode.react",
    "CometComposedTextV2LinkNodeRenderer.react",
    "CometComposedTextV2MathNode.react",
    "CometComposedTextV2MathNodeRenderer.react",
    "CometComposedTextV2NewLineNode.react",
    "CometComposedTextV2NewLineNodeRenderer.react",
    "CometComposedTextV2ParagraphNode.react",
    "CometComposedTextV2ParagraphNodeRenderer.react",
    "CometComposedTextV2ProgressStatusNode.react",
    "CometComposedTextV2ProgressStatusNodeRenderer.react",
    "CometComposedTextV2RootNode.react",
    "CometComposedTextV2RootNodeRenderer.react",
    "CometComposedTextV2TextNode.react",
    "CometComposedTextV2TextNodeRenderer.react",
    "CometComposedTextV2ThematicBreakNode.react",
    "CometComposedTextV2ThematicBreakNodeRenderer.react",
    "cometComposedTextV2NodeKey",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return new (o(
        "CometComposedTextV2BlockQuoteNode.react",
      ).CometComposedTextV2BlockQuoteNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2BlockQuoteNodeRenderer.react"),
      );
    }
    function c(e, t, n, a, i, l) {
      return (
        n === void 0 && (n = !0),
        new (o(
          "CometComposedTextV2CitationNode.react",
        ).CometComposedTextV2CitationNode)(
          {
            faviconUrl: l,
            isInline: n,
            key: r("cometComposedTextV2NodeKey")(),
            sourceDisplayName: a,
            sourceSubtitle: i,
            sourceType: t,
            url: e,
          },
          r("CometComposedTextV2CitationNodeRenderer.react"),
        )
      );
    }
    function d(e) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        { key: r("cometComposedTextV2NodeKey")(), rendererKey: e },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function m(e, t, n, a, i) {
      return new (o(
        "CometComposedTextV2FoABloksNode.react",
      ).CometComposedTextV2FoABloksNode)(
        {
          data: t,
          initialResponse: a,
          key: r("cometComposedTextV2NodeKey")(),
          type: e,
          uuid: n,
          versioningId: i,
        },
        r("CometComposedTextV2FoABloksNodeRenderer.react"),
      );
    }
    function p(e) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: e,
          rendererKey: "reel",
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function _(e) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: e,
          rendererKey: "post",
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function f(e) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: e,
          rendererKey: "productItemCard",
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = 8),
        new (o(
          "CometComposedTextV2HScrollNode.react",
        ).CometComposedTextV2HScrollNode)(
          { gap: e, key: r("cometComposedTextV2NodeKey")() },
          r("CometComposedTextV2HScrollNodeRenderer.react"),
        )
      );
    }
    function h() {
      return new (o(
        "CometComposedTextV2GridNode.react",
      ).CometComposedTextV2GridNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2GridNodeRenderer.react"),
      );
    }
    function y() {
      return new (o(
        "CometComposedTextV2GridNode.react",
      ).CometComposedTextV2GridNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2ImageGridNodeRenderer.react"),
      );
    }
    function C(e, t) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: babelHelpers.extends(
            {},
            t != null ? { imageGroup: t.images, imageIndex: t.index } : {},
            { imageUrl: e, nodeType: "inlineImage" },
          ),
          rendererKey: "inlineImage",
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function b(e, t, n, a) {
      return new (o(
        "CometComposedTextV2LinkNode.react",
      ).CometComposedTextV2LinkNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rel: t,
          target: n,
          title: a,
          url: e,
        },
        r("CometComposedTextV2LinkNodeRenderer.react"),
      );
    }
    function v(e) {
      return new (o(
        "CometComposedTextV2MathNode.react",
      ).CometComposedTextV2MathNode)(
        { expression: e, key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2MathNodeRenderer.react"),
      );
    }
    function S(e, t) {
      return new (o(
        "CometComposedTextV2ContentViewerNode.react",
      ).CometComposedTextV2ContentViewerNode)(
        { content: t, contentType: e, key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2ContentViewerNodeRenderer.react"),
      );
    }
    function R() {
      return new (o(
        "CometComposedTextV2NewLineNode.react",
      ).CometComposedTextV2NewLineNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2NewLineNodeRenderer.react"),
      );
    }
    function L() {
      return new (o(
        "CometComposedTextV2ParagraphNode.react",
      ).CometComposedTextV2ParagraphNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2ParagraphNodeRenderer.react"),
      );
    }
    function E(e, t, n, a, i) {
      return new (o(
        "CometComposedTextV2ProgressStatusNode.react",
      ).CometComposedTextV2ProgressStatusNode)(
        {
          icon: e,
          isInProgress: t,
          key: r("cometComposedTextV2NodeKey")(),
          metaSearchApps: n,
          targetSecondaryScreenId: a,
          targetSecondaryScreenTabId: i,
        },
        r("CometComposedTextV2ProgressStatusNodeRenderer.react"),
      );
    }
    function k() {
      return new (o(
        "CometComposedTextV2RootNode.react",
      ).CometComposedTextV2RootNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2RootNodeRenderer.react"),
      );
    }
    function I(e, t, n) {
      return (
        t === void 0 && (t = 0),
        new (o(
          "CometComposedTextV2TextNode.react",
        ).CometComposedTextV2TextNode)(
          {
            contentType: n,
            format: t,
            key: r("cometComposedTextV2NodeKey")(),
            text: e,
          },
          r("CometComposedTextV2TextNodeRenderer.react"),
        )
      );
    }
    function T() {
      return new (o(
        "CometComposedTextV2ThematicBreakNode.react",
      ).CometComposedTextV2ThematicBreakNode)(
        { key: r("cometComposedTextV2NodeKey")() },
        r("CometComposedTextV2ThematicBreakNodeRenderer.react"),
      );
    }
    ((l.buildBlockQuoteNode = u),
      (l.buildCitationNode = c),
      (l.buildCustomNode = d),
      (l.buildFoABloksNode = m),
      (l.buildReelNode = p),
      (l.buildPostNode = _),
      (l.buildProductItemCardNode = f),
      (l.buildHScrollNode = g),
      (l.buildGridNode = h),
      (l.buildImageGridNode = y),
      (l.buildImageNode = C),
      (l.buildLinkNode = b),
      (l.buildMathNode = v),
      (l.buildContentViewerNode = S),
      (l.buildNewLineNode = R),
      (l.buildParagraphNode = L),
      (l.buildProgressStatusNode = E),
      (l.buildRootNode = k),
      (l.buildTextNode = I),
      (l.buildThematicBreakNode = T));
  },
  98,
);
