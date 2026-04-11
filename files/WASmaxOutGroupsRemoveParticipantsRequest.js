__d(
  "WASmaxOutGroupsRemoveParticipantsRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").JID(t) });
      return n;
    }
    function s(t) {
      var n = t.participantArgs,
        r = t.hasRemoveLinkedGroupsTrue,
        a = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "remove",
              { linked_groups: o("WASmaxAttrs").OPTIONAL_LITERAL("true", r) },
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1024),
            ),
          ),
          t,
        );
      return a;
    }
    ((l.makeRemoveParticipantsRequestRemoveParticipant = e),
      (l.makeRemoveParticipantsRequest = s));
  },
  98,
);
