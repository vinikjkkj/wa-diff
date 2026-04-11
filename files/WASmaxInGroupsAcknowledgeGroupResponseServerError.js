__d(
  "WASmaxInGroupsAcknowledgeGroupResponseServerError",
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
    l.parseAcknowledgeGroupResponseServerError = e;
  },
  98,
);
