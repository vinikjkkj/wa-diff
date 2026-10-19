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
            a = c(r, n);
          if (a.success)
            return { name: "IndividualReportResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "IndividualReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("IndividualReport", {
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
      var t = e.messageSenderOrRecipientMixinGroupArgs,
        n = f(
          o("WASmaxOutSpamMessageMixin").mergeMessageMixin(
            o("WASmaxJsx").smax("message", null),
            e,
          ),
          t,
        );
      return n;
    }
    function m(e) {
      var t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(
        o("WASmaxJsx").smax("call", null),
        e,
      );
      return t;
    }
    function p(e) {
      var t = R(o("WASmaxJsx").smax("user_initiated_extension", null), e);
      return t;
    }
    function _(e) {
      var t,
        n = e.messageArgs,
        r = e.callArgs,
        a = e.userInitiatedExtensionArgs,
        i = e.fRXMixinArgs,
        l = e.isKnownChatMixinArgs,
        s = e.spamListJid,
        u = e.bizOptOutMixinArgs,
        c = e.uIStateSetMixinArgs,
        _ = e.bizReportMixinArgs,
        f = e.tCTokenMixinArgs,
        g = (t = o("WASmaxMixins")).optionalMerge(
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
                    h,
                    t.optionalMerge(
                      o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin,
                      t.optionalMerge(
                        b,
                        t.optionalMerge(
                          o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin,
                          o("WASmaxJsx").smax(
                            "spam_list",
                            {
                              jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, s),
                            },
                            [].concat(
                              o("WASmaxChildren").REPEATED_CHILD(d, n, 0, 210),
                              o("WASmaxChildren").REPEATED_CHILD(m, r, 0, 5),
                              o("WASmaxChildren").REPEATED_CHILD(p, a, 0, 5),
                            ),
                          ),
                          u,
                        ),
                        c,
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
      return g;
    }
    function f(e, t) {
      if (t.messageSender) return E(e, t.messageSender);
      if (t.messageRecipient)
        return o(
          "WASmaxOutSpamMessageRecipientMixin",
        ).mergeMessageRecipientMixin(e, t.messageRecipient);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function g(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          I(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y() {
      var e = o("WASmaxJsx").smax("uistate", { value: "spam_banner" });
      return e;
    }
    function C(e) {
      var t = e.hasUistate,
        n = o("WASmaxJsx").smax(
          "spam_list",
          null,
          o("WASmaxJsx").smax(
            "uistateset",
            null,
            o("WASmaxChildren").HAS_OPTIONAL_CHILD(y, t),
          ),
        );
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(
        o("WASmaxJsx").smax("extension_screen", null),
        e,
      );
      return t;
    }
    function S(e) {
      var t = e.extensionScreenArgs,
        n = o("WASmaxJsx").smax(
          "user_initiated_extension",
          null,
          o("WASmaxChildren").REPEATED_CHILD(v, t, 1, 100),
        );
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = e.messageFrom,
        n = o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) });
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendIndividualReportRPC = e),
      (l.parseIndividualReportResponseError = u),
      (l.parseIndividualReportResponseSuccess = c),
      (l.makeIndividualReportRequestSpamListMessage = d),
      (l.makeIndividualReportRequestSpamListCall = m),
      (l.makeIndividualReportRequestSpamListUserInitiatedExtension = p),
      (l.makeIndividualReportRequest = _),
      (l.mergeMessageSenderOrRecipientMixinGroup = f),
      (l.mergeTCTokenMixin = h),
      (l.makeUIStateSetUistatesetUistate = y),
      (l.mergeUIStateSetMixin = b),
      (l.makeUserInitiatedExtensionExtensionScreen = v),
      (l.mergeUserInitiatedExtensionMixin = R),
      (l.mergeMessageSenderMixin = E),
      (l.mergePrivacyTokenContentsMixin = I));
  },
  98,
);
