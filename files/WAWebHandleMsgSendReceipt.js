__d(
  "WAWebHandleMsgSendReceipt",
  [
    "WALogger",
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
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a;
          o("WALogger").LOG(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
          );
          var i = t.externalId,
            l = n.rawTs,
            d = n.type,
            m = o("WAWebMsgProcessingApiUtils").getFrom(t),
            p = null;
          if (
            t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT &&
            o("WAWebUserPrefsMeUser").isMeAccount(t.author)
          )
            if (t.originalBotRecipient != null) p = t.originalBotRecipient;
            else {
              var _;
              p = (_ = t.preMatChat) != null ? _ : t.chat;
            }
          var f =
              t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                ? null
                : (a = t.preMatChat) != null
                  ? a
                  : t.author,
            g = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
            h = !t.chat.isBot() && t.author.isBot();
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
              o("WAWebHandleMsgSendAck").sendAck(i, m, d, f)
            );
          e: {
            if (
              r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS ||
              r.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .SIGNAL_OLD_COUNTER_ERROR
            ) {
              if (h) {
                var y, C, b;
                return (
                  t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                    ? ((y = t.author), (C = t.chat))
                    : ((y = t.chat), (b = t.author)),
                  o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks(
                    [i],
                    y,
                    C,
                    b,
                  )
                );
              } else if (
                n.type ===
                o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
              )
                return o("WAWebHandleMsgSendAck").sendAck(i, m, d, f);
              return o(
                "WAWebSendDeliveryReceiptJob",
              ).sendDeliveryReceiptsAfterDecryption(i, m, p, f, g, r);
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
                  i,
                )
                .sendLogs("send-receipt-skipping-hsm-mismatch-result");
              return;
            }
            if (
              r.result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY
            ) {
              if (
                m != null &&
                m.isHosted() &&
                !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
              )
                return (
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Drop retry for coex when feature is disabled",
                      ])),
                  ),
                  o("WAWebHandleMsgSendAck").sendAck(i, m, d, f)
                );
              var v = r.retryCount == null ? 1 : r.retryCount + 1;
              (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                retryCount: v,
                to: m,
                participant: f,
                recipient: p,
                externalId: i,
                rawTs: l,
                isPeer: g,
                retryReason: r.retryReason,
              }),
                o(
                  "WAWebPostMessageHighRetryCountMetric",
                ).maybePostMessageHighRetryCountMetric(v, t));
              return;
            }
            if (
              r.result ===
              o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
            )
              return o("WAWebHandleMsgSendAck").sendAck(i, m, d, f);
            if (
              r.result ===
              o("WAWebHandleMsgTypes.flow").E2EProcessResult
                .PARSE_VALIDATION_ERROR
            )
              return o("WAWebHandleMsgSendAck").sendNack(
                i,
                m,
                d,
                f,
                o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
                r.e2eFailureReason,
              );
            if (
              r.result ===
              o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR
            )
              return o("WAWebHandleMsgSendAck").sendNack(
                i,
                m,
                d,
                f,
                o("WAWebCreateNackFromStanza").NackReason.ParsingError,
              );
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r.result,
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.sendReceipt = d;
  },
  98,
);
