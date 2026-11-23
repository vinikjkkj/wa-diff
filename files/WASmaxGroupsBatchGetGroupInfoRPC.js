__d(
  "WASmaxGroupsBatchGetGroupInfoRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsTruncatedGroupInfoMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetServerMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = f(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return { name: "BatchGetGroupInfoResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "BatchGetGroupInfoResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "BatchGetGroupInfoResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("BatchGetGroupInfo", {
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
      var i = g(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorBatchGetGroupInfoClientErrors: i.value,
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
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e),
        r = m(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            dedupAttrsMixin: n.success ? n.value : null,
            groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup:
              r.value,
          })
        : r;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "groups");
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
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "group",
        1,
        1e4,
        c,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            groupsGroup: d.value,
          })
        : d;
    }
    function m(e) {
      var t = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupInfo",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsTruncatedGroupInfoMixin",
      ).parseTruncatedGroupInfoMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "TruncatedGroupInfo",
          value: n.value,
        });
      var r = h(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "GroupForbidden",
          value: r.value,
        });
      var a = p(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "GroupNotExist",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "GroupInfo",
              "TruncatedGroupInfo",
              "GroupForbidden",
              "GroupNotExist",
            ],
            [t, n, r, a],
          );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, error: r.value })
        : r;
    }
    function _(e) {
      var t = e.groupJid,
        n = o("WASmaxJsx").smax("group", { jid: o("WAWap").GROUP_JID(t) });
      return n;
    }
    function f(e) {
      var t = e.groupArgs,
        n = e.queryContext,
        r = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "query",
              {
                context: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
              },
              o("WASmaxChildren").REPEATED_CHILD(_, t, 1, 1e4),
            ),
          ),
        );
      return r;
    }
    function g(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorBadRequest", "IQErrorRateOverlimit"],
            [t, n],
          );
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "403",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, error: r.value })
        : r;
    }
    ((l.sendBatchGetGroupInfoRPC = e),
      (l.parseBatchGetGroupInfoResponseClientError = s),
      (l.parseBatchGetGroupInfoResponseServerError = u),
      (l.parseBatchGetGroupInfoResponseSuccess = d),
      (l.makeBatchGetGroupInfoRequest = f));
  },
  98,
);
