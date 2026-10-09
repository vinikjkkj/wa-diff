__d(
  "WAWebHandleHistorySyncChunk",
  [
    "Promise",
    "WAAsyncSleep",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
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
    "WAWebUserPrefsAppStateSync",
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
      X = 10,
      Y = 100;
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              Z = z.historySyncStartDownloadingMetric;
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
                Z,
                e.historySyncStepStartedTs,
                o("WATimeUtils").unixTimeMs(),
              ));
            var re = null;
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
                (re = G));
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
                  (re = yield o(
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
                      J(e, { qpl: l, initialChunkRetryCount: i + 1 })
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
                var oe = r("WAWebMsgKey").fromString(e.msgKey);
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
                  var ae, ie;
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] on-demand chunk download failed",
                      ])),
                  ),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).handleHistorySyncOnDemandFailure(
                      (ae = e.peerDataRequestChatId) != null ? ae : "",
                    ),
                    o(
                      "WAWebNonMessageDataRequestLoggingUtils",
                    ).logHistorySyncOnDemandResponse(
                      o("WAWebWamEnumPeerDataResponseApplyResultType")
                        .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                      (ie = e.peerDataRequestSessionId) != null ? ie : "",
                    ));
                }
                (r("WAWebSendHistSyncServerErrorReceiptJob")(
                  oe.remote,
                  oe.id,
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
            var le = new (o("WABinary").Binary)(re),
              se = yield o("WAGzip").inflate(le.readByteArrayView());
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            );
            var ue = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              se,
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
                      ue.conversations.length,
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
                ue.phoneNumberToLidMappings.length,
              ));
            var ce = [];
            ue.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                ce.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            });
            var de = {
              mappings: ce,
              flushImmediately: !0,
              learningSource: "history-sync-chunk",
            };
            (e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
              ? yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(de)
              : yield o(
                  "WAWebDBCreateLidPnMappings",
                ).createLidPnMappingsInBatches(de),
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
                ce.length,
              ));
            var me = o(
              "WAWebHistorySyncNotificationCommonUtils",
            ).getLidMappingAsStringSet(ce);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "completed learning lid mappings for history sync. count: ",
                      ". ",
                      "...",
                    ])),
                  me == null ? void 0 : me.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(me),
                )
                .verbose();
            var pe = new Map();
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
                  ue.conversations.length,
                ),
              ));
            var _e = o("WATimeUtils").unixTimeMs();
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
              e.chunkOrder != null &&
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
            var fe = function (n) {
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
            ue.statusV3Messages &&
            ue.statusV3Messages.length > 0
              ? yield o("WAWebHistorySyncHandleStatusMessages")
                  .handleStatusMessages({
                    chunkDownloadFinishTimestamp: _e,
                    chunkInfo: e,
                    historySyncDataAppliedMetric: j,
                    historySyncDownloadMetric: K,
                    proto: ue,
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
                      fe(String(e)),
                      e
                    );
                  })
              : e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
                ? yield o("WAWebHistoryMsgHandlerAction")
                    .handleNonBlockingData({
                      chunkDownloadFinishTimestamp: _e,
                      chunkInfo: e,
                      historySyncDataAppliedMetric: j,
                      historySyncDownloadMetric: K,
                      proto: ue,
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
                        fe(String(e)),
                        e
                      );
                    })
                : e.syncType !==
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.PUSH_NAME &&
                  (ue.conversations = ue.conversations.reduce(function (e, t) {
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
            var ge = [],
              he = [],
              ye = [];
            if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
            )
              yield o("WAWebHistoryMsgHandlerAction")
                .handleInitialSyncMsgs({
                  chunkDownloadFinishTimestamp: _e,
                  chunkInfo: e,
                  historyLidPnMappings: ce,
                  historySyncDataAppliedMetric: j,
                  historySyncDownloadMetric: K,
                  newLidMetadata: ge,
                  newUsernameUpdates: ye,
                  proto: ue,
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
                    fe(String(e)),
                    e
                  );
                });
            else if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .PUSH_NAME
            )
              yield o("WAWebHistorySyncHandlePushname")
                .handlePushName(ue, e, K, j, _e)
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
                    fe(String(e)),
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
              !ee(e, ue))
            ) {
              var Ce = [],
                be = new Set(),
                ve = [],
                Se = [],
                Re = [],
                Le = new Set(),
                Ee = [],
                ke = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                Ie = 0,
                Te = 0,
                De = !1,
                xe = o(
                  "WAWebSyncGatingUtils",
                ).getRecentSyncMessageProcessingBreakIteration(),
                $e = yield o(
                  "WAWebUserPrefsAppStateSync",
                ).getAllCriticalDataSynced();
              (ke == null || r("isEmptyObject")(ke)) &&
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] boundary data is null or empty",
                    ])),
                );
              for (
                var Pe = [],
                  Ne = [],
                  Me = [],
                  we = [],
                  Ae = 0,
                  Fe = 0,
                  Oe = 0,
                  Be = 0,
                  We = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? yield o(
                        "WAWebApiChatBulkGetByHistory",
                      ).bulkGetChatsMaybeByHistory(
                        ue.conversations.map(function (e) {
                          return e.id;
                        }),
                      )
                    : [],
                  qe = 0;
                qe < ue.conversations.length;
                qe++
              ) {
                var Ue = !1,
                  Ve = ue.conversations[qe],
                  He = Ve.id,
                  Ge = ke == null ? void 0 : ke[He];
                if (Ge == null) {
                  Pe.length < 3 && Pe.push(r("gkx")("26258") ? "-" : He);
                  var ze = o("WAWebWidFactory").createWid(He).toJid();
                  ((ke == null ? void 0 : ke[ze]) != null &&
                    Ne.length < 3 &&
                    Ne.push(r("gkx")("26258") ? "-" : He),
                    (Ue = !0));
                }
                var je = o("WAWebWidFactory").createWid(He);
                je.isNewsletter() &&
                  (Me.length < 3 && Me.push(r("gkx")("26258") ? "-" : He),
                  (Ue = !0));
                var Ke = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? We[qe]
                    : yield o("WAWebApiChatCommon").getChatMaybeByHistory(He),
                  Qe =
                    (Ke == null ? void 0 : Ke.id) != null
                      ? o("WAWebWidFactory").createWid(Ke.id)
                      : je,
                  Xe =
                    (Ke == null ? void 0 : Ke.endOfHistoryTransferType) ===
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                if (
                  (((!Ke && Ge != null) ||
                    (Ke && Ke.endOfHistoryTransferType == null) ||
                    Xe) &&
                    (we.length < 3 && we.push(r("gkx")("26258") ? "-" : He),
                    (Ue = !0)),
                  Ue)
                )
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND && (De = !0);
                else {
                  for (
                    var Ye = 0,
                      Je = self.performance.now(),
                      Ze = 0,
                      et = 0,
                      tt = 0,
                      nt = 0,
                      rt = 0;
                    rt < Ve.messages.length;
                    rt++
                  ) {
                    var ot, at, it, lt;
                    Ie++;
                    var st = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (
                      ++Ye >= st.batchSize &&
                      o("WAWebABProps").getABPropConfigValue(
                        "wa_web_history_sync_dynamic_throttling",
                      )
                    ) {
                      var ut = self.performance.now(),
                        ct = ut - Je;
                      (Ze++,
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          ct,
                          Ye,
                        ),
                        st.delayMs > 0 &&
                          (et++,
                          yield o("WAPromiseDelays").delayMs(st.delayMs)),
                        (Ye = 0),
                        (Je = self.performance.now()));
                    }
                    var dt = Ve.messages[rt],
                      mt = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        dt.msgOrderId,
                      );
                    if (!(Ge != null && Ge !== -1 && mt != null && mt >= Ge)) {
                      var pt =
                        (dt == null ||
                        (ot = dt.message) == null ||
                        (ot = ot.message) == null ||
                        (ot = ot.protocolMessage) == null
                          ? void 0
                          : ot.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .REQUEST_WELCOME_MESSAGE;
                      if (pt === !0) {
                        tt++;
                        continue;
                      }
                      var _t =
                        (dt == null ||
                        (at = dt.message) == null ||
                        (at = at.message) == null ||
                        (at = at.protocolMessage) == null
                          ? void 0
                          : at.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .BOT_MEMU_ONBOARDING_MESSAGE;
                      if (_t) {
                        nt++;
                        continue;
                      }
                      if (
                        !o(
                          "WAWebLimitSharingProtoUtils",
                        ).shouldWithholdHistorySyncMessage(Ve, dt)
                      ) {
                        Le.add(He);
                        var ft = o(
                          "WAWebHistorySyncNotificationCommonUtils",
                        ).parseWebMsgInfoAndReturnNullOnFailure({
                          protobufChatId: je,
                          message: dt.message,
                          chunkInfo: e,
                          allLidMapping: me,
                          totalMissingMapping: pe,
                          historyLidPnMappings: ce,
                          dbChatId: Qe,
                        });
                        if (
                          (ft &&
                            ft.id.remote.toString() !== He &&
                            Le.add(ft.id.remote.toString()),
                          rt === 0 && ft && Ke)
                        ) {
                          var gt = yield o("WAWebSchemaMessage")
                            .getMessageTable()
                            .betweenCount(
                              ["internalId"],
                              o("WAWebDBMessageUtils").beginningOfChat(Qe),
                              o("WAWebDBMessageUtils").endOfChat(Qe),
                            );
                          gt === 0 && Ee.push(ft);
                        }
                        if (
                          ((Re = Re.concat(
                            o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg(
                              {
                                webMsgInfo: dt.message,
                                parsedWebMsgInfo: ft,
                                isFromCag:
                                  (it = Ve.isDefaultSubgroup) != null ? it : !1,
                              },
                            ),
                          )),
                          ft != null &&
                            ((lt = dt.message) == null ||
                            (lt = lt.commentMetadata) == null
                              ? void 0
                              : lt.commentParentKey) == null &&
                            (be.has(ft.id.toString()) &&
                              be.delete(ft == null ? void 0 : ft.id.toString()),
                            Ce.push(ft)),
                          ft != null &&
                            o("WAWebMessageAssociation.flow").isAssociatedMsg(
                              ft,
                            ))
                        ) {
                          var ht = ft.parentMsgKey.toString();
                          (be.add(ht), ve.push(ft));
                        }
                        (ft != null &&
                          o("WAWebThreadMsgUtils").isThreadMsg(ft) &&
                          Se.push(ft),
                          o("WAWebABProps").getABPropConfigValue(
                            "wa_web_history_sync_dynamic_throttling",
                          ) ||
                            (yield o(
                              "WAAsyncSleep",
                            ).asyncSleepAfterGivenLoopIteration(
                              Te++,
                              $e ? xe : Y,
                            )));
                      }
                    }
                  }
                  if (
                    ((Ae += Ze), (Fe += et), (Oe += tt), (Be += nt), Ye > 0)
                  ) {
                    var yt = self.performance.now(),
                      Ct = yt - Je;
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      Ct,
                      Ye,
                    );
                  }
                }
              }
              (Ae > 0 &&
                o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Throttling observed ",
                        " times across all conversations",
                      ])),
                    Ae,
                  )
                  .tags("history-sync"),
                Fe > 0 &&
                  o("WALogger")
                    .LOG(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Applied ",
                          " message throttling delays across all conversations",
                        ])),
                      Fe,
                    )
                    .tags("history-sync"),
                Oe > 0 &&
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    Oe,
                  ),
                Be > 0 &&
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    Be,
                  ),
                Pe.length > 0 &&
                  o("WALogger")
                    .LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary => ",
                          "",
                        ])),
                      Pe.length,
                      Pe,
                    )
                    .tags("history-sync"),
                Ne.length > 0 &&
                  o("WALogger")
                    .LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary, exist as jid",
                        ])),
                      Ne.length,
                    )
                    .sendLogs("history-sync-unexpected-conversation-drop"),
                Me.length > 0 &&
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] dropped ",
                        " chats, sync disabled",
                      ])),
                    Me.length,
                  ),
                we.length > 0 &&
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, already complete ",
                          "",
                        ])),
                      we.length,
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(e),
                    )
                    .tags("history-sync"),
                (K.mdBootstrapMessagesCount = Ie),
                (K.mdBootstrapChatsCount = ue.conversations.length),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: _e,
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
                (Ce.length !== 0
                  ? yield o(
                      "WAWebHandleHistorySyncMsg",
                    ).handleProgressiveHistorySyncMsgs({
                      associatedMsgs: ve,
                      chatsWithRecentOrFullSyncMsgs: Array.from(Le),
                      chunkOrder: e.chunkOrder,
                      lastMsgs: Ee,
                      missingParentsCache: be,
                      recentOrFullSyncMsgs: Ce,
                      syncType: e.syncType,
                      threadMsgs: Se,
                      unifiedAddons: Re,
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
                  var bt = new Set(), vt = [], St = 0;
                  St < ue.conversations.length;
                  St++
                ) {
                  var Rt = ue.conversations[St],
                    Lt = o("WAWebWidFactory").createWid(Rt.id),
                    Et = We[St],
                    kt =
                      (Et == null ? void 0 : Et.id) != null
                        ? o("WAWebWidFactory").createWid(Et.id)
                        : Lt;
                  bt.add(kt.toString());
                  var It = (ke == null ? void 0 : ke[Rt.id]) != null,
                    Tt = null;
                  (It && (Tt = Rt.endOfHistoryTransferType),
                    Tt != null &&
                      vt.push(
                        o(
                          "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                        ).updateEndOfHistorySync(kt, Tt),
                      ));
                }
                (yield (Q || (Q = n("Promise"))).all(vt),
                  te({
                    applyHistorySyncOnDemandFailure: De,
                    chatRows: We,
                    chunkInfo: e,
                    proto: ue,
                  }),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerHistorySyncChunkProcessed(bt),
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
                    ).getHistorySyncLogDetailsString(e, Ie, Le.size),
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
                  fe(String(e)),
                  e
                );
              }
            }
            var Dt = r("WAWebMsgKey").fromString(e.msgKey),
              xt = new Map();
            (xt.set(Dt.remote, [Dt.id]),
              e.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: Dt.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: xt,
                }),
              yield o(
                "WAWebDBCreateLidPnMappings",
              ).createLidPnMappingsInBatches({
                mappings: he,
                flushImmediately: !0,
                learningSource: "history-sync-chunk",
              }),
              yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                updates: ge,
              }),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(ye)),
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
            var $t =
              ue.conversations.length === 1 ? ue.conversations[0].id : null;
            (yield ne(e.syncType, ue.progress, $t, e),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                pe,
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
        Z.apply(this, arguments)
      );
    }
    function ee(t, n) {
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
    function te(e) {
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
    function ne(e, t, n, r) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        re.apply(this, arguments)
      );
    }
    l.handleHistorySyncChunk = J;
  },
  98,
);
