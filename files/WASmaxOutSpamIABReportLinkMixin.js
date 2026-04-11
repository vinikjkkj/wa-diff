__d(
  "WASmaxOutSpamIABReportLinkMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.iabReportedLink,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("iab", {
            reported_link: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIABReportLinkMixin = s;
  },
  98,
);
