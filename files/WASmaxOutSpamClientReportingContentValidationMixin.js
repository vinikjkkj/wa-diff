__d(
  "WASmaxOutSpamClientReportingContentValidationMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reportingContentArgs,
        n = e.contentValidationArgs,
        r = e.reportingAdditionalInfoArgs,
        a = e.reportingTagId,
        i = e.reportingTagTsS,
        l = e.reportingTagParticipant,
        d = e.reportingTagElementValue,
        m = o("WASmaxJsx").smax(
          "reporting_validation",
          null,
          o("WASmaxJsx").smax(
            "reporting_tag",
            {
              id: o("WAWap").STANZA_ID(a),
              ts_s: o("WAWap").INT(i),
              participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, l),
            },
            d,
          ),
          o("WASmaxChildren").OPTIONAL_CHILD(s, t),
          o("WASmaxChildren").OPTIONAL_CHILD(u, n),
          o("WASmaxChildren").OPTIONAL_CHILD(c, r),
        );
      return m;
    }
    function s(e) {
      var t = e.reportingContentElementValue,
        n = o("WASmaxJsx").smax("reporting_content", null, t);
      return n;
    }
    function u(e) {
      var t = e.contentValidationType,
        n = e.reportingTokenV,
        r = e.reportingTokenElementValue,
        a = e.reportingTokenKeyElementValue,
        i = o("WASmaxJsx").smax(
          "content_validation",
          { type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t) },
          o("WASmaxJsx").smax("reporting_token", { v: o("WAWap").INT(n) }, r),
          o("WASmaxJsx").smax("reporting_token_key", null, a),
        );
      return i;
    }
    function c(e) {
      var t = e.reportingAdditionalInfoText,
        n = o("WASmaxJsx").smax("reporting_additional_info", {
          text: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function d(t) {
      var n = t.reportingValidationArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "reporting",
            null,
            o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 1e3),
          ),
        );
      return r;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeClientReportingContentValidationReportingReportingValidation = e),
      (l.makeClientReportingContentValidationReportingReportingValidationReportingContent =
        s),
      (l.makeClientReportingContentValidationReportingReportingValidationContentValidation =
        u),
      (l.makeClientReportingContentValidationReportingReportingValidationReportingAdditionalInfo =
        c),
      (l.mergeClientReportingContentValidationMixin = m));
  },
  98,
);
