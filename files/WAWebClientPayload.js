__d(
  "WAWebClientPayload",
  [
    "WABase64",
    "WAByteArray",
    "WAMd5",
    "WAWebBackendApi",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebClientFeatureFlags",
    "WAWebClientPayloadLoginShared",
    "WAWebCompanionPlatformType",
    "WAWebEnvironment",
    "WAWebProtobufsCompanionReg.pb",
    "WAWebProtobufsWa6.pb",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsGeneral",
    "cr:17638",
    "encodeProtobuf",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:17638")) != null ? e : {},
      u = s.getWindowsBackgroundRunConnectReason,
      c = s.recordWindowsLoginConnectReason,
      d = null;
    async function m(e) {
      var t = o("WAWebUserPrefsGeneral").getPushname(),
        n = babelHelpers.extends(
          {},
          await _(e),
          o("WAWebClientPayloadLoginShared").getLoginClientPayloadFields(),
          { pushName: t != null && t !== "" ? t : void 0 },
          d,
        );
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, n)
        .readByteArrayView();
    }
    async function p(e, t, n) {
      var r = f(),
        a = await g(),
        i = babelHelpers.extends({}, await _(n), {
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
    }
    async function _(e) {
      var t,
        n,
        r,
        a =
          (t = u == null ? void 0 : u()) != null
            ? t
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED;
      return (
        c == null || c(a),
        {
          passive: (n = e == null ? void 0 : e.passive) != null ? n : !1,
          pull: (r = e == null ? void 0 : e.pull) != null ? r : !1,
          connectType: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectType
            .WIFI_UNKNOWN,
          connectReason: a,
          userAgent: await y(),
          webInfo: {
            webSubPlatform: o(
              "WAWebClientPayloadLoginShared",
            ).getWebSubPlatform(),
          },
        }
      );
    }
    function f() {
      var e = o("WABase64").decodeB64(
          o("WAMd5").md5(o("WAWebBuildConstants").VERSION_BASE),
        ),
        t = new Uint8Array(e);
      return t;
    }
    async function g() {
      var e = r("WAWebBrowserInfo")(),
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
          supportCallLogHistory: !0,
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
        var l = await o(
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
      var u = {
          os: e.os,
          version: t,
          platformType: r("WAWebCompanionPlatformType")(),
          requireFullSync: i,
          historySyncConfig: a,
        },
        c = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsCompanionReg.pb").DevicePropsSpec, u)
          .readByteArrayView();
      return c;
    }
    function h(e) {
      d = e;
    }
    async function y() {
      var e = await o("WAWebBackendApi").frontendSendAndReceive(
          "getDeviceInfo",
          void 0,
        ),
        t = await o("WAWebClientPayloadLoginShared").getWebUserAgent({
          mcc: e.mcc,
          mnc: e.mnc,
          osVersion: e.osVersion,
          manufacturer: e.manufacturer,
          device: e.device,
          osBuildNumber: e.osBuild,
          localeLanguageIso6391: e.lg,
          localeCountryIso31661Alpha2: e.lc,
          deviceType: e.deviceType,
        });
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
    }
    ((l.getClientPayloadForLogin = m),
      (l.getClientPayloadForRegistration = p),
      (l.setClientPayloadOverride = h));
  },
  98,
);
