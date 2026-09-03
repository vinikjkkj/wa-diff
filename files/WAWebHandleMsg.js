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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            C = l === void 0 ? !1 : l,
            b = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (b.error) {
            var R;
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
                    b.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var k = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (k.error)
              return (
                k.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        k.error,
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
                (v || (v = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var I = k.success,
              T = I.externalId,
              D = I.msgInfo,
              x = I.offline,
              $ = I.type,
              P = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              $ == null
                ? ((P = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : b.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((R = b.error) == null ? void 0 : R.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((P = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      k.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: T,
                nackReason: P,
                msgInfo: D,
                offline: x,
              }),
              b.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      b.error,
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
              (v || (v = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, P),
              )
            );
          }
          var N = b.success;
          (C && (N.msgMeta.isGroupStatus = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(N),
            N.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : N.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var M = N.encs,
            w = N.ghsReportingTokenInfos,
            A = N.msgBotInfo,
            F = N.msgInfo,
            O = N.msgMeta;
          ((F.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            F.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var B = 1;
          return (
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete N.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, S)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  N.msgInfo,
                  N.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: F.chat,
                  isOffline: !!N.msgInfo.offline,
                  msgCategory: F.category,
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
                            F.chat.toLogString(),
                            F.externalId,
                            (e = F.offline) != null ? e : "",
                          )
                          .tags("messaging"),
                          (F.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()));
                        var n = F.metaFrom;
                        if (
                          n != null &&
                          o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                            F.author,
                            n,
                          ) &&
                          !o("WAWebUserPrefsMeUser").isMeAccount(n)
                        ) {
                          var a = yield E(t, F, n);
                          if (a != null) return a.response;
                        }
                        if (
                          (yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcessMsgInfoForLid({
                            msgInfo: F,
                            msgMeta: O,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var i = [];
                          if (
                            F.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var l = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                F.author,
                              ),
                              username: F.participantUsername,
                            });
                            l && i.push(l);
                          } else if (
                            F.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            F.bclParticipants.forEach(function (e) {
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
                            F.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var s,
                              u =
                                F.participantLid ||
                                ((s = F.participant) != null && s.isLid())
                                  ? F.participant
                                  : null,
                              c = u
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(u),
                                    username: F.participantUsername,
                                  })
                                : null;
                            c && i.push(c);
                          } else {
                            var d = o("WAWebWidFactory").asUserWidOrThrow(
                              F.author,
                            );
                            if (
                              F.username == null &&
                              F.senderPn != null &&
                              d.isLid()
                            ) {
                              var m;
                              i.push({
                                userId: d,
                                deleteUsername: !0,
                                usernameCountryCode:
                                  (m = F.senderCountryCode) != null
                                    ? m
                                    : void 0,
                              });
                            } else {
                              var C = o(
                                "WAWebSetUsernameJob",
                              ).maybeCreateSetUsernameInfoJobArg({
                                userId: d,
                                username: F.username,
                                usernameCountryCode: F.senderCountryCode,
                              });
                              C && i.push(C);
                            }
                            var b;
                            F.peerRecipientLid
                              ? (b = o("WAWebWidFactory").asUserWidOrThrow(
                                  F.peerRecipientLid,
                                ))
                              : F.chat.isLid() &&
                                (b = o("WAWebWidFactory").asUserWidOrThrow(
                                  F.chat,
                                ));
                            var v = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: b,
                              username: F.peerRecipientUsername,
                            });
                            v && i.push(v);
                          }
                          if (i.length > 0) {
                            var S = yield o(
                              "WAWebSetUsernameJob",
                            ).setUsernamesJob(i);
                            yield o(
                              "WAWebInsertUsernameChangeSystemMsg",
                            ).maybeInsertUsernameChangeSystemMsgs(
                              i,
                              S,
                              "handleMsg",
                            );
                          }
                        }
                        var R = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(F);
                        if (
                          (w != null &&
                            w.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              R.toString(),
                              w,
                              !1,
                            ),
                            o("WALogger")
                              .LOG(
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "[group-history] Stored ",
                                    " reporting tokens for bundle ",
                                    "",
                                  ])),
                                w.length,
                                R.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          O.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: R,
                            stanzaId: F.externalId,
                            msgTs: F.ts,
                            incomingMsgReportingTokenInfo: N.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                F.externalId,
                              )
                              .tags("messaging"));
                          var k = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            A != null
                              ? (k = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : O.isHostedMsgUnavailable === !0
                                ? (k = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : O.isViewOnceUnavailable === !0 &&
                                  (k = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: O,
                              msgInfo: F,
                              placeholderType: k,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(F, O, {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.BACKFILL,
                              })
                              .catch(function (e) {
                                o("WALogger")
                                  .ERROR(
                                    g ||
                                      (g =
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
                        var I = o("WAWebMsgProcessingApiUtils").getFrom(F),
                          T = I.isStatus() || O.isGroupStatus === !0,
                          D;
                        if (
                          (T
                            ? (D = o(
                                "WAWebStatusSessionGatingUtils",
                              ).shouldUseStatusSessionForIncomingMessage(
                                O.metaSessionScope,
                              )
                                ? o("WAWebSessionScope").SessionScope.STATUS
                                : void 0)
                            : M.some(function (e) {
                                return e.sessionType === "pq";
                              }) &&
                              (D = o("WAWebSessionScope").SessionScope.PQ),
                          D != null)
                        ) {
                          var x;
                          o("WALogger")
                            .LOG(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] grpStatus=",
                                  " scope=",
                                  " metaScope=",
                                  "",
                                ])),
                              String(O.isGroupStatus === !0),
                              D,
                              (x = O.metaSessionScope) != null ? x : "none",
                            )
                            .tags("messaging");
                        }
                        var $ = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          N,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          D,
                        );
                        return (
                          F.offline != null &&
                            o(
                              "WAWebOfflineHandler",
                            ).OfflineMessageHandler.processMessageDecryptResult(
                              $.result,
                            ),
                          $.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS &&
                            o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: R,
                              stanzaId: F.externalId,
                              msgTs: F.ts,
                              incomingMsgReportingTokenInfo:
                                N.reportingTokenInfo,
                            }),
                          $.result ===
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR && L(N)
                            ? o("WAWebGetMessageCache")
                                .getMessageCache()
                                .addMessages(
                                  [
                                    {
                                      duplicateMsgReceiptInfo: {
                                        externalId: F.externalId,
                                        from: o(
                                          "WAWebMsgProcessingApiUtils",
                                        ).getFrom(F),
                                        author: F.author,
                                        msgInfo: F,
                                        msgMeta: O,
                                        enc: $.failedEnc || M[0],
                                        hasHideFailEnc: M.some(function (e) {
                                          return e.hideFail;
                                        }),
                                        msgReceivedTimes: B,
                                      },
                                    },
                                  ],
                                  F.offline == null,
                                )
                            : F.offline == null ||
                                F.category ===
                                  o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                                o(
                                  "WAWebHandleMsgSendReceipt",
                                ).isCoexV2SenderReceiptMessage(F) ||
                                o(
                                  "WAWebHandleMsgSendReceipt",
                                ).isCoexV2PeerDeliveryReceiptMessage(F) ||
                                O.type ===
                                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                    .medianotify ||
                                ($.result !==
                                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                    .SUCCESS &&
                                  $.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult
                                      .SIGNAL_OLD_COUNTER_ERROR)
                              ? o("WAWebHandleMsgSendReceipt")
                                  .sendReceipt(F, O, $, { canNack: L(N) })
                                  .catch(function (e) {
                                    o("WALogger")
                                      .ERROR(
                                        y ||
                                          (y =
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
                                          externalId: F.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(F),
                                          author: F.author,
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to read peer hosted state",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-peer-hosted-state-read-failed"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(e),
              I(t.offline),
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
              I(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason
                    .InvalidHostedCompanionStanza,
                ),
              })
            : null;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = S;
  },
  98,
);
