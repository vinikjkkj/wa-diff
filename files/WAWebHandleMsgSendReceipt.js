__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgSendAck",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgProcessingApiUtils",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebSendDeliveryReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSendRetryReceiptJob",
    "WAWebSessionScopeWamUtils",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var d;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
            );
            var m = t.externalId,
              g = a.rawTs,
              h = a.type,
              y = o("WAWebMsgProcessingApiUtils").getFrom(t),
              C = null;
            if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) C = t.originalBotRecipient;
              else {
                var b;
                C = (b = t.preMatChat) != null ? b : t.chat;
              }
            else if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                t.author,
                t.metaFrom,
              )
            ) {
              var v;
              C = (v = t.preMatChat) != null ? v : t.chat;
            }
            var S =
                t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                  ? null
                  : (d = t.preMatChat) != null
                    ? d
                    : t.author,
              R = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              L = !t.chat.isBot() && t.author.isBot(),
              E = y.isStatus() || a.isGroupStatus === !0,
              k =
                E && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
                  ? "status"
                  : void 0;
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
                o("WAWebHandleMsgSendAck").sendAck({
                  externalId: m,
                  from: y,
                  participant: S,
                  stanzaClass: k,
                  type: h,
                })
              );
            var I = f(i);
            function T(e, t, n) {
              return D.apply(this, arguments);
            }
            function D() {
              return (
                (D = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t, n) {
                    try {
                      yield e(
                        m,
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
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[coexv2] ",
                              " receipt failed, falling back to ack",
                            ])),
                          t,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(n),
                        o("WAWebHandleMsgSendAck").sendAck({
                          externalId: m,
                          from: y,
                          participant: S,
                          stanzaClass: k,
                          type: h,
                        }));
                    }
                  },
                )),
                D.apply(this, arguments)
              );
            }
            e: {
              if (
                i.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS ||
                i.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR
              ) {
                if (p(t)) {
                  yield T(
                    o("WAWebSendReceiptJobCommon").sendCoexV2SenderReceipt,
                    "sender",
                    "coexv2-sender-receipt-error",
                  );
                  return;
                }
                if (_(t)) {
                  yield T(
                    o("WAWebSendReceiptJobCommon").sendCoexV2DeliveryReceipt,
                    "delivery",
                    "coexv2-delivery-receipt-error",
                  );
                  return;
                }
                if (L) {
                  var x, $, P;
                  return (
                    t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                      ? ((x = t.author), ($ = t.chat))
                      : ((x = t.chat), (P = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                      messageIds: [m],
                      participant: P,
                      recipient: $,
                      to: x,
                    })
                  );
                } else if (
                  a.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: m,
                    from: y,
                    participant: S,
                    stanzaClass: k,
                    type: h,
                  });
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption({
                  isPeerMsg: R,
                  isStatusContext: E,
                  msgId: m,
                  participant: S,
                  receiptModeBitmask: I,
                  recipient: C,
                  response: i,
                  to: y,
                });
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH
              ) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: HSM mismatch, no receipt sent for "',
                        '"',
                      ])),
                    m,
                  )
                  .sendLogs("send-receipt-skipping-hsm-mismatch-result");
                return;
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
              ) {
                var N = i.retryCount == null ? 1 : i.retryCount + 1;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: N,
                  to: y,
                  participant: S,
                  recipient: C,
                  externalId: m,
                  rawTs: g,
                  isPeer: R,
                  retryReason: i.retryReason,
                  isStateless: (y == null ? void 0 : y.isHosted()) === !0,
                  receiptModeBitmask: I,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric(
                    N,
                    t,
                    i.failedEnc != null
                      ? o(
                          "WAWebSessionScopeWamUtils",
                        ).getIncomingSkdmSessionScope({
                          from: y,
                          isGroupStatus: a.isGroupStatus,
                          isSkdm: a.isSkdm,
                          metaSessionScope: a.metaSessionScope,
                        })
                      : void 0,
                  ));
                return;
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: m,
                  from: y,
                  participant: S,
                  stanzaClass: k,
                  type: h,
                });
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_VALIDATION_ERROR
              )
                return (l == null ? void 0 : l.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: m,
                      from: y,
                      participant: S,
                      stanzaClass: k,
                      type: h,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      m,
                      y,
                      h,
                      S,
                      o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                      i.e2eFailureReason,
                      k,
                    );
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: m,
                  from: y,
                  participant: S,
                  stanzaClass: k,
                  type: h,
                });
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
              )
                return (l == null ? void 0 : l.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: m,
                      from: y,
                      participant: S,
                      stanzaClass: k,
                      type: h,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      m,
                      y,
                      h,
                      S,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                      void 0,
                      k,
                    );
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  i.result,
              );
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return (
        e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
        o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom)
      );
    }
    function _(e) {
      return (
        e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
          e.author,
          e.metaFrom,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
      );
    }
    function f(e) {
      var t = 0;
      return (
        e.isOrphanAddon === !0 &&
          o("WAWebABProps").getABPropConfigValue(
            "web_send_orphan_in_receipts_enabled",
          ) &&
          (t |=
            1 << o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition.ORPHAN),
        e.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY &&
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
    ((l.sendReceipt = d),
      (l.isCoexV2SenderReceiptMessage = p),
      (l.isCoexV2PeerDeliveryReceiptMessage = _));
  },
  98,
);
