__d(
  "WAWebUprSenderWamLogger",
  [
    "WAWebPaymentsUserActionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "chat",
      s = "upr_attachment_tray",
      u = "upr_send",
      c = "pux";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield d({
            country: t,
            eventParams: {
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.VIEW,
              referral: e,
              screen: s,
            },
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield d({
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield d({
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = n === 1,
              l = { flow_type: c };
            (i
              ? (r != null && (l.account_type = r),
                a != null && (l.identifier_type = a))
              : (l.account_count = n),
              yield d({
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          yield d({
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield d({
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          yield d({
            country: t,
            eventParams: {
              actionTarget: o("WAWebWamEnumPaymentActionTargets")
                .PAYMENT_ACTION_TARGETS.SEND_BUTTON,
              paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                .PAYMENT_ACTION_TYPES.API,
              referral: e,
              screen: u,
            },
            queryParams: { flow_type: c, result: n },
          });
        })),
        k.apply(this, arguments)
      );
    }
    ((l.logUprAttachmentTrayView = p),
      (l.logUprAttachmentTrayClick = f),
      (l.logUprSendSheetView = h),
      (l.logUprSendSummaryCardView = C),
      (l.logUprSendButtonClick = v),
      (l.logUprSendSheetDismiss = R),
      (l.logUprSendResult = E));
  },
  98,
);
