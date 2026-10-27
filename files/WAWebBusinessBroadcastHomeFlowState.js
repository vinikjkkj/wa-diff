__d(
  "WAWebBusinessBroadcastHomeFlowState",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "HOME_SCREEN",
      "UNSUBSCRIBE_RECIPIENTS",
      "NEW_BROADCAST",
      "CREATE_AUDIENCE",
      "EDIT_AUDIENCE",
      "IMPORT_AUDIENCE",
      "IMPORT_AUDIENCES",
      "ADD_BB_PRO_RECIPIENTS",
      "REMOVE_BB_PRO_RECIPIENTS",
    ]);
    function l(e, t) {
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
    function s(e) {
      return e.sentAt > 0 ? e.sentAt : e.createdTimestamp;
    }
    function u(t, n) {
      return n ? e.HOME_SCREEN : t;
    }
    ((i.BroadcastHomeFlowStep = e),
      (i.areAudienceListsEqual = l),
      (i.getCampaignSortTimestamp = s),
      (i.getActiveHomeFlowStep = u));
  },
  66,
);
