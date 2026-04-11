__d(
  "WASmaxInGroupsGetLinkedGroupsParticipantsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParticipantWithJidMixin",
      ).parseParticipantWithJidMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          phoneNumberMixin: r.success ? r.value : null,
        }),
      );
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "linked_groups_participants",
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
          "participant",
          1,
          19999,
          e,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              linkedGroupsParticipantsParticipant: s.value,
            }),
          )
        : s;
    }
    ((l.parseGetLinkedGroupsParticipantsResponseSuccessLinkedGroupsParticipantsParticipant =
      e),
      (l.parseGetLinkedGroupsParticipantsResponseSuccess = s));
  },
  98,
);
