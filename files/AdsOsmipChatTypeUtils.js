__d(
  "AdsOsmipChatTypeUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "HUMAN_AGENT_MESSENGER",
      "AI_MESSENGER",
    ]);
    function l(t) {
      return t === e.AI_MESSENGER;
    }
    function s(t) {
      if (t.contentType === "CHAT") {
        var n;
        return (t == null || (n = t.osmipExtraData) == null
          ? void 0
          : n.isAdsAIChat) === !0
          ? e.AI_MESSENGER
          : e.HUMAN_AGENT_MESSENGER;
      }
      return null;
    }
    ((i.OSMIPChatType = e), (i.isAIChat = l), (i.getOsmipChatType = s));
  },
  66,
);
