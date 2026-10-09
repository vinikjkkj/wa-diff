__d(
  "WAWebHandleHistorySyncNotification",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiHistorySyncNotification",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebHandleHistorySyncChunk",
    "WAWebHandleHistorySyncMessageAccessStatusChange",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHttpErrors",
    "WAWebJestE2ELogUtils",
    "WAWebMdBootstrapHistoryDataReceivedWamEvent",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMsgKey",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebSyncBootstrap",
    "WAWebSyncGatingUtils",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
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
      S = 11;
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "HandleHistorySyncNotification",
          });
          try {
            var l;
            if (
              (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                "received history sync notif",
              ),
              !t)
            ) {
              i.endFail("missing_history_sync_metadata", {
                string: { earlyExitReason: "missing_history_sync_metadata" },
              });
              return;
            }
            if (!o("WAWebUserPrefsMeUser").isMePrimary(n)) {
              if (n == null || !(n instanceof r("WAWebWid"))) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] History sync empty wid error",
                      ])),
                  )
                  .sendLogs("History sync empty wid error"),
                  i.endFail("invalid_sender", {
                    string: { earlyExitReason: "invalid_sender" },
                  }));
                return;
              }
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] History sync payload wid error",
                    ])),
                )
                .sendLogs("History sync payload wid error"),
                i.endFail("non_primary_sender", {
                  string: { earlyExitReason: "non_primary_sender" },
                }));
              return;
            }
            if (
              t.historySyncNotification.syncType ===
              o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                .MESSAGE_ACCESS_STATUS
            )
              return (
                i.addPoint("history_sync_message_access_status"),
                o(
                  "WAWebHandleHistorySyncMessageAccessStatusChange",
                ).handleHistorySyncMessageAccessStatusChange(
                  t.historySyncNotification,
                )
              );
            var R = t.downloadOptions;
            if (!R) {
              i.endFail("missing_download_options", {
                string: { earlyExitReason: "missing_download_options" },
              });
              return;
            }
            if (
              !r("gkx")("26258") &&
              o("WAWebABProps").getABPropConfigValue(
                "web_abprop_drop_full_history_sync",
              ) &&
              t.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType.FULL
            ) {
              i.endFail("full_history_sync_dropped", {
                string: { earlyExitReason: "full_history_sync_dropped" },
              });
              return;
            }
            var L = !!t.historySyncNotification.originalMessageId,
              E = L ? t.historySyncNotification.originalMessageId : a,
              k = new (r("WAWebMsgKey"))({
                remote: n,
                fromMe: !0,
                id: E,
              }).toString(),
              I = (l = t.historySyncNotification.progress) != null ? l : 0,
              T = {
                msgKey: k,
                processed: 0,
                downloadOptions: R,
                isReupload: 1,
                historySyncStepStartedTs: o("WATimeUtils").unixTimeMs(),
                reuploadPending: !1,
                historySyncPayloadSize: t.historySyncNotification.fileLength,
                oldestMsgInChunkTimestampSec:
                  t.historySyncNotification.oldestMsgInChunkTimestampSec,
                initialHistBootstrapInlinePayload:
                  t.historySyncNotification.initialHistBootstrapInlinePayload,
                peerDataRequestSessionId:
                  t.historySyncNotification.peerDataRequestSessionId,
                progress: I,
                encHandle: t.historySyncNotification.encHandle,
              };
            (!L ||
              t.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                  .INITIAL_BOOTSTRAP) &&
              ((T.syncType = t.historySyncNotification.syncType),
              (T.chunkOrder = t.historySyncNotification.chunkOrder || 0),
              (T.isReupload = 0));
            var D = T;
            if (
              (D.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP &&
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] notification accepted, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(D),
                  )
                  .tags("history-sync"),
              D.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT && I === 100)
            ) {
              var x = D.chunkOrder;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] setting total chunk count when receiving: ",
                    "",
                  ])),
                x,
              ),
                yield o(
                  "WAWebUserPrefsHistorySync",
                ).setChunkCountForEndOfRecentHistorySync(x != null ? x : 1),
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel());
            }
            var $ = new (o(
              "WAWebMdBootstrapHistoryDataReceivedWamEvent",
            ).MdBootstrapHistoryDataReceivedWamEvent)({
              mdBootstrapPayloadType:
                D.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP
                  ? o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                  : o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
              mdBootstrapHistoryPayloadType: o(
                "WAWebGetMetricHistorySyncPayloadType",
              ).getMetricHistorySyncPayloadType(D.syncType),
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
              mdSessionId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              historySyncStageProgress: I,
            });
            (D.chunkOrder != null && ($.historySyncChunkOrder = D.chunkOrder),
              $.commit());
            e: {
              var P = D.syncType;
              if (
                P ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP ||
                P ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_STATUS_V3 ||
                P ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
              ) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial sync received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    D,
                  ),
                ),
                  o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(D),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                P ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME
              ) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial pushname received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    D,
                  ),
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(
                    babelHelpers.extends({}, D, {
                      downloadOptions: babelHelpers.extends(
                        {},
                        D.downloadOptions,
                      ),
                    }),
                    !0,
                  ),
                  o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(D),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                P ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND
              ) {
                if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                  var N, M, w;
                  if (
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] on demand history sync received ",
                          "",
                        ])),
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(D),
                    ),
                    D.peerDataRequestSessionId == null &&
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] on demand chunk missing session id",
                          ])),
                      ),
                    !o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.has(
                      (N = D.peerDataRequestSessionId) != null ? N : "",
                    ))
                  ) {
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][rdu] drop on demand notif, timeout key=",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : D.peerDataRequestSessionId,
                    ),
                      i.endFail("on_demand_request_expired", {}));
                    return;
                  }
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] clean on demand req, received key=",
                        "",
                      ])),
                    r("gkx")("26258") ? "" : D.peerDataRequestSessionId,
                  ),
                    (D.peerDataRequestChatId = o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.get(
                      (M = D.peerDataRequestSessionId) != null ? M : "",
                    )),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.delete(
                      (w = D.peerDataRequestSessionId) != null ? w : "",
                    ),
                    yield o(
                      "WAWebApiHistorySyncNotification",
                    ).enqueueNotification(D));
                }
                break e;
              }
              {
                if (
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] recent/full chunk received, add to db: ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(D),
                  ),
                  D.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT)
                ) {
                  if (
                    T.chunkOrder != null &&
                    t.progress != null &&
                    t.progress !== 0
                  ) {
                    var A = Math.ceil(T.chunkOrder / (t.progress / 100));
                    (o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] setting estimated total chunk count: ",
                          "",
                        ])),
                      A,
                    ),
                      o(
                        "WAWebUserPrefsHistorySync",
                      ).setEstimatedChunkCountForEndOfRecentHistorySync(A));
                  }
                  if (T.oldestMsgInChunkTimestampSec != null) {
                    var F = o(
                      "WAWebUserPrefsHistorySync",
                    ).getHistorySyncEarliestDate();
                    F &&
                      T.oldestMsgInChunkTimestampSec < F &&
                      o("WAWebUserPrefsHistorySync").setHistorySyncEarliestDate(
                        T.oldestMsgInChunkTimestampSec,
                      );
                  }
                  o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                    D.syncType,
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .RECEIVED,
                    D.chunkOrder,
                  );
                  var O = D.chunkOrder != null && D.chunkOrder <= S;
                  if (O) {
                    var B = yield o(
                        "WAWebGetHistorySyncMetrics",
                      ).getHistorySyncMetrics(D, !0),
                      W = B.historySyncDownloadedMetric,
                      q = B.historySyncStartDownloadingMetric;
                    try {
                      (o(
                        "WAWebUserPrefsHistorySync",
                      ).setRecentSyncSingleChunkStatus(
                        D.syncType,
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DOWNLOADING,
                        D.chunkOrder,
                      ),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryStartDownloadingMetric(
                          q,
                          D.historySyncStepStartedTs,
                          o("WATimeUtils").unixTimeMs(),
                        ),
                        o("WALogger")
                          .LOG(
                            C ||
                              (C = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] start download on notif, ",
                                "",
                              ])),
                            o(
                              "WAWebHistorySyncLogUtils",
                            ).getHistorySyncLogDetailsString(D),
                          )
                          .tags("history-sync"));
                      var U = D.chunkOrder !== 1,
                        V = yield o(
                          "WAWebDownloadManager",
                        ).downloadManager.downloadAndMaybeDecrypt(
                          babelHelpers.extends(
                            {
                              signal: new AbortController().signal,
                              downloadQpl: i,
                            },
                            D.downloadOptions,
                            { isPreload: U },
                          ),
                        );
                      ((D.downloadedHistorySyncPayload = V),
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setRecentSyncSingleChunkStatus(
                          D.syncType,
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType.DOWNLOADED,
                          D.chunkOrder,
                        ),
                        (D.downloadOptions.mediaKey = ""),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          historySyncDownloadMetric: W,
                          isSuccess: !0,
                          startTs: D.historySyncStepStartedTs,
                        }));
                    } catch (e) {
                      if (
                        (i.endFailWithError(
                          "download_failed",
                          r("getErrorSafe")(e).message,
                        ),
                        o("WALogger").WARN(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][recent sync] history sync download failed",
                            ])),
                        ),
                        !(e instanceof o("WAWebHttpErrors").HttpNetworkError))
                      ) {
                        var H = r("WAWebMsgKey").fromString(D.msgKey);
                        (o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          failureReason: o(
                            "WAWebMdSyncDownloadFailureReason",
                          ).getMdSyncDownloadFailureReason(e),
                          historySyncDownloadMetric: W,
                          isSuccess: !1,
                          startTs: D.historySyncStepStartedTs,
                        }),
                          r("WAWebSendHistSyncServerErrorReceiptJob")(
                            H.remote,
                            H.id,
                            D.downloadOptions.mediaKey,
                          ));
                        return;
                      }
                    }
                  } else i.addPoint("history_sync_predownload_skipped");
                }
                yield o("WAWebApiHistorySyncNotification").enqueueNotification(
                  D,
                );
                break e;
              }
            }
            (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(D),
            ),
              r(
                "WAWebSyncBootstrap",
              ).continueProgressiveHistorySyncProcessingV2(
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .NewRecentSyncNotification,
              ),
              i.isActive() && i.endSuccess());
          } catch (e) {
            throw (
              i.isActive() &&
                i.endFailWithError(
                  "history_sync_notification_failed",
                  r("getErrorSafe")(e).message,
                ),
              e
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = R;
  },
  98,
);
