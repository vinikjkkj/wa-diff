__d(
  "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInUserNoticeIQErrorBadRequestMixin",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxInUserNoticeStageMixin",
    "WASmaxInUserNoticeUserNoticeServerError",
    "WASmaxJsx",
    "WASmaxOutUserNoticeBaseIQGetRequestMixin",
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
            a = d(r, n);
          if (a.success)
            return {
              name: "GetDisclosureStageByIdsResponseClientSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetDisclosureStageByIdsResponseClientError",
              value: i.value,
            };
          var l = m(r, n);
          if (l.success)
            return {
              name: "GetDisclosureStageByIdsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetDisclosureStageByIds",
              { ClientSuccess: a, ClientError: i, ServerError: l },
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "version",
        1,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "type",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { t: n.value, version: r.value, type: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "notice",
        0,
        1 / 0,
        c,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { notice: a.value }),
          )
        : a;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeUserNoticeServerError",
      ).parseUserNoticeServerError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUserNoticeServerError: i.value,
            }),
          )
        : i;
    }
    function p(e) {
      var t = e.getDisclosureStageByIdId,
        n = e.getDisclosureStageByIdT,
        r = o("WASmaxJsx").smax("get_disclosure_stage_by_id", {
          id: o("WAWap").INT(t),
          t: o("WAWap").INT(n),
        });
      return r;
    }
    function _(e) {
      var t = e.getDisclosureStageByIdArgs,
        n = o(
          "WASmaxOutUserNoticeBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxChildren").REPEATED_CHILD(p, t, 0, 1 / 0),
          ),
        );
      return n;
    }
    ((l.sendGetDisclosureStageByIdsRPC = e),
      (l.parseGetDisclosureStageByIdsResponseClientError = u),
      (l.parseGetDisclosureStageByIdsResponseClientSuccessNotice = c),
      (l.parseGetDisclosureStageByIdsResponseClientSuccess = d),
      (l.parseGetDisclosureStageByIdsResponseServerError = m),
      (l.makeGetDisclosureStageByIdsRequestGetDisclosureStageById = p),
      (l.makeGetDisclosureStageByIdsRequest = _));
  },
  98,
);
