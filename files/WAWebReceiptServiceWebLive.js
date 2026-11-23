__d(
  "WAWebReceiptServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebReceiptService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
      ).__setRef("WAWebReceiptServiceWebLive"),
      s = o("WAWebReceiptService").ReceiptService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.handlePlaceholderMsgsSeen,
          r = {
            handlePlaceholderMsgsSeen: function (t, r) {
              return o("WebDi.Fx").sync(function () {
                return n(t, r);
              });
            },
          };
        return r;
      });
    l.ReceiptServiceWebLive = s;
  },
  98,
);
