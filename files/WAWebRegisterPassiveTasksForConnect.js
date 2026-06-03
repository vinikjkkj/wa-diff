__d(
  "WAWebRegisterPassiveTasksForConnect",
  [
    "WAAbortError",
    "WACustomError",
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseTimeout",
    "WAWebClearDanglingReceipts",
    "WAWebGetMessageCache",
    "WAWebOffdStorageUtils",
    "WAWebOnlineDanglingReceipts",
    "WAWebPassiveModeManager",
    "WAWebSchemaDanglingReceipt",
    "asyncToGeneratorRuntime",
    "cr:10195",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 4,
      S = 60 * 1e3;
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WAWebOnlineDanglingReceipts").hasOnlineDanglingReceipts() &&
              o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "SendOnlineDanglingReceipts",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] start sending online dangling receipts",
                        ])),
                    ),
                      yield o(
                        "WAWebOnlineDanglingReceipts",
                      ).sendAndClearOnlineDanglingReceipts(),
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] sending online dangling receipts complete",
                          ])),
                      ));
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "error while sending online dangling receipts, ",
                            "",
                          ])),
                        e,
                      )
                      .verbose()
                      .sendLogs("send-online-dangling-receipts-failed");
                  }
                }),
              ),
            !o("WAWebOffdStorageUtils").isStorageCreated())
          ) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[passive] offd storage not available, skipping passive tasks",
                ])),
            );
            return;
          }
          var t = yield o("WAWebSchemaDanglingReceipt").getTable().all(),
            a = t.length > 0,
            i =
              (yield o("WAWebGetMessageCache").getMessageCache().size()) > 0 ||
              (yield o("WAWebGetMessageCache")
                .getMessageCache()
                .checkpointQueueSize()) > 0;
          (a || i) &&
            o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
              "SendDanglingReceipts",
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (a)
                      try {
                        (o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[passive] sending dangling receipts",
                            ])),
                        ),
                          yield o(
                            "WAWebClearDanglingReceipts",
                          ).sendAndClearDanglingReceipts(t, e),
                          o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] sending dangling receipts: done",
                              ])),
                          ));
                      } catch (e) {
                        if (
                          r("getErrorSafe")(e).name ===
                          o("WAAbortError").ABORT_ERROR
                        )
                          throw e;
                        o("WALogger")
                          .ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] sending dangling receipts failed: ",
                                "",
                              ])),
                            e,
                          )
                          .verbose()
                          .sendLogs("send-and-clear-dangling-receipts-failed");
                      }
                    i && (yield k());
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        L.apply(this, arguments)
      );
    }
    var E = null;
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (E)
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache: skip",
                  ])),
              ),
              E
            );
          try {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[passive] flush message cache",
                ])),
            );
            var e = o("WAPromiseLoop").promiseLoop(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t, n) {
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] flush msg cache: sz=",
                          " qsz=",
                          " gen=",
                          "",
                        ])),
                      yield o("WAWebGetMessageCache").getMessageCache().size(),
                      yield o("WAWebGetMessageCache")
                        .getMessageCache()
                        .checkpointQueueSize(),
                      n,
                    ),
                      (yield o("WAWebGetMessageCache")
                        .getMessageCache()
                        .size()) > 0 &&
                        o("WAWebGetMessageCache")
                          .getMessageCache()
                          .createSnapshot(),
                      yield o("WAWebGetMessageCache")
                        .getMessageCache()
                        .checkpointQueueWait(),
                      (yield o("WAWebGetMessageCache")
                        .getMessageCache()
                        .size()) === 0 &&
                      (yield o("WAWebGetMessageCache")
                        .getMessageCache()
                        .checkpointQueueSize()) === 0
                        ? e()
                        : n + 1 >= v &&
                          (o("WALogger").WARN(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] flush message cache: stop after ",
                                " attempts",
                              ])),
                            v,
                          ),
                          e()));
                  },
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            ((E = o("WAPromiseTimeout").promiseTimeout(e, S)),
              yield E,
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache: done",
                  ])),
              ));
          } catch (e) {
            e instanceof o("WACustomError").TimeoutError
              ? o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] flush message cache: timeout",
                      ])),
                  )
                  .sendLogs("passive-flush-message-cache-timeout", {
                    sampling: 0.01,
                  })
              : o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] flush message cache failed: ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs("passive-flush-message-cache-failed", {
                    sampling: 0.01,
                  });
          } finally {
            E = null;
          }
        })),
        I.apply(this, arguments)
      );
    }
    l.registerPassiveTasksForConnect = R;
  },
  98,
);
