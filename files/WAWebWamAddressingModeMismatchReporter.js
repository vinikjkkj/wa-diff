__d(
  "WAWebWamAddressingModeMismatchReporter",
  ["WAWebAddressingModeMismatchWamEvent", "WAWebWamAddressingModeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      new (o(
        "WAWebAddressingModeMismatchWamEvent",
      ).AddressingModeMismatchWamEvent)(
        babelHelpers.extends({}, e, {
          localAddressingMode: o(
            "WAWebWamAddressingModeUtils",
          ).getWamAddressingModeFromString(e.localAddressingMode),
          serverAddressingMode: o(
            "WAWebWamAddressingModeUtils",
          ).getWamAddressingModeFromString(e.serverAddressingMode),
        }),
      ).commit();
    }
    l.logAddressingModeMismatch = e;
  },
  98,
);
