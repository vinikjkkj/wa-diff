__d(
  "WAWebWindowsHybridBridge.v2621",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2621",
    "WAWebWindowsHybridBridgeAbProps.v2621",
    "WAWebWindowsHybridBridgeAdv.v2621",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2621",
    "WAWebWindowsHybridBridgeConnection.v2621",
    "WAWebWindowsHybridBridgeContacts.v2621",
    "WAWebWindowsHybridBridgeDebugFeatures.v2621",
    "WAWebWindowsHybridBridgeLinksPreview.v2621",
    "WAWebWindowsHybridBridgeMediaFiles.v2621",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2621",
    "WAWebWindowsHybridBridgeNativeAppState.v2621",
    "WAWebWindowsHybridBridgePictures.v2621",
    "WAWebWindowsHybridBridgePreferences.v2621",
    "WAWebWindowsHybridBridgeRateTheApp.v2621",
    "WAWebWindowsHybridBridgeRingtone.v2621",
    "WAWebWindowsHybridBridgeScalingControl.v2621",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2621",
    "WAWebWindowsHybridBridgeSharesheet.v2621",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2621",
    "WAWebWindowsHybridBridgeTouchpadFix.v2621",
    "WAWebWindowsHybridBridgeVoip.v2621",
    "WAWebWindowsHybridBridgeWam.v2621",
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
            "WAWebWindowsHybridBridgeAbProps.v2621",
          ).WindowsHybridBridgeAbProps_v2621)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2621",
          ).WindowsHybridBridgeWam_v2621)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2621",
          ).WindowsHybridBridgePreferences_v2621)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2621",
          ).WindowsHybridBridgeScalingControl_v2621)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2621",
          ).WindowsHybridBridgePictures_v2621)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2621",
            ).WindowsHybridBridgeDebugFeatures_v2621)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2621",
          ).VoipWinRTBridge_v2621)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2621",
          ).WAWebWindowsHybridBridgeRateTheApp_v2621)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2621",
          ).WindowsHybridBridgeConnection_v2621)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2621",
          ).WindowsHybridBridgeTouchpadFix_v2621)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2621",
          ).WindowsHybridBridgeLinksPreview_v2621)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2621",
            ).WindowsHybridBridgeContacts_v2621)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2621",
            ).WindowsHybridBridgeContacts_v2621)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2621",
          ).WAWebWindowsHybridBridgeMediaFiles_v2621)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2621",
          ).WAWebWindowsHybridBridgeSharesheet_v2621)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2621",
          ).WindowsHybridAppActivationBridge_v2621)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2621",
          ).WindowsHybridBridgeNativeAppState_v2621)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2621",
          ).WindowsHybridBridgeSystemIntegrations_v2621)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2621",
          ).WindowsHybridBridgeBrowserExtensions_v2621)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2621",
          ).WindowsHybridBridgeSeamlessMigration_v2621)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2621",
          ).WindowsHybridBridgeMediaTranscoder_v2621)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2621",
          ).WindowsHybridBridgeAdv_v2621)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2621",
          ).WindowsHybridBridgeRingtone_v2621)(E)),
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
    l.WindowsHybridBridge_v2621 = e;
  },
  98,
);
