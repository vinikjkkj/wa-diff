__d(
  "WAWebHandleHistorySyncChunk",
  [
    "JSResourceForInteraction",
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
      ne = r("JSResourceForInteraction")(
        "WAWebOmittedConversationMetadataReceiver",
      ).__setRef("WAWebHandleHistorySyncChunk"),
      re = (e = n("cr:19090")) != null ? e : {},
      oe = re.getOmittedHistorySyncChat,
      ae = 10;
    async function ie(e, t) {
      var n =
          t != null
            ? t
            : {
                qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                  entryPoint: "HandleHistorySyncChunk",
                }),
                initialChunkRetryCount: 0,
              },
        a = n.initialChunkRetryCount,
        i = n.qpl;
      a === 1 && i.addAnnotations({ bool: { hasRetry: !0 } });
      try {
        if (
          (o("WALogger")
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
          var l = await o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          if (l === !0) {
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Skip duplicate initial sync chunk ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
              )
              .tags("history-sync"),
              i.endSuccess({
                string: { downloadResult: "duplicate_initial_sync_chunk" },
              }));
            return;
          }
          await o(
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
            var G = r("WAWebMsgKey").fromString(e.msgKey);
            o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: G.remote,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                .HISTORY_SYNC_COMPLETION,
              groupedReceipt: new Map().set(G.remote, [G.id]),
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
        var z = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
            e,
          ),
          j = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(e),
          K = await o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
            e,
            j == null,
          ),
          Q = K.historySyncDataAppliedMetric,
          X = K.historySyncDownloadedMetric,
          Y = K.historySyncStartDownloadingMetric;
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
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
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
            Y,
            e.historySyncStepStartedTs,
            o("WATimeUtils").unixTimeMs(),
          ));
        var J = null;
        if (j != null)
          (i.addPoint("history_sync_inline_payload"),
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] get inline payload in chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
              )
              .tags("history-sync"),
            (J = j));
        else
          try {
            (o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start downloading chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
              )
              .tags("history-sync"),
              (J = await o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt(
                babelHelpers.extends(
                  { signal: new AbortController().signal, downloadQpl: i },
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
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP &&
                a < ae
              )
                return (
                  await r("WAWebNetworkStatus").waitIfOffline(),
                  o("WALogger")
                    .WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] init sync download failed, retrying",
                        ])),
                    )
                    .tags("history-sync"),
                  ie(e, { qpl: i, initialChunkRetryCount: a + 1 })
                );
              (i.endFailWithError(
                "download_failed",
                r("getErrorSafe")(t).message,
              ),
                o(
                  "WAWebApiHistorySyncNotification",
                ).removeLocalFailureFromInFlightChunk(e.msgKey));
              return;
            }
            i.endFailWithError("download_failed", r("getErrorSafe")(t).message);
            var Z = r("WAWebMsgKey").fromString(e.msgKey);
            if (
              (o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                failureReason: o(
                  "WAWebMdSyncDownloadFailureReason",
                ).getMdSyncDownloadFailureReason(t),
                historySyncDownloadMetric: X,
                isSuccess: !1,
                startTs: e.historySyncStepStartedTs,
              }),
              e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND)
            ) {
              var ee, te;
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][rdu] on-demand chunk download failed",
                  ])),
              ),
                o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).handleHistorySyncOnDemandFailure(
                  (ee = e.peerDataRequestChatId) != null ? ee : "",
                ),
                o(
                  "WAWebNonMessageDataRequestLoggingUtils",
                ).logHistorySyncOnDemandResponse(
                  o("WAWebWamEnumPeerDataResponseApplyResultType")
                    .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                  (te = e.peerDataRequestSessionId) != null ? te : "",
                ));
            }
            (r("WAWebSendHistSyncServerErrorReceiptJob")(
              Z.remote,
              Z.id,
              e.downloadOptions.mediaKey,
            ),
              await o(
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
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(e),
            )
            .tags("history-sync"),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            e.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .DOWNLOADED,
            e.chunkOrder,
          ),
          (e.downloadOptions.mediaKey = ""),
          (X.mdBootstrapStepResult = o(
            "WAWebWamEnumMdBootstrapStepResult",
          ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
        var re = new (o("WABinary").Binary)(J),
          de = await o("WAGzip").inflate(re.readByteArrayView());
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
        );
        var me = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
          de,
        );
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
        );
        var pe =
          o(
            "WAWebOmittedConversationMetadataCapabilities",
          ).canReadOmittedMetadata() || me.omittedConversationMetadata != null
            ? (await ne.load()).handleDecodedOmittedMetadata(me, e)
            : !1;
        if (pe !== !1) {
          try {
            await pe;
          } finally {
            o(
              "WAWebMetricsAttributionActions",
            ).stopHistorySyncAttributionTracking(e.syncType);
          }
          i.isActive() && i.endSuccess();
          return;
        }
        if ((ce(e, me), !r("gkx")("26258"))) {
          if (
            me.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
          )
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [INITIAL] RECEIVED: decoded ",
                  " conversations; processing messages.",
                ])),
              me.conversations.length,
            );
          else if (
            me.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
            me.omittedConversationMetadata == null
          ) {
            var _e;
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [RECENT] RECEIVED: ordinary RECENT chunk, order=",
                  ", conversations=",
                  ".",
                ])),
              (_e = e.chunkOrder) != null ? _e : "unknown",
              me.conversations.length,
            );
          }
        }
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] LID-PN mappings start, ",
              ", cnt=",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            e,
            void 0,
            void 0,
          ),
          me.phoneNumberToLidMappings.length,
        );
        var fe = [];
        me.phoneNumberToLidMappings.forEach(function (e) {
          var t = e.lidJid,
            n = e.pnJid;
          t != null &&
            n != null &&
            fe.push({
              lid: o("WAWebWidFactory").createUserLidOrThrow(t),
              pn: o("WAWebWidFactory").createUserWidOrThrow(n),
            });
        });
        var ge = {
          mappings: fe,
          write: "now",
          learningSource: "history-sync-chunk",
        };
        (e.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP
          ? await o("WAWebDBCreateLidPnMappings").createLidPnMappings(ge)
          : await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches(
              ge,
            ),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] LID-PN mappings done, ",
                ", cnt=",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              e,
              void 0,
              void 0,
            ),
            fe.length,
          ));
        var he = o(
          "WAWebHistorySyncNotificationCommonUtils",
        ).getLidMappingAsStringSet(fe);
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger")
            .LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "completed learning lid mappings for history sync. count: ",
                  ". ",
                  "...",
                ])),
              he == null ? void 0 : he.size,
              o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                he,
              ),
            )
            .verbose();
        var ye = new Map();
        (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
          e.syncType,
          o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
          e.chunkOrder,
        ),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] chunk downloaded, ",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              e,
              void 0,
              me.conversations.length,
            ),
          ));
        var Ce = o("WATimeUtils").unixTimeMs();
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .RECENT &&
          e.chunkOrder != null &&
          o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
        var be = function (n) {
          o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric(
            {
              historySyncDataAppliedMetric: Q,
              startTs: e.historySyncStepStartedTs,
              isSuccess: !1,
              forceFlushWamBuffer: !0,
              failureReason: n,
            },
          );
        };
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_STATUS_V3 &&
        me.statusV3Messages &&
        me.statusV3Messages.length > 0
          ? await o("WAWebHistorySyncHandleStatusMessages")
              .handleStatusMessages({
                chunkDownloadFinishTimestamp: Ce,
                chunkInfo: e,
                historySyncDataAppliedMetric: Q,
                historySyncDownloadMetric: X,
                proto: me,
              })
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] storing status messages failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  be(String(e)),
                  e
                );
              })
          : e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .NON_BLOCKING_DATA
            ? await o("WAWebHistoryMsgHandlerAction")
                .handleNonBlockingData({
                  chunkDownloadFinishTimestamp: Ce,
                  chunkInfo: e,
                  historySyncDataAppliedMetric: Q,
                  historySyncDownloadMetric: X,
                  proto: me,
                })
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing non blocking data failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    be(String(e)),
                    e
                  );
                })
            : e.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME &&
              (me.conversations = me.conversations.reduce(function (e, t) {
                var n = null;
                try {
                  n = o("WAWebWidFactory").createWid(t.id);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
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
        var ve = [],
          Se = [],
          Re = [];
        if (
          e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP
        )
          await o("WAWebHistoryMsgHandlerAction")
            .handleInitialSyncMsgs({
              chunkDownloadFinishTimestamp: Ce,
              chunkInfo: e,
              historyLidPnMappings: fe,
              historySyncDataAppliedMetric: Q,
              historySyncDownloadMetric: X,
              newLidMetadata: ve,
              newUsernameUpdates: Re,
              proto: me,
            })
            .catch(function (e) {
              throw (
                o("WALogger")
                  .LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial sync messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                be(String(e)),
                e
              );
            });
        else if (
          e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .PUSH_NAME
        )
          await o("WAWebHistorySyncHandlePushname")
            .handlePushName(me, e, X, Q, Ce)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial pushname failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                be(String(e)),
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
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing non initial status messages",
              ])),
          ),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          !le(e, me))
        ) {
          var Le,
            Ee = [],
            ke = new Set(),
            Ie = [],
            Te = [],
            De = [],
            xe = new Set(),
            $e = [],
            Pe = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(),
            Ne = 0,
            Me = !1;
          (Pe == null || r("isEmptyObject")(Pe)) &&
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] boundary data is null or empty",
                ])),
            );
          var we = [],
            Ae = [],
            Fe = [],
            Oe = [],
            Be = 0,
            We = 0,
            qe = 0,
            Ue = 0,
            Ve = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? await o(
                  "WAWebApiChatBulkGetByHistory",
                ).bulkGetChatsMaybeByHistory(
                  me.conversations.map(function (e) {
                    return e.id;
                  }),
                )
              : [],
            He =
              (Le = await (oe == null ? void 0 : oe(me, e))) != null
                ? Le
                : null;
          He != null && (Ve[0] = He);
          for (var Ge = 0; Ge < me.conversations.length; Ge++) {
            var ze = !1,
              je = me.conversations[Ge],
              Ke = je.id,
              Qe = Pe == null ? void 0 : Pe[Ke];
            if (Qe == null && He == null) {
              we.length < 3 && we.push(r("gkx")("26258") ? "-" : Ke);
              var Xe = o("WAWebWidFactory").createWid(Ke).toJid();
              ((Pe == null ? void 0 : Pe[Xe]) != null &&
                Ae.length < 3 &&
                Ae.push(r("gkx")("26258") ? "-" : Ke),
                (ze = !0));
            }
            var Ye = o("WAWebWidFactory").createWid(Ke);
            Ye.isNewsletter() &&
              (Fe.length < 3 && Fe.push(r("gkx")("26258") ? "-" : Ke),
              (ze = !0));
            var Je =
                He != null
                  ? He
                  : o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                    ? Ve[Ge]
                    : await o("WAWebApiChatCommon").getChatMaybeByHistory(Ke),
              Ze =
                (Je == null ? void 0 : Je.id) != null
                  ? o("WAWebWidFactory").createWid(Je.id)
                  : Ye,
              et =
                (Je == null ? void 0 : Je.endOfHistoryTransferType) ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
            if (
              (((!Je && Qe != null) ||
                (Je && Je.endOfHistoryTransferType == null && He == null) ||
                et) &&
                (Oe.length < 3 && Oe.push(r("gkx")("26258") ? "-" : Ke),
                (ze = !0)),
              ze)
            )
              e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND && (Me = !0);
            else {
              for (
                var tt = 0,
                  nt = self.performance.now(),
                  rt = 0,
                  ot = 0,
                  at = 0,
                  it = 0,
                  lt = 0;
                lt < je.messages.length;
                lt++
              ) {
                var st, ut, ct, dt;
                Ne++;
                var mt = o(
                  "WAWebHistorySyncDynamicThrottlingManager",
                ).historySyncDynamicThrottlingManager.getThrottleRate();
                if (++tt >= mt.batchSize) {
                  var pt = self.performance.now(),
                    _t = pt - nt;
                  (rt++,
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      _t,
                      tt,
                    ),
                    mt.delayMs > 0 &&
                      (ot++, await o("WAPromiseDelays").delayMs(mt.delayMs)),
                    (tt = 0),
                    (nt = self.performance.now()));
                }
                var ft = je.messages[lt],
                  gt = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    ft.msgOrderId,
                  );
                if (!(Qe != null && Qe !== -1 && gt != null && gt >= Qe)) {
                  var ht =
                    (ft == null ||
                    (st = ft.message) == null ||
                    (st = st.message) == null ||
                    (st = st.protocolMessage) == null
                      ? void 0
                      : st.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (ht === !0) {
                    at++;
                    continue;
                  }
                  var yt =
                    (ft == null ||
                    (ut = ft.message) == null ||
                    (ut = ut.message) == null ||
                    (ut = ut.protocolMessage) == null
                      ? void 0
                      : ut.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (yt) {
                    it++;
                    continue;
                  }
                  if (
                    !o(
                      "WAWebLimitSharingProtoUtils",
                    ).shouldWithholdHistorySyncMessage(je, ft)
                  ) {
                    xe.add(Ke);
                    var Ct = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: Ye,
                      message: ft.message,
                      chunkInfo: e,
                      allLidMapping: he,
                      totalMissingMapping: ye,
                      historyLidPnMappings: fe,
                      dbChatId: Ze,
                    });
                    if (
                      (Ct &&
                        Ct.id.remote.toString() !== Ke &&
                        xe.add(Ct.id.remote.toString()),
                      lt === 0 && Ct && Je)
                    ) {
                      var bt = await o("WAWebSchemaMessage")
                        .getMessageTable()
                        .betweenCount(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(Ze),
                          o("WAWebDBMessageUtils").endOfChat(Ze),
                        );
                      bt === 0 && $e.push(Ct);
                    }
                    if (
                      ((De = De.concat(
                        o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                          webMsgInfo: ft.message,
                          parsedWebMsgInfo: Ct,
                          isFromCag:
                            (ct = je.isDefaultSubgroup) != null ? ct : !1,
                        }),
                      )),
                      Ct != null &&
                        ((dt = ft.message) == null ||
                        (dt = dt.commentMetadata) == null
                          ? void 0
                          : dt.commentParentKey) == null &&
                        (ke.has(Ct.id.toString()) &&
                          ke.delete(Ct == null ? void 0 : Ct.id.toString()),
                        Ee.push(Ct)),
                      Ct != null &&
                        o("WAWebMessageAssociation.flow").isAssociatedMsg(Ct))
                    ) {
                      var vt = Ct.parentMsgKey.toString();
                      (ke.add(vt), Ie.push(Ct));
                    }
                    Ct != null &&
                      o("WAWebThreadMsgUtils").isThreadMsg(Ct) &&
                      Te.push(Ct);
                  }
                }
              }
              if (((Be += rt), (We += ot), (qe += at), (Ue += it), tt > 0)) {
                var St = self.performance.now(),
                  Rt = St - nt;
                o(
                  "WAWebHistorySyncDynamicThrottlingManager",
                ).historySyncDynamicThrottlingManager.setLastProcessTime(
                  Rt,
                  tt,
                );
              }
            }
          }
          (Be > 0 &&
            o("WALogger")
              .LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Throttling observed ",
                    " times across all conversations",
                  ])),
                Be,
              )
              .tags("history-sync"),
            We > 0 &&
              o("WALogger")
                .LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Applied ",
                      " message throttling delays across all conversations",
                    ])),
                  We,
                )
                .tags("history-sync"),
            qe > 0 &&
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " request welcome messages",
                  ])),
                qe,
              ),
            Ue > 0 &&
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                Ue,
              ),
            we.length > 0 &&
              o("WALogger")
                .LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, null boundary => ",
                      "",
                    ])),
                  we.length,
                  we,
                )
                .tags("history-sync"),
            Ae.length > 0 &&
              o("WALogger")
                .LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, null boundary, exist as jid",
                    ])),
                  Ae.length,
                )
                .sendLogs("history-sync-unexpected-conversation-drop"),
            Fe.length > 0 &&
              o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " chats, sync disabled",
                  ])),
                Fe.length,
              ),
            Oe.length > 0 &&
              o("WALogger")
                .LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, already complete ",
                      "",
                    ])),
                  Oe.length,
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    e,
                  ),
                )
                .tags("history-sync"),
            (X.mdBootstrapMessagesCount = Ne),
            (X.mdBootstrapChatsCount = me.conversations.length),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: Ce,
              historySyncDownloadMetric: X,
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
            (Ee.length !== 0
              ? await o(
                  "WAWebHandleHistorySyncMsg",
                ).handleProgressiveHistorySyncMsgs({
                  associatedMsgs: Ie,
                  chatsWithRecentOrFullSyncMsgs: Array.from(xe),
                  chunkOrder: e.chunkOrder,
                  lastMsgs: $e,
                  missingParentsCache: ke,
                  recentOrFullSyncMsgs: Ee,
                  syncType: e.syncType,
                  threadMsgs: Te,
                  unifiedAddons: De,
                })
              : o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] no messages from history sync need to handle",
                    ])),
                ),
              await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                e.syncType,
                e.chunkOrder,
                z,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              await o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(e.msgKey, e.syncType, e.chunkOrder));
            for (
              var Lt = new Set(), Et = [], kt = 0;
              kt < me.conversations.length;
              kt++
            ) {
              var It = me.conversations[kt],
                Tt = o("WAWebWidFactory").createWid(It.id),
                Dt = Ve[kt],
                xt =
                  (Dt == null ? void 0 : Dt.id) != null
                    ? o("WAWebWidFactory").createWid(Dt.id)
                    : Tt;
              Lt.add(xt.toString());
              var $t = (Pe == null ? void 0 : Pe[It.id]) != null,
                Pt = null;
              (($t || (He != null && !Me)) &&
                (Pt = It.endOfHistoryTransferType),
                Pt != null &&
                  Et.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(xt, Pt),
                  ));
            }
            if (
              (await Promise.all(Et),
              He != null &&
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] ODHS response processed: ",
                      " messages parsed; failed=",
                      "; ",
                      " history-state updates completed.",
                    ])),
                  Ee.length,
                  Me,
                  Et.length,
                ),
              se({
                applyHistorySyncOnDemandFailure: Me,
                chatRows: Ve,
                chunkInfo: e,
                proto: me,
              }),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerHistorySyncChunkProcessed(Lt),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: Q,
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing recent/full/on-demand chunk complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  e,
                  Ne,
                  xe.size,
                ),
              ),
              !r("gkx")("26258") &&
                e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .RECENT)
            ) {
              var Nt;
              o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "[odhs-v2] [RECENT] STORED: ordinary chunk order=",
                    ", messages=",
                    ".",
                  ])),
                (Nt = e.chunkOrder) != null ? Nt : "unknown",
                Ne,
              );
            }
          } catch (e) {
            throw (
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing recent/full/on-demand chunk failed: ",
                    "",
                  ])),
                e,
              ),
              be(String(e)),
              e
            );
          }
        }
        var Mt = r("WAWebMsgKey").fromString(e.msgKey),
          wt = new Map();
        (wt.set(Mt.remote, [Mt.id]),
          e.syncType !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_STATUS_V3 &&
            o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: Mt.remote,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                .HISTORY_SYNC_COMPLETION,
              groupedReceipt: wt,
            }),
          await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
            mappings: Se,
            write: "now",
            learningSource: "history-sync-chunk",
          }),
          await o("WAWebUpdateLidMetadataApi").updateLidMetadata({
            updates: ve,
          }),
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            (await o("WAWebSetUsernameJob").setUsernamesJob(Re)),
          await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
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
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "MMS client delete error",
                    ])),
                );
              }));
        var At = me.conversations.length === 1 ? me.conversations[0].id : null;
        (await ue(e.syncType, me.progress, At, e),
          o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(ye),
          i.isActive() && i.endSuccess());
      } catch (e) {
        throw (
          i.isActive() &&
            i.endFailWithError(
              "history_sync_chunk_failed",
              r("getErrorSafe")(e).message,
            ),
          e
        );
      }
    }
    function le(e, t) {
      if (
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t.conversations.length !== 1
      ) {
        var n, a;
        return (
          o("WALogger").LOG(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
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
    function se(e) {
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
    async function ue(e, t, n, a) {
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
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Initial bootstrap history sync complete",
              ])),
          )
          .tags("history-sync"),
          await o("WAWebUserPrefsHistorySync").setInitialHistorySyncComplete(),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            initialCompleted: !0,
          }),
          r("gkx")("26258") ||
            o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [INITIAL] DONE: initial history stored and completion persisted.",
                ])),
            ),
          o("WALogger")
            .LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] completion persisted, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
            )
            .tags("history-sync"),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerInitialChatHistorySynced(),
          o("WALogger")
            .LOG(
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] completion event emitted, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
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
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Recent history sync complete",
              ])),
          )
          .tags("history-sync"),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          r("gkx")("26258") ||
            o("WALogger").LOG(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [RECENT] DONE: ordinary RECENT reached 100% and completion persisted.",
                ])),
            ),
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
            J ||
              (J = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Full history sync complete",
              ])),
          )
          .tags("history-sync"),
          i ||
            (o("WALogger").LOG(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
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
        i &&
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t === 100
      ) {
        var l;
        o("WALogger")
          .LOG(
            ee ||
              (ee = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] On demand history sync complete for chat ",
                "",
              ])),
            r("gkx")("26258") ? "-" : n,
          )
          .tags("history-sync");
        var s = "onDemandCompleted_" + (n != null ? n : "");
        await o("WAWebUserPrefsHistorySync").setHistorySyncStatus(
          ((l = {}), (l[s] = !0), l),
        );
      }
    }
    function ce(e, t) {
      e.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP &&
        o("WALogger")
          .LOG(
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
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
    l.handleHistorySyncChunk = ie;
  },
  98,
);
