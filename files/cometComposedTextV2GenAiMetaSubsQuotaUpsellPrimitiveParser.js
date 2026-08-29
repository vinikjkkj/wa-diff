__d(
  "cometComposedTextV2GenAiMetaSubsQuotaUpsellPrimitiveParser",
  [
    "CometComposedTextV2CustomNode.react",
    "CometComposedTextV2CustomNodeRenderer.react",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: e,
          rendererKey: "quotaUpsell",
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function s(t) {
      var n;
      if (
        t.meter_usage_type === "META_AI_THINK_HARD" ||
        ((n = t.benefit_type) == null ? void 0 : n.includes("THINK_HARD")) ===
          !0
      )
        return null;
      var r = o("cometComposedTextV2NodeBuilders").buildRootNode(),
        a = t.buttons;
      return r.append(
        e({
          body: t.body,
          bodyLine1: t.body_line1,
          bodyLine2: t.body_line2,
          buttons:
            a != null && a.length > 0
              ? a.map(function (e) {
                  return {
                    action: e.action,
                    deeplink: e.deeplink,
                    label: e.label,
                  };
                })
              : null,
          nodeType: "quotaUpsell",
          title: t.title,
        }),
      );
    }
    l.default = s;
  },
  98,
);
