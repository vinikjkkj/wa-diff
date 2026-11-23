__d(
  "WASmaxInDevicesDeviceListMixin",
  [
    "WAResultOrError",
    "WASmaxInDevicesDeviceModelInfoMixin",
    "WASmaxInDevicesDhashMixin",
    "WASmaxInDevicesIdentityKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 1, 999);
      if (!n.success) return n;
      var r = o("WASmaxInDevicesIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInDevicesDeviceModelInfoMixin",
      ).parseDeviceModelInfoMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ id: n.value }, r.value, {
          deviceModelInfoMixin: a.success ? a.value : null,
        }),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "devices");
      if (!n.success) return n;
      var r = o("WASmaxInDevicesDhashMixin").parseDhashMixin(t),
        a = o("WASmaxParseUtils").mapChildrenWithTag(t, "device", 0, 25, e);
      return a.success
        ? o("WAResultOrError").makeResult({
            dhashMixin: r.success ? r.value : null,
            device: a.value,
          })
        : a;
    }
    ((l.parseDeviceListDevice = e), (l.parseDeviceListMixin = s));
  },
  98,
);
