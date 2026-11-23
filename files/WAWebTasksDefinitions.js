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
    "WAWebBizBroadcastCampaignCleanup",
    "WAWebCTWAGatingUtils",
    "WAWebCanonicalGating",
    "WAWebCleanUtmJob",
    "WAWebClearFalcoBufferJob",
    "WAWebCoexV2MessagingStoreCleanup",
    "WAWebContactSyncBridge",
    "WAWebDBPurgeExpiredRecords",
    "WAWebDBReportingTokenUtils",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebFingerprintJob",
    "WAWebGalaxyFlowsUtils",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebInactiveGroupLidMigrationJob",
    "WAWebLogDailyStatsJob",
    "WAWebLogHistorySyncStatusAfterPairingJob",
    "WAWebMetaAiBotSessionCleanupJob",
    "WAWebMobilePlatforms",
    "WAWebMusicLyricsRetentionJob",
    "WAWebNewsletterCleanupTasks",
    "WAWebNonAddressBookContactsJob",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebOpusMigration",
    "WAWebOrgBackgroundSyncJob",
    "WAWebPQGatingUtils",
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
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdReportKeyStatsJob",
    "WAWebSyncdReportSyncdStatJob",
    "WAWebSyncdRequestAllSyncdMissingKeysJob",
    "WAWebSyncdSyncAllCollectionsJob",
    "WAWebTasksTaskType",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMultiDevice",
    "cr:18918",
    "cr:4857",
    "cr:4940",
    "cr:878",
    "getErrorSafe",
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
      B,
      W,
      q,
      U = (q = r("requireDeferred"))(
        "WAWebBizBroadcastAudienceRefreshJob",
      ).__setRef("WAWebTasksDefinitions"),
      V = q("WAWebCanonicalCredentialRecoveryJob").__setRef(
        "WAWebTasksDefinitions",
      ),
      H = q("WAWebConsumerFetchQuickPromotions").__setRef(
        "WAWebTasksDefinitions",
      ),
      G = q("WAWebFetchQuickPromotions").__setRef("WAWebTasksDefinitions"),
      z = q("WAWebPQSessionUpgradeJob").__setRef("WAWebTasksDefinitions"),
      j = o("WATimeUtils").MINUTE_SECONDS * 15,
      K = [
        (W = o("WAWebTasksTaskType")).TaskType.AEA_CONSUMER_BACKFILL,
        W.TaskType.CANONICAL_ENT_TOKEN_REFRESH,
        W.TaskType.CLEAN_TC_TOKENS,
        W.TaskType.LOG_DAILY_STATS,
        W.TaskType.ROTATE_KEY,
        W.TaskType.SYNC_AB_PROPS,
        W.TaskType.SYNC_CONTACTS,
        W.TaskType.REPORT_SYNCD_ACTION_STAT,
        W.TaskType.LT_HASH_CHECK,
        W.TaskType.REQUEST_ALL_SYNCD_MISSING_KEYS,
        W.TaskType.REPORT_SYNCD_KEY_STATS,
        W.TaskType.SYNCD_SYNC_ALL_COLLECTIONS,
        W.TaskType.CLEAN_ORPHAN_ADD_ONS,
        W.TaskType.CLEAN_POLL_PENDING_UPDATES,
        W.TaskType.CLEAN_EXPIRED_UTM,
        W.TaskType.SEND_NON_MESSAGE_DATA_REQUEST,
        W.TaskType.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING,
        W.TaskType.DELETE_NEWSLETTER_PREVIEW_CHATS,
        W.TaskType.REPORT_DB_VERSIONS,
        W.TaskType.UPDATE_EXPIRED_TEXT_STATUS,
        W.TaskType.RESTART_RECENT_SYNC,
        W.TaskType.CLEANUP_REPORTING_TABLE,
        W.TaskType.CLEANUP_GROUP_HISTORY_REPORTING_TOKEN_TABLE,
        W.TaskType.CLEANUP_SCHEDULED_MSG_REVEAL_KEYS,
        W.TaskType.CLEANUP_COEXV2_MESSAGING_STORES,
        W.TaskType.WAFFLE_SCHEDULED_TASKS,
        W.TaskType.CLEAR_GALAXY_FLOWS_CACHE,
        W.TaskType.CLEAR_FALCO_BUFFER,
        W.TaskType.SEND_WAM_FINGERPRINT,
        W.TaskType.INACTIVE_GROUP_LID_MIGRATION,
        W.TaskType.QUERY_MISSING_PARENT_GROUPS,
        W.TaskType.CLEAN_META_AI_BOT_SESSION,
        W.TaskType.PURGE_QPL_STORAGE,
        W.TaskType.CLEAN_WEBTP_SHARED_SESSIONS,
        W.TaskType.CLEAN_EXPIRED_QUARANTINE_DATA,
        W.TaskType.CLEAN_EXPIRED_MUSIC_LYRICS,
        W.TaskType.OPUS_MIGRATION,
        W.TaskType.PQ_SESSION_UPGRADE,
        W.TaskType.FETCH_QUICK_PROMOTIONS,
        W.TaskType.SYNC_ORGS,
      ],
      Q = [
        W.TaskType.CLEANUP_3PD_SIGNALS_TABLE,
        W.TaskType.CLEANUP_STALE_CAMPAIGNS,
        W.TaskType.REFRESH_AUDIENCE_EXPRESSIONS,
      ],
      X = [W.TaskType.LOG_DB_ROW_COUNTS, W.TaskType.MONITOR_DB_STORAGE];
    function Y(t) {
      return t === o("WAWebTasksTaskType").TaskType.AEA_CONSUMER_BACKFILL
        ? n("cr:878") == null
          ? void 0
          : n("cr:878").runAeaConsumerBackfillTask
        : t === o("WAWebTasksTaskType").TaskType.MONITOR_DB_STORAGE
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
                        if (e)
                          o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "RotateKeyTask skip first run",
                              ])),
                          );
                        else
                          try {
                            await o(
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
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "RotateKeyTask failed: ",
                                        "",
                                      ])),
                                  e,
                                )
                                .sendLogs("rotate-key-task-failed"),
                              o("WATimeUtils").HOUR_SECONDS
                            );
                          }
                        return 27 * o("WATimeUtils").DAY_SECONDS;
                      }
                    : t === o("WAWebTasksTaskType").TaskType.SYNC_AB_PROPS
                      ? async function (e) {
                          return (
                            e ||
                              (await o(
                                "WAWebAbPropsSyncJob",
                              ).syncABPropsTask()),
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
                                await o(
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
                                        "WAWebSyncdAntiTamperingLtHash",
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
                                        };
                                      })()
                                    : t ===
                                        o("WAWebTasksTaskType").TaskType
                                          .CLEAN_POLL_PENDING_UPDATES
                                      ? async function () {
                                          return (
                                            await o(
                                              "WAWebPollPendingUpdatesCleanup",
                                            ).cleanExpiredPollPendingUpdates(),
                                            o("WATimeUtils").DAY_SECONDS
                                          );
                                        }
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
                                          }
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
                                                  o("WATimeUtils")
                                                    .HOUR_SECONDS * 23
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
                                                    o("WATimeUtils")
                                                      .HOUR_SECONDS * 4
                                                  );
                                                }
                                              : t ===
                                                  o("WAWebTasksTaskType")
                                                    .TaskType.REPORT_DB_VERSIONS
                                                ? async function () {
                                                    return (
                                                      await o(
                                                        "WAWebReportDbVerionsJob",
                                                      ).reportDbVersionsJob(),
                                                      o("WATimeUtils")
                                                        .DAY_SECONDS * 3
                                                    );
                                                  }
                                                : t ===
                                                    o("WAWebTasksTaskType")
                                                      .TaskType
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
                                                              v ||
                                                                (v =
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
                                                              .MINUTE_SECONDS *
                                                              5
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
                                                            var e;
                                                            (await o(
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
                                                              await o(
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
                                                        }
                                                      : t ===
                                                          o(
                                                            "WAWebTasksTaskType",
                                                          ).TaskType
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
                                                          }
                                                        : t ===
                                                            o(
                                                              "WAWebTasksTaskType",
                                                            ).TaskType
                                                              .CLEANUP_SCHEDULED_MSG_REVEAL_KEYS
                                                          ? async function () {
                                                              if (
                                                                (await o(
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
                                                                (await o(
                                                                  "WAWebScheduledMsgRevealKeyStore",
                                                                ).cleanupExpiredRevealKeys(),
                                                                  await o(
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
                                                            }
                                                          : t ===
                                                              o(
                                                                "WAWebTasksTaskType",
                                                              ).TaskType
                                                                .CLEANUP_COEXV2_MESSAGING_STORES
                                                            ? async function () {
                                                                try {
                                                                  await o(
                                                                    "WAWebCoexV2MessagingStoreCleanup",
                                                                  ).cleanupCoexV2MessagingStores();
                                                                } catch (e) {
                                                                  o("WALogger")
                                                                    .ERROR(
                                                                      E ||
                                                                        (E =
                                                                          babelHelpers.taggedTemplateLiteralLoose(
                                                                            [
                                                                              "Failed to cleanup CoEx v2 messaging stores: ",
                                                                              "",
                                                                            ],
                                                                          )),
                                                                      e,
                                                                    )
                                                                    .catching(
                                                                      r(
                                                                        "getErrorSafe",
                                                                      )(e),
                                                                    )
                                                                    .verbose()
                                                                    .sendLogs(
                                                                      "coexv2-messaging-store-cleanup-failed",
                                                                      {
                                                                        sampling: 0.01,
                                                                      },
                                                                    );
                                                                }
                                                                return j;
                                                              }
                                                            : t ===
                                                                o(
                                                                  "WAWebTasksTaskType",
                                                                ).TaskType
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
                                                                    o(
                                                                      "WALogger",
                                                                    )
                                                                      .ERROR(
                                                                        k ||
                                                                          (k =
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
                                                                    ) {
                                                                      o(
                                                                        "WALogger",
                                                                      ).LOG(
                                                                        I ||
                                                                          (I =
                                                                            babelHelpers.taggedTemplateLiteralLoose(
                                                                              [
                                                                                "fetchQuickPromotions: fetching quick promotions",
                                                                              ],
                                                                            )),
                                                                      );
                                                                      var e =
                                                                          await G.load(),
                                                                        t =
                                                                          e.fetchQuickPromotions;
                                                                      await t();
                                                                    } else {
                                                                      var n =
                                                                          await H.load(),
                                                                        r =
                                                                          n.fetchConsumerQuickPromotions;
                                                                      (o(
                                                                        "WALogger",
                                                                      ).LOG(
                                                                        T ||
                                                                          (T =
                                                                            babelHelpers.taggedTemplateLiteralLoose(
                                                                              [
                                                                                "fetchConsumerQuickPromotions: fetching",
                                                                              ],
                                                                            )),
                                                                      ),
                                                                        await r());
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
                                                                        )
                                                                          .TaskType
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
                                                                          )
                                                                            .TaskType
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
                                                                            )
                                                                              .TaskType
                                                                              .INACTIVE_GROUP_LID_MIGRATION
                                                                          ? async function () {
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
                                                                                  await o(
                                                                                    "WAWebInactiveGroupLidMigrationJob",
                                                                                  ).migrateInactiveGroupsToLid();
                                                                                } catch (e) {
                                                                                  o(
                                                                                    "WALogger",
                                                                                  )
                                                                                    .ERROR(
                                                                                      D ||
                                                                                        (D =
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
                                                                              )
                                                                                .TaskType
                                                                                .QUERY_MISSING_PARENT_GROUPS
                                                                            ? async function () {
                                                                                try {
                                                                                  await o(
                                                                                    "WAWebQueryMissingParentGroupJob",
                                                                                  ).queryMissingParentGroups();
                                                                                } catch (e) {
                                                                                  o(
                                                                                    "WALogger",
                                                                                  )
                                                                                    .ERROR(
                                                                                      x ||
                                                                                        (x =
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
                                                                              }
                                                                            : t ===
                                                                                o(
                                                                                  "WAWebTasksTaskType",
                                                                                )
                                                                                  .TaskType
                                                                                  .CANONICAL_ENT_TOKEN_REFRESH
                                                                              ? async function () {
                                                                                  if (
                                                                                    n(
                                                                                      "cr:18918",
                                                                                    ) !=
                                                                                      null &&
                                                                                    o(
                                                                                      "WAWebCanonicalGating",
                                                                                    ).isCanonicalAuthV2Enabled()
                                                                                  )
                                                                                    return await n(
                                                                                      "cr:18918",
                                                                                    ).ensureCanonicalAuthV2Credentials();
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
                                                                                      await V.load(),
                                                                                    t =
                                                                                      e.maybeRecoverCanonicalCredentials,
                                                                                    r =
                                                                                      await t();
                                                                                  return r;
                                                                                }
                                                                              : t ===
                                                                                  o(
                                                                                    "WAWebTasksTaskType",
                                                                                  )
                                                                                    .TaskType
                                                                                    .CLEAN_META_AI_BOT_SESSION
                                                                                ? async function () {
                                                                                    return (
                                                                                      await o(
                                                                                        "WAWebMetaAiBotSessionCleanupJob",
                                                                                      ).maybeCleanupMetaAiBotSession(),
                                                                                      o(
                                                                                        "WATimeUtils",
                                                                                      )
                                                                                        .DAY_SECONDS
                                                                                    );
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
                                                                                          "WAWebRemoveExpiredWebTPSharedSessions",
                                                                                        ).removeExpiredWebTPSharedSessions();
                                                                                      } catch (e) {
                                                                                        o(
                                                                                          "WALogger",
                                                                                        )
                                                                                          .ERROR(
                                                                                            $ ||
                                                                                              ($ =
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
                                                                                              P ||
                                                                                                (P =
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
                                                                                                N ||
                                                                                                  (N =
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
                                                                                            try {
                                                                                              await o(
                                                                                                "WAWebQuarantineDataCleanupJob",
                                                                                              ).cleanExpiredQuarantineDataJob();
                                                                                            } catch (e) {
                                                                                              o(
                                                                                                "WALogger",
                                                                                              )
                                                                                                .ERROR(
                                                                                                  M ||
                                                                                                    (M =
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
                                                                                              .CLEAN_EXPIRED_MUSIC_LYRICS
                                                                                          ? async function () {
                                                                                              try {
                                                                                                await o(
                                                                                                  "WAWebMusicLyricsRetentionJob",
                                                                                                ).cleanExpiredMusicLyricsJob();
                                                                                              } catch (e) {
                                                                                                o(
                                                                                                  "WALogger",
                                                                                                )
                                                                                                  .ERROR(
                                                                                                    w ||
                                                                                                      (w =
                                                                                                        babelHelpers.taggedTemplateLiteralLoose(
                                                                                                          [
                                                                                                            "Failed to clean up expired music lyrics: ",
                                                                                                            "",
                                                                                                          ],
                                                                                                        )),
                                                                                                    e,
                                                                                                  )
                                                                                                  .catching(
                                                                                                    r(
                                                                                                      "getErrorSafe",
                                                                                                    )(
                                                                                                      e,
                                                                                                    ),
                                                                                                  )
                                                                                                  .verbose()
                                                                                                  .sendLogs(
                                                                                                    "music-lyrics-retention-failed",
                                                                                                  );
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
                                                                                                  .SYNC_ORGS
                                                                                              ? async function () {
                                                                                                  try {
                                                                                                    await o(
                                                                                                      "WAWebOrgBackgroundSyncJob",
                                                                                                    ).runOrgBackgroundSync();
                                                                                                  } catch (e) {
                                                                                                    o(
                                                                                                      "WALogger",
                                                                                                    )
                                                                                                      .ERROR(
                                                                                                        A ||
                                                                                                          (A =
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
                                                                                                }
                                                                                              : t ===
                                                                                                  o(
                                                                                                    "WAWebTasksTaskType",
                                                                                                  )
                                                                                                    .TaskType
                                                                                                    .PQ_SESSION_UPGRADE
                                                                                                ? async function () {
                                                                                                    await o(
                                                                                                      "WAWebABPropsCache",
                                                                                                    ).waitForABPropConfigsReady();
                                                                                                    var e =
                                                                                                      o(
                                                                                                        "WAWebPQGatingUtils",
                                                                                                      ).getPqSessionUpgradePolicy();
                                                                                                    if (
                                                                                                      e ==
                                                                                                      null
                                                                                                    )
                                                                                                      return o(
                                                                                                        "WATimeUtils",
                                                                                                      )
                                                                                                        .DAY_SECONDS;
                                                                                                    try {
                                                                                                      var t =
                                                                                                          await z.load(),
                                                                                                        n =
                                                                                                          t.runPQSessionUpgradeJob;
                                                                                                      return await n(
                                                                                                        e,
                                                                                                      );
                                                                                                    } catch (e) {
                                                                                                      return (
                                                                                                        o(
                                                                                                          "WALogger",
                                                                                                        )
                                                                                                          .ERROR(
                                                                                                            F ||
                                                                                                              (F =
                                                                                                                babelHelpers.taggedTemplateLiteralLoose(
                                                                                                                  [
                                                                                                                    "Failed to upgrade PQ sessions",
                                                                                                                  ],
                                                                                                                )),
                                                                                                          )
                                                                                                          .catching(
                                                                                                            r(
                                                                                                              "getErrorSafe",
                                                                                                            )(
                                                                                                              e,
                                                                                                            ),
                                                                                                          )
                                                                                                          .sendLogs(
                                                                                                            "pq-session-upgrade-task-failed",
                                                                                                          ),
                                                                                                        o(
                                                                                                          "WATimeUtils",
                                                                                                        )
                                                                                                          .DAY_SECONDS
                                                                                                      );
                                                                                                    }
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
                                                                                                        var t =
                                                                                                            await U.load(),
                                                                                                          n =
                                                                                                            t.refreshTimeBasedAudiences;
                                                                                                        await n();
                                                                                                      } catch (e) {
                                                                                                        o(
                                                                                                          "WALogger",
                                                                                                        )
                                                                                                          .ERROR(
                                                                                                            O ||
                                                                                                              (O =
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
    function J() {
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
    function Z(e) {
      var t = Y(e);
      t != null &&
        (o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "maybeRegisterTask: registering task ",
              "",
            ])),
          e,
        ),
        o("WATaskScheduler").registerTask(e, t));
    }
    function ee() {
      (o("WATaskScheduler").startScheduler(J()),
        K.forEach(Z),
        o("WAWebMobilePlatforms").isSMB() && Q.forEach(Z),
        r("gkx")("26258") || X.forEach(Z));
    }
    l.registerTasks = ee;
  },
  98,
);
