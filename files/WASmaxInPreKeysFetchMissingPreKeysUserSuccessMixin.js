__d(
  "WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup",
    "WASmaxInPreKeysEnums",
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
      var i = o(
        "WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup",
      ).parseDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            t: r.value,
            isCloudApi: a.value,
            deviceSuccessOrFetchMissingPreKeysErrorMixinGroup: i.value,
          })
        : i;
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
