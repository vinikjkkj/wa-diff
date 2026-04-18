__d(
  "WAWebTasksDefinitions",
  [
    "Promise",
    "WALogger",
    "WATaskScheduler",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebABPropsLocalStorage",
    "WAWebAbPropsSyncJob",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingScheduledJobs",
    "WAWebApiChat",
    "WAWebApiParticipantStore",
    "WAWebApiTasksScheduledTime",
    "WAWebApiTextStatus",
    "WAWebBizBroadcastAudienceRefreshJob",
    "WAWebBizBroadcastCampaignCleanup",
    "WAWebBizGatingUtils",
    "WAWebBotGating",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenRefreshJob",
    "WAWebCleanUtmJob",
    "WAWebContactSyncBridge",
    "WAWebDBPurgeExpiredRecords",
    "WAWebDBReportingTokenUtils",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebFalcoStorageClearJob",
    "WAWebFetchQuickPromotions",
    "WAWebFingerprintJob",
    "WAWebGalaxyFlowsUtils",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebInactiveGroupLidMigrationJob",
    "WAWebLogDailyStatsJob",
    "WAWebLogHistorySyncStatusAfterPairingJob",
    "WAWebMessagingGatingUtils",
    "WAWebMetaAiHistoricalThreadMigrationJob",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCleanupTasks",
    "WAWebNonAddressBookContactsJob",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebOpusMigration",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQplStorage",
    "WAWebQuarantineDataCleanupJob",
    "WAWebQuickPromotionGating",
    "WAWebReportDbVerionsJob",
    "WAWebRestartRecentSyncJob",
    "WAWebSyncContactsJob",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdReportKeyStatsJob",
    "WAWebSyncdReportSyncdStatJob",
    "WAWebSyncdRequestAllSyncdMissingKeysJob",
    "WAWebSyncdSyncAllCollectionsJob",
    "WAWebTasksTaskType",
    "WAWebUserPrefsBot",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMultiDevice",
    "WAWebWebTPSharedSessionUtils",
    "asyncToGeneratorRuntime",
    "cr:4857",
    "cr:4940",
    "gkx",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w = r("requireDeferred")("WAWebConsumerFetchQuickPromotions").__setRef(
        "WAWebTasksDefinitions",
      ),
      A = [
        (M = o("WAWebTasksTaskType")).TaskType.CANONICAL_ENT_TOKEN_REFRESH,
        M.TaskType.CLEAN_TC_TOKENS,
        M.TaskType.LOG_DAILY_STATS,
        M.TaskType.ROTATE_KEY,
        M.TaskType.SYNC_AB_PROPS,
        M.TaskType.SYNC_CONTACTS,
        M.TaskType.REPORT_SYNCD_ACTION_STAT,
        M.TaskType.LT_HASH_CHECK,
        M.TaskType.REQUEST_ALL_SYNCD_MISSING_KEYS,
        M.TaskType.REPORT_SYNCD_KEY_STATS,
        M.TaskType.SYNCD_SYNC_ALL_COLLECTIONS,
        M.TaskType.CLEAN_ORPHAN_ADD_ONS,
        M.TaskType.CLEAN_EXPIRED_UTM,
        M.TaskType.SEND_NON_MESSAGE_DATA_REQUEST,
        M.TaskType.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING,
        M.TaskType.DELETE_NEWSLETTER_PREVIEW_CHATS,
        M.TaskType.REPORT_DB_VERSIONS,
        M.TaskType.UPDATE_EXPIRED_TEXT_STATUS,
        M.TaskType.RESTART_RECENT_SYNC,
        M.TaskType.CLEANUP_REPORTING_TABLE,
        M.TaskType.CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE,
        M.TaskType.WAFFLE_SCHEDULED_TASKS,
        M.TaskType.CLEAR_GALAXY_FLOWS_CACHE,
        M.TaskType.CLEAR_FALCO_BUFFER,
        M.TaskType.SEND_WAM_FINGERPRINT,
        M.TaskType.INACTIVE_GROUP_LID_MIGRATION,
        M.TaskType.MIGRATE_META_AI_MESSAGES_TO_HISTORICAL_THREAD,
        M.TaskType.PURGE_QPL_STORAGE,
        M.TaskType.CLEAN_WEBTP_SHARED_SESSIONS,
        M.TaskType.CLEAN_EXPIRED_QUARANTINE_DATA,
        M.TaskType.OPUS_MIGRATION,
        M.TaskType.FETCH_QUICK_PROMOTIONS,
      ],
      F = [
        M.TaskType.CLEANUP_3PD_SIGNALS_TABLE,
        M.TaskType.CLEANUP_STALE_CAMPAIGNS,
        M.TaskType.REFRESH_AUDIENCE_EXPRESSIONS,
      ],
      O = [M.TaskType.LOG_DB_ROW_COUNTS, M.TaskType.MONITOR_DB_STORAGE];
    function B(t) {
      return t === o("WAWebTasksTaskType").TaskType.MONITOR_DB_STORAGE
        ? (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (r("gkx")("26258"))
                  return o("WATaskScheduler").DO_NOT_RESCHEDULE;
                var t = yield n("cr:4857") == null
                  ? void 0
                  : n("cr:4857").shouldMonitorDbStorageUsageJob();
                return t
                  ? o("WATimeUtils").HOUR_SECONDS
                  : o("WATaskScheduler").DO_NOT_RESCHEDULE;
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        : t === o("WAWebTasksTaskType").TaskType.CLEAN_TC_TOKENS
          ? (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  if (t)
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "CleanTcToken skip first run",
                        ])),
                    );
                  else
                    try {
                      (yield o("WAWebApiChat").pruneExpiredTcTokens(),
                        yield o("WAWebApiChat").pruneExpiredOrphanTcTokens());
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to delete the expired TcTokens with error: ",
                              "",
                            ])),
                          e,
                        )
                        .verbose();
                    }
                  return o("WATimeUtils").DAY_SECONDS;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          : t === o("WAWebTasksTaskType").TaskType.UPDATE_EXPIRED_TEXT_STATUS
            ? (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (e)
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Update expired text status skip first run",
                          ])),
                      );
                    else
                      try {
                        yield o(
                          "WAWebApiTextStatus",
                        ).updateExpiredTextStatusOfContact();
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to update expired text status: ",
                                "",
                              ])),
                            e,
                          )
                          .verbose();
                      }
                    return o("WATimeUtils").DAY_SECONDS;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            : t === o("WAWebTasksTaskType").TaskType.LOG_DAILY_STATS
              ? function () {
                  return o("WAWebLogDailyStatsJob")
                    .logDailyStatsJob()
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to log daily stats: ",
                              "",
                            ])),
                          e,
                        )
                        .verbose();
                    })
                    .then(function () {
                      return o("WATimeUtils").DAY_SECONDS;
                    });
                }
              : t === o("WAWebTasksTaskType").TaskType.LOG_DB_ROW_COUNTS
                ? (function () {
                    if (!r("gkx")("26258")) {
                      var e = 120,
                        t = 7200;
                      return function () {
                        return (
                          self.setTimeout(function () {
                            n("cr:4940") == null ||
                              n("cr:4940")
                                .logStorageTableRowCounts()
                                .catch(function (e) {
                                  o("WALogger")
                                    .ERROR(
                                      m ||
                                        (m =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "Failed to log table row counts from a task: ",
                                              "",
                                            ],
                                          )),
                                      e,
                                    )
                                    .verbose();
                                });
                          }, e * 1e3),
                          (N || (N = n("Promise"))).resolve(t)
                        );
                      };
                    }
                    return function () {
                      return (N || (N = n("Promise"))).resolve(
                        o("WATaskScheduler").DO_NOT_RESCHEDULE,
                      );
                    };
                  })()
                : t === o("WAWebTasksTaskType").TaskType.ROTATE_KEY
                  ? (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return (
                            e
                              ? o("WALogger").LOG(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "RotateKeyTask skip first run",
                                      ])),
                                )
                              : yield o(
                                  "WAWebPersistedJobManagerWorkerCompatible",
                                )
                                  .getJobManager()
                                  .waitUntilCompleted(
                                    o(
                                      "WAWebPersistedJobDefinitions",
                                    ).jobSerializers.rotateKey(),
                                  ),
                            27 * o("WATimeUtils").DAY_SECONDS
                          );
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  : t === o("WAWebTasksTaskType").TaskType.SYNC_AB_PROPS
                    ? (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            return (
                              e ||
                                (yield o(
                                  "WAWebAbPropsSyncJob",
                                ).syncABPropsTask()),
                              o("WAWebABPropsLocalStorage").getRefresh()
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    : t === o("WAWebTasksTaskType").TaskType.SYNC_CONTACTS
                      ? (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              if (!e) {
                                try {
                                  yield o(
                                    "WAWebNonAddressBookContactsJob",
                                  ).getNonAddressBookContactsAndMarkAllContactsDirty();
                                } catch (e) {
                                  o("WALogger")
                                    .ERROR(
                                      _ ||
                                        (_ =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "Failed to sync non-address book contacts with error: ",
                                              "",
                                            ],
                                          )),
                                      e,
                                    )
                                    .verbose();
                                }
                                try {
                                  yield o(
                                    "WAWebContactSyncBridge",
                                  ).doFullContactSync();
                                } catch (e) {
                                  o("WALogger")
                                    .ERROR(
                                      f ||
                                        (f =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "syncContacts: contact sync failed, error: ",
                                              "",
                                            ],
                                          )),
                                      e,
                                    )
                                    .verbose()
                                    .tags("non-sad", "contact-sync")
                                    .sendLogs(
                                      "syncContacts: contact sync failed",
                                    );
                                }
                              }
                              return o(
                                "WAWebSyncContactsJob",
                              ).getContactSyncRefreshSeconds();
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      : t ===
                          o("WAWebTasksTaskType").TaskType
                            .REPORT_SYNCD_ACTION_STAT
                        ? (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e) {
                              return (
                                e ||
                                  (yield o(
                                    "WAWebSyncdReportSyncdStatJob",
                                  ).reportSyncdStatsJob()),
                                o("WATimeUtils").DAY_SECONDS
                              );
                            });
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        : t === o("WAWebTasksTaskType").TaskType.LT_HASH_CHECK
                          ? (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                var t =
                                  o("WAWebABProps").getABPropConfigValue(
                                    "lthash_check_hours",
                                  );
                                return t === 0
                                  ? 24 * o("WATimeUtils").HOUR_SECONDS
                                  : (e ||
                                      (yield o(
                                        "WAWebSyncdAntiTampering",
                                      ).checkLtHash("abc")),
                                    t * o("WATimeUtils").HOUR_SECONDS);
                              });
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          : t ===
                              o("WAWebTasksTaskType").TaskType
                                .REQUEST_ALL_SYNCD_MISSING_KEYS
                            ? (function () {
                                var e = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* (e) {
                                  return (
                                    e ||
                                      (yield o(
                                        "WAWebSyncdRequestAllSyncdMissingKeysJob",
                                      ).requestAllSyncdMissingKeysJob()),
                                    o("WATimeUtils").HOUR_SECONDS * 6
                                  );
                                });
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            : t ===
                                o("WAWebTasksTaskType").TaskType
                                  .REPORT_SYNCD_KEY_STATS
                              ? (function () {
                                  var e = n(
                                    "asyncToGeneratorRuntime",
                                  ).asyncToGenerator(function* (e) {
                                    return (
                                      e ||
                                        (yield o(
                                          "WAWebSyncdReportKeyStatsJob",
                                        ).reportSyncdKeyStatsJob()),
                                      r("gkx")("26258")
                                        ? o("WATimeUtils").DAY_SECONDS * 3
                                        : o("WATimeUtils").DAY_SECONDS
                                    );
                                  });
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              : t ===
                                  o("WAWebTasksTaskType").TaskType
                                    .SYNCD_SYNC_ALL_COLLECTIONS
                                ? (function () {
                                    var e = n(
                                      "asyncToGeneratorRuntime",
                                    ).asyncToGenerator(function* (e) {
                                      var t = o(
                                        "WAWebABProps",
                                      ).getABPropConfigValue(
                                        "syncd_periodic_sync_days",
                                      );
                                      return t === 0
                                        ? (o("WALogger").LOG(
                                            g ||
                                              (g =
                                                babelHelpers.taggedTemplateLiteralLoose(
                                                  [
                                                    "syncd: syncdPeriodicSyncDays is 0, skipping sync",
                                                  ],
                                                )),
                                          ),
                                          o("WATimeUtils").DAY_SECONDS)
                                        : (e ||
                                            (yield o(
                                              "WAWebSyncdSyncAllCollectionsJob",
                                            ).syncdSyncAllCollectionsJob()),
                                          o("WATimeUtils").DAY_SECONDS * t);
                                    });
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                : t ===
                                    o("WAWebTasksTaskType").TaskType
                                      .CLEAN_ORPHAN_ADD_ONS
                                  ? (function () {
                                      var e = 30,
                                        t = 90;
                                      return n(
                                        "asyncToGeneratorRuntime",
                                      ).asyncToGenerator(function* () {
                                        try {
                                          yield o(
                                            "WAWebDBPurgeExpiredRecords",
                                          ).purgeExpiredOrphanRecords(e, t);
                                        } catch (e) {
                                          o("WALogger")
                                            .ERROR(
                                              h ||
                                                (h =
                                                  babelHelpers.taggedTemplateLiteralLoose(
                                                    [
                                                      "Failed to delete expired orphan add-on msgs: ",
                                                      "",
                                                    ],
                                                  )),
                                              e,
                                            )
                                            .verbose();
                                        }
                                        return o("WATimeUtils").DAY_SECONDS;
                                      });
                                    })()
                                  : t ===
                                      o("WAWebTasksTaskType").TaskType
                                        .CLEAN_PAST_PARTICIPANTS
                                    ? n(
                                        "asyncToGeneratorRuntime",
                                      ).asyncToGenerator(function* () {
                                        try {
                                          yield o(
                                            "WAWebApiParticipantStore",
                                          ).pruneExpiredPastParticipants();
                                        } catch (e) {
                                          o("WALogger")
                                            .ERROR(
                                              y ||
                                                (y =
                                                  babelHelpers.taggedTemplateLiteralLoose(
                                                    [
                                                      "Failed to delete the expired orphan reactions with error: ",
                                                      "",
                                                    ],
                                                  )),
                                              e,
                                            )
                                            .verbose();
                                        }
                                        return o("WATimeUtils").DAY_SECONDS;
                                      })
                                    : t ===
                                        o("WAWebTasksTaskType").TaskType
                                          .CLEAN_EXPIRED_UTM
                                      ? function () {
                                          return o(
                                            "WAWebBizGatingUtils",
                                          ).isUtmTrackingEnabled()
                                            ? o("WAWebCleanUtmJob")
                                                .cleanExpiredUtmJob()
                                                .catch(function (e) {
                                                  o("WALogger")
                                                    .ERROR(
                                                      C ||
                                                        (C =
                                                          babelHelpers.taggedTemplateLiteralLoose(
                                                            [
                                                              "Failed to clean expired UTM: ",
                                                              "",
                                                            ],
                                                          )),
                                                      e,
                                                    )
                                                    .verbose();
                                                })
                                                .then(function () {
                                                  return o("WATimeUtils")
                                                    .DAY_SECONDS;
                                                })
                                            : (N || (N = n("Promise"))).resolve(
                                                o("WATaskScheduler")
                                                  .DO_NOT_RESCHEDULE,
                                              );
                                        }
                                      : t ===
                                          o("WAWebTasksTaskType").TaskType
                                            .SEND_NON_MESSAGE_DATA_REQUEST
                                        ? n(
                                            "asyncToGeneratorRuntime",
                                          ).asyncToGenerator(function* () {
                                            return (
                                              yield o(
                                                "WAWebNonMessageDataRequestMediaHandlingUtils",
                                              ).retryNonMessageDataRequestJob(),
                                              o("WATimeUtils").HOUR_SECONDS * 23
                                            );
                                          })
                                        : t ===
                                            o("WAWebTasksTaskType").TaskType
                                              .DELETE_NEWSLETTER_PREVIEW_CHATS
                                          ? n(
                                              "asyncToGeneratorRuntime",
                                            ).asyncToGenerator(function* () {
                                              return (
                                                yield o(
                                                  "WAWebNewsletterCleanupTasks",
                                                ).deletePreviewNewsletters(),
                                                o("WATimeUtils").HOUR_SECONDS *
                                                  4
                                              );
                                            })
                                          : t ===
                                              o("WAWebTasksTaskType").TaskType
                                                .REPORT_DB_VERSIONS
                                            ? n(
                                                "asyncToGeneratorRuntime",
                                              ).asyncToGenerator(function* () {
                                                return (
                                                  yield o(
                                                    "WAWebReportDbVerionsJob",
                                                  ).reportDbVersionsJob(),
                                                  o("WATimeUtils").DAY_SECONDS *
                                                    3
                                                );
                                              })
                                            : t ===
                                                o("WAWebTasksTaskType").TaskType
                                                  .LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING
                                              ? n(
                                                  "asyncToGeneratorRuntime",
                                                ).asyncToGenerator(
                                                  function* () {
                                                    var e = o(
                                                      "WAWebUserPrefsMultiDevice",
                                                    ).getPairingTimestamp();
                                                    if (e != null) {
                                                      var t,
                                                        n =
                                                          (t = yield o(
                                                            "WAWebUserPrefsHistorySync",
                                                          ).getHistorySyncStatusAfterPairingLoggingCount()) !=
                                                          null
                                                            ? t
                                                            : 0;
                                                      return n >= 5
                                                        ? (o("WALogger").LOG(
                                                            b ||
                                                              (b =
                                                                babelHelpers.taggedTemplateLiteralLoose(
                                                                  [
                                                                    "[history sync] skip job: logged 4+ times",
                                                                  ],
                                                                )),
                                                          ),
                                                          o("WATaskScheduler")
                                                            .DO_NOT_RESCHEDULE)
                                                        : (yield o(
                                                            "WAWebLogHistorySyncStatusAfterPairingJob",
                                                          ).logHistorySyncStatusAfterPairingJob(
                                                            e,
                                                            n,
                                                          ),
                                                          n === 0
                                                            ? o("WATimeUtils")
                                                                .MINUTE_SECONDS *
                                                              5
                                                            : o("WATimeUtils")
                                                                .MINUTE_SECONDS *
                                                              10);
                                                    }
                                                    return 10;
                                                  },
                                                )
                                              : t ===
                                                  o("WAWebTasksTaskType")
                                                    .TaskType
                                                    .RESTART_RECENT_SYNC
                                                ? n(
                                                    "asyncToGeneratorRuntime",
                                                  ).asyncToGenerator(
                                                    function* () {
                                                      var e = o(
                                                        "WAWebUserPrefsMultiDevice",
                                                      ).getPairingTimestamp();
                                                      if (e != null) {
                                                        var t =
                                                          (o(
                                                            "WATimeUtils",
                                                          ).unixTime() -
                                                            e) /
                                                          60;
                                                        return (
                                                          t >= 5 &&
                                                            (yield o(
                                                              "WAWebRestartRecentSyncJob",
                                                            ).restartRecentSyncJob()),
                                                          o("WATimeUtils")
                                                            .MINUTE_SECONDS * 5
                                                        );
                                                      }
                                                      return 10;
                                                    },
                                                  )
                                                : t ===
                                                    o("WAWebTasksTaskType")
                                                      .TaskType
                                                      .CLEANUP_REPORTING_TABLE
                                                  ? n(
                                                      "asyncToGeneratorRuntime",
                                                    ).asyncToGenerator(
                                                      function* () {
                                                        try {
                                                          (yield o(
                                                            "WAWebDBReportingTokenUtils",
                                                          ).cleanupReportingTable(
                                                            o(
                                                              "WAWebMessagingGatingUtils",
                                                            ).getReportingTagCleanupDays(),
                                                          ),
                                                            yield o(
                                                              "WAWebDBReportingTokenUtils",
                                                            ).cleanupReportingTokenAndContent(
                                                              o(
                                                                "WAWebMessagingGatingUtils",
                                                              ).getReportingTokenCleanupDays(),
                                                            ));
                                                        } catch (e) {
                                                          o("WALogger")
                                                            .ERROR(
                                                              v ||
                                                                (v =
                                                                  babelHelpers.taggedTemplateLiteralLoose(
                                                                    [
                                                                      "Failed to cleanup reporting token table: ",
                                                                      "",
                                                                    ],
                                                                  )),
                                                              e,
                                                            )
                                                            .tags(
                                                              "messaging",
                                                              "wa-ice",
                                                              "report-token",
                                                            );
                                                        }
                                                        return o("WATimeUtils")
                                                          .DAY_SECONDS;
                                                      },
                                                    )
                                                  : t ===
                                                      o("WAWebTasksTaskType")
                                                        .TaskType
                                                        .CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE
                                                    ? n(
                                                        "asyncToGeneratorRuntime",
                                                      ).asyncToGenerator(
                                                        function* () {
                                                          try {
                                                            yield o(
                                                              "WAWebGroupHistoryReportingTokenDBUtils",
                                                            ).cleanupGroupHistoryReportingTokenTable(
                                                              30,
                                                              !0,
                                                            );
                                                          } catch (e) {
                                                            o("WALogger")
                                                              .ERROR(
                                                                S ||
                                                                  (S =
                                                                    babelHelpers.taggedTemplateLiteralLoose(
                                                                      [
                                                                        "Failed to cleanup GHS reporting token table: ",
                                                                        "",
                                                                      ],
                                                                    )),
                                                                e,
                                                              )
                                                              .tags(
                                                                "messaging",
                                                                "wa-ice",
                                                                "group-history",
                                                              );
                                                          }
                                                          return o(
                                                            "WATimeUtils",
                                                          ).DAY_SECONDS;
                                                        },
                                                      )
                                                    : t ===
                                                        o("WAWebTasksTaskType")
                                                          .TaskType
                                                          .CLEANUP_3PD_SIGNALS_TABLE
                                                      ? n(
                                                          "asyncToGeneratorRuntime",
                                                        ).asyncToGenerator(
                                                          function* () {
                                                            try {
                                                              o(
                                                                "WAWebABProps",
                                                              ).getABPropConfigValue(
                                                                "ctwa_download_3pd_signals",
                                                              ) &&
                                                                (yield o(
                                                                  "WAWebDownloads3PDSignalsDatabaseApi",
                                                                ).cleanup3PDSignalsTable());
                                                            } catch (e) {
                                                              o("WALogger")
                                                                .ERROR(
                                                                  R ||
                                                                    (R =
                                                                      babelHelpers.taggedTemplateLiteralLoose(
                                                                        [
                                                                          "Failed to cleanup 3PD Signals table: ",
                                                                          "",
                                                                        ],
                                                                      )),
                                                                  e,
                                                                )
                                                                .tags(
                                                                  "3pd-signals",
                                                                );
                                                            }
                                                            return o(
                                                              "WATimeUtils",
                                                            ).DAY_SECONDS;
                                                          },
                                                        )
                                                      : t ===
                                                          o(
                                                            "WAWebTasksTaskType",
                                                          ).TaskType
                                                            .FETCH_QUICK_PROMOTIONS
                                                        ? n(
                                                            "asyncToGeneratorRuntime",
                                                          ).asyncToGenerator(
                                                            function* () {
                                                              if (
                                                                o(
                                                                  "WAWebMobilePlatforms",
                                                                ).isSMB()
                                                              )
                                                                (o(
                                                                  "WALogger",
                                                                ).LOG(
                                                                  L ||
                                                                    (L =
                                                                      babelHelpers.taggedTemplateLiteralLoose(
                                                                        [
                                                                          "fetchQuickPromotions: fetching quick promotions",
                                                                        ],
                                                                      )),
                                                                ),
                                                                  yield o(
                                                                    "WAWebFetchQuickPromotions",
                                                                  ).fetchQuickPromotions());
                                                              else {
                                                                var e =
                                                                    yield w.load(),
                                                                  t =
                                                                    e.fetchConsumerQuickPromotions;
                                                                (o(
                                                                  "WALogger",
                                                                ).LOG(
                                                                  E ||
                                                                    (E =
                                                                      babelHelpers.taggedTemplateLiteralLoose(
                                                                        [
                                                                          "fetchConsumerQuickPromotions: fetching consumer quick promotions",
                                                                        ],
                                                                      )),
                                                                ),
                                                                  yield t());
                                                              }
                                                              return (
                                                                o(
                                                                  "WAWebQuickPromotionGating",
                                                                ).qpGraphQLFetchIntervalMinutes() *
                                                                o("WATimeUtils")
                                                                  .MINUTE_SECONDS
                                                              );
                                                            },
                                                          )
                                                        : t ===
                                                            o(
                                                              "WAWebTasksTaskType",
                                                            ).TaskType
                                                              .WAFFLE_SCHEDULED_TASKS
                                                          ? n(
                                                              "asyncToGeneratorRuntime",
                                                            ).asyncToGenerator(
                                                              function* () {
                                                                return (
                                                                  o(
                                                                    "WAWebAccountLinkingGatingUtils",
                                                                  ).accountLinkingEnabled() &&
                                                                    (yield o(
                                                                      "WAWebAccountLinkingScheduledJobs",
                                                                    ).scheduledWaffleJobs()),
                                                                  o(
                                                                    "WATimeUtils",
                                                                  ).DAY_SECONDS
                                                                );
                                                              },
                                                            )
                                                          : t ===
                                                              o(
                                                                "WAWebTasksTaskType",
                                                              ).TaskType
                                                                .CLEAR_GALAXY_FLOWS_CACHE
                                                            ? n(
                                                                "asyncToGeneratorRuntime",
                                                              ).asyncToGenerator(
                                                                function* () {
                                                                  return (
                                                                    yield o(
                                                                      "WAWebGalaxyFlowsUtils",
                                                                    ).clearGalaxyFlowsCache(),
                                                                    7 *
                                                                      o(
                                                                        "WATimeUtils",
                                                                      )
                                                                        .DAY_SECONDS
                                                                  );
                                                                },
                                                              )
                                                            : t ===
                                                                o(
                                                                  "WAWebTasksTaskType",
                                                                ).TaskType
                                                                  .CLEAR_FALCO_BUFFER
                                                              ? (function () {
                                                                  var e = n(
                                                                    "asyncToGeneratorRuntime",
                                                                  ).asyncToGenerator(
                                                                    function* (
                                                                      e,
                                                                    ) {
                                                                      return (
                                                                        e ||
                                                                          (yield o(
                                                                            "WAWebFalcoStorageClearJob",
                                                                          ).clearFalcoBufferJob()),
                                                                        o(
                                                                          "WATimeUtils",
                                                                        )
                                                                          .DAY_SECONDS
                                                                      );
                                                                    },
                                                                  );
                                                                  return function (
                                                                    t,
                                                                  ) {
                                                                    return e.apply(
                                                                      this,
                                                                      arguments,
                                                                    );
                                                                  };
                                                                })()
                                                              : t ===
                                                                  o(
                                                                    "WAWebTasksTaskType",
                                                                  ).TaskType
                                                                    .SEND_WAM_FINGERPRINT
                                                                ? n(
                                                                    "asyncToGeneratorRuntime",
                                                                  ).asyncToGenerator(
                                                                    function* () {
                                                                      return (
                                                                        yield o(
                                                                          "WAWebFingerprintJob",
                                                                        ).sendWamFingerprintJob(),
                                                                        o(
                                                                          "WATimeUtils",
                                                                        )
                                                                          .DAY_SECONDS *
                                                                          2
                                                                      );
                                                                    },
                                                                  )
                                                                : t ===
                                                                    o(
                                                                      "WAWebTasksTaskType",
                                                                    ).TaskType
                                                                      .INACTIVE_GROUP_LID_MIGRATION
                                                                  ? n(
                                                                      "asyncToGeneratorRuntime",
                                                                    ).asyncToGenerator(
                                                                      function* () {
                                                                        var e =
                                                                          o(
                                                                            "WAWebUserPrefsMultiDevice",
                                                                          ).getPairingTimestamp();
                                                                        if (
                                                                          e !=
                                                                          null
                                                                        ) {
                                                                          var t =
                                                                              o(
                                                                                "WATimeUtils",
                                                                              ).unixTime() -
                                                                              e,
                                                                            n =
                                                                              o(
                                                                                "WATimeUtils",
                                                                              ).MINUTE_SECONDS;
                                                                          if (
                                                                            t <
                                                                            n
                                                                          )
                                                                            return (
                                                                              n -
                                                                              t
                                                                            );
                                                                          try {
                                                                            yield o(
                                                                              "WAWebInactiveGroupLidMigrationJob",
                                                                            ).migrateInactiveGroupsToLid();
                                                                          } catch (e) {
                                                                            o(
                                                                              "WALogger",
                                                                            )
                                                                              .ERROR(
                                                                                k ||
                                                                                  (k =
                                                                                    babelHelpers.taggedTemplateLiteralLoose(
                                                                                      [
                                                                                        "Failed to run LID inactive group migration: ",
                                                                                        "",
                                                                                      ],
                                                                                    )),
                                                                                e,
                                                                              )
                                                                              .verbose();
                                                                          }
                                                                          return o(
                                                                            "WATimeUtils",
                                                                          )
                                                                            .DAY_SECONDS;
                                                                        }
                                                                        return 30;
                                                                      },
                                                                    )
                                                                  : t ===
                                                                      o(
                                                                        "WAWebTasksTaskType",
                                                                      ).TaskType
                                                                        .CANONICAL_ENT_TOKEN_REFRESH
                                                                    ? n(
                                                                        "asyncToGeneratorRuntime",
                                                                      ).asyncToGenerator(
                                                                        function* () {
                                                                          if (
                                                                            (yield o(
                                                                              "WAWebABPropsCache",
                                                                            ).waitForABPropConfigsReady(),
                                                                            !o(
                                                                              "WAWebCanonicalGating",
                                                                            ).isCanonicalRecoveryEnabled())
                                                                          )
                                                                            return o(
                                                                              "WATimeUtils",
                                                                            )
                                                                              .DAY_SECONDS;
                                                                          var e =
                                                                            yield o(
                                                                              "WAWebCanonicalTokenRefreshJob",
                                                                            ).maybeRefreshCanonicalTokenJob();
                                                                          return e;
                                                                        },
                                                                      )
                                                                    : t ===
                                                                        o(
                                                                          "WAWebTasksTaskType",
                                                                        )
                                                                          .TaskType
                                                                          .MIGRATE_META_AI_MESSAGES_TO_HISTORICAL_THREAD
                                                                      ? n(
                                                                          "asyncToGeneratorRuntime",
                                                                        ).asyncToGenerator(
                                                                          function* () {
                                                                            return o(
                                                                              "WAWebUserPrefsBot",
                                                                            ).isMetaAIThreadMigrationComplete()
                                                                              ? o(
                                                                                  "WATaskScheduler",
                                                                                )
                                                                                  .DO_NOT_RESCHEDULE
                                                                              : (o(
                                                                                  "WAWebBotGating",
                                                                                ).isAiChatThreadsHistoricalMessageMigrationEnabled() &&
                                                                                  (yield o(
                                                                                    "WAWebMetaAiHistoricalThreadMigrationJob",
                                                                                  ).migrateMetaAiMessagesToHistoricalThread()),
                                                                                o(
                                                                                  "WATimeUtils",
                                                                                )
                                                                                  .HOUR_SECONDS);
                                                                          },
                                                                        )
                                                                      : t ===
                                                                          o(
                                                                            "WAWebTasksTaskType",
                                                                          )
                                                                            .TaskType
                                                                            .CLEAN_WEBTP_SHARED_SESSIONS
                                                                        ? n(
                                                                            "asyncToGeneratorRuntime",
                                                                          ).asyncToGenerator(
                                                                            function* () {
                                                                              if (
                                                                                (yield o(
                                                                                  "WAWebABPropsCache",
                                                                                ).waitForABPropConfigsReady(),
                                                                                !r(
                                                                                  "justknobx",
                                                                                )._(
                                                                                  "2214",
                                                                                ))
                                                                              )
                                                                                return o(
                                                                                  "WATimeUtils",
                                                                                )
                                                                                  .DAY_SECONDS;
                                                                              try {
                                                                                yield o(
                                                                                  "WAWebWebTPSharedSessionUtils",
                                                                                ).removeExpiredWebTPSharedSessions();
                                                                              } catch (e) {
                                                                                o(
                                                                                  "WALogger",
                                                                                )
                                                                                  .ERROR(
                                                                                    I ||
                                                                                      (I =
                                                                                        babelHelpers.taggedTemplateLiteralLoose(
                                                                                          [
                                                                                            "Failed to clean expired WebTP shared sessions: ",
                                                                                            "",
                                                                                          ],
                                                                                        )),
                                                                                    e,
                                                                                  )
                                                                                  .verbose();
                                                                              }
                                                                              return o(
                                                                                "WATimeUtils",
                                                                              )
                                                                                .DAY_SECONDS;
                                                                            },
                                                                          )
                                                                        : t ===
                                                                            o(
                                                                              "WAWebTasksTaskType",
                                                                            )
                                                                              .TaskType
                                                                              .PURGE_QPL_STORAGE
                                                                          ? n(
                                                                              "asyncToGeneratorRuntime",
                                                                            ).asyncToGenerator(
                                                                              function* () {
                                                                                try {
                                                                                  yield o(
                                                                                    "WAWebQplStorage",
                                                                                  ).destroy();
                                                                                } catch (e) {
                                                                                  o(
                                                                                    "WALogger",
                                                                                  )
                                                                                    .ERROR(
                                                                                      T ||
                                                                                        (T =
                                                                                          babelHelpers.taggedTemplateLiteralLoose(
                                                                                            [
                                                                                              "Failed to purge deprecated qpl-storage: ",
                                                                                              "",
                                                                                            ],
                                                                                          )),
                                                                                      e,
                                                                                    )
                                                                                    .verbose();
                                                                                }
                                                                                return o(
                                                                                  "WATaskScheduler",
                                                                                )
                                                                                  .DO_NOT_RESCHEDULE;
                                                                              },
                                                                            )
                                                                          : t ===
                                                                              o(
                                                                                "WAWebTasksTaskType",
                                                                              )
                                                                                .TaskType
                                                                                .CLEANUP_STALE_CAMPAIGNS
                                                                            ? n(
                                                                                "asyncToGeneratorRuntime",
                                                                              ).asyncToGenerator(
                                                                                function* () {
                                                                                  try {
                                                                                    yield o(
                                                                                      "WAWebBizBroadcastCampaignCleanup",
                                                                                    ).cleanupStaleCampaigns();
                                                                                  } catch (e) {
                                                                                    o(
                                                                                      "WALogger",
                                                                                    )
                                                                                      .ERROR(
                                                                                        D ||
                                                                                          (D =
                                                                                            babelHelpers.taggedTemplateLiteralLoose(
                                                                                              [
                                                                                                "Failed to cleanup stale campaigns: ",
                                                                                                "",
                                                                                              ],
                                                                                            )),
                                                                                        e,
                                                                                      )
                                                                                      .tags(
                                                                                        "wa-smb",
                                                                                        "business-broadcast",
                                                                                      );
                                                                                  }
                                                                                  return (
                                                                                    o(
                                                                                      "WATimeUtils",
                                                                                    )
                                                                                      .DAY_SECONDS *
                                                                                    5
                                                                                  );
                                                                                },
                                                                              )
                                                                            : t ===
                                                                                o(
                                                                                  "WAWebTasksTaskType",
                                                                                )
                                                                                  .TaskType
                                                                                  .CLEAN_EXPIRED_QUARANTINE_DATA
                                                                              ? n(
                                                                                  "asyncToGeneratorRuntime",
                                                                                ).asyncToGenerator(
                                                                                  function* () {
                                                                                    if (
                                                                                      o(
                                                                                        "WAWebABProps",
                                                                                      ).getABPropConfigValue(
                                                                                        "defense_mode_quarantine",
                                                                                      )
                                                                                    )
                                                                                      try {
                                                                                        yield o(
                                                                                          "WAWebQuarantineDataCleanupJob",
                                                                                        ).cleanExpiredQuarantineDataJob();
                                                                                      } catch (e) {
                                                                                        o(
                                                                                          "WALogger",
                                                                                        )
                                                                                          .ERROR(
                                                                                            x ||
                                                                                              (x =
                                                                                                babelHelpers.taggedTemplateLiteralLoose(
                                                                                                  [
                                                                                                    "Failed to cleanup expired quarantine data: ",
                                                                                                    "",
                                                                                                  ],
                                                                                                )),
                                                                                            e,
                                                                                          )
                                                                                          .verbose();
                                                                                      }
                                                                                    return o(
                                                                                      "WATimeUtils",
                                                                                    )
                                                                                      .DAY_SECONDS;
                                                                                  },
                                                                                )
                                                                              : t ===
                                                                                  o(
                                                                                    "WAWebTasksTaskType",
                                                                                  )
                                                                                    .TaskType
                                                                                    .OPUS_MIGRATION
                                                                                ? n(
                                                                                    "asyncToGeneratorRuntime",
                                                                                  ).asyncToGenerator(
                                                                                    function* () {
                                                                                      yield o(
                                                                                        "WAWebABPropsCache",
                                                                                      ).waitForABPropConfigsReady();
                                                                                      var e =
                                                                                        o(
                                                                                          "WAWebABProps",
                                                                                        ).getABPropConfigValue(
                                                                                          "opus_enabled",
                                                                                        );
                                                                                      if (
                                                                                        !e
                                                                                      )
                                                                                        return o(
                                                                                          "WATimeUtils",
                                                                                        )
                                                                                          .DAY_SECONDS;
                                                                                      var t =
                                                                                        o(
                                                                                          "WAWebABProps",
                                                                                        ).getABPropConfigValue(
                                                                                          "opus_t",
                                                                                        );
                                                                                      if (
                                                                                        t ==
                                                                                        null
                                                                                      )
                                                                                        return o(
                                                                                          "WATimeUtils",
                                                                                        )
                                                                                          .DAY_SECONDS;
                                                                                      var n =
                                                                                        o(
                                                                                          "WATimeUtils",
                                                                                        ).unixTime();
                                                                                      return n <
                                                                                        t
                                                                                        ? t -
                                                                                            n
                                                                                        : (yield o(
                                                                                            "WAWebOpusMigration",
                                                                                          ).runOpusMigration(),
                                                                                          o(
                                                                                            "WATaskScheduler",
                                                                                          )
                                                                                            .DO_NOT_RESCHEDULE);
                                                                                    },
                                                                                  )
                                                                                : t ===
                                                                                    o(
                                                                                      "WAWebTasksTaskType",
                                                                                    )
                                                                                      .TaskType
                                                                                      .REFRESH_AUDIENCE_EXPRESSIONS
                                                                                  ? (function () {
                                                                                      var e =
                                                                                        n(
                                                                                          "asyncToGeneratorRuntime",
                                                                                        ).asyncToGenerator(
                                                                                          function* (
                                                                                            e,
                                                                                          ) {
                                                                                            if (
                                                                                              e
                                                                                            )
                                                                                              return o(
                                                                                                "WATimeUtils",
                                                                                              )
                                                                                                .HOUR_SECONDS;
                                                                                            try {
                                                                                              yield o(
                                                                                                "WAWebBizBroadcastAudienceRefreshJob",
                                                                                              ).refreshTimeBasedAudiences();
                                                                                            } catch (e) {
                                                                                              o(
                                                                                                "WALogger",
                                                                                              )
                                                                                                .ERROR(
                                                                                                  $ ||
                                                                                                    ($ =
                                                                                                      babelHelpers.taggedTemplateLiteralLoose(
                                                                                                        [
                                                                                                          "Failed to refresh audience expressions: ",
                                                                                                          "",
                                                                                                        ],
                                                                                                      )),
                                                                                                  e,
                                                                                                )
                                                                                                .tags(
                                                                                                  "wa-smb",
                                                                                                  "business-broadcast",
                                                                                                  "audience-refresh",
                                                                                                );
                                                                                            }
                                                                                            return (
                                                                                              o(
                                                                                                "WATimeUtils",
                                                                                              )
                                                                                                .HOUR_SECONDS *
                                                                                              6
                                                                                            );
                                                                                          },
                                                                                        );
                                                                                      return function (
                                                                                        t,
                                                                                      ) {
                                                                                        return e.apply(
                                                                                          this,
                                                                                          arguments,
                                                                                        );
                                                                                      };
                                                                                    })()
                                                                                  : (function () {
                                                                                      throw Error(
                                                                                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                          t,
                                                                                      );
                                                                                    })();
    }
    function W() {
      return {
        scheduledTimeResolver: {
          get: function (t) {
            return o("WAWebApiTasksScheduledTime").getTaskScheduledTime(
              String(t),
            );
          },
          set: function (t, n) {
            return o("WAWebApiTasksScheduledTime").updateTaskScheduledTime(
              String(t),
              n,
            );
          },
        },
      };
    }
    function q(e) {
      var t = B(e);
      t != null &&
        (o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "maybeRegisterTask: registering task ",
              "",
            ])),
          e,
        ),
        o("WATaskScheduler").registerTask(e, t));
    }
    function U() {
      (o("WATaskScheduler").startScheduler(W()),
        A.forEach(q),
        o("WAWebMobilePlatforms").isSMB() && F.forEach(q),
        r("gkx")("26258") || O.forEach(q));
    }
    l.registerTasks = U;
  },
  98,
);
