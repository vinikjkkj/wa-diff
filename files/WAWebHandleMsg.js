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
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                (C || (C = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var v = l.success,
              R = v.externalId,
              L = v.msgInfo,
              E = v.offline,
              k = v.type,
              I = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              k == null
                ? ((I = o("WAWebCreateNackFromStanza").NackReason
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
                  ? ((I = o("WAWebCreateNackFromStanza").NackReason
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
                externalId: R,
                nackReason: I,
                msgInfo: L,
                offline: E,
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
                      R,
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
                      R,
                    )
                    .tags("messaging")
                    .sendLogs("failedParsing: ack parsed", { sampling: 0.01 }),
              (C || (C = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, I),
              )
            );
          }
          var T = a.success;
          o(
            "WAWebMaybePostOfflineCountTooHighMetric",
          ).maybePostOfflineCountTooHigh(T);
          var D = T.encs,
            x = T.ghsReportingTokenInfos,
            $ = T.msgBotInfo,
            P = T.msgInfo,
            N = T.msgMeta,
            M = o("WAWebMsgProcessingApiUtils").messageInfoToKey(P);
          ((P.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            P.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var w = 1;
          return (
            o("WAWebMessageDedupUtils").isPengingMessageCacheEnabled() &&
              (w = o("WAWebMessageDedupUtils").addPendingMessage(M, P.ts, D)),
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete T.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, b)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  T.msgInfo,
                  T.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: P.chat,
                  isOffline: !!T.msgInfo.offline,
                  msgCategory: P.category,
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
                              P.chat.toLogString(),
                              P.externalId,
                              (e = P.offline) != null ? e : "",
                            )
                            .tags("messaging"),
                          (P.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()),
                          yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcesMsgInfoForLid({
                            msgInfo: P,
                            msgMeta: N,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var t = [];
                          if (
                            P.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var n = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                P.author,
                              ),
                              username: P.participantUsername,
                            });
                            n && t.push(n);
                          } else if (
                            P.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            P.bclParticipants.forEach(function (e) {
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
                            P.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var a,
                              i =
                                P.participantLid ||
                                ((a = P.participant) != null && a.isLid())
                                  ? P.participant
                                  : null,
                              l = i
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(i),
                                    username: P.participantUsername,
                                  })
                                : null;
                            l && t.push(l);
                          } else {
                            var s = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                P.author,
                              ),
                              username: P.username,
                              usernameCountryCode: P.senderCountryCode,
                            });
                            s && t.push(s);
                            var u;
                            P.peerRecipientLid
                              ? (u = o("WAWebWidFactory").asUserWidOrThrow(
                                  P.peerRecipientLid,
                                ))
                              : P.chat.isLid() &&
                                (u = o("WAWebWidFactory").asUserWidOrThrow(
                                  P.chat,
                                ));
                            var c = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: u,
                              username: P.peerRecipientUsername,
                            });
                            c && t.push(c);
                          }
                          t.length > 0 &&
                            (yield o("WAWebSetUsernameJob").setUsernamesJob(t));
                        }
                        var d = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(P);
                        if (
                          (x != null &&
                            x.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              d.toString(),
                              x,
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
                                x.length,
                                d.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          N.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: d,
                            stanzaId: P.externalId,
                            msgTs: P.ts,
                            incomingMsgReportingTokenInfo: T.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                P.externalId,
                              )
                              .tags("messaging"));
                          var m = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            $ != null
                              ? (m = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : N.isHostedMsgUnavailable === !0
                                ? (m = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : N.isViewOnceUnavailable === !0 &&
                                  (m = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: N,
                              msgInfo: P,
                              placeholderType: m,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(P, N, {
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
                        var C = o("WAWebMsgProcessingApiUtils").getFrom(P),
                          b = C.isStatus() || N.isGroupStatus === !0,
                          v =
                            b &&
                            o(
                              "WAWebStatusSessionGatingUtils",
                            ).shouldUseStatusSessionForIncomingMessage()
                              ? o("WAWebSessionScope").SessionScope.STATUS
                              : void 0;
                        v != null &&
                          o("WALogger")
                            .LOG(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] handleMsg: isGroupStatus=",
                                  " sessionScope=",
                                  "",
                                ])),
                              String(N.isGroupStatus === !0),
                              v,
                            )
                            .tags("messaging");
                        var R = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          T,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          v,
                        );
                        return (
                          P.offline != null &&
                            o(
                              "WAWebOfflineHandler",
                            ).OfflineMessageHandler.processMessageDecryptResult(
                              R.result,
                            ),
                          R.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS &&
                            o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: d,
                              stanzaId: P.externalId,
                              msgTs: P.ts,
                              incomingMsgReportingTokenInfo:
                                T.reportingTokenInfo,
                            }),
                          R.result ===
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR && S(T)
                            ? o("WAWebGetMessageCache")
                                .getMessageCache()
                                .addMessages(
                                  [
                                    {
                                      duplicateMsgReceiptInfo: {
                                        externalId: P.externalId,
                                        from: o(
                                          "WAWebMsgProcessingApiUtils",
                                        ).getFrom(P),
                                        author: P.author,
                                        msgInfo: P,
                                        msgMeta: N,
                                        enc: R.failedEnc || D[0],
                                        hasHideFailEnc: D.some(function (e) {
                                          return e.hideFail;
                                        }),
                                        msgReceivedTimes: w,
                                      },
                                    },
                                  ],
                                  P.offline == null,
                                )
                            : P.offline == null ||
                                P.category ===
                                  o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                                N.type ===
                                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                    .medianotify ||
                                (R.result !==
                                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                    .SUCCESS &&
                                  R.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult
                                      .SIGNAL_OLD_COUNTER_ERROR)
                              ? o("WAWebHandleMsgSendReceipt")
                                  .sendReceipt(P, N, R)
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
                                          externalId: P.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(P),
                                          author: P.author,
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    l.default = b;
  },
  98,
);
