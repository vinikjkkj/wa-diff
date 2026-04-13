__d(
  "WAWebPreprocessHistorySyncProto",
  [
    "WAAsyncSleep",
    "WALogger",
    "WALongInt",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiChatCommon",
    "WAWebChatConstants",
    "WAWebCurrentUser",
    "WAWebDBMessageUtils",
    "WAWebHistorySyncDynamicThrottlingManager",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsHistorySync",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      g = 100;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o(
            "WAWebHistorySyncNotificationCommonUtils",
          ).getLidMappingAsStringSet(n);
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "first lid mappings for recent sync preprocess: ",
                    "...",
                  ])),
                o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                  a,
                ),
              )
              .verbose();
          var i = new Map(),
            l = [],
            h = [],
            y = [],
            C = new Set(),
            b = [],
            v = new Set(),
            S = [],
            R = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(),
            L = 0,
            E = 0,
            k = o(
              "WAWebSyncGatingUtils",
            ).getRecentSyncMessageProcessingBreakIteration(),
            I = yield o(
              "WAWebUserPrefsAppStateSync",
            ).getAllCriticalDataSynced(),
            T = self.performance.now(),
            D = 0;
          (R == null || r("isEmptyObject")(R)) &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] boundary data is null or empty",
                ])),
            );
          for (
            var x = yield o("WAWebApiChatCommon").bulkGetChatsMaybeByHistory(
                t.conversations.map(function (e) {
                  return e.id;
                }),
              ),
              $ = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? x
                : [],
              P = 0,
              N = [],
              M = 0,
              w = [],
              A = 0,
              F = 0,
              O = [],
              B = 0,
              W = 0,
              q = 0;
            q < t.conversations.length;
            q++
          ) {
            var U = !1,
              V = t.conversations[q],
              H = V.id,
              G = R == null ? void 0 : R[H];
            if (G == null) {
              var z = r("gkx")("26258") ? "-" : H;
              (P++, N.length < 3 && N.push(z));
              var j = o("WAWebWidFactory").createWid(H).toJid();
              if ((R == null ? void 0 : R[j]) != null) {
                var K = r("gkx")("26258") ? "-" : H,
                  Q = r("gkx")("26258") ? "-" : j;
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] drop chat ",
                        ": null, exists as ",
                        "",
                      ])),
                    K,
                    Q,
                  )
                  .sendLogs("history-sync-unexpected-conversation-drop");
              }
              U = !0;
            }
            var X = o("WAWebWidFactory").createWid(H);
            if (X.isNewsletter()) {
              var Y = r("gkx")("26258") ? "-" : H;
              (M++, w.length < 3 && w.push(Y), (U = !0));
            }
            var J = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? $[q]
                : yield o("WAWebApiChatCommon").getChatMaybeByHistory(H),
              Z =
                (J == null ? void 0 : J.id) != null
                  ? o("WAWebWidFactory").createWid(J.id)
                  : X,
              ee =
                (J == null ? void 0 : J.endOfHistoryTransferType) ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
            if (
              (((!J && G != null) ||
                (J && J.endOfHistoryTransferType == null) ||
                ee) &&
                (U = !0),
              !U)
            )
              for (var te = 0; te < V.messages.length; te++) {
                var ne, re, oe, ae;
                L++;
                var ie = V.messages[te],
                  le = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    ie.msgOrderId,
                  );
                if (!(G != null && G !== -1 && le != null && le >= G)) {
                  var se =
                    (ie == null ||
                    (ne = ie.message) == null ||
                    (ne = ne.message) == null ||
                    (ne = ne.protocolMessage) == null
                      ? void 0
                      : ne.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (se === !0) {
                    A++;
                    continue;
                  }
                  var ue =
                    (ie == null ||
                    (re = ie.message) == null ||
                    (re = re.message) == null ||
                    (re = re.protocolMessage) == null
                      ? void 0
                      : re.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (ue) {
                    F++;
                    continue;
                  }
                  v.add(H);
                  var ce = o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).parseWebMsgInfoAndReturnNullOnFailure({
                    protobufChatId: X,
                    message: ie.message,
                    allLidMapping: a,
                    totalMissingMapping: i,
                    historyLidPnMappings: n,
                    dbChatId: Z,
                  });
                  if (
                    (ce &&
                      ce.id.remote.toString() !== H &&
                      v.add(ce.id.remote.toString()),
                    te === 0 && ce && J)
                  ) {
                    var de = yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .betweenCount(
                        ["internalId"],
                        o("WAWebDBMessageUtils").beginningOfChat(Z),
                        o("WAWebDBMessageUtils").endOfChat(Z),
                      );
                    de === 0 && S.push(ce);
                  }
                  if (
                    ((b = b.concat(
                      o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                        webMsgInfo: ie.message,
                        parsedWebMsgInfo: ce,
                        isFromCag: (oe = V.isDefaultSubgroup) != null ? oe : !1,
                      }),
                    )),
                    ce != null &&
                      ((ae = ie.message) == null ||
                      (ae = ae.commentMetadata) == null
                        ? void 0
                        : ae.commentParentKey) == null &&
                      (C.has(ce.id.toString()) &&
                        o(
                          "WAWebMessageAssociationGatingUtils",
                        ).isMessageAssociationInfraEnabled() &&
                        C.delete(ce == null ? void 0 : ce.id.toString()),
                      l.push(ce)),
                    ce != null &&
                      o("WAWebMessageAssociation.flow").isAssociatedMsg(ce) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled())
                  ) {
                    var me = ce.parentMsgKey.toString();
                    (C.add(me), h.push(ce));
                  }
                  if (
                    (ce != null &&
                      o("WAWebThreadMsgUtils").isThreadMsg(ce) &&
                      y.push(ce),
                    o("WAWebABProps").getABPropConfigValue(
                      "wa_web_history_sync_dynamic_throttling",
                    ))
                  ) {
                    D++;
                    var pe = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (D >= pe.batchSize) {
                      var _e = self.performance.now() - T,
                        fe = _e.toFixed(),
                        ge = o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.targetTimeMs.toFixed();
                      (O.length < 3 &&
                        O.push(
                          "processT=" +
                            fe +
                            "ms targetT=" +
                            ge +
                            "ms batch=" +
                            D,
                        ),
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          _e,
                          D,
                        ),
                        pe.delayMs > 0 &&
                          (B++,
                          (W += pe.delayMs),
                          yield o("WAAsyncSleep").asyncSleep(pe.delayMs)),
                        (D = 0),
                        (T = self.performance.now()));
                    }
                  } else
                    yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                      E++,
                      I ? k : g,
                    );
                }
              }
          }
          return (
            P > 0 &&
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats with null boundary => ",
                      "",
                    ])),
                  P,
                  N,
                )
                .tags("history-sync"),
            M > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " newsletter chats (not enabled) => ",
                    "",
                  ])),
                M,
                w,
              ),
            A > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] Dropped ",
                    " request welcome messages",
                  ])),
                A,
              ),
            F > 0 &&
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                F,
              ),
            O.length > 0 &&
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] batch processing samples => ",
                      "",
                    ])),
                  O,
                )
                .tags("history-sync"),
            B > 0 &&
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Applied ",
                      " message throttling delays totaling ",
                      "ms",
                    ])),
                  B,
                  W.toFixed(),
                )
                .tags("history-sync"),
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
              i,
            ),
            {
              recentOrFullSyncMsgs: l,
              chatsWithRecentOrFullSyncMsgs: Array.from(v),
              unifiedAddons: b,
              lastMsgs: S,
              totalChunkMsgCount: L,
              associatedMsgs: h,
              missingParentsCache: C,
              threadMsgs: y,
              chatRows: x,
            }
          );
        })),
        y.apply(this, arguments)
      );
    }
    l.preprocessHistorySyncProto = h;
  },
  98,
);
