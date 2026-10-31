__d(
  "WAWebInteractiveBloksWidgetLogger",
  [
    "WAWebBizAiComponentInteractionWamEvent",
    "WAWebWamEnumBizAiRenderOutcomeType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a,
        i,
        l,
        s =
          (a = n != null ? n : e == null ? void 0 : e.fallback) == null
            ? void 0
            : a.trim();
      new (o(
        "WAWebBizAiComponentInteractionWamEvent",
      ).BizAiComponentInteractionWamEvent)({
        bizAiRenderOutcome: o("WAWebWamEnumBizAiRenderOutcomeType")
          .BIZ_AI_RENDER_OUTCOME_TYPE.FALLBACK,
        bizAiClientHasFallbackText: s != null && s !== "",
        bizAiComponentType:
          (i = r != null ? r : e == null ? void 0 : e.type) != null ? i : "",
        bizAiMessageUuid: (l = e == null ? void 0 : e.uuid) != null ? l : "",
        bizAiErrorDetail: t != null ? t : void 0,
      }).commit();
    }
    l.logInteractiveBloksWidgetFallback = e;
  },
  98,
);
