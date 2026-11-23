__d(
  "WASmaxGroupsGetGroupInfoRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorGoneMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = p(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return { name: "GetGroupInfoResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "GetGroupInfoResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "GetGroupInfoResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupInfo", {
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
              errorGetGroupInfoClientErrors: i.value,
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
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "size",
        0,
        19999,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ size: n.value }, r.value, {
          dedupAttrsMixin: a.success ? a.value : null,
        }),
      );
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "group", c);
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
      return u.success
        ? o("WAResultOrError").makeResult({ type: l.value, group: r.value })
        : u;
    }
    function m(e) {
      var t = e.addRequestExpiration,
        n = b(
          y(
            o("WASmaxJsx").smax("add_request", {
              expiration: o("WAWap").INT(t),
            }),
            e,
          ),
          e,
        );
      return n;
    }
    function p(e) {
      var t = e.addRequestArgs,
        n = e.queryPhash,
        r = e.getGroupInfoRequestTypeMixinArgs,
        a = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              f,
              o("WASmaxJsx").smax(
                "query",
                {
                  phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(m, t),
              ),
              r,
            ),
          ),
          e,
        );
      return a;
    }
    function _(e) {
      var t = S(o("WASmaxJsx").smax("query", null), e);
      return t;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = o("WASmaxInGroupsIQErrorGoneMixin").parseIQErrorGoneMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorGone",
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorGone",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l],
          );
    }
    function h(e) {
      var t = e.addRequestAdmin,
        n = o("WASmaxJsx").smax("add_request", {
          admin: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e) {
      var t = e.addRequestCode,
        n = o("WASmaxJsx").smax("add_request", {
          code: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = e.anyRequest,
        n = o("WASmaxJsx").smax("smax$any", {
          request: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetGroupInfoRPC = e),
      (l.parseGetGroupInfoResponseClientError = s),
      (l.parseGetGroupInfoResponseServerError = u),
      (l.parseGetGroupInfoResponseSuccess = d),
      (l.makeGetGroupInfoRequest = p));
  },
  98,
);
