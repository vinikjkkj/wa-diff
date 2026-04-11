__d(
  "WASmaxInGroupsGroupInfoAttributesMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorIdentityMixin",
    "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxInGroupsSubjectOwnerIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "creator",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "creation", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "p_v_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "a_v_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "s_t",
        0,
        void 0,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "s_o",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "open_thread_id",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "size",
        0,
        19999,
      );
      if (!m.success) return m;
      var p = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        _ = o(
          "WASmaxInGroupsSubjectOwnerIdentityMixin",
        ).parseSubjectOwnerIdentityMixin(e),
        f = o(
          "WASmaxInGroupsGroupCreatorIdentityMixin",
        ).parseGroupCreatorIdentityMixin(e),
        g = o(
          "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
        ).parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup(e);
      return g.success
        ? o("WAResultOrError").makeResult({
            id: r.value,
            creator: a.value,
            creation: i.value,
            pVId: l.value,
            aVId: s.value,
            sT: u.value,
            sO: c.value,
            openThreadId: d.value,
            size: m.value,
            groupAddressingModeMixin: p.success ? p.value : null,
            subjectOwnerIdentityMixin: _.success ? _.value : null,
            groupCreatorIdentityMixin: f.success ? f.value : null,
            namedSubjectOrUnnamedSubjectFallbackMixinGroup: g.value,
            hasMissingParticipantIdentification: n.value != null,
          })
        : g;
    }
    l.parseGroupInfoAttributesMixin = e;
  },
  98,
);
