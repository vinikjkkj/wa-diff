__d(
  "WASmaxGroupsRevokeRequestCodeRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return { name: "RevokeRequestCodeResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "RevokeRequestCodeResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "RevokeRequestCodeResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("RevokeRequestCode", {
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
            babelHelpers.extends({}, a.value, { errorClientErrors: i.value }),
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
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "revoke");
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
          1e3,
          d,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              revokeParticipant: l.value,
            }),
          )
        : l;
    }
    function p(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function _(e) {
      var t = e.participantArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "revoke",
              null,
              o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 1e3),
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
              "IQErrorForbidden",
              "IQErrorLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l],
          );
    }
    ((l.sendRevokeRequestCodeRPC = e),
      (l.parseRevokeRequestCodeResponseClientError = u),
      (l.parseRevokeRequestCodeResponseServerError = c),
      (l.parseRevokeRequestCodeResponseSuccessRevokeParticipant = d),
      (l.parseRevokeRequestCodeResponseSuccess = m),
      (l.makeRevokeRequestCodeRequestRevokeParticipant = p),
      (l.makeRevokeRequestCodeRequest = _),
      (l.parseClientErrors = f));
  },
  98,
);
