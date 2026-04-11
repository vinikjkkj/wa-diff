__d(
  "WASmaxInGroupsGroupInfoParticipantNonAdminMixin",
  ["WASmaxInGroupsParticipantMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
      return (n.success, n);
    }
    l.parseGroupInfoParticipantNonAdminMixin = e;
  },
  98,
);
