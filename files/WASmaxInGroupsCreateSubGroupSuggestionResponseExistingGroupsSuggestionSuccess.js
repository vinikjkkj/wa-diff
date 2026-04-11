__d(
  "WASmaxInGroupsCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup",
      ).parseSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup(
        e,
      );
      return o("WAResultOrError").makeResult({
        jid: n.value,
        subGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup:
          r.success ? r.value : null,
      });
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "sub_group_suggestion",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        s = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "group",
          1,
          1e3,
          e,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              subGroupSuggestionGroup: s.value,
            }),
          )
        : s;
    }
    ((l.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccessSubGroupSuggestionGroup =
      e),
      (l.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess =
        s));
  },
  98,
);
