__d(
  "WASmaxInAbPropsExperimentConfigMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "prop");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "config_code", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "config_value");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "config_expo_key",
        0,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            configCode: n.value,
            configValue: r.value,
            configExpoKey: a.value,
          })
        : a;
    }
    l.parseExperimentConfigMixin = e;
  },
  98,
);
