__d(
  "WASmaxInBlocklistsGuestNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "guest_name");
      return t.success
        ? o("WAResultOrError").makeResult({ guestName: t.value })
        : t;
    }
    l.parseGuestNameMixin = e;
  },
  98,
);
