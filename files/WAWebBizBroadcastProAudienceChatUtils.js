__d(
  "WAWebBizBroadcastProAudienceChatUtils",
  ["WAWebBizBroadcastsAudienceUtils", "WAWebBroadcastListAction", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    async function s(t, n) {
      var a, i, l;
      if (String(t.id).trim() === "")
        throw r("err")("BB Pro audience must have a nonempty ID");
      var s =
        (a =
          (i =
            (l = o("WAWebBizBroadcastsAudienceUtils")
              .getBroadcastChatsAsAudiences()
              .find(function (e) {
                return e.customAudienceFbid === t.id;
              })) == null
              ? void 0
              : l.broadcastJid) != null
            ? i
            : n.get(t.id)) != null
          ? a
          : t.broadcastJid;
      if (s != null) return s;
      var u = e.get(t.id);
      if (u != null) {
        var c = await u;
        return (n.set(t.id, c), c);
      }
      var d = o("WAWebBroadcastListAction").createBroadcastListAction({
        broadcastListName: t.name,
        contacts: [],
        customAudienceFbid: String(t.id),
      });
      e.set(t.id, d);
      try {
        var m = await d;
        return (n.set(t.id, m), m);
      } finally {
        e.delete(t.id);
      }
    }
    l.resolveAudienceBroadcastJid = s;
  },
  98,
);
