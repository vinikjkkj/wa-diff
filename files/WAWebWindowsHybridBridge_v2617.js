__d(
  "WAWebWindowsHybridBridge.v2617",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2617",
    "WAWebWindowsHybridBridgeAbProps.v2617",
    "WAWebWindowsHybridBridgeAdv.v2617",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2617",
    "WAWebWindowsHybridBridgeConnection.v2617",
    "WAWebWindowsHybridBridgeContacts.v2617",
    "WAWebWindowsHybridBridgeDebugFeatures.v2617",
    "WAWebWindowsHybridBridgeLinksPreview.v2617",
    "WAWebWindowsHybridBridgeMediaFiles.v2617",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2617",
    "WAWebWindowsHybridBridgeNativeAppState.v2617",
    "WAWebWindowsHybridBridgePictures.v2617",
    "WAWebWindowsHybridBridgePreferences.v2617",
    "WAWebWindowsHybridBridgeRateTheApp.v2617",
    "WAWebWindowsHybridBridgeRingtone.v2617",
    "WAWebWindowsHybridBridgeScalingControl.v2617",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2617",
    "WAWebWindowsHybridBridgeSharesheet.v2617",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2617",
    "WAWebWindowsHybridBridgeTouchpadFix.v2617",
    "WAWebWindowsHybridBridgeVoip.v2617",
    "WAWebWindowsHybridBridgeWam.v2617",
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
            "WAWebWindowsHybridBridgeAbProps.v2617",
          ).WindowsHybridBridgeAbProps_v2617)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2617",
          ).WindowsHybridBridgeWam_v2617)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2617",
          ).WindowsHybridBridgePreferences_v2617)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2617",
          ).WindowsHybridBridgeScalingControl_v2617)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2617",
          ).WindowsHybridBridgePictures_v2617)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2617",
            ).WindowsHybridBridgeDebugFeatures_v2617)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2617",
          ).VoipWinRTBridge_v2617)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2617",
          ).WAWebWindowsHybridBridgeRateTheApp_v2617)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2617",
          ).WindowsHybridBridgeConnection_v2617)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2617",
          ).WindowsHybridBridgeTouchpadFix_v2617)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2617",
          ).WindowsHybridBridgeLinksPreview_v2617)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2617",
            ).WindowsHybridBridgeContacts_v2617)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2617",
            ).WindowsHybridBridgeContacts_v2617)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2617",
          ).WAWebWindowsHybridBridgeMediaFiles_v2617)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2617",
          ).WAWebWindowsHybridBridgeSharesheet_v2617)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2617",
          ).WindowsHybridAppActivationBridge_v2617)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2617",
          ).WindowsHybridBridgeNativeAppState_v2617)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2617",
          ).WindowsHybridBridgeSystemIntegrations_v2617)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2617",
          ).WindowsHybridBridgeBrowserExtensions_v2617)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2617",
          ).WindowsHybridBridgeSeamlessMigration_v2617)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2617",
          ).WindowsHybridBridgeMediaTranscoder_v2617)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2617",
          ).WindowsHybridBridgeAdv_v2617)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2617",
          ).WindowsHybridBridgeRingtone_v2617)(E)),
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
    l.WindowsHybridBridge_v2617 = e;
  },
  98,
);
