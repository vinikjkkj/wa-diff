__d(
  "WAWebRegisterPassiveTasks",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      b,
      v = r("requireDeferred")("WAPQRollbackProtocol").__setRef(
        "WAWebRegisterPassiveTasks",
      ),
      S = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef(
        "WAWebRegisterPassiveTasks",
      ),
      R = r("requireDeferred")("WAWebUploadPQPrekeysJob").__setRef(
        "WAWebRegisterPassiveTasks",
      );
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getServerHasPreKeys(),
            a = null;
          if (!t) {
            yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
              o("WAWebWamEnumMdLinkDeviceCompanionStage")
                .MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS,
            );
            var i = r("WAWebUploadPrekeysForRegTask")();
            i.startKeyGenerationStage();
            var l = null,
              L = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] start key upload",
                        ])),
                    );
                    try {
                      var t = yield i.startKeyUploadStage();
                      return (t == null ? void 0 : t.success) === !0
                        ? (o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] key upload complete",
                              ])),
                          ),
                          yield o(
                            "WAWebWamDeviceLinkReporter",
                          ).setDeviceLinkPairStage(
                            o("WAWebWamEnumMdLinkDeviceCompanionStage")
                              .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE,
                          ),
                          yield o(
                            "WAWebWamDeviceLinkReporter",
                          ).commitDeviceLinkEvent(),
                          !0)
                        : (o("WALogger").WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[passive] key upload did not complete successfully",
                              ])),
                          ),
                          yield o(
                            "WAWebWamDeviceLinkReporter",
                          ).commitDeviceLinkEvent(-1),
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
                        yield o(
                          "WAWebWamDeviceLinkReporter",
                        ).commitDeviceLinkEvent(-1),
                        !1
                      );
                    }
                  },
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            ((a = function () {
              return (l == null && (l = L()), l);
            }),
              o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "KeyUpload",
                function (e) {
                  var t;
                  return (t = a == null ? void 0 : a().then(r("WAWebNoop"))) !=
                    null
                    ? t
                    : (b || (b = n("Promise"))).resolve();
                },
              ));
          }
          var E = o("WAWebPQGatingUtils").isPqKeysUploadEnabled();
          (E
            ? o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "PQKeyUpload",
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (a != null) {
                        var t = yield a();
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
                        R.load()
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
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
            : o("WAWebPQGatingUtils").isPqKeyRollbackEnabled() &&
              o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "PQKeyRollback",
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield S.load(),
                        n = t.clearKyberPreKeysAndMigrationState,
                        a = t.isPQMigrated;
                      if (yield a()) {
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[passive] start PQ key rollback",
                            ])),
                        );
                        try {
                          var i = yield v.load(),
                            l = i.deletePQPreKeysProtocol,
                            s = yield l();
                          s.success
                            ? (yield n(),
                              o("WALogger").LOG(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "[passive] PQ key rollback complete",
                                  ])),
                              ))
                            : o("WALogger")
                                .WARN(
                                  h ||
                                    (h =
                                      babelHelpers.taggedTemplateLiteralLoose([
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            (r("gkx")("17264") ||
              r("gkx")("26259") ||
              !o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync() ||
              (yield o(
                "WAWebUserPrefsGeneral",
              ).getWhatsAppWebExternalBetaDirtyBitIdb())) &&
              (yield o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "SyncABProps",
                function (e) {
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
                },
              ),
              o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(
                !1,
              ),
              o(
                "WAWebABPropsWamGlobals",
              ).setAbPropDependingGlobalWamAttributes()));
        })),
        E.apply(this, arguments)
      );
    }
    l.registerPassiveTaskForStartUp = L;
  },
  98,
);
