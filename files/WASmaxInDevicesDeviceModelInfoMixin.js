__d(
  "WASmaxInDevicesDeviceModelInfoMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "platform");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "model");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").optionalChildWithTag(t, "platform", e);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "model", s);
      return r.success
        ? o("WAResultOrError").makeResult({ platform: n.value, model: r.value })
        : r;
    }
    ((l.parseDeviceModelInfoPlatform = e),
      (l.parseDeviceModelInfoModel = s),
      (l.parseDeviceModelInfoMixin = u));
  },
  98,
);
