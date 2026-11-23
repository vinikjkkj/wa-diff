__d(
  "WAWebDBReceivedTemplateMessages",
  [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebInteractiveMessageType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200;
    async function s(t, n) {
      var a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["messageRangeIndex"],
            o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
              t,
              o("WAWebDBMessageRangeIndex").MessagePropertyType
                .IncomingChatMessage,
              n,
            ),
            o("WAWebDBMessageStoreUtils").endOfMessageRange(
              t,
              o("WAWebDBMessageRangeIndex").MessagePropertyType
                .IncomingChatMessage,
            ),
            { lowerInclusive: !0, reverse: !0, limit: e, shouldDecrypt: !1 },
          ),
        i = [];
      for (var l of a)
        l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          l.isFromTemplate === !0 &&
          i.push({
            id: r("WAWebMsgKey").fromString(l.id),
            interactivePayload: l.interactivePayload,
            interactiveType: r("WAWebInteractiveMessageType").cast(
              l.interactiveType,
            ),
            isCarouselCard: !1,
            isFromTemplate: !0,
            nativeFlowName: l.nativeFlowName,
            t: l.t,
            type: l.type,
          });
      return i;
    }
    l.getTemplatesReceivedSince = s;
  },
  98,
);
