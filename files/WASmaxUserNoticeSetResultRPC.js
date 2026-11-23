__d(
  "WASmaxUserNoticeSetResultRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
    "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutUserNoticeBaseIQSetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return { name: "SetResultResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "SetResultResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "SetResultResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetResult", {
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
      var a = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorBadRequestOrRateOverlimitMixinGroup: i.value,
            }),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trackable");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "result", 0, 1e3);
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, result: r.value })
        : r;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "trackable", c);
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { trackable: r.value }),
          )
        : a;
    }
    function m(e) {
      var t = e.trackableId,
        n = e.trackableResult,
        r = o(
          "WASmaxOutUserNoticeBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxJsx").smax("trackable", {
              id: o("WAWap").INT(t),
              result: o("WAWap").INT(n),
            }),
          ),
        );
      return r;
    }
    function p(e) {
      var t = o(
        "WASmaxInUserNoticeIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
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
    ((l.sendSetResultRPC = e),
      (l.parseSetResultResponseClientError = s),
      (l.parseSetResultResponseServerError = u),
      (l.parseSetResultResponseSuccess = d),
      (l.makeSetResultRequest = m));
  },
  98,
);
