__d(
  "WASmaxSpamNewsletterReportRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamMessageMixin",
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
            return { name: "NewsletterReportResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "NewsletterReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("NewsletterReport", {
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
      var u = o("WASmaxInSpamSpamIqErrors").parseSpamIqErrors(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            errorSpamIqErrors: u.value,
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
      var t = e.messageFrom,
        n = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
          o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) }),
          e,
        );
      return n;
    }
    function m(e) {
      var t = e.messageArgs,
        n = e.spamListJid,
        r = o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(
          o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
            o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
              o("WASmaxJsx").smax(
                "iq",
                null,
                o("WASmaxJsx").smax(
                  "spam_list",
                  { jid: o("WAWap").JID(n) },
                  o("WASmaxChildren").REPEATED_CHILD(d, t, 0, 65),
                ),
              ),
            ),
            e,
          ),
          e,
        );
      return r;
    }
    ((l.sendNewsletterReportRPC = e),
      (l.parseNewsletterReportResponseError = u),
      (l.parseNewsletterReportResponseSuccess = c),
      (l.makeNewsletterReportRequestSpamListMessage = d),
      (l.makeNewsletterReportRequest = m));
  },
  98,
);
