__d(
  "WAWebClientPayload",
  [
    "WABase64",
    "WAByteArray",
    "WAMd5",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebClientFeatureFlags",
    "WAWebClientPayloadReleaseChannel",
    "WAWebEnvironment",
    "WAWebLid1X1MigrationGating",
    "WAWebMiscBrowserUtils",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebProtobufsWa6.pb",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamPlatform",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            r = babelHelpers.extends(
              {},
              yield m(t),
              {
                username: parseInt(n.user, 10),
                device: n.device != null ? n.device : 0,
                lc: o("WAWebUserPrefsGeneral").getLoginCounter(),
                lidDbMigrated: o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated(),
              },
              e,
            );
          return o("encodeProtobuf")
            .encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, r)
            .readByteArrayView();
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = _(),
            a = yield f(),
            i = babelHelpers.extends({}, yield m(n), {
              devicePairingData: {
                buildHash: r,
                deviceProps: a,
                eRegid: o("WAByteArray").intToBytes(4, e.registrationId),
                eKeytype: o("WAByteArray").intToBytes(1, 5),
                eIdent: e.identityKeyPair.pubKey,
                eSkeyId: o("WAByteArray").intToBytes(3, t.keyId),
                eSkeyVal: t.keyPair.pubKey,
                eSkeySig: t.signature,
              },
            });
          return o("encodeProtobuf")
            .encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, i)
            .readByteArrayView();
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          return {
            passive: (t = e == null ? void 0 : e.passive) != null ? t : !1,
            pull: (n = e == null ? void 0 : e.pull) != null ? n : !1,
            connectType: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectType
              .WIFI_UNKNOWN,
            connectReason: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
              .USER_ACTIVATED,
            userAgent: yield y(),
            webInfo: { webSubPlatform: v() },
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      var e = o("WABase64").decodeB64(
          o("WAMd5").md5(o("WAWebBuildConstants").VERSION_BASE),
        ),
        t = new Uint8Array(e);
      return t;
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebMiscBrowserUtils").info(),
            t;
          if (e.version && e.version !== "") {
            var n = e.version.split(".");
            n.length > 0 &&
              e.version &&
              /^[0-9\.]+$/.test(e.version) &&
              (t = {
                primary: parseInt(n[0], 10),
                secondary: n.length > 1 ? parseInt(n[1], 10) : void 0,
                tertiary: n.length > 2 ? parseInt(n[2], 10) : void 0,
              });
          }
          var a = {
              inlineInitialPayloadInE2EeMsg: !0,
              supportBotUserAgentChatHistory: !0,
              supportCagReactionsAndPolls: !0,
              supportRecentSyncChunkMessageCountTuning: !0,
              supportHostedGroupMsg: !0,
              supportBizHostedMsg: !0,
              supportFbidBotChatHistory: !0,
              supportMessageAssociation: !0,
              supportCallLogHistory: r("WAWebEnvironment").isWindows,
              supportGroupHistory: r("gkx")("15338"),
              thumbnailSyncDaysLimit: r("justknobx")._("4736"),
              supportManusHistory: r("justknobx")._("2304"),
              supportHatchHistory: r("justknobx")._("2997"),
              supportedBotChannelFbids: [],
            },
            i = o("WAWebClientFeatureFlags").isFeatureEnabled(
              "debug_1_year_history_sync",
            );
          if (i) a = babelHelpers.extends({}, a, { fullSyncDaysLimit: 365 });
          else {
            var l = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getStorageEstimation();
            l.mdStorageQuotaBytes !==
              o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
              (a = babelHelpers.extends({}, a, {
                storageQuotaMb: Math.trunc(l.mdStorageQuotaBytes / 1024 / 1024),
              }));
          }
          var s = r("WAWebEnvironment").isWindows && !r("justknobx")._("1836");
          s && ((a.onDemandReady = !0), (a.completeOnDemandReady = !0));
          var u = r("WAWebEnvironment").isWindows
              ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.UWP
              : b(e.name),
            c = {
              os: e.os,
              version: t,
              platformType: u,
              requireFullSync: i,
              historySyncConfig: a,
            },
            d = o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufsCompanionReg.pb").DevicePropsSpec,
                c,
              )
              .readByteArrayView();
          return d;
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      e = t;
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getDeviceInfo",
              void 0,
            ),
            t = {
              appVersion: {
                primary: Number(o("WAWebBuildConstants").VERSION_PRIMARY),
                secondary: Number(o("WAWebBuildConstants").VERSION_SECONDARY),
                tertiary: Number(o("WAWebBuildConstants").VERSION_TERTIARY),
              },
              platform: o("WAWebProtobufsWa6.pb")
                .ClientPayload$UserAgent$Platform.WEB,
              releaseChannel: yield o(
                "WAWebClientPayloadReleaseChannel",
              ).getReleaseChannel(),
              mcc: e.mcc,
              mnc: e.mnc,
              osVersion: e.osVersion,
              manufacturer: e.manufacturer,
              device: e.device,
              osBuildNumber: e.osBuild,
              localeLanguageIso6391: e.lg,
              localeCountryIso31661Alpha2: e.lc,
            };
          if (r("WAWebEnvironment").isWindows) {
            var n;
            ((t.appVersion = {
              primary: Number((n = o("WAWebBuildConstants")).VERSION_PRIMARY),
              secondary: Number(n.VERSION_SECONDARY),
              tertiary: Number(n.VERSION_TERTIARY),
              quaternary: Number(n.WINDOWS_BUILD),
            }),
              (o("WAWebBuildConstants").WINDOWS_BUILD == null
                ? void 0
                : o("WAWebBuildConstants").WINDOWS_BUILD.length) === 6 &&
                ((t.mcc = o("WAWebBuildConstants").WINDOWS_BUILD.substr(0, 3)),
                (t.mnc = o("WAWebBuildConstants").WINDOWS_BUILD.substr(3, 3))));
          }
          return t;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e === "Chrome"
        ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.CHROME
        : e === "Firefox"
          ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.FIREFOX
          : e === "IE"
            ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.IE
            : e === "Opera"
              ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                  .OPERA
              : e === "Safari"
                ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                    .SAFARI
                : e === "Edge"
                  ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                      .EDGE
                  : e === "electron" || e === "Desktop"
                    ? o("WAWebProtobufsCompanionReg.pb")
                        .DeviceProps$PlatformType.DESKTOP
                    : e === "ipad" || e === "iPad"
                      ? o("WAWebProtobufsCompanionReg.pb")
                          .DeviceProps$PlatformType.IPAD
                      : e === "tablet" || e === "Android tablet"
                        ? o("WAWebProtobufsCompanionReg.pb")
                            .DeviceProps$PlatformType.ANDROID_TABLET
                        : e === "Ohana"
                          ? o("WAWebProtobufsCompanionReg.pb")
                              .DeviceProps$PlatformType.OHANA
                          : e === "Aloha"
                            ? o("WAWebProtobufsCompanionReg.pb")
                                .DeviceProps$PlatformType.ALOHA
                            : e === "Catalina"
                              ? o("WAWebProtobufsCompanionReg.pb")
                                  .DeviceProps$PlatformType.CATALINA
                              : o("WAWebProtobufsCompanionReg.pb")
                                  .DeviceProps$PlatformType.UNKNOWN;
    }
    function v() {
      return (function (e) {
        if (e === "WEB" || e === "PWA")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .WEB_BROWSER;
        if (e === "DARWIN" || e === "DARWIN_BETA")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .DARWIN;
        if (e === "MACSTORE")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .APP_STORE;
        if (e === "WIN_HYBRID")
          return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform
            .WIN_HYBRID;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebWamPlatform").getWamPlatform());
    }
    ((l.getClientPayloadForLogin = s),
      (l.getClientPayloadForRegistration = c),
      (l.setClientPayloadOverride = h));
  },
  98,
);
