__d(
  "WASmaxInMessageDeliverTransactionSyncStatusMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "sync-status",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_FULL_MISSINGFIELDNOTPARTIAL_PARTIAL,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ syncStatus: t.value })
        : t;
    }
    l.parseTransactionSyncStatusMixin = e;
  },
  98,
);
