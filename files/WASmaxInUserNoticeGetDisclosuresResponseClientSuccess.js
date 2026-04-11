__d(
  "WASmaxInUserNoticeGetDisclosuresResponseClientSuccess",
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
      var r = o("WASmaxParseUtils").attrIntRange(e, "version", 1, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "type", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxInUserNoticeStageMixin").parseStageMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { t: n.value, version: r.value, type: a.value },
              i.value,
            ),
          )
        : i;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "notice",
        0,
        1 / 0,
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { notice: i.value }),
          )
        : i;
    }
    ((l.parseGetDisclosuresResponseClientSuccessNotice = e),
      (l.parseGetDisclosuresResponseClientSuccess = s));
  },
  98,
);
