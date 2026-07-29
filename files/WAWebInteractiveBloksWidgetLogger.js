__d(
  "WAWebInteractiveBloksWidgetLogger",
  [
    "WAWebBizAiComponentInteractionWamEvent",
    "WAWebWamEnumBizAiRenderOutcomeType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e == null ? void 0 : e.fallback;
      new (o(
        "WAWebBizAiComponentInteractionWamEvent",
      ).BizAiComponentInteractionWamEvent)({
        bizAiRenderOutcome: o("WAWebWamEnumBizAiRenderOutcomeType")
          .BIZ_AI_RENDER_OUTCOME_TYPE.FALLBACK,
        bizAiClientHasFallbackText: r != null && r !== "",
        bizAiComponentType: (t = e == null ? void 0 : e.type) != null ? t : "",
        bizAiMessageUuid: (n = e == null ? void 0 : e.uuid) != null ? n : "",
      }).commit();
    }
    l.logInteractiveBloksWidgetFallback = e;
  },
  98,
);
