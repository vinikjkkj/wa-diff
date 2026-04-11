__d(
  "WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceIdentityMixin",
    "WASmaxInPreKeysEnums",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
    "WASmaxInPreKeysPreKeyMixin",
    "WASmaxInPreKeysRegistrationIDMixin",
    "WASmaxInPreKeysSignedPreKeyMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, 99);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_cloud_api",
        "true",
      );
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!i.success) return i;
      var l = o("WASmaxInPreKeysKeyTypeMixin").parseKeyTypeMixin(e),
        s = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!s.success) return s;
      var u = o("WASmaxInPreKeysPreKeyMixin").parsePreKeyMixin(e),
        c = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!c.success) return c;
      var d = o("WASmaxInPreKeysDeviceIdentityMixin").parseDeviceIdentityMixin(
        e,
      );
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { id: n.value, t: r.value, isCloudApi: a.value },
          i.value,
          { keyTypeMixin: l.success ? l.value : null },
          s.value,
          { preKeyMixin: u.success ? u.value : null },
          c.value,
          { deviceIdentityMixin: d.success ? d.value : null },
        ),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "user");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        t,
        "jid",
        o("WASmaxInPreKeysEnums").USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "device", 1, 100, e);
      return a.success
        ? o("WAResultOrError").makeResult({ jid: r.value, device: a.value })
        : a;
    }
    ((l.parseFetchMissingPreKeysUserSuccessDevice = e),
      (l.parseFetchMissingPreKeysUserSuccessMixin = s));
  },
  98,
);
