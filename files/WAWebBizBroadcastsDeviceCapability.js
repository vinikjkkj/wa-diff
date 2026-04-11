__d(
  "WAWebBizBroadcastsDeviceCapability",
  [
    "WASyncdConst",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            n = yield o("WAWebSyncdDb").getSyncAction(t);
          if ((n == null ? void 0 : n.binarySyncData) == null) return !1;
          var r =
            (e = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              n.binarySyncData,
            ).value) == null ||
            (e = e.deviceCapabilities) == null ||
            (e = e.businessBroadcast) == null
              ? void 0
              : e.importListEnabled;
          return !!r;
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            n = yield o("WAWebSyncdDb").getSyncAction(t);
          if ((n == null ? void 0 : n.binarySyncData) == null) return !1;
          var r =
            (e = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              n.binarySyncData,
            ).value) == null || (e = e.deviceCapabilities) == null
              ? void 0
              : e.businessBroadcast;
          return (
            !!(r != null && r.companionSupportEnabled) &&
            !!(r != null && r.campaignSyncEnabled)
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebMobilePlatforms").isSMB()) {
            var e = yield u();
            o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).saveBizBroadcastCapabilityToStorage(e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getPrimarySupportsBusinessBroadcastListImport = e),
      (l.getPrimarySupportsBusinessBroadcastCompanionAndCampaignSync = u),
      (l.bootstrapBizBroadcastPrimaryCapability = d));
  },
  98,
);
