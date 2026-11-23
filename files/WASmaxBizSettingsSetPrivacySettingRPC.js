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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = u(r, n);
      if (a.success)
        return { name: "SetPrivacySettingResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "SetPrivacySettingResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetPrivacySetting", {
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
    function u(e, t) {
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
    function c(e) {
      var t = e.smbDataSharingSettingMixinArgs,
        n = g(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "w:biz",
              to: o("WAWap").S_WHATSAPP_NET,
              smax_id: o("WAWap").INT(110),
            },
            o("WASmaxMixins").optionalMerge(
              m,
              o("WASmaxJsx").smax("privacy", null),
              t,
            ),
          ),
        );
      return n;
    }
    function d(e) {
      var t = o("WASmaxJsx").smax(
        "privacy",
        null,
        _(o("WASmaxJsx").smax("smb_data_sharing_with_meta_consent", null), e),
      );
      return t;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function p(e) {
      var t = e.anyValue,
        n = e.anyVersion,
        r = o("WASmaxJsx").smax("smax$any", {
          value: o("WAWap").CUSTOM_STRING(t),
          version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function g(e) {
      var t = f();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSetPrivacySettingRPC = e),
      (l.parseSetPrivacySettingResponseError = s),
      (l.parseSetPrivacySettingResponseSuccess = u),
      (l.makeSetPrivacySettingRequest = c));
  },
  98,
);
