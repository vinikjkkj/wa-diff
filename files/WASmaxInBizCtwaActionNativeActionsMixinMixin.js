__d(
  "WASmaxInBizCtwaActionNativeActionsMixinMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "native_action");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "platform");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "min_app_version");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "local_link");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "universal_link",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            platform: n.value,
            minAppVersion: r.value,
            localLink: a.value,
            universalLink: i.value,
          })
        : i;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "native_action",
        0,
        50,
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ nativeAction: n.value })
        : n;
    }
    ((l.parseNativeActionsMixinNativeAction = e),
      (l.parseNativeActionsMixinMixin = s));
  },
  98,
);
