__d(
  "WASmaxOutSpamReportableNewsletterStatusMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamStatusNewsletterTextOrMediaMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusServerId,
        n = e.statusT,
        r = e.statusNewsletterTextOrMediaMixinGroupArgs,
        a = o(
          "WASmaxOutSpamStatusNewsletterTextOrMediaMixinGroup",
        ).mergeStatusNewsletterTextOrMediaMixinGroup(
          o("WASmaxJsx").smax("status", {
            server_id: o("WAWap").INT(t),
            t: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeReportableNewsletterStatusMixin = s;
  },
  98,
);
