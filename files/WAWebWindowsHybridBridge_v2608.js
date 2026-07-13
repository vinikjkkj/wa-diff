__d(
  "WAWebWindowsHybridBridge.v2608",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2608",
    "WAWebWindowsHybridBridgeAbProps.v2608",
    "WAWebWindowsHybridBridgeAdv.v2608",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2608",
    "WAWebWindowsHybridBridgeConnection.v2608",
    "WAWebWindowsHybridBridgeContacts.v2608",
    "WAWebWindowsHybridBridgeDebugFeatures.v2608",
    "WAWebWindowsHybridBridgeLinksPreview.v2608",
    "WAWebWindowsHybridBridgeMediaFiles.v2608",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2608",
    "WAWebWindowsHybridBridgeNativeAppState.v2608",
    "WAWebWindowsHybridBridgePictures.v2608",
    "WAWebWindowsHybridBridgePreferences.v2608",
    "WAWebWindowsHybridBridgeRateTheApp.v2608",
    "WAWebWindowsHybridBridgeScalingControl.v2608",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2608",
    "WAWebWindowsHybridBridgeSharesheet.v2608",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2608",
    "WAWebWindowsHybridBridgeTouchpadFix.v2608",
    "WAWebWindowsHybridBridgeVoip.v2608",
    "WAWebWindowsHybridBridgeWam.v2608",
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
            "WAWebWindowsHybridBridgeAbProps.v2608",
          ).WindowsHybridBridgeAbProps_v2608)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2608",
          ).WindowsHybridBridgeWam_v2608)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2608",
          ).WindowsHybridBridgePreferences_v2608)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2608",
          ).WindowsHybridBridgeScalingControl_v2608)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2608",
          ).WindowsHybridBridgePictures_v2608)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2608",
            ).WindowsHybridBridgeDebugFeatures_v2608)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2608",
          ).VoipWinRTBridge_v2608)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2608",
          ).WAWebWindowsHybridBridgeRateTheApp_v2608)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2608",
          ).WindowsHybridBridgeConnection_v2608)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2608",
          ).WindowsHybridBridgeTouchpadFix_v2608)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2608",
          ).WindowsHybridBridgeLinksPreview_v2608)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2608",
            ).WindowsHybridBridgeContacts_v2608)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2608",
            ).WindowsHybridBridgeContacts_v2608)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2608",
          ).WAWebWindowsHybridBridgeMediaFiles_v2608)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2608",
          ).WAWebWindowsHybridBridgeSharesheet_v2608)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2608",
          ).WindowsHybridAppActivationBridge_v2608)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2608",
          ).WindowsHybridBridgeNativeAppState_v2608)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2608",
          ).WindowsHybridBridgeSystemIntegrations_v2608)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2608",
          ).WindowsHybridBridgeBrowserExtensions_v2608)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2608",
          ).WindowsHybridBridgeSeamlessMigration_v2608)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2608",
          ).WindowsHybridBridgeMediaTranscoder_v2608)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2608",
          ).WindowsHybridBridgeAdv_v2608)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2608 = e;
  },
  98,
);
