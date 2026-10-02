__d(
  "WACreateHandleGroupMessageBranch",
  [
    "WAHandleGroupMessageProtocol",
    "WAResultOrError",
    "WASendDeliveryReceiptProtocol",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (n) {
        var t = n.commonMessageBase,
          r = n.ctx,
          a = n.groupMixin,
          i = n.makeAck,
          l = o("WAHandleGroupMessageProtocol").parseGroupMessage(a);
        return e(
          babelHelpers.extends({}, t, {
            parsedMessage: l,
            makeAck: i,
            makeDeliveryReceipt: o("WASendDeliveryReceiptProtocol")
              .makeDeliveryReceipt,
            makeRetryReceipt: o("WAHandleGroupMessageProtocol")
              .makeGrouplMessageRetryReceipt,
          }),
          r,
        ).then(o("WAResultOrError").makeResult);
      };
    }
    l.createHandleGroupMessageBranch = e;
  },
  98,
);
