__d(
  "WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin",
  ["WAResultOrError", "WASmaxInPreKeysDeviceSuccessMixin", "WASmaxParseUtils"],
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
      var a = o("WASmaxInPreKeysDeviceSuccessMixin").parseDeviceSuccessMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ t: n.value, isCloudApi: r.value }, a.value),
          )
        : a;
    }
    l.parseFetchKeyBundlesUserSuccessMixin = e;
  },
  98,
);
