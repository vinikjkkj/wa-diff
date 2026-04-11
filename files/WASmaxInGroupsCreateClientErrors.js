__d(
  "WASmaxInGroupsCreateClientErrors",
  [
    "WAResultOrError",
    "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
    "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceConstraintMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorResourceConstraintMixin",
      ).parseIQErrorResourceConstraintMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceConstraint",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
      ).parseCreateOrAddGroupRateLimitErrorMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "CreateOrAddGroupRateLimitError",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
      ).parseIQErrorParentLinkedGroupsParticipantsResourceLimitMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentLinkedGroupsParticipantsResourceLimit",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
      ).parseIQErrorParentGroupSuspendedMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentGroupSuspended",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: p.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorForbidden",
              "IQErrorResourceConstraint",
              "IQErrorItemNotFound",
              "IQErrorResourceLimit",
              "IQErrorNotAcceptable",
              "IQErrorBadRequest",
              "CreateOrAddGroupRateLimitError",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorParentLinkedGroupsParticipantsResourceLimit",
              "IQErrorParentGroupSuspended",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    l.parseCreateClientErrors = e;
  },
  98,
);
