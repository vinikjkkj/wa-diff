__d(
  "WAWebBizBroadcastsDeviceCapability",
  [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
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
              o("WAWebSyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            n = yield o("WAWebSyncdDb").getSyncAction(t);
          return (n == null ? void 0 : n.binarySyncData) == null
            ? null
            : (e = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                  n.binarySyncData,
                ).value) == null || (e = e.deviceCapabilities) == null
              ? void 0
              : e.businessBroadcast;
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
          var t = yield e();
          return !!(t != null && t.importListEnabled);
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
          var t = yield e();
          return (
            !!(t != null && t.companionSupportEnabled) &&
            !!(t != null && t.campaignSyncEnabled)
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebMobilePlatforms").isSMB()) {
            var t = yield e(),
              n =
                !!(t != null && t.companionSupportEnabled) &&
                !!(t != null && t.campaignSyncEnabled);
            (o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).saveBizBroadcastCapabilityToStorage(n),
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).saveBizBroadcastProCapabilityToStorage(
                t == null ? void 0 : t.proCompanionSupportEnabled,
              ),
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).saveBizBroadcastRecipientLimitToStorage(
                t == null ? void 0 : t.recipientLimit,
              ));
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getPrimarySupportsBusinessBroadcastListImport = u),
      (l.getPrimarySupportsBusinessBroadcastCompanionAndCampaignSync = d),
      (l.bootstrapBizBroadcastPrimaryCapability = p));
  },
  98,
);
