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
          var i;
          if (
            (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
              "received history sync notif",
            ),
            !!t)
          ) {
            if (!o("WAWebUserPrefsMeUser").isMePrimary(n)) {
              if (n == null || !(n instanceof r("WAWebWid"))) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] History sync empty wid error",
                      ])),
                  )
                  .sendLogs("History sync empty wid error");
                return;
              }
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
              var S = !!t.historySyncNotification.originalMessageId,
                R = S ? t.historySyncNotification.originalMessageId : a,
                L = new (r("WAWebMsgKey"))({
                  remote: n,
                  fromMe: !0,
                  id: R,
                }).toString(),
                E = (i = t.historySyncNotification.progress) != null ? i : 0,
                k = {
                  msgKey: L,
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
                  progress: E,
                  encHandle: t.historySyncNotification.encHandle,
                };
              (!S ||
                t.historySyncNotification.syncType ===
                  o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                    .INITIAL_BOOTSTRAP) &&
                ((k.syncType = t.historySyncNotification.syncType),
                (k.chunkOrder = t.historySyncNotification.chunkOrder || 0),
                (k.isReupload = 0));
              var I = k;
              if (
                I.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .RECENT &&
                E === 100
              ) {
                var T = I.chunkOrder;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] setting total chunk count when receiving: ",
                      "",
                    ])),
                  T,
                ),
                  yield o(
                    "WAWebUserPrefsHistorySync",
                  ).setChunkCountForEndOfRecentHistorySync(T != null ? T : 1),
                  o(
                    "WAWebHistorySyncProgress",
                  ).updateHistorySyncProgressModel());
              }
              var D = new (o(
                "WAWebMdBootstrapHistoryDataReceivedWamEvent",
              ).MdBootstrapHistoryDataReceivedWamEvent)({
                mdBootstrapPayloadType:
                  I.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP
                    ? o("WAWebWamEnumMdBootstrapPayloadType")
                        .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                    : o("WAWebWamEnumMdBootstrapPayloadType")
                        .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                mdBootstrapHistoryPayloadType: o(
                  "WAWebGetMetricHistorySyncPayloadType",
                ).getMetricHistorySyncPayloadType(I.syncType),
                mdTimestamp: o("WATimeUtils").unixTimeMs(),
                mdSessionId: yield o(
                  "WAWebSyncdMdSyncFieldstatMeta",
                ).MdSyncFieldStatsMeta.getMdSessionId(),
                historySyncStageProgress: E,
              });
              (I.chunkOrder != null && (D.historySyncChunkOrder = I.chunkOrder),
                D.commit());
              e: {
                var x = I.syncType;
                if (
                  x ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ||
                  x ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.INITIAL_STATUS_V3 ||
                  x ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.NON_BLOCKING_DATA
                ) {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] initial sync received ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(I),
                  ),
                    o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(I));
                  return;
                }
                if (
                  x ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .PUSH_NAME
                ) {
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] initial pushname received ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(I),
                  ),
                    yield o(
                      "WAWebApiHistorySyncNotification",
                    ).enqueueNotification(
                      babelHelpers.extends({}, I, {
                        downloadOptions: babelHelpers.extends(
                          {},
                          I.downloadOptions,
                        ),
                      }),
                      !0,
                    ),
                    o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(I));
                  return;
                }
                if (
                  x ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .ON_DEMAND
                ) {
                  if (
                    o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()
                  ) {
                    var $, P, N;
                    if (
                      (o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] on demand history sync received ",
                            "",
                          ])),
                        o(
                          "WAWebHistorySyncLogUtils",
                        ).getHistorySyncLogDetailsString(I),
                      ),
                      I.peerDataRequestSessionId == null &&
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][rdu] on demand chunk missing session id",
                            ])),
                        ),
                      !o(
                        "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                      ).inFlightHistorySyncOnDemandRequests.has(
                        ($ = I.peerDataRequestSessionId) != null ? $ : "",
                      ))
                    ) {
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] drop on demand notif, timeout key=",
                            "",
                          ])),
                        r("gkx")("26258") ? "" : I.peerDataRequestSessionId,
                      );
                      return;
                    }
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][rdu] clean on demand req, received key=",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : I.peerDataRequestSessionId,
                    ),
                      (I.peerDataRequestChatId = o(
                        "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                      ).inFlightHistorySyncOnDemandRequests.get(
                        (P = I.peerDataRequestSessionId) != null ? P : "",
                      )),
                      o(
                        "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                      ).inFlightHistorySyncOnDemandRequests.delete(
                        (N = I.peerDataRequestSessionId) != null ? N : "",
                      ),
                      yield o(
                        "WAWebApiHistorySyncNotification",
                      ).enqueueNotification(I));
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
                      ).getHistorySyncLogDetailsString(I),
                    ),
                    I.syncType ===
                      o("WAWebProtobufsHistorySync.pb")
                        .HistorySync$HistorySyncType.RECENT)
                  ) {
                    if (
                      k.chunkOrder != null &&
                      t.progress != null &&
                      t.progress !== 0
                    ) {
                      var M = Math.ceil(k.chunkOrder / (t.progress / 100));
                      (o("WALogger").LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] setting estimated total chunk count: ",
                            "",
                          ])),
                        M,
                      ),
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setEstimatedChunkCountForEndOfRecentHistorySync(M));
                    }
                    if (k.oldestMsgInChunkTimestampSec != null) {
                      var w = o(
                        "WAWebUserPrefsHistorySync",
                      ).getHistorySyncEarliestDate();
                      w &&
                        k.oldestMsgInChunkTimestampSec < w &&
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setHistorySyncEarliestDate(
                          k.oldestMsgInChunkTimestampSec,
                        );
                    }
                    o(
                      "WAWebUserPrefsHistorySync",
                    ).setRecentSyncSingleChunkStatus(
                      I.syncType,
                      o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                        .RECEIVED,
                      I.chunkOrder,
                    );
                    var A = I.chunkOrder != null && I.chunkOrder <= v;
                    if (A) {
                      var F = yield o(
                          "WAWebGetHistorySyncMetrics",
                        ).getHistorySyncMetrics(I, !0),
                        O = F.historySyncDownloadedMetric,
                        B = F.historySyncStartDownloadingMetric,
                        W = o(
                          "WAWebStartMediaDownloadQpl",
                        ).startMediaDownloadQpl({
                          entryPoint: "HandleHistorySyncNotification",
                        });
                      try {
                        (o(
                          "WAWebUserPrefsHistorySync",
                        ).setRecentSyncSingleChunkStatus(
                          I.syncType,
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType.DOWNLOADING,
                          I.chunkOrder,
                        ),
                          o(
                            "WAWebHistorySyncNotificationUtils",
                          ).commitHistoryStartDownloadingMetric(
                            B,
                            I.historySyncStepStartedTs,
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
                              ).getHistorySyncLogDetailsString(I),
                            )
                            .tags("history-sync"));
                        var q = I.chunkOrder !== 1,
                          U = yield o(
                            "WAWebDownloadManager",
                          ).downloadManager.downloadAndMaybeDecrypt(
                            babelHelpers.extends(
                              {
                                signal: new AbortController().signal,
                                downloadQpl: W,
                              },
                              I.downloadOptions,
                              { isPreload: q },
                            ),
                          );
                        ((I.downloadedHistorySyncPayload = U),
                          W.endSuccess(),
                          o(
                            "WAWebUserPrefsHistorySync",
                          ).setRecentSyncSingleChunkStatus(
                            I.syncType,
                            o("WAWebUserPrefsTypes")
                              .HistorySyncSingleChunkStatusType.DOWNLOADED,
                            I.chunkOrder,
                          ),
                          (I.downloadOptions.mediaKey = ""),
                          o(
                            "WAWebHistorySyncNotificationUtils",
                          ).commitHistoryDownloadedMetric({
                            chunkDownloadFinishTimestamp:
                              o("WATimeUtils").unixTimeMs(),
                            historySyncDownloadMetric: O,
                            isSuccess: !0,
                            startTs: I.historySyncStepStartedTs,
                          }));
                      } catch (e) {
                        if (
                          (W.endFailWithError(
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
                          var V = r("WAWebMsgKey").fromString(I.msgKey);
                          (o(
                            "WAWebHistorySyncNotificationUtils",
                          ).commitHistoryDownloadedMetric({
                            chunkDownloadFinishTimestamp:
                              o("WATimeUtils").unixTimeMs(),
                            failureReason: o(
                              "WAWebMdSyncDownloadFailureReason",
                            ).getMdSyncDownloadFailureReason(e),
                            historySyncDownloadMetric: O,
                            isSuccess: !1,
                            startTs: I.historySyncStepStartedTs,
                          }),
                            r("WAWebSendHistSyncServerErrorReceiptJob")(
                              V.remote,
                              V.id,
                              I.downloadOptions.mediaKey,
                            ));
                          return;
                        }
                      }
                    }
                  }
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(I);
                  break e;
                }
              }
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(I),
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
        R.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = S;
  },
  98,
);
