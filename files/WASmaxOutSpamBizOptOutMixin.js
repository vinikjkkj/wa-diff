__d(
  "WASmaxOutSpamBizOptOutMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.bizOptOutReason,
        a = e.bizOptOutBusinessDiscoveryEntryPoint,
        i = e.bizOptOutBusinessDiscoveryTimestamp,
        l = e.bizOptOutFirstMessage,
        s = e.bizOptOutBusinessDiscoveryId,
        u = o("WASmaxJsx").smax("biz_opt_out", {
          reason: (t = o("WASmaxAttrs")).OPTIONAL(
            (n = o("WAWap")).CUSTOM_STRING,
            r,
          ),
          business_discovery_entry_point: t.OPTIONAL(n.CUSTOM_STRING, a),
          business_discovery_timestamp: t.OPTIONAL(n.INT, i),
          first_message: t.OPTIONAL(n.CUSTOM_STRING, l),
          business_discovery_id: t.OPTIONAL(n.CUSTOM_STRING, s),
        });
      return u;
    }
    function s(t) {
      var n = t.bizOptOutArgs,
        r = o("WASmaxJsx").smax(
          "spam_list",
          null,
          o("WASmaxChildren").OPTIONAL_CHILD(e, n),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeBizOptOutBizOptOut = e), (l.mergeBizOptOutMixin = u));
  },
  98,
);
