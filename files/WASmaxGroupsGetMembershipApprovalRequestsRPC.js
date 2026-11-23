__d(
  "WASmaxGroupsGetMembershipApprovalRequestsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return {
          name: "GetMembershipApprovalRequestsResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetMembershipApprovalRequestsResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetMembershipApprovalRequestsResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "GetMembershipApprovalRequests",
          { Success: a, ClientError: i, ServerError: l },
        ),
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
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetMembershipApprovalRequestsClientErrors: i.value,
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
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
      if (!t.success) return t;
      var n = g(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          identityMixin: r.success ? r.value : null,
        }),
      );
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_approval_requests",
      );
      if (!r.success) return r;
      var a = h(r.value),
        i = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(
          e,
          t,
        );
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        s = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "membership_approval_request",
          0,
          19999,
          c,
        );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                membershipApprovalRequestsGetMembershipApprovalRequestsRequestorFetchMixin:
                  a.success ? a.value : null,
              },
              i.value,
              {
                groupAddressingModeMixin: l.success ? l.value : null,
                membershipApprovalRequestsMembershipApprovalRequest: s.value,
              },
            ),
          )
        : s;
    }
    function m(e) {
      var t = e.hasGetMembershipApprovalRequestsRequestorFetch,
        n = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              _,
              o("WASmaxJsx").smax("membership_approval_requests", null),
              t,
            ),
          ),
          e,
        );
      return n;
    }
    function p() {
      var e = o("WASmaxJsx").smax("smax$any", { requestor_fetch: "true" });
      return e;
    }
    function _(e) {
      var t = p();
      return o("WASmaxMixins").mergeStanzas(e, t);
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: l.value,
        });
      var s = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorItemNotFound",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
              "IQErrorLocked",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "requestor",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "requestor_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "requestor_username",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        e,
        "parent_group_jid",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "bot_product",
        o("WASmaxInGroupsEnums")
          .ENUM_1PCARAVAN_1PCOEXV2_1PGROUPMUSE_1PMAIBAHUBCHAT_1PMETAAI_1PMETAAITHREAD_1PMUSE_1PTEE_1PWAFORWORK_1PWAIAS_3PAGENT,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(e, "request_time", 0, void 0);
      if (!u.success) return u;
      var c = y(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                jid: n.value,
                requestor: r.value,
                requestorPn: a.value,
                requestorUsername: i.value,
                parentGroupJid: l.value,
                botProduct: s.value,
                requestTime: u.value,
              },
              c.value,
            ),
          )
        : c;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "requestor_fetch",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ requestorFetch: t.value })
        : t;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "request_method",
        o("WASmaxInGroupsEnums").ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ requestMethod: t.value })
        : t;
    }
    ((l.sendGetMembershipApprovalRequestsRPC = e),
      (l.parseGetMembershipApprovalRequestsResponseClientError = s),
      (l.parseGetMembershipApprovalRequestsResponseServerError = u),
      (l.parseGetMembershipApprovalRequestsResponseSuccess = d),
      (l.makeGetMembershipApprovalRequestsRequest = m));
  },
  98,
);
