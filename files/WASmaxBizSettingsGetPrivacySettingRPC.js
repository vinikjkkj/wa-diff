__d(
  "WASmaxBizSettingsGetPrivacySettingRPC",
  [
    "WAComms",
    "WAResultOrError",
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
    async function e(e) {
      var t = c(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = u(n, t);
      if (r.success)
        return { name: "GetPrivacySettingResponseSuccess", value: r.value };
      var a = s(n, t);
      if (a.success)
        return { name: "GetPrivacySettingResponseError", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetPrivacySetting", {
          Success: r,
          Error: a,
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
      ).parseSmbDataSharingSettingMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizSettingsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { privacySmbDataSharingSettingMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c() {
      var e = m(
        o("WASmaxJsx").smax(
          "iq",
          {
            xmlns: "w:biz",
            to: o("WAWap").S_WHATSAPP_NET,
            smax_id: o("WAWap").INT(109),
          },
          o("WASmaxJsx").smax("privacy", null),
        ),
      );
      return e;
    }
    function d() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function m(e) {
      var t = d();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetPrivacySettingRPC = e),
      (l.parseGetPrivacySettingResponseError = s),
      (l.parseGetPrivacySettingResponseSuccess = u),
      (l.makeGetPrivacySettingRequest = c));
  },
  98,
);
