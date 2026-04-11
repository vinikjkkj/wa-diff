__d(
  "WASmaxInQpSurfacesQPNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInQpSurfacesQPSurfacesMixin",
    "WASmaxInQpSurfacesServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "surfaces");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "psa",
      );
      if (!a.success) return a;
      var i = o("WASmaxInQpSurfacesQPSurfacesMixin").parseQPSurfacesMixin(
        n.value,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInQpSurfacesServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                surfacesQPSurfacesMixin: i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    l.parseQPNotificationRequest = e;
  },
  98,
);
