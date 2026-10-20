__d(
  "WAWebHandleHistorySyncChunk",
  [
    "Promise",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiChatBulkGetByHistory",
    "WAWebApiChatCommon",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebChatConstants",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBMessageUtils",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistoryMsgHandlerAction",
    "WAWebHistorySyncDynamicThrottlingManager",
    "WAWebHistorySyncHandlePushname",
    "WAWebHistorySyncHandleStatusMessages",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebHttpErrors",
    "WAWebLimitSharingProtoUtils",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMessageAssociation.flow",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebNetworkStatus",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSetUsernameJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateLidMetadataApi",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "isEmptyObject",
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
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X = 10;
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a =
              t != null
                ? t
                : {
                    qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                      entryPoint: "HandleHistorySyncChunk",
                    }),
                    initialChunkRetryCount: 0,
                  },
            i = a.initialChunkRetryCount,
            l = a.qpl;
          i === 1 && l.addAnnotations({ bool: { hasRetry: !0 } });
          try {
            if (
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleHistorySyncChunk started for ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync"),
              e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP)
            ) {
              var U = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              if (U === !0) {
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Skip duplicate initial sync chunk ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                  l.endSuccess({
                    string: { downloadResult: "duplicate_initial_sync_chunk" },
                  }));
                return;
              }
              yield o(
                "WAWebHistorySyncLidChatGating",
              ).persistForceHistoryLidChatSetting();
            }
            if (
              (o(
                "WAWebMetricsAttributionActions",
              ).startHistorySyncAttributionTracking(e.syncType),
              e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3)
            )
              try {
                var V = r("WAWebMsgKey").fromString(e.msgKey);
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: V.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: new Map().set(V.remote, [V.id]),
                });
              } catch (e) {
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Status receipt send failed",
                      ])),
                  )
                  .tags("history-sync");
              }
            var H = yield o(
                "WAWebGetHistorySyncProgress",
              ).getHistorySyncProgress(e),
              G = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(
                e,
              ),
              z = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
                e,
                G == null,
              ),
              j = z.historySyncDataAppliedMetric,
              K = z.historySyncDownloadedMetric,
              J = z.historySyncStartDownloadingMetric;
            (e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP &&
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][initial bootstrap] download started, ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync"),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .DOWNLOADING,
                e.chunkOrder,
              ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryStartDownloadingMetric(
                J,
                e.historySyncStepStartedTs,
                o("WATimeUtils").unixTimeMs(),
              ));
            var ne = null;
            if (G != null)
              (l.addPoint("history_sync_inline_payload"),
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] get inline payload in chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                (ne = G));
            else
              try {
                (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] start downloading chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                  (ne = yield o(
                    "WAWebDownloadManager",
                  ).downloadManager.downloadAndMaybeDecrypt(
                    babelHelpers.extends(
                      { signal: new AbortController().signal, downloadQpl: l },
                      e.downloadOptions,
                    ),
                  )));
              } catch (t) {
                if (
                  (o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] history sync download failed",
                      ])),
                  ),
                  o(
                    "WAWebMetricsAttributionActions",
                  ).stopHistorySyncAttributionTracking(e.syncType),
                  t instanceof o("WAWebHttpErrors").HttpNetworkError)
                ) {
                  if (
                    e.syncType ===
                      o("WAWebProtobufsHistorySync.pb")
                        .HistorySync$HistorySyncType.INITIAL_BOOTSTRAP &&
                    i < X
                  )
                    return (
                      yield r("WAWebNetworkStatus").waitIfOffline(),
                      o("WALogger")
                        .WARN(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] init sync download failed, retrying",
                            ])),
                        )
                        .tags("history-sync"),
                      Y(e, { qpl: l, initialChunkRetryCount: i + 1 })
                    );
                  (l.endFailWithError(
                    "download_failed",
                    r("getErrorSafe")(t).message,
                  ),
                    o(
                      "WAWebApiHistorySyncNotification",
                    ).removeLocalFailureFromInFlightChunk(e.msgKey));
                  return;
                }
                l.endFailWithError(
                  "download_failed",
                  r("getErrorSafe")(t).message,
                );
                var re = r("WAWebMsgKey").fromString(e.msgKey);
                if (
                  (o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDownloadedMetric({
                    chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                    failureReason: o(
                      "WAWebMdSyncDownloadFailureReason",
                    ).getMdSyncDownloadFailureReason(t),
                    historySyncDownloadMetric: K,
                    isSuccess: !1,
                    startTs: e.historySyncStepStartedTs,
                  }),
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND)
                ) {
                  var oe, ae;
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] on-demand chunk download failed",
                      ])),
                  ),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).handleHistorySyncOnDemandFailure(
                      (oe = e.peerDataRequestChatId) != null ? oe : "",
                    ),
                    o(
                      "WAWebNonMessageDataRequestLoggingUtils",
                    ).logHistorySyncOnDemandResponse(
                      o("WAWebWamEnumPeerDataResponseApplyResultType")
                        .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                      (ae = e.peerDataRequestSessionId) != null ? ae : "",
                    ));
                }
                (r("WAWebSendHistSyncServerErrorReceiptJob")(
                  re.remote,
                  re.id,
                  e.downloadOptions.mediaKey,
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).markChunkForReuploadPending(e.msgKey));
                return;
              }
            (e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP &&
              o("WALogger")
                .LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][initial bootstrap] download completed, ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync"),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .DOWNLOADED,
                e.chunkOrder,
              ),
              (e.downloadOptions.mediaKey = ""),
              (K.mdBootstrapStepResult = o(
                "WAWebWamEnumMdBootstrapStepResult",
              ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
            var ie = new (o("WABinary").Binary)(ne),
              le = yield o("WAGzip").inflate(ie.readByteArrayView());
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            );
            var se = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              le,
            );
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            ),
              e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP &&
                o("WALogger")
                  .LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] protobuf decoded, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(
                      e,
                      void 0,
                      se.conversations.length,
                    ),
                  )
                  .tags("history-sync"),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings start, ",
                    ", cnt=",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  void 0,
                ),
                se.phoneNumberToLidMappings.length,
              ));
            var ue = [];
            se.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                ue.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            });
            var ce = {
              mappings: ue,
              flushImmediately: !0,
              learningSource: "history-sync-chunk",
            };
            (e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
              ? yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(ce)
              : yield o(
                  "WAWebDBCreateLidPnMappings",
                ).createLidPnMappingsInBatches(ce),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings done, ",
                    ", cnt=",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  void 0,
                ),
                ue.length,
              ));
            var de = o(
              "WAWebHistorySyncNotificationCommonUtils",
            ).getLidMappingAsStringSet(ue);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "completed learning lid mappings for history sync. count: ",
                      ". ",
                      "...",
                    ])),
                  de == null ? void 0 : de.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(de),
                )
                .verbose();
            var me = new Map();
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              e.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
              e.chunkOrder,
            ),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] chunk downloaded, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  se.conversations.length,
                ),
              ));
            var pe = o("WATimeUtils").unixTimeMs();
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
              e.chunkOrder != null &&
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
            var _e = function (n) {
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: j,
                startTs: e.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: n,
              });
            };
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
            se.statusV3Messages &&
            se.statusV3Messages.length > 0
              ? yield o("WAWebHistorySyncHandleStatusMessages")
                  .handleStatusMessages({
                    chunkDownloadFinishTimestamp: pe,
                    chunkInfo: e,
                    historySyncDataAppliedMetric: j,
                    historySyncDownloadMetric: K,
                    proto: se,
                  })
                  .catch(function (e) {
                    throw (
                      o("WALogger")
                        .LOG(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] storing status messages failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e)),
                      _e(String(e)),
                      e
                    );
                  })
              : e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
                ? yield o("WAWebHistoryMsgHandlerAction")
                    .handleNonBlockingData({
                      chunkDownloadFinishTimestamp: pe,
                      chunkInfo: e,
                      historySyncDataAppliedMetric: j,
                      historySyncDownloadMetric: K,
                      proto: se,
                    })
                    .catch(function (e) {
                      throw (
                        o("WALogger")
                          .LOG(
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] storing non blocking data failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e)),
                        _e(String(e)),
                        e
                      );
                    })
                : e.syncType !==
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.PUSH_NAME &&
                  (se.conversations = se.conversations.reduce(function (e, t) {
                    var n = null;
                    try {
                      n = o("WAWebWidFactory").createWid(t.id);
                    } catch (e) {
                      o("WALogger")
                        .WARN(
                          E ||
                            (E = babelHelpers.taggedTemplateLiteralLoose([
                              '[history sync] wid creation failed "',
                              '": ',
                              "",
                            ])),
                          t.id,
                          e,
                        )
                        .tags("history-sync");
                    }
                    return n ? e.concat(t) : e;
                  }, []));
            var fe = [],
              ge = [],
              he = [];
            if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
            )
              yield o("WAWebHistoryMsgHandlerAction")
                .handleInitialSyncMsgs({
                  chunkDownloadFinishTimestamp: pe,
                  chunkInfo: e,
                  historyLidPnMappings: ue,
                  historySyncDataAppliedMetric: j,
                  historySyncDownloadMetric: K,
                  newLidMetadata: fe,
                  newUsernameUpdates: he,
                  proto: se,
                })
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial sync messages failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    _e(String(e)),
                    e
                  );
                });
            else if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .PUSH_NAME
            )
              yield o("WAWebHistorySyncHandlePushname")
                .handlePushName(se, e, K, j, pe)
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial pushname failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    _e(String(e)),
                    e
                  );
                });
            else if (
              ![
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3,
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .NON_BLOCKING_DATA,
              ].includes(e.syncType) &&
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start processing non initial status messages",
                  ])),
              ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              !Z(e, se))
            ) {
              var ye = [],
                Ce = new Set(),
                be = [],
                ve = [],
                Se = [],
                Re = new Set(),
                Le = [],
                Ee = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                ke = 0,
                Ie = !1;
              (Ee == null || r("isEmptyObject")(Ee)) &&
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] boundary data is null or empty",
                    ])),
                );
              for (
                var Te = [],
                  De = [],
                  xe = [],
                  $e = [],
                  Pe = 0,
                  Ne = 0,
                  Me = 0,
                  we = 0,
                  Ae = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? yield o(
                        "WAWebApiChatBulkGetByHistory",
                      ).bulkGetChatsMaybeByHistory(
                        se.conversations.map(function (e) {
                          return e.id;
                        }),
                      )
                    : [],
                  Fe = 0;
                Fe < se.conversations.length;
                Fe++
              ) {
                var Oe = !1,
                  Be = se.conversations[Fe],
                  We = Be.id,
                  qe = Ee == null ? void 0 : Ee[We];
                if (qe == null) {
                  Te.length < 3 && Te.push(r("gkx")("26258") ? "-" : We);
                  var Ue = o("WAWebWidFactory").createWid(We).toJid();
                  ((Ee == null ? void 0 : Ee[Ue]) != null &&
                    De.length < 3 &&
                    De.push(r("gkx")("26258") ? "-" : We),
                    (Oe = !0));
                }
                var Ve = o("WAWebWidFactory").createWid(We);
                Ve.isNewsletter() &&
                  (xe.length < 3 && xe.push(r("gkx")("26258") ? "-" : We),
                  (Oe = !0));
                var He = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? Ae[Fe]
                    : yield o("WAWebApiChatCommon").getChatMaybeByHistory(We),
                  Ge =
                    (He == null ? void 0 : He.id) != null
                      ? o("WAWebWidFactory").createWid(He.id)
                      : Ve,
                  ze =
                    (He == null ? void 0 : He.endOfHistoryTransferType) ===
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                if (
                  (((!He && qe != null) ||
                    (He && He.endOfHistoryTransferType == null) ||
                    ze) &&
                    ($e.length < 3 && $e.push(r("gkx")("26258") ? "-" : We),
                    (Oe = !0)),
                  Oe)
                )
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND && (Ie = !0);
                else {
                  for (
                    var je = 0,
                      Ke = self.performance.now(),
                      Qe = 0,
                      Xe = 0,
                      Ye = 0,
                      Je = 0,
                      Ze = 0;
                    Ze < Be.messages.length;
                    Ze++
                  ) {
                    var et, tt, nt, rt;
                    ke++;
                    var ot = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (++je >= ot.batchSize) {
                      var at = self.performance.now(),
                        it = at - Ke;
                      (Qe++,
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          it,
                          je,
                        ),
                        ot.delayMs > 0 &&
                          (Xe++,
                          yield o("WAPromiseDelays").delayMs(ot.delayMs)),
                        (je = 0),
                        (Ke = self.performance.now()));
                    }
                    var lt = Be.messages[Ze],
                      st = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        lt.msgOrderId,
                      );
                    if (!(qe != null && qe !== -1 && st != null && st >= qe)) {
                      var ut =
                        (lt == null ||
                        (et = lt.message) == null ||
                        (et = et.message) == null ||
                        (et = et.protocolMessage) == null
                          ? void 0
                          : et.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .REQUEST_WELCOME_MESSAGE;
                      if (ut === !0) {
                        Ye++;
                        continue;
                      }
                      var ct =
                        (lt == null ||
                        (tt = lt.message) == null ||
                        (tt = tt.message) == null ||
                        (tt = tt.protocolMessage) == null
                          ? void 0
                          : tt.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .BOT_MEMU_ONBOARDING_MESSAGE;
                      if (ct) {
                        Je++;
                        continue;
                      }
                      if (
                        !o(
                          "WAWebLimitSharingProtoUtils",
                        ).shouldWithholdHistorySyncMessage(Be, lt)
                      ) {
                        Re.add(We);
                        var dt = o(
                          "WAWebHistorySyncNotificationCommonUtils",
                        ).parseWebMsgInfoAndReturnNullOnFailure({
                          protobufChatId: Ve,
                          message: lt.message,
                          chunkInfo: e,
                          allLidMapping: de,
                          totalMissingMapping: me,
                          historyLidPnMappings: ue,
                          dbChatId: Ge,
                        });
                        if (
                          (dt &&
                            dt.id.remote.toString() !== We &&
                            Re.add(dt.id.remote.toString()),
                          Ze === 0 && dt && He)
                        ) {
                          var mt = yield o("WAWebSchemaMessage")
                            .getMessageTable()
                            .betweenCount(
                              ["internalId"],
                              o("WAWebDBMessageUtils").beginningOfChat(Ge),
                              o("WAWebDBMessageUtils").endOfChat(Ge),
                            );
                          mt === 0 && Le.push(dt);
                        }
                        if (
                          ((Se = Se.concat(
                            o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg(
                              {
                                webMsgInfo: lt.message,
                                parsedWebMsgInfo: dt,
                                isFromCag:
                                  (nt = Be.isDefaultSubgroup) != null ? nt : !1,
                              },
                            ),
                          )),
                          dt != null &&
                            ((rt = lt.message) == null ||
                            (rt = rt.commentMetadata) == null
                              ? void 0
                              : rt.commentParentKey) == null &&
                            (Ce.has(dt.id.toString()) &&
                              Ce.delete(dt == null ? void 0 : dt.id.toString()),
                            ye.push(dt)),
                          dt != null &&
                            o("WAWebMessageAssociation.flow").isAssociatedMsg(
                              dt,
                            ))
                        ) {
                          var pt = dt.parentMsgKey.toString();
                          (Ce.add(pt), be.push(dt));
                        }
                        dt != null &&
                          o("WAWebThreadMsgUtils").isThreadMsg(dt) &&
                          ve.push(dt);
                      }
                    }
                  }
                  if (
                    ((Pe += Qe), (Ne += Xe), (Me += Ye), (we += Je), je > 0)
                  ) {
                    var _t = self.performance.now(),
                      ft = _t - Ke;
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      ft,
                      je,
                    );
                  }
                }
              }
              (Pe > 0 &&
                o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Throttling observed ",
                        " times across all conversations",
                      ])),
                    Pe,
                  )
                  .tags("history-sync"),
                Ne > 0 &&
                  o("WALogger")
                    .LOG(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Applied ",
                          " message throttling delays across all conversations",
                        ])),
                      Ne,
                    )
                    .tags("history-sync"),
                Me > 0 &&
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    Me,
                  ),
                we > 0 &&
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    we,
                  ),
                Te.length > 0 &&
                  o("WALogger")
                    .LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary => ",
                          "",
                        ])),
                      Te.length,
                      Te,
                    )
                    .tags("history-sync"),
                De.length > 0 &&
                  o("WALogger")
                    .LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary, exist as jid",
                        ])),
                      De.length,
                    )
                    .sendLogs("history-sync-unexpected-conversation-drop"),
                xe.length > 0 &&
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] dropped ",
                        " chats, sync disabled",
                      ])),
                    xe.length,
                  ),
                $e.length > 0 &&
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, already complete ",
                          "",
                        ])),
                      $e.length,
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(e),
                    )
                    .tags("history-sync"),
                (K.mdBootstrapMessagesCount = ke),
                (K.mdBootstrapChatsCount = se.conversations.length),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: pe,
                  historySyncDownloadMetric: K,
                  isSuccess: !0,
                  startTs: e.historySyncStepStartedTs,
                }),
                o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                  e.syncType,
                  o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                    .MESSAGE_PREPROCESSED,
                  e.chunkOrder,
                ));
              try {
                (ye.length !== 0
                  ? yield o(
                      "WAWebHandleHistorySyncMsg",
                    ).handleProgressiveHistorySyncMsgs({
                      associatedMsgs: be,
                      chatsWithRecentOrFullSyncMsgs: Array.from(Re),
                      chunkOrder: e.chunkOrder,
                      lastMsgs: Le,
                      missingParentsCache: Ce,
                      recentOrFullSyncMsgs: ye,
                      syncType: e.syncType,
                      threadMsgs: ve,
                      unifiedAddons: Se,
                    })
                  : o("WALogger").LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] no messages from history sync need to handle",
                        ])),
                    ),
                  yield o(
                    "WAWebUserPrefsHistorySync",
                  ).setLastHistorySyncedChunk(e.syncType, e.chunkOrder, H),
                  o(
                    "WAWebHistorySyncProgress",
                  ).updateHistorySyncProgressModel(),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).updateCurrentlyProcessed(
                    e.msgKey,
                    e.syncType,
                    e.chunkOrder,
                  ));
                for (
                  var gt = new Set(), ht = [], yt = 0;
                  yt < se.conversations.length;
                  yt++
                ) {
                  var Ct = se.conversations[yt],
                    bt = o("WAWebWidFactory").createWid(Ct.id),
                    vt = Ae[yt],
                    St =
                      (vt == null ? void 0 : vt.id) != null
                        ? o("WAWebWidFactory").createWid(vt.id)
                        : bt;
                  gt.add(St.toString());
                  var Rt = (Ee == null ? void 0 : Ee[Ct.id]) != null,
                    Lt = null;
                  (Rt && (Lt = Ct.endOfHistoryTransferType),
                    Lt != null &&
                      ht.push(
                        o(
                          "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                        ).updateEndOfHistorySync(St, Lt),
                      ));
                }
                (yield (Q || (Q = n("Promise"))).all(ht),
                  ee({
                    applyHistorySyncOnDemandFailure: Ie,
                    chatRows: Ae,
                    chunkInfo: e,
                    proto: se,
                  }),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerHistorySyncChunkProcessed(gt),
                  o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDataAppliedMetric({
                    historySyncDataAppliedMetric: j,
                    startTs: e.historySyncStepStartedTs,
                    isSuccess: !0,
                  }),
                  o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                    e.syncType,
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .APPLIED,
                    e.chunkOrder,
                  ),
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk complete, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e, ke, Re.size),
                  ));
              } catch (e) {
                throw (
                  o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk failed: ",
                        "",
                      ])),
                    e,
                  ),
                  _e(String(e)),
                  e
                );
              }
            }
            var Et = r("WAWebMsgKey").fromString(e.msgKey),
              kt = new Map();
            (kt.set(Et.remote, [Et.id]),
              e.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: Et.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: kt,
                }),
              yield o(
                "WAWebDBCreateLidPnMappings",
              ).createLidPnMappingsInBatches({
                mappings: ge,
                flushImmediately: !0,
                learningSource: "history-sync-chunk",
              }),
              yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                updates: fe,
              }),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(he)),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(e.msgKey, e.syncType, e.chunkOrder),
              e.downloadOptions.encFilehash != null &&
                r("WAWebMmsClient")
                  .deleteMdHistorySyncBlob({
                    directPath: e.downloadOptions.directPath,
                    encFilehash: e.downloadOptions.encFilehash,
                    signal: new AbortController().signal,
                    encHandle: e.encHandle,
                    companionUserSecret: o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.get("WAWebCompanionMetaNonce"),
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "MMS client delete error",
                        ])),
                    );
                  }));
            var It =
              se.conversations.length === 1 ? se.conversations[0].id : null;
            (yield te(e.syncType, se.progress, It, e),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                me,
              ),
              l.isActive() && l.endSuccess());
          } catch (e) {
            throw (
              l.isActive() &&
                l.endFailWithError(
                  "history_sync_chunk_failed",
                  r("getErrorSafe")(e).message,
                ),
              e
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(t, n) {
      if (
        t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        n.conversations.length !== 1
      ) {
        var a, i;
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][rdu] on-demand dropped, conv len ",
                " != 1",
              ])),
            r("gkx")("26258") ? "" : n.conversations.length,
          ),
          o(
            "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
          ).handleHistorySyncOnDemandFailure(
            (a = t.peerDataRequestChatId) != null ? a : "",
          ),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            o("WAWebWamEnumPeerDataResponseApplyResultType")
              .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE,
            (i = t.peerDataRequestSessionId) != null ? i : "",
          ),
          !0
        );
      }
      return !1;
    }
    function ee(e) {
      var t = e.applyHistorySyncOnDemandFailure,
        n = e.chatRows,
        r = e.chunkInfo,
        a = e.proto;
      if (
        r.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        a.conversations.length === 1
      ) {
        var i, l;
        o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(
          r.syncType,
        );
        var s = a.conversations[0].id,
          u =
            ((i = n[0]) == null ? void 0 : i.id) != null
              ? o("WAWebWidFactory").createWid(n[0].id).toJid()
              : s;
        (t
          ? o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandFailure(u)
          : o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandSuccess(u),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            t
              ? o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR
              : o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS,
            (l = r.peerDataRequestSessionId) != null ? l : "",
          ));
      }
    }
    function te(e, t, n, r) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled();
            if (
              ((t === 100 ||
                e ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP) &&
                o(
                  "WAWebMetricsAttributionActions",
                ).stopHistorySyncAttributionTracking(e),
              e ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP)
            )
              (o("WALogger")
                .LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Initial bootstrap history sync complete",
                    ])),
                )
                .tags("history-sync"),
                yield o(
                  "WAWebUserPrefsHistorySync",
                ).setInitialHistorySyncComplete(),
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                  initialCompleted: !0,
                }),
                o("WALogger")
                  .LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] completion persisted, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(a),
                  )
                  .tags("history-sync"),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerInitialChatHistorySynced(),
                o("WALogger")
                  .LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][initial bootstrap] completion event emitted, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(a),
                  )
                  .tags("history-sync"));
            else if (
              e ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT &&
              t === 100
            )
              (o("WALogger")
                .LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Recent history sync complete",
                    ])),
                )
                .tags("history-sync"),
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                  recentCompleted: !0,
                }),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerRecentChatHistorySynced());
            else if (
              e ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .FULL &&
              t === 100
            )
              (o("WALogger")
                .LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Full history sync complete",
                    ])),
                )
                .tags("history-sync"),
                i ||
                  (o("WALogger").LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] set history initial sync boundary to empty",
                      ])),
                  ),
                  o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(
                    {},
                  )),
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                  fullCompleted: !0,
                }),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerFullChatHistorySynced());
            else if (
              i &&
              e ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND &&
              t === 100
            ) {
              var l;
              o("WALogger")
                .LOG(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] On demand history sync complete for chat ",
                      "",
                    ])),
                  r("gkx")("26258") ? "-" : n,
                )
                .tags("history-sync");
              var s = "onDemandCompleted_" + (n != null ? n : "");
              yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus(
                ((l = {}), (l[s] = !0), l),
              );
            }
          },
        )),
        ne.apply(this, arguments)
      );
    }
    l.handleHistorySyncChunk = Y;
  },
  98,
);
