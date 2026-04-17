__d(
  "CometFeedStoryMessageBodyRenderers",
  [
    "CometBoldedEntityRenderer",
    "CometFeedSeeMoreAnchorEntityRenderer",
    "CometHovercardEntityRenderer",
    "CometKGTickerNodeEntityRenderer",
    "CometShortenedExternalUrlEntityRenderer",
    "CometTextDelightCampaignEntityRenderer",
    "CometTrackingNodeRenderer",
    "GroupsCometGroupRuleRenderer",
    "PageWhatsAppNumberCometRenderer",
    "SearchCometBlueHashtagExperiment",
    "cr:1077",
    "cr:13723",
    "cr:4641",
    "cr:4814",
    "cr:5863",
    "cr:6625",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("gkx")("20836"),
      c = {
        Event: [
          (e = r("CometHovercardEntityRenderer")),
          (s = r("CometBoldedEntityRenderer")),
        ],
        Group: [e, s],
        GroupRule: [r("GroupsCometGroupRuleRenderer")],
        Page: [e, s],
        User: [e, s],
      },
      d = {
        Event: [e],
        Group: [e],
        GroupRule: [r("GroupsCometGroupRuleRenderer")],
        Page: [e],
        PageWhatsAppNumber: [r("PageWhatsAppNumberCometRenderer")],
        User: [e],
      },
      m = u
        ? c
        : r("SearchCometBlueHashtagExperiment").entityMentionStyle != null &&
            r("SearchCometBlueHashtagExperiment").entityMentionStyle
              .weight_DEPRECATED === "normal"
          ? d
          : c,
      p = u ? void 0 : { KGTickerNode: [r("CometKGTickerNodeEntityRenderer")] },
      _ = babelHelpers.extends({}, m, p, {
        "*": [n("cr:13723"), r("CometTrackingNodeRenderer")],
        ExternalUrl: [
          r("CometShortenedExternalUrlEntityRenderer"),
          n("cr:1077"),
        ].filter(Boolean),
        Photo: [n("cr:4814")].filter(Boolean),
        SeeMoreTruncation: [r("CometFeedSeeMoreAnchorEntityRenderer")],
        TextDelightCampaign: [r("CometTextDelightCampaignEntityRenderer")],
        Video: [n("cr:5863")].filter(Boolean),
        XFBProdQuartzVizirSnapshot: [n("cr:4641")].filter(Boolean),
        XFBWorkCustomEmoji: [n("cr:6625")].filter(Boolean),
      });
    l.default = _;
  },
  98,
);
