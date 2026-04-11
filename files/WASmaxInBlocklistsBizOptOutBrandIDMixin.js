__d(
  "WASmaxInBlocklistsBizOptOutBrandIDMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "biz_opt_out_brand_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "biz_jid",
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            bizOptOutBrandId: t.value,
            bizJid: n.value,
          })
        : n;
    }
    l.parseBizOptOutBrandIDMixin = e;
  },
  98,
);
