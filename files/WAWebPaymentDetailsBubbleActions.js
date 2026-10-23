__d(
  "WAWebPaymentDetailsBubbleActions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrazilPaymentState",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgCollection",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPaymentDetailsStrings",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcAdd.react",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebPaymentDetailsDialogs.react")
          .__setRef("WAWebPaymentDetailsBubbleActions")
          .load();
      }, "WAWebPaymentDetailsDialogs");
    function m(e, t) {
      var n = e.interactivePayload,
        a = e.msgKey,
        i = o("WAWebPaymentDetailsModels").getPaymentDetailsPov(a.fromMe),
        l = o("WAWebBrazilPaymentState").getBrazilPaymentState(n),
        s = o("WAWebBrazilPaymentState").getPaymentDetailsStatus(l),
        u = [];
      return (
        o("WAWebPaymentDetailsStatusPolicy").canMarkAsPaid(i, s) &&
          u.push({
            label: o("WAWebPaymentDetailsStrings").getMarkAsPaidLabel(),
            onClick: function () {
              p(
                a,
                function (e, t, n) {
                  var r = e.confirmMarkAsPaidFromBubble;
                  return r(t, n);
                },
                o("WAWebPaymentDetailsStrings").getMarkAsPaidFailedToast,
              );
            },
            testid: "payment-details-bubble-mark-as-paid",
          }),
        t != null &&
          o("WAWebPaymentDetailsStatusPolicy").showsCopyCta(i, s) &&
          u.push(t),
        o("WAWebPaymentDetailsStatusPolicy").canAttachReceipt(
          i,
          l.receiptMsgId,
        ) &&
          u.push({
            label: o("WAWebPaymentDetailsStrings").getAddReceiptLabel(),
            Icon: r("WDSIconIcAdd.react"),
            onClick: function () {
              p(
                a,
                function (e, t, n) {
                  var r = e.openAddReceiptDialogFromBubble;
                  return r(t, n);
                },
                o("WAWebPaymentDetailsStrings").getAddReceiptFailedToast,
              );
            },
            testid: "payment-details-bubble-add-receipt",
          }),
        u
      );
    }
    function p(t, n, a) {
      var i = o("WAWebMsgCollection").MsgCollection.get(t);
      if (i == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[br-payment-details] payment message left the collection before its dialog opened",
            ])),
        );
        return;
      }
      var l = o("WAWebFrontendContactGetters").getFormattedName(
        o("WAWebFrontendMsgGetters").getChat(i).contact,
      );
      d()
        .then(function (e) {
          return n(e, i, l);
        })
        .catch(function (e) {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-details] could not open a payment details dialog",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("payment-details-dialogs-load-failed"),
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: a() }),
            ));
        });
    }
    l.getPaymentDetailsBubbleActions = m;
  },
  98,
);
