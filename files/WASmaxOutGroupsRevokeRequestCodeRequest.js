__d(
  "WASmaxOutGroupsRevokeRequestCodeRequest",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function s(t) {
      var n = t.participantArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "revoke",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e3),
            ),
          ),
          t,
        );
      return r;
    }
    ((l.makeRevokeRequestCodeRequestRevokeParticipant = e),
      (l.makeRevokeRequestCodeRequest = s));
  },
  98,
);
