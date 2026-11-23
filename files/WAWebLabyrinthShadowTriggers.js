__d(
  "WAWebLabyrinthShadowTriggers",
  [
    "WATimeUtils",
    "WAWebBackendEventBus",
    "WAWebLabyrinthCompanionRegisteredListeners",
    "WAWebLabyrinthShadowScheduler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 60 * o("WATimeUtils").MINUTE_MILLISECONDS,
      s = 15 * o("WATimeUtils").MINUTE_MILLISECONDS,
      u = !1,
      c = null;
    function d() {
      u ||
        ((u = !0),
        o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(
          function () {
            m("recent_history_synced");
          },
        ),
        o("WAWebBackendEventBus").BackendEventBus.onFullChatHistorySynced(
          function () {
            m("full_history_synced");
          },
        ),
        o(
          "WAWebLabyrinthCompanionRegisteredListeners",
        ).addLabyrinthCompanionRegisteredListener(function () {
          m("companion_registered");
        }),
        o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
          ? m("app_start")
          : o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
              function () {
                m("app_start");
              },
            ));
    }
    function m(e) {
      o("WAWebLabyrinthShadowScheduler").scheduleLabyrinthShadowRun(e).then(p);
    }
    function p(t) {
      c != null && (self.clearTimeout(c), (c = null));
      var n = o(
        "WAWebLabyrinthShadowScheduler",
      ).getLabyrinthShadowCheckpointDelayMs();
      n != null &&
        (c = self.setTimeout(
          function () {
            ((c = null), m("checkpoint"));
          },
          Math.min(
            Math.max(
              n,
              t === "ran" || t === "next-checkpoint-not-due"
                ? o("WATimeUtils").MINUTE_MILLISECONDS
                : s,
            ),
            e,
          ),
        ));
    }
    l.startLabyrinthShadowTriggers = d;
  },
  98,
);
