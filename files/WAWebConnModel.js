__d(
  "WAWebConnModel",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebBaseModel",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumPlatformType",
    "WAWebWamGlobals",
    "WAWebWebcRawPlatformsWamEvent",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.ref = o("WAWebBaseModel").prop()),
            (e.refTTL = o("WAWebBaseModel").prop()),
            (e.refId = o("WAWebBaseModel").prop()),
            (e.wid = o("WAWebBaseModel").prop()),
            (e.connected = o("WAWebBaseModel").prop()),
            (e.protoVersion = o("WAWebBaseModel").prop()),
            (e.clientToken = o("WAWebBaseModel").prop()),
            (e.serverToken = o("WAWebBaseModel").prop()),
            (e.secret = o("WAWebBaseModel").prop()),
            (e.isResponse = o("WAWebBaseModel").prop()),
            (e.locales = o("WAWebBaseModel").prop()),
            (e.is24h = o("WAWebBaseModel").prop()),
            (e.platform = o("WAWebBaseModel").prop()),
            (e.phone = o("WAWebBaseModel").prop()),
            (e.tos = o("WAWebBaseModel").prop()),
            (e.smbTos = o("WAWebBaseModel").prop(0)),
            (e.pushname = o("WAWebBaseModel").prop()),
            (e.blockStoreAdds = o("WAWebBaseModel").session(!1)),
            (e.meReadyTriggered = o("WAWebBaseModel").session(!1)),
            (e.refExpiry = o("WAWebBaseModel").derived(
              function () {
                return Date.now() + this.refTTL;
              },
              ["ref", "refTTL"],
            )),
            (e.platformField = o("WAWebBaseModel").derived(
              function () {
                return (
                  (this.platform &&
                    o("WAWebWamEnumPlatformType").PLATFORM_TYPE[
                      this.platform.toUpperCase()
                    ]) ||
                  o("WAWebWamEnumPlatformType").PLATFORM_TYPE.UNKNOWN
                );
              },
              ["platform"],
            )),
            (e.isSMB = o("WAWebBaseModel").derived(
              function () {
                return (
                  this.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBA ||
                  this.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBI
                );
              },
              ["platform"],
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            var e = this;
            (o("WAWebBaseModel").BaseModel.prototype.initialize.call(this),
              this.listenTo(this, "change:phone", function () {
                u(e.phone);
              }),
              this.listenTo(this, "change:platform", this.$ConnImpl$p_1),
              this.on(
                "me_ready",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (
                    (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
                    o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
                  ) {
                    var e = yield o(
                        "WAWebVoipBackendLoadable",
                      ).requireVoipJsBackend(),
                      t = e.WAWebVoipInit;
                    yield t.initWAWebVoip();
                  }
                }),
              ));
          }),
          (i.delete = function () {
            (o("WAWebUserPrefsGeneral").setPushname(), this.clear());
          }),
          (i.canSetMyPushname = function () {
            return !this.isSMB;
          }),
          (i.$ConnImpl$p_1 = function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Conn: platform change: ",
                  "",
                ])),
              this.platform,
            ),
              this.platform &&
                o("WAWebWamGlobals").Global.set({
                  webcPhonePlatform: this.platformField,
                }),
              r("gkx")("26259") &&
                new (o(
                  "WAWebWebcRawPlatformsWamEvent",
                ).WebcRawPlatformsWamEvent)({
                  webcRawPlatform: this.platform,
                }).commit());
          }),
          (i.shouldSaveToCache = function () {
            return (
              !!o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() && !!this.id
            );
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "conn";
    function u(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.mcc,
        r = t.mnc;
      (n && typeof n == "string" && (n = parseInt(n, 10)),
        r && typeof r == "string" && (r = parseInt(r, 10)),
        o("WAWebWamGlobals").Global.set({
          mcc: n != null ? n : null,
          mnc: r != null ? r : null,
          webcPhoneDeviceManufacturer: e.device_manufacturer || null,
          webcPhoneDeviceModel: e.device_model || null,
          webcPhoneOsBuildNumber: e.os_build_number || null,
          webcPhoneOsVersion: e.os_version || null,
          webcPhoneAppVersion: e.wa_version || null,
        }));
    }
    var c = o("WAWebBaseModel").defineModel(s),
      d = new c({ id: "1" });
    l.Conn = d;
  },
  98,
);
