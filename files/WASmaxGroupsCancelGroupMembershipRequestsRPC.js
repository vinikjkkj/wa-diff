__d(
  "WASmaxGroupsCancelGroupMembershipRequestsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsParticipantNotAuthorizedMixin",
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
          var n = g(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "CancelGroupMembershipRequestsResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "CancelGroupMembershipRequestsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "CancelGroupMembershipRequestsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CancelGroupMembershipRequests",
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
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorMembershipRequestsCancellationClientErrors: i.value,
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
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        i = _(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        phoneNumberMixin: r.success ? r.value : null,
        usernameAttMixin: a.success ? a.value : null,
        membershipRequestsCancellationParticipantMixins: i.success
          ? i.value
          : null,
      });
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "cancel_membership_requests",
      );
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
          1,
          19999,
          d,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              cancelMembershipRequestsParticipant: l.value,
            }),
          )
        : l;
    }
    function p(e) {
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
      var r = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
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
      var i = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorLocked",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i],
          );
    }
    function _(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "CancelGroupMembershipRequestsParticipantRequestNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsParticipantNotAuthorizedMixin",
      ).parseParticipantNotAuthorizedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ParticipantNotAuthorized",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParticipantRequestNotFound", "ParticipantNotAuthorized"],
            [t, n],
          );
    }
    function f(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function g(e) {
      var t = e.participantArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "cancel_membership_requests",
              null,
              o("WASmaxChildren").REPEATED_CHILD(f, t, 1, 19999),
            ),
          ),
          e,
        );
      return n;
    }
    function h(e) {
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
    ((l.sendCancelGroupMembershipRequestsRPC = e),
      (l.parseCancelGroupMembershipRequestsResponseClientError = u),
      (l.parseCancelGroupMembershipRequestsResponseServerError = c),
      (l.parseCancelGroupMembershipRequestsResponseSuccessCancelMembershipRequestsParticipant =
        d),
      (l.parseCancelGroupMembershipRequestsResponseSuccess = m),
      (l.parseMembershipRequestsCancellationClientErrors = p),
      (l.parseMembershipRequestsCancellationParticipantMixins = _),
      (l.makeCancelGroupMembershipRequestsRequestCancelMembershipRequestsParticipant =
        f),
      (l.makeCancelGroupMembershipRequestsRequest = g),
      (l.parseCancelGroupMembershipRequestsParticipantRequestNotFoundMixin =
        h));
  },
  98,
);
