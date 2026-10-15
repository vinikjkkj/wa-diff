__d(
  "WAWebApplyBrazilPaymentStateUpdates",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebBrazilPaymentStateUpdateRules",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebFindBrazilPaymentRequestMsg",
    "WAWebHandleSingleMsg",
    "WAWebHideBrazilPaymentReceiptImage",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 1e3,
      g = /^[A-Za-z0-9-]{1,64}$/;
    function h(t) {
      return t.reduce(
        function (t, n) {
          return t.then(function (t) {
            return y(n)
              .catch(function (t) {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[br-payment-state] failed to apply an update",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("br-payment-state-apply-failed"),
                  !1
                );
              })
              .then(function (e) {
                return t && e;
              });
          });
        },
        (_ || (_ = n("Promise"))).resolve(!0),
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebBrazilPaymentStateUpdatePayload",
          ).getBrazilPaymentStateUpdate(e);
          if (t == null) return !0;
          var n = yield o(
              "WAWebFindBrazilPaymentRequestMsg",
            ).findBrazilPaymentRequestMsg(e.id.remote, t.paymentMsgId),
            r = n.paymentMsg;
          if (r == null) return !n.isPending;
          var a = e.id.fromMe === r.id.fromMe;
          if (
            !o("WAWebBrazilPaymentStateUpdateRules").isAllowedStatusUpdate(t, a)
          )
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] rejecting a status only the requester can set",
                  ])),
              ),
              !0
            );
          var i = o(
              "WAWebBrazilPaymentStateUpdateRules",
            ).hasAcceptedReceiptUpdate(t, a),
            l = o("WAWebBrazilPaymentStateUpdateRules").getUpdateTimestampMs(
              t,
              x(e) * f,
            ),
            s = yield o(
              "WAWebBrazilPaymentStateDb",
            ).updateStoredBrazilPaymentState(r.id, function (e) {
              return o(
                "WAWebBrazilPaymentStateUpdateRules",
              ).getNextBrazilPaymentState(e, t, a, l);
            });
          return s == null
            ? (o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] could not write the update to the payment message",
                    ])),
                )
                .sendLogs("br-payment-state-write-failed"),
              !1)
            : (b(r.id, s.updatedPayload),
              i &&
                (yield v({
                  paymentMsgKey: r.id,
                  update: t,
                  updateMsg: e,
                  write: s,
                })),
              !0);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      t != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "updateBrazilPaymentStateMsgs",
          { updates: [{ msgKey: e, interactivePayload: t }] },
        );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.paymentMsgKey,
            n = e.update,
            r = e.updateMsg,
            a = e.write,
            i = n.receiptMsgId;
          i != null &&
            (yield o(
              "WAWebHideBrazilPaymentReceiptImage",
            ).hideBrazilPaymentReceiptImage(r.id.remote, r.id.fromMe, i),
            T(r, a, i) &&
              (yield L({
                chatId: r.id.remote,
                paymentMsgKey: t,
                receiptMsgId: i,
                t: x(r),
              })));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !1,
        remote: e,
        id: "BRRECEIPTADDED" + t,
      });
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.paymentMsgKey,
            a = e.receiptMsgId,
            i = e.t,
            l = R(t, a);
          try {
            if (yield k(l)) return;
            var s = o("WAWebContactSystemMsg").genNotificationMsg(t, {
              id: l,
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
              kind: o("WAWebMsgType").MsgKind.Notification,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .BrazilPaymentReceiptAdded,
              templateParams: [n.toString()],
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: i,
            });
            if (
              (yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
                chatId: t,
                newMsg: s,
                handleSingleMsgOrigin: "brazilPaymentReceiptAdded",
              }),
              !(yield k(l)))
            ) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] the receipt notice was not stored",
                    ])),
                )
                .sendLogs("br-payment-state-receipt-notice-not-stored");
              return;
            }
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] added the receipt notice",
                ])),
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not add the receipt notice",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-state-receipt-notice-failed");
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)]
                .filter(Boolean)
                .map(String),
              !1,
            );
          return t.some(Boolean);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      var o = t.next;
      return (
        !e.id.fromMe && o.receiptMsgId === n && D(n) && r("justknobx")._("6447")
      );
    }
    function D(e) {
      return g.test(e)
        ? !0
        : (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] no receipt notice for an unexpected receipt id",
                ])),
            )
            .sendLogs("br-payment-state-receipt-notice-bad-id"),
          !1);
    }
    function x(e) {
      var t;
      return (t = e.t) != null ? t : o("WATimeUtils").unixTime();
    }
    ((l.applyBrazilPaymentStateUpdates = h), (l.getReceiptAddedNoticeKey = R));
  },
  98,
);
