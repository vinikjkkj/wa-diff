__d(
  "WASmaxGroupsGetParticipatingGroupsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsTruncatedGroupInfoMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetServerMixin",
    "WASmaxParseReference",
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
          var n = h(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetParticipatingGroupsResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetParticipatingGroupsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetParticipatingGroupsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetParticipatingGroups",
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
              errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup:
                i.value,
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
            groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup: r.value,
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
        0,
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
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "TruncatedGroupInfo",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupInfo", "TruncatedGroupInfo"],
            [t, n],
          );
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r],
          );
    }
    function f() {
      var e = o("WASmaxJsx").smax("participants", null);
      return e;
    }
    function g() {
      var e = o("WASmaxJsx").smax("description", null);
      return e;
    }
    function h(e) {
      var t = e.hasParticipants,
        n = e.hasDescription,
        r = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "participating",
              null,
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(f, t),
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(g, n),
            ),
          ),
        );
      return r;
    }
    ((l.sendGetParticipatingGroupsRPC = e),
      (l.parseGetParticipatingGroupsResponseClientError = u),
      (l.parseGetParticipatingGroupsResponseServerError = c),
      (l.parseGetParticipatingGroupsResponseSuccessGroupsGroup = d),
      (l.parseGetParticipatingGroupsResponseSuccess = m),
      (l.parseGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup = p),
      (l.parseIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup = _),
      (l.makeGetParticipatingGroupsRequestParticipatingParticipants = f),
      (l.makeGetParticipatingGroupsRequestParticipatingDescription = g),
      (l.makeGetParticipatingGroupsRequest = h));
  },
  98,
);
