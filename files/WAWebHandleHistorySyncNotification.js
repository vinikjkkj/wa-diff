__d(
  "WAWebHandleHistorySyncNotification",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiHistorySyncNotification",
    "WAWebDownloadManager",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebHandleHistorySyncChunk",
    "WAWebHandleHistorySyncMessageAccessStatusChange",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHttpErrors",
    "WAWebJestE2ELogUtils",
    "WAWebMdBootstrapHistoryDataReceivedWamEvent",
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
          var i;
          if (
            (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
              "received history sync notif",
            ),
            !!t)
          ) {
            try {
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Assert get me is empty during history sync",
                    ])),
                )
                .sendLogs("Assert get me is empty during history sync");
              return;
            }
            if (!o("WAWebUserPrefsMeUser").isMePrimaryNonLid(n)) {
              if (n == null || !(n instanceof r("WAWebWid"))) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] History sync empty wid error",
                      ])),
                  )
                  .sendLogs("History sync empty wid error");
                return;
              }
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] History sync payload wid error",
                    ])),
                )
                .sendLogs("History sync payload wid error");
              return;
            }
            if (
              t.historySyncNotification.syncType ===
              o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                .MESSAGE_ACCESS_STATUS
            )
              return o(
                "WAWebHandleHistorySyncMessageAccessStatusChange",
              ).handleHistorySyncMessageAccessStatusChange(
                t.historySyncNotification,
              );
            var l = t.downloadOptions;
            if (
              l &&
              !(
                !r("gkx")("26258") &&
                o("WAWebABProps").getABPropConfigValue(
                  "web_abprop_drop_full_history_sync",
                ) &&
                t.historySyncNotification.syncType ===
                  o("WAWebProtobufsE2E.pb").Message$HistorySyncType.FULL
              )
            ) {
              var R = !!t.historySyncNotification.originalMessageId,
                L = R ? t.historySyncNotification.originalMessageId : a,
                E = new (r("WAWebMsgKey"))({
                  remote: n,
                  fromMe: !0,
                  id: L,
                }).toString(),
                k = (i = t.historySyncNotification.progress) != null ? i : 0,
                I = {
                  msgKey: E,
                  processed: 0,
                  downloadOptions: l,
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] setting total chunk count when receiving: ",
                      "",
                    ])),
                  D,
                ),
                  yield o(
                    "WAWebUserPrefsHistorySync",
                  ).setChunkCountForEndOfRecentHistorySync(D != null ? D : 1),
                  o(
                    "WAWebHistorySyncProgress",
                  ).updateHistorySyncProgressModel());
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
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ||
                  $ ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.INITIAL_STATUS_V3 ||
                  $ ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.NON_BLOCKING_DATA
                ) {
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] initial sync received ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(T),
                  ),
                    o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(T));
                  return;
                }
                if (
                  $ ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .PUSH_NAME
                ) {
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] initial pushname received ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(T),
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
                    o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(T));
                  return;
                }
                if (
                  $ ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .ON_DEMAND
                ) {
                  if (
                    o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()
                  ) {
                    var P, N, M;
                    if (
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] on demand history sync received ",
                            "",
                          ])),
                        o(
                          "WAWebHistorySyncLogUtils",
                        ).getHistorySyncLogDetailsString(T),
                      ),
                      T.peerDataRequestSessionId == null &&
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][rdu] on demand chunk missing session id",
                            ])),
                        ),
                      !o(
                        "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                      ).inFlightHistorySyncOnDemandRequests.has(
                        (P = T.peerDataRequestSessionId) != null ? P : "",
                      ))
                    ) {
                      o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] drop on demand notif, timeout key=",
                            "",
                          ])),
                        r("gkx")("26258") ? "" : T.peerDataRequestSessionId,
                      );
                      return;
                    }
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
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
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setHistorySyncEarliestDate(
                          I.oldestMsgInChunkTimestampSec,
                        );
                    }
                    o(
                      "WAWebUserPrefsHistorySync",
                    ).setRecentSyncSingleChunkStatus(
                      T.syncType,
                      o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                        .RECEIVED,
                      T.chunkOrder,
                    );
                    var F = T.chunkOrder != null && T.chunkOrder <= S;
                    if (
                      o(
                        "WAWebSyncGatingUtils",
                      ).isRecentSyncDownloadOptimizationEnabled() &&
                      F
                    ) {
                      var O = yield o(
                          "WAWebHistorySyncNotificationUtils",
                        ).getHistorySyncMetrics(T, !0),
                        B = O.historySyncDownloadedMetric,
                        W = O.historySyncStartDownloadingMetric,
                        q = o(
                          "WAWebStartMediaDownloadQpl",
                        ).startMediaDownloadQpl({
                          entryPoint: "HandleHistorySyncNotification",
                        });
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
                              C ||
                                (C = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync] start download on notif, ",
                                  "",
                                ])),
                              o(
                                "WAWebHistorySyncLogUtils",
                              ).getHistorySyncLogDetailsString(T),
                            )
                            .tags("history-sync"));
                        var U = T.chunkOrder !== 1,
                          V = yield o(
                            "WAWebDownloadManager",
                          ).downloadManager.downloadAndMaybeDecrypt(
                            babelHelpers.extends(
                              {
                                signal: new AbortController().signal,
                                downloadQpl: q,
                              },
                              T.downloadOptions,
                              { isPreload: U },
                            ),
                          );
                        ((T.downloadedHistorySyncPayload = V),
                          q.endSuccess(),
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
                          ).commitHistoryDownloadedMetric(
                            B,
                            T.historySyncStepStartedTs,
                            !0,
                            o("WATimeUtils").unixTimeMs(),
                          ));
                      } catch (e) {
                        if (
                          (q.endFailWithError(
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
                          var H = r("WAWebMsgKey").fromString(T.msgKey);
                          (o(
                            "WAWebHistorySyncNotificationUtils",
                          ).commitHistoryDownloadedMetric(
                            B,
                            T.historySyncStepStartedTs,
                            !1,
                            o("WATimeUtils").unixTimeMs(),
                          ),
                            r("WAWebSendHistSyncServerErrorReceiptJob")(
                              H.remote,
                              H.id,
                              T.downloadOptions.mediaKey,
                            ));
                          return;
                        }
                      }
                    }
                  }
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(T);
                  break e;
                }
              }
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(T),
              ),
                r(
                  "WAWebSyncBootstrap",
                ).continueProgressiveHistorySyncProcessingV2(
                  o("WAWebHistorySyncNotificationUtils")
                    .HistorySyncScheduleSource.NewRecentSyncNotification,
                ));
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = R;
  },
  98,
);
