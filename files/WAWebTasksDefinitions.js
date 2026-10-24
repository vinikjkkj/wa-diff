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
    "WAWebAccountLinkingScheduledJobs",
    "WAWebApiChat",
    "WAWebApiParticipantStore",
    "WAWebApiTasksScheduledTime",
    "WAWebApiTextStatus",
    "WAWebBizBroadcastCampaignCleanup",
    "WAWebBotGating",
    "WAWebCTWAGatingUtils",
    "WAWebCanonicalGating",
    "WAWebCleanUtmJob",
    "WAWebClearFalcoBufferJob",
    "WAWebContactSyncBridge",
    "WAWebDBPurgeExpiredRecords",
    "WAWebDBReportingTokenUtils",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebFetchQuickPromotions",
    "WAWebFingerprintJob",
    "WAWebGalaxyFlowsUtils",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebInactiveGroupLidMigrationJob",
    "WAWebLogDailyStatsJob",
    "WAWebLogHistorySyncStatusAfterPairingJob",
    "WAWebMetaAiBotSessionCleanupJob",
    "WAWebMetaAiHistoricalThreadMigrationJob",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCleanupTasks",
    "WAWebNonAddressBookContactsJob",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebOpusMigration",
    "WAWebOrgBackgroundSyncJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPollPendingUpdatesCleanup",
    "WAWebQplStorage",
    "WAWebQuarantineDataCleanupJob",
    "WAWebQueryMissingParentGroupJob",
    "WAWebQuickPromotionGating",
    "WAWebRemoveExpiredWebTPSharedSessions",
    "WAWebReportDbVerionsJob",
    "WAWebReportingTokenConstants",
    "WAWebRestartRecentSyncJob",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebServicedJobs",
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
    "asyncToGeneratorRuntime",
    "cr:4857",
    "cr:4940",
    "cr:878",
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
      w,
      A,
      F,
      O,
      B = r("requireDeferred")("WAWebBizBroadcastAudienceRefreshJob").__setRef(
        "WAWebTasksDefinitions",
      ),
      W = r("requireDeferred")("WAWebCanonicalCredentialRecoveryJob").__setRef(
        "WAWebTasksDefinitions",
      ),
      q = r("requireDeferred")("WAWebConsumerFetchQuickPromotions").__setRef(
        "WAWebTasksDefinitions",
      ),
      U = [
        (O = o("WAWebTasksTaskType")).TaskType.AEA_CONSUMER_BACKFILL,
        O.TaskType.CANONICAL_ENT_TOKEN_REFRESH,
        O.TaskType.CLEAN_TC_TOKENS,
        O.TaskType.LOG_DAILY_STATS,
        O.TaskType.ROTATE_KEY,
        O.TaskType.SYNC_AB_PROPS,
        O.TaskType.SYNC_CONTACTS,
        O.TaskType.REPORT_SYNCD_ACTION_STAT,
        O.TaskType.LT_HASH_CHECK,
        O.TaskType.REQUEST_ALL_SYNCD_MISSING_KEYS,
        O.TaskType.REPORT_SYNCD_KEY_STATS,
        O.TaskType.SYNCD_SYNC_ALL_COLLECTIONS,
        O.TaskType.CLEAN_ORPHAN_ADD_ONS,
        O.TaskType.CLEAN_POLL_PENDING_UPDATES,
        O.TaskType.CLEAN_EXPIRED_UTM,
        O.TaskType.SEND_NON_MESSAGE_DATA_REQUEST,
        O.TaskType.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING,
        O.TaskType.DELETE_NEWSLETTER_PREVIEW_CHATS,
        O.TaskType.REPORT_DB_VERSIONS,
        O.TaskType.UPDATE_EXPIRED_TEXT_STATUS,
        O.TaskType.RESTART_RECENT_SYNC,
        O.TaskType.CLEANUP_REPORTING_TABLE,
        O.TaskType.CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE,
        O.TaskType.CLEANUP_SCHEDULED_MSG_REVEAL_KEYS,
        O.TaskType.WAFFLE_SCHEDULED_TASKS,
        O.TaskType.CLEAR_GALAXY_FLOWS_CACHE,
        O.TaskType.CLEAR_FALCO_BUFFER,
        O.TaskType.SEND_WAM_FINGERPRINT,
        O.TaskType.INACTIVE_GROUP_LID_MIGRATION,
        O.TaskType.QUERY_MISSING_PARENT_GROUPS,
        O.TaskType.MIGRATE_META_AI_MESSAGES_TO_HISTORICAL_THREAD,
        O.TaskType.CLEAN_META_AI_BOT_SESSION,
        O.TaskType.PURGE_QPL_STORAGE,
        O.TaskType.CLEAN_WEBTP_SHARED_SESSIONS,
        O.TaskType.CLEAN_EXPIRED_QUARANTINE_DATA,
        O.TaskType.OPUS_MIGRATION,
        O.TaskType.FETCH_QUICK_PROMOTIONS,
        O.TaskType.SYNC_ORGS,
      ],
      V = [
        O.TaskType.CLEANUP_3PD_SIGNALS_TABLE,
        O.TaskType.CLEANUP_STALE_CAMPAIGNS,
        O.TaskType.REFRESH_AUDIENCE_EXPRESSIONS,
      ],
      H = [O.TaskType.LOG_DB_ROW_COUNTS, O.TaskType.MONITOR_DB_STORAGE];
    function G(t) {
      return t === o("WAWebTasksTaskType").TaskType.AEA_CONSUMER_BACKFILL
        ? n("cr:878") == null
          ? void 0
          : n("cr:878").runAeaConsumerBackfillTask
        : t === o("WAWebTasksTaskType").TaskType.MONITOR_DB_STORAGE
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
                            (F || (F = n("Promise"))).resolve(t)
                          );
                        };
                      }
                      return function () {
                        return (F || (F = n("Promise"))).resolve(
                          o("WATaskScheduler").DO_NOT_RESCHEDULE,
                        );
                      };
                    })()
                  : t === o("WAWebTasksTaskType").TaskType.ROTATE_KEY
                    ? (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (e)
                              o("WALogger").LOG(
                                p ||
                                  (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "RotateKeyTask skip first run",
                                  ])),
                              );
                            else
                              try {
                                yield o(
                                  "WAWebServicedJobs",
                                ).runServicedJobToCompletion(
                                  o(
                                    "WAWebPersistedJobDefinitions",
                                  ).jobSerializers.rotateKey(),
                                );
                              } catch (e) {
                                return (
                                  o("WALogger")
                                    .ERROR(
                                      _ ||
                                        (_ =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            ["RotateKeyTask failed: ", ""],
                                          )),
                                      e,
                                    )
                                    .sendLogs("rotate-key-task-failed"),
                                  o("WATimeUtils").HOUR_SECONDS
                                );
                              }
                            return 27 * o("WATimeUtils").DAY_SECONDS;
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
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e) {
                              if (!e) {
                                try {
                                  yield o(
                                    "WAWebNonAddressBookContactsJob",
                                  ).getNonAddressBookContactsAndMarkAllContactsDirty();
                                } catch (e) {
                                  o("WALogger")
                                    .ERROR(
                                      f ||
                                        (f =
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
                                      g ||
                                        (g =
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
                            });
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
                                              h ||
                                                (h =
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
                                                y ||
                                                  (y =
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
                                          .CLEAN_POLL_PENDING_UPDATES
                                      ? n(
                                          "asyncToGeneratorRuntime",
                                        ).asyncToGenerator(function* () {
                                          return (
                                            yield o(
                                              "WAWebPollPendingUpdatesCleanup",
                                            ).cleanExpiredPollPendingUpdates(),
                                            o("WATimeUtils").DAY_SECONDS
                                          );
                                        })
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
                                                  C ||
                                                    (C =
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
                                                "WAWebCTWAGatingUtils",
                                              ).isUtmTrackingEnabled()
                                                ? o("WAWebCleanUtmJob")
                                                    .cleanExpiredUtmJob()
                                                    .catch(function (e) {
                                                      o("WALogger")
                                                        .ERROR(
                                                          b ||
                                                            (b =
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
                                                : (
                                                    F || (F = n("Promise"))
                                                  ).resolve(
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
                                                  o("WATimeUtils")
                                                    .HOUR_SECONDS * 23
                                                );
                                              })
                                            : t ===
                                                o("WAWebTasksTaskType").TaskType
                                                  .DELETE_NEWSLETTER_PREVIEW_CHATS
                                              ? n(
                                                  "asyncToGeneratorRuntime",
                                                ).asyncToGenerator(
                                                  function* () {
                                                    return (
                                                      yield o(
                                                        "WAWebNewsletterCleanupTasks",
                                                      ).deletePreviewNewsletters(),
                                                      o("WATimeUtils")
                                                        .HOUR_SECONDS * 4
                                                    );
                                                  },
                                                )
                                              : t ===
                                                  o("WAWebTasksTaskType")
                                                    .TaskType.REPORT_DB_VERSIONS
                                                ? n(
                                                    "asyncToGeneratorRuntime",
                                                  ).asyncToGenerator(
                                                    function* () {
                                                      return (
                                                        yield o(
                                                          "WAWebReportDbVerionsJob",
                                                        ).reportDbVersionsJob(),
                                                        o("WATimeUtils")
                                                          .DAY_SECONDS * 3
                                                      );
                                                    },
                                                  )
                                                : t ===
                                                    o("WAWebTasksTaskType")
                                                      .TaskType
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
                                                            ? (o(
                                                                "WALogger",
                                                              ).LOG(
                                                                v ||
                                                                  (v =
                                                                    babelHelpers.taggedTemplateLiteralLoose(
                                                                      [
                                                                        "[history sync] skip job: logged 4+ times",
                                                                      ],
                                                                    )),
                                                              ),
                                                              o(
                                                                "WATaskScheduler",
                                                              )
                                                                .DO_NOT_RESCHEDULE)
                                                            : (yield o(
                                                                "WAWebLogHistorySyncStatusAfterPairingJob",
                                                              ).logHistorySyncStatusAfterPairingJob(
                                                                e,
                                                                n,
                                                              ),
                                                              n === 0
                                                                ? o(
                                                                    "WATimeUtils",
                                                                  )
                                                                    .MINUTE_SECONDS *
                                                                  5
                                                                : o(
                                                                    "WATimeUtils",
                                                                  )
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
                                                                .MINUTE_SECONDS *
                                                                5
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
                                                              var e;
                                                              (yield o(
                                                                "WAWebDBReportingTokenUtils",
                                                              ).cleanupReportingTable(
                                                                (e = o(
                                                                  "WAWebABProps",
                                                                ).getABPropConfigValue(
                                                                  "rt_clean_reporting_tag",
                                                                )) != null
                                                                  ? e
                                                                  : o(
                                                                      "WAWebReportingTokenConstants",
                                                                    )
                                                                      .DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS,
                                                              ),
                                                                yield o(
                                                                  "WAWebDBReportingTokenUtils",
                                                                ).cleanupReportingTokenAndContent(
                                                                  o(
                                                                    "WAWebABProps",
                                                                  ).getABPropConfigValue(
                                                                    "rt_clean_reporting_token",
                                                                  ),
                                                                ));
                                                            } catch (e) {
                                                              o("WALogger")
                                                                .ERROR(
                                                                  S ||
                                                                    (S =
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
                                                            return o(
                                                              "WATimeUtils",
                                                            ).DAY_SECONDS;
                                                          },
                                                        )
                                                      : t ===
                                                          o(
                                                            "WAWebTasksTaskType",
                                                          ).TaskType
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
                                                                    R ||
                                                                      (R =
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
                                                            o(
                                                              "WAWebTasksTaskType",
                                                            ).TaskType
                                                              .CLEANUP_SCHEDULED_MSG_REVEAL_KEYS
                                                          ? n(
                                                              "asyncToGeneratorRuntime",
                                                            ).asyncToGenerator(
                                                              function* () {
                                                                if (
                                                                  (yield o(
                                                                    "WAWebABPropsCache",
                                                                  ).waitForABPropConfigsReady(),
                                                                  !o(
                                                                    "WAWebScheduledMessagesGatingUtils",
                                                                  ).isScheduledMessagesReceiverEnabled())
                                                                )
                                                                  return o(
                                                                    "WATimeUtils",
                                                                  ).DAY_SECONDS;
                                                                try {
                                                                  (yield o(
                                                                    "WAWebScheduledMsgRevealKeyStore",
                                                                  ).cleanupExpiredRevealKeys(),
                                                                    yield o(
                                                                      "WAWebScheduledMsgOrphanRevealKeyStore",
                                                                    ).cleanupExpiredOrphanRevealKeys());
                                                                } catch (e) {
                                                                  o("WALogger")
                                                                    .ERROR(
                                                                      L ||
                                                                        (L =
                                                                          babelHelpers.taggedTemplateLiteralLoose(
                                                                            [
                                                                              "Failed to cleanup expired scheduled-message reveal keys: ",
                                                                              "",
                                                                            ],
                                                                          )),
                                                                      e,
                                                                    )
                                                                    .verbose();
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
                                                                    o(
                                                                      "WALogger",
                                                                    )
                                                                      .ERROR(
                                                                        E ||
                                                                          (E =
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
                                                                        k ||
                                                                          (k =
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
                                                                          yield q.load(),
                                                                        t =
                                                                          e.fetchConsumerQuickPromotions;
                                                                      (o(
                                                                        "WALogger",
                                                                      ).LOG(
                                                                        I ||
                                                                          (I =
                                                                            babelHelpers.taggedTemplateLiteralLoose(
                                                                              [
                                                                                "fetchConsumerQuickPromotions: fetching",
                                                                              ],
                                                                            )),
                                                                      ),
                                                                        yield t());
                                                                    }
                                                                    return (
                                                                      o(
                                                                        "WAWebQuickPromotionGating",
                                                                      ).qpGraphQLFetchIntervalMinutes() *
                                                                      o(
                                                                        "WATimeUtils",
                                                                      )
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
                                                                        yield o(
                                                                          "WAWebAccountLinkingScheduledJobs",
                                                                        ).scheduledWaffleJobs(),
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
                                                                        var e =
                                                                          n(
                                                                            "asyncToGeneratorRuntime",
                                                                          ).asyncToGenerator(
                                                                            function* (
                                                                              e,
                                                                            ) {
                                                                              return (
                                                                                e ||
                                                                                  (yield o(
                                                                                    "WAWebClearFalcoBufferJob",
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
                                                                        )
                                                                          .TaskType
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
                                                                          )
                                                                            .TaskType
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
                                                                                      T ||
                                                                                        (T =
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
                                                                            )
                                                                              .TaskType
                                                                              .QUERY_MISSING_PARENT_GROUPS
                                                                          ? n(
                                                                              "asyncToGeneratorRuntime",
                                                                            ).asyncToGenerator(
                                                                              function* () {
                                                                                try {
                                                                                  yield o(
                                                                                    "WAWebQueryMissingParentGroupJob",
                                                                                  ).queryMissingParentGroups();
                                                                                } catch (e) {
                                                                                  o(
                                                                                    "WALogger",
                                                                                  )
                                                                                    .ERROR(
                                                                                      D ||
                                                                                        (D =
                                                                                          babelHelpers.taggedTemplateLiteralLoose(
                                                                                            [
                                                                                              "Failed to query missing parent groups: ",
                                                                                              "",
                                                                                            ],
                                                                                          )),
                                                                                      e,
                                                                                    )
                                                                                    .verbose()
                                                                                    .sendLogs(
                                                                                      "query-missing-parent-groups-failed",
                                                                                    );
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
                                                                                .CANONICAL_ENT_TOKEN_REFRESH
                                                                            ? n(
                                                                                "asyncToGeneratorRuntime",
                                                                              ).asyncToGenerator(
                                                                                function* () {
                                                                                  if (
                                                                                    !o(
                                                                                      "WAWebCanonicalGating",
                                                                                    ).isCanonicalRecoveryEnabled()
                                                                                  )
                                                                                    return o(
                                                                                      "WATimeUtils",
                                                                                    )
                                                                                      .DAY_SECONDS;
                                                                                  var e =
                                                                                      yield W.load(),
                                                                                    t =
                                                                                      e.maybeRecoverCanonicalCredentials,
                                                                                    n =
                                                                                      yield t();
                                                                                  return n;
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
                                                                                    .CLEAN_META_AI_BOT_SESSION
                                                                                ? n(
                                                                                    "asyncToGeneratorRuntime",
                                                                                  ).asyncToGenerator(
                                                                                    function* () {
                                                                                      return (
                                                                                        yield o(
                                                                                          "WAWebMetaAiBotSessionCleanupJob",
                                                                                        ).maybeCleanupMetaAiBotSession(),
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
                                                                                            "WAWebRemoveExpiredWebTPSharedSessions",
                                                                                          ).removeExpiredWebTPSharedSessions();
                                                                                        } catch (e) {
                                                                                          o(
                                                                                            "WALogger",
                                                                                          )
                                                                                            .ERROR(
                                                                                              x ||
                                                                                                (x =
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
                                                                                                $ ||
                                                                                                  ($ =
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
                                                                                                  P ||
                                                                                                    (P =
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
                                                                                              try {
                                                                                                yield o(
                                                                                                  "WAWebQuarantineDataCleanupJob",
                                                                                                ).cleanExpiredQuarantineDataJob();
                                                                                              } catch (e) {
                                                                                                o(
                                                                                                  "WALogger",
                                                                                                )
                                                                                                  .ERROR(
                                                                                                    N ||
                                                                                                      (N =
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
                                                                                                .SYNC_ORGS
                                                                                            ? n(
                                                                                                "asyncToGeneratorRuntime",
                                                                                              ).asyncToGenerator(
                                                                                                function* () {
                                                                                                  try {
                                                                                                    yield o(
                                                                                                      "WAWebOrgBackgroundSyncJob",
                                                                                                    ).runOrgBackgroundSync();
                                                                                                  } catch (e) {
                                                                                                    o(
                                                                                                      "WALogger",
                                                                                                    )
                                                                                                      .ERROR(
                                                                                                        M ||
                                                                                                          (M =
                                                                                                            babelHelpers.taggedTemplateLiteralLoose(
                                                                                                              [
                                                                                                                "Failed to sync orgs in the background: ",
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
                                                                                                          var t =
                                                                                                              yield B.load(),
                                                                                                            n =
                                                                                                              t.refreshTimeBasedAudiences;
                                                                                                          yield n();
                                                                                                        } catch (e) {
                                                                                                          o(
                                                                                                            "WALogger",
                                                                                                          )
                                                                                                            .ERROR(
                                                                                                              w ||
                                                                                                                (w =
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
    function z() {
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
    function j(e) {
      var t = G(e);
      t != null &&
        (o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "maybeRegisterTask: registering task ",
              "",
            ])),
          e,
        ),
        o("WATaskScheduler").registerTask(e, t));
    }
    function K() {
      (o("WATaskScheduler").startScheduler(z()),
        U.forEach(j),
        o("WAWebMobilePlatforms").isSMB() && V.forEach(j),
        r("gkx")("26258") || H.forEach(j));
    }
    l.registerTasks = K;
  },
  98,
);
