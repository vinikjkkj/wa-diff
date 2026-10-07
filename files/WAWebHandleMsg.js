__d(
  "WAWebHandleMsg",
  [
    "Promise",
    "WALogger",
    "WAParsableWapNode",
    "WATimeUtils",
    "WAWap",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2UsernameInfoUpdate",
    "WAWebCreateNackFromStanza",
    "WAWebDBReportingTokenUtils",
    "WAWebGetMessageCache",
    "WAWebGroupAgentReceipts",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleDeferredBotOrphan",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPaymentsODS",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebSetUsernameJob",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            v = l === void 0 ? !1 : l,
            S = i.isStatusStanza,
            E = S === void 0 ? !1 : S,
            D = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (D.error) {
            var x;
            (r("gkx")("26258")
              ? o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMsg: error while parsing message stanza",
                      ])),
                  )
                  .tags("messaging")
              : o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleMsg: error while parsing message stanza: ",
                        ", node: ",
                        "",
                      ])),
                    D.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var $ = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if ($.error)
              return (
                $.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        $.error,
                      )
                      .tags("messaging")
                      .sendLogs("msg-stanza-parsing-failed-xmpp-no-ack", {
                        sampling: 0.01,
                      })
                  : o("WALogger")
                      .WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage",
                          ])),
                      )
                      .tags("messaging")
                      .sendLogs("msg-stanza-parsing-failed-no-ack", {
                        sampling: 0.01,
                      }),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropInvalidStanza(t),
                (R || (R = n("Promise"))).resolve(
                  k(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                    E,
                  ),
                )
              );
            var P = $.success,
              N = P.externalId,
              M = P.msgInfo,
              w = P.offline,
              A = P.type,
              F = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              A == null
                ? ((F = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : D.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((x = D.error) == null ? void 0 : x.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((F = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      $.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: N,
                nackReason: F,
                msgInfo: M,
                offline: w,
              }),
              D.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      D.error,
                    )
                    .tags("messaging")
                    .sendLogs("msg-stanza-parsing-failed-xmpp", {
                      sampling: 0.01,
                    })
                : o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage",
                        ])),
                    )
                    .tags("messaging")
                    .sendLogs("msg-stanza-parsing-failed", { sampling: 0.01 }),
              (R || (R = n("Promise"))).resolve(k(t, F, E))
            );
          }
          var O = D.success;
          (v && (O.msgMeta.isGroupStatus = !0),
            E && (O.msgMeta.isStatusStanza = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(O),
            O.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : O.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var B = O.encs,
            W = O.ghsReportingTokenInfos,
            q = O.msgBotInfo,
            U = O.msgInfo,
            V = O.msgMeta;
          ((U.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            U.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var H = 1;
          if (
            (o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete O.msgInfo.offline,
            n("cr:4122") != null &&
              n("cr:4122").isNextMessagePostponed(t, L, {
                isGroupStatusStanza: v,
                isStatusStanza: E,
              }))
          )
            return (
              o("WAWebHandleMsgSendReceipt").sendReceipt(O.msgInfo, O.msgMeta, {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
              }),
              null
            );
          var G = !!O.msgInfo.offline,
            z = U.externalId;
          return o("WAWebMessageReceiveFlow").trackMessageReceive(
            {
              chatType: U.type,
              isOffline: G,
              queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
              stanzaId: z,
              stanzaType: V.type,
            },
            function (e) {
              return o("WAWebMessageQueue").onMessageQueue({
                chatWid: U.chat,
                isOffline: G,
                msgCategory: U.category,
                action: e,
              });
            },
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              (o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "handleMsg: chat=",
                      " id=",
                      " offline=",
                      "",
                    ])),
                  U.chat.toLogString(),
                  U.externalId,
                  (e = U.offline) != null ? e : "",
                )
                .tags("messaging"),
                (U.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs()));
              var a = U.metaFrom;
              if (
                a != null &&
                o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(U.author, a) &&
                !o("WAWebUserPrefsMeUser").isMeAccount(a)
              ) {
                var i = yield T(t, U, a);
                if (i != null) return i.response;
              }
              var l = o(
                "WAWebCoexV2UsernameInfoUpdate",
              ).maybeGetCoexV2UsernameInfoUpdatePlan(U, V);
              if (
                (yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid(
                  { msgInfo: U, msgMeta: V },
                ),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var s = [];
                if (
                  U.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                ) {
                  var u = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(U.author),
                    username: U.participantUsername,
                  });
                  u && s.push(u);
                } else if (
                  U.type ===
                  o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                )
                  U.bclParticipants.forEach(function (e) {
                    var t,
                      n = o(
                        "WAWebSetUsernameJob",
                      ).maybeCreateSetUsernameInfoJobArg({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(
                          (t = e.peerRecipientLid) != null ? t : e.wid,
                        ),
                        username: e.peerRecipientUsername,
                      });
                    n && s.push(n);
                  });
                else if (
                  U.type ===
                  o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
                ) {
                  var c,
                    d =
                      U.participantLid ||
                      ((c = U.participant) != null && c.isLid())
                        ? U.participant
                        : null,
                    m = d
                      ? o(
                          "WAWebSetUsernameJob",
                        ).maybeCreateSetUsernameInfoJobArg({
                          userId: o("WAWebWidFactory").asUserWidOrThrow(d),
                          username: U.participantUsername,
                        })
                      : null;
                  m && s.push(m);
                } else {
                  var S, R;
                  if (l == null) {
                    var k = o("WAWebWidFactory").asUserWidOrThrow(U.author);
                    if (U.username == null && U.senderPn != null && k.isLid()) {
                      var D;
                      s.push({
                        userId: k,
                        deleteUsername: !0,
                        usernameCountryCode:
                          (D = U.senderCountryCode) != null ? D : void 0,
                      });
                    } else {
                      var x = o(
                        "WAWebSetUsernameJob",
                      ).maybeCreateSetUsernameInfoJobArg({
                        userId: k,
                        username: U.username,
                        usernameCountryCode: U.senderCountryCode,
                      });
                      x && s.push(x);
                    }
                    (U.peerRecipientLid
                      ? (R = o("WAWebWidFactory").asUserWidOrThrow(
                          U.peerRecipientLid,
                        ))
                      : U.chat.isLid() &&
                        (R = o("WAWebWidFactory").asUserWidOrThrow(U.chat)),
                      (S = U.peerRecipientUsername));
                  } else {
                    var $, P;
                    (l.usernameInfoUpdate != null &&
                      s.push(l.usernameInfoUpdate),
                      (R =
                        ($ = l.peerRecipientUsernameInfo) == null
                          ? void 0
                          : $.userId),
                      (S =
                        (P = l.peerRecipientUsernameInfo) == null
                          ? void 0
                          : P.username));
                  }
                  var N = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: R,
                    username: S,
                  });
                  N && s.push(N);
                }
                if (s.length > 0)
                  try {
                    var M = yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                    yield o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(s, M, "handleMsg");
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "handleMsg: failed to learn usernames",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .tags("messaging", "username")
                      .sendLogs("handle-msg-username-learning-failed");
                  }
              }
              var w = o("WAWebMsgProcessingApiUtils").messageInfoToKey(U);
              if (
                (W != null &&
                  W.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(w.toString(), W, !1),
                  o("WALogger")
                    .LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      W.length,
                      w.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                V.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: w,
                  stanzaId: U.externalId,
                  msgTs: U.ts,
                  incomingMsgReportingTokenInfo: O.reportingTokenInfo,
                }),
                  o("WALogger")
                    .LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "handleMessage: msgId::",
                          ", get fanout placeholder",
                        ])),
                      U.externalId,
                    )
                    .tags("messaging"));
                var A = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
                return (
                  q != null
                    ? (A = o("WAWebHandleMsgTypes.flow").PlaceholderType
                        .BOT_UNAVAILABLE_FANOUT)
                    : V.isHostedMsgUnavailable === !0
                      ? (A = o("WAWebHandleMsgTypes.flow").PlaceholderType
                          .HOSTED_UNAVAILABLE_FANOUT)
                      : V.isViewOnceUnavailable === !0
                        ? (A = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .VIEW_ONCE_UNAVAILABLE_FANOUT)
                        : V.isAcpUnavailable === !0 &&
                          (A = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .ACP_UNAVAILABLE_FANOUT),
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: V,
                    msgInfo: U,
                    placeholderType: A,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      z,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(U, V, {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .BACKFILL,
                      }),
                      o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL,
                    )
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "sendReceipt failed for unavailable/backfill message",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("send-receipt-backfill-error", {
                          sampling: 0.01,
                        });
                    }),
                  null
                );
              }
              if (
                (n("cr:4122") == null
                  ? void 0
                  : n("cr:4122").consumeSkipDecryptRequest(t, L, {
                      isGroupStatusStanza: v,
                      isStatusStanza: E,
                    })) === !0
              )
                return (
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: V,
                    msgInfo: U,
                    placeholderType: o("WAWebHandleMsgTypes.flow")
                      .PlaceholderType.E2E,
                  }),
                  o("WAWebHandleMsgSendReceipt")
                    .sendReceipt(U, V, {
                      result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                        .BACKFILL,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "sendReceipt failed for a debug-held message",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("send-receipt-debug-held-error", {
                          sampling: 0.01,
                        });
                    }),
                  null
                );
              var F = o("WAWebMsgProcessingApiUtils").getFrom(U),
                G = F.isStatus() || V.isGroupStatus === !0,
                j;
              if (
                (G
                  ? (j = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      V.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : B.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (j = o("WAWebSessionScope").SessionScope.PQ),
                j != null)
              ) {
                var K;
                o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        "",
                      ])),
                    String(V.isGroupStatus === !0),
                    j,
                    (K = V.metaSessionScope) != null ? K : "none",
                  )
                  .tags("messaging");
              }
              var Q = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
                O,
                o("WAWebHandleMsgProcess").processDecryptedMessageProto,
                j,
              );
              if (
                Q.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return (
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: w,
                    stanzaId: U.externalId,
                    msgTs: U.ts,
                    incomingMsgReportingTokenInfo: O.reportingTokenInfo,
                  }),
                  yield o(
                    "WAWebHandleDeferredBotOrphan",
                  ).handleDeferredBotOrphan({
                    canNack: I(O),
                    decryptResult: Q,
                    input: O,
                    node: t,
                  }),
                  null
                );
              (U.offline != null &&
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processMessageDecryptResult(Q.result),
                Q.result !==
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: w,
                    stanzaId: U.externalId,
                    msgTs: U.ts,
                    incomingMsgReportingTokenInfo: O.reportingTokenInfo,
                  }));
              var X =
                Q.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                o(
                  "WAWebGroupAgentReceipts",
                ).shouldSendGroupAgentDeliveryReceipt(O);
              return (
                Q.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR && I(O)
                  ? o("WAWebGetMessageCache")
                      .getMessageCache()
                      .addMessages(
                        [
                          {
                            duplicateMsgReceiptInfo: {
                              externalId: U.externalId,
                              from: o("WAWebMsgProcessingApiUtils").getFrom(U),
                              author: U.author,
                              msgInfo: U,
                              msgMeta: V,
                              enc: Q.failedEnc || B[0],
                              hasHideFailEnc: B.some(function (e) {
                                return e.hideFail;
                              }),
                              msgReceivedTimes: H,
                            },
                          },
                        ],
                        U.offline == null,
                      )
                  : U.offline == null ||
                      U.category ===
                        o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                      o(
                        "WAWebHandleMsgSendReceipt",
                      ).isCoexV2SenderReceiptMessage(U) ||
                      o(
                        "WAWebHandleMsgSendReceipt",
                      ).isCoexV2PeerDeliveryReceiptMessage(U) ||
                      V.type ===
                        o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                          .medianotify ||
                      X ||
                      (Q.result !==
                        o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .SUCCESS &&
                        Q.result !==
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .SIGNAL_OLD_COUNTER_ERROR)
                    ? o("WAWebMessageReceiveFlow")
                        .trackMessageReceiveReceipt(
                          z,
                          o("WAWebHandleMsgSendReceipt").sendReceipt(U, V, Q, {
                            canNack: I(O),
                            sendsGroupAgentDeliveryReceipt: X,
                          }),
                          Q.result,
                        )
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "sendReceipt failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("send-receipt-error", { sampling: 0.01 });
                        })
                    : o("WAWebGetMessageCache")
                        .getMessageCache()
                        .addMessages(
                          [
                            {
                              receiptInfo: {
                                externalId: U.externalId,
                                from: o("WAWebMsgProcessingApiUtils").getFrom(
                                  U,
                                ),
                                author: U.author,
                              },
                            },
                          ],
                          !1,
                        ),
                null
              );
            }),
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    function I(e) {
      var t = e.encs,
        n = e.msgMeta,
        r = t.some(function (e) {
          return e.hideFail;
        });
      return r
        ? o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(n) ||
            o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(n)
        : n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          try {
            var i;
            a =
              (i = yield o("WAWebApiContact").getContactRecord(n)) == null
                ? void 0
                : i.isHosted;
          } catch (n) {
            return (
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to read peer hosted state",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-peer-hosted-state-read-failed"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(e),
              x(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason.DBOperationFailed,
                ),
              }
            );
          }
          return a === !1
            ? (o("WALogger")
                .WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay dropped: peer is not hosted",
                    ])),
                )
                .sendLogs("coexv2-relay-peer-not-hosted"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                e,
                o("WAWebMsgProcessingApiUtils").getFrom(t),
              ),
              x(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason
                    .InvalidHostedCompanionStanza,
                ),
              })
            : null;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = L;
  },
  98,
);
