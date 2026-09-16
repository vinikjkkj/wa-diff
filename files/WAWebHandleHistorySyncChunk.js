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
      G = 10,
      z = 100;
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              var B = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              if (B === !0) {
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
                var W = r("WAWebMsgKey").fromString(e.msgKey);
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: W.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: new Map().set(W.remote, [W.id]),
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
            var q = yield o(
                "WAWebGetHistorySyncProgress",
              ).getHistorySyncProgress(e),
              U = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(
                e,
              ),
              V = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
                e,
                U == null,
              ),
              K = V.historySyncDataAppliedMetric,
              J = V.historySyncDownloadedMetric,
              Z = V.historySyncStartDownloadingMetric;
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
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
            var ee = null;
            if (U != null)
              (l.addPoint("history_sync_inline_payload"),
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] get inline payload in chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                (ee = U));
            else
              try {
                (o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] start downloading chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                  (ee = yield o(
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    i < G
                  )
                    return (
                      yield r("WAWebNetworkStatus").waitIfOffline(),
                      o("WALogger")
                        .WARN(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] init sync download failed, retrying",
                            ])),
                        )
                        .tags("history-sync"),
                      j(e, { qpl: l, initialChunkRetryCount: i + 1 })
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
                var te = r("WAWebMsgKey").fromString(e.msgKey);
                if (
                  (o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDownloadedMetric({
                    chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                    failureReason: o(
                      "WAWebMdSyncDownloadFailureReason",
                    ).getMdSyncDownloadFailureReason(t),
                    historySyncDownloadMetric: J,
                    isSuccess: !1,
                    startTs: e.historySyncStepStartedTs,
                  }),
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND)
                ) {
                  var ne, re;
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] on-demand chunk download failed",
                      ])),
                  ),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).handleHistorySyncOnDemandFailure(
                      (ne = e.peerDataRequestChatId) != null ? ne : "",
                    ),
                    o(
                      "WAWebNonMessageDataRequestLoggingUtils",
                    ).logHistorySyncOnDemandResponse(
                      o("WAWebWamEnumPeerDataResponseApplyResultType")
                        .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                      (re = e.peerDataRequestSessionId) != null ? re : "",
                    ));
                }
                (r("WAWebSendHistSyncServerErrorReceiptJob")(
                  te.remote,
                  te.id,
                  e.downloadOptions.mediaKey,
                ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).markChunkForReuploadPending(e.msgKey));
                return;
              }
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              e.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .DOWNLOADED,
              e.chunkOrder,
            ),
              (e.downloadOptions.mediaKey = ""),
              (J.mdBootstrapStepResult = o(
                "WAWebWamEnumMdBootstrapStepResult",
              ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
            var oe = new (o("WABinary").Binary)(ee),
              ae = yield o("WAGzip").inflate(oe.readByteArrayView());
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            );
            var ie = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              ae,
            );
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            ),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings start, ",
                    ", cnt=",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  void 0,
                ),
                ie.phoneNumberToLidMappings.length,
              ));
            var le = [];
            ie.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                le.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            });
            var se = {
              mappings: le,
              flushImmediately: !0,
              learningSource: "history-sync-chunk",
            };
            (e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
              ? yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(se)
              : yield o(
                  "WAWebDBCreateLidPnMappings",
                ).createLidPnMappingsInBatches(se),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings done, ",
                    ", cnt=",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  void 0,
                ),
                le.length,
              ));
            var ue = o(
              "WAWebHistorySyncNotificationCommonUtils",
            ).getLidMappingAsStringSet(le);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "completed learning lid mappings for history sync. count: ",
                      ". ",
                      "...",
                    ])),
                  ue == null ? void 0 : ue.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(ue),
                )
                .verbose();
            var ce = new Map();
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              e.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
              e.chunkOrder,
            ),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] chunk downloaded, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  ie.conversations.length,
                ),
              ));
            var de = o("WATimeUtils").unixTimeMs();
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
              e.chunkOrder != null &&
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
            var me = function (n) {
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: K,
                startTs: e.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: n,
              });
            };
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
            ie.statusV3Messages &&
            ie.statusV3Messages.length > 0
              ? yield o("WAWebHistorySyncHandleStatusMessages")
                  .handleStatusMessages({
                    chunkDownloadFinishTimestamp: de,
                    chunkInfo: e,
                    historySyncDataAppliedMetric: K,
                    historySyncDownloadMetric: J,
                    proto: ie,
                  })
                  .catch(function (e) {
                    throw (
                      o("WALogger")
                        .LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] storing status messages failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e)),
                      me(String(e)),
                      e
                    );
                  })
              : e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
                ? yield o("WAWebHistoryMsgHandlerAction")
                    .handleNonBlockingData(ie, e, J, K, de)
                    .catch(function (e) {
                      throw (
                        o("WALogger")
                          .LOG(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] storing non blocking data failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e)),
                        me(String(e)),
                        e
                      );
                    })
                : e.syncType !==
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.PUSH_NAME &&
                  (ie.conversations = ie.conversations.reduce(function (e, t) {
                    var n = null;
                    try {
                      n = o("WAWebWidFactory").createWid(t.id);
                    } catch (e) {
                      o("WALogger")
                        .WARN(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
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
            var pe = [],
              _e = [],
              fe = [];
            if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
            )
              yield o("WAWebHistoryMsgHandlerAction")
                .handleInitialSyncMsgs({
                  chunkDownloadFinishTimestamp: de,
                  chunkInfo: e,
                  historyLidPnMappings: le,
                  historySyncDataAppliedMetric: K,
                  historySyncDownloadMetric: J,
                  newLidMetadata: pe,
                  newUsernameUpdates: fe,
                  proto: ie,
                })
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial sync messages failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    me(String(e)),
                    e
                  );
                });
            else if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .PUSH_NAME
            )
              yield o("WAWebHistorySyncHandlePushname")
                .handlePushName(ie, e, J, K, de)
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial pushname failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    me(String(e)),
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start processing non initial status messages",
                  ])),
              ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              !Q(e, ie))
            ) {
              var ge = [],
                he = new Set(),
                ye = [],
                Ce = [],
                be = [],
                ve = new Set(),
                Se = [],
                Re = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                Le = 0,
                Ee = 0,
                ke = !1,
                Ie = o(
                  "WAWebSyncGatingUtils",
                ).getRecentSyncMessageProcessingBreakIteration(),
                Te = yield o(
                  "WAWebUserPrefsAppStateSync",
                ).getAllCriticalDataSynced();
              (Re == null || r("isEmptyObject")(Re)) &&
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] boundary data is null or empty",
                    ])),
                );
              for (
                var De = [],
                  xe = [],
                  $e = [],
                  Pe = [],
                  Ne = 0,
                  Me = 0,
                  we = 0,
                  Ae = 0,
                  Fe = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? yield o(
                        "WAWebApiChatBulkGetByHistory",
                      ).bulkGetChatsMaybeByHistory(
                        ie.conversations.map(function (e) {
                          return e.id;
                        }),
                      )
                    : [],
                  Oe = 0;
                Oe < ie.conversations.length;
                Oe++
              ) {
                var Be = !1,
                  We = ie.conversations[Oe],
                  qe = We.id,
                  Ue = Re == null ? void 0 : Re[qe];
                if (Ue == null) {
                  De.length < 3 && De.push(r("gkx")("26258") ? "-" : qe);
                  var Ve = o("WAWebWidFactory").createWid(qe).toJid();
                  ((Re == null ? void 0 : Re[Ve]) != null &&
                    xe.length < 3 &&
                    xe.push(r("gkx")("26258") ? "-" : qe),
                    (Be = !0));
                }
                var He = o("WAWebWidFactory").createWid(qe);
                He.isNewsletter() &&
                  ($e.length < 3 && $e.push(r("gkx")("26258") ? "-" : qe),
                  (Be = !0));
                var Ge = o(
                    "WAWebHistorySyncLidChatGating",
                  ).isForcedHistoryLidChat()
                    ? Fe[Oe]
                    : yield o("WAWebApiChatCommon").getChatMaybeByHistory(qe),
                  ze =
                    (Ge == null ? void 0 : Ge.id) != null
                      ? o("WAWebWidFactory").createWid(Ge.id)
                      : He,
                  je =
                    (Ge == null ? void 0 : Ge.endOfHistoryTransferType) ===
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                if (
                  (((!Ge && Ue != null) ||
                    (Ge && Ge.endOfHistoryTransferType == null) ||
                    je) &&
                    (Pe.length < 3 && Pe.push(r("gkx")("26258") ? "-" : qe),
                    (Be = !0)),
                  Be)
                )
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND && (ke = !0);
                else {
                  for (
                    var Ke = 0,
                      Qe = self.performance.now(),
                      Xe = 0,
                      Ye = 0,
                      Je = 0,
                      Ze = 0,
                      et = 0;
                    et < We.messages.length;
                    et++
                  ) {
                    var tt, nt, rt, ot;
                    Le++;
                    var at = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (
                      ++Ke >= at.batchSize &&
                      o("WAWebABProps").getABPropConfigValue(
                        "wa_web_history_sync_dynamic_throttling",
                      )
                    ) {
                      var it = self.performance.now(),
                        lt = it - Qe;
                      (Xe++,
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          lt,
                          Ke,
                        ),
                        at.delayMs > 0 &&
                          (Ye++,
                          yield o("WAPromiseDelays").delayMs(at.delayMs)),
                        (Ke = 0),
                        (Qe = self.performance.now()));
                    }
                    var st = We.messages[et],
                      ut = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        st.msgOrderId,
                      );
                    if (!(Ue != null && Ue !== -1 && ut != null && ut >= Ue)) {
                      var ct =
                        (st == null ||
                        (tt = st.message) == null ||
                        (tt = tt.message) == null ||
                        (tt = tt.protocolMessage) == null
                          ? void 0
                          : tt.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .REQUEST_WELCOME_MESSAGE;
                      if (ct === !0) {
                        Je++;
                        continue;
                      }
                      var dt =
                        (st == null ||
                        (nt = st.message) == null ||
                        (nt = nt.message) == null ||
                        (nt = nt.protocolMessage) == null
                          ? void 0
                          : nt.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .BOT_MEMU_ONBOARDING_MESSAGE;
                      if (dt) {
                        Ze++;
                        continue;
                      }
                      ve.add(qe);
                      var mt = o(
                        "WAWebHistorySyncNotificationCommonUtils",
                      ).parseWebMsgInfoAndReturnNullOnFailure({
                        protobufChatId: He,
                        message: st.message,
                        chunkInfo: e,
                        allLidMapping: ue,
                        totalMissingMapping: ce,
                        historyLidPnMappings: le,
                        dbChatId: ze,
                      });
                      if (
                        (mt &&
                          mt.id.remote.toString() !== qe &&
                          ve.add(mt.id.remote.toString()),
                        et === 0 && mt && Ge)
                      ) {
                        var pt = yield o("WAWebSchemaMessage")
                          .getMessageTable()
                          .betweenCount(
                            ["internalId"],
                            o("WAWebDBMessageUtils").beginningOfChat(ze),
                            o("WAWebDBMessageUtils").endOfChat(ze),
                          );
                        pt === 0 && Se.push(mt);
                      }
                      if (
                        ((be = be.concat(
                          o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                            webMsgInfo: st.message,
                            parsedWebMsgInfo: mt,
                            isFromCag:
                              (rt = We.isDefaultSubgroup) != null ? rt : !1,
                          }),
                        )),
                        mt != null &&
                          ((ot = st.message) == null ||
                          (ot = ot.commentMetadata) == null
                            ? void 0
                            : ot.commentParentKey) == null &&
                          (he.has(mt.id.toString()) &&
                            he.delete(mt == null ? void 0 : mt.id.toString()),
                          ge.push(mt)),
                        mt != null &&
                          o("WAWebMessageAssociation.flow").isAssociatedMsg(mt))
                      ) {
                        var _t = mt.parentMsgKey.toString();
                        (he.add(_t), ye.push(mt));
                      }
                      (mt != null &&
                        o("WAWebThreadMsgUtils").isThreadMsg(mt) &&
                        Ce.push(mt),
                        o("WAWebABProps").getABPropConfigValue(
                          "wa_web_history_sync_dynamic_throttling",
                        ) ||
                          (yield o(
                            "WAAsyncSleep",
                          ).asyncSleepAfterGivenLoopIteration(
                            Ee++,
                            Te ? Ie : z,
                          )));
                    }
                  }
                  if (
                    ((Ne += Xe), (Me += Ye), (we += Je), (Ae += Ze), Ke > 0)
                  ) {
                    var ft = self.performance.now(),
                      gt = ft - Qe;
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      gt,
                      Ke,
                    );
                  }
                }
              }
              (Ne > 0 &&
                o("WALogger")
                  .LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Throttling observed ",
                        " times across all conversations",
                      ])),
                    Ne,
                  )
                  .tags("history-sync"),
                Me > 0 &&
                  o("WALogger")
                    .LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Applied ",
                          " message throttling delays across all conversations",
                        ])),
                      Me,
                    )
                    .tags("history-sync"),
                we > 0 &&
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    we,
                  ),
                Ae > 0 &&
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    Ae,
                  ),
                De.length > 0 &&
                  o("WALogger")
                    .LOG(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary => ",
                          "",
                        ])),
                      De.length,
                      De,
                    )
                    .tags("history-sync"),
                xe.length > 0 &&
                  o("WALogger")
                    .LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary, exist as jid",
                        ])),
                      xe.length,
                    )
                    .sendLogs("history-sync-unexpected-conversation-drop"),
                $e.length > 0 &&
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] dropped ",
                        " chats, sync disabled",
                      ])),
                    $e.length,
                  ),
                Pe.length > 0 &&
                  o("WALogger")
                    .LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, already complete ",
                          "",
                        ])),
                      Pe.length,
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(e),
                    )
                    .tags("history-sync"),
                (J.mdBootstrapMessagesCount = Le),
                (J.mdBootstrapChatsCount = ie.conversations.length),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: de,
                  historySyncDownloadMetric: J,
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
                (ge.length !== 0
                  ? yield o(
                      "WAWebHandleHistorySyncMsg",
                    ).handleProgressiveHistorySyncMsgs({
                      associatedMsgs: ye,
                      chatsWithRecentOrFullSyncMsgs: Array.from(ve),
                      chunkOrder: e.chunkOrder,
                      lastMsgs: Se,
                      missingParentsCache: he,
                      recentOrFullSyncMsgs: ge,
                      syncType: e.syncType,
                      threadMsgs: Ce,
                      unifiedAddons: be,
                    })
                  : o("WALogger").LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] no messages from history sync need to handle",
                        ])),
                    ),
                  yield o(
                    "WAWebUserPrefsHistorySync",
                  ).setLastHistorySyncedChunk(e.syncType, e.chunkOrder, q),
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
                  var ht = new Set(), yt = [], Ct = 0;
                  Ct < ie.conversations.length;
                  Ct++
                ) {
                  var bt = ie.conversations[Ct],
                    vt = o("WAWebWidFactory").createWid(bt.id),
                    St = Fe[Ct],
                    Rt =
                      (St == null ? void 0 : St.id) != null
                        ? o("WAWebWidFactory").createWid(St.id)
                        : vt;
                  ht.add(Rt.toString());
                  var Lt = (Re == null ? void 0 : Re[bt.id]) != null,
                    Et = null;
                  (Lt && (Et = bt.endOfHistoryTransferType),
                    Et != null &&
                      yt.push(
                        o(
                          "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                        ).updateEndOfHistorySync(Rt, Et),
                      ));
                }
                (yield (H || (H = n("Promise"))).all(yt),
                  X({
                    applyHistorySyncOnDemandFailure: ke,
                    chatRows: Fe,
                    chunkInfo: e,
                    proto: ie,
                  }),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerHistorySyncChunkProcessed(ht),
                  o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDataAppliedMetric({
                    historySyncDataAppliedMetric: K,
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
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk complete, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e, Le, ve.size),
                  ));
              } catch (e) {
                throw (
                  o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk failed: ",
                        "",
                      ])),
                    e,
                  ),
                  me(String(e)),
                  e
                );
              }
            }
            var kt = r("WAWebMsgKey").fromString(e.msgKey),
              It = new Map();
            (It.set(kt.remote, [kt.id]),
              e.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: kt.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: It,
                }),
              yield o(
                "WAWebDBCreateLidPnMappings",
              ).createLidPnMappingsInBatches({
                mappings: _e,
                flushImmediately: !0,
                learningSource: "history-sync-chunk",
              }),
              yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                updates: pe,
              }),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(fe)),
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
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "MMS client delete error",
                        ])),
                    );
                  }));
            var Tt =
              ie.conversations.length === 1 ? ie.conversations[0].id : null;
            (yield Y(e.syncType, ie.progress, Tt),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                ce,
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
        K.apply(this, arguments)
      );
    }
    function Q(t, n) {
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
    function X(e) {
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
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled();
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
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
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
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerInitialChatHistorySynced());
          else if (
            e ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
            t === 100
          )
            (o("WALogger")
              .LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Full history sync complete",
                  ])),
              )
              .tags("history-sync"),
              a ||
                (o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
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
            a &&
            e ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .ON_DEMAND &&
            t === 100
          ) {
            var i;
            o("WALogger")
              .LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] On demand history sync complete for chat ",
                    "",
                  ])),
                r("gkx")("26258") ? "-" : n,
              )
              .tags("history-sync");
            var l = "onDemandCompleted_" + (n != null ? n : "");
            yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus(
              ((i = {}), (i[l] = !0), i),
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    l.handleHistorySyncChunk = j;
  },
  98,
);
