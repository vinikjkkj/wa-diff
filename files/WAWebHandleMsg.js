__d(
  "WAWebHandleMsg",
  [
    "Promise",
    "WALogger",
    "WAParsableWapNode",
    "WATimeUtils",
    "WAWap",
    "WAWebAddonQueryUtils",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessageOrphans",
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
    "WAWebMsgKey",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            b = l === void 0 ? !1 : l,
            v = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (v.error) {
            var S;
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
            var R = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
              t,
            );
            if (R.error)
              return (
                R.error instanceof o("WAParsableWapNode").XmppParsingFailure
                  ? o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "failedParsingMessage: ",
                            "",
                          ])),
                        R.error,
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
                (k || (k = n("Promise"))).resolve(
                  o("WAWebCreateNackFromStanza").createNackFromStanza(
                    t,
                    o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                  ),
                )
              );
            var L = R.success,
              E = L.externalId,
              T = L.msgInfo,
              x = L.offline,
              $ = L.type,
              P = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
            return (
              $ == null
                ? ((P = o("WAWebCreateNackFromStanza").NackReason
                    .UnrecognizedStanzaType),
                  o(
                    "WAWebPostIncomingMessageDropMetric",
                  ).postIncomingMessageDropUnknownMessageType(t))
                : v.error instanceof
                      o("WAParsableWapNode").XmppParsingFailure &&
                    ((S = v.error) == null ? void 0 : S.reason) ===
                      "" +
                        o("WAWebCreateNackFromStanza").NackReason
                          .InvalidHostedCompanionStanza
                  ? ((P = o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza),
                    o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                      t,
                      R.success.from,
                    ))
                  : o(
                      "WAWebPostIncomingMessageDropMetric",
                    ).postIncomingMessageDropInvalidStanza(t),
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: E,
                nackReason: P,
                msgInfo: T,
                offline: x,
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
              (k || (k = n("Promise"))).resolve(
                o("WAWebCreateNackFromStanza").createNackFromStanza(t, P),
              )
            );
          }
          var N = v.success;
          (b && (N.msgMeta.isGroupStatus = !0),
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
            B = N.msgInfo,
            W = N.msgMeta;
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
              delete N.msgInfo.offline,
            n("cr:4122") != null && n("cr:4122").isNextMessagePostponed(t, I)
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
                  chatWid: B.chat,
                  isOffline: !!N.msgInfo.offline,
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
                        var n = B.metaFrom;
                        if (
                          n != null &&
                          o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                            B.author,
                            n,
                          ) &&
                          !o("WAWebUserPrefsMeUser").isMeAccount(n)
                        ) {
                          var a = yield O(t, B, n);
                          if (a != null) return a.response;
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
                          var i = [];
                          if (
                            B.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                          ) {
                            var l = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: o("WAWebWidFactory").asUserWidOrThrow(
                                B.author,
                              ),
                              username: B.participantUsername,
                            });
                            l && i.push(l);
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
                              n && i.push(n);
                            });
                          else if (
                            B.type ===
                            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                              .OTHER_BROADCAST
                          ) {
                            var s,
                              u =
                                B.participantLid ||
                                ((s = B.participant) != null && s.isLid())
                                  ? B.participant
                                  : null,
                              c = u
                                ? o(
                                    "WAWebSetUsernameJob",
                                  ).maybeCreateSetUsernameInfoJobArg({
                                    userId:
                                      o("WAWebWidFactory").asUserWidOrThrow(u),
                                    username: B.participantUsername,
                                  })
                                : null;
                            c && i.push(c);
                          } else {
                            var d = o("WAWebWidFactory").asUserWidOrThrow(
                              B.author,
                            );
                            if (
                              B.username == null &&
                              B.senderPn != null &&
                              d.isLid()
                            ) {
                              var m;
                              i.push({
                                userId: d,
                                deleteUsername: !0,
                                usernameCountryCode:
                                  (m = B.senderCountryCode) != null
                                    ? m
                                    : void 0,
                              });
                            } else {
                              var b = o(
                                "WAWebSetUsernameJob",
                              ).maybeCreateSetUsernameInfoJobArg({
                                userId: d,
                                username: B.username,
                                usernameCountryCode: B.senderCountryCode,
                              });
                              b && i.push(b);
                            }
                            var v;
                            B.peerRecipientLid
                              ? (v = o("WAWebWidFactory").asUserWidOrThrow(
                                  B.peerRecipientLid,
                                ))
                              : B.chat.isLid() &&
                                (v = o("WAWebWidFactory").asUserWidOrThrow(
                                  B.chat,
                                ));
                            var S = o(
                              "WAWebSetUsernameJob",
                            ).maybeCreateSetUsernameInfoJobArg({
                              userId: v,
                              username: B.peerRecipientUsername,
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
                        ).messageInfoToKey(B);
                        if (
                          (w != null &&
                            w.length > 0 &&
                            (yield o(
                              "WAWebGroupHistoryReportingTokenDBUtils",
                            ).storeGroupHistoryReportingTokenInfos(
                              L.toString(),
                              w,
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
                                w.length,
                                L.toString(),
                              )
                              .tags("messaging", "wa-ice", "group-history")),
                          W.isUnavailable)
                        ) {
                          (o(
                            "WAWebDBReportingTokenUtils",
                          ).maybeStoreReportingTag({
                            msgKey: L,
                            stanzaId: B.externalId,
                            msgTs: B.ts,
                            incomingMsgReportingTokenInfo: N.reportingTokenInfo,
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
                          var E = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .FANOUT;
                          return (
                            A != null
                              ? (E = o("WAWebHandleMsgTypes.flow")
                                  .PlaceholderType.BOT_UNAVAILABLE_FANOUT)
                              : W.isHostedMsgUnavailable === !0
                                ? (E = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType.HOSTED_UNAVAILABLE_FANOUT)
                                : W.isViewOnceUnavailable === !0 &&
                                  (E = o("WAWebHandleMsgTypes.flow")
                                    .PlaceholderType
                                    .VIEW_ONCE_UNAVAILABLE_FANOUT),
                            yield o(
                              "WAWebHandleMsgProcess",
                            ).processPlaceholderMsg({
                              type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                              msgMeta: W,
                              msgInfo: B,
                              placeholderType: E,
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
                        var k = o("WAWebMsgProcessingApiUtils").getFrom(B),
                          I = k.isStatus() || W.isGroupStatus === !0,
                          T;
                        if (
                          (I
                            ? (T = o(
                                "WAWebStatusSessionGatingUtils",
                              ).shouldUseStatusSessionForIncomingMessage(
                                W.metaSessionScope,
                              )
                                ? o("WAWebSessionScope").SessionScope.STATUS
                                : void 0)
                            : M.some(function (e) {
                                return e.sessionType === "pq";
                              }) &&
                              (T = o("WAWebSessionScope").SessionScope.PQ),
                          T != null)
                        ) {
                          var x;
                          o("WALogger")
                            .LOG(
                              y ||
                                (y = babelHelpers.taggedTemplateLiteralLoose([
                                  "[status-session] grpStatus=",
                                  " scope=",
                                  " metaScope=",
                                  "",
                                ])),
                              String(W.isGroupStatus === !0),
                              T,
                              (x = W.metaSessionScope) != null ? x : "none",
                            )
                            .tags("messaging");
                        }
                        var $ = yield o(
                          "WAWebMsgProcessingDecryptApi",
                        ).decryptE2EPayload(
                          N,
                          o("WAWebHandleMsgProcess")
                            .processDecryptedMessageProto,
                          T,
                        );
                        return $.result ===
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .DEFERRED
                          ? (o(
                              "WAWebDBReportingTokenUtils",
                            ).maybeStoreReportingTag({
                              msgKey: L,
                              stanzaId: B.externalId,
                              msgTs: B.ts,
                              incomingMsgReportingTokenInfo:
                                N.reportingTokenInfo,
                            }),
                            yield D({ decryptResult: $, input: N, node: t }),
                            null)
                          : (B.offline != null &&
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
                                msgKey: L,
                                stanzaId: B.externalId,
                                msgTs: B.ts,
                                incomingMsgReportingTokenInfo:
                                  N.reportingTokenInfo,
                              }),
                            $.result ===
                              o("WAWebHandleMsgTypes.flow").E2EProcessResult
                                .SIGNAL_OLD_COUNTER_ERROR && F(N)
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
                                          enc: $.failedEnc || M[0],
                                          hasHideFailEnc: M.some(function (e) {
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
                                  ($.result !==
                                    o("WAWebHandleMsgTypes.flow")
                                      .E2EProcessResult.SUCCESS &&
                                    $.result !==
                                      o("WAWebHandleMsgTypes.flow")
                                        .E2EProcessResult
                                        .SIGNAL_OLD_COUNTER_ERROR)
                                ? o("WAWebHandleMsgSendReceipt")
                                    .sendReceipt(B, W, $, { canNack: F(N) })
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.decryptResult,
            n = e.input,
            a = e.node,
            i = n.msgInfo,
            l = n.msgMeta,
            s = yield w(n, t, a);
          if (s)
            try {
              yield $(t, i, l);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "handleMsg: settling the freshly stored bot orphan failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-settle-failed", { sampling: 0.01 });
            }
          var u = s
            ? {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL,
              }
            : {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_ERROR,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .UnhandledError,
              };
          (o("WAWebHandleMsgSendReceipt")
            .sendReceipt(i, l, u, { canNack: F(n) })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "sendReceipt failed for deferred orphan bot message",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("send-receipt-orphan-bot-error", { sampling: 0.01 });
            }),
            i.offline != null &&
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.processMessageDecryptResult(u.result));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield N(e.targetMsgKey);
          if (r != null) {
            yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(
              r,
            );
            return;
          }
          yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
            type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
            msgMeta: n,
            msgInfo: t,
            placeholderType: o("WAWebHandleMsgTypes.flow").PlaceholderType
              .BOT_ORPHAN,
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e == null) return null;
          var n = r("WAWebMsgKey").fromString(e),
            a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([n]);
          return (t = a.get(n.toString())) != null ? t : null;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i;
          try {
            var l,
              s,
              u = e.msgInfo;
            ((a = babelHelpers.extends(
              {},
              o("WAWebMsgProcessingApiUtils").generateBaseMsg(u),
              {
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
                subtype: "bot_orphan",
                botEditType:
                  (l = e.msgBotInfo) == null ? void 0 : l.botEditType,
                botEditTargetId:
                  (s = e.msgBotInfo) == null ? void 0 : s.botEditTargetId,
                botOrphanStanza: o("WAWap").encodeStanza(n),
              },
            )),
              (i = r("WAWebMsgKey").fromString(t.targetMsgKey)));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "storeOrphanBotMsg: could not build the orphan row",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("store-orphan-bot-msg-build-failed", {
                  sampling: 0.01,
                }),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropInternalError(n),
              !1
            );
          }
          try {
            return (
              yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
                [a],
                function () {
                  return i;
                },
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "storeOrphanBotMsg: failed to store orphan",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("store-orphan-bot-msg-failed", { sampling: 0.01 }),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(n),
              !1
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
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
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to read peer hosted state",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-peer-hosted-state-read-failed"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(e),
              W(t.offline),
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
              W(t.offline),
              {
                response: o("WAWebCreateNackFromStanza").createNackFromStanza(
                  e,
                  o("WAWebCreateNackFromStanza").NackReason
                    .InvalidHostedCompanionStanza,
                ),
              })
            : null;
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = I;
  },
  98,
);
