__d(
  "WAWebHandleHistorySyncChunk",
  [
    "JSResourceForInteraction",
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
    "WAWebOmittedConversationMetadataCapabilities",
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
    "cr:19090",
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
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re = r("JSResourceForInteraction")(
        "WAWebOmittedConversationMetadataReceiver",
      ).__setRef("WAWebHandleHistorySyncChunk"),
      oe = (e = n("cr:19090")) != null ? e : {},
      ae = oe.getOmittedHistorySyncChat,
      ie = 10;
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
              var s = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              if (s === !0) {
                (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                var u = r("WAWebMsgKey").fromString(e.msgKey);
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: u.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: new Map().set(u.remote, [u.id]),
                });
              } catch (e) {
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Status receipt send failed",
                      ])),
                  )
                  .tags("history-sync");
              }
            var j = yield o(
                "WAWebGetHistorySyncProgress",
              ).getHistorySyncProgress(e),
              K = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(
                e,
              ),
              Q = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
                e,
                K == null,
              ),
              X = Q.historySyncDataAppliedMetric,
              Y = Q.historySyncDownloadedMetric,
              J = Q.historySyncStartDownloadingMetric;
            (e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP &&
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
            var Z = null;
            if (K != null)
              (l.addPoint("history_sync_inline_payload"),
                o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] get inline payload in chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                (Z = K));
            else
              try {
                (o("WALogger")
                  .LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] start downloading chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e),
                  )
                  .tags("history-sync"),
                  (Z = yield o(
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                    i < ie
                  )
                    return (
                      yield r("WAWebNetworkStatus").waitIfOffline(),
                      o("WALogger")
                        .WARN(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] init sync download failed, retrying",
                            ])),
                        )
                        .tags("history-sync"),
                      le(e, { qpl: l, initialChunkRetryCount: i + 1 })
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
                var ee = r("WAWebMsgKey").fromString(e.msgKey);
                if (
                  (o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDownloadedMetric({
                    chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                    failureReason: o(
                      "WAWebMdSyncDownloadFailureReason",
                    ).getMdSyncDownloadFailureReason(t),
                    historySyncDownloadMetric: Y,
                    isSuccess: !1,
                    startTs: e.historySyncStepStartedTs,
                  }),
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND)
                ) {
                  var te, oe;
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][rdu] on-demand chunk download failed",
                      ])),
                  ),
                    o(
                      "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                    ).handleHistorySyncOnDemandFailure(
                      (te = e.peerDataRequestChatId) != null ? te : "",
                    ),
                    o(
                      "WAWebNonMessageDataRequestLoggingUtils",
                    ).logHistorySyncOnDemandResponse(
                      o("WAWebWamEnumPeerDataResponseApplyResultType")
                        .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                      (oe = e.peerDataRequestSessionId) != null ? oe : "",
                    ));
                }
                (r("WAWebSendHistSyncServerErrorReceiptJob")(
                  ee.remote,
                  ee.id,
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
              (Y.mdBootstrapStepResult = o(
                "WAWebWamEnumMdBootstrapStepResult",
              ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
            var se = new (o("WABinary").Binary)(Z),
              me = yield o("WAGzip").inflate(se.readByteArrayView());
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            );
            var _e = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              me,
            );
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
            );
            var fe =
              o(
                "WAWebOmittedConversationMetadataCapabilities",
              ).canReadOmittedMetadata() ||
              _e.omittedConversationMetadata != null
                ? (yield re.load()).handleDecodedOmittedMetadata(_e, e)
                : !1;
            if (fe !== !1) {
              try {
                yield fe;
              } finally {
                o(
                  "WAWebMetricsAttributionActions",
                ).stopHistorySyncAttributionTracking(e.syncType);
              }
              l.isActive() && l.endSuccess();
              return;
            }
            if ((pe(e, _e), !r("gkx")("26258"))) {
              if (
                _e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP
              )
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] [INITIAL] RECEIVED: decoded ",
                      " conversations; processing messages.",
                    ])),
                  _e.conversations.length,
                );
              else if (
                _e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .RECENT &&
                _e.omittedConversationMetadata == null
              ) {
                var ge;
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] [RECENT] RECEIVED: ordinary RECENT chunk, order=",
                      ", conversations=",
                      ".",
                    ])),
                  (ge = e.chunkOrder) != null ? ge : "unknown",
                  _e.conversations.length,
                );
              }
            }
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] LID-PN mappings start, ",
                  ", cnt=",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                e,
                void 0,
                void 0,
              ),
              _e.phoneNumberToLidMappings.length,
            );
            var he = [];
            _e.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                he.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            });
            var ye = {
              mappings: he,
              flushImmediately: !0,
              learningSource: "history-sync-chunk",
            };
            (e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
              ? yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(ye)
              : yield o(
                  "WAWebDBCreateLidPnMappings",
                ).createLidPnMappingsInBatches(ye),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] LID-PN mappings done, ",
                    ", cnt=",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  void 0,
                ),
                he.length,
              ));
            var Ce = o(
              "WAWebHistorySyncNotificationCommonUtils",
            ).getLidMappingAsStringSet(he);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "completed learning lid mappings for history sync. count: ",
                      ". ",
                      "...",
                    ])),
                  Ce == null ? void 0 : Ce.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(Ce),
                )
                .verbose();
            var be = new Map();
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              e.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
              e.chunkOrder,
            ),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] chunk downloaded, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  void 0,
                  _e.conversations.length,
                ),
              ));
            var ve = o("WATimeUtils").unixTimeMs();
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
              e.chunkOrder != null &&
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
            var Se = function (n) {
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: X,
                startTs: e.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: n,
              });
            };
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
            _e.statusV3Messages &&
            _e.statusV3Messages.length > 0
              ? yield o("WAWebHistorySyncHandleStatusMessages")
                  .handleStatusMessages({
                    chunkDownloadFinishTimestamp: ve,
                    chunkInfo: e,
                    historySyncDataAppliedMetric: X,
                    historySyncDownloadMetric: Y,
                    proto: _e,
                  })
                  .catch(function (e) {
                    throw (
                      o("WALogger")
                        .LOG(
                          k ||
                            (k = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] storing status messages failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e)),
                      Se(String(e)),
                      e
                    );
                  })
              : e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .NON_BLOCKING_DATA
                ? yield o("WAWebHistoryMsgHandlerAction")
                    .handleNonBlockingData({
                      chunkDownloadFinishTimestamp: ve,
                      chunkInfo: e,
                      historySyncDataAppliedMetric: X,
                      historySyncDownloadMetric: Y,
                      proto: _e,
                    })
                    .catch(function (e) {
                      throw (
                        o("WALogger")
                          .LOG(
                            I ||
                              (I = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] storing non blocking data failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e)),
                        Se(String(e)),
                        e
                      );
                    })
                : e.syncType !==
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.PUSH_NAME &&
                  (_e.conversations = _e.conversations.reduce(function (e, t) {
                    var n = null;
                    try {
                      n = o("WAWebWidFactory").createWid(t.id);
                    } catch (e) {
                      o("WALogger")
                        .WARN(
                          T ||
                            (T = babelHelpers.taggedTemplateLiteralLoose([
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
            var Re = [],
              Le = [],
              Ee = [];
            if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
            )
              yield o("WAWebHistoryMsgHandlerAction")
                .handleInitialSyncMsgs({
                  chunkDownloadFinishTimestamp: ve,
                  chunkInfo: e,
                  historyLidPnMappings: he,
                  historySyncDataAppliedMetric: X,
                  historySyncDownloadMetric: Y,
                  newLidMetadata: Re,
                  newUsernameUpdates: Ee,
                  proto: _e,
                })
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial sync messages failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    Se(String(e)),
                    e
                  );
                });
            else if (
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .PUSH_NAME
            )
              yield o("WAWebHistorySyncHandlePushname")
                .handlePushName(_e, e, Y, X, ve)
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing initial pushname failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    Se(String(e)),
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start processing non initial status messages",
                  ])),
              ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              !ue(e, _e))
            ) {
              var ke,
                Ie = [],
                Te = new Set(),
                De = [],
                xe = [],
                $e = [],
                Pe = new Set(),
                Ne = [],
                Me = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                we = 0,
                Ae = !1;
              (Me == null || r("isEmptyObject")(Me)) &&
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] boundary data is null or empty",
                    ])),
                );
              var Fe = [],
                Oe = [],
                Be = [],
                We = [],
                qe = 0,
                Ue = 0,
                Ve = 0,
                He = 0,
                Ge = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                  ? yield o(
                      "WAWebApiChatBulkGetByHistory",
                    ).bulkGetChatsMaybeByHistory(
                      _e.conversations.map(function (e) {
                        return e.id;
                      }),
                    )
                  : [],
                ze =
                  (ke = yield ae == null ? void 0 : ae(_e, e)) != null
                    ? ke
                    : null;
              ze != null && (Ge[0] = ze);
              for (var je = 0; je < _e.conversations.length; je++) {
                var Ke = !1,
                  Qe = _e.conversations[je],
                  Xe = Qe.id,
                  Ye = Me == null ? void 0 : Me[Xe];
                if (Ye == null && ze == null) {
                  Fe.length < 3 && Fe.push(r("gkx")("26258") ? "-" : Xe);
                  var Je = o("WAWebWidFactory").createWid(Xe).toJid();
                  ((Me == null ? void 0 : Me[Je]) != null &&
                    Oe.length < 3 &&
                    Oe.push(r("gkx")("26258") ? "-" : Xe),
                    (Ke = !0));
                }
                var Ze = o("WAWebWidFactory").createWid(Xe);
                Ze.isNewsletter() &&
                  (Be.length < 3 && Be.push(r("gkx")("26258") ? "-" : Xe),
                  (Ke = !0));
                var et =
                    ze != null
                      ? ze
                      : o(
                            "WAWebHistorySyncLidChatGating",
                          ).isForcedHistoryLidChat()
                        ? Ge[je]
                        : yield o("WAWebApiChatCommon").getChatMaybeByHistory(
                            Xe,
                          ),
                  tt =
                    (et == null ? void 0 : et.id) != null
                      ? o("WAWebWidFactory").createWid(et.id)
                      : Ze,
                  nt =
                    (et == null ? void 0 : et.endOfHistoryTransferType) ===
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
                if (
                  (((!et && Ye != null) ||
                    (et && et.endOfHistoryTransferType == null && ze == null) ||
                    nt) &&
                    (We.length < 3 && We.push(r("gkx")("26258") ? "-" : Xe),
                    (Ke = !0)),
                  Ke)
                )
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.ON_DEMAND && (Ae = !0);
                else {
                  for (
                    var rt = 0,
                      ot = self.performance.now(),
                      at = 0,
                      it = 0,
                      lt = 0,
                      st = 0,
                      ut = 0;
                    ut < Qe.messages.length;
                    ut++
                  ) {
                    var ct, dt, mt, pt;
                    we++;
                    var _t = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (++rt >= _t.batchSize) {
                      var ft = self.performance.now(),
                        gt = ft - ot;
                      (at++,
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          gt,
                          rt,
                        ),
                        _t.delayMs > 0 &&
                          (it++,
                          yield o("WAPromiseDelays").delayMs(_t.delayMs)),
                        (rt = 0),
                        (ot = self.performance.now()));
                    }
                    var ht = Qe.messages[ut],
                      yt = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                        ht.msgOrderId,
                      );
                    if (!(Ye != null && Ye !== -1 && yt != null && yt >= Ye)) {
                      var Ct =
                        (ht == null ||
                        (ct = ht.message) == null ||
                        (ct = ct.message) == null ||
                        (ct = ct.protocolMessage) == null
                          ? void 0
                          : ct.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .REQUEST_WELCOME_MESSAGE;
                      if (Ct === !0) {
                        lt++;
                        continue;
                      }
                      var bt =
                        (ht == null ||
                        (dt = ht.message) == null ||
                        (dt = dt.message) == null ||
                        (dt = dt.protocolMessage) == null
                          ? void 0
                          : dt.type) ===
                        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                          .BOT_MEMU_ONBOARDING_MESSAGE;
                      if (bt) {
                        st++;
                        continue;
                      }
                      if (
                        !o(
                          "WAWebLimitSharingProtoUtils",
                        ).shouldWithholdHistorySyncMessage(Qe, ht)
                      ) {
                        Pe.add(Xe);
                        var vt = o(
                          "WAWebHistorySyncNotificationCommonUtils",
                        ).parseWebMsgInfoAndReturnNullOnFailure({
                          protobufChatId: Ze,
                          message: ht.message,
                          chunkInfo: e,
                          allLidMapping: Ce,
                          totalMissingMapping: be,
                          historyLidPnMappings: he,
                          dbChatId: tt,
                        });
                        if (
                          (vt &&
                            vt.id.remote.toString() !== Xe &&
                            Pe.add(vt.id.remote.toString()),
                          ut === 0 && vt && et)
                        ) {
                          var St = yield o("WAWebSchemaMessage")
                            .getMessageTable()
                            .betweenCount(
                              ["internalId"],
                              o("WAWebDBMessageUtils").beginningOfChat(tt),
                              o("WAWebDBMessageUtils").endOfChat(tt),
                            );
                          St === 0 && Ne.push(vt);
                        }
                        if (
                          (($e = $e.concat(
                            o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg(
                              {
                                webMsgInfo: ht.message,
                                parsedWebMsgInfo: vt,
                                isFromCag:
                                  (mt = Qe.isDefaultSubgroup) != null ? mt : !1,
                              },
                            ),
                          )),
                          vt != null &&
                            ((pt = ht.message) == null ||
                            (pt = pt.commentMetadata) == null
                              ? void 0
                              : pt.commentParentKey) == null &&
                            (Te.has(vt.id.toString()) &&
                              Te.delete(vt == null ? void 0 : vt.id.toString()),
                            Ie.push(vt)),
                          vt != null &&
                            o("WAWebMessageAssociation.flow").isAssociatedMsg(
                              vt,
                            ))
                        ) {
                          var Rt = vt.parentMsgKey.toString();
                          (Te.add(Rt), De.push(vt));
                        }
                        vt != null &&
                          o("WAWebThreadMsgUtils").isThreadMsg(vt) &&
                          xe.push(vt);
                      }
                    }
                  }
                  if (
                    ((qe += at), (Ue += it), (Ve += lt), (He += st), rt > 0)
                  ) {
                    var Lt = self.performance.now(),
                      Et = Lt - ot;
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      Et,
                      rt,
                    );
                  }
                }
              }
              (qe > 0 &&
                o("WALogger")
                  .LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Throttling observed ",
                        " times across all conversations",
                      ])),
                    qe,
                  )
                  .tags("history-sync"),
                Ue > 0 &&
                  o("WALogger")
                    .LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Applied ",
                          " message throttling delays across all conversations",
                        ])),
                      Ue,
                    )
                    .tags("history-sync"),
                Ve > 0 &&
                  o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    Ve,
                  ),
                He > 0 &&
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    He,
                  ),
                Fe.length > 0 &&
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary => ",
                          "",
                        ])),
                      Fe.length,
                      Fe,
                    )
                    .tags("history-sync"),
                Oe.length > 0 &&
                  o("WALogger")
                    .LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, null boundary, exist as jid",
                        ])),
                      Oe.length,
                    )
                    .sendLogs("history-sync-unexpected-conversation-drop"),
                Be.length > 0 &&
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] dropped ",
                        " chats, sync disabled",
                      ])),
                    Be.length,
                  ),
                We.length > 0 &&
                  o("WALogger")
                    .LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] dropped ",
                          " chats, already complete ",
                          "",
                        ])),
                      We.length,
                      o(
                        "WAWebHistorySyncLogUtils",
                      ).getHistorySyncLogDetailsString(e),
                    )
                    .tags("history-sync"),
                (Y.mdBootstrapMessagesCount = we),
                (Y.mdBootstrapChatsCount = _e.conversations.length),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: ve,
                  historySyncDownloadMetric: Y,
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
                (Ie.length !== 0
                  ? yield o(
                      "WAWebHandleHistorySyncMsg",
                    ).handleProgressiveHistorySyncMsgs({
                      associatedMsgs: De,
                      chatsWithRecentOrFullSyncMsgs: Array.from(Pe),
                      chunkOrder: e.chunkOrder,
                      lastMsgs: Ne,
                      missingParentsCache: Te,
                      recentOrFullSyncMsgs: Ie,
                      syncType: e.syncType,
                      threadMsgs: xe,
                      unifiedAddons: $e,
                    })
                  : o("WALogger").LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] no messages from history sync need to handle",
                        ])),
                    ),
                  yield o(
                    "WAWebUserPrefsHistorySync",
                  ).setLastHistorySyncedChunk(e.syncType, e.chunkOrder, j),
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
                  var kt = new Set(), It = [], Tt = 0;
                  Tt < _e.conversations.length;
                  Tt++
                ) {
                  var Dt = _e.conversations[Tt],
                    xt = o("WAWebWidFactory").createWid(Dt.id),
                    $t = Ge[Tt],
                    Pt =
                      ($t == null ? void 0 : $t.id) != null
                        ? o("WAWebWidFactory").createWid($t.id)
                        : xt;
                  kt.add(Pt.toString());
                  var Nt = (Me == null ? void 0 : Me[Dt.id]) != null,
                    Mt = null;
                  ((Nt || (ze != null && !Ae)) &&
                    (Mt = Dt.endOfHistoryTransferType),
                    Mt != null &&
                      It.push(
                        o(
                          "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                        ).updateEndOfHistorySync(Pt, Mt),
                      ));
                }
                if (
                  (yield (ne || (ne = n("Promise"))).all(It),
                  ze != null &&
                    o("WALogger").LOG(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "[odhs-v2] ODHS response processed: ",
                          " messages parsed; failed=",
                          "; ",
                          " history-state updates completed.",
                        ])),
                      Ie.length,
                      Ae,
                      It.length,
                    ),
                  ce({
                    applyHistorySyncOnDemandFailure: Ae,
                    chatRows: Ge,
                    chunkInfo: e,
                    proto: _e,
                  }),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerHistorySyncChunkProcessed(kt),
                  o(
                    "WAWebHistorySyncNotificationUtils",
                  ).commitHistoryDataAppliedMetric({
                    historySyncDataAppliedMetric: X,
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
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk complete, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(e, we, Pe.size),
                  ),
                  !r("gkx")("26258") &&
                    e.syncType ===
                      o("WAWebProtobufsHistorySync.pb")
                        .HistorySync$HistorySyncType.RECENT)
                ) {
                  var wt;
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[odhs-v2] [RECENT] STORED: ordinary chunk order=",
                        ", messages=",
                        ".",
                      ])),
                    (wt = e.chunkOrder) != null ? wt : "unknown",
                    we,
                  );
                }
              } catch (e) {
                throw (
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing recent/full/on-demand chunk failed: ",
                        "",
                      ])),
                    e,
                  ),
                  Se(String(e)),
                  e
                );
              }
            }
            var At = r("WAWebMsgKey").fromString(e.msgKey),
              Ft = new Map();
            (Ft.set(At.remote, [At.id]),
              e.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: At.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: Ft,
                }),
              yield o(
                "WAWebDBCreateLidPnMappings",
              ).createLidPnMappingsInBatches({
                mappings: Le,
                flushImmediately: !0,
                learningSource: "history-sync-chunk",
              }),
              yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                updates: Re,
              }),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(Ee)),
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
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "MMS client delete error",
                        ])),
                    );
                  }));
            var Ot =
              _e.conversations.length === 1 ? _e.conversations[0].id : null;
            (yield de(e.syncType, _e.progress, Ot, e),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                be,
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
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      if (
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t.conversations.length !== 1
      ) {
        var n, a;
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][rdu] on-demand dropped, conv len ",
                " != 1",
              ])),
            r("gkx")("26258") ? "" : t.conversations.length,
          ),
          o(
            "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
          ).handleHistorySyncOnDemandFailure(
            (n = e.peerDataRequestChatId) != null ? n : "",
          ),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            o("WAWebWamEnumPeerDataResponseApplyResultType")
              .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE,
            (a = e.peerDataRequestSessionId) != null ? a : "",
          ),
          !0
        );
      }
      return !1;
    }
    function ce(e) {
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
    function de(e, t, n, r) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
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
                r("gkx")("26258") ||
                  o("WALogger").LOG(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "[odhs-v2] [INITIAL] DONE: initial history stored and completion persisted.",
                      ])),
                  ),
                o("WALogger")
                  .LOG(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
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
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Recent history sync complete",
                    ])),
                )
                .tags("history-sync"),
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                  recentCompleted: !0,
                }),
                r("gkx")("26258") ||
                  o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "[odhs-v2] [RECENT] DONE: ordinary RECENT reached 100% and completion persisted.",
                      ])),
                  ),
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
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Full history sync complete",
                    ])),
                )
                .tags("history-sync"),
                i ||
                  (o("WALogger").LOG(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
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
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      e.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP &&
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] protobuf decoded, ",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              e,
              void 0,
              t.conversations.length,
            ),
          )
          .tags("history-sync");
    }
    l.handleHistorySyncChunk = le;
  },
  98,
);
