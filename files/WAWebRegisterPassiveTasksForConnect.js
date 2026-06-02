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
    async function R() {
      if (
        (o("WAWebOnlineDanglingReceipts").hasOnlineDanglingReceipts() &&
          o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
            "SendOnlineDanglingReceipts",
            async function () {
              try {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] start sending online dangling receipts",
                    ])),
                ),
                  await o(
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
            },
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
      var t = await o("WAWebSchemaDanglingReceipt").getTable().all(),
        n = t.length > 0,
        a =
          (await o("WAWebGetMessageCache").getMessageCache().size()) > 0 ||
          (await o("WAWebGetMessageCache")
            .getMessageCache()
            .checkpointQueueSize()) > 0;
      (n || a) &&
        o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
          "SendDanglingReceipts",
          async function (e) {
            if (n)
              try {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] sending dangling receipts",
                    ])),
                ),
                  await o(
                    "WAWebClearDanglingReceipts",
                  ).sendAndClearDanglingReceipts(t, e),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] sending dangling receipts: done",
                      ])),
                  ));
              } catch (e) {
                if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR)
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
            a && (await E());
          },
        );
    }
    var L = null;
    async function E() {
      if (L)
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[passive] flush message cache: skip",
              ])),
          ),
          L
        );
      try {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[passive] flush message cache",
            ])),
        );
        var e = o("WAPromiseLoop").promiseLoop(async function (e, t, n) {
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[passive] flush msg cache: sz=",
                " qsz=",
                " gen=",
                "",
              ])),
            await o("WAWebGetMessageCache").getMessageCache().size(),
            await o("WAWebGetMessageCache")
              .getMessageCache()
              .checkpointQueueSize(),
            n,
          ),
            (await o("WAWebGetMessageCache").getMessageCache().size()) > 0 &&
              o("WAWebGetMessageCache").getMessageCache().createSnapshot(),
            await o("WAWebGetMessageCache")
              .getMessageCache()
              .checkpointQueueWait(),
            (await o("WAWebGetMessageCache").getMessageCache().size()) === 0 &&
            (await o("WAWebGetMessageCache")
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
        });
        ((L = o("WAPromiseTimeout").promiseTimeout(e, S)),
          await L,
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
        L = null;
      }
    }
    l.registerPassiveTasksForConnect = R;
  },
  98,
);
