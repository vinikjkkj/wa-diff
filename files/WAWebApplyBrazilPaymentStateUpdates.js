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
    "WAWebFindBrazilPaymentRequestMsg",
    "WAWebHideBrazilPaymentReceiptImage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e3;
    function m(t) {
      return t.reduce(
        function (t, n) {
          return t.then(function (t) {
            return p(n)
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
        (c || (c = n("Promise"))).resolve(!0),
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
              y(e) * d,
            ),
            c = yield o(
              "WAWebBrazilPaymentStateDb",
            ).updateStoredBrazilPaymentState(r.id, function (e) {
              return o(
                "WAWebBrazilPaymentStateUpdateRules",
              ).getNextBrazilPaymentState(e, t, a, l);
            });
          return c == null
            ? (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] could not write the update to the payment message",
                    ])),
                )
                .sendLogs("br-payment-state-write-failed"),
              !1)
            : (f(r.id, c.updatedPayload), i && (yield g(e, t)), !0);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      t != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "updateBrazilPaymentStateMsgs",
          { updates: [{ msgKey: e, interactivePayload: t }] },
        );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.receiptMsgId;
          n != null &&
            (yield o(
              "WAWebHideBrazilPaymentReceiptImage",
            ).hideBrazilPaymentReceiptImage(e.id.remote, e.id.fromMe, n));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t;
      return (t = e.t) != null ? t : o("WATimeUtils").unixTime();
    }
    l.applyBrazilPaymentStateUpdates = m;
  },
  98,
);
