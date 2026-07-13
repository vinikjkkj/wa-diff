__d(
  "WAWebWindowsHybridBridge.v2581",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2581",
    "WAWebWindowsHybridBridgeAbProps.v2581",
    "WAWebWindowsHybridBridgeAdv.v2581",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2581",
    "WAWebWindowsHybridBridgeConnection.v2581",
    "WAWebWindowsHybridBridgeContacts.v2581",
    "WAWebWindowsHybridBridgeDebugFeatures.v2581",
    "WAWebWindowsHybridBridgeLinksPreview.v2581",
    "WAWebWindowsHybridBridgeMediaFiles.v2581",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2581",
    "WAWebWindowsHybridBridgeNativeAppState.v2581",
    "WAWebWindowsHybridBridgePictures.v2581",
    "WAWebWindowsHybridBridgePreferences.v2581",
    "WAWebWindowsHybridBridgeRateTheApp.v2581",
    "WAWebWindowsHybridBridgeScalingControl.v2581",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2581",
    "WAWebWindowsHybridBridgeSharesheet.v2581",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2581",
    "WAWebWindowsHybridBridgeTouchpadFix.v2581",
    "WAWebWindowsHybridBridgeVoip.v2581",
    "WAWebWindowsHybridBridgeWam.v2581",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.serverEncKeySaltBridge = null),
          (e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2581",
          ).WindowsHybridBridgeAbProps_v2581)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2581",
          ).WindowsHybridBridgeWam_v2581)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2581",
          ).WindowsHybridBridgePreferences_v2581)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2581",
          ).WindowsHybridBridgeScalingControl_v2581)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2581",
          ).WindowsHybridBridgePictures_v2581)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2581",
            ).WindowsHybridBridgeDebugFeatures_v2581)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2581",
          ).VoipWinRTBridge_v2581)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2581",
          ).WAWebWindowsHybridBridgeRateTheApp_v2581)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2581",
          ).WindowsHybridBridgeConnection_v2581)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2581",
          ).WindowsHybridBridgeTouchpadFix_v2581)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2581",
          ).WindowsHybridBridgeLinksPreview_v2581)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2581",
            ).WindowsHybridBridgeContacts_v2581)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2581",
            ).WindowsHybridBridgeContacts_v2581)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2581",
          ).WAWebWindowsHybridBridgeMediaFiles_v2581)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2581",
          ).WAWebWindowsHybridBridgeSharesheet_v2581)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2581",
          ).WindowsHybridAppActivationBridge_v2581)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2581",
          ).WindowsHybridBridgeNativeAppState_v2581)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2581",
          ).WindowsHybridBridgeSystemIntegrations_v2581)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2581",
          ).WindowsHybridBridgeBrowserExtensions_v2581)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2581",
          ).WindowsHybridBridgeSeamlessMigration_v2581)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2581",
          ).WindowsHybridBridgeMediaTranscoder_v2581)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2581",
          ).WindowsHybridBridgeAdv_v2581)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2581 = e;
  },
  98,
);
