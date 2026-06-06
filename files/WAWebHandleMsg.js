__d(
  "WAWebHandleMsg",
  [
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
    "WAWebInsertUsernameChangeSystemMsg",
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
    "cr:4122",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t) {
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
        var l = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(t);
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
            Promise.resolve(
              o("WAWebCreateNackFromStanza").createNackFromStanza(
                t,
                o("WAWebCreateNackFromStanza").NackReason.ParsingError,
              ),
            )
          );
        var v = l.success,
          S = v.externalId,
          R = v.msgInfo,
          L = v.offline,
          E = v.type,
          k = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
        return (
          E == null
            ? ((k = o("WAWebCreateNackFromStanza").NackReason
                .UnrecognizedStanzaType),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropUnknownMessageType(t))
            : a.error instanceof o("WAParsableWapNode").XmppParsingFailure &&
                ((i = a.error) == null ? void 0 : i.reason) ===
                  "" +
                    o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza
              ? ((k = o("WAWebCreateNackFromStanza").NackReason
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
            externalId: S,
            nackReason: k,
            msgInfo: R,
            offline: L,
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
                  S,
                  a.error,
                )
                .tags("messaging")
                .sendLogs("failedParsing: ack parsed XMPP", { sampling: 0.01 })
            : o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "failedParsingMessage: ",
                      "",
                    ])),
                  S,
                )
                .tags("messaging")
                .sendLogs("failedParsing: ack parsed", { sampling: 0.01 }),
          Promise.resolve(
            o("WAWebCreateNackFromStanza").createNackFromStanza(t, k),
          )
        );
      }
      var I = a.success;
      o("WAWebMaybePostOfflineCountTooHighMetric").maybePostOfflineCountTooHigh(
        I,
      );
      var T = I.encs,
        D = I.ghsReportingTokenInfos,
        x = I.msgBotInfo,
        $ = I.msgInfo,
        P = I.msgMeta,
        N = o("WAWebMsgProcessingApiUtils").messageInfoToKey($);
      (($.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
        $.offline != null &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
      var M = 1;
      return (
        o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled() &&
          (M = o("WAWebMessageDedupUtils").addPendingMessage(N, $.ts, T)),
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete() &&
          delete I.msgInfo.offline,
        n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, C)
          ? (o("WAWebHandleMsgSendReceipt").sendReceipt(I.msgInfo, I.msgMeta, {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
            }),
            null)
          : o("WAWebMessageQueue").onMessageQueue({
              chatWid: $.chat,
              isOffline: !!I.msgInfo.offline,
              msgCategory: $.category,
              action: async function () {
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
                      $.chat.toLogString(),
                      $.externalId,
                      (e = $.offline) != null ? e : "",
                    )
                    .tags("messaging"),
                  ($.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs()),
                  await o("WAWebProcessMsgInfoForLid").maybeProcesMsgInfoForLid(
                    { msgInfo: $, msgMeta: P },
                  ),
                  o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
                ) {
                  var t = [];
                  if (
                    $.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                  ) {
                    var n = o(
                      "WAWebSetUsernameJob",
                    ).maybeCreateSetUsernameInfoJobArg({
                      userId: o("WAWebWidFactory").asUserWidOrThrow($.author),
                      username: $.participantUsername,
                    });
                    n && t.push(n);
                  } else if (
                    $.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                  )
                    $.bclParticipants.forEach(function (e) {
                      var n,
                        r = o(
                          "WAWebSetUsernameJob",
                        ).maybeCreateSetUsernameInfoJobArg({
                          userId: o("WAWebWidFactory").asUserWidOrThrow(
                            (n = e.peerRecipientLid) != null ? n : e.wid,
                          ),
                          username: e.peerRecipientUsername,
                        });
                      r && t.push(r);
                    });
                  else if (
                    $.type ===
                    o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
                  ) {
                    var a,
                      i =
                        $.participantLid ||
                        ((a = $.participant) != null && a.isLid())
                          ? $.participant
                          : null,
                      l = i
                        ? o(
                            "WAWebSetUsernameJob",
                          ).maybeCreateSetUsernameInfoJobArg({
                            userId: o("WAWebWidFactory").asUserWidOrThrow(i),
                            username: $.participantUsername,
                          })
                        : null;
                    l && t.push(l);
                  } else {
                    var s = o(
                      "WAWebSetUsernameJob",
                    ).maybeCreateSetUsernameInfoJobArg({
                      userId: o("WAWebWidFactory").asUserWidOrThrow($.author),
                      username: $.username,
                      usernameCountryCode: $.senderCountryCode,
                    });
                    s && t.push(s);
                    var u;
                    $.peerRecipientLid
                      ? (u = o("WAWebWidFactory").asUserWidOrThrow(
                          $.peerRecipientLid,
                        ))
                      : $.chat.isLid() &&
                        (u = o("WAWebWidFactory").asUserWidOrThrow($.chat));
                    var c = o(
                      "WAWebSetUsernameJob",
                    ).maybeCreateSetUsernameInfoJobArg({
                      userId: u,
                      username: $.peerRecipientUsername,
                    });
                    c && t.push(c);
                  }
                  if (t.length > 0) {
                    var d = await o("WAWebSetUsernameJob").setUsernamesJob(t);
                    await o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(t, d, "handleMsg");
                  }
                }
                var m = o("WAWebMsgProcessingApiUtils").messageInfoToKey($);
                if (
                  (D != null &&
                    D.length > 0 &&
                    (await o(
                      "WAWebGroupHistoryReportingTokenDBUtils",
                    ).storeGroupHistoryReportingTokenInfos(m.toString(), D, !1),
                    o("WALogger")
                      .LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history] Stored ",
                            " reporting tokens for bundle ",
                            "",
                          ])),
                        D.length,
                        m.toString(),
                      )
                      .tags("messaging", "wa-ice", "group-history")),
                  P.isUnavailable)
                ) {
                  (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: m,
                    stanzaId: $.externalId,
                    msgTs: $.ts,
                    incomingMsgReportingTokenInfo: I.reportingTokenInfo,
                  }),
                    o("WALogger")
                      .LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "handleMessage: msgId::",
                            ", get fanout placeholder",
                          ])),
                        $.externalId,
                      )
                      .tags("messaging"));
                  var C = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
                  return (
                    x != null
                      ? (C = o("WAWebHandleMsgTypes.flow").PlaceholderType
                          .BOT_UNAVAILABLE_FANOUT)
                      : P.isHostedMsgUnavailable === !0
                        ? (C = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .HOSTED_UNAVAILABLE_FANOUT)
                        : P.isViewOnceUnavailable === !0 &&
                          (C = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .VIEW_ONCE_UNAVAILABLE_FANOUT),
                    await o("WAWebHandleMsgProcess").processPlaceholderMsg({
                      type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                      msgMeta: P,
                      msgInfo: $,
                      placeholderType: C,
                    }),
                    o("WAWebHandleMsgSendReceipt")
                      .sendReceipt($, P, {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .BACKFILL,
                      })
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
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
                var v = o("WAWebMsgProcessingApiUtils").getFrom($),
                  S = v.isStatus() || P.isGroupStatus === !0,
                  R =
                    S &&
                    o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      P.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0;
                if (R != null) {
                  var L;
                  o("WALogger")
                    .LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[status-session] grpStatus=",
                          " scope=",
                          " metaScope=",
                          "",
                        ])),
                      String(P.isGroupStatus === !0),
                      R,
                      (L = P.metaSessionScope) != null ? L : "none",
                    )
                    .tags("messaging");
                }
                var E = await o(
                  "WAWebMsgProcessingDecryptApi",
                ).decryptE2EPayload(
                  I,
                  o("WAWebHandleMsgProcess").processDecryptedMessageProto,
                  R,
                );
                return (
                  $.offline != null &&
                    o(
                      "WAWebOfflineHandler",
                    ).OfflineMessageHandler.processMessageDecryptResult(
                      E.result,
                    ),
                  E.result !==
                    o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                      msgKey: m,
                      stanzaId: $.externalId,
                      msgTs: $.ts,
                      incomingMsgReportingTokenInfo: I.reportingTokenInfo,
                    }),
                  E.result ===
                    o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SIGNAL_OLD_COUNTER_ERROR && b(I)
                    ? o("WAWebGetMessageCache")
                        .getMessageCache()
                        .addMessages(
                          [
                            {
                              duplicateMsgReceiptInfo: {
                                externalId: $.externalId,
                                from: o("WAWebMsgProcessingApiUtils").getFrom(
                                  $,
                                ),
                                author: $.author,
                                msgInfo: $,
                                msgMeta: P,
                                enc: E.failedEnc || T[0],
                                hasHideFailEnc: T.some(function (e) {
                                  return e.hideFail;
                                }),
                                msgReceivedTimes: M,
                              },
                            },
                          ],
                          $.offline == null,
                        )
                    : $.offline == null ||
                        $.category ===
                          o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                        P.type ===
                          o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                            .medianotify ||
                        (E.result !==
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .SUCCESS &&
                          E.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR)
                      ? o("WAWebHandleMsgSendReceipt")
                          .sendReceipt($, P, E, { canNack: b(I) })
                          .catch(function (e) {
                            o("WALogger")
                              .ERROR(
                                y ||
                                  (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "sendReceipt failed",
                                  ])),
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
                                  externalId: $.externalId,
                                  from: o("WAWebMsgProcessingApiUtils").getFrom(
                                    $,
                                  ),
                                  author: $.author,
                                },
                              },
                            ],
                            !1,
                          ),
                  null
                );
              },
            })
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
    l.default = C;
  },
  98,
);
