__d(
  "WASmaxInGroupsParticipantMixin",
  ["WAResultOrError", "WASmaxInGroupsParticipantMixins", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_label",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "participant_label_mtime",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            participantLabel: n.value,
            participantLabelMtime: r.value,
            participantMixins: a.value,
          })
        : a;
    }
    l.parseParticipantMixin = e;
  },
  98,
);
