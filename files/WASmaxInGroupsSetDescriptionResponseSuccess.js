__d(
  "WASmaxInGroupsSetDescriptionResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ t: r.value }, a.value),
          )
        : a;
    }
    l.parseSetDescriptionResponseSuccess = e;
  },
  98,
);
