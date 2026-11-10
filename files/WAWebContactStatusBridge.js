__d(
  "WAWebContactStatusBridge",
  [
    "WAWebAck",
    "WAWebApiStatus",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebApiStatus").getAllStatuses();
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            return (
              yield o("WAWebSendReadReceiptJob").markStatusRead(e, t, n),
              (e.ack = o("WAWebAck").ACK.READ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.queryStatusAll = e), (l.sendReadStatus = s));
  },
  98,
);
