__d(
  "WASmaxInBlocklistsUpdateOptOutListResponseSuccessWithMatch",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsBizOptOutResponseMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "item");
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
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
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "matched",
        "true",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(r.value, "dhash");
      if (!m.success) return m;
      var p = o(
        "WASmaxInBlocklistsBizOptOutResponseMixin",
      ).parseBizOptOutResponseMixin(a.value);
      return p.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            listMatched: d.value,
            listDhash: m.value,
            listItemBizOptOutResponseMixin: p.value,
          })
        : p;
    }
    l.parseUpdateOptOutListResponseSuccessWithMatch = e;
  },
  98,
);
