__d(
  "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceIdentityMixin",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
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
      var s = o("WASmaxInPreKeysPreKeyMixin").parsePreKeyMixin(e),
        u = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!u.success) return u;
      var c = o("WASmaxInPreKeysDeviceIdentityMixin").parseDeviceIdentityMixin(
        e,
      );
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { t: n.value, isCloudApi: r.value },
          a.value,
          { keyTypeMixin: i.success ? i.value : null },
          l.value,
          { preKeyMixin: s.success ? s.value : null },
          u.value,
          { deviceIdentityMixin: c.success ? c.value : null },
        ),
      );
    }
    l.parseFetchKeyBundlesUserSuccessMixin = e;
  },
  98,
);
