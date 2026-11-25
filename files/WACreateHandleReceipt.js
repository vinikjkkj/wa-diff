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
      d,
      m = o("WATagsLogger").TAGS(["decision tree", "handleReceipt"]);
    function p(t) {
      var r,
        a,
        i,
        l,
        p,
        _,
        f = o(
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
        g = o(
          "WACreateHandleGroupReceiptBranch",
        ).createHandleGroupReceiptBranch({
          handleGroupReceipt:
            (i = t.groupMessage) == null ? void 0 : i.handleGroupReceipt,
          handleGroupRetryReceipt:
            (l = t.groupMessage) == null ? void 0 : l.handleGroupRetryReceipt,
        }),
        h = o(
          "WACreateHandlePeerAppdataReceiptBranch",
        ).createHandlePeerAppdataReceiptBranch({
          handlePeerAppdataReceipt:
            (p = t.appdataMessage) == null
              ? void 0
              : p.handlePeerAppdataReceipt,
          handlePeerAppdataRetryReceipt:
            (_ = t.appdataMessage) == null
              ? void 0
              : _.handlePeerAppdataRetryReceipt,
        });
      function y(e) {
        var t = e.makeAck,
          r = e.offline,
          a = e.serverTs,
          i = e.singleReceiptMixin,
          l = e.socketId,
          s = i.deliverBizRolesMixin,
          u = i.deliverPaidConversationAggregatedMixin,
          c = i.id,
          m = i.recipientMixin,
          p = i.singleStyleChatType,
          _ = i.singleStyleReceiptType;
        switch (p.name) {
          case "DeliverSingleIndividual":
            return f({
              aggregate: {
                aggregatedType: "none",
                stanzaId: c,
                receiptSender: p.value.from,
              },
              receiptType: _,
              makeAck: t,
              offline: r,
              serverTs: a,
              recipient: m == null ? void 0 : m.recipient,
              socketId: l,
            });
          case "Group":
          case "DeliverGroupStatus":
            return g({
              from: p.value.from,
              aggregate: {
                aggregatedType: "none",
                stanzaId: c,
                receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                  p.value.participant,
                ),
              },
              receiptType: _,
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
        return (d || (d = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(t()),
        );
      }
      function C(e) {
        var t = e.aggregateReceiptMixin,
          r = e.makeAck,
          a = e.offline,
          i = e.serverTs,
          l = e.socketId,
          s = t.deliverBizRolesMixin,
          u = t.deliverPaidConversationAggregatedMixin,
          c = t.id,
          m = t.listItem,
          p = t.recipientMixin,
          _ = t.senderAggregatedStyleChatType,
          h = t.senderAggregatedStyleReceiptType,
          y = [c].concat(
            m.map(function (e) {
              return e.id;
            }),
          );
        switch (_.name) {
          case "Individual":
            return f({
              aggregate: {
                aggregatedType: "sender",
                receiptSender: _.value.from,
                stanzaIds: y,
              },
              receiptType: h,
              makeAck: r,
              offline: a,
              serverTs: i,
              recipient: p == null ? void 0 : p.recipient,
              socketId: l,
            });
          case "Group":
          case "DeliverGroupStatus":
            return g({
              from: _.value.from,
              aggregate: {
                aggregatedType: "sender",
                stanzaIds: y,
                receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                  _.value.participant,
                ),
              },
              receiptType: h,
              makeAck: r,
              offline: a,
              serverTs: i,
              recipient: p == null ? void 0 : p.recipient,
              socketId: l,
            });
          case "DeliverStatus":
            break;
          case "Broadcast":
            break;
          default:
            _.name;
        }
        return (d || (d = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(r()),
        );
      }
      return function (r, a) {
        if (
          (m.DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "start handling...",
              ])),
          ),
          r.attrs.category === "peer")
        ) {
          m.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                '<receipt category="peer"> is not supported yet.',
              ])),
          );
          var t = o("WASmaxReceiptDeliverPeerRPC").receiveDeliverPeerRPC(r),
            i = t.makeDeliverPeerResponseSuccess;
          return (d || (d = n("Promise"))).resolve(
            o("WAResultOrError").makeResult(i()),
          );
        }
        var l = r.attrs.category;
        if (l === "peer_appdata") return h(r, a);
        var p = o("WASmaxReceiptDeliverRPC").receiveDeliverRPC(r),
          _ = p.makeDeliverResponseSuccess,
          b = p.parsedRequest,
          v = b.offlineMixin,
          S = b.receiptStyles,
          R = b.t,
          L = o("WATimeUtils").castToUnixTime(R),
          E = v == null ? void 0 : v.offline;
        switch (S.name) {
          case "DeliverMessageAggregatedStyle": {
            var k = S.value,
              I = k.from,
              T = k.id,
              D = k.messageAggregatedStyleReceiptType,
              x = k.participantsUser,
              $ = k.recipientMixin,
              P = o("WAJids").validateGroupJid(I);
            if (P == null) {
              m.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " server aggregated receipt is not supported",
                  ])),
                I,
              );
              break;
            }
            return g({
              aggregate: {
                aggregatedType: "server",
                stanzaId: T,
                receiptSenders: x.map(function (e) {
                  var t = e.jid,
                    n = e.t;
                  return { device: t, ts: o("WATimeUtils").castToUnixTime(n) };
                }),
              },
              from: P,
              receiptType: D,
              makeAck: _,
              offline: E,
              serverTs: L,
              recipient: $ == null ? void 0 : $.recipient,
              socketId: a,
            });
          }
          case "DeliverSenderAggregatedStyleSenderType": {
            var N = S.value,
              M = N.id,
              w =
                N.individualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              A = N.listItem,
              F = N.type,
              O = { value: { type: F }, name: "SenderType" },
              B = [M].concat(
                A.map(function (e) {
                  return e.id;
                }),
              );
            switch (w.name) {
              case "Group":
              case "DeliverGroupStatus":
                return g({
                  aggregate: {
                    aggregatedType: "sender",
                    stanzaIds: B,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      w.value.participant,
                    ),
                  },
                  from: w.value.from,
                  receiptType: O,
                  makeAck: _,
                  offline: E,
                  serverTs: L,
                  recipient: null,
                  socketId: a,
                });
              case "Broadcast":
                break;
              case "DeliverStatus":
                break;
              case "IndividualWithRecipient":
                return f({
                  aggregate: {
                    aggregatedType: "sender",
                    receiptSender: w.value.from,
                    stanzaIds: B,
                  },
                  receiptType: O,
                  makeAck: _,
                  offline: E,
                  serverTs: L,
                  recipient: w.value.recipient,
                  socketId: a,
                });
              default:
                w.name;
            }
            break;
          }
          case "DeliverSenderAggregatedStyle":
            return C({
              aggregateReceiptMixin: S.value,
              makeAck: _,
              serverTs: L,
              offline: E,
              socketId: a,
            });
          case "DeliverSingleStyleWithRecipient": {
            var W = S.value,
              q = W.id,
              U =
                W.individualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup,
              V = W.senderTypeOrRetryMixinGroup;
            switch (U.name) {
              case "IndividualWithRecipient":
                return f({
                  aggregate: {
                    aggregatedType: "none",
                    receiptSender: U.value.from,
                    stanzaId: q,
                  },
                  receiptType: V,
                  makeAck: _,
                  offline: E,
                  serverTs: L,
                  recipient: U.value.recipient,
                  socketId: a,
                });
              case "Group":
              case "DeliverGroupStatus":
                return g({
                  from: U.value.from,
                  aggregate: {
                    aggregatedType: "none",
                    stanzaId: q,
                    receiptSender: o("WAJids").unsafeCoerceToDeviceJid(
                      U.value.participant,
                    ),
                  },
                  receiptType: V,
                  makeAck: _,
                  offline: E,
                  serverTs: L,
                  recipient: null,
                  socketId: a,
                });
              case "DeliverStatus":
                break;
              case "Broadcast":
                break;
              default:
                U.name;
            }
            break;
          }
          case "DeliverSingleStyle":
            return y({
              singleReceiptMixin: S.value,
              makeAck: _,
              serverTs: L,
              offline: E,
              socketId: a,
            });
          case "DeliverBotUnavailableStyle": {
            m.WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "bot-unavailable receipt is not handled on Web",
                ])),
            );
            break;
          }
        }
        return (d || (d = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(_()),
        );
      };
    }
    l.createHandleReceipt = p;
  },
  98,
);
