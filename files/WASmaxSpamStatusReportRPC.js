__d(
  "WASmaxSpamStatusReportRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamBizOptOutMixin",
    "WASmaxOutSpamBizReportMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
    "WASmaxOutSpamMessageMixin",
    "WASmaxOutSpamMessageRecipientMixin",
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
            return { name: "StatusReportResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "StatusReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReport", {
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
        n = e.messageRecipientMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamMessageRecipientMixin").mergeMessageRecipientMixin,
          o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
            o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) }),
            e,
          ),
          n,
        );
      return r;
    }
    function m(e) {
      var t,
        n = e.messageArgs,
        r = e.fRXMixinArgs,
        a = e.isKnownChatMixinArgs,
        i = e.spamListJid,
        l = e.bizOptOutMixinArgs,
        s = e.bizReportMixinArgs,
        u = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin,
          t.optionalMerge(
            o("WASmaxOutSpamFRXMixin").mergeFRXMixin,
            o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
              o(
                "WASmaxOutSpamBaseIQSetRequestMixin",
              ).mergeBaseIQSetRequestMixin(
                o("WASmaxJsx").smax(
                  "iq",
                  null,
                  t.optionalMerge(
                    o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin,
                    t.optionalMerge(
                      o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin,
                      o("WASmaxJsx").smax(
                        "spam_list",
                        { jid: o("WAWap").JID(i) },
                        o("WASmaxChildren").REPEATED_CHILD(d, n, 1, 2),
                      ),
                      l,
                    ),
                    s,
                  ),
                ),
              ),
              e,
            ),
            r,
          ),
          a,
        );
      return u;
    }
    ((l.sendStatusReportRPC = e),
      (l.parseStatusReportResponseError = u),
      (l.parseStatusReportResponseSuccess = c),
      (l.makeStatusReportRequestSpamListMessage = d),
      (l.makeStatusReportRequest = m));
  },
  98,
);
