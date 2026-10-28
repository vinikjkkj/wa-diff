__d(
  "WASmaxGroupsPromoteDemoteRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseJid",
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
          var n = C(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = _(r, n);
          if (a.success)
            return {
              name: "PromoteDemoteResponseSuccessPromote",
              value: a.value,
            };
          var i = m(r, n);
          if (i.success)
            return {
              name: "PromoteDemoteResponseSuccessDemote",
              value: i.value,
            };
          var l = u(r, n);
          if (l.success)
            return { name: "PromoteDemoteResponseClientError", value: l.value };
          var s = c(r, n);
          if (s.success)
            return { name: "PromoteDemoteResponseServerError", value: s.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemote", {
              SuccessPromote: a,
              SuccessDemote: i,
              ClientError: l,
              ServerError: s,
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
      var i = b(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorPromoteDemoteClientErrors: i.value,
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
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "error",
        o("WASmaxInGroupsEnums").ENUM_404_406,
      );
      if (!r.success) return r;
      var a = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        i = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        error: r.value,
        phoneNumberMixin: a.success ? a.value : null,
        usernameAttMixin: i.success ? i.value : null,
      });
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "demote");
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          0,
          1024,
          d,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              demoteParticipant: l.value,
            }),
          )
        : l;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "admin",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "error",
        o("WASmaxInGroupsEnums").ENUM_404_419,
      );
      if (!a.success) return a;
      var i = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        l = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        type: r.value,
        error: a.value,
        phoneNumberMixin: i.success ? i.value : null,
        usernameAttMixin: l.success ? l.value : null,
      });
    }
    function _(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "promote");
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          0,
          1024,
          p,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              promoteParticipant: l.value,
            }),
          )
        : l;
    }
    function f(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function g(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "promote",
          null,
          o("WASmaxChildren").REPEATED_CHILD(f, t, 0, 1024),
        );
      return n;
    }
    function h(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function y(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "demote",
          null,
          o("WASmaxChildren").REPEATED_CHILD(h, t, 0, 1024),
        );
      return n;
    }
    function C(e) {
      var t = e.promoteArgs,
        n = e.demoteArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxChildren").OPTIONAL_CHILD(g, t),
            o("WASmaxChildren").OPTIONAL_CHILD(y, n),
          ),
          e,
        );
      return r;
    }
    function b(e) {
      var t = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin",
      ).parseIQErrorBlockedIntegrityEnforcementMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBlockedIntegrityEnforcement",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: l.value,
        });
      var s = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorRateOverlimit",
              "IQErrorBlockedIntegrityEnforcement",
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    ((l.sendPromoteDemoteRPC = e),
      (l.parsePromoteDemoteResponseClientError = u),
      (l.parsePromoteDemoteResponseServerError = c),
      (l.parsePromoteDemoteResponseSuccessDemoteDemoteParticipant = d),
      (l.parsePromoteDemoteResponseSuccessDemote = m),
      (l.parsePromoteDemoteResponseSuccessPromotePromoteParticipant = p),
      (l.parsePromoteDemoteResponseSuccessPromote = _),
      (l.makePromoteDemoteRequestPromoteParticipant = f),
      (l.makePromoteDemoteRequestPromote = g),
      (l.makePromoteDemoteRequestDemoteParticipant = h),
      (l.makePromoteDemoteRequestDemote = y),
      (l.makePromoteDemoteRequest = C),
      (l.parsePromoteDemoteClientErrors = b));
  },
  98,
);
