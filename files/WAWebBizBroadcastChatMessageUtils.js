__d(
  "WAWebBizBroadcastChatMessageUtils",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
    "WAWebChatCollection",
    "WAWebChatSendDeleteMsgsBridge",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if (t != null)
        try {
          var r = o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(t),
            a = o("WAWebWidFactory").createWid(n),
            i = o("WAWebChatCollection").ChatCollection.get(a);
          if (i == null) return;
          var l = i.msgs.getModelsArray().find(function (e) {
            return e.id.id === r;
          });
          if (l == null) return;
          o("WAWebChatSendDeleteMsgsBridge")
            .sendDeleteMsgs([l], !1, a)
            .then(function () {
              i.msgs.remove(l);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:chat-message] delete msg failed",
                    ])),
                )
                .catching(t);
            });
        } catch (e) {
          e instanceof Error &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:chat-message] Error in deleteBroadcastChatMessage",
                  ])),
              )
              .catching(e);
        }
    }
    l.deleteBroadcastChatMessage = u;
  },
  98,
);
