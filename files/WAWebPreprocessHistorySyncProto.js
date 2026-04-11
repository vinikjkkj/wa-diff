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
            var x = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? yield o("WAWebApiChatCommon").bulkGetChatsMaybeByHistory(
                    t.conversations.map(function (e) {
                      return e.id;
                    }),
                  )
                : [],
              $ = 0,
              P = [],
              N = 0,
              M = [],
              w = 0,
              A = 0,
              F = [],
              O = 0,
              B = 0,
              W = 0;
            W < t.conversations.length;
            W++
          ) {
            var q = !1,
              U = t.conversations[W],
              V = U.id,
              H = R == null ? void 0 : R[V];
            if (H == null) {
              var G = r("gkx")("26258") ? "-" : V;
              ($++, P.length < 3 && P.push(G));
              var z = o("WAWebWidFactory").createWid(V).toJid();
              if ((R == null ? void 0 : R[z]) != null) {
                var j = r("gkx")("26258") ? "-" : V,
                  K = r("gkx")("26258") ? "-" : z;
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] drop chat ",
                        ": null, exists as ",
                        "",
                      ])),
                    j,
                    K,
                  )
                  .sendLogs("history-sync-unexpected-conversation-drop");
              }
              q = !0;
            }
            var Q = o("WAWebWidFactory").createWid(V);
            if (Q.isNewsletter()) {
              var X = r("gkx")("26258") ? "-" : V;
              (N++, M.length < 3 && M.push(X), (q = !0));
            }
            var Y = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? x[W]
                : yield o("WAWebApiChatCommon").getChatMaybeByHistory(V),
              J =
                (Y == null ? void 0 : Y.id) != null
                  ? o("WAWebWidFactory").createWid(Y.id)
                  : Q,
              Z =
                (Y == null ? void 0 : Y.endOfHistoryTransferType) ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
            if (
              (((!Y && H != null) ||
                (Y && Y.endOfHistoryTransferType == null) ||
                Z) &&
                (q = !0),
              !q)
            )
              for (var ee = 0; ee < U.messages.length; ee++) {
                var te, ne, re, oe;
                L++;
                var ae = U.messages[ee],
                  ie = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    ae.msgOrderId,
                  );
                if (!(H != null && H !== -1 && ie != null && ie >= H)) {
                  var le =
                    (ae == null ||
                    (te = ae.message) == null ||
                    (te = te.message) == null ||
                    (te = te.protocolMessage) == null
                      ? void 0
                      : te.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (le === !0) {
                    w++;
                    continue;
                  }
                  var se =
                    (ae == null ||
                    (ne = ae.message) == null ||
                    (ne = ne.message) == null ||
                    (ne = ne.protocolMessage) == null
                      ? void 0
                      : ne.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (se) {
                    A++;
                    continue;
                  }
                  v.add(V);
                  var ue = o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).parseWebMsgInfoAndReturnNullOnFailure({
                    protobufChatId: Q,
                    message: ae.message,
                    allLidMapping: a,
                    totalMissingMapping: i,
                    historyLidPnMappings: n,
                    dbChatId: J,
                  });
                  if (
                    (ue &&
                      ue.id.remote.toString() !== V &&
                      v.add(ue.id.remote.toString()),
                    ee === 0 && ue && Y)
                  ) {
                    var ce = yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .betweenCount(
                        ["internalId"],
                        o("WAWebDBMessageUtils").beginningOfChat(J),
                        o("WAWebDBMessageUtils").endOfChat(J),
                      );
                    ce === 0 && S.push(ue);
                  }
                  if (
                    ((b = b.concat(
                      o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                        webMsgInfo: ae.message,
                        parsedWebMsgInfo: ue,
                        isFromCag: (re = U.isDefaultSubgroup) != null ? re : !1,
                      }),
                    )),
                    ue != null &&
                      ((oe = ae.message) == null ||
                      (oe = oe.commentMetadata) == null
                        ? void 0
                        : oe.commentParentKey) == null &&
                      (C.has(ue.id.toString()) &&
                        o(
                          "WAWebMessageAssociationGatingUtils",
                        ).isMessageAssociationInfraEnabled() &&
                        C.delete(ue == null ? void 0 : ue.id.toString()),
                      l.push(ue)),
                    ue != null &&
                      o("WAWebMessageAssociation.flow").isAssociatedMsg(ue) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled())
                  ) {
                    var de = ue.parentMsgKey.toString();
                    (C.add(de), h.push(ue));
                  }
                  if (
                    (ue != null &&
                      o("WAWebThreadMsgUtils").isThreadMsg(ue) &&
                      y.push(ue),
                    o("WAWebABProps").getABPropConfigValue(
                      "wa_web_history_sync_dynamic_throttling",
                    ))
                  ) {
                    D++;
                    var me = o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.getThrottleRate();
                    if (D >= me.batchSize) {
                      var pe = self.performance.now() - T,
                        _e = pe.toFixed(),
                        fe = o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.targetTimeMs.toFixed();
                      (F.length < 3 &&
                        F.push(
                          "processT=" +
                            _e +
                            "ms targetT=" +
                            fe +
                            "ms batch=" +
                            D,
                        ),
                        o(
                          "WAWebHistorySyncDynamicThrottlingManager",
                        ).historySyncDynamicThrottlingManager.setLastProcessTime(
                          pe,
                          D,
                        ),
                        me.delayMs > 0 &&
                          (O++,
                          (B += me.delayMs),
                          yield o("WAAsyncSleep").asyncSleep(me.delayMs)),
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
            $ > 0 &&
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats with null boundary => ",
                      "",
                    ])),
                  $,
                  P,
                )
                .tags("history-sync"),
            N > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " newsletter chats (not enabled) => ",
                    "",
                  ])),
                N,
                M,
              ),
            w > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] Dropped ",
                    " request welcome messages",
                  ])),
                w,
              ),
            A > 0 &&
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                A,
              ),
            F.length > 0 &&
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] batch processing samples => ",
                      "",
                    ])),
                  F,
                )
                .tags("history-sync"),
            O > 0 &&
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Applied ",
                      " message throttling delays totaling ",
                      "ms",
                    ])),
                  O,
                  B.toFixed(),
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
