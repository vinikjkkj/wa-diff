__d(
  "WASmaxInGroupsAddParticipantsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
      ).parseAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup:
              n.value,
          })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "add");
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(n, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(n, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
        u.value,
      );
      if (!c.success) return c;
      var d = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        m = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "participant",
          1,
          19999,
          e,
        );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            groupAddressingModeMixin: d.success ? d.value : null,
            addParticipant: m.value,
          })
        : m;
    }
    ((l.parseAddParticipantsResponseSuccessAddParticipant = e),
      (l.parseAddParticipantsResponseSuccess = s));
  },
  98,
);
