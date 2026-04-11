__d(
  "WASmaxInBlocklistsBizOptOutJidMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "biz_opt_out_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ bizOptOutJid: t.value })
        : t;
    }
    l.parseBizOptOutJidMixin = e;
  },
  98,
);
