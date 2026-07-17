__d(
  "WAWebSocketLogoutStorageUtils",
  [
    "Promise",
    "WAWebFtsClient",
    "WAWebFtsStorage",
    "WAWebJobsStorage",
    "WAWebLruMediaStorageUtils",
    "WAWebModelStorage",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebWorkerStorage",
    "asyncToGeneratorRuntime",
    "cr:10201",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = [
            o("WAWebModelStorage").destroy(),
            o("WAWebLruMediaStorageUtils").destroyStorage(),
          ];
          (t.push(o("WAWebFtsStorage").destroy()),
            t.push(o("WAWebOffdStorage").destroy()),
            t.push(o("WAWebJobsStorage").destroy()),
            t.push(o("WAWebQplStorage").destroy()),
            t.push(o("WAWebFtsClient").ftsClient.clearInitializationPromises()),
            t.push(o("WAWebFtsClient").ftsClient.destroyExternalStorage()),
            t.push(o("WAWebWorkerStorage").destroy()),
            yield (e || (e = n("Promise"))).all(t));
        })),
        u.apply(this, arguments)
      );
    }
    l.destroyStorage = s;
  },
  98,
);
