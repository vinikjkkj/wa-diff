__d(
  "WASmaxInGroupsSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsSubGroupBadRequestMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupPartialServerErrorMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsSubGroupBadRequestMixin",
      ).parseSubGroupBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsSubGroupNotAuthorizedMixin",
      ).parseSubGroupNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAuthorized",
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
        "WASmaxInGroupsSubGroupPartialServerErrorMixin",
      ).parseSubGroupPartialServerErrorMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupPartialServerError",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupServerErrorMixin",
      ).parseSubGroupServerErrorMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupServerError",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupBadRequest",
              "SubGroupNotAuthorized",
              "SubGroupNotExist",
              "SubGroupNotAcceptable",
              "SubGroupPartialServerError",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup =
      e;
  },
  98,
);
