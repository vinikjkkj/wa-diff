__d(
  "WASendAggregatedDeliveryReceiptProtocol",
  [
    "WAGlobals",
    "WAJids",
    "WASmaxOutReceiptPublishDeliveryRequest",
    "WASmaxOutReceiptPublishSenderRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.chat,
        n = e.from,
        r = e.stanzaIdList;
      return o("WAJids").switchOnMsgrChatJidType(t, {
        group: function (t) {
          var e = o("WAJids").extractUserJid(n);
          return e === o("WAGlobals").getMyUserJid()
            ? c({ stanzaIdList: r, from: n, chat: t })
            : d({ from: n, stanzaIdList: r, chat: t });
        },
        user: function (t) {
          var e = o("WAJids").extractUserJid(n);
          return e === o("WAGlobals").getMyUserJid()
            ? u({ from: n, stanzaIdList: r })
            : s({ stanzaIdList: r, from: n });
        },
      });
    }
    function s(e) {
      var t = e.from,
        n = e.stanzaIdList,
        r = {
          device: { deviceMixinsArgs: { individualDevice: { receiptTo: t } } },
        },
        a = {
          senderAggregatedPublish: {
            itemArgs: n.slice(1).map(function (e) {
              return { itemId: e };
            }),
            receiptId: n[0],
          },
        },
        i = {
          senderAggregatedPublishOrSingleMixinGroupArgs: a,
          userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs: r,
        };
      return o(
        "WASmaxOutReceiptPublishDeliveryRequest",
      ).makePublishDeliveryRequest(i);
    }
    function u(e) {
      var t = e.from,
        n = e.stanzaIdList,
        r = {
          publishSenderIndividualDeviceSenderType: {
            receiptRecipient: o("WAJids").extractUserJid(t),
            receiptTo: t,
          },
        },
        a = {
          senderAggregatedPublish: {
            itemArgs: n.slice(1).map(function (e) {
              return { itemId: e };
            }),
            receiptId: n[0],
          },
        },
        i = {
          senderAggregatedPublishOrSingleMixinGroupArgs: a,
          publishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroupArgs:
            r,
        };
      return o("WASmaxOutReceiptPublishSenderRequest").makePublishSenderRequest(
        i,
      );
    }
    function c(e) {
      var t = e.chat,
        n = e.from,
        r = e.stanzaIdList,
        a = {
          publishSenderGroupDeviceSenderType: {
            receiptTo: t,
            receiptParticipant: n,
          },
        },
        i = {
          senderAggregatedPublish: {
            itemArgs: r.slice(1).map(function (e) {
              return { itemId: e };
            }),
            receiptId: r[0],
          },
        },
        l = {
          publishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroupArgs:
            a,
          senderAggregatedPublishOrSingleMixinGroupArgs: i,
        };
      return o("WASmaxOutReceiptPublishSenderRequest").makePublishSenderRequest(
        l,
      );
    }
    function d(e) {
      var t = e.chat,
        n = e.from,
        r = e.stanzaIdList,
        a = {
          device: {
            deviceMixinsArgs: {
              groupDevice: { receiptTo: t, receiptParticipant: n },
            },
          },
        },
        i = {
          senderAggregatedPublish: {
            itemArgs: r.slice(1).map(function (e) {
              return { itemId: e };
            }),
            receiptId: r[0],
          },
        },
        l = {
          senderAggregatedPublishOrSingleMixinGroupArgs: i,
          userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs: a,
        };
      return o(
        "WASmaxOutReceiptPublishDeliveryRequest",
      ).makePublishDeliveryRequest(l);
    }
    l.makeAggregatedDeliveryReceipts = e;
  },
  98,
);
