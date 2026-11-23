__d(
  "WAWebCoexStateSyncStartup",
  [
    "WALogger",
    "WAWebAECompanionGating",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      if (o("WAWebAECompanionGating").isCoexStateSyncEnabled()) {
        var t = !1;
        try {
          if (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount())
            t = !0;
          else {
            var n = await o("WAWebApiDeviceList").getMaybeMyDeviceList();
            t =
              (n == null ? void 0 : n.advAccountType) ===
                o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED ||
              (n == null
                ? void 0
                : n.devices.some(function (e) {
                    return e.isHosted === !0;
                  })) === !0;
          }
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "startCoexStateSyncIfHosted: hosted check failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
          return;
        }
        t &&
          o("WAWebBackendApi").frontendFireAndForget(
            "coexStateSyncStartup",
            {},
          );
      }
    }
    l.startCoexStateSyncIfHosted = s;
  },
  98,
);
