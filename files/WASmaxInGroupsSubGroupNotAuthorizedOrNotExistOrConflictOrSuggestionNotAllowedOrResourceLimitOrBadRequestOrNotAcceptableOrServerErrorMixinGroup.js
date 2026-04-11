__d(
  "WASmaxInGroupsSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsSubGroupBadRequestMixin",
    "WASmaxInGroupsSubGroupConflictMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupResourceLimitMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
    "WASmaxInGroupsSubGroupSuggestionNotAllowedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsSubGroupNotAuthorizedMixin",
      ).parseSubGroupNotAuthorizedMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAuthorized",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsSubGroupNotExistMixin",
      ).parseSubGroupNotExistMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotExist",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsSubGroupConflictMixin",
      ).parseSubGroupConflictMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupConflict",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsSubGroupSuggestionNotAllowedMixin",
      ).parseSubGroupSuggestionNotAllowedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupSuggestionNotAllowed",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsSubGroupResourceLimitMixin",
      ).parseSubGroupResourceLimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupResourceLimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupBadRequestMixin",
      ).parseSubGroupBadRequestMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupBadRequest",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsSubGroupNotAcceptableMixin",
      ).parseSubGroupNotAcceptableMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAcceptable",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsSubGroupServerErrorMixin",
      ).parseSubGroupServerErrorMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupServerError",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupNotAuthorized",
              "SubGroupNotExist",
              "SubGroupConflict",
              "SubGroupSuggestionNotAllowed",
              "SubGroupResourceLimit",
              "SubGroupBadRequest",
              "SubGroupNotAcceptable",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    l.parseSubGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup =
      e;
  },
  98,
);
