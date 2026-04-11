__d(
  "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMatch",
  ["WAResultOrError", "WASmaxParseReference", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "category",
      ]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        u.value,
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            type: i.value,
            hasCategory: s.value != null,
          })
        : c;
    }
    l.parseGetOptOutListResponseSuccessWithMatch = e;
  },
  98,
);
