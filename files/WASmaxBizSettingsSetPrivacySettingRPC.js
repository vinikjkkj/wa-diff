__d(
  "WASmaxBizSettingsSetPrivacySettingRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInBizSettingsIQErrorResponseMixin",
    "WASmaxInBizSettingsIQResultResponseMixin",
    "WASmaxInBizSettingsPrivacySettingErrors",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
    "WASmaxJsx",
    "WASmaxMixins",
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
            return { name: "SetPrivacySettingResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SetPrivacySettingResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetPrivacySetting", {
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
      var a = o(
        "WASmaxInBizSettingsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizSettingsPrivacySettingErrors",
      ).parsePrivacySettingErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorPrivacySettingErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o(
          "WASmaxInBizSettingsSmbDataSharingSettingMixin",
        ).parseSmbDataSharingSettingMixin(r.value),
        i = o(
          "WASmaxInBizSettingsIQResultResponseMixin",
        ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { privacySmbDataSharingSettingMixin: a.success ? a.value : null },
              i.value,
            ),
          )
        : i;
    }
    function d(e) {
      var t = e.smbDataSharingSettingMixinArgs,
        n = h(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "w:biz",
              to: o("WAWap").S_WHATSAPP_NET,
              smax_id: o("WAWap").INT(110),
            },
            o("WASmaxMixins").optionalMerge(
              p,
              o("WASmaxJsx").smax("privacy", null),
              t,
            ),
          ),
        );
      return n;
    }
    function m(e) {
      var t = o("WASmaxJsx").smax(
        "privacy",
        null,
        f(o("WASmaxJsx").smax("smb_data_sharing_with_meta_consent", null), e),
      );
      return t;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _(e) {
      var t = e.anyValue,
        n = e.anyVersion,
        r = o("WASmaxJsx").smax("smax$any", {
          value: o("WAWap").CUSTOM_STRING(t),
          version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function h(e) {
      var t = g();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSetPrivacySettingRPC = e),
      (l.parseSetPrivacySettingResponseError = u),
      (l.parseSetPrivacySettingResponseSuccess = c),
      (l.makeSetPrivacySettingRequest = d),
      (l.mergeSmbDataSharingSettingMixin = p),
      (l.mergeSmbDataSharingSettingValueMixin = f),
      (l.mergeBaseIQSetRequestMixin = h));
  },
  98,
);
