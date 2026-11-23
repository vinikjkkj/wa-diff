__d(
  "WASmaxUserNoticeSetRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
    "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxInUserNoticeStageMixin",
    "WASmaxJsx",
    "WASmaxMixins",
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
      if (a.success) return { name: "SetResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success) return { name: "SetResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success) return { name: "SetResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
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
        "WASmaxInUserNoticeIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorBadRequestMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorInternalServerErrorOrRateOverlimitMixinGroup: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ t: n.value }, r.value),
          )
        : r;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "notice", c);
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { notice: r.value }),
          )
        : a;
    }
    function m(e) {
      var t = e.stageMixinArgs,
        n = o(
          "WASmaxOutUserNoticeBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            _(o("WASmaxJsx").smax("notice", null), t),
          ),
        );
      return n;
    }
    function p(e) {
      var t = e.noticeId,
        n = e.noticeStage,
        r = o("WASmaxJsx").smax("notice", {
          id: o("WAWap").INT(t),
          stage: o("WAWap").INT(n),
        });
      return r;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = o(
        "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
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
            ["IQErrorInternalServerError", "IQErrorRateOverlimit"],
            [t, n],
          );
    }
    ((l.sendSetRPC = e),
      (l.parseSetResponseClientError = s),
      (l.parseSetResponseServerError = u),
      (l.parseSetResponseSuccess = d),
      (l.makeSetRequest = m));
  },
  98,
);
