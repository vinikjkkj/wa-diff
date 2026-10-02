__d(
  "WASmaxInGroupsParticipantUsernameWithCountryCodeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "participant_username");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "participant_country_code");
      return n.success
        ? o("WAResultOrError").makeResult({
            participantUsername: t.value,
            participantCountryCode: n.value,
          })
        : n;
    }
    l.parseParticipantUsernameWithCountryCodeMixin = e;
  },
  98,
);
