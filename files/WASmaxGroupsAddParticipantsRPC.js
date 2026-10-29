__d(
  "WASmaxGroupsAddParticipantsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
    "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
    "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
    "WASmaxInGroupsParticipantConflictMixin",
    "WASmaxInGroupsParticipantForbiddenMixin",
    "WASmaxInGroupsParticipantHasInvalidPNMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
    "WASmaxInGroupsParticipantNotFoundMixin",
    "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
    "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
    "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
    "WASmaxInGroupsParticipantResourceConstraintMixin",
    "WASmaxInGroupsParticipantResourceLimitMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
    "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
    "WASmaxInGroupsParticipantWorkUserNotAllowedMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsPermissionTokenMixin",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return { name: "AddParticipantsResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "AddParticipantsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "AddParticipantsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("AddParticipants", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
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
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorAddParticipantsClientErrors: i.value,
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
      var n = g(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup:
              n.value,
          })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "add");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        m = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          1,
          19999,
          d,
        );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            groupAddressingModeMixin: c.success ? c.value : null,
            addParticipant: m.value,
          })
        : m;
    }
    function p(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = e.permissionTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsPermissionTokenMixin").mergePermissionTokenMixin,
          o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(t),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
          }),
          a,
        );
      return i;
    }
    function _(e) {
      var t = e.participantArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "add",
              null,
              o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 1024),
            ),
          ),
          e,
        );
      return n;
    }
    function f(e) {
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
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
      ).parseCreateOrAddGroupRateLimitErrorMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "CreateOrAddGroupRateLimitError",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: s.value,
        });
      var u = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
      ).parseIQErrorParentGroupSuspendedMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentGroupSuspended",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "CreateOrAddGroupRateLimitError",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorLocked",
              "IQErrorParentGroupSuspended",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    function g(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "AddParticipantsParticipantAddedResponse",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsNonRegisteredWaUserParticipantErrorLidResponseMixin",
      ).parseNonRegisteredWaUserParticipantErrorLidResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonRegisteredWaUserParticipantErrorLidResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantAddedResponse",
              "NonRegisteredWaUserParticipantErrorLidResponse",
            ],
            [t, n],
          );
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "join_time",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        i = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        l = y(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        joinTime: r.value,
        phoneNumberMixin: a.success ? a.value : null,
        usernameAttMixin: i.success ? i.value : null,
        addParticipantsParticipantMixins: l.success ? l.value : null,
      });
    }
    function y(e) {
      var t = C(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantGroupJoinRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotFoundMixin",
      ).parseParticipantNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotFound",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAuthorized",
          value: r.value,
        });
      var a = b(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantInBanList",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
      ).parseParticipantRequestCodeCanBeSentMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCanBeSent",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin",
      ).parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsParticipantHasInvalidPNMixin",
      ).parseParticipantHasInvalidPNMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantHasInvalidPN",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedMixin",
      ).parseParticipantTemporarilyBlockedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlocked",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsParticipantConflictMixin",
      ).parseParticipantConflictMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantConflict",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsParticipantResourceLimitMixin",
      ).parseParticipantResourceLimitMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceLimit",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsParticipantResourceConstraintMixin",
      ).parseParticipantResourceConstraintMixin(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantResourceConstraint",
          value: m.value,
        });
      var p = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: p.value,
        });
      var _ = o(
        "WASmaxInGroupsParticipantWorkUserNotAllowedMixin",
      ).parseParticipantWorkUserNotAllowedMixin(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantWorkUserNotAllowed",
          value: _.value,
        });
      var f = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      if (f.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAddressable",
          value: f.value,
        });
      var g = o(
        "WASmaxInGroupsParticipantTemporarilyBlockedFromDefaultSubGroupMixin",
      ).parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin(e);
      if (g.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
          value: g.value,
        });
      var h = o(
        "WASmaxInGroupsParticipantBotIncompatibleVersionMixin",
      ).parseParticipantBotIncompatibleVersionMixin(e);
      if (h.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotIncompatibleVersion",
          value: h.value,
        });
      var y = o(
        "WASmaxInGroupsParticipantBotAlreadyExistsMixin",
      ).parseParticipantBotAlreadyExistsMixin(e);
      if (y.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantBotAlreadyExists",
          value: y.value,
        });
      var v = o(
        "WASmaxInGroupsParticipantParentLinkedGroupsResourceConstraintMixin",
      ).parseParticipantParentLinkedGroupsResourceConstraintMixin(e);
      if (v.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantParentLinkedGroupsResourceConstraint",
          value: v.value,
        });
      var S = o(
        "WASmaxInGroupsParticipantForbiddenMixin",
      ).parseParticipantForbiddenMixin(e);
      return S.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantForbidden",
            value: S.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantGroupJoinRequest",
              "ParticipantNotFound",
              "ParticipantNotAuthorized",
              "ParticipantInBanList",
              "ParticipantRequestCodeCanBeSent",
              "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
              "ParticipantHasInvalidPN",
              "ParticipantTemporarilyBlocked",
              "ParticipantConflict",
              "ParticipantResourceLimit",
              "ParticipantResourceConstraint",
              "ParticipantNotAcceptable",
              "ParticipantWorkUserNotAllowed",
              "ParticipantNotAddressable",
              "ParticipantTemporarilyBlockedFromDefaultSubGroup",
              "ParticipantBotIncompatibleVersion",
              "ParticipantBotAlreadyExists",
              "ParticipantParentLinkedGroupsResourceConstraint",
              "ParticipantForbidden",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y, v, S],
          );
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_approval_request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "421",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "error",
        o("WASmaxInGroupsEnums").ENUM_304_419,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            error: r.value,
            membershipApprovalRequestError: a.value,
          })
        : a;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "402",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    ((l.sendAddParticipantsRPC = e),
      (l.parseAddParticipantsResponseClientError = u),
      (l.parseAddParticipantsResponseServerError = c),
      (l.parseAddParticipantsResponseSuccessAddParticipant = d),
      (l.parseAddParticipantsResponseSuccess = m),
      (l.makeAddParticipantsRequestAddParticipant = p),
      (l.makeAddParticipantsRequest = _),
      (l.parseAddParticipantsClientErrors = f),
      (l.parseAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup =
        g),
      (l.parseAddParticipantsParticipantAddedResponseMixin = h),
      (l.parseAddParticipantsParticipantMixins = y),
      (l.parseParticipantGroupJoinRequestMixin = C),
      (l.parseParticipantInBanListMixin = b));
  },
  98,
);
