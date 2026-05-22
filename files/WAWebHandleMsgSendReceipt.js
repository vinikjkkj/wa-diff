__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBizCoexGatingUtils",
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
    var e, s, u, c;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
            );
            var l = t.externalId,
              d = n.rawTs,
              m = n.type,
              _ = o("WAWebMsgProcessingApiUtils").getFrom(t),
              f = null;
            if (
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.author)
            )
              if (t.originalBotRecipient != null) f = t.originalBotRecipient;
              else {
                var g;
                f = (g = t.preMatChat) != null ? g : t.chat;
              }
            var h =
                t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                  ? null
                  : (i = t.preMatChat) != null
                    ? i
                    : t.author,
              y = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
              C = !t.chat.isBot() && t.author.isBot(),
              b = _.isStatus() || n.isGroupStatus === !0,
              v =
                b && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
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
                  from: _,
                  participant: h,
                  stanzaClass: v,
                  type: m,
                })
              );
            var S = p(r);
            e: {
              if (
                r.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS ||
                r.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR
              ) {
                if (C) {
                  var R, L, E;
                  return (
                    t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                      ? ((R = t.author), (L = t.chat))
                      : ((R = t.chat), (E = t.author)),
                    o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks(
                      [l],
                      R,
                      L,
                      E,
                    )
                  );
                } else if (
                  n.type ===
                  o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
                )
                  return o("WAWebHandleMsgSendAck").sendAck({
                    externalId: l,
                    from: _,
                    participant: h,
                    stanzaClass: v,
                    type: m,
                  });
                return o(
                  "WAWebSendDeliveryReceiptJob",
                ).sendDeliveryReceiptsAfterDecryption(l, _, f, h, y, r, b, S);
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
                if (
                  _ != null &&
                  _.isHosted() &&
                  !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
                )
                  return (
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Drop retry for coex when feature is disabled",
                        ])),
                    ),
                    o("WAWebHandleMsgSendAck").sendAck({
                      externalId: l,
                      from: _,
                      participant: h,
                      stanzaClass: v,
                      type: m,
                    })
                  );
                var k = r.retryCount == null ? 1 : r.retryCount + 1;
                (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                  retryCount: k,
                  to: _,
                  participant: h,
                  recipient: f,
                  externalId: l,
                  rawTs: d,
                  isPeer: y,
                  retryReason: r.retryReason,
                  isStateless: (_ == null ? void 0 : _.isHosted()) === !0,
                  receiptModeBitmask: S,
                }),
                  o(
                    "WAWebPostMessageHighRetryCountMetric",
                  ).maybePostMessageHighRetryCountMetric(k, t));
                return;
              }
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: l,
                  from: _,
                  participant: h,
                  stanzaClass: v,
                  type: m,
                });
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_VALIDATION_ERROR
              )
                return (a == null ? void 0 : a.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: l,
                      from: _,
                      participant: h,
                      stanzaClass: v,
                      type: m,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      l,
                      _,
                      m,
                      h,
                      o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                      r.e2eFailureReason,
                      v,
                    );
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return o("WAWebHandleMsgSendAck").sendAck({
                  externalId: l,
                  from: _,
                  participant: h,
                  stanzaClass: v,
                  type: m,
                });
              if (
                r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
              )
                return (a == null ? void 0 : a.canNack) === !1
                  ? o("WAWebHandleMsgSendAck").sendAck({
                      externalId: l,
                      from: _,
                      participant: h,
                      stanzaClass: v,
                      type: m,
                    })
                  : o("WAWebHandleMsgSendAck").sendNack(
                      l,
                      _,
                      m,
                      h,
                      o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                      void 0,
                      v,
                    );
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  r.result,
              );
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue("receipt_mode_bitmask_enabled")
      )
        return 0;
      var t = 0;
      return (
        e.isOrphanAddon === !0 &&
          (t |=
            1 << o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition.ORPHAN),
        e.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY &&
          e.placeholderCreated === !1 &&
          (t |=
            1 <<
            o("WAWebSendReceiptJobCommon").ReceiptModeBitPosition
              .HID_FAILED_DECRYPT),
        t
      );
    }
    l.sendReceipt = d;
  },
  98,
);
