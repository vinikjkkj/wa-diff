__d(
  "WASendDeliveryReceiptProtocol",
  [
    "Promise",
    "WAComms",
    "WAGlobals",
    "WAJids",
    "WASmaxOutReceiptPublishDeliveryRequest",
    "WASmaxOutReceiptPublishSenderRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r) {
        var t = r.author,
          a = r.from,
          i = r.stanzaId;
        return o("WAJids").isAuthorMe(t)
          ? (e || (e = n("Promise"))).resolve(
              o("WAComms").castSmaxStanza(
                p({
                  recipient: o("WAGlobals").getMyUserJid(),
                  stanzaId: i,
                  recipientDevice: a,
                }),
              ),
            )
          : (e || (e = n("Promise"))).resolve(
              o("WAComms").castSmaxStanza(
                m({ recipient: t, from: a, stanzaId: i }),
              ),
            );
      };
    function u(e) {
      var t = e.chat,
        n = e.from,
        r = e.stanzaId,
        a = o("WAJids").extractUserJid(n);
      return o("WAJids").switchOnMsgrChatJidType(t, {
        group: function (t) {
          return a === o("WAGlobals").getMyUserJid()
            ? c({ chat: t, from: n, stanzaId: r })
            : d({ chat: t, from: n, stanzaId: r });
        },
        user: function (t) {
          return a === o("WAGlobals").getMyUserJid()
            ? p({ recipient: a, recipientDevice: n, stanzaId: r })
            : m({ recipient: a, from: n, stanzaId: r });
        },
      });
    }
    function c(e) {
      var t = e.chat,
        n = e.from,
        r = e.stanzaId,
        a = {
          publishSenderGroupDeviceSenderType: {
            receiptTo: t,
            receiptParticipant: n,
          },
        },
        i = { single: { receiptId: r } },
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
        r = e.stanzaId,
        a = {
          device: {
            deviceMixinsArgs: {
              groupDevice: { receiptTo: t, receiptParticipant: n },
            },
          },
        },
        i = { single: { receiptId: r } },
        l = {
          senderAggregatedPublishOrSingleMixinGroupArgs: i,
          userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs: a,
        };
      return o(
        "WASmaxOutReceiptPublishDeliveryRequest",
      ).makePublishDeliveryRequest(l);
    }
    function m(e) {
      var t = e.from,
        n = e.stanzaId,
        r = {
          device: { deviceMixinsArgs: { individualDevice: { receiptTo: t } } },
        },
        a = { single: { receiptId: n } },
        i = {
          senderAggregatedPublishOrSingleMixinGroupArgs: a,
          userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs: r,
        };
      return o(
        "WASmaxOutReceiptPublishDeliveryRequest",
      ).makePublishDeliveryRequest(i);
    }
    function p(e) {
      var t = e.recipient,
        n = e.recipientDevice,
        r = e.stanzaId,
        a = {
          publishSenderIndividualDeviceSenderType: {
            receiptRecipient: t,
            receiptTo: n,
          },
        },
        i = { single: { receiptId: r } },
        l = {
          publishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroupArgs:
            a,
          senderAggregatedPublishOrSingleMixinGroupArgs: i,
        };
      return o("WASmaxOutReceiptPublishSenderRequest").makePublishSenderRequest(
        l,
      );
    }
    ((l.sendIndividualMessageDeliveryReceipt = s), (l.makeDeliveryReceipt = u));
  },
  98,
);
