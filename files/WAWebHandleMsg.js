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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            b = l === void 0 ? !1 : l,
            v = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (v.error) {
            var L;
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
                    v.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var I = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (I.error)
              return (
                I.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        I.error,
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
                (S || (S = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var T = I.success,
              D = T.externalId,
              x = T.msgInfo,
              $ = T.offline,
              P = T.type,
              N = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              P == null
                ? ((N = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : v.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((L = v.error) == null ? void 0 : L.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((N = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      I.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: D,
                nackReason: N,
                msgInfo: x,
                offline: $,
              }),
              v.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      v.error,
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
              (S || (S = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, N),
              )
            );
          }
          var M = v.success;
          (b && (M.msgMeta.isGroupStatus = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(M),
            M.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : M.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var w = M.encs,
            A = M.ghsReportingTokenInfos,
            F = M.msgBotInfo,
            O = M.msgInfo,
            B = M.msgMeta;
          ((O.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            O.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var W = 1;
          return (
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete M.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, R)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  M.msgInfo,
                  M.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: O.chat,
                  isOffline: !!M.msgInfo.offline,
                  msgCategory: O.category,
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
                            O.chat.toLogString(),
                            O.externalId,
                            (e = O.offline) != null ? e : "",
                          )
                          .tags("messaging"),
                          (O.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()));
                        var n = O.metaFrom;
                        if (
                          n != null &&
                          o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                            O.author,
                            n,
                          ) &&
                          !o("WAWebUserPrefsMeUser").isMeAccount(n)
                        ) {
                          var a = yield k(t, O, n);
                          if (a != null) return a.response;
                        }
                        if (
                          (yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcessMsgInfoForLid({
                            msgInfo: O,
                            msgMeta: B,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var i = [];
                          if (
                            O.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var l = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                O.author,
                              ),
                              username: O.participantUsername,
                            });
                            l && i.push(l);
                          } else if (
                            O.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            O.bclParticipants.forEach(function (e) {
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
                              n && i.push(n);
                            });
                          else if (
                            O.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var s,
                              u =
                                O.participantLid ||
                                ((s = O.participant) != null && s.isLid())
                                  ? O.participant
                                  : null,
                              c = u
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(u),
                                    username: O.participantUsername,
                                  })
                                : null;
                            c && i.push(c);
                          } else {
                            var d = o("WAWebWidFactory").asUserWidOrThrow(
                              O.author,
                            );
                            if (
                              O.username == null &&
                              O.senderPn != null &&
                              d.isLid()
                            ) {
                              var m;
                              i.push({
                                userId: d,
                                deleteUsername: !0,
                                usernameCountryCode:
                                  (m = O.senderCountryCode) != null
                                    ? m
                                    : void 0,
                              });
                            } else {
                              var b = o(
                                "WAWebSetUsernameJob",
                              ).maybeCreateSetUsernameInfoJobArg({
                                userId: d,
                                username: O.username,
                                usernameCountryCode: O.senderCountryCode,
                              });
                              b && i.push(b);
                            }
                            var v;
                            O.peerRecipientLid
                              ? (v = o("WAWebWidFactory").asUserWidOrThrow(
                                  O.peerRecipientLid,
                                ))
                              : O.chat.isLid() &&
                                (v = o("WAWebWidFactory").asUserWidOrThrow(
                                  O.chat,
                                ));
                            var S = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: v,
                              username: O.peerRecipientUsername,
                            });
                            S && i.push(S);
                          }
                          if (i.length > 0)
                            try {
                              var R = yield o(
                                "WAWebSetUsernameJob",
                              ).setUsernamesJob(i);
                              yield o(
                                "WAWebInsertUsernameChangeSystemMsg",
                              ).maybeInsertUsernameChangeSystemMsgs(
                                i,
                                R,
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
                        var L = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(O);
                        if (
                          (A != null &&
                            A.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              L.toString(),
                              A,
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
                                A.length,
                                L.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          B.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: L,
                            stanzaId: O.externalId,
                            msgTs: O.ts,
                            incomingMsgReportingTokenInfo: M.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                O.externalId,
                              )
                              .tags("messaging"));
                          var I = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            F != null
                              ? (I = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : B.isHostedMsgUnavailable === !0
                                ? (I = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : B.isViewOnceUnavailable === !0 &&
                                  (I = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: B,
                              msgInfo: O,
                              placeholderType: I,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(O, B, {
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
                        var T = o("WAWebMsgProcessingApiUtils").getFrom(O),
                          D = T.isStatus() || B.isGroupStatus === !0,
                          x;
                        if (
                          (D
                            ? (x = o(
                                "WAWebStatusSessionGatingUtils",
                              ).shouldUseStatusSessionForIncomingMessage(
                                B.metaSessionScope,
                              )
                                ? o("WAWebSessionScope").SessionScope.STATUS
                                : void 0)
                            : w.some(function (e) {
                                return e.sessionType === "pq";
                              }) &&
                              (x = o("WAWebSessionScope").SessionScope.PQ),
                          x != null)
                        ) {
                          var $;
                          o("WALogger")
                            .LOG(
                              y ||
                                (y = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] grpStatus=",
                                  " scope=",
                                  " metaScope=",
                                  "",
                                ])),
                              String(B.isGroupStatus === !0),
                              x,
                              ($ = B.metaSessionScope) != null ? $ : "none",
                            )
                            .tags("messaging");
                        }
                        var P = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          M,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          x,
                        );
                        return (
                          O.offline != null &&
                            o(
                              "WAWebOfflineHandler",
                            ).OfflineMessageHandler.processMessageDecryptResult(
                              P.result,
                            ),
                          P.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS &&
                            o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: L,
                              stanzaId: O.externalId,
                              msgTs: O.ts,
                              incomingMsgReportingTokenInfo:
                                M.reportingTokenInfo,
                            }),
                          P.result ===
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR && E(M)
                            ? o("WAWebGetMessageCache")
                                .getMessageCache()
                                .addMessages(
                                  [
                                    {
                                      duplicateMsgReceiptInfo: {
                                        externalId: O.externalId,
                                        from: o(
                                          "WAWebMsgProcessingApiUtils",
                                        ).getFrom(O),
                                        author: O.author,
                                        msgInfo: O,
                                        msgMeta: B,
                                        enc: P.failedEnc || w[0],
                                        hasHideFailEnc: w.some(function (e) {
                                          return e.hideFail;
                                        }),
                                        msgReceivedTimes: W,
                                      },
                                    },
                                  ],
                                  O.offline == null,
                                )
                            : O.offline == null ||
                                O.category ===
                                  o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                                o(
                                  "WAWebHandleMsgSendReceipt",
                                ).isCoexV2SenderReceiptMessage(O) ||
                                o(
                                  "WAWebHandleMsgSendReceipt",
                                ).isCoexV2PeerDeliveryReceiptMessage(O) ||
                                B.type ===
                                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                    .medianotify ||
                                (P.result !==
                                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                    .SUCCESS &&
                                  P.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult
                                      .SIGNAL_OLD_COUNTER_ERROR)
                              ? o("WAWebHandleMsgSendReceipt")
                                  .sendReceipt(O, B, P, { canNack: E(M) })
                                  .catch(function (e) {
                                    o("WALogger")
                                      .ERROR(
                                        C ||
                                          (C =
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
                                          externalId: O.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(O),
                                          author: O.author,
                                        },
                                      },
                                    ],
                                    !1,
                                  ),
                          null
                        );
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to read peer hosted state",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-peer-hosted-state-read-failed"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(e),
              T(t.offline),
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
              T(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason
                    .InvalidHostedCompanionStanza,
                ),
              })
            : null;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = R;
  },
  98,
);
