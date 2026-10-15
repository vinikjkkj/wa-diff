__d(
  "WAWebBrazilPaymentReceiptAddedFormatMsgText",
  ["WAWebBrazilPaymentReceiptAddedNotification", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg;
      return o(
        "WAWebBrazilPaymentReceiptAddedNotification",
      ).getBrazilPaymentReceiptAddedPreview(
        o("WAWebFrontendMsgGetters").getChat(t),
      );
    }
    l.default = e;
  },
  98,
);
