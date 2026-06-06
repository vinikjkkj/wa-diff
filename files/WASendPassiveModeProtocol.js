__d(
  "WASendPassiveModeProtocol",
  [
    "WALogger",
    "WASmaxPassiveModeActiveIQRPC",
    "WASmaxPassiveModePassiveIQRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (t === "active"
            ? yield o("WASmaxPassiveModeActiveIQRPC").sendActiveIQRPC()
            : yield o("WASmaxPassiveModePassiveIQRPC").sendPassiveIQRPC(),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendPassiveModeIq: passive mode set to '",
                  "'",
                ])),
              t,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    l.sendPassiveModeProtocol = s;
  },
  98,
);
