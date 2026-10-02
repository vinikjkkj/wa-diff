__d(
  "WACreateHandlePeerAppdataReceiptBranch",
  [
    "Promise",
    "WAParseKeyBundleMixing",
    "WAResultOrError",
    "WASignalOther",
    "WASmaxReceiptDeliverAppDataPeerRPC",
    "WATagsLogger",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS([
        "decision tree",
        "handlePeerAppdataReceiptBranch",
      ]);
    function d(t) {
      var r = t.handlePeerAppdataReceipt,
        a = t.handlePeerAppdataRetryReceipt;
      return function (i, l) {
        c.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start..."])));
        var t = o(
            "WASmaxReceiptDeliverAppDataPeerRPC",
          ).receiveDeliverAppDataPeerRPC(i),
          d = t.makeDeliverAppDataPeerResponseSuccess,
          m = t.parsedRequest,
          p = m.from,
          _ = m.id,
          f =
            m.peerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup;
        switch (f.name) {
          case "DeliverAppDataPeerPeerDelivery": {
            if (r != null)
              return r({
                receiptType: "delivered",
                stanzaId: _,
                receiptSender: p,
                makeAck: d,
              }).then(o("WAResultOrError").makeResult);
            break;
          }
          case "DeliverAppDataPeerPeerRetry": {
            if (a != null) {
              var g = f.value,
                h = g.category,
                y = g.keyBundleMixin,
                C = g.registrationElementValue,
                b = g.retryCount,
                v = g.retryId,
                S = g.retryT,
                R = o("WASignalOther").castRegistrationIdFromBytes(C);
              return a({
                receiptType: "retry",
                category: h,
                retryReceipt: {
                  stanzaId: _,
                  retryStanzaId: v,
                  receiptSender: p,
                  retryCount: b,
                  regId: R,
                  timestamp: o("WATimeUtils").castToUnixTime(S),
                  keys: y
                    ? o("WAParseKeyBundleMixing").parseKeyBundleMixin(R, y)
                    : null,
                },
                makeAck: d,
                socketId: l,
              }).then(o("WAResultOrError").makeResult);
            }
            break;
          }
          default:
            f.name;
        }
        return (
          c.WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Peer appdata receipt is not handled.",
              ])),
          ),
          (u || (u = n("Promise"))).resolve(
            o("WAResultOrError").makeResult(d()),
          )
        );
      };
    }
    l.createHandlePeerAppdataReceiptBranch = d;
  },
  98,
);
