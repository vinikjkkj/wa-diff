__d(
  "WASmaxGroupsAcceptGroupAddRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorAlreadyExistsMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorConflictMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorGoneMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
    "WASmaxInGroupsIQErrorResourceConstraintMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return {
          name: "AcceptGroupAddResponseGroupJoinRequestSuccess",
          value: a.value,
        };
      var i = d(r, n);
      if (i.success)
        return { name: "AcceptGroupAddResponseSuccess", value: i.value };
      var l = s(r, n);
      if (l.success)
        return { name: "AcceptGroupAddResponseClientError", value: l.value };
      var p = c(r, n);
      if (p.success)
        return { name: "AcceptGroupAddResponseServerError", value: p.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("AcceptGroupAdd", {
          GroupJoinRequestSuccess: a,
          Success: i,
          ClientError: l,
          ServerError: p,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorAcceptGroupAddClientErrors: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_approval_request",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (a.success, a);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function m(e) {
      var t = e.acceptCode,
        n = e.acceptExpiration,
        r = e.acceptAdmin,
        a = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("accept", {
              code: o("WAWap").CUSTOM_STRING(t),
              expiration: o("WAWap").INT(n),
              admin: o("WAWap").USER_JID(r),
            }),
          ),
          e,
        );
      return a;
    }
    function p(e) {
      var t = o(
        "WASmaxInGroupsIQErrorAlreadyExistsMixin",
      ).parseIQErrorAlreadyExistsMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorAlreadyExists",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: i.value,
        });
      var l = o("WASmaxInGroupsIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: l.value,
        });
      var s = o("WASmaxInGroupsIQErrorGoneMixin").parseIQErrorGoneMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGone",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: u.value,
        });
      var c = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorResourceConstraintMixin",
      ).parseIQErrorResourceConstraintMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceConstraint",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsIQErrorParentLinkedGroupsParticipantsResourceLimitMixin",
      ).parseIQErrorParentLinkedGroupsParticipantsResourceLimitMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentLinkedGroupsParticipantsResourceLimit",
          value: p.value,
        });
      var _ = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return _.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: _.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorAlreadyExists",
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorConflict",
              "IQErrorGone",
              "IQErrorResourceLimit",
              "IQErrorLocked",
              "IQErrorResourceConstraint",
              "IQErrorNotAllowed",
              "IQErrorParentLinkedGroupsParticipantsResourceLimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _],
          );
    }
    ((l.sendAcceptGroupAddRPC = e),
      (l.parseAcceptGroupAddResponseClientError = s),
      (l.parseAcceptGroupAddResponseGroupJoinRequestSuccess = u),
      (l.parseAcceptGroupAddResponseServerError = c),
      (l.parseAcceptGroupAddResponseSuccess = d),
      (l.makeAcceptGroupAddRequest = m));
  },
  98,
);
