__d(
  "WASmaxOutGroupsPromoteDemoteRequest",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function s(t) {
      var n = t.participantArgs,
        r = o("WASmaxJsx").smax(
          "promote",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 1024),
        );
      return r;
    }
    function u(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function c(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "demote",
          null,
          o("WASmaxChildren").REPEATED_CHILD(u, t, 0, 1024),
        );
      return n;
    }
    function d(e) {
      var t = e.promoteArgs,
        n = e.demoteArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxChildren").OPTIONAL_CHILD(s, t),
            o("WASmaxChildren").OPTIONAL_CHILD(c, n),
          ),
          e,
        );
      return r;
    }
    ((l.makePromoteDemoteRequestPromoteParticipant = e),
      (l.makePromoteDemoteRequestPromote = s),
      (l.makePromoteDemoteRequestDemoteParticipant = u),
      (l.makePromoteDemoteRequestDemote = c),
      (l.makePromoteDemoteRequest = d));
  },
  98,
);
