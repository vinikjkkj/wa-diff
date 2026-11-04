__d(
  "WAWebUprSenderWamLogger",
  [
    "WAWebOrderMessageSendResultError",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "chat",
      s = "upr_attachment_tray",
      u = "upr_send",
      c = "pux";
    function d(e) {
      var t = r("getErrorSafe")(e).name;
      if (e instanceof r("WAWebOrderMessageSendResultError")) {
        var n = {
          errorName: t,
          failureStage: "send_result",
          sendResult:
            e.messageSendResult == null
              ? "missing"
              : String(e.messageSendResult),
        };
        return (
          e.failureReason != null && (n.sendFailureReason = e.failureReason),
          e.failureErrorName != null &&
            (n.sendFailureErrorName = e.failureErrorName),
          e.ackErrorCode != null && (n.ackErrorCode = e.ackErrorCode),
          n
        );
      }
      return { errorName: t, failureStage: "exception" };
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.country,
            n = e.eventParams,
            r = e.queryParams;
          new (o("WAWebPaymentsUserActionWamEvent").PaymentsUserActionWamEvent)(
            babelHelpers.extends({}, n, {
              paymentsCountryCode: t.toUpperCase(),
              paymentsEventId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              queryParams: JSON.stringify(
                babelHelpers.extends({}, r, { platform: "upr" }),
              ),
            }),
          ).commit();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield m({
            country: t,
            eventParams: {
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.VIEW,
              referral: e,
              screen: s,
            },
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield m({
            country: t,
            eventParams: {
              actionTarget: o("WAWebWamEnumPaymentActionTargets")
                .PAYMENT_ACTION_TARGETS.PAYMENT_KEY_BUTTON,
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.CLICK,
              referral: e,
              screen: s,
            },
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield m({
            country: t,
            eventParams: {
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.VIEW,
              referral: e,
              screen: u,
            },
            queryParams: { flow_type: c },
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = n === 1,
              l = { flow_type: c };
            (i
              ? (r != null && (l.account_type = r),
                a != null && (l.identifier_type = a))
              : (l.account_count = n),
              yield m({
                country: t,
                eventParams: {
                  actionTarget: i
                    ? o("WAWebWamEnumPaymentActionTargets")
                        .PAYMENT_ACTION_TARGETS.SUMMARY_CARD_SINGLE
                    : o("WAWebWamEnumPaymentActionTargets")
                        .PAYMENT_ACTION_TARGETS.SUMMARY_CARD_MULTI,
                  paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                    .PAYMENT_ACTION_TYPES.VIEW,
                  referral: e,
                  screen: u,
                },
                queryParams: l,
              }));
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          yield m({
            country: t,
            eventParams: {
              actionTarget: o("WAWebWamEnumPaymentActionTargets")
                .PAYMENT_ACTION_TARGETS.SEND_BUTTON,
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.CLICK,
              referral: e,
              screen: u,
            },
            queryParams: babelHelpers.extends(
              { flow_type: c },
              n == null ? {} : { order_amount: String(n) },
            ),
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield m({
            country: t,
            eventParams: {
              actionTarget: o("WAWebWamEnumPaymentActionTargets")
                .PAYMENT_ACTION_TARGETS.CLOSE_BUTTON,
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.CLICK,
              referral: e,
              screen: u,
            },
            queryParams: { flow_type: c },
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = { flow_type: c, result: n };
          (r != null &&
            ((a.error_name = r.errorName),
            (a.failure_stage = r.failureStage),
            r.sendResult != null && (a.send_result = r.sendResult),
            r.sendFailureReason != null &&
              (a.send_failure_reason = r.sendFailureReason),
            r.sendFailureErrorName != null &&
              (a.send_failure_error_name = r.sendFailureErrorName),
            r.ackErrorCode != null && (a.ack_error_code = r.ackErrorCode)),
            yield m({
              country: t,
              eventParams: {
                actionTarget: o("WAWebWamEnumPaymentActionTargets")
                  .PAYMENT_ACTION_TARGETS.SEND_BUTTON,
                paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                  .PAYMENT_ACTION_TYPES.API,
                referral: e,
                screen: u,
              },
              queryParams: a,
            }));
        })),
        I.apply(this, arguments)
      );
    }
    ((l.getUprSendFailureDetails = d),
      (l.logUprAttachmentTrayView = _),
      (l.logUprAttachmentTrayClick = g),
      (l.logUprSendSheetView = y),
      (l.logUprSendSummaryCardView = b),
      (l.logUprSendButtonClick = S),
      (l.logUprSendSheetDismiss = L),
      (l.logUprSendResult = k));
  },
  98,
);
