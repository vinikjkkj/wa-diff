__d(
  "WASmaxSpamStatusReportV2RPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorForbiddenMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorRateOverlimitMixin",
    "WASmaxInSpamReportIdMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutSpamBaseIQSetRequestMixin",
    "WASmaxOutSpamBaseReportMixin",
    "WASmaxOutSpamEntitySubjectMixin",
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
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return { name: "StatusReportV2ResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "StatusReportV2ResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReportV2", {
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
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!s.success) return s;
      var u = m(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup:
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
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
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
      var t = e.entitySubjectMixinArgs,
        n = e.spamListJid,
        r = e.statusFrom,
        a = e.reportableNewsletterStatusMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin,
          o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
            o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
              o("WASmaxJsx").smax(
                "iq",
                null,
                o("WASmaxJsx").smax(
                  "spam_list",
                  { jid: o("WAWap").JID(n) },
                  _(
                    o("WASmaxJsx").smax("status", {
                      from: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, r),
                    }),
                    a,
                  ),
                ),
              ),
            ),
            e,
          ),
          t,
        );
      return i;
    }
    function m(e) {
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
      var r = o("WASmaxInSpamIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(
        e,
      );
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInSpamIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a],
          );
    }
    function p(e) {
      var t = e.statusServerId,
        n = e.statusT,
        r = e.statusNewsletterTextOrMediaMixinGroupArgs,
        a = f(
          o("WASmaxJsx").smax("status", {
            server_id: o("WAWap").INT(t),
            t: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e, t) {
      if (t.statusNewsletterText) return C(e, t.statusNewsletterText);
      if (t.statusNewsletterMedia) return h(e, t.statusNewsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function g(e) {
      var t = e.plaintextMediatype,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = R(
          o("WASmaxJsx").smax(
            "status",
            null,
            v(
              o("WASmaxJsx").smax("plaintext", {
                mediatype: o("WAWap").CUSTOM_STRING(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y(e) {
      var t = e.newsletterPlaintextPayloadMixinArgs,
        n = E(
          o("WASmaxJsx").smax(
            "status",
            null,
            v(o("WASmaxJsx").smax("plaintext", null), t),
          ),
        );
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = e.plaintextElementValue,
        n = o("WASmaxJsx").smax("plaintext", null, t);
      return n;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S() {
      var e = o("WASmaxJsx").smax("status", { type: "media" });
      return e;
    }
    function R(e) {
      var t = S();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function L() {
      var e = o("WASmaxJsx").smax("status", { type: "text" });
      return e;
    }
    function E(e) {
      var t = L();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendStatusReportV2RPC = e),
      (l.parseStatusReportV2ResponseError = u),
      (l.parseStatusReportV2ResponseSuccess = c),
      (l.makeStatusReportV2Request = d),
      (l.parseIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup =
        m),
      (l.mergeReportableNewsletterStatusMixin = _),
      (l.mergeStatusNewsletterTextOrMediaMixinGroup = f),
      (l.mergeStatusNewsletterMediaMixin = h),
      (l.mergeStatusNewsletterTextMixin = C),
      (l.mergeNewsletterPlaintextPayloadMixin = v),
      (l.mergeStatusContentTypeMediaMixin = R),
      (l.mergeStatusContentTypeTextMixin = E));
  },
  98,
);
