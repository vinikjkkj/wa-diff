__d(
  "WAWebGetClientPayloadForRegistration",
  ["WALogger", "WAWebClientPayload", "WAWebSignalStoreApi", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = self.performance.now(),
        a = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
          o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
        ]),
        i = a[0],
        l = a[1];
      if (
        (o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForRegistration signalInfo ",
                "ms",
              ])),
            Math.ceil(self.performance.now() - n),
          )
          .tags("launch-socket-chat"),
        !l || !i)
      )
        throw r("err")("Invalid signal credentials");
      var u = self.performance.now(),
        c = await o("WAWebClientPayload").getClientPayloadForRegistration(
          i,
          l,
          t,
        );
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForRegistration payload ",
                "ms",
              ])),
            Math.ceil(self.performance.now() - u),
          )
          .tags("launch-socket-chat"),
        c
      );
    }
    l.getClientPayloadForRegistration = u;
  },
  98,
);
