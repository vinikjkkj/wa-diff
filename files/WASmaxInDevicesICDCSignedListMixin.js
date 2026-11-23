__d(
  "WASmaxInDevicesICDCSignedListMixin",
  ["WAResultOrError", "WASmaxInDevicesICDCSeqMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ts", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 1, 40072);
      if (!r.success) return r;
      var a = o("WASmaxInDevicesICDCSeqMixin").parseICDCSeqMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { ts: n.value, elementValue: r.value },
              a.value,
            ),
          )
        : a;
    }
    l.parseICDCSignedListMixin = e;
  },
  98,
);
