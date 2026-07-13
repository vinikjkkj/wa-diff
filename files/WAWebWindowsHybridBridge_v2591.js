__d(
  "WAWebWindowsHybridBridge.v2591",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2591",
    "WAWebWindowsHybridBridgeAbProps.v2591",
    "WAWebWindowsHybridBridgeAdv.v2591",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2591",
    "WAWebWindowsHybridBridgeConnection.v2591",
    "WAWebWindowsHybridBridgeContacts.v2591",
    "WAWebWindowsHybridBridgeDebugFeatures.v2591",
    "WAWebWindowsHybridBridgeLinksPreview.v2591",
    "WAWebWindowsHybridBridgeMediaFiles.v2591",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2591",
    "WAWebWindowsHybridBridgeNativeAppState.v2591",
    "WAWebWindowsHybridBridgePictures.v2591",
    "WAWebWindowsHybridBridgePreferences.v2591",
    "WAWebWindowsHybridBridgeRateTheApp.v2591",
    "WAWebWindowsHybridBridgeScalingControl.v2591",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2591",
    "WAWebWindowsHybridBridgeSharesheet.v2591",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2591",
    "WAWebWindowsHybridBridgeTouchpadFix.v2591",
    "WAWebWindowsHybridBridgeVoip.v2591",
    "WAWebWindowsHybridBridgeWam.v2591",
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
            "WAWebWindowsHybridBridgeAbProps.v2591",
          ).WindowsHybridBridgeAbProps_v2591)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2591",
          ).WindowsHybridBridgeWam_v2591)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2591",
          ).WindowsHybridBridgePreferences_v2591)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2591",
          ).WindowsHybridBridgeScalingControl_v2591)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2591",
          ).WindowsHybridBridgePictures_v2591)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2591",
            ).WindowsHybridBridgeDebugFeatures_v2591)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2591",
          ).VoipWinRTBridge_v2591)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2591",
          ).WAWebWindowsHybridBridgeRateTheApp_v2591)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2591",
          ).WindowsHybridBridgeConnection_v2591)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2591",
          ).WindowsHybridBridgeTouchpadFix_v2591)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2591",
          ).WindowsHybridBridgeLinksPreview_v2591)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2591",
            ).WindowsHybridBridgeContacts_v2591)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2591",
            ).WindowsHybridBridgeContacts_v2591)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2591",
          ).WAWebWindowsHybridBridgeMediaFiles_v2591)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2591",
          ).WAWebWindowsHybridBridgeSharesheet_v2591)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2591",
          ).WindowsHybridAppActivationBridge_v2591)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2591",
          ).WindowsHybridBridgeNativeAppState_v2591)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2591",
          ).WindowsHybridBridgeSystemIntegrations_v2591)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2591",
          ).WindowsHybridBridgeBrowserExtensions_v2591)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2591",
          ).WindowsHybridBridgeSeamlessMigration_v2591)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2591",
          ).WindowsHybridBridgeMediaTranscoder_v2591)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2591",
          ).WindowsHybridBridgeAdv_v2591)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2591 = e;
  },
  98,
);
