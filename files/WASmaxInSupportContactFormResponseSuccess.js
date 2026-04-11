__d(
  "WASmaxInSupportContactFormResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInSupportHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "response");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "message");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "ticket_id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "group_jid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "status",
        "ok",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentString(a.value);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentString(i.value);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").contentString(l.value);
      if (!d.success) return d;
      var m = o(
        "WASmaxInSupportHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                responseStatus: s.value,
                responseMessageElementValue: u.value,
                responseTicketIdElementValue: c.value,
                responseGroupJidElementValue: d.value,
              },
              m.value,
            ),
          )
        : m;
    }
    l.parseContactFormResponseSuccess = e;
  },
  98,
);
