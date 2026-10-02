__d(
  "WASmaxInReceiptDeliverBizRolesMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "actual_actors",
        0,
        100,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "host_storage",
        0,
        100,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "privacy_mode_ts",
        1577865600,
        4102473600,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizActualActors: r.value,
            bizHostStorage: a.value,
            bizPrivacyModeTs: i.value,
          })
        : i;
    }
    l.parseDeliverBizRolesMixin = e;
  },
  98,
);
