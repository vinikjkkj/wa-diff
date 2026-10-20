__d(
  "WAWebPreprocessHistorySyncProto",
  [
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiChatBulkGetByHistory",
    "WAWebApiChatCommon",
    "WAWebChatConstants",
    "WAWebCurrentUser",
    "WAWebDBMessageUtils",
    "WAWebHistorySyncDynamicThrottlingManager",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebMessageAssociation.flow",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            g = [],
            h = [],
            y = new Set(),
            C = [],
            b = new Set(),
            v = [],
            S = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(),
            R = 0,
            L = self.performance.now(),
            E = 0;
          (S == null || r("isEmptyObject")(S)) &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] boundary data is null or empty",
                ])),
            );
          for (
            var k = yield o(
                "WAWebApiChatBulkGetByHistory",
              ).bulkGetChatsMaybeByHistory(
                t.conversations.map(function (e) {
                  return e.id;
                }),
              ),
              I = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? k
                : [],
              T = 0,
              D = [],
              x = 0,
              $ = [],
              P = 0,
              N = 0,
              M = [],
              w = 0,
              A = 0,
              F = 0;
            F < t.conversations.length;
            F++
          ) {
            var O = !1,
              B = t.conversations[F],
              W = B.id,
              q = S == null ? void 0 : S[W];
            if (q == null) {
              var U = r("gkx")("26258") ? "-" : W;
              (T++, D.length < 3 && D.push(U));
              var V = o("WAWebWidFactory").createWid(W).toJid();
              if ((S == null ? void 0 : S[V]) != null) {
                var H = r("gkx")("26258") ? "-" : W,
                  G = r("gkx")("26258") ? "-" : V;
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] drop chat ",
                        ": null, exists as ",
                        "",
                      ])),
                    H,
                    G,
                  )
                  .sendLogs("history-sync-unexpected-conversation-drop");
              }
              O = !0;
            }
            var z = o("WAWebWidFactory").createWid(W);
            if (z.isNewsletter()) {
              var j = r("gkx")("26258") ? "-" : W;
              (x++, $.length < 3 && $.push(j), (O = !0));
            }
            var K = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? I[F]
                : yield o("WAWebApiChatCommon").getChatMaybeByHistory(W),
              Q =
                (K == null ? void 0 : K.id) != null
                  ? o("WAWebWidFactory").createWid(K.id)
                  : z,
              X =
                (K == null ? void 0 : K.endOfHistoryTransferType) ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
            if (
              (((!K && q != null) ||
                (K && K.endOfHistoryTransferType == null) ||
                X) &&
                (O = !0),
              !O)
            )
              for (var Y = 0; Y < B.messages.length; Y++) {
                var J, Z, ee, te;
                R++;
                var ne = B.messages[Y],
                  re = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    ne.msgOrderId,
                  );
                if (!(q != null && q !== -1 && re != null && re >= q)) {
                  var oe =
                    (ne == null ||
                    (J = ne.message) == null ||
                    (J = J.message) == null ||
                    (J = J.protocolMessage) == null
                      ? void 0
                      : J.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (oe === !0) {
                    P++;
                    continue;
                  }
                  var ae =
                    (ne == null ||
                    (Z = ne.message) == null ||
                    (Z = Z.message) == null ||
                    (Z = Z.protocolMessage) == null
                      ? void 0
                      : Z.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (ae) {
                    N++;
                    continue;
                  }
                  b.add(W);
                  var ie = o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).parseWebMsgInfoAndReturnNullOnFailure({
                    protobufChatId: z,
                    message: ne.message,
                    allLidMapping: a,
                    totalMissingMapping: i,
                    historyLidPnMappings: n,
                    dbChatId: Q,
                  });
                  if (
                    (ie &&
                      ie.id.remote.toString() !== W &&
                      b.add(ie.id.remote.toString()),
                    Y === 0 && ie && K)
                  ) {
                    var le = yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .betweenCount(
                        ["internalId"],
                        o("WAWebDBMessageUtils").beginningOfChat(Q),
                        o("WAWebDBMessageUtils").endOfChat(Q),
                      );
                    le === 0 && v.push(ie);
                  }
                  if (
                    ((C = C.concat(
                      o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                        webMsgInfo: ne.message,
                        parsedWebMsgInfo: ie,
                        isFromCag: (ee = B.isDefaultSubgroup) != null ? ee : !1,
                      }),
                    )),
                    ie != null &&
                      ((te = ne.message) == null ||
                      (te = te.commentMetadata) == null
                        ? void 0
                        : te.commentParentKey) == null &&
                      (y.has(ie.id.toString()) &&
                        y.delete(ie == null ? void 0 : ie.id.toString()),
                      l.push(ie)),
                    ie != null &&
                      o("WAWebMessageAssociation.flow").isAssociatedMsg(ie))
                  ) {
                    var se = ie.parentMsgKey.toString();
                    (y.add(se), g.push(ie));
                  }
                  (ie != null &&
                    o("WAWebThreadMsgUtils").isThreadMsg(ie) &&
                    h.push(ie),
                    E++);
                  var ue = o(
                    "WAWebHistorySyncDynamicThrottlingManager",
                  ).historySyncDynamicThrottlingManager.getThrottleRate();
                  if (E >= ue.batchSize) {
                    var ce = self.performance.now() - L,
                      de = ce.toFixed(),
                      me = o(
                        "WAWebHistorySyncDynamicThrottlingManager",
                      ).historySyncDynamicThrottlingManager.targetTimeMs.toFixed();
                    (M.length < 3 &&
                      M.push(
                        "processT=" + de + "ms targetT=" + me + "ms batch=" + E,
                      ),
                      o(
                        "WAWebHistorySyncDynamicThrottlingManager",
                      ).historySyncDynamicThrottlingManager.setLastProcessTime(
                        ce,
                        E,
                      ),
                      ue.delayMs > 0 &&
                        (w++,
                        (A += ue.delayMs),
                        yield o("WAPromiseDelays").delayMs(ue.delayMs)),
                      (E = 0),
                      (L = self.performance.now()));
                  }
                }
              }
          }
          return (
            T > 0 &&
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats with null boundary => ",
                      "",
                    ])),
                  T,
                  D,
                )
                .tags("history-sync"),
            x > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " newsletter chats (not enabled) => ",
                    "",
                  ])),
                x,
                $,
              ),
            P > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " bot welcome msgs",
                  ])),
                P,
              ),
            N > 0 &&
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                N,
              ),
            M.length > 0 &&
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] batch processing samples => ",
                      "",
                    ])),
                  M,
                )
                .tags("history-sync"),
            w > 0 &&
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] throttle delays=",
                      " total=",
                      "ms",
                    ])),
                  w,
                  A.toFixed(),
                )
                .tags("history-sync"),
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
              i,
            ),
            {
              recentOrFullSyncMsgs: l,
              chatsWithRecentOrFullSyncMsgs: Array.from(b),
              unifiedAddons: C,
              lastMsgs: v,
              totalChunkMsgCount: R,
              associatedMsgs: g,
              missingParentsCache: y,
              threadMsgs: h,
              chatRows: k,
            }
          );
        })),
        h.apply(this, arguments)
      );
    }
    l.preprocessHistorySyncProto = g;
  },
  98,
);
