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
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) b = t.originalBotRecipient;
              else {
                var v;
                b = (v = t.preMatChat) != null ? v : t.chat;
              }
            else if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
                t.author,
                t.metaFrom,
              )
            ) {
              var S;
              b = (S = t.preMatChat) != null ? S : t.chat;
            }
            var R =
                t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                  ? null
                  : (m = t.preMatChat) != null
                    ? m
                    : t.author,
              L = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              E = !t.chat.isBot() && t.author.isBot(),
              k = C.isStatus() || a.isGroupStatus === !0,
              I =
                k && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
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
                  externalId: p,
                  from: C,
                  participant: R,
                  stanzaClass: I,
                  type: y,
                })
              );
            var T = g(i);
            function D(e, t, n) {
              return x.apply(this, arguments);
            }
            function x() {
              return (
                (x = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t, n) {
                    try {
                      yield e(
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
                          t,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(n),
                        o("WAWebHandleMsgSendAck").sendAck({
                          externalId: p,
                          from: C,
                          participant: R,
                          stanzaClass: I,
                          type: y,
                        }));
                    }
                  },
                )),
                x.apply(this, arguments)
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
                if (_(t)) {
                  yield D(
                    o("WAWebSendReceiptJobCommon").sendCoexV2SenderReceipt,
                    "sender",
                    "coexv2-sender-receipt-error",
                  );
                  return;
                }
                if (f(t)) {
                  yield D(
                    o("WAWebSendReceiptJobCommon").sendCoexV2DeliveryReceipt,
                    "delivery",
                    "coexv2-delivery-receipt-error",
                  );
                  return;
                }
                if (E) {
                  var $, P, N;
                  return (
                    t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                      ? (($ = t.author), (P = t.chat))
                      : (($ = t.chat), (N = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                      messageIds: [p],
                      participant: N,
                      recipient: P,
                      to: $,
                    })
                  );
                } else if (
                  a.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: p,
                    from: C,
                    participant: R,
                    stanzaClass: I,
                    type: y,
                  });
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption({
                  isPeerMsg: L,
                  isStatusContext: k,
                  msgId: p,
                  participant: R,
                  receiptModeBitmask: T,
                  recipient: b,
                  response: i,
                  to: C,
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
                    p,
                  )
                  .sendLogs("send-receipt-skipping-hsm-mismatch-result");
                return;
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
              ) {
                var M = i.retryCount == null ? 1 : i.retryCount + 1,
                  w = i.failedEnc;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: M,
                  to: C,
                  participant: R,
                  recipient: b,
                  externalId: p,
                  rawTs: h,
                  isPeer: L,
                  retryReason: i.retryReason,
                  isStateless: (C == null ? void 0 : C.isHosted()) === !0,
                  receiptModeBitmask: T,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric(
                    M,
                    t,
                    w != null
                      ? o(
                          "WAWebSessionScopeWamUtils",
                        ).getIncomingSkdmSessionScope({
                          from: C,
                          isGroupStatus: a.isGroupStatus,
                          isSkdm: a.isSkdm,
                          metaSessionScope: a.metaSessionScope,
                        })
                      : void 0,
                    (w == null ? void 0 : w.sessionType) != null
                      ? w.sessionType === "pq"
                      : void 0,
                  ));
                return;
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: p,
                  from: C,
                  participant: R,
                  stanzaClass: I,
                  type: y,
                });
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_VALIDATION_ERROR
              )
                return (l == null ? void 0 : l.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: p,
                      from: C,
                      participant: R,
                      stanzaClass: I,
                      type: y,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      p,
                      C,
                      y,
                      R,
                      o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                      i.e2eFailureReason,
                      I,
                    );
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
              ) {
                var A;
                return (l == null ? void 0 : l.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: p,
                      from: C,
                      participant: R,
                      stanzaClass: I,
                      type: y,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      p,
                      C,
                      y,
                      R,
                      (A = i.nackReason) != null
                        ? A
                        : o("WAWebCreateNackFromStanza").NackReason
                            .ParsingError,
                      void 0,
                      I,
                    );
              }
              if (
                i.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
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
                  (l == null ? void 0 : l.canNack) === !1
                    ? o("WAWebHandleMsgSendAck").sendAck({
                        externalId: p,
                        from: C,
                        participant: R,
                        stanzaClass: I,
                        type: y,
                      })
                    : o("WAWebHandleMsgSendAck").sendNack(
                        p,
                        C,
                        y,
                        R,
                        o("WAWebCreateNackFromStanza").NackReason
                          .UnhandledError,
                        void 0,
                        I,
                      )
                );
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
        e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
        o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom)
      );
    }
    function f(e) {
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
    function g(e) {
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
    ((l.sendReceipt = m),
      (l.isCoexV2SenderReceiptMessage = _),
      (l.isCoexV2PeerDeliveryReceiptMessage = f));
  },
  98,
);
