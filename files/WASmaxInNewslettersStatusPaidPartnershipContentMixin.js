__d(
  "WASmaxInNewslettersStatusPaidPartnershipContentMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "paid_partnership",
      );
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    l.parseStatusPaidPartnershipContentMixin = e;
  },
  98,
);
