__d(
  "WAWebBrazilPaymentReceiptAddedNotification",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebFrontendContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentDetailsStrings",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebOpenPaymentDetails")
          .__setRef("WAWebBrazilPaymentReceiptAddedNotification")
          .load();
      }, "WAWebOpenPaymentDetails");
    function m(t, n) {
      var a = _(n);
      return a == null
        ? {
            text: o("WAWebPaymentDetailsStrings").getPlainReceiptAddedNotice(),
            inlineCtaText: null,
            handleClick: null,
          }
        : {
            text: p(t),
            inlineCtaText: c.jsx(c.Fragment, {
              children: o("WAWebPaymentDetailsStrings").getViewDetailsLabel(),
            }),
            handleClick: function () {
              f(a).catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] could not open the payment details",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("br-payment-details-notice-open-failed");
              });
            },
          };
    }
    function p(e) {
      return o("WAWebPaymentDetailsStrings").getReceiptAddedNotice(
        o("WAWebFrontendContactGetters").getFormattedName(e.contact) ||
          o("WAWebWidFormat").widToFormattedUser(e.id),
      );
    }
    function _(e) {
      var t = e[0];
      if (typeof t != "string") return null;
      var n = h(t);
      return n != null &&
        o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForReceiptNotice(
          n.fromMe,
        )
        ? n
        : null;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = y(e),
            r =
              (t = n
                .map(function (e) {
                  return o("WAWebMsgCollection").MsgCollection.get(e);
                })
                .find(Boolean)) != null
                ? t
                : (yield o("WAWebMsgCollection").MsgCollection.getMessagesById(
                    n,
                  )).messages[0];
          if (
            r == null ||
            !o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(r)
          ) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] receipt notice has no payment details to open",
                  ])),
              )
              .sendLogs("br-payment-details-notice-payment-missing");
            return;
          }
          var a = yield d(),
            i = a.openPaymentDetails;
          i(r);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      try {
        return r("WAWebMsgKey").fromString(e);
      } catch (e) {
        return null;
      }
    }
    function y(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t == null ? [e.toString()] : [e.toString(), t.toString()];
    }
    ((l.getBrazilPaymentReceiptAddedNotification = m),
      (l.getBrazilPaymentReceiptAddedPreview = p));
  },
  98,
);
