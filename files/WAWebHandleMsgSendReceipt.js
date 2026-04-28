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
    "WAWebStatusGatingUtils",
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
            h = !t.chat.isBot() && t.author.isBot(),
            y = m.isStatus() || n.isGroupStatus === !0,
            C =
              y && o("WAWebStatusGatingUtils").isStatusStanzaReceiveEnabled()
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
              o("WAWebHandleMsgSendAck").sendAck(i, m, d, f, C)
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
                var b, v, S;
                return (
                  t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                    ? ((b = t.author), (v = t.chat))
                    : ((b = t.chat), (S = t.author)),
                  o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks(
                    [i],
                    b,
                    v,
                    S,
                  )
                );
              } else if (
                n.type ===
                o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
              )
                return o("WAWebHandleMsgSendAck").sendAck(i, m, d, f, C);
              return o(
                "WAWebSendDeliveryReceiptJob",
              ).sendDeliveryReceiptsAfterDecryption(i, m, p, f, g, r, y);
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
                  o("WAWebHandleMsgSendAck").sendAck(i, m, d, f, C)
                );
              var R = r.retryCount == null ? 1 : r.retryCount + 1;
              (yield o("WAWebSendRetryReceiptJob").sendRetryReceipt({
                retryCount: R,
                to: m,
                participant: f,
                recipient: p,
                externalId: i,
                rawTs: l,
                isPeer: g,
                retryReason: r.retryReason,
                isStateless: (m == null ? void 0 : m.isHosted()) === !0,
              }),
                o(
                  "WAWebPostMessageHighRetryCountMetric",
                ).maybePostMessageHighRetryCountMetric(R, t));
              return;
            }
            if (
              r.result ===
              o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
            )
              return o("WAWebHandleMsgSendAck").sendAck(i, m, d, f, C);
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
                C,
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
                void 0,
                C,
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
