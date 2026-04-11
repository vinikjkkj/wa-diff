__d(
  "WAWebContactTextStatusBridge",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexFetchTextStatusListJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield o(
              "WAWebMexFetchTextStatusListJob",
            ).mexGetTextStatusList(t, n);
            return {
              id: a.id,
              text: a.text,
              emoji: a.emoji,
              lastUpdateTime: a.lastUpdateTime,
              ephemeralDurationSeconds: a.ephemeralDurationSeconds,
            };
          } catch (n) {
            if (n instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              return (
                n.statusCode !== 401 &&
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "getTextStatus: failed ",
                          " : ",
                          "",
                        ])),
                      n.statusCode,
                      n.message,
                    )
                    .sendLogs("getTextStatus-failed", { sampling: 0.01 }),
                { id: t, error: n, text: "" }
              );
            var i = r("getErrorSafe")(n);
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getTextStatus: failed ",
                      "",
                    ])),
                  i.message,
                )
                .sendLogs("getTextStatus-failed-unknown-error", {
                  sampling: 0.01,
                }),
              { id: t, error: i, text: "" }
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .waitUntilCompleted(
          o("WAWebPersistedJobDefinitions").jobSerializers.setTextStatus(
            e,
            t,
            n,
          ),
        );
    }
    ((l.getTextStatus = u), (l.setTextStatus = d));
  },
  98,
);
