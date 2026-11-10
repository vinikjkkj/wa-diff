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
    "cr:19090",
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
      L,
      E = r("requireDeferred")("WAWebHandleHistorySyncChunk").__setRef(
        "WAWebHandleHistorySyncNotification",
      ),
      k = (e = n("cr:19090")) != null ? e : {},
      I = k.isOmittedHistorySyncOnDemandSupported,
      T = 11;
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "HandleHistorySyncNotification",
          });
          try {
            var i;
            if (
              (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                "received history sync notif",
              ),
              !e)
            ) {
              a.endFail("missing_history_sync_metadata", {
                string: { earlyExitReason: "missing_history_sync_metadata" },
              });
              return;
            }
            if (!o("WAWebUserPrefsMeUser").isMePrimary(t)) {
              if (t == null || !(t instanceof r("WAWebWid"))) {
                (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] History sync empty wid error",
                      ])),
                  )
                  .sendLogs("History sync empty wid error"),
                  a.endFail("invalid_sender", {
                    string: { earlyExitReason: "invalid_sender" },
                  }));
                return;
              }
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] History sync payload wid error",
                    ])),
                )
                .sendLogs("History sync payload wid error"),
                a.endFail("non_primary_sender", {
                  string: { earlyExitReason: "non_primary_sender" },
                }));
              return;
            }
            if (
              e.historySyncNotification.syncType ===
              o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                .MESSAGE_ACCESS_STATUS
            )
              return (
                a.addPoint("history_sync_message_access_status"),
                o(
                  "WAWebHandleHistorySyncMessageAccessStatusChange",
                ).handleHistorySyncMessageAccessStatusChange(
                  e.historySyncNotification,
                )
              );
            var l = e.downloadOptions;
            if (!l) {
              a.endFail("missing_download_options", {
                string: { earlyExitReason: "missing_download_options" },
              });
              return;
            }
            if (
              !r("gkx")("26258") &&
              o("WAWebABProps").getABPropConfigValue(
                "web_abprop_drop_full_history_sync",
              ) &&
              e.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType.FULL
            ) {
              a.endFail("full_history_sync_dropped", {
                string: { earlyExitReason: "full_history_sync_dropped" },
              });
              return;
            }
            var k = !!e.historySyncNotification.originalMessageId,
              D = k ? e.historySyncNotification.originalMessageId : n,
              x = new (r("WAWebMsgKey"))({
                remote: t,
                fromMe: !0,
                id: D,
              }).toString(),
              $ = (i = e.historySyncNotification.progress) != null ? i : 0,
              P = {
                msgKey: x,
                processed: 0,
                downloadOptions: l,
                isReupload: 1,
                historySyncStepStartedTs: o("WATimeUtils").unixTimeMs(),
                reuploadPending: !1,
                historySyncPayloadSize: e.historySyncNotification.fileLength,
                oldestMsgInChunkTimestampSec:
                  e.historySyncNotification.oldestMsgInChunkTimestampSec,
                initialHistBootstrapInlinePayload:
                  e.historySyncNotification.initialHistBootstrapInlinePayload,
                peerDataRequestSessionId:
                  e.historySyncNotification.peerDataRequestSessionId,
                progress: $,
                encHandle: e.historySyncNotification.encHandle,
              };
            (!k ||
              e.historySyncNotification.syncType ===
                o("WAWebProtobufsE2E.pb").Message$HistorySyncType
                  .INITIAL_BOOTSTRAP) &&
              ((P.syncType = e.historySyncNotification.syncType),
              (P.chunkOrder = e.historySyncNotification.chunkOrder || 0),
              (P.isReupload = 0));
            var N = P;
            if (
              (N.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP &&
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] notification accepted, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(N),
                  )
                  .tags("history-sync"),
              N.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT && $ === 100)
            ) {
              var M = N.chunkOrder;
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] setting total chunk count when receiving: ",
                    "",
                  ])),
                M,
              ),
                yield o(
                  "WAWebUserPrefsHistorySync",
                ).setChunkCountForEndOfRecentHistorySync(M != null ? M : 1),
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel());
            }
            var w = new (o(
              "WAWebMdBootstrapHistoryDataReceivedWamEvent",
            ).MdBootstrapHistoryDataReceivedWamEvent)({
              mdBootstrapPayloadType:
                N.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP
                  ? o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                  : o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
              mdBootstrapHistoryPayloadType: o(
                "WAWebGetMetricHistorySyncPayloadType",
              ).getMetricHistorySyncPayloadType(N.syncType),
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
              mdSessionId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              historySyncStageProgress: $,
            });
            (N.chunkOrder != null && (w.historySyncChunkOrder = N.chunkOrder),
              w.commit());
            e: {
              var A = N.syncType;
              if (
                A ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP ||
                A ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_STATUS_V3 ||
                A ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
              ) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial sync received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    N,
                  ),
                ),
                  E.load().then(
                    function (e) {
                      var t = e.handleHistorySyncChunk;
                      return t(N);
                    },
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] deferred chunk handler load failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    },
                  ),
                  a.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                A ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME
              ) {
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] initial pushname received ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    N,
                  ),
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).enqueueNotification(
                    babelHelpers.extends({}, N, {
                      downloadOptions: babelHelpers.extends(
                        {},
                        N.downloadOptions,
                      ),
                    }),
                    !0,
                  ),
                  E.load().then(
                    function (e) {
                      var t = e.handleHistorySyncChunk;
                      return t(N);
                    },
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] deferred chunk handler load failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    },
                  ),
                  a.addPoint("history_sync_chunk_dispatched"));
                return;
              }
              if (
                A ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND
              ) {
                if (
                  o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() ||
                  (I == null ? void 0 : I()) === !0
                ) {
                  var F, O, B;
                  if (
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] on demand history sync received ",
                          "",
                        ])),
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(N),
                    ),
                    N.peerDataRequestSessionId == null &&
                      o("WALogger").LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][rdu] on demand chunk missing session id",
                          ])),
                      ),
                    !o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.has(
                      (F = N.peerDataRequestSessionId) != null ? F : "",
                    ))
                  ) {
                    (o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][rdu] drop on demand notif, timeout key=",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : N.peerDataRequestSessionId,
                    ),
                      a.endFail("on_demand_request_expired", {}));
                    return;
                  }
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] clean on demand req, received key=",
                        "",
                      ])),
                    r("gkx")("26258") ? "" : N.peerDataRequestSessionId,
                  ),
                    (N.peerDataRequestChatId = o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.get(
                      (O = N.peerDataRequestSessionId) != null ? O : "",
                    )),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).inFlightHistorySyncOnDemandRequests.delete(
                      (B = N.peerDataRequestSessionId) != null ? B : "",
                    ),
                    yield o(
                      "WAWebApiHistorySyncNotification",
                    ).enqueueNotification(N));
                }
                break e;
              }
              {
                if (
                  (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] recent/full chunk received, add to db: ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(N),
                  ),
                  N.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT)
                ) {
                  if (
                    P.chunkOrder != null &&
                    e.progress != null &&
                    e.progress !== 0
                  ) {
                    var W = Math.ceil(P.chunkOrder / (e.progress / 100));
                    (o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] setting estimated total chunk count: ",
                          "",
                        ])),
                      W,
                    ),
                      o(
                        "WAWebUserPrefsHistorySync",
                      ).setEstimatedChunkCountForEndOfRecentHistorySync(W));
                  }
                  if (P.oldestMsgInChunkTimestampSec != null) {
                    var q = o(
                      "WAWebUserPrefsHistorySync",
                    ).getHistorySyncEarliestDate();
                    q &&
                      P.oldestMsgInChunkTimestampSec < q &&
                      o("WAWebUserPrefsHistorySync").setHistorySyncEarliestDate(
                        P.oldestMsgInChunkTimestampSec,
                      );
                  }
                  o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                    N.syncType,
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .RECEIVED,
                    N.chunkOrder,
                  );
                  var U = o(
                      "WAWebHistorySyncNotificationUtils",
                    ).maybeGetInlinePayload(N),
                    V = U == null && N.chunkOrder != null && N.chunkOrder <= T;
                  if (V) {
                    var H = yield o(
                        "WAWebGetHistorySyncMetrics",
                      ).getHistorySyncMetrics(N, !0),
                      G = H.historySyncDownloadedMetric,
                      z = H.historySyncStartDownloadingMetric;
                    try {
                      (o(
                        "WAWebUserPrefsHistorySync",
                      ).setRecentSyncSingleChunkStatus(
                        N.syncType,
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DOWNLOADING,
                        N.chunkOrder,
                      ),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryStartDownloadingMetric(
                          z,
                          N.historySyncStepStartedTs,
                          o("WATimeUtils").unixTimeMs(),
                        ),
                        o("WALogger")
                          .LOG(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] start download on notif, ",
                                "",
                              ])),
                            o(
                              "WAWebHistorySyncLogUtils",
                            ).getHistorySyncLogDetailsString(N),
                          )
                          .tags("history-sync"));
                      var j = N.chunkOrder !== 1,
                        K = yield o(
                          "WAWebDownloadManager",
                        ).downloadManager.downloadAndMaybeDecrypt(
                          babelHelpers.extends(
                            {
                              signal: new AbortController().signal,
                              downloadQpl: a,
                            },
                            N.downloadOptions,
                            { isPreload: j },
                          ),
                        );
                      ((N.downloadedHistorySyncPayload = K),
                        o(
                          "WAWebUserPrefsHistorySync",
                        ).setRecentSyncSingleChunkStatus(
                          N.syncType,
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType.DOWNLOADED,
                          N.chunkOrder,
                        ),
                        (N.downloadOptions.mediaKey = ""),
                        o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          historySyncDownloadMetric: G,
                          isSuccess: !0,
                          startTs: N.historySyncStepStartedTs,
                        }));
                    } catch (e) {
                      if (
                        (a.endFailWithError(
                          "download_failed",
                          r("getErrorSafe")(e).message,
                        ),
                        o("WALogger").WARN(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync][recent sync] history sync download failed",
                            ])),
                        ),
                        !(e instanceof o("WAWebHttpErrors").HttpNetworkError))
                      ) {
                        var Q = r("WAWebMsgKey").fromString(N.msgKey);
                        (o(
                          "WAWebHistorySyncNotificationUtils",
                        ).commitHistoryDownloadedMetric({
                          chunkDownloadFinishTimestamp:
                            o("WATimeUtils").unixTimeMs(),
                          failureReason: o(
                            "WAWebMdSyncDownloadFailureReason",
                          ).getMdSyncDownloadFailureReason(e),
                          historySyncDownloadMetric: G,
                          isSuccess: !1,
                          startTs: N.historySyncStepStartedTs,
                        }),
                          r("WAWebSendHistSyncServerErrorReceiptJob")(
                            Q.remote,
                            Q.id,
                            N.downloadOptions.mediaKey,
                          ));
                        return;
                      }
                    }
                  } else
                    U == null && a.addPoint("history_sync_predownload_skipped");
                }
                yield o("WAWebApiHistorySyncNotification").enqueueNotification(
                  N,
                );
                break e;
              }
            }
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] continueProgressiveHistorySyncProcessingV2 ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(N),
            ),
              r(
                "WAWebSyncBootstrap",
              ).continueProgressiveHistorySyncProcessingV2(
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .NewRecentSyncNotification,
              ),
              a.isActive() && a.endSuccess());
          } catch (e) {
            throw (
              a.isActive() &&
                a.endFailWithError(
                  "history_sync_notification_failed",
                  r("getErrorSafe")(e).message,
                ),
              e
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    l.handleHistorySyncNotification = D;
  },
  98,
);
