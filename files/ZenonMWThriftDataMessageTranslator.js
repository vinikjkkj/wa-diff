__d(
  "ZenonMWThriftDataMessageTranslator",
  [
    "MultiwayCommonTypes",
    "RequestStreamBodyUtils",
    "ZenonActorHooks",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageBody.dataMessageRequest;
      if (n) {
        var r = n.message.header,
          a = o(
            "ZenonMWThriftTranslatorUtils",
          ).getGenericMWThriftDataMessageData(n),
          i = o(
            "ZenonMWThriftTranslatorUtils",
          ).getGenericMWThriftDataMessageTopic(n),
          l = c(r.serviceRecipients);
        if (a != null && i != null) {
          var s,
            u = {
              data: a,
              eventName: "genericDataMessageRequest",
              recipientIDs: Array.from((s = r.recipients) != null ? s : []),
              serviceRecipients: l,
              topic: i,
            };
          t.push(u);
        }
      }
      return t;
    }
    function s(e, t) {
      var n = {
          data: o("RequestStreamBodyUtils").stringToUint8Array(t.data),
          topic: t.topic,
        },
        r = new Set(
          t.serviceRecipients.map(
            o("ZenonMWThriftTranslatorUtils").toThriftServiceRecipient,
          ),
        );
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: {
          dataMessageRequest: {
            message: {
              body: { genericMessage: n },
              header: {
                recipients: new Set(t.recipientIDs),
                sender: o("ZenonActorHooks").ZenonActor.getID(),
                serviceRecipients: r,
                topic_DEPRECATED: "",
              },
            },
          },
        },
        type: o("MultiwayCommonTypes").MessageType.DATA_MESSAGE,
      });
    }
    function u(e) {
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: { dataMessageResponse: { deliveryResult: {} } },
        type: o("MultiwayCommonTypes").MessageType.DATA_MESSAGE,
      });
    }
    function c(e) {
      var t = [];
      return (
        e == null ||
          e.forEach(function (e) {
            return t.push(
              o("ZenonMWThriftTranslatorUtils").toServiceRecipientType(e),
            );
          }),
        t
      );
    }
    ((l.fromThriftDataMessageRequest = e),
      (l.toThriftDataMessageRequest = s),
      (l.toThriftDataMessageResponse = u));
  },
  98,
);
