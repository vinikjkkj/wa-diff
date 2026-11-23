__d(
  "WASendPassiveModeProtocol",
  ["WALogger", "WASmaxPassiveModeActiveIQRPC", "WASmaxPassiveModePassiveIQRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      (t === "active"
        ? await o("WASmaxPassiveModeActiveIQRPC").sendActiveIQRPC()
        : await o("WASmaxPassiveModePassiveIQRPC").sendPassiveIQRPC(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendPassiveModeIq: passive mode set to '",
              "'",
            ])),
          t,
        ));
    }
    l.sendPassiveModeProtocol = s;
  },
  98,
);
