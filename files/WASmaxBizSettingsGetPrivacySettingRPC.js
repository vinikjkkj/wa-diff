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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = c(n, t);
          if (r.success)
            return { name: "GetPrivacySettingResponseSuccess", value: r.value };
          var a = u(n, t);
          if (a.success)
            return { name: "GetPrivacySettingResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetPrivacySetting", {
              Success: r,
              Error: a,
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
    function d() {
      var e = p(
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
    function m() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function p(e) {
      var t = m();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetPrivacySettingRPC = e),
      (l.parseGetPrivacySettingResponseError = u),
      (l.parseGetPrivacySettingResponseSuccess = c),
      (l.makeGetPrivacySettingRequest = d),
      (l.mergeBaseIQGetRequestMixin = p));
  },
  98,
);
