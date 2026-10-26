__d(
  "WASmaxGroupsUnlinkGroupsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsSubGroupBadRequestMixin",
    "WASmaxInGroupsSubGroupNotAcceptableMixin",
    "WASmaxInGroupsSubGroupNotAuthorizedMixin",
    "WASmaxInGroupsSubGroupNotExistMixin",
    "WASmaxInGroupsSubGroupServerErrorMixin",
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
            return { name: "UnlinkGroupsResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "UnlinkGroupsResponseClientError", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "UnlinkGroupsResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UnlinkGroups", {
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
      var i = h(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUnlinkGroupsClientError: i.value,
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
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "remove_orphaned_members",
        "true",
      );
      if (!r.success) return r;
      var a = f(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        removeOrphanedMembers: r.value,
        subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup:
          a.success ? a.value : null,
      });
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "unlink");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "unlink_type",
        "sub_group",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "group",
        1,
        1e3,
        d,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ unlinkUnlinkType: a.value }, i.value, {
              unlinkGroup: l.value,
            }),
          )
        : l;
    }
    function p(e) {
      var t = e.groupJid,
        n = e.hasGroupRemoveOrphanedMembersTrue,
        r = o("WASmaxJsx").smax("group", {
          jid: o("WAWap").GROUP_JID(t),
          remove_orphaned_members: o("WASmaxAttrs").OPTIONAL_LITERAL("true", n),
        });
      return r;
    }
    function _(e) {
      var t = e.groupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "unlink",
              { unlink_type: "sub_group" },
              o("WASmaxChildren").REPEATED_CHILD(p, t, 1, 1e3),
            ),
          ),
          e,
        );
      return n;
    }
    function f(e) {
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
      var r = o(
        "WASmaxInGroupsSubGroupNotExistMixin",
      ).parseSubGroupNotExistMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotExist",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsSubGroupNotAcceptableMixin",
      ).parseSubGroupNotAcceptableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupNotAcceptable",
          value: a.value,
        });
      var i = g(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SubGroupPartialServerError",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsSubGroupServerErrorMixin",
      ).parseSubGroupServerErrorMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "SubGroupServerError",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SubGroupBadRequest",
              "SubGroupNotAuthorized",
              "SubGroupNotExist",
              "SubGroupNotAcceptable",
              "SubGroupPartialServerError",
              "SubGroupServerError",
            ],
            [t, n, r, a, i, l],
          );
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "530",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    function h(e) {
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
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
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
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorNotAcceptable",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a, i],
          );
    }
    ((l.sendUnlinkGroupsRPC = e),
      (l.parseUnlinkGroupsResponseClientError = u),
      (l.parseUnlinkGroupsResponseServerError = c),
      (l.parseUnlinkGroupsResponseSuccessUnlinkGroup = d),
      (l.parseUnlinkGroupsResponseSuccess = m),
      (l.makeUnlinkGroupsRequestUnlinkGroup = p),
      (l.makeUnlinkGroupsRequest = _),
      (l.parseSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup =
        f),
      (l.parseSubGroupPartialServerErrorMixin = g),
      (l.parseUnlinkGroupsClientError = h));
  },
  98,
);
