__d(
  "WAWebBizBroadcastsDeviceCapability",
  [
    "WASyncdConst",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e,
        t =
          '["' +
          o("WASyncdConst").Actions.DeviceCapabilities +
          '","' +
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
          ':0@s.whatsapp.net"]',
        n = await o("WAWebSyncdDb").getSyncAction(t);
      return (n == null ? void 0 : n.binarySyncData) == null
        ? null
        : (e = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              n.binarySyncData,
            ).value) == null || (e = e.deviceCapabilities) == null
          ? void 0
          : e.businessBroadcast;
    }
    async function s() {
      var t = await e();
      return !!(t != null && t.importListEnabled);
    }
    async function u() {
      var t = await e();
      return (
        !!(t != null && t.companionSupportEnabled) &&
        !!(t != null && t.campaignSyncEnabled)
      );
    }
    async function c() {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = await e(),
          n =
            !!(t != null && t.companionSupportEnabled) &&
            !!(t != null && t.campaignSyncEnabled);
        (o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).saveBizBroadcastCapabilityToStorage(n),
          o(
            "WAWebBizBroadcastDeviceCapabilityCommon",
          ).saveBizBroadcastRecipientLimitToStorage(
            t == null ? void 0 : t.recipientLimit,
          ));
      }
    }
    ((l.getPrimarySupportsBusinessBroadcastListImport = s),
      (l.getPrimarySupportsBusinessBroadcastCompanionAndCampaignSync = u),
      (l.bootstrapBizBroadcastPrimaryCapability = c));
  },
  98,
);
