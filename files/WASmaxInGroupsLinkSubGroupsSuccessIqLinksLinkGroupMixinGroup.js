__d(
  "WASmaxInGroupsLinkSubGroupsSuccessIqLinksLinkGroupMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsPendingAddRequestsNotAllowedMixin",
    "WASmaxInGroupsSubGroupConflictMixin",
    "WASmaxInGroupsSubGroupForbiddenMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupResourceLimitMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
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
        "WASmaxInGroupsSubGroupForbiddenMixin",
      ).parseSubGroupForbiddenMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupForbidden",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsSubGroupNotExistMixin",
      ).parseSubGroupNotExistMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotExist",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsSubGroupNotAcceptableMixin",
      ).parseSubGroupNotAcceptableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAcceptable",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsSubGroupConflictMixin",
      ).parseSubGroupConflictMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupConflict",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupResourceLimitMixin",
      ).parseSubGroupResourceLimitMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupResourceLimit",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsPendingAddRequestsNotAllowedMixin",
      ).parsePendingAddRequestsNotAllowedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "PendingAddRequestsNotAllowed",
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
              "SubGroupForbidden",
              "SubGroupNotExist",
              "SubGroupNotAcceptable",
              "SubGroupConflict",
              "SubGroupResourceLimit",
              "PendingAddRequestsNotAllowed",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    l.parseLinkSubGroupsSuccessIqLinksLinkGroupMixinGroup = e;
  },
  98,
);
