__d(
  "WASmaxInGroupsCreateParticipantAddedMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "join_time",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      return o("WAResultOrError").makeResult({
        type: n.value,
        joinTime: r.value,
        participantNotAddressableMixin: a.success ? a.value : null,
      });
    }
    l.parseCreateParticipantAddedMixin = e;
  },
  98,
);
