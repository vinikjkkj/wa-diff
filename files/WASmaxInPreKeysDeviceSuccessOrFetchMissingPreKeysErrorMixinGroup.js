__d(
  "WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceSuccessMixin",
    "WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPreKeysDeviceSuccessMixin").parseDeviceSuccessMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeviceSuccess",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin",
      ).parseFetchMissingPreKeysDeviceErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "FetchMissingPreKeysDeviceError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["DeviceSuccess", "DeviceError"],
            [t, n],
          );
    }
    l.parseDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup = e;
  },
  98,
);
