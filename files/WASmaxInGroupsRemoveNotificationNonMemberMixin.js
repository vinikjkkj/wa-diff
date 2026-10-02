__d(
  "WASmaxInGroupsRemoveNotificationNonMemberMixin",
  ["WAResultOrError", "WASmaxInGroupsParticipantMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "remove");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "participant");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "subject",
      );
      if (!r.success) return r;
      var a = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(
        n.value,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            subject: r.value,
            participantParticipantMixin: a.value,
          })
        : a;
    }
    l.parseRemoveNotificationNonMemberMixin = e;
  },
  98,
);
