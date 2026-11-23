__d(
  "WAWebPaymentDetailsActions",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBrazilPaymentState",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebCmd.flow",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaOpaqueData",
    "WAWebMsgCollection",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPaymentDetailsLogger",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPrepRawMedia",
    "WAWebRevokeMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSilentPaymentMsg",
    "WAWebViewMode.flow",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    async function E(t) {
      if (!T(t)) return !1;
      var n = o("WATimeUtils").unixTimeMs(),
        r = o("WAWebBrazilPaymentState").getPaymentDetailsFlow(
          t.interactivePayload,
        ),
        a = await O(t, function (e) {
          return o("WAWebBrazilPaymentState").applyStatusUpdate(
            e,
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID,
            o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
            n,
            r,
          );
        });
      if (a.status === "unchanged" && !w(a.current))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] a newer status is stored, keeping it",
                ])),
            )
            .sendLogs("br-payment-state-mark-as-paid-stale"),
          !1
        );
      if (a.status !== "applied") return a.status === "unchanged";
      var i = await W(
        o("WAWebFrontendMsgGetters").getChat(t),
        Promise.resolve(
          o("WAWebBrazilPaymentStateUpdatePayload").buildMarkAsPaidUpdateParams(
            t.id.id,
            n,
          ),
        ),
      );
      return (
        i
          ? o("WAWebPaymentDetailsLogger").logLocalPaymentStateChange({
              change: o("WAWebPaymentDetailsLogger").PaymentStateChange.STATUS,
              paymentMsg: t,
              paymentStatus: o("WAWebPaymentDetailsModels").PaymentDetailsStatus
                .MARKED_AS_PAID,
            })
          : await B(t, A(a.previous, n)),
        i
      );
    }
    async function k(e) {
      if (!D(e)) return !1;
      var t = o("WATimeUtils").unixTimeMs(),
        n = await O(e, function (e) {
          return o("WAWebBrazilPaymentState").applyReceiptRemoval(e, t);
        });
      if (n.status === "unchanged" && n.current.receiptMsgId != null)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] a newer receipt is stored, keeping it",
                ])),
            )
            .sendLogs("br-payment-state-receipt-removal-stale"),
          !1
        );
      if (n.status !== "applied") return n.status === "unchanged";
      var r = await W(
        o("WAWebFrontendMsgGetters").getChat(e),
        Promise.resolve(
          o("WAWebBrazilPaymentStateUpdatePayload").buildReceiptRemovalParams(
            e.id.id,
            t,
          ),
        ),
      );
      return (
        r
          ? o("WAWebPaymentDetailsLogger").logLocalPaymentStateChange({
              change: o("WAWebPaymentDetailsLogger").PaymentStateChange
                .RECEIPT_REMOVED,
              paymentMsg: e,
              paymentStatus: o(
                "WAWebBrazilPaymentState",
              ).getPaymentDetailsStatus(
                n.previous,
                o("WAWebBrazilPaymentState").getPaymentDetailsFlow(
                  e.interactivePayload,
                ),
              ),
            })
          : await B(e, F(n.previous, t)),
        r
      );
    }
    async function I(e, t) {
      if (!D(e)) return !1;
      if (!t.type.startsWith("image/"))
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] rejecting a receipt that is not an image: ",
                  "",
                ])),
              t.type,
            )
            .sendLogs("br-payment-state-receipt-not-image"),
          !1
        );
      var n = await x(t);
      if (n == null) return !1;
      var a = o("WAWebFrontendMsgGetters").getChat(e),
        i = o("WATimeUtils").unixTimeMs(),
        l = r("WAWebNoop"),
        s = r("WAWebNoop"),
        d = new Promise(function (e, t) {
          ((l = e), (s = t));
        }),
        m = W(
          a,
          d.then(function (t) {
            return o(
              "WAWebBrazilPaymentStateUpdatePayload",
            ).buildReceiptUpdateParams(e.id.id, t.id, i);
          }),
        ),
        p = $(n, a, l);
      p.then(function () {
        return s(r("err")("receipt image was not created"));
      });
      var _ = await d.catch(function (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] the receipt image was not created",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-receipt-image-missing"),
          null
        );
      });
      if (_ == null) return !1;
      var f = await O(e, function (e) {
          return o("WAWebBrazilPaymentState").applyReceiptUpdate(e, _.id, i);
        }),
        g = await Promise.all([m, p]),
        h = g[0],
        y = g[1];
      return h && y && f.status === "applied"
        ? !0
        : (await P(e, {
            isImageSent: y,
            isUpdateSent: h,
            receiptKey: _,
            receiptWrite: f,
            timestampMs: i,
          }),
          !1);
    }
    function T(e) {
      return o("WAWebPaymentDetailsModels").getPaymentDetailsPov(
        e.id.fromMe,
      ) === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
        ? !0
        : (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] only the requester can mark a payment as paid",
                ])),
            )
            .sendLogs("br-payment-state-mark-as-paid-not-requester"),
          !1);
    }
    function D(e) {
      return o("WAWebPaymentDetailsModels").getPaymentDetailsPov(
        e.id.fromMe,
      ) === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER
        ? !0
        : (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] only the payer can change the receipt",
                ])),
            )
            .sendLogs("br-payment-state-receipt-not-payer"),
          !1);
    }
    async function x(e) {
      try {
        var t = o("WAWebPrepRawMedia").prepRawMedia(
          await r("WAWebMediaOpaqueData").createFromData(e, e.type),
          {},
        );
        return (await t.waitForPrep(), t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not prepare the receipt image",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-receipt-prep-failed"),
          null
        );
      }
    }
    async function $(e, t, n) {
      try {
        var a = await e.sendToChat({
          chat: t,
          options: {
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            onMsgKeyCreated: function (t) {
              (o("WAWebSilentPaymentMsg").markSilentPaymentReceipt(t), n(t));
            },
          },
        });
        if (
          a.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          return !0;
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] receipt image send failed: ",
                "",
              ])),
            a.messageSendResult,
          )
          .sendLogs("br-payment-state-receipt-image-send-failed");
      } catch (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] receipt image send threw",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-receipt-image-send-threw");
      }
      return !1;
    }
    async function P(e, t) {
      var n = t.isImageSent,
        r = t.isUpdateSent,
        a = t.receiptKey,
        i = t.receiptWrite,
        l = t.timestampMs,
        s = i.status === "applied" ? await B(e, F(i.previous, l)) : i,
        u = i.status === "failed" || s.status === "applied";
      if (r && u) {
        var c = i.status === "applied" ? i.previous.receiptMsgId : null;
        await W(
          o("WAWebFrontendMsgGetters").getChat(e),
          Promise.resolve(N(e.id.id, c)),
        );
      }
      n && (await M(a));
    }
    function N(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      return t == null
        ? o("WAWebBrazilPaymentStateUpdatePayload").buildReceiptRemovalParams(
            e,
            n,
          )
        : o("WAWebBrazilPaymentStateUpdatePayload").buildReceiptUpdateParams(
            e,
            t,
            n,
          );
    }
    async function M(e) {
      var t = await U(e);
      if (t == null) {
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] the receipt image to retract does not exist",
              ])),
          )
          .sendLogs("br-payment-state-receipt-retract-missing");
        return;
      }
      try {
        var n = await o("WAWebRevokeMsgAction").sendRevoke(
          { type: "message", data: t },
          o("WAWebCmd.flow").Revoke.Sender,
          !0,
          o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        );
        n.messageSendResult !==
          o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] receipt image retract failed: ",
                  "",
                ])),
              n.messageSendResult,
            )
            .sendLogs("br-payment-state-receipt-retract-failed");
      } catch (e) {
        o("WALogger")
          .WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not retract the receipt image",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-receipt-retract-failed");
      }
    }
    function w(e) {
      var t = e.status;
      return (
        t != null &&
        o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(t)
      );
    }
    function A(e, t) {
      return function (n) {
        return n.statusUpdatedAtMs === t
          ? babelHelpers.extends({}, n, {
              status: e.status,
              actor: e.actor,
              statusUpdatedAtMs: e.statusUpdatedAtMs,
            })
          : n;
      };
    }
    function F(e, t) {
      return function (n) {
        return n.receiptAddedAtMs === t
          ? babelHelpers.extends({}, n, {
              receiptMsgId: e.receiptMsgId,
              receiptAddedAtMs: e.receiptAddedAtMs,
            })
          : n;
      };
    }
    async function O(e, t) {
      var n;
      try {
        n = await o("WAWebBrazilPaymentStateDb").updateStoredBrazilPaymentState(
          e.id,
          t,
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] storing the payment state threw",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-local-write-threw"),
          { status: "failed" }
        );
      }
      if (n == null)
        return (
          o("WALogger")
            .WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not store the payment state",
                ])),
            )
            .sendLogs("br-payment-state-local-write-failed"),
          { status: "failed" }
        );
      var a = n,
        i = a.previous,
        l = a.updatedPayload;
      return l == null
        ? { status: "unchanged", current: i }
        : (e.set({ interactivePayload: l }),
          { status: "applied", previous: i });
    }
    async function B(e, t) {
      var n = await O(e, t);
      return (
        n.status === "failed" &&
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not undo the local payment state after a failed send",
                ])),
            )
            .sendLogs("br-payment-state-rollback-failed"),
        n
      );
    }
    async function W(e, t) {
      try {
        var n = await Promise.all(
            o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, q(e, t)),
          ),
          a = n[1];
        if (
          a.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          return !0;
        o("WALogger")
          .WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] state update send failed: ",
                "",
              ])),
            a.messageSendResult,
          )
          .sendLogs("br-payment-state-update-send-failed");
      } catch (e) {
        o("WALogger")
          .WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] state update send threw",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-update-send-threw");
      }
      return !1;
    }
    async function q(e, t) {
      var n = await t,
        a = await o("WAWebMsgDataUtils").genOutgoingMsgData(
          e,
          o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        );
      return babelHelpers.extends({}, a, {
        type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        kind: o("WAWebMsgType").MsgKind.Interactive,
        caption: null,
        pmCampaignId: null,
        interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .BR_PAYMENT_STATE,
        nativeFlowInteractiveMsg: !0,
        interactivePayload: {
          buttons: [
            {
              name: r("WAWebInteractiveMessagesNativeFlowName")
                .BR_PAYMENT_STATE,
              buttonParamsJson: n,
            },
          ],
          messageVersion: 1,
        },
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
      });
    }
    async function U(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      if (t != null) return t;
      try {
        var n = await o("WAWebMsgCollection").MsgCollection.getMessagesById([
            e.toString(),
          ]),
          a = n.messages;
        return a.at(0);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not load the receipt image to retract",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-receipt-retract-load-failed"),
          null
        );
      }
    }
    ((l.markPaymentAsPaid = E),
      (l.removePaymentReceipt = k),
      (l.attachPaymentReceipt = I));
  },
  98,
);
