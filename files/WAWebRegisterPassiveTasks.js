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
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d() {
      var t = await o(
        "WAWebSignalStoreApi",
      ).waSignalStore.getServerHasPreKeys();
      if (!t) {
        await o("WAWebWamDeviceLinkReporter").setDeviceLinkPairStage(
          o("WAWebWamEnumMdLinkDeviceCompanionStage")
            .MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS,
        );
        var n = r("WAWebUploadPrekeysForRegTask")();
        (n.startKeyGenerationStage(),
          o("WAWebPassiveModeManager").PassiveTaskManager.registerPassiveTask(
            "KeyUpload",
            function (t) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[passive] start key upload",
                    ])),
                ),
                n
                  .startKeyUploadStage()
                  .then(async function () {
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[passive] key upload complete",
                        ])),
                    ),
                      await o(
                        "WAWebWamDeviceLinkReporter",
                      ).setDeviceLinkPairStage(
                        o("WAWebWamEnumMdLinkDeviceCompanionStage")
                          .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE,
                      ),
                      await o(
                        "WAWebWamDeviceLinkReporter",
                      ).commitDeviceLinkEvent());
                  })
                  .catch(async function (e) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "error while uploading prekeys, ",
                            "",
                          ])),
                        e,
                      )
                      .verbose()
                      .sendLogs("error while uploading prekeys"),
                      await o(
                        "WAWebWamDeviceLinkReporter",
                      ).commitDeviceLinkEvent(-1));
                  })
              );
            },
          ));
      }
      (r("gkx")("17264") ||
        r("gkx")("26259") ||
        !o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync() ||
        (await o(
          "WAWebUserPrefsGeneral",
        ).getWhatsAppWebExternalBetaDirtyBitIdb())) &&
        (await o(
          "WAWebPassiveModeManager",
        ).PassiveTaskManager.registerPassiveTask("SyncABProps", function (e) {
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
        }),
        o("WAWebUserPrefsGeneral").setWhatsAppWebExternalBetaDirtyBitIdb(!1),
        o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes());
    }
    l.registerPassiveTaskForStartUp = d;
  },
  98,
);
