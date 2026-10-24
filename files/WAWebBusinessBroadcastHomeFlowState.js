__d(
  "WAWebBusinessBroadcastHomeFlowState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e === t) return !0;
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) {
        var r,
          o,
          a = e[n],
          i = t[n];
        if (
          a.broadcastJid !== i.broadcastJid ||
          a.name !== i.name ||
          a.recipientCount !== i.recipientCount ||
          ((r = a.isRecipientCountPending) != null ? r : !1) !==
            ((o = i.isRecipientCountPending) != null ? o : !1)
        )
          return !1;
      }
      return !0;
    }
    function l(e) {
      return e.sentAt > 0 ? e.sentAt : e.createdTimestamp;
    }
    function s(e, t, n) {
      return e ? t : n;
    }
    ((i.areAudienceListsEqual = e),
      (i.getCampaignSortTimestamp = l),
      (i.getHomeCreationAction = s));
  },
  66,
);
