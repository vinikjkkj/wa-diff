__d(
  "WASmaxInMdGetRefResponseSuccess",
  ["WAResultOrError", "WASmaxInMdIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "ref");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytes(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ refElementValue: a.value }, i.value),
          )
        : i;
    }
    l.parseGetRefResponseSuccess = e;
  },
  98,
);
