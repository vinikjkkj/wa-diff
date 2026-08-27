__d(
  "WAWebBizAiSettingsFetchOnLaunch",
  [
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHandoffRemoval",
    "WAWebBizAiHandoffRemovalTimingFetchQuery",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["add"]
      .concat(o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS)
      .join(" ");
    function s() {
      for (var e of o("WAWebChatCollection").ChatCollection.getModelsArray())
        o("WAWebBizAiHandoffRemoval").armHandoffRemovalEvictionTimer(e);
    }
    function u() {
      if (!o("WAWebCmd").Cmd.isMainStreamReadyMd) {
        o("WAWebCmd").Cmd.once == null ||
          o("WAWebCmd").Cmd.once("main_stream_mode_ready_from_bridge", u);
        return;
      }
      if (o("WAWebMobilePlatforms").isSMB()) {
        o(
          "WAWebBizAiHandoffRemovalTimingModel",
        ).BizAiHandoffRemovalTimingEventBus.on("updated", s);
        var t = !1,
          n = function () {
            t ||
              !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() ||
              ((t = !0),
              o("WAWebBusinessProfileCollection").BusinessProfileCollection.off(
                e,
                n,
              ),
              o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled() &&
                (o(
                  "WAWebBizAISettingsVersionCollection",
                ).BizAISettingsVersionCollection.on("add", c),
                o(
                  "WAWebBizAISettingsVersionCollection",
                ).BizAISettingsVersionCollection.on("change", c),
                o(
                  "WAWebBizAiHandoffRemovalTimingFetchQuery",
                ).fetchHandoffRemovalTiming()));
          };
        (o("WAWebBusinessProfileCollection").BusinessProfileCollection.on(e, n),
          n());
      }
    }
    function c() {
      if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
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
    }
    ((l.reconcileHandoffRemovalEvictionTimers = s),
      (l.initHandoffRemovalTimingFetchOnLaunch = u));
  },
  98,
);
