__d(
  "WASmaxInMdCompanionFinishResponseSuccess",
  ["WASmaxInMdIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    l.parseCompanionFinishResponseSuccess = e;
  },
  98,
);
