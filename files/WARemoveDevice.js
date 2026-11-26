__d(
  "WARemoveDevice",
  [
    "WALogger",
    "WAPushSafeTypes",
    "WAResultOrError",
    "WASignalOther",
    "WASmaxDevicesRemoveRPC",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = o("WAPushSafeTypes").unsafeNotNullable(t),
        a = n.deviceId,
        i = n.identity,
        l = o("WASignalOther").sliceBytes(i, 1, 32),
        s = await o("WASmaxDevicesRemoveRPC").sendRemoveRPC({
          removeId: a,
          identityKeyMixinArgs: { anyElementValue: l },
        });
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "removeDevice result for ",
              ": ",
              " ",
            ])),
          a,
          s,
        ),
        s.name === "RemoveResponseSuccess")
      )
        return o("WAResultOrError").makeResult();
      s.name;
      var u = s.value.errorRemoveDeviceErrors;
      if (u.name !== "RetryableIQError")
        return o("WAResultOrError").makeError();
      throw (u.name, r("err")("Failed with a retryable error"));
    }
    l.removeDevice = s;
  },
  98,
);
