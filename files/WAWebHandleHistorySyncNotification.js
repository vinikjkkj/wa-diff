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
      L = r("requireDeferred")("WAWebHandleHistorySyncChunk").__setRef(
        "WAWebHandleHistorySyncNotification",
      ),
      E = 11;
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
            var k = t.downloadOptions;
            if (!k) {
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
            var I = !!t.historySyncNotification.originalMessageId,
              T = I ? t.historySyncNotification.originalMessageId : a,
              D = new (r("WAWebMsgKey"))({
                remote: n,
                fromMe: !0,
                id: T,
              }).toString(),
              x = (l = t.historySyncNotification.progress) != null ? l : 0,
              $ = {
                msgKey: D,
                processed: 0,
                downloadOptions: k,
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
                progress: x,
                encHandle: t.historySyncNotification.encHandle,
              };
            (!I ||
              t.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                  .INITIAL_BOOTSTRAP) &&
              (($.syncType = t.historySyncNotification.syncType),
              ($.chunkOrder = t.historySyncNotification.chunkOrder || 0),
              ($.isReupload = 0));
            var P = $;
            if (
              (P.syncType ===
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
                    ).getHistorySyncLogDetailsString(P),
                  )
                  .tags("history-sync"),
              P.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT && x === 100)
            ) {
              var N = P.chunkOrder;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] setting total chunk count when receiving: ",
                    "",
                  ])),
                N,
              ),
                yield o(
                  "WAWebUserPrefsHistorySync",
                ).setChunkCountForEndOfRecentHistorySync(N != null ? N : 1),
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel());
            }
            var M = new (o(
              "WAWebMdBootstrapHistoryDataReceivedWamEvent",
            ).MdBootstrapHistoryDataReceivedWamEvent)({
              mdBootstrapPayloadType:
                P.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP
                  ? o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                  : o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
              mdBootstrapHistoryPayloadType: o(
                "WAWebGetMetricHistorySyncPayloadType",
              ).getMetricHistorySyncPayloadType(P.syncType),
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
              mdSessionId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              historySyncStageProgress: x,
            });
            (P.chunkOrder != null && (M.historySyncChunkOrder = P.chunkOrder),
              M.commit());
            e: {
              var w = P.syncType;
              if (
                w ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP ||
                w ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_STATUS_V3 ||
                w ===
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
                    P,
                  ),
                ),
                  L.load().then(
                    function (e) {
                      var t = e.handleHistorySyncChunk;
                      return t(P);
                    },
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] deferred chunk handler load failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    },
                  ),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                w ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME
              ) {
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial pushname received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    P,
                  ),
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(
                    babelHelpers.extends({}, P, {
                      downloadOptions: babelHelpers.extends(
                        {},
                        P.downloadOptions,
                      ),
                    }),
                    !0,
                  ),
                  L.load().then(
                    function (e) {
                      var t = e.handleHistorySyncChunk;
                      return t(P);
                    },
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] deferred chunk handler load failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    },
                  ),
                  i.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                w ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND
              ) {
                if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()) {
                  var A, F, O;
                  if (
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] on demand history sync received ",
                          "",
                        ])),
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(P),
                    ),
                    P.peerDataRequestSessionId == null &&
                      o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] on demand chunk missing session id",
                          ])),
                      ),
                    !o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.has(
                      (A = P.peerDataRequestSessionId) != null ? A : "",
                    ))
                  ) {
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][rdu] drop on demand notif, timeout key=",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : P.peerDataRequestSessionId,
                    ),
                      i.endFail("on_demand_request_expired", {}));
                    return;
                  }
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] clean on demand req, received key=",
                        "",
                      ])),
                    r("gkx")("26258") ? "" : P.peerDataRequestSessionId,
                  ),
                    (P.peerDataRequestChatId = o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.get(
                      (F = P.peerDataRequestSessionId) != null ? F : "",
                    )),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.delete(
                      (O = P.peerDataRequestSessionId) != null ? O : "",
                    ),
                    yield o(
                      "WAWebApiHistorySyncNotification",
                    ).enqueueNotification(P));
                }
                break e;
              }
              {
                if (
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] recent/full chunk received, add to db: ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(P),
                  ),
                  P.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT)
                ) {
                  if (
                    $.chunkOrder != null &&
                    t.progress != null &&
                    t.progress !== 0
                  ) {
                    var B = Math.ceil($.chunkOrder / (t.progress / 100));
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] setting estimated total chunk count: ",
                          "",
                        ])),
                      B,
                    ),
                      o(
                        "WAWebUserPrefsHistorySync",
                      ).setEstimatedChunkCountForEndOfRecentHistorySync(B));
                  }
                  if ($.oldestMsgInChunkTimestampSec != null) {
                    var W = o(
                      "WAWebUserPrefsHistorySync",
                    ).getHistorySyncEarliestDate();
                    W &&
                      $.oldestMsgInChunkTimestampSec < W &&
                      o("WAWebUserPrefsHistorySync").setHistorySyncEarliestDate(
                        $.oldestMsgInChunkTimestampSec,
                      );
                  }
                  o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                    P.syncType,
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .RECEIVED,
                    P.chunkOrder,
                  );
                  var q = P.chunkOrder != null && P.chunkOrder <= E;
                  if (q) {
                    var U = yield o(
                        "WAWebGetHistorySyncMetrics",
                      ).getHistorySyncMetrics(P, !0),
                      V = U.historySyncDownloadedMetric,
                      H = U.historySyncStartDownloadingMetric;
                    try {
                      (o(
                        "WAWebUserPrefsHistorySync",
                      ).setRecentSyncSingleChunkStatus(
                        P.syncType,
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DOWNLOADING,
                        P.chunkOrder,
                      ),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryStartDownloadingMetric(
                          H,
                          P.historySyncStepStartedTs,
                          o("WATimeUtils").unixTimeMs(),
                        ),
                        o("WALogger")
                          .LOG(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] start download on notif, ",
                                "",
                              ])),
                            o(
                              "WAWebHistorySyncLogUtils",
                            ).getHistorySyncLogDetailsString(P),
                          )
                          .tags("history-sync"));
                      var G = P.chunkOrder !== 1,
                        z = yield o(
                          "WAWebDownloadManager",
                        ).downloadManager.downloadAndMaybeDecrypt(
                          babelHelpers.extends(
                            {
                              signal: new AbortController().signal,
                              downloadQpl: i,
                            },
                            P.downloadOptions,
                            { isPreload: G },
                          ),
                        );
                      ((P.downloadedHistorySyncPayload = z),
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setRecentSyncSingleChunkStatus(
                          P.syncType,
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType.DOWNLOADED,
                          P.chunkOrder,
                        ),
                        (P.downloadOptions.mediaKey = ""),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          historySyncDownloadMetric: V,
                          isSuccess: !0,
                          startTs: P.historySyncStepStartedTs,
                        }));
                    } catch (e) {
                      if (
                        (i.endFailWithError(
                          "download_failed",
                          r("getErrorSafe")(e).message,
                        ),
                        o("WALogger").WARN(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][recent sync] history sync download failed",
                            ])),
                        ),
                        !(e instanceof o("WAWebHttpErrors").HttpNetworkError))
                      ) {
                        var j = r("WAWebMsgKey").fromString(P.msgKey);
                        (o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          failureReason: o(
                            "WAWebMdSyncDownloadFailureReason",
                          ).getMdSyncDownloadFailureReason(e),
                          historySyncDownloadMetric: V,
                          isSuccess: !1,
                          startTs: P.historySyncStepStartedTs,
                        }),
                          r("WAWebSendHistSyncServerErrorReceiptJob")(
                            j.remote,
                            j.id,
                            P.downloadOptions.mediaKey,
                          ));
                        return;
                      }
                    }
                  } else i.addPoint("history_sync_predownload_skipped");
                }
                yield o("WAWebApiHistorySyncNotification").enqueueNotification(
                  P,
                );
                break e;
              }
            }
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(P),
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
        I.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = k;
  },
  98,
);
