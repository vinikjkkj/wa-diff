__d(
  "WACreateHandleReceipt",
  [
    "Promise",
    "WACreateHandleGroupReceiptBranch",
    "WACreateHandleIndividualReceiptBranch",
    "WACreateHandlePeerAppdataReceiptBranch",
    "WAJids",
    "WAResultOrError",
    "WASmaxReceiptDeliverPeerRPC",
    "WASmaxReceiptDeliverRPC",
    "WATagsLogger",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATagsLogger").TAGS(["decision tree", "handleReceipt"]);
    function m(t) {
      var r,
        a,
        i,
        l,
        m,
        p,
        _ = o(
          "WACreateHandleIndividualReceiptBranch",
        ).createHandleIndividualReceiptBranch({
          handleIndividualReceipt:
            (r = t.individualMessage) == null
              ? void 0
              : r.handleIndividualReceipt,
          handleIndividualRetryReceipt:
            (a = t.individualMessage) == null
              ? void 0
              : a.handleIndividualRetryReceipt,
        }),
        f = o(
          "WACreateHandleGroupReceiptBranch",
        ).createHandleGroupReceiptBranch({
          handleGroupReceipt:
            (i = t.groupMessage) == null ? void 0 : i.handleGroupReceipt,
          handleGroupRetryReceipt:
            (l = t.groupMessage) == null ? void 0 : l.handleGroupRetryReceipt,
        }),
        g = o(
          "WACreateHandlePeerAppdataReceiptBranch",
        ).createHandlePeerAppdataReceiptBranch({
          handlePeerAppdataReceipt:
            (m = t.appdataMessage) == null
              ? void 0
              : m.handlePeerAppdataReceipt,
          handlePeerAppdataRetryReceipt:
            (p = t.appdataMessage) == null
              ? void 0
              : p.handlePeerAppdataRetryReceipt,
        });
      function h(e) {
        var t = e.makeAck,
          r = e.offline,
          a = e.serverTs,
          i = e.singleReceiptMixin,
          l = e.socketId,
          s = i.deliverBizRolesMixin,
          u = i.deliverPaidConversationAggregatedMixin,
          d = i.id,
          m = i.recipientMixin,
          p = i.singleStyleChatType,
          g = i.singleStyleReceiptType;
        switch (p.name) {
          case "Individual":
            return _({
              aggregate: {
                aggregatedType: "none",
                stanzaId: d,
                receiptSender: p.value.from,
              },
              receiptType: g,
              makeAck: t,
              offline: r,
              serverTs: a,
              recipient: m == null ? void 0 : m.recipient,
              socketId: l,
            });
          case "Group":
            return f({
              from: p.value.from,
              aggregate: {
                aggregatedType: "none",
                stanzaId: d,
                receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                  p.value.participant,
                ),
              },
              receiptType: g,
              makeAck: t,
              offline: r,
              serverTs: a,
              recipient: m == null ? void 0 : m.recipient,
              socketId: l,
            });
          case "DeliverStatus":
            break;
          case "Broadcast":
            break;
          case "NewsletterDeliver":
            break;
          default:
            p.name;
        }
        return (c || (c = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(t()),
        );
      }
      function y(e) {
        var t = e.aggregateReceiptMixin,
          r = e.makeAck,
          a = e.offline,
          i = e.serverTs,
          l = e.socketId,
          s = t.deliverBizRolesMixin,
          u = t.deliverPaidConversationAggregatedMixin,
          d = t.id,
          m = t.individualOrGroupOrDeliverStatusOrBroadcastMixinGroup,
          p = t.listItem,
          g = t.recipientMixin,
          h = t.senderAggregatedStyleReceiptType,
          y = [d].concat(
            p.map(function (e) {
              return e.id;
            }),
          );
        switch (m.name) {
          case "Individual":
            return _({
              aggregate: {
                aggregatedType: "sender",
                receiptSender: m.value.from,
                stanzaIds: y,
              },
              receiptType: h,
              makeAck: r,
              offline: a,
              serverTs: i,
              recipient: g == null ? void 0 : g.recipient,
              socketId: l,
            });
          case "Group":
            return f({
              from: m.value.from,
              aggregate: {
                aggregatedType: "sender",
                stanzaIds: y,
                receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                  m.value.participant,
                ),
              },
              receiptType: h,
              makeAck: r,
              offline: a,
              serverTs: i,
              recipient: g == null ? void 0 : g.recipient,
              socketId: l,
            });
          case "DeliverStatus":
            break;
          case "Broadcast":
            break;
        }
        return (c || (c = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(r()),
        );
      }
      return function (r, a) {
        if (
          (d.DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "start handling...",
              ])),
          ),
          r.attrs.category === "peer")
        ) {
          d.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                '<receipt category="peer"> is not supported yet.',
              ])),
          );
          var t = o("WASmaxReceiptDeliverPeerRPC").receiveDeliverPeerRPC(r),
            i = t.makeDeliverPeerResponseSuccess;
          return (c || (c = n("Promise"))).resolve(
            o("WAResultOrError").makeResult(i()),
          );
        }
        var l = r.attrs.category;
        if (l === "peer_appdata") return g(r, a);
        var m = o("WASmaxReceiptDeliverRPC").receiveDeliverRPC(r),
          p = m.makeDeliverResponseSuccess,
          C = m.parsedRequest,
          b = C.offlineMixin,
          v = C.receiptStyles,
          S = C.t,
          R = o("WATimeUtils").castToUnixTime(S),
          L = b == null ? void 0 : b.offline;
        switch (v.name) {
          case "DeliverMessageAggregatedStyle": {
            var E = v.value,
              k = E.from,
              I = E.id,
              T = E.messageAggregatedStyleReceiptType,
              D = E.participantsUser,
              x = E.recipientMixin,
              $ = o("WAJids").validateGroupJid(k);
            if ($ == null) {
              d.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " server aggregated receipt is not supported",
                  ])),
                k,
              );
              break;
            }
            return f({
              aggregate: {
                aggregatedType: "server",
                stanzaId: I,
                receiptSenders: D.map(function (e) {
                  var t = e.jid,
                    n = e.t;
                  return { device: t, ts: o("WATimeUtils").castToUnixTime(n) };
                }),
              },
              from: $,
              receiptType: T,
              makeAck: p,
              offline: L,
              serverTs: R,
              recipient: x == null ? void 0 : x.recipient,
              socketId: a,
            });
          }
          case "DeliverSenderAggregatedStyleSenderType": {
            var P = v.value,
              N = P.id,
              M =
                P.individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              w = P.listItem,
              A = P.type,
              F = { value: { type: A }, name: "SenderType" },
              O = [N].concat(
                w.map(function (e) {
                  return e.id;
                }),
              );
            switch (M.name) {
              case "Group":
                return f({
                  aggregate: {
                    aggregatedType: "sender",
                    stanzaIds: O,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      M.value.participant,
                    ),
                  },
                  from: M.value.from,
                  receiptType: F,
                  makeAck: p,
                  offline: L,
                  serverTs: R,
                  recipient: null,
                  socketId: a,
                });
              case "Broadcast":
                break;
              case "DeliverStatus":
                break;
              case "IndividualWithRecipient":
                return _({
                  aggregate: {
                    aggregatedType: "sender",
                    receiptSender: M.value.from,
                    stanzaIds: O,
                  },
                  receiptType: F,
                  makeAck: p,
                  offline: L,
                  serverTs: R,
                  recipient: M.value.recipient,
                  socketId: a,
                });
            }
            break;
          }
          case "DeliverSenderAggregatedStyle":
            return y({
              aggregateReceiptMixin: v.value,
              makeAck: p,
              serverTs: R,
              offline: L,
              socketId: a,
            });
          case "DeliverSingleStyleWithRecipient": {
            var B = v.value,
              W = B.id,
              q =
                B.individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              U = B.senderTypeOrRetryMixinGroup;
            switch (q.name) {
              case "IndividualWithRecipient":
                return _({
                  aggregate: {
                    aggregatedType: "none",
                    receiptSender: q.value.from,
                    stanzaId: W,
                  },
                  receiptType: U,
                  makeAck: p,
                  offline: L,
                  serverTs: R,
                  recipient: q.value.recipient,
                  socketId: a,
                });
              case "Group":
                return f({
                  from: q.value.from,
                  aggregate: {
                    aggregatedType: "none",
                    stanzaId: W,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      q.value.participant,
                    ),
                  },
                  receiptType: U,
                  makeAck: p,
                  offline: L,
                  serverTs: R,
                  recipient: null,
                  socketId: a,
                });
              case "DeliverStatus":
                break;
              case "Broadcast":
                break;
              default:
                q.name;
            }
            break;
          }
          case "DeliverSingleStyle":
            return h({
              singleReceiptMixin: v.value,
              makeAck: p,
              serverTs: R,
              offline: L,
              socketId: a,
            });
        }
        return (c || (c = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(p()),
        );
      };
    }
    l.createHandleReceipt = m;
  },
  98,
);
