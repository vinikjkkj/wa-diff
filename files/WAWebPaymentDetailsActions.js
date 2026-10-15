__d(
  "WAWebPaymentDetailsActions",
  [
    "Promise",
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
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPrepRawMedia",
    "WAWebRevokeMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSilentPaymentMsg",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!P(e)) return !1;
          var t = o("WATimeUtils").unixTimeMs(),
            r = yield z(e, function (e) {
              return o("WAWebBrazilPaymentState").applyStatusUpdate(
                e,
                o("WAWebPaymentDetailsModels").PaymentDetailsStatus
                  .MARKED_AS_PAID,
                o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER,
                t,
              );
            });
          if (r.status === "unchanged" && !V(r.current))
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] a newer status is stored, keeping it",
                    ])),
                )
                .sendLogs("br-payment-state-mark-as-paid-stale"),
              !1
            );
          if (r.status !== "applied") return r.status === "unchanged";
          var a = yield X(
            o("WAWebFrontendMsgGetters").getChat(e),
            (E || (E = n("Promise"))).resolve(
              o(
                "WAWebBrazilPaymentStateUpdatePayload",
              ).buildMarkAsPaidUpdateParams(e.id.id, t),
            ),
          );
          return (a || (yield K(e, H(r.previous, t))), a);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!N(e)) return !1;
          var t = o("WATimeUtils").unixTimeMs(),
            r = yield z(e, function (e) {
              return o("WAWebBrazilPaymentState").applyReceiptRemoval(e, t);
            });
          if (r.status === "unchanged" && r.current.receiptMsgId != null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] a newer receipt is stored, keeping it",
                    ])),
                )
                .sendLogs("br-payment-state-receipt-removal-stale"),
              !1
            );
          if (r.status !== "applied") return r.status === "unchanged";
          var a = yield X(
            o("WAWebFrontendMsgGetters").getChat(e),
            (E || (E = n("Promise"))).resolve(
              o(
                "WAWebBrazilPaymentStateUpdatePayload",
              ).buildReceiptRemovalParams(e.id.id, t),
            ),
          );
          return (a || (yield K(e, G(r.previous, t))), a);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!N(e)) return !1;
          if (!t.type.startsWith("image/"))
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] rejecting a receipt that is not an image: ",
                      "",
                    ])),
                  t.type,
                )
                .sendLogs("br-payment-state-receipt-not-image"),
              !1
            );
          var a = yield M(t);
          if (a == null) return !1;
          var i = o("WAWebFrontendMsgGetters").getChat(e),
            l = o("WATimeUtils").unixTimeMs(),
            s = r("WAWebNoop"),
            u = r("WAWebNoop"),
            c = new (E || (E = n("Promise")))(function (e, t) {
              ((s = e), (u = t));
            }),
            p = X(
              i,
              c.then(function (t) {
                return o(
                  "WAWebBrazilPaymentStateUpdatePayload",
                ).buildReceiptUpdateParams(e.id.id, t.id, l);
              }),
            ),
            _ = A(a, i, s);
          _.then(function () {
            return u(r("err")("receipt image was not created"));
          });
          var f = yield c.catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] the receipt image was not created",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("br-payment-state-receipt-image-missing"),
              null
            );
          });
          if (f == null) return !1;
          var g = yield z(e, function (e) {
              return o("WAWebBrazilPaymentState").applyReceiptUpdate(
                e,
                f.id,
                l,
              );
            }),
            h = yield E.all([p, _]),
            y = h[0],
            C = h[1];
          return y && C && g.status === "applied"
            ? !0
            : (yield O(e, {
                isImageSent: C,
                isUpdateSent: y,
                receiptKey: f,
                receiptWrite: g,
                timestampMs: l,
              }),
              !1);
        })),
        $.apply(this, arguments)
      );
    }
    function P(t) {
      return o("WAWebPaymentDetailsModels").getPaymentDetailsPov(
        t.id.fromMe,
      ) === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
        ? !0
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] only the requester can mark a payment as paid",
                ])),
            )
            .sendLogs("br-payment-state-mark-as-paid-not-requester"),
          !1);
    }
    function N(e) {
      return o("WAWebPaymentDetailsModels").getPaymentDetailsPov(
        e.id.fromMe,
      ) === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER
        ? !0
        : (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] only the payer can change the receipt",
                ])),
            )
            .sendLogs("br-payment-state-receipt-not-payer"),
          !1);
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o("WAWebPrepRawMedia").prepRawMedia(
              yield r("WAWebMediaOpaqueData").createFromData(e, e.type),
              {},
            );
            return (yield t.waitForPrep(), t);
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
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield e.sendToChat({
              chat: t,
              options: {
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                onMsgKeyCreated: function (t) {
                  (o("WAWebSilentPaymentMsg").markSilentPaymentReceipt(t),
                    n(t));
                },
              },
            });
            if (
              a.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
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
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.isImageSent,
            a = t.isUpdateSent,
            i = t.receiptKey,
            l = t.receiptWrite,
            s = t.timestampMs,
            u = l.status === "applied" ? yield K(e, G(l.previous, s)) : l,
            c = l.status === "failed" || u.status === "applied";
          if (a && c) {
            var d = l.status === "applied" ? l.previous.receiptMsgId : null;
            yield X(
              o("WAWebFrontendMsgGetters").getChat(e),
              (E || (E = n("Promise"))).resolve(W(e.id.id, d)),
            );
          }
          r && (yield q(i));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
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
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield ee(e);
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
            var n = yield o("WAWebRevokeMsgAction").sendRevoke(
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
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      var t = e.status;
      return (
        t != null &&
        o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(t)
      );
    }
    function H(e, t) {
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
    function G(e, t) {
      return function (n) {
        return n.receiptAddedAtMs === t
          ? babelHelpers.extends({}, n, {
              receiptMsgId: e.receiptMsgId,
              receiptAddedAtMs: e.receiptAddedAtMs,
            })
          : n;
      };
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = yield o(
              "WAWebBrazilPaymentStateDb",
            ).updateStoredBrazilPaymentState(e.id, t);
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
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield z(e, t);
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
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a = yield (E || (E = n("Promise"))).all(
                o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, J(e, t)),
              ),
              i = a[1];
            if (
              i.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              return !0;
            o("WALogger")
              .WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] state update send failed: ",
                    "",
                  ])),
                i.messageSendResult,
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
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t,
            a = yield o("WAWebMsgDataUtils").genOutgoingMsgData(
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
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          if (t != null) return t;
          try {
            var n = yield o("WAWebMsgCollection").MsgCollection.getMessagesById(
                [e.toString()],
              ),
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
        })),
        te.apply(this, arguments)
      );
    }
    ((l.markPaymentAsPaid = k),
      (l.removePaymentReceipt = T),
      (l.attachPaymentReceipt = x));
  },
  98,
);
