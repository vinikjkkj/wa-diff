__d(
  "WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsEnums",
    "WASmaxInBlocklistsIQErrorResponseMixin",
    "WASmaxInBlocklistsUpdateBlocklistErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "addressing_mode",
        o("WASmaxInBlocklistsEnums").ENUM_LID_PN,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInBlocklistsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!i.success) return i;
      var l = o(
        "WASmaxInBlocklistsUpdateBlocklistErrors",
      ).parseUpdateBlocklistErrors(r.value);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ errorAddressingMode: a.value }, i.value, {
              errorUpdateBlocklistErrors: l.value,
            }),
          )
        : l;
    }
    l.parseUpdateBlockListResponseInvalidRequest = e;
  },
  98,
);
