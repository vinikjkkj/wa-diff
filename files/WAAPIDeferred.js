__d(
  "WAAPIDeferred",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("requireDeferred"))(
        "WADbPersonalSenderKeyStatusTxns",
      ).__setRef("WAAPIDeferred"),
      u = e("WADbRegistrationApi").__setRef("WAAPIDeferred"),
      c = e("WADownloadMedia").__setRef("WAAPIDeferred"),
      d = e("WAGenerateAndUploadPreKeys").__setRef("WAAPIDeferred"),
      m = e("WAGetCurrentUserDeviceList").__setRef("WAAPIDeferred"),
      p = e("WAGetDevices").__setRef("WAAPIDeferred"),
      _ = e("WAGetIdentityKeys").__setRef("WAAPIDeferred"),
      f = e("WANotifyDeviceChange").__setRef("WAAPIDeferred"),
      g = e("WAPublishAppDataProtocol").__setRef("WAAPIDeferred"),
      h = e("WAPublishMessage").__setRef("WAAPIDeferred"),
      y = e("WAQueryGroupsAndSync").__setRef("WAAPIDeferred"),
      C = e("WARemoveCurrentDevice").__setRef("WAAPIDeferred"),
      b = e("WARemoveDevice").__setRef("WAAPIDeferred"),
      v = e("WASendAppDataFanoutProtocol").__setRef("WAAPIDeferred"),
      S = e("WASendMsgUtilV2").__setRef("WAAPIDeferred"),
      R = e("WASendPing").__setRef("WAAPIDeferred"),
      L = e("WASignalDbDump").__setRef("WAAPIDeferred"),
      E = e("WASyncAbProps").__setRef("WAAPIDeferred"),
      k = {
        getCurrentUserDeviceList: function () {
          return m.load().then(function (e) {
            return e.getCurrentUserDeviceList();
          });
        },
        syncAbProps: function (t) {
          return E.load().then(function (e) {
            return e.syncAbProps(t);
          });
        },
        debugGetSignalDbDump: function () {
          return L.load().then(function (e) {
            return e.debugGetSignalDbDump();
          });
        },
        generateAndUploadPreKeys: function (t) {
          return d.load().then(function (e) {
            return e.generateAndUploadPreKeys(t);
          });
        },
        publishAppData: function (t) {
          return g.load().then(function (e) {
            return e.publishAppData(t);
          });
        },
        getDevicesBeforeSend: function (t) {
          return S.load().then(function (e) {
            var n = e.getDevicesBeforeSend;
            return n(t);
          });
        },
        getIdentityKeys: function () {
          return _.load().then(function (e) {
            var t = e.getIdentityKeysInWorker;
            return t();
          });
        },
        publishMessage: function (t, n) {
          return h.load().then(function (e) {
            var r = e.publishMessage;
            return r(t, n);
          });
        },
        sendChatMessage: function (t, n) {
          return S.load().then(function (e) {
            var r = e.sendChatMessage;
            return r(t, n);
          });
        },
        updateClockSkew: function (t) {
          return R.load().then(function (e) {
            return e.updateClockSkew(t);
          });
        },
        queryGroups: function (t) {
          return y.load().then(function (e) {
            return e.queryGroupsLegacyWAAPI(t, !1);
          });
        },
        queryGroupsForce: function (t) {
          return y.load().then(function (e) {
            return e.queryGroupsLegacyWAAPI(t, !0);
          });
        },
        getDevices: function (t) {
          return p.load().then(function (e) {
            return e.getDevices(t);
          });
        },
        removeDevice: function (t) {
          return b.load().then(function (e) {
            return e.removeDevice(t);
          });
        },
        removeCurrentDevice: function () {
          return C.load().then(function (e) {
            return e.removeCurrentDevice();
          });
        },
        notifyDeviceChange: function (t) {
          return f.load().then(function (e) {
            return e.notifyDeviceChange(t);
          });
        },
        saveLastSessionDeviceWasLinkedTo: function (t) {
          return u.load().then(function (e) {
            return e.saveLastSessionDeviceWasLinkedTo(t);
          });
        },
        sendAppData: function (t) {
          return v.load().then(function (e) {
            return e.sendAppDataToDevicesProtocol(t);
          });
        },
        setRotateSenderKeyToTrue: function (t) {
          return s.load().then(function (e) {
            return e.bulkSetRotateSenderKeyToTrue(t);
          });
        },
        downloadMedia: function (t) {
          return c.load().then(function (e) {
            return e.downloadMedia(t);
          });
        },
        cachedDownloadFullMediaOnly: function (t) {
          return c.load().then(function (e) {
            return e.cachedDownloadFullMediaOnly(t);
          });
        },
      },
      I = k;
    l.default = I;
  },
  98,
);
