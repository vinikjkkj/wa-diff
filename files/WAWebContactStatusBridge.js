__d(
  "WAWebContactStatusBridge",
  ["WAWebAck", "WAWebApiStatus", "WAWebSendReadReceiptJob"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebApiStatus").getAllStatuses();
    }
    async function s(e, t, n) {
      try {
        return (
          await o("WAWebSendReadReceiptJob").markStatusRead(e, t, n),
          (e.ack = o("WAWebAck").ACK.READ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    ((l.queryStatusAll = e), (l.sendReadStatus = s));
  },
  98,
);
