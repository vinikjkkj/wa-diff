__d(
  "MAWSharedProtocolQueueReceipt",
  ["MAWBridge", "Promise", "WAJids", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WATimeUtils").castToUnixTime(0);
    function u(e, t) {
      switch (e) {
        case "delivered":
        case "sender":
          return {
            deliveredWatermarkTs: t,
            lastReadActionTs: s,
            lastReadWatermarkTs: s,
          };
        case "read":
        case "read-self":
          return {
            deliveredWatermarkTs: s,
            lastReadActionTs: t,
            lastReadWatermarkTs: t,
          };
        default:
          return null;
      }
    }
    function c(e, t, n, r) {
      var a = u(t, r);
      return a == null
        ? null
        : {
            tag: "ReceivedReceipt",
            value: babelHelpers.extends(
              {
                chatJid: e,
                fbid: o("WAJids").userIdFromJid(o("WAJids").extractUserJid(n)),
              },
              a,
            ),
          };
    }
    function d(e) {
      switch (e.receiptType) {
        case "appdata":
          return [];
        case "group-server-agg":
          return e.receivers
            .map(function (t) {
              var n = t.device,
                r = t.ts;
              return c(e.chat, e.type, n, r);
            })
            .filter(Boolean);
        default: {
          var t = c(e.chat, e.type, e.from.author, e.ts);
          return t == null ? [] : [t];
        }
      }
    }
    function m(t) {
      var r = t.flatMap(function (e) {
        return d(e.receipt);
      });
      return (
        r.length > 0 &&
          o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "uiUpdate", { events: r }),
        (e || (e = n("Promise"))).resolve({
          followUpParams: void 0,
          toAck: t.map(function (e) {
            return e.stanzaQueueId;
          }),
        })
      );
    }
    l.sharedHandleIncomingReceiptStanza = m;
  },
  98,
);
