__d(
  "WASmaxInGroupsUnlinkGroupsResponseServerError",
  ["WASmaxInGroupsBaseServerErrorMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    l.parseUnlinkGroupsResponseServerError = e;
  },
  98,
);
