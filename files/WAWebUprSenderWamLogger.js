__d(
  "WAWebUprSenderWamLogger",
  [
    "WAWebOrderMessageSendResultError",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
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
    async function m(e) {
      var t = e.country,
        n = e.eventParams,
        r = e.queryParams;
      new (o("WAWebPaymentsUserActionWamEvent").PaymentsUserActionWamEvent)(
        babelHelpers.extends({}, n, {
          paymentsCountryCode: t.toUpperCase(),
          paymentsEventId: await o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getMdSessionId(),
          queryParams: JSON.stringify(
            babelHelpers.extends({}, r, { platform: "upr" }),
          ),
        }),
      ).commit();
    }
    async function p(t) {
      await m({
        country: t,
        eventParams: {
          paymentActionType: o("WAWebWamEnumPaymentActionTypes")
            .PAYMENT_ACTION_TYPES.VIEW,
          referral: e,
          screen: s,
        },
      });
    }
    async function _(t) {
      await m({
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
    }
    async function f(t) {
      await m({
        country: t,
        eventParams: {
          paymentActionType: o("WAWebWamEnumPaymentActionTypes")
            .PAYMENT_ACTION_TYPES.VIEW,
          referral: e,
          screen: u,
        },
        queryParams: { flow_type: c },
      });
    }
    async function g(t, n, r, a) {
      var i = n === 1,
        l = { flow_type: c };
      (i
        ? (r != null && (l.account_type = r),
          a != null && (l.identifier_type = a))
        : (l.account_count = n),
        await m({
          country: t,
          eventParams: {
            actionTarget: i
              ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                  .SUMMARY_CARD_SINGLE
              : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                  .SUMMARY_CARD_MULTI,
            paymentActionType: o("WAWebWamEnumPaymentActionTypes")
              .PAYMENT_ACTION_TYPES.VIEW,
            referral: e,
            screen: u,
          },
          queryParams: l,
        }));
    }
    async function h(t, n) {
      await m({
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
    }
    async function y(t) {
      await m({
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
    }
    async function C(t, n, r) {
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
        await m({
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
    }
    ((l.getUprSendFailureDetails = d),
      (l.logUprAttachmentTrayView = p),
      (l.logUprAttachmentTrayClick = _),
      (l.logUprSendSheetView = f),
      (l.logUprSendSummaryCardView = g),
      (l.logUprSendButtonClick = h),
      (l.logUprSendSheetDismiss = y),
      (l.logUprSendResult = C));
  },
  98,
);
