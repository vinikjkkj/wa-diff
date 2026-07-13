__d(
  "WAWebWindowsHybridBridge.v2579",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2579",
    "WAWebWindowsHybridBridgeAbProps.v2579",
    "WAWebWindowsHybridBridgeAdv.v2579",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2579",
    "WAWebWindowsHybridBridgeConnection.v2579",
    "WAWebWindowsHybridBridgeContacts.v2579",
    "WAWebWindowsHybridBridgeDebugFeatures.v2579",
    "WAWebWindowsHybridBridgeLinksPreview.v2579",
    "WAWebWindowsHybridBridgeMediaFiles.v2579",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2579",
    "WAWebWindowsHybridBridgeNativeAppState.v2579",
    "WAWebWindowsHybridBridgePictures.v2579",
    "WAWebWindowsHybridBridgePreferences.v2579",
    "WAWebWindowsHybridBridgeRateTheApp.v2579",
    "WAWebWindowsHybridBridgeScalingControl.v2579",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2579",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2579",
    "WAWebWindowsHybridBridgeTouchpadFix.v2579",
    "WAWebWindowsHybridBridgeVoip.v2579",
    "WAWebWindowsHybridBridgeWam.v2579",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.sharesheetBridge = null),
          (this.serverEncKeySaltBridge = null),
          (e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2579",
          ).WindowsHybridBridgeAbProps_v2579)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2579",
          ).WindowsHybridBridgeWam_v2579)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2579",
          ).WindowsHybridBridgePreferences_v2579)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2579",
          ).WindowsHybridBridgeScalingControl_v2579)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2579",
          ).WindowsHybridBridgePictures_v2579)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2579",
            ).WindowsHybridBridgeDebugFeatures_v2579)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2579",
          ).VoipWinRTBridge_v2579)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2579",
          ).WAWebWindowsHybridBridgeRateTheApp_v2579)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2579",
          ).WindowsHybridBridgeConnection_v2579)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2579",
          ).WindowsHybridBridgeTouchpadFix_v2579)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2579",
          ).WindowsHybridBridgeLinksPreview_v2579)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2579",
            ).WindowsHybridBridgeContacts_v2579)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2579",
            ).WindowsHybridBridgeContacts_v2579)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2579",
          ).WAWebWindowsHybridBridgeMediaFiles_v2579)(g));
        var h = e.hostObjects.AppActivationBridge;
        h != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2579",
          ).WindowsHybridAppActivationBridge_v2579)(h));
        var y = e.hostObjects.NativeAppStateBridge,
          C = e.hostObjects.sync.NativeAppStateBridge;
        y != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2579",
          ).WindowsHybridBridgeNativeAppState_v2579)(y, C));
        var b = e.hostObjects.SystemIntegrationsBridge;
        b &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2579",
          ).WindowsHybridBridgeSystemIntegrations_v2579)(b));
        var v = e.hostObjects.BrowserExtensionsBridge;
        v &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2579",
          ).WindowsHybridBridgeBrowserExtensions_v2579)(v));
        var S = e.hostObjects.SeamlessMigrationBridge;
        S &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2579",
          ).WindowsHybridBridgeSeamlessMigration_v2579)(S));
        var R = e.hostObjects.MediaTranscodingBridge;
        (R &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2579",
          ).WindowsHybridBridgeMediaTranscoder_v2579)(e, R)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2579",
          ).WindowsHybridBridgeAdv_v2579)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2579 = e;
  },
  98,
);
