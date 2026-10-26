__d(
  "WASmaxGroupsAcknowledgeGroupRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "AcknowledgeGroupResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "AcknowledgeGroupResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "AcknowledgeGroupResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("AcknowledgeGroup", {
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
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorItemNotFoundOrBadRequestOrRateOverlimitOrFallbackClientMixinGroup:
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
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      return s.success ? o("WAResultOrError").makeResult({ type: i.value }) : s;
    }
    function m(e) {
      var t = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorItemNotFound",
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a],
          );
    }
    function p(e) {
      var t = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
        o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("ack", null)),
        e,
      );
      return t;
    }
    ((l.sendAcknowledgeGroupRPC = e),
      (l.parseAcknowledgeGroupResponseClientError = u),
      (l.parseAcknowledgeGroupResponseServerError = c),
      (l.parseAcknowledgeGroupResponseSuccess = d),
      (l.parseIQErrorItemNotFoundOrBadRequestOrRateOverlimitOrFallbackClientMixinGroup =
        m),
      (l.makeAcknowledgeGroupRequest = p));
  },
  98,
);
