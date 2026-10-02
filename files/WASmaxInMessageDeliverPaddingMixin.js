__d(
  "WASmaxInMessageDeliverPaddingMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAnonPaddingMixin",
    "WASmaxInMessageDeliverWireSizePaddingMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverAnonPaddingMixin").parseAnonPaddingMixin(
          e,
        ),
        r = o(
          "WASmaxInMessageDeliverWireSizePaddingMixin",
        ).parseWireSizePaddingMixin(e);
      return o("WAResultOrError").makeResult({
        anonPaddingMixin: n.success ? n.value : null,
        wireSizePaddingMixin: r.success ? r.value : null,
      });
    }
    l.parsePaddingMixin = e;
  },
  98,
);
