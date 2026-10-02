__d(
  "WASmaxOutKeyTransparencyDeviceKeyMixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceKeyId,
        n = e.deviceKeyElementValue,
        r = o("WASmaxJsx").smax("device_key", { id: o("WAWap").INT(t) }, n);
      return r;
    }
    function s(t) {
      var n = t.deviceKeyArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 100),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeDeviceKeyDeviceKey = e), (l.mergeDeviceKeyMixin = u));
  },
  98,
);
