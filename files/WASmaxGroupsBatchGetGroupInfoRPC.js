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
            return { name: "BatchGetGroupInfoResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "BatchGetGroupInfoResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "BatchGetGroupInfoResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("BatchGetGroupInfo", {
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
              errorBatchGetGroupInfoClientErrors: i.value,
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
      var n = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e),
        r = p(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            dedupAttrsMixin: n.success ? n.value : null,
            groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup:
              r.value,
          })
        : r;
    }
    function m(e, t) {
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
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "group",
        1,
        1e4,
        d,
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            groupsGroup: c.value,
          })
        : c;
    }
    function p(e) {
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
      var r = y(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "GroupForbidden",
          value: r.value,
        });
      var a = _(e);
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
    function _(e) {
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
    function f(e) {
      var t = e.groupJid,
        n = o("WASmaxJsx").smax("group", { jid: o("WAWap").GROUP_JID(t) });
      return n;
    }
    function g(e) {
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
              o("WASmaxChildren").REPEATED_CHILD(f, t, 1, 1e4),
            ),
          ),
        );
      return r;
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
    function y(e) {
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
      (l.parseBatchGetGroupInfoResponseClientError = u),
      (l.parseBatchGetGroupInfoResponseServerError = c),
      (l.parseBatchGetGroupInfoResponseSuccessGroupsGroup = d),
      (l.parseBatchGetGroupInfoResponseSuccess = m),
      (l.parseGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup =
        p),
      (l.parseGroupNotExistMixin = _),
      (l.makeBatchGetGroupInfoRequestQueryGroup = f),
      (l.makeBatchGetGroupInfoRequest = g),
      (l.parseBatchGetGroupInfoClientErrors = h),
      (l.parseGroupForbiddenMixin = y));
  },
  98,
);
