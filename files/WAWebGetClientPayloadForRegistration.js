__d(
  "WAWebGetClientPayloadForRegistration",
  [
    "Promise",
    "WALogger",
    "WAWebClientPayload",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = self.performance.now(),
            i = yield (u || (u = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
            ]),
            l = i[0],
            c = i[1];
          if (
            (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] getClientPayloadForRegistration signalInfo ",
                    "ms",
                  ])),
                Math.ceil(self.performance.now() - a),
              )
              .tags("launch-socket-chat"),
            !c || !l)
          )
            throw r("err")("Invalid signal credentials");
          var d = self.performance.now(),
            m = yield o("WAWebClientPayload").getClientPayloadForRegistration(
              l,
              c,
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
                Math.ceil(self.performance.now() - d),
              )
              .tags("launch-socket-chat"),
            m
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.getClientPayloadForRegistration = c;
  },
  98,
);
