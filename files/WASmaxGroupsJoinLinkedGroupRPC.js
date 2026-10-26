__d(
  "WASmaxGroupsJoinLinkedGroupRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorAlreadyExistsMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorConflictMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQErrorUpgradeRequiredMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return {
              name: "JoinLinkedGroupResponseGroupJoinRequestSuccess",
              value: a.value,
            };
          var i = m(r, n);
          if (i.success)
            return { name: "JoinLinkedGroupResponseSuccess", value: i.value };
          var l = u(r, n);
          if (l.success)
            return {
              name: "JoinLinkedGroupResponseClientError",
              value: l.value,
            };
          var s = d(r, n);
          if (s.success)
            return {
              name: "JoinLinkedGroupResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("JoinLinkedGroup", {
              GroupJoinRequestSuccess: a,
              Success: i,
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
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorJoinLinkedGroupClientErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
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
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    function p(e) {
      var t = e.joinLinkedGroupType,
        n = e.joinLinkedGroupJid,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("join_linked_group", {
              type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
              jid: o("WAWap").GROUP_JID(n),
            }),
          ),
          e,
        );
      return r;
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
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
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
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
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
      var l = o("WASmaxInGroupsIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorUpgradeRequiredMixin",
      ).parseIQErrorUpgradeRequiredMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorUpgradeRequired",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorAlreadyExistsMixin",
      ).parseIQErrorAlreadyExistsMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorAlreadyExists",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorNotAllowed",
              "IQErrorNotAcceptable",
              "IQErrorConflict",
              "IQErrorResourceLimit",
              "IQErrorNotAuthorized",
              "IQErrorUpgradeRequired",
              "IQErrorAlreadyExists",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    ((l.sendJoinLinkedGroupRPC = e),
      (l.parseJoinLinkedGroupResponseClientError = u),
      (l.parseJoinLinkedGroupResponseGroupJoinRequestSuccess = c),
      (l.parseJoinLinkedGroupResponseServerError = d),
      (l.parseJoinLinkedGroupResponseSuccess = m),
      (l.makeJoinLinkedGroupRequest = p),
      (l.parseJoinLinkedGroupClientErrors = _));
  },
  98,
);
