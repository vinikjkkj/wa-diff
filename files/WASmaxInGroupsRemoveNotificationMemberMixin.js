__d(
  "WASmaxInGroupsRemoveNotificationMemberMixin",
  ["WAResultOrError", "WASmaxInGroupsParticipantMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "remove");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t, "v_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "prev_v_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "subject",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        t,
        "reason",
        "default_sub_group_demote",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "participant",
        1,
        19999,
        e,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            vId: r.value,
            prevVId: a.value,
            subject: i.value,
            reason: l.value,
            participant: s.value,
          })
        : s;
    }
    ((l.parseRemoveNotificationMemberParticipant = e),
      (l.parseRemoveNotificationMemberMixin = s));
  },
  98,
);
