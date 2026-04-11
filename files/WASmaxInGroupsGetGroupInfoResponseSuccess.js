__d(
  "WASmaxInGroupsGetGroupInfoResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "size",
        0,
        19999,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ size: n.value }, r.value, {
          dedupAttrsMixin: a.success ? a.value : null,
        }),
      );
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "group", e);
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
      return c.success
        ? o("WAResultOrError").makeResult({ type: s.value, group: a.value })
        : c;
    }
    ((l.parseGetGroupInfoResponseSuccessGroup = e),
      (l.parseGetGroupInfoResponseSuccess = s));
  },
  98,
);
