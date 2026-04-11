__d(
  "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMismatch",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsBizOptOutResponseMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBlocklistsBizOptOutResponseMixin",
      ).parseBizOptOutResponseMixin(e);
      return (n.success, n);
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(n, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(n, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
        u.value,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "dhash",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "item",
        0,
        64e3,
        e,
      );
      return m.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            listDhash: d.value,
            listItem: m.value,
          })
        : m;
    }
    ((l.parseGetOptOutListResponseSuccessWithMismatchListItem = e),
      (l.parseGetOptOutListResponseSuccessWithMismatch = s));
  },
  98,
);
