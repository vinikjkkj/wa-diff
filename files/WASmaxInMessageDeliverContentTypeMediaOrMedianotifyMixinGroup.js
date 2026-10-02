__d(
  "WASmaxInMessageDeliverContentTypeMediaOrMedianotifyMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverContentTypeMedianotifyMixin",
      ).parseContentTypeMedianotifyMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeMedianotify",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ContentTypeMedia", "ContentTypeMedianotify"],
            [t, n],
          );
    }
    l.parseContentTypeMediaOrMedianotifyMixinGroup = e;
  },
  98,
);
