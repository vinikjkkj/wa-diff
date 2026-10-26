__d(
  "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetLinkedGroupsParticipantsResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetLinkedGroupsParticipantsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetLinkedGroupsParticipantsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetLinkedGroupsParticipants",
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
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetLinkedGroupsParticipantsClientErrors: i.value,
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
      var n = o(
        "WASmaxInGroupsParticipantWithJidMixin",
      ).parseParticipantWithJidMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          phoneNumberMixin: r.success ? r.value : null,
          usernameAttMixin: a.success ? a.value : null,
        }),
      );
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "linked_groups_participants",
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
              linkedGroupsParticipantsParticipant: l.value,
            }),
          )
        : l;
    }
    function p(e) {
      var t = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("linked_groups_participants", null),
        ),
        e,
      );
      return t;
    }
    function _(e) {
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a, i],
          );
    }
    ((l.sendGetLinkedGroupsParticipantsRPC = e),
      (l.parseGetLinkedGroupsParticipantsResponseClientError = u),
      (l.parseGetLinkedGroupsParticipantsResponseServerError = c),
      (l.parseGetLinkedGroupsParticipantsResponseSuccessLinkedGroupsParticipantsParticipant =
        d),
      (l.parseGetLinkedGroupsParticipantsResponseSuccess = m),
      (l.makeGetLinkedGroupsParticipantsRequest = p),
      (l.parseGetLinkedGroupsParticipantsClientErrors = _));
  },
  98,
);
