__d(
  "WAAPIEager",
  [
    "WADbPersonalSenderKeyStatusTxns",
    "WADbRegistrationApi",
    "WADownloadMedia",
    "WAGenerateAndUploadPreKeys",
    "WAGetCurrentUserDeviceList",
    "WAGetDevices",
    "WAGetIdentityKeys",
    "WANotifyDeviceChange",
    "WAPublishAppDataProtocol",
    "WAPublishMessage",
    "WAQueryGroupsAndSync",
    "WARemoveCurrentDevice",
    "WARemoveDevice",
    "WASendAppDataFanoutProtocol",
    "WASendMsgUtilV2",
    "WASendPing",
    "WASignalDbDump",
    "WASyncAbProps",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getCurrentUserDeviceList: function () {
          return o("WAGetCurrentUserDeviceList").getCurrentUserDeviceList();
        },
        syncAbProps: function (t) {
          return o("WASyncAbProps").syncAbProps(t);
        },
        generateAndUploadPreKeys: function (t) {
          return o("WAGenerateAndUploadPreKeys").generateAndUploadPreKeys(t);
        },
        debugGetSignalDbDump: function () {
          return o("WASignalDbDump").debugGetSignalDbDump();
        },
        getDevicesBeforeSend: function (t) {
          return o("WASendMsgUtilV2").getDevicesBeforeSend(t);
        },
        publishAppData: function (t) {
          return o("WAPublishAppDataProtocol").publishAppData(t);
        },
        getIdentityKeys: function () {
          return o("WAGetIdentityKeys").getIdentityKeysInWorker();
        },
        publishMessage: function (t, n) {
          return o("WAPublishMessage").publishMessage(t, n);
        },
        queryGroupsForce: function (t) {
          return o("WAQueryGroupsAndSync").queryGroupsLegacyWAAPI(t, !0);
        },
        sendChatMessage: function (t, n) {
          return o("WASendMsgUtilV2").sendChatMessage(t, n);
        },
        updateClockSkew: function (t) {
          return o("WASendPing").updateClockSkew(t);
        },
        queryGroups: function (t) {
          return o("WAQueryGroupsAndSync").queryGroupsLegacyWAAPI(t, !1);
        },
        getDevices: function (t) {
          return o("WAGetDevices").getDevices(t);
        },
        removeDevice: function (t) {
          return o("WARemoveDevice").removeDevice(t);
        },
        removeCurrentDevice: function () {
          return o("WARemoveCurrentDevice").removeCurrentDevice();
        },
        notifyDeviceChange: function (t) {
          return o("WANotifyDeviceChange").notifyDeviceChange(t);
        },
        saveLastSessionDeviceWasLinkedTo: function (t) {
          return o("WADbRegistrationApi").saveLastSessionDeviceWasLinkedTo(t);
        },
        sendAppData: function (t) {
          return o("WASendAppDataFanoutProtocol").sendAppDataToDevicesProtocol(
            t,
          );
        },
        setRotateSenderKeyToTrue: function (t) {
          return o(
            "WADbPersonalSenderKeyStatusTxns",
          ).bulkSetRotateSenderKeyToTrue(t);
        },
        downloadMedia: function (t) {
          return o("WADownloadMedia").downloadMedia(t);
        },
        cachedDownloadFullMediaOnly: function (t) {
          return o("WADownloadMedia").cachedDownloadFullMediaOnly(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
