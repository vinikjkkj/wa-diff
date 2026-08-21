__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendJobs.flow",
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
          function* (t, n, a, i) {
            var l;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
            );
            var d = t.externalId,
              m = n.rawTs,
              f = n.type,
              g = o("WAWebMsgProcessingApiUtils").getFrom(t),
              h = null;
            if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) h = t.originalBotRecipient;
              else {
                var y;
                h = (y = t.preMatChat) != null ? y : t.chat;
              }
            else if (p(t)) {
              var C;
              h = (C = t.preMatChat) != null ? C : t.chat;
            }
            var b =
                t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                  ? null
                  : (l = t.preMatChat) != null
                    ? l
                    : t.author,
              v = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              S = !t.chat.isBot() && t.author.isBot(),
              R = g.isStatus() || n.isGroupStatus === !0,
              L =
                R && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
                  ? "status"
                  : void 0;
            if (a.result == null)
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: invalid e2eProcessResult "',
                        '"',
                      ])),
                    a.result,
                  )
                  .sendLogs("send-receipt-missing-e2e-process-result"),
                o("WAWebHandleMsgSendAck").sendAck({
                  externalId: d,
                  from: g,
                  participant: b,
                  stanzaClass: L,
                  type: f,
                })
              );
            var E = _(a);
            e: {
              if (
                a.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS ||
                a.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR
              ) {
                if (p(t)) {
                  try {
                    yield o(
                      "WAWebSendReceiptJobCommon",
                    ).sendCoexV2SenderReceipt(
                      d,
                      r("nullthrows")(
                        o(
                          "WAWebCoexV2ReceiptRecipient",
                        ).toCoexV2ReceiptRecipient(
                          r("nullthrows")(n.targetChatJid),
                        ),
                      ),
                    );
                  } catch (e) {
                    (o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[coexv2] sender receipt failed, falling back to ack",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("coexv2-sender-receipt-error"),
                      o("WAWebHandleMsgSendAck").sendAck({
                        externalId: d,
                        from: g,
                        participant: b,
                        stanzaClass: L,
                        type: f,
                      }));
                  }
                  return;
                }
                if (S) {
                  var k, I, T;
                  return (
                    t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                      ? ((k = t.author), (I = t.chat))
                      : ((k = t.chat), (T = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                      messageIds: [d],
                      participant: T,
                      recipient: I,
                      to: k,
                    })
                  );
                } else if (
                  n.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: d,
                    from: g,
                    participant: b,
                    stanzaClass: L,
                    type: f,
                  });
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption({
                  isPeerMsg: v,
                  isStatusContext: R,
                  msgId: d,
                  participant: b,
                  receiptModeBitmask: E,
                  recipient: h,
                  response: a,
                  to: g,
                });
              }
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH
              ) {
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: HSM mismatch, no receipt sent for "',
                        '"',
                      ])),
                    d,
                  )
                  .sendLogs("send-receipt-skipping-hsm-mismatch-result");
                return;
              }
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
              ) {
                var D = a.retryCount == null ? 1 : a.retryCount + 1;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: D,
                  to: g,
                  participant: b,
                  recipient: h,
                  externalId: d,
                  rawTs: m,
                  isPeer: v,
                  retryReason: a.retryReason,
                  isStateless: (g == null ? void 0 : g.isHosted()) === !0,
                  receiptModeBitmask: E,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric(
                    D,
                    t,
                    a.failedEnc != null
                      ? o(
                          "WAWebSessionScopeWamUtils",
                        ).getIncomingStatusSkdmScope({
                          from: g,
                          isGroupStatus: n.isGroupStatus,
                          isSkmsg:
                            a.failedEnc.e2eType ===
                            o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                          metaSessionScope: n.metaSessionScope,
                        })
                      : void 0,
                  ));
                return;
              }
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: d,
                  from: g,
                  participant: b,
                  stanzaClass: L,
                  type: f,
                });
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_VALIDATION_ERROR
              )
                return (i == null ? void 0 : i.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: d,
                      from: g,
                      participant: b,
                      stanzaClass: L,
                      type: f,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      d,
                      g,
                      f,
                      b,
                      o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                      a.e2eFailureReason,
                      L,
                    );
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: d,
                  from: g,
                  participant: b,
                  stanzaClass: L,
                  type: f,
                });
              if (
                a.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
              )
                return (i == null ? void 0 : i.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: d,
                      from: g,
                      participant: b,
                      stanzaClass: L,
                      type: f,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      d,
                      g,
                      f,
                      b,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                      void 0,
                      L,
                    );
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  a.result,
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
    ((l.sendReceipt = d), (l.isCoexV2SenderReceiptMessage = p));
  },
  98,
);
