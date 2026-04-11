__d(
  "WASmaxInBizLinkingGetAccountNonceResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "request");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ idElementValue: r.value })
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "detail");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "nonce");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(a.value, "request", e);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentString(i.value);
      if (!s.success) return s;
      var u = o(
        "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(t, n);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { detailNonceElementValue: s.value },
              u.value,
              { detailRequest: l.value },
            ),
          )
        : u;
    }
    ((l.parseGetAccountNonceResponseSuccessDetailRequest = e),
      (l.parseGetAccountNonceResponseSuccess = s));
  },
  98,
);
