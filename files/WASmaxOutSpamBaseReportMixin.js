__d(
  "WASmaxOutSpamBaseReportMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.spamListSpamFlow,
        n = e.spamListWiTraceId,
        r = o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "spam" },
          o("WASmaxJsx").smax("spam_list", {
            spam_flow: o("WAWap").CUSTOM_STRING(t),
            wi_trace_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBaseReportMixin = s;
  },
  98,
);
