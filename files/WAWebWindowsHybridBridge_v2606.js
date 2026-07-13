__d(
  "WAWebWindowsHybridBridge.v2606",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2606",
    "WAWebWindowsHybridBridgeAbProps.v2606",
    "WAWebWindowsHybridBridgeAdv.v2606",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2606",
    "WAWebWindowsHybridBridgeConnection.v2606",
    "WAWebWindowsHybridBridgeContacts.v2606",
    "WAWebWindowsHybridBridgeDebugFeatures.v2606",
    "WAWebWindowsHybridBridgeLinksPreview.v2606",
    "WAWebWindowsHybridBridgeMediaFiles.v2606",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2606",
    "WAWebWindowsHybridBridgeNativeAppState.v2606",
    "WAWebWindowsHybridBridgePictures.v2606",
    "WAWebWindowsHybridBridgePreferences.v2606",
    "WAWebWindowsHybridBridgeRateTheApp.v2606",
    "WAWebWindowsHybridBridgeScalingControl.v2606",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2606",
    "WAWebWindowsHybridBridgeSharesheet.v2606",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2606",
    "WAWebWindowsHybridBridgeTouchpadFix.v2606",
    "WAWebWindowsHybridBridgeVoip.v2606",
    "WAWebWindowsHybridBridgeWam.v2606",
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
            "WAWebWindowsHybridBridgeAbProps.v2606",
          ).WindowsHybridBridgeAbProps_v2606)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2606",
          ).WindowsHybridBridgeWam_v2606)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2606",
          ).WindowsHybridBridgePreferences_v2606)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2606",
          ).WindowsHybridBridgeScalingControl_v2606)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2606",
          ).WindowsHybridBridgePictures_v2606)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2606",
            ).WindowsHybridBridgeDebugFeatures_v2606)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2606",
          ).VoipWinRTBridge_v2606)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2606",
          ).WAWebWindowsHybridBridgeRateTheApp_v2606)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2606",
          ).WindowsHybridBridgeConnection_v2606)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2606",
          ).WindowsHybridBridgeTouchpadFix_v2606)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2606",
          ).WindowsHybridBridgeLinksPreview_v2606)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2606",
            ).WindowsHybridBridgeContacts_v2606)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2606",
            ).WindowsHybridBridgeContacts_v2606)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2606",
          ).WAWebWindowsHybridBridgeMediaFiles_v2606)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2606",
          ).WAWebWindowsHybridBridgeSharesheet_v2606)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2606",
          ).WindowsHybridAppActivationBridge_v2606)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2606",
          ).WindowsHybridBridgeNativeAppState_v2606)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2606",
          ).WindowsHybridBridgeSystemIntegrations_v2606)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2606",
          ).WindowsHybridBridgeBrowserExtensions_v2606)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2606",
          ).WindowsHybridBridgeSeamlessMigration_v2606)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2606",
          ).WindowsHybridBridgeMediaTranscoder_v2606)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2606",
          ).WindowsHybridBridgeAdv_v2606)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2606 = e;
  },
  98,
);
