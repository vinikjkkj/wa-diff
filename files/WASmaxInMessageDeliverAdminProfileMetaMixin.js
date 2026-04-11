__d(
  "WASmaxInMessageDeliverAdminProfileMetaMixin",
  ["WASmaxInMessageDeliverAdminProfileMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "admin_profile",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverAdminProfileMixin",
      ).parseAdminProfileMixin(r.value);
      return (a.success, a);
    }
    l.parseAdminProfileMetaMixin = e;
  },
  98,
);
