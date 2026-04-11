__d(
  "WAWebHandleHistorySyncChunk",
  [
    "Promise",
    "WAAsyncSleep",
    "WABinary",
    "WACommonTaskScheduler",
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
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebNetworkStatus",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
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
          if (
            (t === void 0 && (t = G),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleHistorySyncChunk started for ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
              )
              .tags("history-sync"),
            e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP)
          ) {
            var a = yield o(
              "WAWebUserPrefsHistorySync",
            ).getInitialHistorySyncComplete();
            if (a === !0) {
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Skip duplicate initial sync chunk ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync");
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
              var i = r("WAWebMsgKey").fromString(e.msgKey);
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: i.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: new Map().set(i.remote, [i.id]),
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
          var l = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
              e,
            ),
            B = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(e),
            W = yield o(
              "WAWebHistorySyncNotificationUtils",
            ).getHistorySyncMetrics(e, B == null),
            q = W.historySyncDataAppliedMetric,
            U = W.historySyncDownloadedMetric,
            V = W.historySyncStartDownloadingMetric;
          (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            e.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .DOWNLOADING,
            e.chunkOrder,
          ),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryStartDownloadingMetric(
              V,
              e.historySyncStepStartedTs,
              o("WATimeUtils").unixTimeMs(),
            ));
          var K = null;
          if (B != null)
            (o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] get inline payload in chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
              )
              .tags("history-sync"),
              (K = B));
          else {
            var J = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "HandleHistorySyncChunk",
            });
            try {
              (o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] start downloading chunk, ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync"),
                (K = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt(
                  babelHelpers.extends(
                    { signal: new AbortController().signal, downloadQpl: J },
                    e.downloadOptions,
                  ),
                )),
                J.endSuccess());
            } catch (n) {
              if (
                (J.endFailWithError(
                  "download_failed",
                  r("getErrorSafe")(n).message,
                ),
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] history sync download failed",
                    ])),
                ),
                o(
                  "WAWebMetricsAttributionActions",
                ).stopHistorySyncAttributionTracking(e.syncType),
                n instanceof o("WAWebHttpErrors").HttpNetworkError)
              ) {
                if (
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.INITIAL_BOOTSTRAP &&
                  t > 0
                ) {
                  (yield r("WAWebNetworkStatus").waitIfOffline(),
                    o("WALogger")
                      .WARN(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] init sync download failed, retrying",
                          ])),
                      )
                      .tags("history-sync"));
                  var Z = t - 1;
                  return j(e, Z);
                }
                o(
                  "WAWebApiHistorySyncNotification",
                ).removeLocalFailureFromInFlightChunk(e.msgKey);
                return;
              }
              var ee = r("WAWebMsgKey").fromString(e.msgKey);
              if (
                (o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric(
                  U,
                  e.historySyncStepStartedTs,
                  !1,
                  o("WATimeUtils").unixTimeMs(),
                ),
                e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .ON_DEMAND)
              ) {
                var te, ne;
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    (ne = e.peerDataRequestSessionId) != null ? ne : "",
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
          }
          (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            e.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .DOWNLOADED,
            e.chunkOrder,
          ),
            (e.downloadOptions.mediaKey = ""),
            (U.mdBootstrapStepResult = o(
              "WAWebWamEnumMdBootstrapStepResult",
            ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
          var re = new (o("WABinary").Binary)(K),
            oe = yield o("WAGzip").inflate(re.readByteArrayView());
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
          );
          var ae = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
            oe,
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
              ae.phoneNumberToLidMappings.length,
            ));
          var ie = [];
          ae.phoneNumberToLidMappings.forEach(function (e) {
            var t = e.lidJid,
              n = e.pnJid;
            t != null &&
              n != null &&
              ie.push({
                lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                pn: o("WAWebWidFactory").createUserWidOrThrow(n),
              });
          });
          var le = {
            mappings: ie,
            flushImmediately: !0,
            learningSource: "other",
          };
          (e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP
            ? yield o("WAWebDBCreateLidPnMappings").createLidPnMappings(le)
            : yield o(
                "WAWebDBCreateLidPnMappings",
              ).createLidPnMappingsInBatches(le),
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
              ie.length,
            ));
          var se = o(
            "WAWebHistorySyncNotificationCommonUtils",
          ).getLidMappingAsStringSet(ie);
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "completed learning lid mappings for history sync. count: ",
                    ". ",
                    "...",
                  ])),
                se == null ? void 0 : se.size,
                o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                  se,
                ),
              )
              .verbose();
          var ue = new Map();
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
                ae.conversations.length,
              ),
            ));
          var ce = o("WATimeUtils").unixTimeMs();
          e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT &&
            e.chunkOrder != null &&
            o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
          var de = function (n) {
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: q,
              startTs: e.historySyncStepStartedTs,
              isSuccess: !1,
              forceFlushWamBuffer: !0,
              failureReason: n,
            });
          };
          e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_STATUS_V3 &&
          ae.statusV3Messages &&
          ae.statusV3Messages.length > 0
            ? yield o("WAWebHistorySyncHandleStatusMessages")
                .handleStatusMessages(ae, e, U, q, ce)
                .catch(function (e) {
                  throw (
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] storing status messages failed: ",
                          "",
                        ])),
                      e,
                    ),
                    de("" + e),
                    e
                  );
                })
            : e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .NON_BLOCKING_DATA
              ? yield o("WAWebHistoryMsgHandlerAction")
                  .handleNonBlockingData(ae, e, U, q, ce)
                  .catch(function (e) {
                    throw (
                      o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing non blocking data failed: ",
                            "",
                          ])),
                        e,
                      ),
                      de("" + e),
                      e
                    );
                  })
              : e.syncType !==
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .PUSH_NAME &&
                (ae.conversations = ae.conversations.reduce(function (e, t) {
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
          var me = [],
            pe = [],
            _e = [];
          if (
            e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
          )
            yield o("WAWebHistoryMsgHandlerAction")
              .handleInitialSyncMsgs(ae, e, me, U, q, ce, _e, ie)
              .catch(function (e) {
                throw (
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial sync messages failed: ",
                        "",
                      ])),
                    e,
                  ),
                  de("" + e),
                  e
                );
              });
          else if (
            e.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .PUSH_NAME
          )
            yield o("WAWebHistorySyncHandlePushname")
              .handlePushName(ae, e, U, q, ce)
              .catch(function (e) {
                throw (
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial pushname failed: ",
                        "",
                      ])),
                    e,
                  ),
                  de("" + e),
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
            o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? yield r("WACommonTaskScheduler").yield()
              : yield o("WAPromiseDelays").releaseToEventLoop(),
            !Q(e, ae))
          ) {
            var fe = [],
              ge = new Set(),
              he = [],
              ye = [],
              Ce = [],
              be = new Set(),
              ve = [],
              Se = o(
                "WAWebUserPrefsHistorySync",
              ).getHistoryInitialSyncBoundary(),
              Re = 0,
              Le = 0,
              Ee = !1,
              ke = o(
                "WAWebSyncGatingUtils",
              ).getRecentSyncMessageProcessingBreakIteration(),
              Ie = yield o(
                "WAWebUserPrefsAppStateSync",
              ).getAllCriticalDataSynced();
            (Se == null || r("isEmptyObject")(Se)) &&
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
                Ae = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                  ? yield o(
                      "WAWebApiChatBulkGetByHistory",
                    ).bulkGetChatsMaybeByHistory(
                      ae.conversations.map(function (e) {
                        return e.id;
                      }),
                    )
                  : [],
                Fe = 0;
              Fe < ae.conversations.length;
              Fe++
            ) {
              var Oe = !1,
                Be = ae.conversations[Fe],
                We = Be.id,
                qe = Se == null ? void 0 : Se[We];
              if (qe == null) {
                Te.length < 3 && Te.push(r("gkx")("26258") ? "-" : We);
                var Ue = o("WAWebWidFactory").createWid(We).toJid();
                ((Se == null ? void 0 : Se[Ue]) != null &&
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
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .ON_DEMAND && (Ee = !0);
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
                  Re++;
                  var ot = o(
                    "WAWebHistorySyncDynamicThrottlingManager",
                  ).historySyncDynamicThrottlingManager.getThrottleRate();
                  if (
                    ++je >= ot.batchSize &&
                    o("WAWebABProps").getABPropConfigValue(
                      "wa_web_history_sync_dynamic_throttling",
                    )
                  ) {
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
                        (Xe++, yield o("WAAsyncSleep").asyncSleep(ot.delayMs)),
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
                    be.add(We);
                    var dt = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: Ve,
                      message: lt.message,
                      chunkInfo: e,
                      allLidMapping: se,
                      totalMissingMapping: ue,
                      historyLidPnMappings: ie,
                      dbChatId: Ge,
                    });
                    if (
                      (dt &&
                        dt.id.remote.toString() !== We &&
                        be.add(dt.id.remote.toString()),
                      Ze === 0 && dt && He)
                    ) {
                      var mt = yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .betweenCount(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(Ge),
                          o("WAWebDBMessageUtils").endOfChat(Ge),
                        );
                      mt === 0 && ve.push(dt);
                    }
                    if (
                      ((Ce = Ce.concat(
                        o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                          webMsgInfo: lt.message,
                          parsedWebMsgInfo: dt,
                          isFromCag:
                            (nt = Be.isDefaultSubgroup) != null ? nt : !1,
                        }),
                      )),
                      dt != null &&
                        ((rt = lt.message) == null ||
                        (rt = rt.commentMetadata) == null
                          ? void 0
                          : rt.commentParentKey) == null &&
                        (ge.has(dt.id.toString()) &&
                          o(
                            "WAWebMessageAssociationGatingUtils",
                          ).isMessageAssociationInfraEnabled() &&
                          ge.delete(dt == null ? void 0 : dt.id.toString()),
                        fe.push(dt)),
                      dt != null &&
                        o("WAWebMessageAssociation.flow").isAssociatedMsg(dt) &&
                        o(
                          "WAWebMessageAssociationGatingUtils",
                        ).isMessageAssociationInfraEnabled())
                    ) {
                      var pt = dt.parentMsgKey.toString();
                      (ge.add(pt), he.push(dt));
                    }
                    (dt != null &&
                      o("WAWebThreadMsgUtils").isThreadMsg(dt) &&
                      ye.push(dt),
                      o("WAWebABProps").getABPropConfigValue(
                        "wa_web_history_sync_dynamic_throttling",
                      ) ||
                        (yield o(
                          "WAAsyncSleep",
                        ).asyncSleepAfterGivenLoopIteration(
                          Le++,
                          Ie ? ke : z,
                        )));
                  }
                }
                if (((Pe += Qe), (Ne += Xe), (Me += Ye), (we += Je), je > 0)) {
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
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Throttling observed ",
                      " times across all conversations",
                    ])),
                  Pe,
                )
                .tags("history-sync"),
              Ne > 0 &&
                o("WALogger")
                  .LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Applied ",
                        " message throttling delays across all conversations",
                      ])),
                    Ne,
                  )
                  .tags("history-sync"),
              Me > 0 &&
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Dropped ",
                      " request welcome messages",
                    ])),
                  Me,
                ),
              we > 0 &&
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Dropped ",
                      " memu onboarding messages",
                    ])),
                  we,
                ),
              Te.length > 0 &&
                o("WALogger")
                  .LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] dropped ",
                        " chats, null boundary, exist as jid",
                      ])),
                    De.length,
                  )
                  .sendLogs("history-sync-unexpected-conversation-drop"),
              xe.length > 0 &&
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, sync disabled",
                    ])),
                  xe.length,
                ),
              $e.length > 0 &&
                o("WALogger")
                  .LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
              (U.mdBootstrapMessagesCount = Re),
              (U.mdBootstrapChatsCount = ae.conversations.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                U,
                e.historySyncStepStartedTs,
                !0,
                ce,
              ),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                e.chunkOrder,
              ));
            try {
              (fe.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    fe,
                    Array.from(be),
                    Ce,
                    ve,
                    e.syncType,
                    e.chunkOrder,
                    he,
                    ge,
                    ye,
                  )
                : o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] no messages from history sync need to handle",
                      ])),
                  ),
                yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                  e.syncType,
                  e.chunkOrder,
                  l,
                ),
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
                yield o(
                  "WAWebApiHistorySyncNotification",
                ).updateCurrentlyProcessed(e.msgKey, e.syncType, e.chunkOrder));
              for (
                var gt = new Set(), ht = [], yt = 0;
                yt < ae.conversations.length;
                yt++
              ) {
                var Ct = ae.conversations[yt],
                  bt = o("WAWebWidFactory").createWid(Ct.id),
                  vt = Ae[yt],
                  St =
                    (vt == null ? void 0 : vt.id) != null
                      ? o("WAWebWidFactory").createWid(vt.id)
                      : bt;
                gt.add(St.toString());
                var Rt = (Se == null ? void 0 : Se[Ct.id]) != null,
                  Lt = null;
                (Rt && (Lt = Ct.endOfHistoryTransferType),
                  Lt != null &&
                    ht.push(
                      o(
                        "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                      ).updateEndOfHistorySync(St, Lt),
                    ));
              }
              (yield (H || (H = n("Promise"))).all(ht),
                X(e, ae, Ee, Ae),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerHistorySyncChunkProcessed(gt),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDataAppliedMetric({
                  historySyncDataAppliedMetric: q,
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
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                    Re,
                    be.size,
                  ),
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
                de(String(e)),
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
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: pe,
              flushImmediately: !0,
              learningSource: "other",
            }),
            yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
              updates: me,
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(_e)),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              e.msgKey,
              e.syncType,
              e.chunkOrder,
            ),
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
          var It =
            ae.conversations.length === 1 ? ae.conversations[0].id : null;
          (yield Y(e.syncType, ae.progress, It),
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
              ue,
            ));
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
    function X(e, t, n, r) {
      if (
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t.conversations.length === 1
      ) {
        var a, i;
        o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(
          e.syncType,
        );
        var l = t.conversations[0].id,
          s =
            ((a = r[0]) == null ? void 0 : a.id) != null
              ? o("WAWebWidFactory").createWid(r[0].id).toJid()
              : l;
        (n
          ? o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandFailure(s)
          : o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandSuccess(s),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            n
              ? o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR
              : o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS,
            (i = e.peerDataRequestSessionId) != null ? i : "",
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
