__d(
  "WAWebSocketLogoutStorageUtils",
  [
    "WAWebFtsClient",
    "WAWebFtsStorage",
    "WAWebJobsStorage",
    "WAWebLabyrinthLogout",
    "WAWebLruMediaStorageUtils",
    "WAWebModelStorage",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebWorkerStorage",
    "cr:10201",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = [
        o("WAWebModelStorage").destroy(),
        o("WAWebLruMediaStorageUtils").destroyStorage(),
      ];
      (e.push(o("WAWebFtsStorage").destroy()),
        e.push(o("WAWebOffdStorage").destroy()),
        e.push(o("WAWebJobsStorage").destroy()),
        e.push(o("WAWebQplStorage").destroy()),
        e.push(o("WAWebFtsClient").ftsClient.clearInitializationPromises()),
        e.push(o("WAWebFtsClient").ftsClient.destroyExternalStorage()),
        e.push(o("WAWebLabyrinthLogout").clearLabyrinthAtLogout()),
        e.push(o("WAWebWorkerStorage").destroy()),
        await Promise.all(e));
    }
    l.destroyStorage = e;
  },
  98,
);
