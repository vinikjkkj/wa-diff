__d(
  "WASmaxInUserNoticeSetResultResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInUserNoticeIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trackable");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "result", 0, 1e3);
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, result: r.value })
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "trackable", e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, { trackable: a.value }),
          )
        : i;
    }
    ((l.parseSetResultResponseSuccessTrackable = e),
      (l.parseSetResultResponseSuccess = s));
  },
  98,
);
