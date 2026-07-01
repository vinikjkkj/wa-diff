__d(
  "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysBotIdentityKeyAuthMixin",
    "WASmaxInPreKeysDeviceIdentityMixin",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
    "WASmaxInPreKeysPQKeyMixin",
    "WASmaxInPreKeysPreKeyMixin",
    "WASmaxInPreKeysRegistrationIDMixin",
    "WASmaxInPreKeysSignedPreKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_cloud_api",
        "true",
      );
      if (!r.success) return r;
      var a = o("WASmaxInPreKeysRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysKeyTypeMixin").parseKeyTypeMixin(e),
        l = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!l.success) return l;
      var s = o(
          "WASmaxInPreKeysBotIdentityKeyAuthMixin",
        ).parseBotIdentityKeyAuthMixin(e),
        u = o("WASmaxInPreKeysPreKeyMixin").parsePreKeyMixin(e),
        c = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!c.success) return c;
      var d = o("WASmaxInPreKeysPQKeyMixin").parsePQKeyMixin(e),
        m = o("WASmaxInPreKeysDeviceIdentityMixin").parseDeviceIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { t: n.value, isCloudApi: r.value },
          a.value,
          { keyTypeMixin: i.success ? i.value : null },
          l.value,
          {
            botIdentityKeyAuthMixin: s.success ? s.value : null,
            preKeyMixin: u.success ? u.value : null,
          },
          c.value,
          {
            pQKeyMixin: d.success ? d.value : null,
            deviceIdentityMixin: m.success ? m.value : null,
          },
        ),
      );
    }
    l.parseFetchKeyBundlesUserSuccessMixin = e;
  },
  98,
);
