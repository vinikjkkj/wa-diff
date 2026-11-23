__d(
  "WAWebPaymentDetailsCopy",
  [
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebClock",
    "WAWebL10N",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPaymentDetailsStrings",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 864e13;
    function s(e, t, n, r) {
      return t ===
        o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED
        ? o("WAWebPaymentDetailsStrings").getNotConfirmedExplainer()
        : t ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
          ? g(e, n, r)
          : t ===
              o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET
            ? null
            : t === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PENDING
              ? f(n.statusUpdatedAtMs)
              : t ===
                  o("WAWebPaymentDetailsModels").PaymentDetailsStatus
                    .PAYMENT_SENT
                ? h(e, n, r)
                : t ===
                    o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
                  ? y(n)
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
    }
    function u(e, t) {
      return [
        {
          label: o("WAWebPaymentDetailsStrings").getRecipientLabel(),
          testid: "payment-details-recipient",
          value: e.recipientName !== "" ? e.recipientName : t,
        },
        {
          label: o("WAWebPaymentDetailsStrings").getPixKeyLabel(),
          testid: "payment-details-pix-key",
          value: o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
            e.pixKey,
            e.pixKeyType,
          ),
        },
      ];
    }
    function c(e) {
      var t = e.state,
        n = t.bankName,
        r = t.transactionE2eId;
      if (
        !o("WAWebPaymentDetailsStatusPolicy").showsPaymentInformation(
          e.flow,
          e.status,
          e.state,
        )
      )
        return [];
      var a = [];
      return (
        n != null &&
          a.push({
            label: o("WAWebPaymentDetailsStrings").getSentUsingLabel(),
            testid: "payment-details-sent-using",
            value: n,
          }),
        r != null &&
          a.push({
            label: o("WAWebPaymentDetailsStrings").getTransactionIdLabel(),
            testid: "payment-details-transaction-id",
            value: r,
          }),
        a
      );
    }
    function d(e, t) {
      return t.length === 0
        ? []
        : [{ kind: "section", text: e.toString() }].concat(
            t.map(function (e) {
              return {
                kind: "field",
                label: e.label.toString(),
                value: e.value,
              };
            }),
          );
    }
    function m(e, t, n) {
      var r = _(t);
      return r == null
        ? null
        : e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER
          ? o("WAWebPaymentDetailsStrings").getReceiptAddedByYou(r)
          : n === ""
            ? null
            : o("WAWebPaymentDetailsStrings").getReceiptAddedBy(n, r);
    }
    function p(e, t, n) {
      return o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(t)
        ? null
        : e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
          ? o("WAWebPaymentDetailsStrings").getOnlyYouCanConfirm()
          : n === ""
            ? null
            : o("WAWebPaymentDetailsStrings").getOnlyNameCanConfirm(n);
    }
    function _(e) {
      return b(e)
        ? new Intl.DateTimeFormat(
            r("WAWebL10N").getFullLocale(),
            babelHelpers.extends(
              { day: "numeric", month: "short", year: "numeric" },
              v(),
            ),
          ).format(new Date(e))
        : null;
    }
    function f(e) {
      return b(e)
        ? new Intl.DateTimeFormat(
            r("WAWebL10N").getFullLocale(),
            babelHelpers.extends(
              {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
              },
              v(),
            ),
          ).format(new Date(e))
        : null;
    }
    function g(e, t, n) {
      var r = f(t.statusUpdatedAtMs);
      return r == null
        ? null
        : C(e, t.actor)
          ? o("WAWebPaymentDetailsStrings").getMarkedAsPaidByYouExplainer(r)
          : n === ""
            ? null
            : o("WAWebPaymentDetailsStrings").getMarkedAsPaidByExplainer(n, r);
    }
    function h(e, t, n) {
      var r = f(t.statusUpdatedAtMs);
      return r == null
        ? null
        : e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
          ? o("WAWebPaymentDetailsStrings").getPaymentSentToYouExplainer(r)
          : n === ""
            ? null
            : o("WAWebPaymentDetailsStrings").getPaymentSentToNameExplainer(
                n,
                r,
              );
    }
    function y(e) {
      var t = f(e.statusUpdatedAtMs);
      return t == null
        ? null
        : o("WAWebPaymentDetailsStrings").getPaymentFailedExplainer(t);
    }
    function C(e, t) {
      return t === o("WAWebPaymentDetailsModels").PaymentDetailsActor.REQUESTER
        ? e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
        : t === o("WAWebPaymentDetailsModels").PaymentDetailsActor.PAYER
          ? e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.PAYER
          : t === o("WAWebPaymentDetailsModels").PaymentDetailsActor.SYSTEM
            ? !1
            : t == null
              ? e === o("WAWebPaymentDetailsModels").PaymentDetailsPov.REQUESTER
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function b(t) {
      return t > 0 && t <= e;
    }
    function v() {
      var e = o("WAWebClock").Clock.timeZoneHardCode;
      return e != null ? { timeZone: e } : {};
    }
    ((l.getStatusExplainer = s),
      (l.getRecipientRows = u),
      (l.getPaymentInformationRows = c),
      (l.getSectionImageBlocks = d),
      (l.getReceiptRowSubtitle = m),
      (l.getReceiptRowBody = p),
      (l.formatPaymentDetailsDate = _),
      (l.formatPaymentDetailsDateTime = f));
  },
  98,
);
