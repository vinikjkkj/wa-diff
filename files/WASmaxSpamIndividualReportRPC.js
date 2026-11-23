__d(
  "WASmaxSpamIndividualReportRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInSpamEnums",
    "WASmaxInSpamReportIdMixin",
    "WASmaxInSpamSpamIqErrors",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamBizOptOutMixin",
    "WASmaxOutSpamBizReportMixin",
    "WASmaxOutSpamCallReportMixin",
    "WASmaxOutSpamExtensionScreenMixin",
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
      var n = p(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return { name: "IndividualReportResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "IndividualReportResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("IndividualReport", {
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
      var t = e.messageSenderOrRecipientMixinGroupArgs,
        n = _(
          o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
            o("WASmaxJsx").smax("message", null),
            e,
          ),
          t,
        );
      return n;
    }
    function d(e) {
      var t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(
        o("WASmaxJsx").smax("call", null),
        e,
      );
      return t;
    }
    function m(e) {
      var t = S(o("WASmaxJsx").smax("user_initiated_extension", null), e);
      return t;
    }
    function p(e) {
      var t,
        n = e.messageArgs,
        r = e.callArgs,
        a = e.userInitiatedExtensionArgs,
        i = e.fRXMixinArgs,
        l = e.isKnownChatMixinArgs,
        s = e.spamListJid,
        u = e.bizOptOutMixinArgs,
        p = e.uIStateSetMixinArgs,
        _ = e.bizReportMixinArgs,
        f = e.tCTokenMixinArgs,
        h = (t = o("WASmaxMixins")).optionalMerge(
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
                    g,
                    t.optionalMerge(
                      o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin,
                      t.optionalMerge(
                        C,
                        t.optionalMerge(
                          o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin,
                          o("WASmaxJsx").smax(
                            "spam_list",
                            {
                              jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, s),
                            },
                            [].concat(
                              o("WASmaxChildren").REPEATED_CHILD(c, n, 0, 210),
                              o("WASmaxChildren").REPEATED_CHILD(d, r, 0, 5),
                              o("WASmaxChildren").REPEATED_CHILD(m, a, 0, 5),
                            ),
                          ),
                          u,
                        ),
                        p,
                      ),
                      _,
                    ),
                    f,
                  ),
                ),
              ),
              e,
            ),
            i,
          ),
          l,
        );
      return h;
    }
    function _(e, t) {
      if (t.messageSender) return L(e, t.messageSender);
      if (t.messageRecipient)
        return o(
          "WASmaxOutSpamMessageRecipientMixin",
        ).mergeMessageRecipientMixin(e, t.messageRecipient);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function f(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          k(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h() {
      var e = o("WASmaxJsx").smax("uistate", { value: "spam_banner" });
      return e;
    }
    function y(e) {
      var t = e.hasUistate,
        n = o("WASmaxJsx").smax(
          "spam_list",
          null,
          o("WASmaxJsx").smax(
            "uistateset",
            null,
            o("WASmaxChildren").HAS_OPTIONAL_CHILD(h, t),
          ),
        );
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(
        o("WASmaxJsx").smax("extension_screen", null),
        e,
      );
      return t;
    }
    function v(e) {
      var t = e.extensionScreenArgs,
        n = o("WASmaxJsx").smax(
          "user_initiated_extension",
          null,
          o("WASmaxChildren").REPEATED_CHILD(b, t, 1, 100),
        );
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.messageFrom,
        n = o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) });
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendIndividualReportRPC = e),
      (l.parseIndividualReportResponseError = s),
      (l.parseIndividualReportResponseSuccess = u),
      (l.makeIndividualReportRequest = p));
  },
  98,
);
