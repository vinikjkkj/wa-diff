__d(
  "WASmaxInGroupsCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "description");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "406",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "sub_group_suggestion",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "description",
        e,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrGroupJid(a.value, "jid");
      if (!l.success) return l;
      var s = o("WASmaxParseJid").attrUserJid(a.value, "creator");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(
        a.value,
        "creation",
        0,
        void 0,
      );
      if (!u.success) return u;
      var c = o(
          "WASmaxInGroupsGroupCreatorPhoneNumberMixin",
        ).parseGroupCreatorPhoneNumberMixin(a.value),
        d = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(
          t,
          n,
        );
      if (!d.success) return d;
      var m = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(t);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            subGroupSuggestionJid: l.value,
            subGroupSuggestionCreator: s.value,
            subGroupSuggestionCreation: u.value,
            subGroupSuggestionGroupCreatorPhoneNumberMixin: c.success
              ? c.value
              : null,
          },
          d.value,
          {
            groupAddressingModeMixin: m.success ? m.value : null,
            subGroupSuggestionDescription: i.value,
          },
        ),
      );
    }
    ((l.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccessSubGroupSuggestionDescription =
      e),
      (l.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess = s));
  },
  98,
);
