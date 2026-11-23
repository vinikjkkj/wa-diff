__d(
  "WAWebBotProfileAction",
  ["WAWebRequestBotProfiles"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = (
        await o("WAWebRequestBotProfiles").requestBotProfiles([
          { id: e, isDefault: !1, personaId: t },
        ])
      )[0];
      return n;
    }
    l.queryBotProfile = e;
  },
  98,
);
