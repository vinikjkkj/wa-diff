__d(
  "WASmaxInMessageDeliverTriggerMessageCSATAttributesMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrIntRange(
        e,
        "tm_csat_cooldown",
        0,
        void 0,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "tm_csat_exp_ts",
        0,
        void 0,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            tmCsatCooldown: t.value,
            tmCsatExpTs: n.value,
          })
        : n;
    }
    l.parseTriggerMessageCSATAttributesMixin = e;
  },
  98,
);
