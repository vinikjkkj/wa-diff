__d(
  "WASmaxInMessageDeliverBillMetadataMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bill_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "biller_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "bill_status",
        o("WASmaxInMessageDeliverEnums").ENUM_FAILED_PENDING_SUCCESS,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "bill_ref_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "biller_name");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "biller_image",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "bill_ref_number",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "txn_ref_id",
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            billerId: n.value,
            billStatus: r.value,
            billRefId: a.value,
            billerName: i.value,
            billerImage: l.value,
            billRefNumber: s.value,
            txnRefId: u.value,
          })
        : u;
    }
    l.parseBillMetadataMixin = e;
  },
  98,
);
