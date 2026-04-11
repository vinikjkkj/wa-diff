__d(
  "WASmaxInBizLinkingGetLinkedAccountsResponseForbidden",
  [
    "WAResultOrError",
    "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
    "WASmaxInBizLinkingIQErrorForbiddenMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizLinkingIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorForbiddenMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGetLinkedAccountsResponseForbidden = e;
  },
  98,
);
