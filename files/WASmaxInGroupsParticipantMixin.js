__d(
  "WASmaxInGroupsParticipantMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsParticipantMixins",
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
        o("WASmaxParseUtils").attrString,
        e,
        "participant_label",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "participant_label_mtime",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "join_time",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "group_history_sent",
        o("WASmaxInGroupsEnums").ENUM_FALSE_TRUE,
      );
      if (!l.success) return l;
      var s = o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            participantLabel: r.value,
            participantLabelMtime: a.value,
            joinTime: i.value,
            groupHistorySent: l.value,
            participantMixins: s.value,
          })
        : s;
    }
    l.parseParticipantMixin = e;
  },
  98,
);
