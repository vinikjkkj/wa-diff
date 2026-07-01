__d(
  "WAWebWindowsHybridBridge.v2626",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2626",
    "WAWebWindowsHybridBridgeAbProps.v2626",
    "WAWebWindowsHybridBridgeAdv.v2626",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2626",
    "WAWebWindowsHybridBridgeConnection.v2626",
    "WAWebWindowsHybridBridgeContacts.v2626",
    "WAWebWindowsHybridBridgeDebugFeatures.v2626",
    "WAWebWindowsHybridBridgeLinksPreview.v2626",
    "WAWebWindowsHybridBridgeMediaFiles.v2626",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2626",
    "WAWebWindowsHybridBridgeNativeAppState.v2626",
    "WAWebWindowsHybridBridgePictures.v2626",
    "WAWebWindowsHybridBridgePreferences.v2626",
    "WAWebWindowsHybridBridgeRateTheApp.v2626",
    "WAWebWindowsHybridBridgeRingtone.v2626",
    "WAWebWindowsHybridBridgeScalingControl.v2626",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2626",
    "WAWebWindowsHybridBridgeSharesheet.v2626",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2626",
    "WAWebWindowsHybridBridgeTouchpadFix.v2626",
    "WAWebWindowsHybridBridgeVoip.v2626",
    "WAWebWindowsHybridBridgeWam.v2626",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2626",
          ).WindowsHybridBridgeAbProps_v2626)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2626",
          ).WindowsHybridBridgeWam_v2626)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2626",
          ).WindowsHybridBridgePreferences_v2626)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2626",
          ).WindowsHybridBridgeScalingControl_v2626)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2626",
          ).WindowsHybridBridgePictures_v2626)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2626",
            ).WindowsHybridBridgeDebugFeatures_v2626)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2626",
          ).VoipWinRTBridge_v2626)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2626",
          ).WAWebWindowsHybridBridgeRateTheApp_v2626)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2626",
          ).WindowsHybridBridgeConnection_v2626)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2626",
          ).WindowsHybridBridgeTouchpadFix_v2626)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2626",
          ).WindowsHybridBridgeLinksPreview_v2626)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2626",
            ).WindowsHybridBridgeContacts_v2626)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2626",
            ).WindowsHybridBridgeContacts_v2626)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2626",
          ).WAWebWindowsHybridBridgeMediaFiles_v2626)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2626",
          ).WAWebWindowsHybridBridgeSharesheet_v2626)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2626",
          ).WindowsHybridAppActivationBridge_v2626)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2626",
          ).WindowsHybridBridgeNativeAppState_v2626)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2626",
          ).WindowsHybridBridgeSystemIntegrations_v2626)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2626",
          ).WindowsHybridBridgeBrowserExtensions_v2626)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2626",
          ).WindowsHybridBridgeSeamlessMigration_v2626)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2626",
          ).WindowsHybridBridgeMediaTranscoder_v2626)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2626",
          ).WindowsHybridBridgeAdv_v2626)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2626",
          ).WindowsHybridBridgeRingtone_v2626)(E)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2626 = e;
  },
  98,
);
