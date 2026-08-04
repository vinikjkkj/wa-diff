__d(
  "WAWebBizAiSettingsFetchOnLaunch",
  [
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemoval",
    "WAWebBizAiHandoffRemovalTimingFetchQuery",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      for (var e of o("WAWebChatCollection").ChatCollection.getModelsArray())
        o("WAWebBizAiHandoffRemoval").armHandoffRemovalEvictionTimer(e);
    }
    function s() {
      if (o("WAWebConnModel").Conn.platform == null) {
        o("WAWebConnModel").Conn.once == null ||
          o("WAWebConnModel").Conn.once("change:platform", s);
        return;
      }
      o("WAWebMobilePlatforms").isSMB() &&
        (o(
          "WAWebBizAiHandoffRemovalTimingModel",
        ).BizAiHandoffRemovalTimingEventBus.on("updated", e),
        o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() &&
          (o(
            "WAWebBizAISettingsVersionCollection",
          ).BizAISettingsVersionCollection.on("add", u),
          o(
            "WAWebBizAISettingsVersionCollection",
          ).BizAISettingsVersionCollection.on("change", u),
          o(
            "WAWebBizAiHandoffRemovalTimingFetchQuery",
          ).fetchHandoffRemovalTiming()));
    }
    function u() {
      var e = o(
        "WAWebBizAISettingsVersionCollection",
      ).BizAISettingsVersionCollection.getByCategory(
        o("WAWebProtobufSyncAction.pb")
          .SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory
          .HANDOFF_REMOVAL_TIMING,
      );
      e != null &&
        o(
          "WAWebBizAISettingsVersionCollection",
        ).BizAISettingsVersionCollection.find(e.id);
    }
    ((l.reconcileHandoffRemovalEvictionTimers = e),
      (l.initHandoffRemovalTimingFetchOnLaunch = s));
  },
  98,
);
