__d(
  "WAWebTasksDefinitions",
  [
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
    "WAWebBizBroadcastAudienceRefreshJob",
    "WAWebBizBroadcastCampaignCleanup",
    "WAWebBizGatingUtils",
    "WAWebBotGating",
    "WAWebCanonicalCredentialRecoveryJob",
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
      M = r("requireDeferred")("WAWebConsumerFetchQuickPromotions").__setRef(
        "WAWebTasksDefinitions",
      ),
      w = [
        (N = o("WAWebTasksTaskType")).TaskType.CANONICAL_ENT_TOKEN_REFRESH,
        N.TaskType.CLEAN_TC_TOKENS,
        N.TaskType.LOG_DAILY_STATS,
        N.TaskType.ROTATE_KEY,
        N.TaskType.SYNC_AB_PROPS,
        N.TaskType.SYNC_CONTACTS,
        N.TaskType.REPORT_SYNCD_ACTION_STAT,
        N.TaskType.LT_HASH_CHECK,
        N.TaskType.REQUEST_ALL_SYNCD_MISSING_KEYS,
        N.TaskType.REPORT_SYNCD_KEY_STATS,
        N.TaskType.SYNCD_SYNC_ALL_COLLECTIONS,
        N.TaskType.CLEAN_ORPHAN_ADD_ONS,
        N.TaskType.CLEAN_EXPIRED_UTM,
        N.TaskType.SEND_NON_MESSAGE_DATA_REQUEST,
        N.TaskType.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING,
        N.TaskType.DELETE_NEWSLETTER_PREVIEW_CHATS,
        N.TaskType.REPORT_DB_VERSIONS,
        N.TaskType.UPDATE_EXPIRED_TEXT_STATUS,
        N.TaskType.RESTART_RECENT_SYNC,
        N.TaskType.CLEANUP_REPORTING_TABLE,
        N.TaskType.CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE,
        N.TaskType.WAFFLE_SCHEDULED_TASKS,
        N.TaskType.CLEAR_GALAXY_FLOWS_CACHE,
        N.TaskType.CLEAR_FALCO_BUFFER,
        N.TaskType.SEND_WAM_FINGERPRINT,
        N.TaskType.INACTIVE_GROUP_LID_MIGRATION,
        N.TaskType.MIGRATE_META_AI_MESSAGES_TO_HISTORICAL_THREAD,
        N.TaskType.PURGE_QPL_STORAGE,
        N.TaskType.CLEAN_WEBTP_SHARED_SESSIONS,
        N.TaskType.CLEAN_EXPIRED_QUARANTINE_DATA,
        N.TaskType.OPUS_MIGRATION,
        N.TaskType.FETCH_QUICK_PROMOTIONS,
      ],
      A = [
        N.TaskType.CLEANUP_3PD_SIGNALS_TABLE,
        N.TaskType.CLEANUP_STALE_CAMPAIGNS,
        N.TaskType.REFRESH_AUDIENCE_EXPRESSIONS,
      ],
      F = [N.TaskType.LOG_DB_ROW_COUNTS, N.TaskType.MONITOR_DB_STORAGE];
    function O(t) {
      return t === o("WAWebTasksTaskType").TaskType.MONITOR_DB_STORAGE
        ? async function (e) {
            if (r("gkx")("26258"))
              return o("WATaskScheduler").DO_NOT_RESCHEDULE;
            var t = await (n("cr:4857") == null
              ? void 0
              : n("cr:4857").shouldMonitorDbStorageUsageJob());
            return t
              ? o("WATimeUtils").HOUR_SECONDS
              : o("WATaskScheduler").DO_NOT_RESCHEDULE;
          }
        : t === o("WAWebTasksTaskType").TaskType.CLEAN_TC_TOKENS
          ? async function (t) {
              if (t)
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "CleanTcToken skip first run",
                    ])),
                );
              else
                try {
                  (await o("WAWebApiChat").pruneExpiredTcTokens(),
                    await o("WAWebApiChat").pruneExpiredOrphanTcTokens());
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
            }
          : t === o("WAWebTasksTaskType").TaskType.UPDATE_EXPIRED_TEXT_STATUS
            ? async function (e) {
                if (e)
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Update expired text status skip first run",
                      ])),
                  );
                else
                  try {
                    await o(
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
              }
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
                          Promise.resolve(t)
                        );
                      };
                    }
                    return function () {
                      return Promise.resolve(
                        o("WATaskScheduler").DO_NOT_RESCHEDULE,
                      );
                    };
                  })()
                : t === o("WAWebTasksTaskType").TaskType.ROTATE_KEY
                  ? async function (e) {
                      return (
                        e
                          ? o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "RotateKeyTask skip first run",
                                ])),
                            )
                          : await o("WAWebPersistedJobManagerWorkerCompatible")
                              .getJobManager()
                              .waitUntilCompleted(
                                o(
                                  "WAWebPersistedJobDefinitions",
                                ).jobSerializers.rotateKey(),
                              ),
                        27 * o("WATimeUtils").DAY_SECONDS
                      );
                    }
                  : t === o("WAWebTasksTaskType").TaskType.SYNC_AB_PROPS
                    ? async function (e) {
                        return (
                          e ||
                            (await o("WAWebAbPropsSyncJob").syncABPropsTask()),
                          o("WAWebABPropsLocalStorage").getRefresh()
                        );
                      }
                    : t === o("WAWebTasksTaskType").TaskType.SYNC_CONTACTS
                      ? async function (e) {
                          if (!e) {
                            try {
                              await o(
                                "WAWebNonAddressBookContactsJob",
                              ).getNonAddressBookContactsAndMarkAllContactsDirty();
                            } catch (e) {
                              o("WALogger")
                                .ERROR(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Failed to sync non-address book contacts with error: ",
                                        "",
                                      ])),
                                  e,
                                )
                                .verbose();
                            }
                            try {
                              await o(
                                "WAWebContactSyncBridge",
                              ).doFullContactSync();
                            } catch (e) {
                              o("WALogger")
                                .ERROR(
                                  f ||
                                    (f =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "syncContacts: contact sync failed, error: ",
                                        "",
                                      ])),
                                  e,
                                )
                                .verbose()
                                .tags("non-sad", "contact-sync")
                                .sendLogs("syncContacts: contact sync failed");
                            }
                          }
                          return o(
                            "WAWebSyncContactsJob",
                          ).getContactSyncRefreshSeconds();
                        }
                      : t ===
                          o("WAWebTasksTaskType").TaskType
                            .REPORT_SYNCD_ACTION_STAT
                        ? async function (e) {
                            return (
                              e ||
                                (await o(
                                  "WAWebSyncdReportSyncdStatJob",
                                ).reportSyncdStatsJob()),
                              o("WATimeUtils").DAY_SECONDS
                            );
                          }
                        : t === o("WAWebTasksTaskType").TaskType.LT_HASH_CHECK
                          ? async function (e) {
                              var t =
                                o("WAWebABProps").getABPropConfigValue(
                                  "lthash_check_hours",
                                );
                              return t === 0
                                ? 24 * o("WATimeUtils").HOUR_SECONDS
                                : (e ||
                                    (await o(
                                      "WAWebSyncdAntiTampering",
                                    ).checkLtHash("abc")),
                                  t * o("WATimeUtils").HOUR_SECONDS);
                            }
                          : t ===
                              o("WAWebTasksTaskType").TaskType
                                .REQUEST_ALL_SYNCD_MISSING_KEYS
                            ? async function (e) {
                                return (
                                  e ||
                                    (await o(
                                      "WAWebSyncdRequestAllSyncdMissingKeysJob",
                                    ).requestAllSyncdMissingKeysJob()),
                                  o("WATimeUtils").HOUR_SECONDS * 6
                                );
                              }
                            : t ===
                                o("WAWebTasksTaskType").TaskType
                                  .REPORT_SYNCD_KEY_STATS
                              ? async function (e) {
                                  return (
                                    e ||
                                      (await o(
                                        "WAWebSyncdReportKeyStatsJob",
                                      ).reportSyncdKeyStatsJob()),
                                    r("gkx")("26258")
                                      ? o("WATimeUtils").DAY_SECONDS * 3
                                      : o("WATimeUtils").DAY_SECONDS
                                  );
                                }
                              : t ===
                                  o("WAWebTasksTaskType").TaskType
                                    .SYNCD_SYNC_ALL_COLLECTIONS
                                ? async function (e) {
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
                                          (await o(
                                            "WAWebSyncdSyncAllCollectionsJob",
                                          ).syncdSyncAllCollectionsJob()),
                                        o("WATimeUtils").DAY_SECONDS * t);
                                  }
                                : t ===
                                    o("WAWebTasksTaskType").TaskType
                                      .CLEAN_ORPHAN_ADD_ONS
                                  ? (function () {
                                      var e = 30,
                                        t = 90;
                                      return async function () {
                                        try {
                                          await o(
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
                                      };
                                    })()
                                  : t ===
                                      o("WAWebTasksTaskType").TaskType
                                        .CLEAN_PAST_PARTICIPANTS
                                    ? async function () {
                                        try {
                                          await o(
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
                                      }
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
                                            : Promise.resolve(
                                                o("WATaskScheduler")
                                                  .DO_NOT_RESCHEDULE,
                                              );
                                        }
                                      : t ===
                                          o("WAWebTasksTaskType").TaskType
                                            .SEND_NON_MESSAGE_DATA_REQUEST
                                        ? async function () {
                                            return (
                                              await o(
                                                "WAWebNonMessageDataRequestMediaHandlingUtils",
                                              ).retryNonMessageDataRequestJob(),
                                              o("WATimeUtils").HOUR_SECONDS * 23
                                            );
                                          }
                                        : t ===
                                            o("WAWebTasksTaskType").TaskType
                                              .DELETE_NEWSLETTER_PREVIEW_CHATS
                                          ? async function () {
                                              return (
                                                await o(
                                                  "WAWebNewsletterCleanupTasks",
                                                ).deletePreviewNewsletters(),
                                                o("WATimeUtils").HOUR_SECONDS *
                                                  4
                                              );
                                            }
                                          : t ===
                                              o("WAWebTasksTaskType").TaskType
                                                .REPORT_DB_VERSIONS
                                            ? async function () {
                                                return (
                                                  await o(
                                                    "WAWebReportDbVerionsJob",
                                                  ).reportDbVersionsJob(),
                                                  o("WATimeUtils").DAY_SECONDS *
                                                    3
                                                );
                                              }
                                            : t ===
                                                o("WAWebTasksTaskType").TaskType
                                                  .LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING
                                              ? async function () {
                                                  var e = o(
                                                    "WAWebUserPrefsMultiDevice",
                                                  ).getPairingTimestamp();
                                                  if (e != null) {
                                                    var t,
                                                      n =
                                                        (t = await o(
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
                                                      : (await o(
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
                                                }
                                              : t ===
                                                  o("WAWebTasksTaskType")
                                                    .TaskType
                                                    .RESTART_RECENT_SYNC
                                                ? async function () {
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
                                                          (await o(
                                                            "WAWebRestartRecentSyncJob",
                                                          ).restartRecentSyncJob()),
                                                        o("WATimeUtils")
                                                          .MINUTE_SECONDS * 5
                                                      );
                                                    }
                                                    return 10;
                                                  }
                                                : t ===
                                                    o("WAWebTasksTaskType")
                                                      .TaskType
                                                      .CLEANUP_REPORTING_TABLE
                                                  ? async function () {
                                                      try {
                                                        (await o(
                                                          "WAWebDBReportingTokenUtils",
                                                        ).cleanupReportingTable(
                                                          o(
                                                            "WAWebMessagingGatingUtils",
                                                          ).getReportingTagCleanupDays(),
                                                        ),
                                                          await o(
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
                                                    }
                                                  : t ===
                                                      o("WAWebTasksTaskType")
                                                        .TaskType
                                                        .CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE
                                                    ? async function () {
                                                        try {
                                                          await o(
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
                                                        return o("WATimeUtils")
                                                          .DAY_SECONDS;
                                                      }
                                                    : t ===
                                                        o("WAWebTasksTaskType")
                                                          .TaskType
                                                          .CLEANUP_3PD_SIGNALS_TABLE
                                                      ? async function () {
                                                          try {
                                                            o(
                                                              "WAWebABProps",
                                                            ).getABPropConfigValue(
                                                              "ctwa_download_3pd_signals",
                                                            ) &&
                                                              (await o(
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
                                                        }
                                                      : t ===
                                                          o(
                                                            "WAWebTasksTaskType",
                                                          ).TaskType
                                                            .FETCH_QUICK_PROMOTIONS
                                                        ? async function () {
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
                                                                await o(
                                                                  "WAWebFetchQuickPromotions",
                                                                ).fetchQuickPromotions());
                                                            else {
                                                              var e =
                                                                  await M.load(),
                                                                t =
                                                                  e.fetchConsumerQuickPromotions;
                                                              (o(
                                                                "WALogger",
                                                              ).LOG(
                                                                E ||
                                                                  (E =
                                                                    babelHelpers.taggedTemplateLiteralLoose(
                                                                      [
                                                                        "fetchConsumerQuickPromotions: fetching",
                                                                      ],
                                                                    )),
                                                              ),
                                                                await t());
                                                            }
                                                            return (
                                                              o(
                                                                "WAWebQuickPromotionGating",
                                                              ).qpGraphQLFetchIntervalMinutes() *
                                                              o("WATimeUtils")
                                                                .MINUTE_SECONDS
                                                            );
                                                          }
                                                        : t ===
                                                            o(
                                                              "WAWebTasksTaskType",
                                                            ).TaskType
                                                              .WAFFLE_SCHEDULED_TASKS
                                                          ? async function () {
                                                              return (
                                                                await o(
                                                                  "WAWebAccountLinkingScheduledJobs",
                                                                ).scheduledWaffleJobs(),
                                                                o("WATimeUtils")
                                                                  .DAY_SECONDS
                                                              );
                                                            }
                                                          : t ===
                                                              o(
                                                                "WAWebTasksTaskType",
                                                              ).TaskType
                                                                .CLEAR_GALAXY_FLOWS_CACHE
                                                            ? async function () {
                                                                return (
                                                                  await o(
                                                                    "WAWebGalaxyFlowsUtils",
                                                                  ).clearGalaxyFlowsCache(),
                                                                  7 *
                                                                    o(
                                                                      "WATimeUtils",
                                                                    )
                                                                      .DAY_SECONDS
                                                                );
                                                              }
                                                            : t ===
                                                                o(
                                                                  "WAWebTasksTaskType",
                                                                ).TaskType
                                                                  .CLEAR_FALCO_BUFFER
                                                              ? async function (
                                                                  e,
                                                                ) {
                                                                  return (
                                                                    e ||
                                                                      (await o(
                                                                        "WAWebClearFalcoBufferJob",
                                                                      ).clearFalcoBufferJob()),
                                                                    o(
                                                                      "WATimeUtils",
                                                                    )
                                                                      .DAY_SECONDS
                                                                  );
                                                                }
                                                              : t ===
                                                                  o(
                                                                    "WAWebTasksTaskType",
                                                                  ).TaskType
                                                                    .SEND_WAM_FINGERPRINT
                                                                ? async function () {
                                                                    return (
                                                                      await o(
                                                                        "WAWebFingerprintJob",
                                                                      ).sendWamFingerprintJob(),
                                                                      o(
                                                                        "WATimeUtils",
                                                                      )
                                                                        .DAY_SECONDS *
                                                                        2
                                                                    );
                                                                  }
                                                                : t ===
                                                                    o(
                                                                      "WAWebTasksTaskType",
                                                                    ).TaskType
                                                                      .INACTIVE_GROUP_LID_MIGRATION
                                                                  ? async function () {
                                                                      var e = o(
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
                                                                          t < n
                                                                        )
                                                                          return (
                                                                            n -
                                                                            t
                                                                          );
                                                                        try {
                                                                          await o(
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
                                                                    }
                                                                  : t ===
                                                                      o(
                                                                        "WAWebTasksTaskType",
                                                                      ).TaskType
                                                                        .CANONICAL_ENT_TOKEN_REFRESH
                                                                    ? async function () {
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
                                                                          await o(
                                                                            "WAWebCanonicalCredentialRecoveryJob",
                                                                          ).maybeRecoverCanonicalCredentials();
                                                                        return e;
                                                                      }
                                                                    : t ===
                                                                        o(
                                                                          "WAWebTasksTaskType",
                                                                        )
                                                                          .TaskType
                                                                          .MIGRATE_META_AI_MESSAGES_TO_HISTORICAL_THREAD
                                                                      ? async function () {
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
                                                                                (await o(
                                                                                  "WAWebMetaAiHistoricalThreadMigrationJob",
                                                                                ).migrateMetaAiMessagesToHistoricalThread()),
                                                                              o(
                                                                                "WATimeUtils",
                                                                              )
                                                                                .HOUR_SECONDS);
                                                                        }
                                                                      : t ===
                                                                          o(
                                                                            "WAWebTasksTaskType",
                                                                          )
                                                                            .TaskType
                                                                            .CLEAN_WEBTP_SHARED_SESSIONS
                                                                        ? async function () {
                                                                            if (
                                                                              (await o(
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
                                                                              await o(
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
                                                                          }
                                                                        : t ===
                                                                            o(
                                                                              "WAWebTasksTaskType",
                                                                            )
                                                                              .TaskType
                                                                              .PURGE_QPL_STORAGE
                                                                          ? async function () {
                                                                              try {
                                                                                await o(
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
                                                                            }
                                                                          : t ===
                                                                              o(
                                                                                "WAWebTasksTaskType",
                                                                              )
                                                                                .TaskType
                                                                                .CLEANUP_STALE_CAMPAIGNS
                                                                            ? async function () {
                                                                                try {
                                                                                  await o(
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
                                                                              }
                                                                            : t ===
                                                                                o(
                                                                                  "WAWebTasksTaskType",
                                                                                )
                                                                                  .TaskType
                                                                                  .CLEAN_EXPIRED_QUARANTINE_DATA
                                                                              ? async function () {
                                                                                  if (
                                                                                    o(
                                                                                      "WAWebABProps",
                                                                                    ).getABPropConfigValue(
                                                                                      "defense_mode_quarantine",
                                                                                    )
                                                                                  )
                                                                                    try {
                                                                                      await o(
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
                                                                                }
                                                                              : t ===
                                                                                  o(
                                                                                    "WAWebTasksTaskType",
                                                                                  )
                                                                                    .TaskType
                                                                                    .OPUS_MIGRATION
                                                                                ? async function () {
                                                                                    await o(
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
                                                                                      : (await o(
                                                                                          "WAWebOpusMigration",
                                                                                        ).runOpusMigration(),
                                                                                        o(
                                                                                          "WATaskScheduler",
                                                                                        )
                                                                                          .DO_NOT_RESCHEDULE);
                                                                                  }
                                                                                : t ===
                                                                                    o(
                                                                                      "WAWebTasksTaskType",
                                                                                    )
                                                                                      .TaskType
                                                                                      .REFRESH_AUDIENCE_EXPRESSIONS
                                                                                  ? async function (
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
                                                                                        await o(
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
                                                                                    }
                                                                                  : (function () {
                                                                                      throw Error(
                                                                                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                          t,
                                                                                      );
                                                                                    })();
    }
    function B() {
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
    function W(e) {
      var t = O(e);
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
    function q() {
      (o("WATaskScheduler").startScheduler(B()),
        w.forEach(W),
        o("WAWebMobilePlatforms").isSMB() && A.forEach(W),
        r("gkx")("26258") || F.forEach(W));
    }
    l.registerTasks = q;
  },
  98,
);
