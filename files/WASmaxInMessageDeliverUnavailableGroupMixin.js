__d(
  "WASmaxInMessageDeliverUnavailableGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentGroupUnavailableMixins",
    "WASmaxInMessageDeliverUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverUnavailableMixin").parseUnavailableMixin(
        e,
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentGroupUnavailableMixins",
      ).parseContentGroupUnavailableMixins(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              contentGroupUnavailableMixins: r.value,
            }),
          )
        : r;
    }
    l.parseUnavailableGroupMixin = e;
  },
  98,
);
