__d(
  "WASmaxInMessageDeliverUPIComplaintMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "complaint");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "complaint-status",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "created-ts",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "updated-ts",
        0,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            complaintStatus: n.value,
            createdTs: r.value,
            updatedTs: a.value,
          })
        : a;
    }
    l.parseUPIComplaintMixin = e;
  },
  98,
);
