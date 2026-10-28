__d(
  "WASmaxGroupsMembershipRequestsActionRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxInGroupsParticipantForbiddenMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantNotFoundMixin",
    "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = b(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = f(r, n);
          if (a.success)
            return {
              name: "MembershipRequestsActionResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "MembershipRequestsActionResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "MembershipRequestsActionResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "MembershipRequestsAction",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = S(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorMembershipRequestsActionClientErrors: i.value,
            }),
          )
        : i;
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e),
        a = v(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        identityMixin: r.success ? r.value : null,
        membershipRequestsActionAcceptParticipantMixins: a.success
          ? a.value
          : null,
      });
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "approve");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        1,
        19999,
        d,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ participant: n.value })
        : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e),
        a = R(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        identityMixin: r.success ? r.value : null,
        membershipRequestsActionRejectParticipantMixins: a.success
          ? a.value
          : null,
      });
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reject");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        1,
        19999,
        p,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ participant: n.value })
        : n;
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_requests_action",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "approve", m);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "reject", _);
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        c.value,
      );
      if (!d.success) return d;
      var p = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult({
        type: u.value,
        groupAddressingModeMixin: p.success ? p.value : null,
        membershipRequestsActionApprove: a.value,
        membershipRequestsActionReject: i.value,
      });
    }
    function g(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = o("WASmaxJsx").smax("participant", {
          jid: o("WAWap").JID(t),
          phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
          username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
        });
      return a;
    }
    function h(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "approve",
          null,
          o("WASmaxChildren").REPEATED_CHILD(g, t, 1, 19999),
        );
      return n;
    }
    function y(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = o("WASmaxJsx").smax("participant", {
          jid: o("WAWap").JID(t),
          phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
          username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
        });
      return a;
    }
    function C(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "reject",
          null,
          o("WASmaxChildren").REPEATED_CHILD(y, t, 1, 19999),
        );
      return n;
    }
    function b(e) {
      var t = e.approveArgs,
        n = e.rejectArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "membership_requests_action",
              null,
              o("WASmaxChildren").OPTIONAL_CHILD(h, t),
              o("WASmaxChildren").OPTIONAL_CHILD(C, n),
            ),
          ),
          e,
        );
      return r;
    }
    function v(e) {
      var t = o(
        "WASmaxInGroupsParticipantNotFoundMixin",
      ).parseParticipantNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantForbiddenMixin",
      ).parseParticipantForbiddenMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantForbidden",
          value: r.value,
        });
      var a = L(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "MembershipRequestsActionParticipantRequestNotFound",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
      ).parseParticipantTemporarilyBlockedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlocked",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantConflict",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
      ).parseParticipantParentLinkedGroupsResourceConstraintMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantParentLinkedGroupsResourceConstraint",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
      ).parseParticipantBotIncompatibleVersionMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotIncompatibleVersion",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
      ).parseParticipantBotAlreadyExistsMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantBotAlreadyExists",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantNotFound",
              "ParticipantNotAuthorized",
              "ParticipantForbidden",
              "ParticipantRequestNotFound",
              "ParticipantTemporarilyBlocked",
              "ParticipantConflict",
              "ParticipantResourceConstraint",
              "ParticipantParentLinkedGroupsResourceConstraint",
              "ParticipantBotIncompatibleVersion",
              "ParticipantBotAlreadyExists",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    function S(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorRateOverlimit",
              "IQErrorLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l],
          );
    }
    function R(e) {
      var t = L(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "MembershipRequestsActionParticipantRequestNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantConflict",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParticipantRequestNotFound", "ParticipantConflict"],
            [t, n],
          );
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    ((l.sendMembershipRequestsActionRPC = e),
      (l.parseMembershipRequestsActionResponseClientError = u),
      (l.parseMembershipRequestsActionResponseServerError = c),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApproveParticipant =
        d),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApprove =
        m),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionRejectParticipant =
        p),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionReject =
        _),
      (l.parseMembershipRequestsActionResponseSuccess = f),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionApproveParticipant =
        g),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionApprove =
        h),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionRejectParticipant =
        y),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionReject = C),
      (l.makeMembershipRequestsActionRequest = b),
      (l.parseMembershipRequestsActionAcceptParticipantMixins = v),
      (l.parseMembershipRequestsActionClientErrors = S),
      (l.parseMembershipRequestsActionRejectParticipantMixins = R),
      (l.parseMembershipRequestsActionParticipantRequestNotFoundMixin = L));
  },
  98,
);
