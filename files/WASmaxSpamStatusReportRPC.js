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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return { name: "StatusReportResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "StatusReportResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReport", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
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
    function u(e, t) {
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
    function c(e) {
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
    function d(e) {
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
                        o("WASmaxChildren").REPEATED_CHILD(c, n, 1, 2),
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
      (l.parseStatusReportResponseError = s),
      (l.parseStatusReportResponseSuccess = u),
      (l.makeStatusReportRequest = d));
  },
  98,
);
