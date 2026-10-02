__d(
  "WAHandleIncomingMsg",
  [
    "Promise",
    "WAHandleAvailableIndividualMsg",
    "WAHandleGroupMsg",
    "WAHandleUnavailableIndividualMsg",
    "WAMsgLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "decodeMessage",
        "makeAck",
        "makeDeliveryReceipt",
        "makeRetryReceipt",
        "parsedMessage",
        "sendDeliveryReceipt",
        "sendRetryReceipt",
      ],
      s = [
        "makeAck",
        "makeDeliveryReceipt",
        "makeRetryReceipt",
        "parsedMessage",
      ],
      u,
      c = function (r, a) {
        var t = r.decodeMessage,
          i = r.makeAck,
          l = r.makeDeliveryReceipt,
          s = r.makeRetryReceipt,
          c = r.parsedMessage,
          d = r.sendDeliveryReceipt,
          m = r.sendRetryReceipt,
          p = babelHelpers.objectWithoutPropertiesLoose(r, e),
          _ = o("WAMsgLogger").startNewWAMessageLogger({
            commonMessageBase: p,
            msg: c,
          });
        return c.type === "Unavailable"
          ? o("WAHandleUnavailableIndividualMsg")
              .handleUnavailableMsg(p, c, i, _)
              .catch(function (e) {
                return (
                  o("WAMsgLogger").endWAMessageReceiveRuntimeError(_, e),
                  (u || (u = n("Promise"))).reject(e)
                );
              })
          : o("WAHandleAvailableIndividualMsg")
              .handleIndividualMsg(p, c, i, l, s, a, _)
              .catch(function (e) {
                return (
                  o("WAMsgLogger").endWAMessageReceiveRuntimeError(_, e),
                  (u || (u = n("Promise"))).reject(e)
                );
              });
      },
      d = function (t, r) {
        var e = t.makeAck,
          a = t.makeDeliveryReceipt,
          i = t.makeRetryReceipt,
          l = t.parsedMessage,
          c = babelHelpers.objectWithoutPropertiesLoose(t, s),
          d = o("WAMsgLogger").startNewWAMessageLogger({
            commonMessageBase: c,
            msg: l,
          });
        return o("WAHandleGroupMsg")
          .handleGroupMsg(c, l, e, a, i, r, d)
          .catch(function (e) {
            return (
              o("WAMsgLogger").endWAMessageReceiveRuntimeError(d, e),
              (u || (u = n("Promise"))).reject(e)
            );
          });
      };
    ((l.handleIncomingIndividualMsg = c), (l.handleGroupMessage = d));
  },
  98,
);
