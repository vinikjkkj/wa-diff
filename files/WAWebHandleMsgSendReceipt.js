__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCreateNackFromStanza",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgSendAck",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgProcessingApiUtils",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebSendDeliveryReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSendRetryReceiptJob",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
            );
            var l = t.externalId,
              c = n.rawTs,
              d = n.type,
              p = o("WAWebMsgProcessingApiUtils").getFrom(t),
              _ = null;
            if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) _ = t.originalBotRecipient;
              else {
                var f;
                _ = (f = t.preMatChat) != null ? f : t.chat;
              }
            var g =
                t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                  ? null
                  : (i = t.preMatChat) != null
                    ? i
                    : t.author,
              h = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              y = !t.chat.isBot() && t.author.isBot(),
              C = p.isStatus() || n.isGroupStatus === !0,
              b =
                C && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
                  ? "status"
                  : void 0;
            if (r.result == null)
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: invalid e2eProcessResult "',
                        '"',
                      ])),
                    r.result,
                  )
                  .sendLogs("send-receipt-missing-e2e-process-result"),
                o("WAWebHandleMsgSendAck").sendAck({
                  externalId: l,
                  from: p,
                  participant: g,
                  stanzaClass: b,
                  type: d,
                })
              );
            var v = m(r);
            e: {
              if (
                r.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS ||
                r.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR
              ) {
                if (y) {
                  var S, R, L;
                  return (
                    t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                      ? ((S = t.author), (R = t.chat))
                      : ((S = t.chat), (L = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks(
                      [l],
                      S,
                      R,
                      L,
                    )
                  );
                } else if (
                  n.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: l,
                    from: p,
                    participant: g,
                    stanzaClass: b,
                    type: d,
                  });
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption(l, p, _, g, h, r, C, v);
              }
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH
              ) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        'sendReceipt: HSM mismatch, no receipt sent for "',
                        '"',
                      ])),
                    l,
                  )
                  .sendLogs("send-receipt-skipping-hsm-mismatch-result");
                return;
              }
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
              ) {
                var E = r.retryCount == null ? 1 : r.retryCount + 1;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: E,
                  to: p,
                  participant: g,
                  recipient: _,
                  externalId: l,
                  rawTs: c,
                  isPeer: h,
                  retryReason: r.retryReason,
                  isStateless: (p == null ? void 0 : p.isHosted()) === !0,
                  receiptModeBitmask: v,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric(E, t));
                return;
              }
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: l,
                  from: p,
                  participant: g,
                  stanzaClass: b,
                  type: d,
                });
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_VALIDATION_ERROR
              )
                return (a == null ? void 0 : a.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: l,
                      from: p,
                      participant: g,
                      stanzaClass: b,
                      type: d,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      l,
                      p,
                      d,
                      g,
                      o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                      r.e2eFailureReason,
                      b,
                    );
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: l,
                  from: p,
                  participant: g,
                  stanzaClass: b,
                  type: d,
                });
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
              )
                return (a == null ? void 0 : a.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: l,
                      from: p,
                      participant: g,
                      stanzaClass: b,
                      type: d,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      l,
                      p,
                      d,
                      g,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                      void 0,
                      b,
                    );
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  r.result,
              );
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    l.sendReceipt = c;
  },
  98,
);
