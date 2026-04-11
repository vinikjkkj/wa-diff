__d(
  "WASmaxInPsaChatBlockSetResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInPsaEnums",
    "WASmaxInPsaIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "blocking");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "status",
        o("WASmaxInPsaEnums").ENUM_BLOCKED_UNBLOCKED,
      );
      if (!a.success) return a;
      var i = o("WASmaxInPsaIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ blockingStatus: a.value }, i.value),
          )
        : i;
    }
    l.parseChatBlockSetResponseSuccess = e;
  },
  98,
);
