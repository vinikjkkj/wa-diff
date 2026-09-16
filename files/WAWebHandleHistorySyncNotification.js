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
      v = 11;
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
            var S = t.downloadOptions;
            if (!S) {
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
            var R = !!t.historySyncNotification.originalMessageId,
              L = R ? t.historySyncNotification.originalMessageId : a,
              E = new (r("WAWebMsgKey"))({
                remote: n,
                fromMe: !0,
                id: L,
              }).toString(),
              k = (l = t.historySyncNotification.progress) != null ? l : 0,
              I = {
                msgKey: E,
                processed: 0,
                downloadOptions: S,
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
                progress: k,
                encHandle: t.historySyncNotification.encHandle,
              };
            (!R ||
              t.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                  .INITIAL_BOOTSTRAP) &&
              ((I.syncType = t.historySyncNotification.syncType),
              (I.chunkOrder = t.historySyncNotification.chunkOrder || 0),
              (I.isReupload = 0));
            var T = I;
            if (
              T.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT &&
              k === 100
            ) {
              var D = T.chunkOrder;
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] setting total chunk count when receiving: ",
                    "",
                  ])),
                D,
              ),
                yield o(
                  "WAWebUserPrefsHistorySync",
                ).setChunkCountForEndOfRecentHistorySync(D != null ? D : 1),
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel());
            }
            var x = new (o(
              "WAWebMdBootstrapHistoryDataReceivedWamEvent",
            ).MdBootstrapHistoryDataReceivedWamEvent)({
              mdBootstrapPayloadType:
                T.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP
                  ? o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                  : o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
              mdBootstrapHistoryPayloadType: o(
                "WAWebGetMetricHistorySyncPayloadType",
              ).getMetricHistorySyncPayloadType(T.syncType),
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
              mdSessionId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              historySyncStageProgress: k,
            });
            (T.chunkOrder != null && (x.historySyncChunkOrder = T.chunkOrder),
              x.commit());
            e: {
              var $ = T.syncType;
              if (
                $ ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP ||
                $ ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_STATUS_V3 ||
                $ ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
              ) {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial sync received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    T,
                  ),
                ),
                  o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(T),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                $ ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME
              ) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial pushname received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    T,
                  ),
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(
                    babelHelpers.extends({}, T, {
                      downloadOptions: babelHelpers.extends(
                        {},
                        T.downloadOptions,
                      ),
                    }),
                    !0,
                  ),
                  o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(T),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                $ ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND
              ) {
                if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                  var P, N, M;
                  if (
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] on demand history sync received ",
                          "",
                        ])),
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(T),
                    ),
                    T.peerDataRequestSessionId == null &&
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] on demand chunk missing session id",
                          ])),
                      ),
                    !o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.has(
                      (P = T.peerDataRequestSessionId) != null ? P : "",
                    ))
                  ) {
                    (o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][rdu] drop on demand notif, timeout key=",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : T.peerDataRequestSessionId,
                    ),
                      i.endFail("on_demand_request_expired", {}));
                    return;
                  }
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] clean on demand req, received key=",
                        "",
                      ])),
                    r("gkx")("26258") ? "" : T.peerDataRequestSessionId,
                  ),
                    (T.peerDataRequestChatId = o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.get(
                      (N = T.peerDataRequestSessionId) != null ? N : "",
                    )),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.delete(
                      (M = T.peerDataRequestSessionId) != null ? M : "",
                    ),
                    yield o(
                      "WAWebApiHistorySyncNotification",
                    ).enqueueNotification(T));
                }
                break e;
              }
              {
                if (
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] recent/full chunk received, add to db: ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(T),
                  ),
                  T.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT)
                ) {
                  if (
                    I.chunkOrder != null &&
                    t.progress != null &&
                    t.progress !== 0
                  ) {
                    var w = Math.ceil(I.chunkOrder / (t.progress / 100));
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] setting estimated total chunk count: ",
                          "",
                        ])),
                      w,
                    ),
                      o(
                        "WAWebUserPrefsHistorySync",
                      ).setEstimatedChunkCountForEndOfRecentHistorySync(w));
                  }
                  if (I.oldestMsgInChunkTimestampSec != null) {
                    var A = o(
                      "WAWebUserPrefsHistorySync",
                    ).getHistorySyncEarliestDate();
                    A &&
                      I.oldestMsgInChunkTimestampSec < A &&
                      o("WAWebUserPrefsHistorySync").setHistorySyncEarliestDate(
                        I.oldestMsgInChunkTimestampSec,
                      );
                  }
                  o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                    T.syncType,
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .RECEIVED,
                    T.chunkOrder,
                  );
                  var F = T.chunkOrder != null && T.chunkOrder <= v;
                  if (F) {
                    var O = yield o(
                        "WAWebGetHistorySyncMetrics",
                      ).getHistorySyncMetrics(T, !0),
                      B = O.historySyncDownloadedMetric,
                      W = O.historySyncStartDownloadingMetric;
                    try {
                      (o(
                        "WAWebUserPrefsHistorySync",
                      ).setRecentSyncSingleChunkStatus(
                        T.syncType,
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DOWNLOADING,
                        T.chunkOrder,
                      ),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryStartDownloadingMetric(
                          W,
                          T.historySyncStepStartedTs,
                          o("WATimeUtils").unixTimeMs(),
                        ),
                        o("WALogger")
                          .LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] start download on notif, ",
                                "",
                              ])),
                            o(
                              "WAWebHistorySyncLogUtils",
                            ).getHistorySyncLogDetailsString(T),
                          )
                          .tags("history-sync"));
                      var q = T.chunkOrder !== 1,
                        U = yield o(
                          "WAWebDownloadManager",
                        ).downloadManager.downloadAndMaybeDecrypt(
                          babelHelpers.extends(
                            {
                              signal: new AbortController().signal,
                              downloadQpl: i,
                            },
                            T.downloadOptions,
                            { isPreload: q },
                          ),
                        );
                      ((T.downloadedHistorySyncPayload = U),
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setRecentSyncSingleChunkStatus(
                          T.syncType,
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType.DOWNLOADED,
                          T.chunkOrder,
                        ),
                        (T.downloadOptions.mediaKey = ""),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          historySyncDownloadMetric: B,
                          isSuccess: !0,
                          startTs: T.historySyncStepStartedTs,
                        }));
                    } catch (e) {
                      if (
                        (i.endFailWithError(
                          "download_failed",
                          r("getErrorSafe")(e).message,
                        ),
                        o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][recent sync] history sync download failed",
                            ])),
                        ),
                        !(e instanceof o("WAWebHttpErrors").HttpNetworkError))
                      ) {
                        var V = r("WAWebMsgKey").fromString(T.msgKey);
                        (o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          failureReason: o(
                            "WAWebMdSyncDownloadFailureReason",
                          ).getMdSyncDownloadFailureReason(e),
                          historySyncDownloadMetric: B,
                          isSuccess: !1,
                          startTs: T.historySyncStepStartedTs,
                        }),
                          r("WAWebSendHistSyncServerErrorReceiptJob")(
                            V.remote,
                            V.id,
                            T.downloadOptions.mediaKey,
                          ));
                        return;
                      }
                    }
                  } else i.addPoint("history_sync_predownload_skipped");
                }
                yield o("WAWebApiHistorySyncNotification").enqueueNotification(
                  T,
                );
                break e;
              }
            }
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(T),
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
        R.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = S;
  },
  98,
);
