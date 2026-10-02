__d(
  "WACreateHandleIndividualMessageBranch",
  [
    "WAForceSecondRetryErrorTypes",
    "WAHandleIndividualMessage",
    "WAHandleIndividualMessageProtocol",
    "WAReceiptUtils",
    "WAResultOrError",
    "WASendDeliveryReceiptProtocol",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WATagsLogger").TAGS(["handleIndividualMessageBranch"]);
    function u(t) {
      return function (r) {
        var n = r.commonMessageBase,
          a = r.ctx,
          i = r.individualMixin,
          l = r.makeAck;
        s.DEV(
          e || (e = babelHelpers.taggedTemplateLiteralLoose(["starting..."])),
        );
        var u = o("WAHandleIndividualMessageProtocol").parseIndividualMessage(
          i,
        );
        return t(
          babelHelpers.extends({}, n, {
            parsedMessage: u,
            makeAck: l,
            sendRetryReceipt: o("WAHandleIndividualMessage")
              .sendIndividualMessageRetryReceipt,
            sendDeliveryReceipt: o("WASendDeliveryReceiptProtocol")
              .sendIndividualMessageDeliveryReceipt,
            makeDeliveryReceipt: o("WASendDeliveryReceiptProtocol")
              .makeDeliveryReceipt,
            makeRetryReceipt: c,
            decodeMessage: o("WAHandleIndividualMessageProtocol")
              .decodeIndividualMessage,
          }),
          a,
        ).then(o("WAResultOrError").makeResult);
      };
    }
    var c = function (t, n) {
      var e = t.author,
        r = t.chat,
        a = t.deviceIdentity,
        i = t.error,
        l = t.from,
        s = t.retryCount,
        u = t.serverTs,
        c = t.stanzaId,
        d = e === "@me",
        m = s;
      return (
        o("WAForceSecondRetryErrorTypes").FORCE_SECOND_RETRY_ON.has(i) &&
          (m = Math.max(2, s)),
        o("WAReceiptUtils").makeRetryReceipt(
          {
            category: null,
            externalId: c,
            from: { deviceJid: l, type: "device" },
            participant: null,
            recipient: d ? r : null,
            retryCount: m,
            ts: u,
            deviceIdentity: a,
          },
          n,
        )
      );
    };
    l.createHandleIndividualMessageBranch = u;
  },
  98,
);
