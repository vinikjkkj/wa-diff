__d(
  "WAWebFalcoCanonicalIsCompanion",
  ["WAJids", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserUtils").getMaybeMeDeviceId();
      return e == null ? void 0 : e !== o("WAJids").DEFAULT_DEVICE_ID;
    }
    l.default = e;
  },
  98,
);
