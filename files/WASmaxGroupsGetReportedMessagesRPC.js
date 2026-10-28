__d(
  "WASmaxGroupsGetReportedMessagesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxParseJid",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = p(r, n);
          if (a.success)
            return {
              name: "GetReportedMessagesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetReportedMessagesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetReportedMessagesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetReportedMessages", {
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
      var i = f(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetReportedMessagesClientErrors: i.value,
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
      var t = o("WASmaxParseUtils").assertTag(e, "reporter");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "timestamp", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        timestamp: r.value,
        identityMixin: a.success ? a.value : null,
      });
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "report");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "message_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "reporter",
        1,
        19999,
        d,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            messageId: n.value,
            reporter: r.value,
          })
        : r;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reports");
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "report",
          0,
          1e4,
          m,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              reportsReport: l.value,
            }),
          )
        : l;
    }
    function _(e) {
      var t = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
        o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("reports", null)),
        e,
      );
      return t;
    }
    function f(e) {
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
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorLocked",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorRateOverlimit",
              "IQErrorLocked",
            ],
            [t, n, r, a, i],
          );
    }
    ((l.sendGetReportedMessagesRPC = e),
      (l.parseGetReportedMessagesResponseClientError = u),
      (l.parseGetReportedMessagesResponseServerError = c),
      (l.parseGetReportedMessagesResponseSuccessReportsReportReporter = d),
      (l.parseGetReportedMessagesResponseSuccessReportsReport = m),
      (l.parseGetReportedMessagesResponseSuccess = p),
      (l.makeGetReportedMessagesRequest = _),
      (l.parseGetReportedMessagesClientErrors = f));
  },
  98,
);
