__d(
  "WAWebRegisterPassiveTasksForConnect",
  [
    "WAAbortError",
    "WACustomError",
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseTimeout",
    "WAWebBackendEventBus",
    "WAWebClearDanglingReceipts",
    "WAWebGetMessageCache",
    "WAWebOffdStorageUtils",
    "WAWebOnlineDanglingReceipts",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebSchemaDanglingReceipt",
    "WAWebStanzasInFlight",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerOnlineMessageAdmission",
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
      v,
      S,
      R = 4,
      L = 60 * 1e3,
      E = {
        registerPassiveTasksForConnect: k,
        shouldConnectAsPassiveMode: function () {
          return Promise.resolve(
            o(
              "WAWebPassiveModeManager",
            ).PassiveTaskManager.shouldConnectAsPassiveMode(),
          );
        },
      };
    async function k() {
      o("WAWebOnlineDanglingReceipts").hasOnlineDanglingReceipts() &&
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
        );
      var t = o("WAWebOffdStorageUtils").isStorageCreated();
      if (
        (o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
          passive_offd_ready: t,
        }),
        !t)
      ) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[passive] offd storage not available, skipping passive tasks",
            ])),
        );
        return;
      }
      var n = await o("WAWebSchemaDanglingReceipt").getTable().all(),
        a = n.length > 0,
        i = n.reduce(function (e, t) {
          return e + t.acks.length;
        }, 0);
      (o(
        "WAWebWamOfflineResumeReporter",
      ).OfflineResumeReporter.logPendingPreackCount(i),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[passive] dangling receipts: ",
              " rows, ",
              " pending pre-acks",
            ])),
          n.length,
          i,
        ));
      var l = I(),
        f =
          l != null ||
          (await o("WAWebGetMessageCache").getMessageCache().size()) > 0 ||
          (await o("WAWebGetMessageCache")
            .getMessageCache()
            .checkpointQueueSize()) > 0;
      (a || f) &&
        o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
          "SendDanglingReceipts",
          async function (e) {
            if (a)
              try {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] sending dangling receipts",
                    ])),
                ),
                  await o(
                    "WAWebClearDanglingReceipts",
                  ).sendAndClearDanglingReceipts(n, e),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] sending dangling receipts: done",
                      ])),
                  ));
              } catch (e) {
                if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR)
                  throw e;
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] sending dangling receipts failed: ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs("send-and-clear-dangling-receipts-failed");
              }
            (l != null && (await T(l)), f && (await x()));
          },
        );
    }
    function I() {
      return o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
        .queue != null
        ? o("WAWebStanzasInFlight").waitForStanzasInFlight({
            includeOnline: o("WAWebBackendEventBus").BackendEventBus
              .isOfflineDeliveryEnd,
          })
        : null;
    }
    async function T(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          e,
          o("WAWebStanzasInFlight").STANZA_HANDLING_P99_MS,
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[passive] stanzas from the closed socket are still in their handlers",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    var D = null;
    async function x() {
      if (D)
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[passive] flush message cache: skip",
              ])),
          ),
          D
        );
      try {
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[passive] flush message cache",
            ])),
        );
        var e = o("WAPromiseLoop").promiseLoop(async function (e, t, n) {
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
              : n + 1 >= R &&
                (o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] flush message cache: stop after ",
                      " attempts",
                    ])),
                  R,
                ),
                e()));
        });
        ((D = o("WAPromiseTimeout").promiseTimeout(e, L)),
          await D,
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[passive] flush message cache: done",
              ])),
          ));
      } catch (e) {
        e instanceof o("WACustomError").TimeoutError
          ? o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[passive] flush message cache: timeout",
                  ])),
              )
              .sendLogs("passive-flush-message-cache-timeout", {
                sampling: 0.01,
              })
          : o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
        D = null;
      }
    }
    l.registerPassiveTasksForConnectMainThread = E;
  },
  98,
);
