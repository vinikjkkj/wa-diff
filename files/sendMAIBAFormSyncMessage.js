__d(
  "sendMAIBAFormSyncMessage",
  ["MAIBASendMessageV3Enabled", "MAIBASendMessageV4Enabled", "Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, i) {
      return o("MAIBASendMessageV4Enabled").MAIBASendMessageV4Enabled() ||
        o("MAIBASendMessageV3Enabled").MAIBASendMessageV3Enabled()
        ? (e || (e = n("Promise"))).reject(
            r("err")("Form sync needs the legacy V2 send"),
          )
        : new (e || (e = n("Promise")))(function (e, n) {
            var r;
            t({
              adAccountID: a.adAccountID,
              entrypoint: (r = a.entrypoint) != null ? r : void 0,
              externalConversationId: a.conversationID,
              hideUserMessage: !0,
              isSentFromOutOfChat: !1,
              isSilent: !0,
              message: i,
              messageType: "CTA_POSTBACK",
              onCompleted: e,
              onError: n,
              postback_payload: "lwi_form_sync",
              skipInflightTracking: !0,
              skipOptimisticMessages: !0,
            });
          });
    }
    l.default = s;
  },
  98,
);
