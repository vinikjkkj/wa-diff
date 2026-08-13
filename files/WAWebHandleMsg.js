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
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
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
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            v = l === void 0 ? !1 : l,
            R = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (R.error) {
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
                    R.error,
                    t.toString(),
                  )
                  .tags("messaging"),
              o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
            var E = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (E.error)
              return (
                E.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        E.error,
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
                (C || (C = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var k = E.success,
              I = k.externalId,
              T = k.msgInfo,
              D = k.offline,
              x = k.type,
              $ = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              x == null
                ? (($ = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : R.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((L = R.error) == null ? void 0 : L.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? (($ = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      E.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: I,
                nackReason: $,
                msgInfo: T,
                offline: D,
              }),
              R.error instanceof o("WAParsableWapNode").XmppParsingFailure
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "failedParsingMessage: ",
                          "",
                        ])),
                      R.error,
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
              (C || (C = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, $),
              )
            );
          }
          var P = R.success;
          (v && (P.msgMeta.isGroupStatus = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(P));
          var N = P.encs,
            M = P.ghsReportingTokenInfos,
            w = P.msgBotInfo,
            A = P.msgInfo,
            F = P.msgMeta;
          ((A.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            A.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var O = 1;
          return (
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete P.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, b)
              ? (o("WAWebHandleMsgSendReceipt").sendReceipt(
                  P.msgInfo,
                  P.msgMeta,
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SUCCESS,
                  },
                ),
                null)
              : o("WAWebMessageQueue").onMessageQueue({
                  chatWid: A.chat,
                  isOffline: !!P.msgInfo.offline,
                  msgCategory: A.category,
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
                              A.chat.toLogString(),
                              A.externalId,
                              (e = A.offline) != null ? e : "",
                            )
                            .tags("messaging"),
                          (A.msgProcessStartTsMillis =
                            o("WATimeUtils").unixTimeMs()),
                          yield o(
                            "WAWebProcessMsgInfoForLid",
                          ).maybeProcessMsgInfoForLid({
                            msgInfo: A,
                            msgMeta: F,
                          }),
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameDisplayedEnabled())
                        ) {
                          var t = [];
                          if (
                            A.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var n = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                A.author,
                              ),
                              username: A.participantUsername,
                            });
                            n && t.push(n);
                          } else if (
                            A.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .PEER_BROADCAST
                          )
                            A.bclParticipants.forEach(function (e) {
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
                            A.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var a,
                              i =
                                A.participantLid ||
                                ((a = A.participant) != null && a.isLid())
                                  ? A.participant
                                  : null,
                              l = i
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(i),
                                    username: A.participantUsername,
                                  })
                                : null;
                            l && t.push(l);
                          } else {
                            var s = o("WAWebWidFactory").asUserWidOrThrow(
                              A.author,
                            );
                            if (
                              A.username == null &&
                              A.senderPn != null &&
                              s.isLid()
                            ) {
                              var u;
                              t.push({
                                userId: s,
                                deleteUsername: !0,
                                usernameCountryCode:
                                  (u = A.senderCountryCode) != null
                                    ? u
                                    : void 0,
                              });
                            } else {
                              var c = o(
                                "WAWebSetUsernameJob",
                              ).maybeCreateSetUsernameInfoJobArg({
                                userId: s,
                                username: A.username,
                                usernameCountryCode: A.senderCountryCode,
                              });
                              c && t.push(c);
                            }
                            var d;
                            A.peerRecipientLid
                              ? (d = o("WAWebWidFactory").asUserWidOrThrow(
                                  A.peerRecipientLid,
                                ))
                              : A.chat.isLid() &&
                                (d = o("WAWebWidFactory").asUserWidOrThrow(
                                  A.chat,
                                ));
                            var m = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: d,
                              username: A.peerRecipientUsername,
                            });
                            m && t.push(m);
                          }
                          if (t.length > 0) {
                            var C = yield o(
                              "WAWebSetUsernameJob",
                            ).setUsernamesJob(t);
                            yield o(
                              "WAWebInsertUsernameChangeSystemMsg",
                            ).maybeInsertUsernameChangeSystemMsgs(
                              t,
                              C,
                              "handleMsg",
                            );
                          }
                        }
                        var b = o(
                          "WAWebMsgProcessingApiUtils",
                        ).messageInfoToKey(A);
                        if (
                          (M != null &&
                            M.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              b.toString(),
                              M,
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
                                M.length,
                                b.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          F.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: b,
                            stanzaId: A.externalId,
                            msgTs: A.ts,
                            incomingMsgReportingTokenInfo: P.reportingTokenInfo,
                          }),
                            o("WALogger")
                              .LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleMessage: msgId::",
                                    ", get fanout placeholder",
                                  ])),
                                A.externalId,
                              )
                              .tags("messaging"));
                          var v = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            w != null
                              ? (v = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : F.isHostedMsgUnavailable === !0
                                ? (v = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : F.isViewOnceUnavailable === !0 &&
                                  (v = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: F,
                              msgInfo: A,
                              placeholderType: v,
                            }),
                            o("WAWebHandleMsgSendReceipt")
                              .sendReceipt(A, F, {
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
                        var R = o("WAWebMsgProcessingApiUtils").getFrom(A),
                          L = R.isStatus() || F.isGroupStatus === !0,
                          E;
                        if (
                          (L
                            ? (E = o(
                                "WAWebStatusSessionGatingUtils",
                              ).shouldUseStatusSessionForIncomingMessage(
                                F.metaSessionScope,
                              )
                                ? o("WAWebSessionScope").SessionScope.STATUS
                                : void 0)
                            : N.some(function (e) {
                                return e.sessionType === "pq";
                              }) &&
                              (E = o("WAWebSessionScope").SessionScope.PQ),
                          E != null)
                        ) {
                          var k;
                          o("WALogger")
                            .LOG(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] grpStatus=",
                                  " scope=",
                                  " metaScope=",
                                  "",
                                ])),
                              String(F.isGroupStatus === !0),
                              E,
                              (k = F.metaSessionScope) != null ? k : "none",
                            )
                            .tags("messaging");
                        }
                        var I = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          P,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          E,
                        );
                        return (
                          A.offline != null &&
                            o(
                              "WAWebOfflineHandler",
                            ).OfflineMessageHandler.processMessageDecryptResult(
                              I.result,
                            ),
                          I.result !==
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS &&
                            o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: b,
                              stanzaId: A.externalId,
                              msgTs: A.ts,
                              incomingMsgReportingTokenInfo:
                                P.reportingTokenInfo,
                            }),
                          I.result ===
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SIGNAL_OLD_COUNTER_ERROR && S(P)
                            ? o("WAWebGetMessageCache")
                                .getMessageCache()
                                .addMessages(
                                  [
                                    {
                                      duplicateMsgReceiptInfo: {
                                        externalId: A.externalId,
                                        from: o(
                                          "WAWebMsgProcessingApiUtils",
                                        ).getFrom(A),
                                        author: A.author,
                                        msgInfo: A,
                                        msgMeta: F,
                                        enc: I.failedEnc || N[0],
                                        hasHideFailEnc: N.some(function (e) {
                                          return e.hideFail;
                                        }),
                                        msgReceivedTimes: O,
                                      },
                                    },
                                  ],
                                  A.offline == null,
                                )
                            : A.offline == null ||
                                A.category ===
                                  o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                                o(
                                  "WAWebHandleMsgSendReceipt",
                                ).isCoexV2SenderReceiptMessage(A) ||
                                F.type ===
                                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                                    .medianotify ||
                                (I.result !==
                                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                    .SUCCESS &&
                                  I.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult
                                      .SIGNAL_OLD_COUNTER_ERROR)
                              ? o("WAWebHandleMsgSendReceipt")
                                  .sendReceipt(A, F, I, { canNack: S(P) })
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
                                          externalId: A.externalId,
                                          from: o(
                                            "WAWebMsgProcessingApiUtils",
                                          ).getFrom(A),
                                          author: A.author,
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
