__d(
  "WAWebRegisterPassiveTasks",
  [
    "WALogger",
    "WAWebABPropsLocalStorage",
    "WAWebABPropsWamGlobals",
    "WAWebAbPropsSyncJob",
    "WAWebPassiveModeManager",
    "WAWebSignalStoreApi",
    "WAWebUploadPrekeysForRegTask",
    "WAWebUserPrefsGeneral",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getServerHasPreKeys();
          if (!t) {
            yield o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
              o("WAWebWamEnumMdLinkDeviceCompanionStage")
                .MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS,
            );
            var a = r("WAWebUploadPrekeysForRegTask")();
            (a.startKeyGenerationStage(),
              o(
                "WAWebPassiveModeManager",
              ).PassiveTaskManager.registerPassiveTask(
                "KeyUpload",
                function (t) {
                  return (
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] start key upload",
                        ])),
                    ),
                    a
                      .startKeyUploadStage()
                      .then(
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            (o("WALogger").LOG(
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
                              ).commitDeviceLinkEvent());
                          },
                        ),
                      )
                      .catch(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              (o("WALogger")
                                .ERROR(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "error while uploading prekeys, ",
                                        "",
                                      ])),
                                  e,
                                )
                                .verbose()
                                .sendLogs("error while uploading prekeys"),
                                yield o(
                                  "WAWebWamDeviceLinkReporter",
                                ).commitDeviceLinkEvent(-1));
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      )
                  );
                },
              ));
          }
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
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
            ).setAbPropDependingGlobalWamAttributes());
        })),
        m.apply(this, arguments)
      );
    }
    l.registerPassiveTaskForStartUp = d;
  },
  98,
);
