__d(
  "WASmaxInBizThreadDataSubtypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "notif_sub_type");
      return t.success
        ? o("WAResultOrError").makeResult({ notifSubType: t.value })
        : t;
    }
    l.parseSubtypeMixin = e;
  },
  98,
);
