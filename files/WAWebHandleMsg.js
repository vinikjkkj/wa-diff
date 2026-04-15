__d(
  "WAWebHandleMsg",
  [
    "Promise",
    "WALogger",
    "WAParsableWapNode",
    "WATimeUtils",
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
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageDedupUtils",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebSetUsernameJob",
    "WAWebStatusSessionGatingUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (a.error) {
            var i;
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
                    a.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var l = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (l.error)
              return (
                l.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        l.error,
                      )
                      .tags("messaging")
                      .sendLogs("failedParsing: ack not parsed XMPP", {
                        sampling: 0.01,
                      })
                  : o("WALogger")
                      .LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage:",
                          ])),
                      )
                      .tags("messaging")
                      .sendLogs("failedParsing: ack not parsed", {
                        sampling: 0.01,
                      }),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropInvalidStanza(t),
                (h || (h = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var C = l.success,
              v = C.externalId,
              S = C.msgInfo,
              R = C.offline,
              L = C.type,
              E = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              L == null
                ? ((E = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : a.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((i = a.error) == null ? void 0 : i.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((E = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidHostedCompanionStanza(t))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: v,
                nackReason: E,
                msgInfo: S,
                offline: R,
              }),
              a.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          " ",
                          "",
                        ])),
                      v,
                      a.error,
                    )
                    .tags("messaging")
                    .sendLogs("failedParsing: ack parsed XMPP", {
                      sampling: 0.01,
                    })
                : o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      v,
                    )
                    .tags("messaging")
                    .sendLogs("failedParsing: ack parsed", { sampling: 0.01 }),
              (h || (h = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, E),
              )
            );
          }
          var k = a.success;
          o(
            "WAWebMaybePostOfflineCountTooHighMetric",
          ).maybePostOfflineCountTooHigh(k);
          var I = k.encs,
            T = k.ghsReportingTokenInfos,
            D = k.msgBotInfo,
            x = k.msgInfo,
            $ = k.msgMeta,
            P = o("WAWebMsgProcessingApiUtils").messageInfoToKey(x);
          ((x.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            x.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var N = 1;
          return (
            o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled() &&
              (N = o("WAWebMessageDedupUtils").addPendingMessage(P, x.ts, I)),
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete k.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, y)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  k.msgInfo,
                  k.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: x.chat,
                  isOffline: !!k.msgInfo.offline,
                  msgCategory: x.category,
                  action: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e;
                        if (
                          (o("WALogger")
                            .LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "handleMsg: chat=",
                                  " id=",
                                  " offline=",
                                  "",
                                ])),
                              x.chat.toLogString(),
                              x.externalId,
                              (e = x.offline) != null ? e : "",
                            )
                            .tags("messaging"),
                          (x.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()),
                          yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcesMsgInfoForLid({
                            msgInfo: x,
                            msgMeta: $,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var t = [];
                          if (
                            x.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var n = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                x.author,
                              ),
                              username: x.participantUsername,
                            });
                            n && t.push(n);
                          } else if (
                            x.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            x.bclParticipants.forEach(function (e) {
                              var n,
                                r = o(
                                  "WAWebSetUsernameJob",
                                ).maybeCreateSetUsernameInfoJobArg({
                                  userId: o("WAWebWidFactory").asUserWidOrThrow(
                                    (n = e.peerRecipientLid) != null
                                      ? n
                                      : e.wid,
                                  ),
                                  username: e.peerRecipientUsername,
                                });
                              r && t.push(r);
                            });
                          else if (
                            x.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var r,
                              a =
                                x.participantLid ||
                                ((r = x.participant) != null && r.isLid())
                                  ? x.participant
                                  : null,
                              i = a
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(a),
                                    username: x.participantUsername,
                                  })
                                : null;
                            i && t.push(i);
                          } else {
                            var l = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                x.author,
                              ),
                              username: x.username,
                              usernameCountryCode: x.senderCountryCode,
                            });
                            l && t.push(l);
                            var s;
                            x.peerRecipientLid
                              ? (s = o("WAWebWidFactory").asUserWidOrThrow(
                                  x.peerRecipientLid,
                                ))
                              : x.chat.isLid() &&
                                (s = o("WAWebWidFactory").asUserWidOrThrow(
                                  x.chat,
                                ));
                            var u = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: s,
                              username: x.peerRecipientUsername,
                            });
                            u && t.push(u);
                          }
                          t.length > 0 &&
                            (yield o("WAWebSetUsernameJob").setUsernamesJob(t));
                        }
                        var c = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(x);
                        if (
                          (T != null &&
                            T.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              c.toString(),
                              T,
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
                                T.length,
                                c.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          $.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: c,
                            stanzaId: x.externalId,
                            msgTs: x.ts,
                            incomingMsgReportingTokenInfo: k.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                x.externalId,
                              )
                              .tags("messaging"));
                          var d = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            D != null
                              ? (d = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : $.isHostedMsgUnavailable === !0
                                ? (d = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : $.isViewOnceUnavailable === !0 &&
                                  (d = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: $,
                              msgInfo: x,
                              placeholderType: d,
                            }),
                            o("WAWebHandleMsgSendReceipt").sendReceipt(x, $, {
                              result: o("WAWebHandleMsgTypes.flow")
                                .E2EProcessResult.BACKFILL,
                            }),
                            null
                          );
                        }
                        var m = o("WAWebMsgProcessingApiUtils").getFrom(x),
                          h = m.isStatus() || $.isGroupStatus === !0,
                          y =
                            h &&
                            o(
                              "WAWebStatusSessionGatingUtils",
                            ).shouldUseStatusSessionForIncomingMessage()
                              ? o("WAWebSessionScope").SessionScope.STATUS
                              : void 0;
                        y != null &&
                          o("WALogger")
                            .LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] handleMsg: isGroupStatus=",
                                  " sessionScope=",
                                  "",
                                ])),
                              String($.isGroupStatus === !0),
                              y,
                            )
                            .tags("messaging");
                        var C = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          k,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          y,
                        );
                        return (
                          x.offline != null &&
                            o(
                              "WAWebOfflineHandler",
                            ).OfflineMessageHandler.processMessageDecryptResult(
                              C.result,
                            ),
                          C.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS &&
                            o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: c,
                              stanzaId: x.externalId,
                              msgTs: x.ts,
                              incomingMsgReportingTokenInfo:
                                k.reportingTokenInfo,
                            }),
                          C.result ===
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR && b(k)
                            ? o("WAWebGetMessageCache")
                                .getMessageCache()
                                .addMessages(
                                  [
                                    {
                                      duplicateMsgReceiptInfo: {
                                        externalId: x.externalId,
                                        from: o(
                                          "WAWebMsgProcessingApiUtils",
                                        ).getFrom(x),
                                        author: x.author,
                                        msgInfo: x,
                                        msgMeta: $,
                                        enc: C.failedEnc || I[0],
                                        hasHideFailEnc: I.some(function (e) {
                                          return e.hideFail;
                                        }),
                                        msgReceivedTimes: N,
                                      },
                                    },
                                  ],
                                  x.offline == null,
                                )
                            : x.offline == null ||
                                x.category ===
                                  o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                                $.type ===
                                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                    .medianotify ||
                                (C.result !==
                                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                    .SUCCESS &&
                                  C.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult
                                      .SIGNAL_OLD_COUNTER_ERROR)
                              ? o("WAWebHandleMsgSendReceipt").sendReceipt(
                                  x,
                                  $,
                                  C,
                                )
                              : o("WAWebGetMessageCache")
                                  .getMessageCache()
                                  .addMessages(
                                    [
                                      {
                                        receiptInfo: {
                                          externalId: x.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(x),
                                          author: x.author,
                                        },
                                      },
                                    ],
                                    !1,
                                  ),
                          null
                        );
                      },
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                })
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    l.default = y;
  },
  98,
);
