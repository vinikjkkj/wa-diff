__d(
  "WASmaxInBlocklistsGetBlockListResponseForceMigratedSuccessWithMismatch",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsBlocklistIdentifierMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "jid",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "active",
        "true",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInBlocklistsBlocklistIdentifierMixin",
      ).parseBlocklistIdentifierMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ jid: n.value, active: r.value }, a.value),
          )
        : a;
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
      var m = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "addressing_mode",
        "lid",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "dirty",
        "true",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "item",
        0,
        64e3,
        e,
      );
      return _.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            listDhash: d.value,
            listAddressingMode: m.value,
            listDirty: p.value,
            listItem: _.value,
          })
        : _;
    }
    ((l.parseGetBlockListResponseForceMigratedSuccessWithMismatchListItem = e),
      (l.parseGetBlockListResponseForceMigratedSuccessWithMismatch = s));
  },
  98,
);
