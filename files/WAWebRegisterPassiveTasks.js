__d(
  "WAWebRegisterPassiveTasks",
  [
    "WALogger",
    "WAWebABPropsLocalStorage",
    "WAWebABPropsWamGlobals",
    "WAWebAbPropsSyncJob",
    "WAWebNoop",
    "WAWebPQGatingUtils",
    "WAWebPassiveModeManager",
    "WAWebSignalStoreApi",
    "WAWebUploadPrekeysForRegTask",
    "WAWebUserPrefsGeneral",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "getErrorSafe",
    "gkx",
    "requireDeferred",
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
      b = r("requireDeferred")("WAPQRollbackProtocol").__setRef(
        "WAWebRegisterPassiveTasks",
      ),
      v = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef(
        "WAWebRegisterPassiveTasks",
      ),
      S = r("requireDeferred")("WAWebUploadPQPrekeysJob").__setRef(
        "WAWebRegisterPassiveTasks",
      );
    async function R() {
      var t = await o(
          "WAWebSignalStoreApi",
        ).waSignalStore.getServerHasPreKeys(),
        n = null;
      if (!t) {
        await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
          o("WAWebWamEnumMdLinkDeviceCompanionStage")
            .MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS,
        );
        var a = r("WAWebUploadPrekeysForRegTask")();
        a.startKeyGenerationStage();
        var i = null,
          l = async function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[passive] start key upload",
                ])),
            );
            try {
              var t = await a.startKeyUploadStage();
              return (t == null ? void 0 : t.success) === !0
                ? (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] key upload complete",
                      ])),
                  ),
                  await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
                    o("WAWebWamEnumMdLinkDeviceCompanionStage")
                      .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE,
                  ),
                  await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(),
                  !0)
                : (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] key upload did not complete successfully",
                      ])),
                  ),
                  await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(
                    -1,
                  ),
                  !1);
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "error while uploading prekeys, ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs("error while uploading prekeys"),
                await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(-1),
                !1
              );
            }
          };
        ((n = function () {
          return (i == null && (i = l()), i);
        }),
          o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
            "KeyUpload",
            function (e) {
              var t;
              return (t = n == null ? void 0 : n().then(r("WAWebNoop"))) != null
                ? t
                : Promise.resolve();
            },
          ));
      }
      var R = o("WAWebPQGatingUtils").isPqKeysUploadEnabled();
      R
        ? o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
            "PQKeyUpload",
            async function (e) {
              if (n != null) {
                var t = await n();
                if (!t) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[passive] skip PQ key upload because legacy key upload failed",
                      ])),
                  );
                  return;
                }
              }
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] start PQ key upload",
                    ])),
                ),
                S.load()
                  .then(function (e) {
                    var t = e.generateAndUploadPQPreKeys;
                    return t();
                  })
                  .then(function () {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] PQ key upload complete",
                        ])),
                    );
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] PQ key upload failed: ",
                          "",
                        ])),
                      e,
                    );
                  })
              );
            },
          )
        : o("WAWebPQGatingUtils").isPqKeyRollbackEnabled() &&
          o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
            "PQKeyRollback",
            async function (e) {
              var t = await v.load(),
                n = t.clearKyberPreKeysAndMigrationState,
                a = t.hasPQMigrationState;
              if (await a()) {
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] start PQ key rollback",
                    ])),
                );
                try {
                  var i = await b.load(),
                    l = i.deletePQPreKeysProtocol,
                    s = await l();
                  s.success
                    ? (await n(),
                      o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[passive] PQ key rollback complete",
                          ])),
                      ))
                    : o("WALogger")
                        .WARN(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "[passive] PQ key rollback failed",
                            ])),
                        )
                        .sendLogs("pq-rollback-failed");
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] PQ key rollback failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("pq-rollback-error");
                }
              }
            },
          );
      var L = !0;
      ((L =
        r("gkx")("26259") ||
        !o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync() ||
        (await o(
          "WAWebUserPrefsGeneral",
        ).getWhatsAppWebExternalBetaDirtyBitIdb())),
        L &&
          (await o(
            "WAWebPassiveModeManager",
          ).PassiveTaskManager.registerPassiveTask("SyncABProps", function (e) {
            return o("WAWebAbPropsSyncJob")
              .syncABPropsTask()
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "error while sync ab props prekeys, ",
                        "",
                      ])),
                    e,
                  )
                  .verbose();
              });
          }),
          o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(!1),
          o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes()));
    }
    l.registerPassiveTaskForStartUp = R;
  },
  98,
);
