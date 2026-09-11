__d(
  "WAWebHandleMsg",
  [
    "Promise",
    "WALogger",
    "WAParsableWapNode",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBReportingTokenUtils",
    "WAWebGetMessageCache",
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
            S = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (S.error) {
            var E;
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
                    S.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var T = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (T.error)
              return (
                T.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        T.error,
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
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var D = T.success,
              x = D.externalId,
              $ = D.msgInfo,
              P = D.offline,
              N = D.type,
              M = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              N == null
                ? ((M = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : S.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((E = S.error) == null ? void 0 : E.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((M = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      T.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: x,
                nackReason: M,
                msgInfo: $,
                offline: P,
              }),
              S.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      S.error,
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
              (R || (R = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, M),
              )
            );
          }
          var w = S.success;
          (v && (w.msgMeta.isGroupStatus = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(w),
            w.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : w.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var A = w.encs,
            F = w.ghsReportingTokenInfos,
            O = w.msgBotInfo,
            B = w.msgInfo,
            W = w.msgMeta;
          ((B.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            B.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var q = 1;
          return (
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete w.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, L)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  w.msgInfo,
                  w.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: B.chat,
                  isOffline: !!w.msgInfo.offline,
                  msgCategory: B.category,
                  action: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
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
                            B.chat.toLogString(),
                            B.externalId,
                            (e = B.offline) != null ? e : "",
                          )
                          .tags("messaging"),
                          (B.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()));
                        var a = B.metaFrom;
                        if (
                          a != null &&
                          o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                            B.author,
                            a,
                          ) &&
                          !o("WAWebUserPrefsMeUser").isMeAccount(a)
                        ) {
                          var i = yield I(t, B, a);
                          if (i != null) return i.response;
                        }
                        if (
                          (yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcessMsgInfoForLid({
                            msgInfo: B,
                            msgMeta: W,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var l = [];
                          if (
                            B.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var s = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                B.author,
                              ),
                              username: B.participantUsername,
                            });
                            s && l.push(s);
                          } else if (
                            B.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            B.bclParticipants.forEach(function (e) {
                              var t,
                                n = o(
                                  "WAWebSetUsernameJob",
                                ).maybeCreateSetUsernameInfoJobArg({
                                  userId: o("WAWebWidFactory").asUserWidOrThrow(
                                    (t = e.peerRecipientLid) != null
                                      ? t
                                      : e.wid,
                                  ),
                                  username: e.peerRecipientUsername,
                                });
                              n && l.push(n);
                            });
                          else if (
                            B.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var u,
                              c =
                                B.participantLid ||
                                ((u = B.participant) != null && u.isLid())
                                  ? B.participant
                                  : null,
                              d = c
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(c),
                                    username: B.participantUsername,
                                  })
                                : null;
                            d && l.push(d);
                          } else {
                            var m = o("WAWebWidFactory").asUserWidOrThrow(
                              B.author,
                            );
                            if (
                              B.username == null &&
                              B.senderPn != null &&
                              m.isLid()
                            ) {
                              var S;
                              l.push({
                                userId: m,
                                deleteUsername: !0,
                                usernameCountryCode:
                                  (S = B.senderCountryCode) != null
                                    ? S
                                    : void 0,
                              });
                            } else {
                              var R = o(
                                "WAWebSetUsernameJob",
                              ).maybeCreateSetUsernameInfoJobArg({
                                userId: m,
                                username: B.username,
                                usernameCountryCode: B.senderCountryCode,
                              });
                              R && l.push(R);
                            }
                            var E;
                            B.peerRecipientLid
                              ? (E = o("WAWebWidFactory").asUserWidOrThrow(
                                  B.peerRecipientLid,
                                ))
                              : B.chat.isLid() &&
                                (E = o("WAWebWidFactory").asUserWidOrThrow(
                                  B.chat,
                                ));
                            var T = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: E,
                              username: B.peerRecipientUsername,
                            });
                            T && l.push(T);
                          }
                          if (l.length > 0)
                            try {
                              var D = yield o(
                                "WAWebSetUsernameJob",
                              ).setUsernamesJob(l);
                              yield o(
                                "WAWebInsertUsernameChangeSystemMsg",
                              ).maybeInsertUsernameChangeSystemMsgs(
                                l,
                                D,
                                "handleMsg",
                              );
                            } catch (e) {
                              o("WALogger")
                                .ERROR(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "handleMsg: failed to learn usernames",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .tags("messaging", "username")
                                .sendLogs(
                                  "handle-msg-username-learning-failed",
                                );
                            }
                        }
                        var x = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(B);
                        if (
                          (F != null &&
                            F.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              x.toString(),
                              F,
                              !1,
                            ),
                            o("WALogger")
                              .LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[group-history] Stored ",
                                    " reporting tokens for bundle ",
                                    "",
                                  ])),
                                F.length,
                                x.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          W.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: x,
                            stanzaId: B.externalId,
                            msgTs: B.ts,
                            incomingMsgReportingTokenInfo: w.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                B.externalId,
                              )
                              .tags("messaging"));
                          var $ = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            O != null
                              ? ($ = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : W.isHostedMsgUnavailable === !0
                                ? ($ = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : W.isViewOnceUnavailable === !0 &&
                                  ($ = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: W,
                              msgInfo: B,
                              placeholderType: $,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(B, W, {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.BACKFILL,
                              })
                              .catch(function (e) {
                                o("WALogger")
                                  .ERROR(
                                    h ||
                                      (h =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "sendReceipt failed for unavailable/backfill message",
                                          ],
                                        )),
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
                              })) === !0
                        )
                          return (
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: W,
                              msgInfo: B,
                              placeholderType: o("WAWebHandleMsgTypes.flow")
                                .PlaceholderType.E2E,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(B, W, {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.BACKFILL,
                              })
                              .catch(function (e) {
                                o("WALogger")
                                  .ERROR(
                                    y ||
                                      (y =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "sendReceipt failed for a debug-held message",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .sendLogs("send-receipt-debug-held-error", {
                                    sampling: 0.01,
                                  });
                              }),
                            null
                          );
                        var P = o("WAWebMsgProcessingApiUtils").getFrom(B),
                          N = P.isStatus() || W.isGroupStatus === !0,
                          M;
                        if (
                          (N
                            ? (M = o(
                                "WAWebStatusSessionGatingUtils",
                              ).shouldUseStatusSessionForIncomingMessage(
                                W.metaSessionScope,
                              )
                                ? o("WAWebSessionScope").SessionScope.STATUS
                                : void 0)
                            : A.some(function (e) {
                                return e.sessionType === "pq";
                              }) &&
                              (M = o("WAWebSessionScope").SessionScope.PQ),
                          M != null)
                        ) {
                          var U;
                          o("WALogger")
                            .LOG(
                              C ||
                                (C = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] grpStatus=",
                                  " scope=",
                                  " metaScope=",
                                  "",
                                ])),
                              String(W.isGroupStatus === !0),
                              M,
                              (U = W.metaSessionScope) != null ? U : "none",
                            )
                            .tags("messaging");
                        }
                        var V = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          w,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          M,
                        );
                        return V.result ===
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .DEFERRED
                          ? (o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: x,
                              stanzaId: B.externalId,
                              msgTs: B.ts,
                              incomingMsgReportingTokenInfo:
                                w.reportingTokenInfo,
                            }),
                            yield o(
                              "WAWebHandleDeferredBotOrphan",
                            ).handleDeferredBotOrphan({
                              canNack: k(w),
                              decryptResult: V,
                              input: w,
                              node: t,
                            }),
                            null)
                          : (B.offline != null &&
                              o(
                                "WAWebOfflineHandler",
                              ).OfflineMessageHandler.processMessageDecryptResult(
                                V.result,
                              ),
                            V.result !==
                              o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                .SUCCESS &&
                              o(
                                "WAWebDBReportingTokenUtils",
                              ).maybeStoreReportingTag({
                                msgKey: x,
                                stanzaId: B.externalId,
                                msgTs: B.ts,
                                incomingMsgReportingTokenInfo:
                                  w.reportingTokenInfo,
                              }),
                            V.result ===
                              o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                .SIGNAL_OLD_COUNTER_ERROR && k(w)
                              ? o("WAWebGetMessageCache")
                                  .getMessageCache()
                                  .addMessages(
                                    [
                                      {
                                        duplicateMsgReceiptInfo: {
                                          externalId: B.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(B),
                                          author: B.author,
                                          msgInfo: B,
                                          msgMeta: W,
                                          enc: V.failedEnc || A[0],
                                          hasHideFailEnc: A.some(function (e) {
                                            return e.hideFail;
                                          }),
                                          msgReceivedTimes: q,
                                        },
                                      },
                                    ],
                                    B.offline == null,
                                  )
                              : B.offline == null ||
                                  B.category ===
                                    o("WAWebHandleMsgCommon").MSG_CATEGORY
                                      .peer ||
                                  o(
                                    "WAWebHandleMsgSendReceipt",
                                  ).isCoexV2SenderReceiptMessage(B) ||
                                  o(
                                    "WAWebHandleMsgSendReceipt",
                                  ).isCoexV2PeerDeliveryReceiptMessage(B) ||
                                  W.type ===
                                    o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                      .medianotify ||
                                  (V.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult.SUCCESS &&
                                    V.result !==
                                      o("WAWebHandleMsgTypes.flow")
                                        .E2EProcessResult
                                        .SIGNAL_OLD_COUNTER_ERROR)
                                ? o("WAWebHandleMsgSendReceipt")
                                    .sendReceipt(B, W, V, { canNack: k(w) })
                                    .catch(function (e) {
                                      o("WALogger")
                                        .ERROR(
                                          b ||
                                            (b =
                                              babelHelpers.taggedTemplateLiteralLoose(
                                                ["sendReceipt failed"],
                                              )),
                                        )
                                        .catching(r("getErrorSafe")(e))
                                        .sendLogs("send-receipt-error", {
                                          sampling: 0.01,
                                        });
                                    })
                                : o("WAWebGetMessageCache")
                                    .getMessageCache()
                                    .addMessages(
                                      [
                                        {
                                          receiptInfo: {
                                            externalId: B.externalId,
                                            from: o(
                                              "WAWebMsgProcessingApiUtils",
                                            ).getFrom(B),
                                            author: B.author,
                                          },
                                        },
                                      ],
                                      !1,
                                    ),
                            null);
                      },
                    );
                    function a() {
                      return e.apply(this, arguments);
                    }
                    return a;
                  })(),
                })
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              D(t.offline),
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
              D(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason
                    .InvalidHostedCompanionStanza,
                ),
              })
            : null;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
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
