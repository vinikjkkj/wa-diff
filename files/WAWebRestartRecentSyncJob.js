__d(
  "WAWebRestartRecentSyncJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebHistorySyncNotificationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSyncBootstrap",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "restartRecentSyncJob",
          function () {
            return p();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted();
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebSyncBootstrap").getIsHistorySyncRunning()) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] History sync is running, skip restart recent sync job",
                ])),
            );
            return;
          }
          var t = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
          if ((t == null ? void 0 : t.recentCompleted) === !0) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Recent sync already completed, skip restart recent sync job",
                ])),
            );
            return;
          }
          var n = yield o("WAWebSchemaHistorySyncNotification")
            .getHistorySyncNotificationTable()
            .equals(["processed"], 0, { shouldDecrypt: !1 })
            .then(function (e) {
              return e.filter(function (e) {
                return (
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT ||
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.FULL
                );
              });
            });
          if (n.length === 0) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] No unprocessed notifications found, skip restart recent sync job",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Unprocessed notifications length: ",
                "",
              ])),
            n.length,
          ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Restart recent sync job",
                ])),
            ),
            r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(
              o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                .ManualRestart,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    l.restartRecentSyncJob = m;
  },
  98,
);
