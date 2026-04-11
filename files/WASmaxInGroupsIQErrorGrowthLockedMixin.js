__d(
  "WASmaxInGroupsIQErrorGrowthLockedMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "growth_locked");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "invite",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "expiration", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            expiration: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "text",
        "growth-locked",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        t,
        "code",
        436,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            text: a.value,
            code: i.value,
            growthLocked: r.value,
          })
        : i;
    }
    ((l.parseIQErrorGrowthLockedGrowthLocked = e),
      (l.parseIQErrorGrowthLockedMixin = s));
  },
  98,
);
