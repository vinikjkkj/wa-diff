__d(
  "WAWebInteractiveBloksWidgetLogger",
  [
    "WAWebBizAiComponentInteractionWamEvent",
    "WAWebWamEnumBizAiRenderOutcomeType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a = e == null ? void 0 : e.fallback;
      new (o(
        "WAWebBizAiComponentInteractionWamEvent",
      ).BizAiComponentInteractionWamEvent)({
        bizAiRenderOutcome: o("WAWebWamEnumBizAiRenderOutcomeType")
          .BIZ_AI_RENDER_OUTCOME_TYPE.FALLBACK,
        bizAiClientHasFallbackText: a != null && a !== "",
        bizAiComponentType: (n = e == null ? void 0 : e.type) != null ? n : "",
        bizAiMessageUuid: (r = e == null ? void 0 : e.uuid) != null ? r : "",
        bizAiErrorDetail: t != null ? t : void 0,
      }).commit();
    }
    l.logInteractiveBloksWidgetFallback = e;
  },
  98,
);
