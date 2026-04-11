__d(
  "WAWebFtsWorker",
  [
    "CurrentWebWorker",
    "Promise",
    "WALogger",
    "WAWebFtsWorkerDelegate",
    "WAWebLoggerWorker",
    "WAWebWorkerConnect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    (o("WAWebLoggerWorker").initializeWAWebLogger(),
      r("WAWebWorkerConnect")()
        .then(function () {
          r("CurrentWebWorker").setMessageHandler(function (e) {
            if (e.__command === "@@handshake")
              return (s || (s = n("Promise"))).resolve();
            (u || (u = new (r("WAWebFtsWorkerDelegate"))()), u.enqueue(e));
          });
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[fts][worker] exception during initialization: ",
                  "",
                ])),
              t,
            )
            .sendLogs("[fts][worker] exception during initialization");
        }));
    function c() {}
    l.default = c;
  },
  98,
);
