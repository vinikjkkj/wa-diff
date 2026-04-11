__d(
  "WASmaxInPsaResetSmbLastQpPrefetchTimestampRequest",
  [
    "WAResultOrError",
    "WASmaxInPsaServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "reset_smb_last_qp_prefetch_timestamp",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "psa",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInPsaServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, type: a.value }, i.value),
          )
        : i;
    }
    l.parseResetSmbLastQpPrefetchTimestampRequest = e;
  },
  98,
);
