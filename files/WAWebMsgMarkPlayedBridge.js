__d(
  "WAWebMsgMarkPlayedBridge",
  ["Promise", "WAWebSendPlayedReceiptJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, o) {
      return (
        r("WAWebSendPlayedReceiptJob")(t, o),
        (e || (e = n("Promise"))).resolve()
      );
    }
    l.default = s;
  },
  98,
);
