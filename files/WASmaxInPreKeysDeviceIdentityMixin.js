__d(
  "WASmaxInPreKeysDeviceIdentityMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "device-identity");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({
            deviceIdentityElementValue: n.value,
          })
        : n;
    }
    l.parseDeviceIdentityMixin = e;
  },
  98,
);
