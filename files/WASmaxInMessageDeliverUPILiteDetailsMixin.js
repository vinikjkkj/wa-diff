__d(
  "WASmaxInMessageDeliverUPILiteDetailsMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "upi_lite_details");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "lite_reference_number");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "lite_arqc");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        e,
        "lite_timestamp",
        1577865600,
        4102473600,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "lite_purpose",
        o("WASmaxInMessageDeliverEnums").ENUM_DEREGISTER_INITTOPUP_PAY_TOPUP,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            liteReferenceNumber: n.value,
            liteArqc: r.value,
            liteTimestamp: a.value,
            litePurpose: i.value,
          })
        : i;
    }
    l.parseUPILiteDetailsMixin = e;
  },
  98,
);
