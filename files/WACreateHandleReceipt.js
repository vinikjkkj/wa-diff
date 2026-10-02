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
        if (r.attrs.category === "peer_appdata") return g(r, a);
        var l = o("WASmaxReceiptDeliverRPC").receiveDeliverRPC(r),
          m = l.makeDeliverResponseSuccess,
          p = l.parsedRequest,
          C = p.offlineMixin,
          b = p.receiptStyles,
          v = p.t,
          S = o("WATimeUtils").castToUnixTime(v),
          R = C == null ? void 0 : C.offline;
        switch (b.name) {
          case "DeliverMessageAggregatedStyle": {
            var L = b.value,
              E = L.from,
              k = L.id,
              I = L.messageAggregatedStyleReceiptType,
              T = L.participantsUser,
              D = L.recipientMixin,
              x = o("WAJids").validateGroupJid(E);
            if (x == null) {
              d.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " server aggregated receipt is not supported",
                  ])),
                E,
              );
              break;
            }
            return f({
              aggregate: {
                aggregatedType: "server",
                stanzaId: k,
                receiptSenders: T.map(function (e) {
                  var t = e.jid,
                    n = e.t;
                  return { device: t, ts: o("WATimeUtils").castToUnixTime(n) };
                }),
              },
              from: x,
              receiptType: I,
              makeAck: m,
              offline: R,
              serverTs: S,
              recipient: D == null ? void 0 : D.recipient,
              socketId: a,
            });
          }
          case "DeliverSenderAggregatedStyleSenderType": {
            var $ = b.value,
              P = $.id,
              N =
                $.individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              M = $.listItem,
              w = $.type,
              A = { value: { type: w }, name: "SenderType" },
              F = [P].concat(
                M.map(function (e) {
                  return e.id;
                }),
              );
            switch (N.name) {
              case "Group":
                return f({
                  aggregate: {
                    aggregatedType: "sender",
                    stanzaIds: F,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      N.value.participant,
                    ),
                  },
                  from: N.value.from,
                  receiptType: A,
                  makeAck: m,
                  offline: R,
                  serverTs: S,
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
                    receiptSender: N.value.from,
                    stanzaIds: F,
                  },
                  receiptType: A,
                  makeAck: m,
                  offline: R,
                  serverTs: S,
                  recipient: N.value.recipient,
                  socketId: a,
                });
            }
            break;
          }
          case "DeliverSenderAggregatedStyle":
            return y({
              aggregateReceiptMixin: b.value,
              makeAck: m,
              serverTs: S,
              offline: R,
              socketId: a,
            });
          case "DeliverSingleStyleWithRecipient": {
            var O = b.value,
              B = O.id,
              W =
                O.individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              q = O.senderTypeOrRetryMixinGroup;
            switch (W.name) {
              case "IndividualWithRecipient":
                return _({
                  aggregate: {
                    aggregatedType: "none",
                    receiptSender: W.value.from,
                    stanzaId: B,
                  },
                  receiptType: q,
                  makeAck: m,
                  offline: R,
                  serverTs: S,
                  recipient: W.value.recipient,
                  socketId: a,
                });
              case "Group":
                return f({
                  from: W.value.from,
                  aggregate: {
                    aggregatedType: "none",
                    stanzaId: B,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      W.value.participant,
                    ),
                  },
                  receiptType: q,
                  makeAck: m,
                  offline: R,
                  serverTs: S,
                  recipient: null,
                  socketId: a,
                });
              case "DeliverStatus":
                break;
              case "Broadcast":
                break;
              default:
                W.name;
            }
            break;
          }
          case "DeliverSingleStyle":
            return h({
              singleReceiptMixin: b.value,
              makeAck: m,
              serverTs: S,
              offline: R,
              socketId: a,
            });
        }
        return (c || (c = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(m()),
        );
      };
    }
    l.createHandleReceipt = m;
  },
  98,
);
