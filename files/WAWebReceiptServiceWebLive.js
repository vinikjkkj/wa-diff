__d(
  "WAWebReceiptServiceWebLive",
  [
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebReceiptService",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebReceiptService").ReceiptService.make(function* () {
      var e = {
        handlePlaceholderMsgsSeen: function (t, n) {
          return o("WebDi.Fx").sync(function () {
            return o(
              "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
            ).handlePlaceholderMsgsSeen(t, n);
          });
        },
      };
      return e;
    });
    l.ReceiptServiceWebLive = e;
  },
  98,
);
