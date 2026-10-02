__d(
  "WASmaxInMessageDeliverBroadcastEphemeralMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "eph_setting");
      return t.success
        ? o("WAResultOrError").makeResult({ ephSetting: t.value })
        : t;
    }
    l.parseBroadcastEphemeralMixin = e;
  },
  98,
);
