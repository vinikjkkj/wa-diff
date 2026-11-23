__d(
  "WARemoveDevice",
  [
    "WALogger",
    "WAPersistedJobManager",
    "WAPushSafeTypes",
    "WAResultOrError",
    "WASignalOther",
    "WASmaxDevicesRemoveRPC",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = o("WAPushSafeTypes").unsafeNotNullable(t),
        r = n.deviceId,
        a = n.identity,
        i = o("WASignalOther").sliceBytes(a, 1, 32),
        l = await o("WASmaxDevicesRemoveRPC").sendRemoveRPC({
          removeId: r,
          identityKeyMixinArgs: { anyElementValue: i },
        });
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "removeDevice result for ",
              ": ",
              " ",
            ])),
          r,
          l,
        ),
        l.name === "RemoveResponseSuccess")
      )
        return o("WAResultOrError").makeResult();
      l.name;
      var s = l.value.errorRemoveDeviceErrors;
      if (s.name !== "RetryableIQError")
        return o("WAResultOrError").makeError();
      s.name;
      var u = s.value.backoff;
      throw u != null
        ? new (o("WAPersistedJobManager").RetryOnBackoff)({
            algo: { type: "constant", delay: u },
            jitter: 0,
          })
        : new (o("WAPersistedJobManager").RetryOnBackoff)({
            algo: {
              type: "exponential",
              first: o("WATimeUtils").HOUR_MILLISECONDS / 60,
            },
            jitter: 0.1,
          });
    }
    l.removeDevice = s;
  },
  98,
);
