__d(
  "WAWebSettingsSyncHelpers",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, r) {
      n === "app"
        ? await o("WAWebBackendApi").frontendSendAndReceive("applyAppSetting", {
            field: e,
            value: t,
            timestamp: r,
          })
        : await o("WAWebBackendApi").frontendSendAndReceive(
            "applyPerChatSetting",
            { field: e, value: t, chatJid: n },
          );
    }
    l.applySettingUpdate = e;
  },
  98,
);
