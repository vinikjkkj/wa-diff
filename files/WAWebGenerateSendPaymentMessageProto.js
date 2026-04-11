__d(
  "WAWebGenerateSendPaymentMessageProto",
  ["WAWebE2EProtoUtils", "WAWebPaymentsProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.paymentRequestMessageKey
          ? {
              fromMe: t.paymentRequestMessageKey.fromMe,
              remoteJid: o("WAWebE2EProtoUtils").encodeJid(
                t.paymentRequestMessageKey.remote,
              ),
              id: t.paymentRequestMessageKey.id,
              participant: o("WAWebE2EProtoUtils").encodeJid(
                t.paymentRequestMessageKey.participant,
              ),
            }
          : void 0;
      return {
        sendPaymentMessage: {
          requestMessageKey: n,
          noteMessage: o("WAWebPaymentsProtoUtils").generatePaymentsNoteMessage(
            t,
          ),
        },
      };
    }
    l.default = e;
  },
  98,
);
