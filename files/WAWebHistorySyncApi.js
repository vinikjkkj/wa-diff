__d(
  "WAWebHistorySyncApi",
  [
    "WAWebBackgroundPauseGating",
    "WAWebBackgroundPauseState",
    "WAWebCmd",
    "WAWebHistorySyncProgressModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        setHistorySyncPaused: function (t) {
          var e = t.paused;
          (u(),
            o("WAWebHistorySyncProgressModel")
              .getHistorySyncProgressModel()
              .setPaused(e));
        },
        setHistorySyncProgress: function (t) {
          var e = t.incomplete,
            n = t.progress;
          (u(),
            n != null &&
              o("WAWebHistorySyncProgressModel")
                .getHistorySyncProgressModel()
                .setProgress(n),
            e != null &&
              o("WAWebHistorySyncProgressModel")
                .getHistorySyncProgressModel()
                .setIncomplete(e));
        },
        triggerInitialChatHistorySyncedFromBridge: function () {
          o("WAWebCmd").Cmd.onInitialChatHistorySyncedFromBridge();
        },
        triggerCriticalSyncDoneFromBridge: function () {
          o("WAWebCmd").Cmd.criticalSyncDoneFromBridge();
        },
        triggerHistorySyncChunkProcessedFromBridge: function (t) {
          var e = t.chatsUpdated;
          o("WAWebCmd").Cmd.onHistorySyncChunkProcessedFromBridge(new Set(e));
        },
      },
      s = !1;
    function u() {
      s ||
        ((s = !0),
        o("WAWebBackgroundPauseState").backgroundPauseState.onSet(c),
        o("WAWebBackgroundPauseState").onDemandHistorySyncPendingState.onSet(c),
        o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.onSet(
          c,
        ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", c),
        o("WAWebCmd").Cmd.on("ab_props_loaded_from_bridge", c),
        c());
    }
    function c() {
      o("WAWebHistorySyncProgressModel")
        .getHistorySyncProgressModel()
        .setPausedForCall(d());
    }
    function d() {
      return o("WAWebBackgroundPauseState").backgroundPauseState.get() && m();
    }
    function m() {
      return (
        !o("WAWebBackgroundPauseState").onDemandHistorySyncPendingState.get() &&
        !o(
          "WAWebBackgroundPauseState",
        ).onDemandHistorySyncInFlightState.get() &&
        o("WAWebBackgroundPauseGating").isVoipPauseHistorySyncEnabled()
      );
    }
    l.HistorySyncBridgeApi = e;
  },
  98,
);
