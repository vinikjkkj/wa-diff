__d(
  "WASmaxSpamGroupReportRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamCallReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
    "WASmaxOutSpamFRXMixin",
    "WASmaxOutSpamIsKnownChatMixin",
    "WASmaxOutSpamMessageMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return { name: "GroupReportResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "GroupReportResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GroupReport", {
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
        n = e.messagePhash,
        r = o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
          o("WASmaxJsx").smax("message", {
            from: o("WAWap").GROUP_JID(t),
            phash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
          }),
          e,
        );
      return r;
    }
    function d(e) {
      var t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(
        o("WASmaxJsx").smax("call", null),
        e,
      );
      return t;
    }
    function m(e) {
      var t = e.messageArgs,
        n = e.callArgs,
        r = e.fRXMixinArgs,
        a = e.isKnownChatMixinArgs,
        i = e.spamListJid,
        l = e.spamListSource,
        s = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamIsKnownChatMixin").mergeIsKnownChatMixin,
          o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutSpamFRXMixin").mergeFRXMixin,
              o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
                o(
                  "WASmaxOutSpamBaseIQSetRequestMixin",
                ).mergeBaseIQSetRequestMixin(
                  o("WASmaxJsx").smax(
                    "iq",
                    null,
                    o("WASmaxJsx").smax(
                      "spam_list",
                      {
                        jid: o("WAWap").GROUP_JID(i),
                        source: o("WASmaxAttrs").OPTIONAL(
                          o("WAWap").USER_JID,
                          l,
                        ),
                      },
                      [].concat(
                        o("WASmaxChildren").REPEATED_CHILD(c, t, 0, 210),
                        o("WASmaxChildren").REPEATED_CHILD(d, n, 0, 5),
                      ),
                    ),
                  ),
                ),
                e,
              ),
              r,
            ),
            e,
          ),
          a,
        );
      return s;
    }
    ((l.sendGroupReportRPC = e),
      (l.parseGroupReportResponseError = s),
      (l.parseGroupReportResponseSuccess = u),
      (l.makeGroupReportRequest = m));
  },
  98,
);
