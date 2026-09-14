__d(
  "WAWebBizAiSmartComposerCoachingMessageMatcher",
  [
    "WAWebBizAiSmartComposerMsgClassification",
    "WAWebBizAiSmartComposerPendingCoachingStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        !o(
          "WAWebBizAiSmartComposerMsgClassification",
        ).isLocallyCreatedHumanTextMsg(e)
      )
        return null;
      var t = o(
          "WAWebBizAiSmartComposerPendingCoachingStore",
        ).consumePendingCoachingSnapshot(e.id.remote),
        n = e.body;
      return t == null || n == null || n.trim() === ""
        ? null
        : { finalText: n, snapshot: t };
    }
    l.consumeSmartComposerCoachingMessageMatch = e;
  },
  98,
);
