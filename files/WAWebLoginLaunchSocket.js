__d(
  "WAWebLoginLaunchSocket",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBridgeInitialization",
    "WAWebBrokerGlobalAppState",
    "WAWebBuildConstants",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbRolloutUtil",
    "WAWebDeviceInfoBridgeApi",
    "WAWebGlobals",
    "WAWebLinkDeviceAction",
    "WAWebLoginLaunchSocketUtils",
    "WAWebModelStorage",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "WAWebRegistration",
    "WAWebRunInTransaction",
    "WAWebShortcakeLinkingBridgeApi",
    "WAWebSignalStorage",
    "WAWebStartBackendLoginListeners",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsWorkerCompatibleMainThread",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] start launchSocketForLogin flow for standalone /login route",
          ])),
      ),
        o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(
          o("WAWebBackendEventBus").BackendEventBus,
        ),
        o(
          "WAWebUserPrefsWorkerCompatibleMainThread",
        ).initializeUserPrefsWorkerCompatibleMainThread(),
        o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(
          o("WAWebRegisterPassiveTasksForConnect")
            .registerPassiveTasksForConnectMainThread,
        ));
      var t = o("WAWebBridgeInitialization").makeBridge();
      (o("WAWebBackendApi").setApi(t),
        t.setHandlers(
          "event",
          babelHelpers.extends(
            {},
            o("WAWebDeviceInfoBridgeApi").DeviceInfoBridgeApi,
            {
              triggerSocketStreamDisconnectedFromBridge: function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] socket stream disconnected on /login, no frontend listener",
                    ])),
                );
              },
              triggerOpenSocketStreamFromBridge: function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[socket] socket stream opened on /login, no frontend listener",
                    ])),
                );
              },
              refreshAltLinkingCode: function (t) {
                var e = t.ref;
                return o("WAWebLinkDeviceAction").refreshAltLinkingCode(e);
              },
              forceManualRefresh: function (t) {
                var e = t.ref;
                return o("WAWebLinkDeviceAction").forceManualRefresh(e);
              },
              errorAltLinking: function () {
                return o("WAWebLinkDeviceAction").errorAltLinking();
              },
              primaryHelloReceivedAltLinking: function () {
                return o(
                  "WAWebLinkDeviceAction",
                ).primaryHelloReceivedAltLinking();
              },
            },
            o("WAWebShortcakeLinkingBridgeApi").ShortcakeLinkingBridgeApi,
          ),
        ));
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
        a = o("WAWebWidToJid").widToMyJids(n);
      (o("WAWebGlobals").setGlobals({
        jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
        myJids: a,
        runInTransaction: o("WAWebRunInTransaction").runInTransaction,
      }),
        o("WAWebStartBackendLoginListeners").setupStartBackendLoginListeners());
      try {
        (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          await o("WAWebCryptoEncKeyHelper").initEncSalt(),
          await o("WAWebSignalStorage").initialize(),
          await o("WAWebModelStorage").initialize(),
          await o("WAWebUserPrefsGeneral").setAppVersionBase(
            o("WAWebBuildConstants").VERSION_BASE,
          ));
      } catch (e) {
        throw (
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerStorageInitializationError(e),
          e
        );
      }
      if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
        throw r("err")("aborting launchSocketForLogin due to logout");
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[socket] launchSocketForLogin for registration",
          ])),
      ),
        await Promise.all([
          o("WAWebRegistration").refreshNoiseCredentials(),
          o("WAWebRegistration").refreshSignalCredentials(),
        ]),
        await o(
          "WAWebLoginLaunchSocketUtils",
        ).startLoginCommsAndHandleRequests());
    }
    l.launchSocketForLogin = d;
  },
  98,
);
