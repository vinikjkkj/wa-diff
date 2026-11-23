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
    "WAWebUserUtils",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t, n, a, i) {
      var l;
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendReceipt"])),
      );
      var m = t.externalId,
        g = n.rawTs,
        h = n.type,
        y = o("WAWebMsgProcessingApiUtils").getFrom(t),
        C = null;
      if (
        t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebUserUtils").isMeAccount(t.author)
      )
        if (t.originalBotRecipient != null) C = t.originalBotRecipient;
        else {
          var b;
          C = (b = t.preMatChat) != null ? b : t.chat;
        }
      else if (
        t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(t.author, t.metaFrom)
      ) {
        var v;
        C = (v = t.preMatChat) != null ? v : t.chat;
      }
      var S =
          t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
            ? null
            : (l = t.preMatChat) != null
              ? l
              : t.author,
        R = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
        L = !t.chat.isBot() && t.author.isBot(),
        E =
          o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(y, n) !=
          null,
        k = n.isStatusStanza === !0 ? "status" : void 0,
        I = function () {
          o("WAWebHandleMsgSendAck").sendAck({
            externalId: m,
            from: y,
            participant: S,
            stanzaClass: k,
            type: h,
          });
        },
        T = function (t, n) {
          if ((i == null ? void 0 : i.canNack) === !1) {
            I();
            return;
          }
          o("WAWebHandleMsgSendAck").sendNack(m, y, h, S, t, n, k);
        };
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
          I()
        );
      var D = f(a);
      async function x(e) {
        var t = e.errorReason,
          a = e.label,
          i = e.send;
        try {
          await i(
            m,
            r("nullthrows")(
              o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(
                r("nullthrows")(n.targetChatJid),
              ),
            ),
          );
        } catch (e) {
          (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] ",
                  " receipt failed, falling back to ack",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(t),
            I());
        }
      }
      e: {
        if (
          a.result === o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS ||
          a.result ===
            o("WAWebHandleMsgTypes").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR
        ) {
          if (p(t)) {
            await x({
              errorReason: "coexv2-sender-receipt-error",
              label: "sender",
              send: o("WAWebCoexV2SendReceipt").sendCoexV2SenderReceipt,
            });
            return;
          }
          if (_(t)) {
            await x({
              errorReason: "coexv2-delivery-receipt-error",
              label: "delivery",
              send: o("WAWebCoexV2SendReceipt").sendCoexV2DeliveryReceipt,
            });
            return;
          }
          if (
            L &&
            (i == null ? void 0 : i.sendsGroupAgentDeliveryReceipt) !== !0
          ) {
            var $, P, N;
            return (
              t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
                ? (($ = t.author), (P = t.chat))
                : (($ = t.chat), (N = t.author)),
              o("WAWebSendReceiptJobCommon").sendBotInvokeResponseAcks({
                messageIds: [m],
                participant: N,
                recipient: P,
                to: $,
              })
            );
          } else if (
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify
          )
            return I();
          return o(
            "WAWebSendDeliveryReceiptJob",
          ).sendDeliveryReceiptsAfterDecryption({
            isPeerMsg: R,
            isStatusContext: E,
            msgId: m,
            participant: S,
            receiptModeBitmask: D,
            recipient: C,
            response: a,
            sendsGroupAgentDeliveryReceipt:
              (i == null ? void 0 : i.sendsGroupAgentDeliveryReceipt) === !0,
            to: y,
          });
        }
        if (
          a.result === o("WAWebHandleMsgTypes").E2EProcessResult.HSM_MISMATCH
        ) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  'sendReceipt: HSM mismatch, no receipt sent for "',
                  '"',
                ])),
              m,
            )
            .sendLogs("send-receipt-skipping-hsm-mismatch-result");
          return;
        }
        if (a.result === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY) {
          var M = a.retryCount == null ? 1 : a.retryCount + 1,
            w = a.failedEnc;
          (await o("WAWebSendRetryReceiptJob").sendRetryReceipt({
            retryCount: M,
            to: y,
            participant: S,
            recipient: C,
            externalId: m,
            rawTs: g,
            isPeer: R,
            retryReason: a.retryReason,
            isStateless: (y == null ? void 0 : y.isHosted()) === !0,
            receiptModeBitmask: D,
            failedEncType: a.failedEncType,
          }),
            o(
              "WAWebPostMessageHighRetryCountMetric",
            ).maybePostMessageHighRetryCountMetric({
              isPq:
                (w == null ? void 0 : w.sessionType) != null
                  ? w.sessionType === "pq"
                  : void 0,
              msgInfo: t,
              retryCount: M,
              sessionScope:
                w != null
                  ? o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
                      from: y,
                      isGroupStatus: n.isGroupStatus,
                      isSkdm: n.isSkdm,
                      metaSessionScope: n.metaSessionScope,
                    })
                  : void 0,
            }));
          return;
        }
        if (a.result === o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL)
          return I();
        if (
          a.result ===
          o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_VALIDATION_ERROR
        )
          return T(
            o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf,
            a.e2eFailureReason,
          );
        if (
          a.result === o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_ERROR
        ) {
          var A;
          return T(
            (A = a.nackReason) != null
              ? A
              : o("WAWebCreateNackFromStanza").NackReason.ParsingError,
          );
        }
        if (a.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED) {
          return (
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    'sendReceipt: unexpected DEFERRED result for "',
                    '"',
                  ])),
                m,
              )
              .sendLogs("send-receipt-unexpected-deferred", { sampling: 0.01 }),
            T(o("WAWebCreateNackFromStanza").NackReason.UnhandledError)
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a.result,
        );
      }
    }
    function p(e) {
      return (
        e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebUserUtils").isMeAccount(e.metaFrom) &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom)
      );
    }
    function _(e) {
      return (
        e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
          e.author,
          e.metaFrom,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserUtils").isMeAccount(e.metaFrom)
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
      (l.isCoexV2SenderReceiptMessage = p),
      (l.isCoexV2PeerDeliveryReceiptMessage = _));
  },
  98,
);
