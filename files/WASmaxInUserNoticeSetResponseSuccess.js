__d(
  "WASmaxInUserNoticeSetResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxInUserNoticeStageMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ t: n.value }, r.value),
          )
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "notice", e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, { notice: a.value }),
          )
        : i;
    }
    ((l.parseSetResponseSuccessNotice = e), (l.parseSetResponseSuccess = s));
  },
  98,
);
