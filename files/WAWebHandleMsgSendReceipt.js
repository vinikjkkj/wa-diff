__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCoexV2SendReceipt",
    "WAWebCreateNackFromStanza",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgSendAck",
    "WAWebHandleMsgTypes",
    "WAWebMsgProcessingApiUtils",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebSendDeliveryReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSendRetryReceiptJob",
    "WAWebSessionScopeWamUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var m;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
            );
            var p = t.externalId,
              h = a.rawTs,
              y = a.type,
              C = o("WAWebMsgProcessingApiUtils").getFrom(t),
              b = null;
            if (
              t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) b = t.originalBotRecipient;
              else {
                var v;
                b = (v = t.preMatChat) != null ? v : t.chat;
              }
            else if (
              t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
              o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                t.author,
                t.metaFrom,
              )
            ) {
              var S;
              b = (S = t.preMatChat) != null ? S : t.chat;
            }
            var R =
                t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
                  ? null
                  : (m = t.preMatChat) != null
                    ? m
                    : t.author,
              L = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              E = !t.chat.isBot() && t.author.isBot(),
              k =
                o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(
                  C,
                  a,
                ) != null,
              I = a.isStatusStanza === !0 ? "status" : void 0,
              T = function () {
                o("WAWebHandleMsgSendAck").sendAck({
                  externalId: p,
                  from: C,
                  participant: R,
                  stanzaClass: I,
                  type: y,
                });
              },
              D = function (t, n) {
                if ((l == null ? void 0 : l.canNack) === !1) {
                  T();
                  return;
                }
                o("WAWebHandleMsgSendAck").sendNack(p, C, y, R, t, n, I);
              };
            if (i.result == null)
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: invalid e2eProcessResult "',
                        '"',
                      ])),
                    i.result,
                  )
                  .sendLogs("send-receipt-missing-e2e-process-result"),
                T()
              );
            var x = g(i);
            function $(e) {
              return P.apply(this, arguments);
            }
            function P() {
              return (
                (P = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.errorReason,
                      n = e.label,
                      i = e.send;
                    try {
                      yield i(
                        p,
                        r("nullthrows")(
                          o(
                            "WAWebCoexV2ReceiptRecipient",
                          ).toCoexV2ReceiptRecipient(
                            r("nullthrows")(a.targetChatJid),
                          ),
                        ),
                      );
                    } catch (e) {
                      (o("WALogger")
                        .WARN(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[coexv2] ",
                              " receipt failed, falling back to ack",
                            ])),
                          n,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(t),
                        T());
                    }
                  },
                )),
                P.apply(this, arguments)
              );
            }
            e: {
              if (
                i.result ===
                  o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS ||
                i.result ===
                  o("WAWebHandleMsgTypes").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR
              ) {
                if (_(t)) {
                  yield $({
                    errorReason: "coexv2-sender-receipt-error",
                    label: "sender",
                    send: o("WAWebCoexV2SendReceipt").sendCoexV2SenderReceipt,
                  });
                  return;
                }
                if (f(t)) {
                  yield $({
                    errorReason: "coexv2-delivery-receipt-error",
                    label: "delivery",
                    send: o("WAWebCoexV2SendReceipt").sendCoexV2DeliveryReceipt,
                  });
                  return;
                }
                if (
                  E &&
                  (l == null ? void 0 : l.sendsGroupAgentDeliveryReceipt) !== !0
                ) {
                  var N, M, w;
                  return (
                    t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
                      ? ((N = t.author), (M = t.chat))
                      : ((N = t.chat), (w = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                      messageIds: [p],
                      participant: w,
                      recipient: M,
                      to: N,
                    })
                  );
                } else if (
                  a.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return T();
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption({
                  isPeerMsg: L,
                  isStatusContext: k,
                  msgId: p,
                  participant: R,
                  receiptModeBitmask: x,
                  recipient: b,
                  response: i,
                  sendsGroupAgentDeliveryReceipt:
                    (l == null ? void 0 : l.sendsGroupAgentDeliveryReceipt) ===
                    !0,
                  to: C,
                });
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes").E2EProcessResult.HSM_MISMATCH
              ) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: HSM mismatch, no receipt sent for "',
                        '"',
                      ])),
                    p,
                  )
                  .sendLogs("send-receipt-skipping-hsm-mismatch-result");
                return;
              }
              if (
                i.result === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY
              ) {
                var A = i.retryCount == null ? 1 : i.retryCount + 1,
                  F = i.failedEnc;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: A,
                  to: C,
                  participant: R,
                  recipient: b,
                  externalId: p,
                  rawTs: h,
                  isPeer: L,
                  retryReason: i.retryReason,
                  isStateless: (C == null ? void 0 : C.isHosted()) === !0,
                  receiptModeBitmask: x,
                  failedEncType: i.failedEncType,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric({
                    isPq:
                      (F == null ? void 0 : F.sessionType) != null
                        ? F.sessionType === "pq"
                        : void 0,
                    msgInfo: t,
                    retryCount: A,
                    sessionScope:
                      F != null
                        ? o(
                            "WAWebSessionScopeWamUtils",
                          ).getIncomingSkdmSessionScope({
                            from: C,
                            isGroupStatus: a.isGroupStatus,
                            isSkdm: a.isSkdm,
                            metaSessionScope: a.metaSessionScope,
                          })
                        : void 0,
                  }));
                return;
              }
              if (
                i.result === o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL
              )
                return T();
              if (
                i.result ===
                o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_VALIDATION_ERROR
              )
                return D(
                  o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                  i.e2eFailureReason,
                );
              if (
                i.result ===
                o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_ERROR
              ) {
                var O;
                return D(
                  (O = i.nackReason) != null
                    ? O
                    : o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                );
              }
              if (
                i.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED
              ) {
                return (
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          'sendReceipt: unexpected DEFERRED result for "',
                          '"',
                        ])),
                      p,
                    )
                    .sendLogs("send-receipt-unexpected-deferred", {
                      sampling: 0.01,
                    }),
                  D(o("WAWebCreateNackFromStanza").NackReason.UnhandledError)
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  i.result,
              );
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom)
      );
    }
    function f(e) {
      return (
        e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
          e.author,
          e.metaFrom,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
      );
    }
    function g(e) {
      var t = 0;
      return (
        e.isOrphanAddon === !0 &&
          o("WAWebABProps").getABPropConfigValue(
            "web_send_orphan_in_receipts_enabled",
          ) &&
          (t |=
            1 << o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition.ORPHAN),
        e.result === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY &&
          e.placeholderCreated === !1 &&
          o("WAWebABProps").getABPropConfigValue(
            "web_send_hid_failed_decrypt_in_receipts_enabled",
          ) &&
          (t |=
            1 <<
            o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition
              .HID_FAILED_DECRYPT),
        t
      );
    }
    ((l.sendReceipt = m),
      (l.isCoexV2SenderReceiptMessage = _),
      (l.isCoexV2PeerDeliveryReceiptMessage = f));
  },
  98,
);
