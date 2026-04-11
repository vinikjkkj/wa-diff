__d(
  "WASmaxInBrPaymentIQErrorGenericResponseMixin",
  ["WAResultOrError", "WASmaxParseReference", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        s.value,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrString(r.value, "text");
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrIntRange(r.value, "code", 1, void 0);
      return d.success
        ? o("WAResultOrError").makeResult({
            type: l.value,
            errorText: c.value,
            errorCode: d.value,
          })
        : d;
    }
    l.parseIQErrorGenericResponseMixin = e;
  },
  98,
);
