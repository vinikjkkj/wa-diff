__d(
  "WASmaxInWaffleForceSuspendStateResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "npr");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentStringEnum(
        r.value,
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ nprElementValue: a.value }, i.value),
          )
        : i;
    }
    l.parseForceSuspendStateResponseSuccess = e;
  },
  98,
);
