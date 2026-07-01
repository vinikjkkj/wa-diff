__d(
  "WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysVnameFailures",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "error");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(r.value, "text");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        r.value,
        "code",
        207,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(a.value, "code", 400, 599);
      if (!s.success) return s;
      var u = o(
        "WASmaxInPreKeysIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!u.success) return u;
      var c = o("WASmaxInPreKeysVnameFailures").parseVnameFailures(a.value);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                errorText: i.value,
                errorCode: l.value,
                errorErrorCode: s.value,
              },
              u.value,
              { errorErrorVnameFailures: c.value },
            ),
          )
        : c;
    }
    l.parseSetResponsePreKeySuccessVnameFailure = e;
  },
  98,
);
