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
            return { name: "GetGroupInfoResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "GetGroupInfoResponseClientError", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "GetGroupInfoResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupInfo", {
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
              errorGetGroupInfoClientErrors: i.value,
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
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "group", d);
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
    function p(e) {
      var t = e.addRequestExpiration,
        n = v(
          C(
            o("WASmaxJsx").smax("add_request", {
              expiration: o("WAWap").INT(t),
            }),
            e,
          ),
          e,
        );
      return n;
    }
    function _(e) {
      var t = e.addRequestArgs,
        n = e.queryPhash,
        r = e.getGroupInfoRequestTypeMixinArgs,
        a = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              g,
              o("WASmaxJsx").smax(
                "query",
                {
                  phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(p, t),
              ),
              r,
            ),
          ),
          e,
        );
      return a;
    }
    function f(e) {
      var t = R(o("WASmaxJsx").smax("query", null), e);
      return t;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
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
    function y(e) {
      var t = e.addRequestAdmin,
        n = o("WASmaxJsx").smax("add_request", {
          admin: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = e.addRequestCode,
        n = o("WASmaxJsx").smax("add_request", {
          code: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e) {
      var t = e.anyRequest,
        n = o("WASmaxJsx").smax("smax$any", {
          request: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetGroupInfoRPC = e),
      (l.parseGetGroupInfoResponseClientError = u),
      (l.parseGetGroupInfoResponseServerError = c),
      (l.parseGetGroupInfoResponseSuccessGroup = d),
      (l.parseGetGroupInfoResponseSuccess = m),
      (l.makeGetGroupInfoRequestQueryAddRequest = p),
      (l.makeGetGroupInfoRequest = _),
      (l.mergeGetGroupInfoRequestTypeMixin = g),
      (l.parseGetGroupInfoClientErrors = h),
      (l.mergeAddRequestMixin = C),
      (l.mergeCodeMixin = v),
      (l.mergeGetGroupInfoRequestTypeAttributeMixin = R));
  },
  98,
);
