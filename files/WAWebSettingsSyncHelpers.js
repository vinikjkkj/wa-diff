__d(
  "WAWebSettingsSyncHelpers",
  ["WAWebBackendApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === "app"
            ? yield o("WAWebBackendApi").frontendSendAndReceive(
                "applyAppSetting",
                { field: e, value: t },
              )
            : yield o("WAWebBackendApi").frontendSendAndReceive(
                "applyPerChatSetting",
                { field: e, value: t, chatJid: n },
              );
        })),
        s.apply(this, arguments)
      );
    }
    l.applySettingUpdate = e;
  },
  98,
);
