__d(
  "WASmaxGroupsLinkSubGroupsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
    "WASmaxInGroupsIQErrorPayloadTooLargeMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsSubGroupBadRequestMixin",
    "WASmaxInGroupsSubGroupConflictMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupResourceLimitMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = y(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success)
        return { name: "LinkSubGroupsResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "LinkSubGroupsResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "LinkSubGroupsResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("LinkSubGroups", {
          Success: a,
          ClientError: i,
          ServerError: l,
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
      var i = C(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorLinkSubGroupsClientError: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "403",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, error: r.value })
        : r;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChild(e, "hidden_group");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!r.success) return r;
      var a = p(e),
        i = o("WASmaxParseUtils").mapChildrenWithTag(
          e,
          "participant",
          0,
          19999,
          c,
        );
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: r.value,
            linkSubGroupsSuccessIqLinksLinkGroupMixinGroup: a.success
              ? a.value
              : null,
            hasHiddenGroup: n.value != null,
            participant: i.value,
          })
        : i;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "links");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "link");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "link_type",
        "sub_group",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!l.success) return l;
      var s = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        u = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "group",
          1,
          1e3,
          d,
        );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ linksLinkLinkType: i.value }, l.value, {
              groupAddressingModeMixin: s.success ? s.value : null,
              linksLinkGroup: u.value,
            }),
          )
        : u;
    }
    function p(e) {
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
      var r = f(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsSubGroupNotExistMixin",
      ).parseSubGroupNotExistMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotExist",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsSubGroupNotAcceptableMixin",
      ).parseSubGroupNotAcceptableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAcceptable",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupConflictMixin",
      ).parseSubGroupConflictMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupConflict",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsSubGroupResourceLimitMixin",
      ).parseSubGroupResourceLimitMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupResourceLimit",
          value: s.value,
        });
      var u = _(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "PendingAddRequestsNotAllowed",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsSubGroupServerErrorMixin",
      ).parseSubGroupServerErrorMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupServerError",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupBadRequest",
              "SubGroupNotAuthorized",
              "SubGroupForbidden",
              "SubGroupNotExist",
              "SubGroupNotAcceptable",
              "SubGroupConflict",
              "SubGroupResourceLimit",
              "PendingAddRequestsNotAllowed",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "433",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "403",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function g() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function h(e) {
      var t = e.hasHiddenGroup,
        n = e.groupJid,
        r = o("WASmaxJsx").smax(
          "group",
          { jid: o("WAWap").GROUP_JID(n) },
          o("WASmaxChildren").HAS_OPTIONAL_CHILD(g, t),
        );
      return r;
    }
    function y(e) {
      var t = e.groupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "links",
              null,
              o("WASmaxJsx").smax(
                "link",
                { link_type: "sub_group" },
                o("WASmaxChildren").REPEATED_CHILD(h, t, 1, 1e3),
              ),
            ),
          ),
          e,
        );
      return n;
    }
    function C(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
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
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorPayloadTooLargeMixin",
      ).parseIQErrorPayloadTooLargeMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayloadTooLarge",
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
        "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
      ).parseIQErrorParentGroupSuspendedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorParentGroupSuspended",
          value: u.value,
        });
      var c = b(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGroupHasPendingAddRequests",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: d.value,
        });
      var m = o(
        "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin",
      ).parseIQErrorBlockedIntegrityEnforcementMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorBlockedIntegrityEnforcement",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorNotAllowed",
              "IQErrorPayloadTooLarge",
              "IQErrorResourceLimit",
              "IQErrorParentGroupSuspended",
              "IQErrorGroupHasPendingAddRequests",
              "IQErrorRateOverlimit",
              "IQErrorBlockedIntegrityEnforcement",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "pending-add-requests",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        433,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    ((l.sendLinkSubGroupsRPC = e),
      (l.parseLinkSubGroupsResponseClientError = s),
      (l.parseLinkSubGroupsResponseServerError = u),
      (l.parseLinkSubGroupsResponseSuccess = m),
      (l.makeLinkSubGroupsRequest = y));
  },
  98,
);
