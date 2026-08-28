__d(
  "ZenonMWThriftStateSyncTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.messageBody.updateResponse,
        n = e.messageHeader.transactionId;
      if (!t) return [];
      var r = t.topic,
        o = t.version,
        a = {
          ackMessageId: n,
          eventName: "stateSyncUpdateResponse",
          topic: r,
          version: o,
        };
      return [a];
    }
    function s(e) {
      var t = e.messageBody.notifyRequest;
      if (!t) return [];
      var n = [];
      if (t.syncPayload != null)
        o("ZenonMWThriftTranslatorUtils").addThriftStateStoreSignalingEvents(
          t.syncPayload.stateStore,
          n,
          !0,
          !1,
        );
      else {
        var r = t.data,
          a = t.topic,
          i = t.version,
          l = {
            data: r,
            eventName: "stateSyncNotifyRequest",
            responseRequired: !0,
            topic: a,
            version: i,
          };
        n.push(l);
      }
      return n;
    }
    function u(e) {
      var t = e.messageBody.unsubscribeResponse,
        n = e.messageHeader.transactionId;
      if (!t) return [];
      var r = t.topic,
        o = t.version,
        a = {
          ackMessageId: n,
          eventName: "stateSyncUnsubscribeResponse",
          topic: r,
          version: o,
        };
      return [a];
    }
    function c(e, t) {
      var n = t.data,
        r = t.topic,
        a = t.version,
        i = {
          data: n,
          syncPayload: { stateStore: {}, stateStoreV2: {} },
          topic: r,
          topicId: null,
          version: a,
        };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { updateRequest: i },
        type: o("MultiwayCommonTypes").MessageType.UPDATE,
      });
    }
    function d(e, t) {
      var n = t.topic,
        r = t.version,
        a = { topic: n, version: r };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: { notifyResponse: a },
        type: o("MultiwayCommonTypes").MessageType.NOTIFY,
      });
    }
    function m(e, t) {
      var n = t.topic,
        r = t.version,
        a = { topic: n, topicId: null, version: r };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { unsubscribeRequest: a },
        type: o("MultiwayCommonTypes").MessageType.UNSUBSCRIBE,
      });
    }
    ((l.fromThriftUpdateResponse = e),
      (l.fromThriftNotifyRequest = s),
      (l.fromThriftUnsubscribeResponse = u),
      (l.toThriftUpdateRequest = c),
      (l.toThriftNotifyResponse = d),
      (l.toThriftUnsubscribeRequest = m));
  },
  98,
);
