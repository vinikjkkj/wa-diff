__d(
  "WAWebHandleHistorySyncChunk",
  [
    "WAAsyncSleep",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WALongInt",
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
      H = 10,
      G = 100;
    async function z(t, n) {
      if (
        (n === void 0 && (n = H),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handleHistorySyncChunk started for ",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
          )
          .tags("history-sync"),
        t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP)
      ) {
        var a = await o(
          "WAWebUserPrefsHistorySync",
        ).getInitialHistorySyncComplete();
        if (a === !0) {
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Skip duplicate initial sync chunk ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync");
          return;
        }
        await o(
          "WAWebHistorySyncLidChatGating",
        ).persistForceHistoryLidChatSetting();
      }
      if (
        (o(
          "WAWebMetricsAttributionActions",
        ).startHistorySyncAttributionTracking(t.syncType),
        t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_STATUS_V3)
      )
        try {
          var i = r("WAWebMsgKey").fromString(t.msgKey);
          o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: i.remote,
            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
              .HISTORY_SYNC_COMPLETION,
            groupedReceipt: new Map().set(i.remote, [i.id]),
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Status receipt send failed",
                ])),
            )
            .tags("history-sync");
        }
      var l = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(t),
        O = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(t),
        B = await o("WAWebHistorySyncNotificationUtils").getHistorySyncMetrics(
          t,
          O == null,
        ),
        W = B.historySyncDataAppliedMetric,
        q = B.historySyncDownloadedMetric,
        U = B.historySyncStartDownloadingMetric;
      (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
        t.syncType,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING,
        t.chunkOrder,
      ),
        o(
          "WAWebHistorySyncNotificationUtils",
        ).commitHistoryStartDownloadingMetric(
          U,
          t.historySyncStepStartedTs,
          o("WATimeUtils").unixTimeMs(),
        ));
      var V = null;
      if (O != null)
        (o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] get inline payload in chunk, ",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
          )
          .tags("history-sync"),
          (V = O));
      else {
        var X = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "HandleHistorySyncChunk",
        });
        try {
          (o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] start downloading chunk, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync"),
            (V = await o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt(
              babelHelpers.extends(
                { signal: new AbortController().signal, downloadQpl: X },
                t.downloadOptions,
              ),
            )),
            X.endSuccess());
        } catch (e) {
          if (
            (X.endFailWithError(
              "download_failed",
              r("getErrorSafe")(e).message,
            ),
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] history sync download failed",
                ])),
            ),
            o(
              "WAWebMetricsAttributionActions",
            ).stopHistorySyncAttributionTracking(t.syncType),
            e instanceof o("WAWebHttpErrors").HttpNetworkError)
          ) {
            if (
              t.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_BOOTSTRAP &&
              n > 0
            ) {
              (await r("WAWebNetworkStatus").waitIfOffline(),
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] init sync download failed, retrying",
                      ])),
                  )
                  .tags("history-sync"));
              var Y = n - 1;
              return z(t, Y);
            }
            o(
              "WAWebApiHistorySyncNotification",
            ).removeLocalFailureFromInFlightChunk(t.msgKey);
            return;
          }
          var J = r("WAWebMsgKey").fromString(t.msgKey);
          if (
            (o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
              historySyncDownloadMetric: q,
              isSuccess: !1,
              startTs: t.historySyncStepStartedTs,
            }),
            t.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .ON_DEMAND)
          ) {
            var Z, ee;
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][rdu] on-demand chunk download failed",
                ])),
            ),
              o(
                "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
              ).handleHistorySyncOnDemandFailure(
                (Z = t.peerDataRequestChatId) != null ? Z : "",
              ),
              o(
                "WAWebNonMessageDataRequestLoggingUtils",
              ).logHistorySyncOnDemandResponse(
                o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                (ee = t.peerDataRequestSessionId) != null ? ee : "",
              ));
          }
          (r("WAWebSendHistSyncServerErrorReceiptJob")(
            J.remote,
            J.id,
            t.downloadOptions.mediaKey,
          ),
            await o(
              "WAWebApiHistorySyncNotification",
            ).markChunkForReuploadPending(t.msgKey));
          return;
        }
      }
      (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
        t.syncType,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED,
        t.chunkOrder,
      ),
        (t.downloadOptions.mediaKey = ""),
        (q.mdBootstrapStepResult = o(
          "WAWebWamEnumMdBootstrapStepResult",
        ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
      var te = new (o("WABinary").Binary)(V),
        ne = await o("WAGzip").inflate(te.readByteArrayView());
      o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
      );
      var re = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
        ne,
      );
      (o("WAWebAppTracker").AppTracker.stop(
        o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
      ),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] LID-PN mappings start, ",
              ", cnt=",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            void 0,
            void 0,
          ),
          re.phoneNumberToLidMappings.length,
        ));
      var oe = [];
      re.phoneNumberToLidMappings.forEach(function (e) {
        var t = e.lidJid,
          n = e.pnJid;
        t != null &&
          n != null &&
          oe.push({
            lid: o("WAWebWidFactory").createUserLidOrThrow(t),
            pn: o("WAWebWidFactory").createUserWidOrThrow(n),
          });
      });
      var ae = { mappings: oe, flushImmediately: !0, learningSource: "other" };
      (t.syncType ===
      o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
        .INITIAL_BOOTSTRAP
        ? await o("WAWebDBCreateLidPnMappings").createLidPnMappings(ae)
        : await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches(
            ae,
          ),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] LID-PN mappings done, ",
              ", cnt=",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            void 0,
            void 0,
          ),
          oe.length,
        ));
      var ie = o(
        "WAWebHistorySyncNotificationCommonUtils",
      ).getLidMappingAsStringSet(oe);
      o("WAWebCurrentUser").isEmployee() &&
        o("WALogger")
          .LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "completed learning lid mappings for history sync. count: ",
                ". ",
                "...",
              ])),
            ie == null ? void 0 : ie.size,
            o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(ie),
          )
          .verbose();
      var le = new Map();
      (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
        t.syncType,
        o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
        t.chunkOrder,
      ),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] chunk downloaded, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            void 0,
            re.conversations.length,
          ),
        ));
      var se = o("WATimeUtils").unixTimeMs();
      t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT &&
        t.chunkOrder != null &&
        o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
      var ue = function (n) {
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: W,
          startTs: t.historySyncStepStartedTs,
          isSuccess: !1,
          forceFlushWamBuffer: !0,
          failureReason: n,
        });
      };
      t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_STATUS_V3 &&
      re.statusV3Messages &&
      re.statusV3Messages.length > 0
        ? await o("WAWebHistorySyncHandleStatusMessages")
            .handleStatusMessages(re, t, q, W, se)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing status messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                ue(String(e)),
                e
              );
            })
        : t.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .NON_BLOCKING_DATA
          ? await o("WAWebHistoryMsgHandlerAction")
              .handleNonBlockingData(re, t, q, W, se)
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] storing non blocking data failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  ue(String(e)),
                  e
                );
              })
          : t.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .PUSH_NAME &&
            (re.conversations = re.conversations.reduce(function (e, t) {
              var n = null;
              try {
                n = o("WAWebWidFactory").createWid(t.id);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
      var ce = [],
        de = [],
        me = [];
      if (
        t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP
      )
        await o("WAWebHistoryMsgHandlerAction")
          .handleInitialSyncMsgs(re, t, ce, q, W, se, me, oe)
          .catch(function (e) {
            throw (
              o("WALogger")
                .LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] storing initial sync messages failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              ue(String(e)),
              e
            );
          });
      else if (
        t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME
      )
        await o("WAWebHistorySyncHandlePushname")
          .handlePushName(re, t, q, W, se)
          .catch(function (e) {
            throw (
              o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] storing initial pushname failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              ue(String(e)),
              e
            );
          });
      else if (
        ![
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_STATUS_V3,
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .NON_BLOCKING_DATA,
        ].includes(t.syncType) &&
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] start processing non initial status messages",
            ])),
        ),
        await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
        !j(t, re))
      ) {
        var pe = [],
          _e = new Set(),
          fe = [],
          ge = [],
          he = [],
          ye = new Set(),
          Ce = [],
          be = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(),
          ve = 0,
          Se = 0,
          Re = !1,
          Le = o(
            "WAWebSyncGatingUtils",
          ).getRecentSyncMessageProcessingBreakIteration(),
          Ee = await o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
        (be == null || r("isEmptyObject")(be)) &&
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] boundary data is null or empty",
              ])),
          );
        for (
          var ke = [],
            Ie = [],
            Te = [],
            De = [],
            xe = 0,
            $e = 0,
            Pe = 0,
            Ne = 0,
            Me = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? await o(
                  "WAWebApiChatBulkGetByHistory",
                ).bulkGetChatsMaybeByHistory(
                  re.conversations.map(function (e) {
                    return e.id;
                  }),
                )
              : [],
            we = 0;
          we < re.conversations.length;
          we++
        ) {
          var Ae = !1,
            Fe = re.conversations[we],
            Oe = Fe.id,
            Be = be == null ? void 0 : be[Oe];
          if (Be == null) {
            ke.length < 3 && ke.push(r("gkx")("26258") ? "-" : Oe);
            var We = o("WAWebWidFactory").createWid(Oe).toJid();
            ((be == null ? void 0 : be[We]) != null &&
              Ie.length < 3 &&
              Ie.push(r("gkx")("26258") ? "-" : Oe),
              (Ae = !0));
          }
          var qe = o("WAWebWidFactory").createWid(Oe);
          qe.isNewsletter() &&
            (Te.length < 3 && Te.push(r("gkx")("26258") ? "-" : Oe), (Ae = !0));
          var Ue = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? Me[we]
              : await o("WAWebApiChatCommon").getChatMaybeByHistory(Oe),
            Ve =
              (Ue == null ? void 0 : Ue.id) != null
                ? o("WAWebWidFactory").createWid(Ue.id)
                : qe,
            He =
              (Ue == null ? void 0 : Ue.endOfHistoryTransferType) ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
          if (
            (((!Ue && Be != null) ||
              (Ue && Ue.endOfHistoryTransferType == null) ||
              He) &&
              (De.length < 3 && De.push(r("gkx")("26258") ? "-" : Oe),
              (Ae = !0)),
            Ae)
          )
            t.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .ON_DEMAND && (Re = !0);
          else {
            for (
              var Ge = 0,
                ze = self.performance.now(),
                je = 0,
                Ke = 0,
                Qe = 0,
                Xe = 0,
                Ye = 0;
              Ye < Fe.messages.length;
              Ye++
            ) {
              var Je, Ze, et, tt;
              ve++;
              var nt = o(
                "WAWebHistorySyncDynamicThrottlingManager",
              ).historySyncDynamicThrottlingManager.getThrottleRate();
              if (
                ++Ge >= nt.batchSize &&
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_history_sync_dynamic_throttling",
                )
              ) {
                var rt = self.performance.now(),
                  ot = rt - ze;
                (je++,
                  o(
                    "WAWebHistorySyncDynamicThrottlingManager",
                  ).historySyncDynamicThrottlingManager.setLastProcessTime(
                    ot,
                    Ge,
                  ),
                  nt.delayMs > 0 &&
                    (Ke++, await o("WAAsyncSleep").asyncSleep(nt.delayMs)),
                  (Ge = 0),
                  (ze = self.performance.now()));
              }
              var at = Fe.messages[Ye],
                it = o("WALongInt").maybeNumberOrThrowIfTooLarge(at.msgOrderId);
              if (!(Be != null && Be !== -1 && it != null && it >= Be)) {
                var lt =
                  (at == null ||
                  (Je = at.message) == null ||
                  (Je = Je.message) == null ||
                  (Je = Je.protocolMessage) == null
                    ? void 0
                    : Je.type) ===
                  o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .REQUEST_WELCOME_MESSAGE;
                if (lt === !0) {
                  Qe++;
                  continue;
                }
                var st =
                  (at == null ||
                  (Ze = at.message) == null ||
                  (Ze = Ze.message) == null ||
                  (Ze = Ze.protocolMessage) == null
                    ? void 0
                    : Ze.type) ===
                  o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .BOT_MEMU_ONBOARDING_MESSAGE;
                if (st) {
                  Xe++;
                  continue;
                }
                ye.add(Oe);
                var ut = o(
                  "WAWebHistorySyncNotificationCommonUtils",
                ).parseWebMsgInfoAndReturnNullOnFailure({
                  protobufChatId: qe,
                  message: at.message,
                  chunkInfo: t,
                  allLidMapping: ie,
                  totalMissingMapping: le,
                  historyLidPnMappings: oe,
                  dbChatId: Ve,
                });
                if (
                  (ut &&
                    ut.id.remote.toString() !== Oe &&
                    ye.add(ut.id.remote.toString()),
                  Ye === 0 && ut && Ue)
                ) {
                  var ct = await o("WAWebSchemaMessage")
                    .getMessageTable()
                    .betweenCount(
                      ["internalId"],
                      o("WAWebDBMessageUtils").beginningOfChat(Ve),
                      o("WAWebDBMessageUtils").endOfChat(Ve),
                    );
                  ct === 0 && Ce.push(ut);
                }
                if (
                  ((he = he.concat(
                    o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                      webMsgInfo: at.message,
                      parsedWebMsgInfo: ut,
                      isFromCag: (et = Fe.isDefaultSubgroup) != null ? et : !1,
                    }),
                  )),
                  ut != null &&
                    ((tt = at.message) == null ||
                    (tt = tt.commentMetadata) == null
                      ? void 0
                      : tt.commentParentKey) == null &&
                    (_e.has(ut.id.toString()) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled() &&
                      _e.delete(ut == null ? void 0 : ut.id.toString()),
                    pe.push(ut)),
                  ut != null &&
                    o("WAWebMessageAssociation.flow").isAssociatedMsg(ut) &&
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled())
                ) {
                  var dt = ut.parentMsgKey.toString();
                  (_e.add(dt), fe.push(ut));
                }
                (ut != null &&
                  o("WAWebThreadMsgUtils").isThreadMsg(ut) &&
                  ge.push(ut),
                  o("WAWebABProps").getABPropConfigValue(
                    "wa_web_history_sync_dynamic_throttling",
                  ) ||
                    (await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                      Se++,
                      Ee ? Le : G,
                    )));
              }
            }
            if (((xe += je), ($e += Ke), (Pe += Qe), (Ne += Xe), Ge > 0)) {
              var mt = self.performance.now(),
                pt = mt - ze;
              o(
                "WAWebHistorySyncDynamicThrottlingManager",
              ).historySyncDynamicThrottlingManager.setLastProcessTime(pt, Ge);
            }
          }
        }
        (xe > 0 &&
          o("WALogger")
            .LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Throttling observed ",
                  " times across all conversations",
                ])),
              xe,
            )
            .tags("history-sync"),
          $e > 0 &&
            o("WALogger")
              .LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Applied ",
                    " message throttling delays across all conversations",
                  ])),
                $e,
              )
              .tags("history-sync"),
          Pe > 0 &&
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Dropped ",
                  " request welcome messages",
                ])),
              Pe,
            ),
          Ne > 0 &&
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Dropped ",
                  " memu onboarding messages",
                ])),
              Ne,
            ),
          ke.length > 0 &&
            o("WALogger")
              .LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " chats, null boundary => ",
                    "",
                  ])),
                ke.length,
                ke,
              )
              .tags("history-sync"),
          Ie.length > 0 &&
            o("WALogger")
              .LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " chats, null boundary, exist as jid",
                  ])),
                Ie.length,
              )
              .sendLogs("history-sync-unexpected-conversation-drop"),
          Te.length > 0 &&
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] dropped ",
                  " chats, sync disabled",
                ])),
              Te.length,
            ),
          De.length > 0 &&
            o("WALogger")
              .LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " chats, already complete ",
                    "",
                  ])),
                De.length,
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
          (q.mdBootstrapMessagesCount = ve),
          (q.mdBootstrapChatsCount = re.conversations.length),
          o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
            chunkDownloadFinishTimestamp: se,
            historySyncDownloadMetric: q,
            isSuccess: !0,
            startTs: t.historySyncStepStartedTs,
          }),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            t.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .MESSAGE_PREPROCESSED,
            t.chunkOrder,
          ));
        try {
          (pe.length !== 0
            ? await o(
                "WAWebHandleHistorySyncMsg",
              ).handleProgressiveHistorySyncMsgs({
                associatedMsgs: fe,
                chatsWithRecentOrFullSyncMsgs: Array.from(ye),
                chunkOrder: t.chunkOrder,
                lastMsgs: Ce,
                missingParentsCache: _e,
                recentOrFullSyncMsgs: pe,
                syncType: t.syncType,
                threadMsgs: ge,
                unifiedAddons: he,
              })
            : o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] no messages from history sync need to handle",
                  ])),
              ),
            await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
              t.syncType,
              t.chunkOrder,
              l,
            ),
            o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
            await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              t.msgKey,
              t.syncType,
              t.chunkOrder,
            ));
          for (
            var _t = new Set(), ft = [], gt = 0;
            gt < re.conversations.length;
            gt++
          ) {
            var ht = re.conversations[gt],
              yt = o("WAWebWidFactory").createWid(ht.id),
              Ct = Me[gt],
              bt =
                (Ct == null ? void 0 : Ct.id) != null
                  ? o("WAWebWidFactory").createWid(Ct.id)
                  : yt;
            _t.add(bt.toString());
            var vt = (be == null ? void 0 : be[ht.id]) != null,
              St = null;
            (vt && (St = ht.endOfHistoryTransferType),
              St != null &&
                ft.push(
                  o(
                    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                  ).updateEndOfHistorySync(bt, St),
                ));
          }
          (await Promise.all(ft),
            K({
              applyHistorySyncOnDemandFailure: Re,
              chatRows: Me,
              chunkInfo: t,
              proto: re,
            }),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerHistorySyncChunkProcessed(_t),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: W,
              startTs: t.historySyncStepStartedTs,
              isSuccess: !0,
            }),
            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.APPLIED,
              t.chunkOrder,
            ),
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing recent/full/on-demand chunk complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                ve,
                ye.size,
              ),
            ));
        } catch (e) {
          throw (
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing recent/full/on-demand chunk failed: ",
                  "",
                ])),
              e,
            ),
            ue(String(e)),
            e
          );
        }
      }
      var Rt = r("WAWebMsgKey").fromString(t.msgKey),
        Lt = new Map();
      (Lt.set(Rt.remote, [Rt.id]),
        t.syncType !==
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_STATUS_V3 &&
          o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: Rt.remote,
            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
              .HISTORY_SYNC_COMPLETION,
            groupedReceipt: Lt,
          }),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
          mappings: de,
          flushImmediately: !0,
          learningSource: "other",
        }),
        await o("WAWebUpdateLidMetadataApi").updateLidMetadata({ updates: ce }),
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          (await o("WAWebSetUsernameJob").setUsernamesJob(me)),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          t.msgKey,
          t.syncType,
          t.chunkOrder,
        ),
        t.downloadOptions.encFilehash != null &&
          r("WAWebMmsClient")
            .deleteMdHistorySyncBlob({
              directPath: t.downloadOptions.directPath,
              encFilehash: t.downloadOptions.encFilehash,
              signal: new AbortController().signal,
              encHandle: t.encHandle,
              companionUserSecret: o(
                "WAWebUserPrefsIndexedDBStorage",
              ).userPrefsIdb.get("WAWebCompanionMetaNonce"),
            })
            .catch(function (e) {
              o("WALogger").WARN(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "MMS client delete error",
                  ])),
              );
            }));
      var Et = re.conversations.length === 1 ? re.conversations[0].id : null;
      (await Q(t.syncType, re.progress, Et),
        o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(le));
    }
    function j(e, t) {
      if (
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t.conversations.length !== 1
      ) {
        var n, a;
        return (
          o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
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
    function K(e) {
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
    async function Q(e, t, n) {
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
          await o("WAWebUserPrefsHistorySync").setInitialHistorySyncComplete(),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
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
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerRecentChatHistorySynced());
      else if (
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL &&
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
            o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary({})),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
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
        await o("WAWebUserPrefsHistorySync").setHistorySyncStatus(
          ((i = {}), (i[l] = !0), i),
        );
      }
    }
    l.handleHistorySyncChunk = z;
  },
  98,
);
