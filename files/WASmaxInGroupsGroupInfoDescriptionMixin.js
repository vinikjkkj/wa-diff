__d(
  "WASmaxInGroupsGroupInfoDescriptionMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "description");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "body");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentString(n.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInGroupsParticipantIdentityMixin",
      ).parseParticipantIdentityMixin(e);
      return o("WAResultOrError").makeResult({
        id: r.value,
        participant: a.value,
        t: i.value,
        bodyElementValue: l.value,
        participantIdentityMixin: s.success ? s.value : null,
      });
    }
    l.parseGroupInfoDescriptionMixin = e;
  },
  98,
);
