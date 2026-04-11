__d(
  "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup",
      ).parseParticipantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup:
                r.value,
            }),
          )
        : r;
    }
    l.parseNonRegisteredWaUserParticipantErrorLidResponseMixin = e;
  },
  98,
);
