__d(
  "WASmaxInDevicesICDCFromServerMixin",
  [
    "WAResultOrError",
    "WASmaxInDevicesICDCDirtyMixin",
    "WASmaxInDevicesICDCSignedListMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesICDCSignedListMixin").parseICDCSignedListMixin(
        e,
      );
      if (!n.success) return n;
      var r = o("WASmaxInDevicesICDCDirtyMixin").parseICDCDirtyMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          iCDCDirtyMixin: r.success ? r.value : null,
        }),
      );
    }
    l.parseICDCFromServerMixin = e;
  },
  98,
);
