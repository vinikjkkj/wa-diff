__d(
  "WAWebCoexStateSyncStartup",
  [
    "WALogger",
    "WAWebAECompanionGating",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebAECompanionGating").isCoexStateSyncEnabled()) {
            var t = !1;
            try {
              if (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount())
                t = !0;
              else {
                var n = yield o("WAWebApiDeviceList").getMaybeMyDeviceList();
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
        })),
        u.apply(this, arguments)
      );
    }
    l.startCoexStateSyncIfHosted = s;
  },
  98,
);
