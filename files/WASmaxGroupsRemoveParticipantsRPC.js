__d(
  "WASmaxGroupsRemoveParticipantsRPC",
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
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorPayloadTooLargeMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsParticipantNotAcceptableMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "RemoveParticipantsResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "RemoveParticipantsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "RemoveParticipantsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("RemoveParticipants", {
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
      var i = g(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorRemoveParticipantsClientErrors: i.value,
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
      var r = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e),
        a = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e),
        i = f(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        phoneNumberMixin: r.success ? r.value : null,
        usernameAttMixin: a.success ? a.value : null,
        participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup:
          i.success ? i.value : null,
      });
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "remove");
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
      var c = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        r.value,
        "linked_groups",
        "true",
      );
      if (!c.success) return c;
      var m = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        p = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "participant",
          1,
          1024,
          d,
        );
      return p.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            removeLinkedGroups: c.value,
            groupAddressingModeMixin: m.success ? m.value : null,
            removeParticipant: p.value,
          })
        : p;
    }
    function p(e) {
      var t = e.participantJid,
        n = o("WASmaxJsx").smax("participant", { jid: o("WAWap").JID(t) });
      return n;
    }
    function _(e) {
      var t = e.participantArgs,
        n = e.hasRemoveLinkedGroupsTrue,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "remove",
              { linked_groups: o("WASmaxAttrs").OPTIONAL_LITERAL("true", n) },
              o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 1024),
            ),
          ),
          e,
        );
      return r;
    }
    function f(e) {
      var t = C(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotInGroup",
          value: t.value,
        });
      var n = y(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAllowed",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsParticipantNotAcceptableMixin",
      ).parseParticipantNotAcceptableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ParticipantNotAcceptable",
          value: r.value,
        });
      var a = h(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "RemoveParticipantsLinkedGroupsServerError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ParticipantNotInGroup",
              "ParticipantNotAllowed",
              "ParticipantNotAcceptable",
              "RemoveParticipantsLinkedGroupsServerError",
            ],
            [t, n, r, a],
          );
    }
    function g(e) {
      var t = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorPayloadTooLargeMixin",
      ).parseIQErrorPayloadTooLargeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayloadTooLarge",
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
              "IQErrorPayloadTooLarge",
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
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "500",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "405",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function C(e) {
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
    ((l.sendRemoveParticipantsRPC = e),
      (l.parseRemoveParticipantsResponseClientError = u),
      (l.parseRemoveParticipantsResponseServerError = c),
      (l.parseRemoveParticipantsResponseSuccessRemoveParticipant = d),
      (l.parseRemoveParticipantsResponseSuccess = m),
      (l.makeRemoveParticipantsRequestRemoveParticipant = p),
      (l.makeRemoveParticipantsRequest = _),
      (l.parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup =
        f),
      (l.parseRemoveParticipantsClientErrors = g),
      (l.parseRemoveParticipantsLinkedGroupsServerErrorMixin = h),
      (l.parseParticipantNotAllowedMixin = y),
      (l.parseParticipantNotInGroupMixin = C));
  },
  98,
);
