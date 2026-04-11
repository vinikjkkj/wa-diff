__d(
  "WASmaxInWaffleStateExistsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "suspended_state");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "npr",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      return n.success ? o("WAResultOrError").makeResult({ npr: n.value }) : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "wf_state");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "suspended_state",
        e,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentInt(a.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ wfStateElementValue: l.value }, s.value, {
              suspendedState: i.value,
            }),
          )
        : s;
    }
    ((l.parseStateExistsResponseSuccessSuspendedState = e),
      (l.parseStateExistsResponseSuccess = s));
  },
  98,
);
