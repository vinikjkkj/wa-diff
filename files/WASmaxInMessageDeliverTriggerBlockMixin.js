__d(
  "WASmaxInMessageDeliverTriggerBlockMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "tb_cooldown", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "tb_expiration_ts",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            tbCooldown: n.value,
            tbExpirationTs: r.value,
          })
        : r;
    }
    l.parseTriggerBlockMixin = e;
  },
  98,
);
