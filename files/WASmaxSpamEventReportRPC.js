__d(
  "WASmaxSpamEventReportRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInSpamEnums",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorFeatureNotImplementedMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorReportTokenValidationFailMixin",
    "WASmaxInSpamReportIdMixin",
    "WASmaxJsx",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxParseJid",
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
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "EventReportResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "EventReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("EventReport", {
              Success: a,
              Error: i,
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
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        o("WASmaxInSpamEnums").DOMAINJID_USERJID,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!s.success) return s;
      var u = d(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            errorIQErrorInternalServerErrorOrBadRequestOrReportTokenValidationFailOrFeatureNotImplementedMixinGroup:
              u.value,
          })
        : u;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        o("WASmaxInSpamEnums").DOMAINJID_USERJID,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!l.success) return l;
      var s = o("WASmaxInSpamReportIdMixin").parseReportIdMixin(e);
      return o("WAResultOrError").makeResult({
        from: i.value,
        type: l.value,
        reportIdMixin: s.success ? s.value : null,
      });
    }
    function d(e) {
      var t = o(
        "WASmaxInSpamIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInSpamIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o(
        "WASmaxInSpamIQErrorReportTokenValidationFailMixin",
      ).parseIQErrorReportTokenValidationFailMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorReportTokenValidationFail",
          value: r.value,
        });
      var a = o(
        "WASmaxInSpamIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorReportTokenValidationFail",
              "IQErrorFeatureNotImplemented",
            ],
            [t, n, r, a],
          );
    }
    function m(e) {
      var t = e.spamListEventId,
        n = o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
          o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
            o("WASmaxJsx").smax(
              "iq",
              null,
              o("WASmaxJsx").smax("spam_list", {
                event_id: o("WAWap").CUSTOM_STRING(t),
              }),
            ),
          ),
          e,
        );
      return n;
    }
    ((l.sendEventReportRPC = e),
      (l.parseEventReportResponseError = u),
      (l.parseEventReportResponseSuccess = c),
      (l.makeEventReportRequest = m));
  },
  98,
);
